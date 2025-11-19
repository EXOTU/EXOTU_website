import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface GridDistortionProps {
  grid?: number;
  mouse?: number;
  strength?: number;
  relaxation?: number;
  imageSrc: string;
  className?: string;
}

const vertexShader = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;
uniform vec4 resolution;
uniform vec2 uTextureOffset;
uniform vec2 uTextureScale;
uniform float uIsMobile;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec4 offset = texture2D(uDataTexture, vUv);
  
  // Enhanced distortion with more fluid, organic feel (no wave)
  float distortionStrength = 0.03;
  vec2 distortion = uv - distortionStrength * offset.rg;
  
  // Apply mobile adjustments if needed
  vec2 finalUv = uIsMobile > 0.5 
    ? distortion * uTextureScale + uTextureOffset 
    : distortion;
  
  // Sample the texture
  vec4 color = texture2D(uTexture, finalUv);
  
  // Subtle chromatic aberration for depth (no color tinting)
  float chromaStrength = length(offset.rg) * 0.003;
  vec2 chromaDir = length(offset.rg) > 0.001 ? normalize(offset.rg) : vec2(1.0, 0.0);
  vec2 chromaOffset = chromaDir * chromaStrength;
  color.r = texture2D(uTexture, finalUv + chromaOffset).r;
  color.b = texture2D(uTexture, finalUv - chromaOffset).b;
  
  // Enhance contrast and saturation slightly (neutral, no purple tint)
  color.rgb = pow(color.rgb, vec3(0.95)); // Slight contrast boost
  float luminance = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  color.rgb = mix(vec3(luminance), color.rgb, 1.1); // Slight saturation boost
  
  gl_FragColor = color;
}
`;

const SUBTITLE_TEXT = "Ontario Tech University Exoskeleton Design Team";

const GridDistortion: React.FC<GridDistortionProps> = ({
  grid = 15,
  mouse = 0.1,
  strength = 0.15,
  relaxation = 0.9,
  imageSrc,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const planeRef = useRef<THREE.Mesh | null>(null);
  const imageAspectRef = useRef<number>(1);
  const animationIdRef = useRef<number | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  
  // Typing effect state
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    // Use device pixel ratio for better quality, but cap at 2 for performance
    // On mobile, use full pixel ratio for better image quality
    const isMobile = window.innerWidth < 768;
    renderer.setPixelRatio(isMobile ? Math.min(window.devicePixelRatio, 2.5) : Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const camera = new THREE.OrthographicCamera(0, 0, 0, 0, -1000, 1000);
    camera.position.z = 2;
    cameraRef.current = camera;

    const uniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector4() },
      uTexture: { value: null as THREE.Texture | null },
      uDataTexture: { value: null as THREE.DataTexture | null },
      uTextureOffset: { value: new THREE.Vector2(0.0, 0.0) }, // Offset to focus on arm (center by default)
      uTextureScale: { value: new THREE.Vector2(1.0, 1.0) }, // Scale to zoom in on important part
      uIsMobile: { value: 0.0 }, // 0 for desktop, 1 for mobile
    };

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(imageSrc, (texture) => {
      // Use better filtering to reduce compression artifacts
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = true;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      // Set higher anisotropy for better quality on mobile
      if (renderer.capabilities) {
        texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4);
      } else {
        texture.anisotropy = 4;
      }
      imageAspectRef.current = texture.image.width / texture.image.height;
      uniforms.uTexture.value = texture;
      handleResize();
    });

    const size = grid;
    const data = new Float32Array(4 * size * size);
    for (let i = 0; i < size * size; i++) {
      data[i * 4] = Math.random() * 255 - 125;
      data[i * 4 + 1] = Math.random() * 255 - 125;
    }

    const dataTexture = new THREE.DataTexture(
      data,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    dataTexture.needsUpdate = true;
    uniforms.uDataTexture.value = dataTexture;

    const material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(1, 1, size - 1, size - 1);
    const plane = new THREE.Mesh(geometry, material);
    planeRef.current = plane;
    scene.add(plane);

    const handleResize = () => {
      if (!container || !renderer || !camera || !plane) return;

      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) return;

      const containerAspect = width / height;
      const imageAspect = imageAspectRef.current;

      renderer.setSize(width, height);

      // Only apply mobile-specific adjustments for screens < 768px
      const isMobile = width < 768;
      uniforms.uIsMobile.value = isMobile ? 1.0 : 0.0;
      
      if (isMobile) {
        // Mobile: slight zoom and offset to focus on arm
        const zoomFactor = 1.1;
        if (imageAspect > containerAspect) {
          plane.scale.set(imageAspect / containerAspect * zoomFactor, 1 * zoomFactor, 1);
          plane.position.x = -0.05;
          uniforms.uTextureOffset.value.set(0.1, 0.0);
          uniforms.uTextureScale.value.set(zoomFactor, 1.0);
        } else {
          plane.scale.set(1 * zoomFactor, containerAspect / imageAspect * zoomFactor, 1);
          plane.position.y = 0.05;
          uniforms.uTextureOffset.value.set(0.0, -0.1);
          uniforms.uTextureScale.value.set(1.0, zoomFactor);
        }
      } else {
        // Desktop: restore original behavior exactly
        plane.scale.set(containerAspect, 1, 1);
        plane.position.x = 0;
        plane.position.y = 0;
        uniforms.uTextureOffset.value.set(0.0, 0.0);
        uniforms.uTextureScale.value.set(1.0, 1.0);
      }

      const frustumHeight = 1;
      const frustumWidth = frustumHeight * containerAspect;
      camera.left = -frustumWidth / 2;
      camera.right = frustumWidth / 2;
      camera.top = frustumHeight / 2;
      camera.bottom = -frustumHeight / 2;
      camera.updateProjectionMatrix();

      uniforms.resolution.value.set(width, height, 1, 1);
    };

    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(container);
      resizeObserverRef.current = resizeObserver;
    } else {
      window.addEventListener("resize", handleResize);
    }

    const mouseState = {
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,
      vX: 0,
      vY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      mouseState.vX = x - mouseState.prevX;
      mouseState.vY = y - mouseState.prevY;
      Object.assign(mouseState, { x, y, prevX: x, prevY: y });
    };

    const handleMouseLeave = () => {
      if (dataTexture) {
        dataTexture.needsUpdate = true;
      }
      Object.assign(mouseState, {
        x: 0,
        y: 0,
        prevX: 0,
        prevY: 0,
        vX: 0,
        vY: 0,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    handleResize();

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (!renderer || !scene || !camera) return;

      uniforms.time.value += 0.05;

      if (!(dataTexture.image.data instanceof Float32Array)) {
        console.error("dataTexture.image.data is not a Float32Array");
        return;
      }
      const data: Float32Array = dataTexture.image.data;
      for (let i = 0; i < size * size; i++) {
        data[i * 4] *= relaxation;
        data[i * 4 + 1] *= relaxation;
      }

      const gridMouseX = size * mouseState.x;
      const gridMouseY = size * mouseState.y;
      const maxDist = size * mouse;

      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const distSq =
            Math.pow(gridMouseX - i, 2) + Math.pow(gridMouseY - j, 2);
          if (distSq < maxDist * maxDist) {
            const index = 4 * (i + size * j);
            const power = Math.min(maxDist / Math.sqrt(distSq), 10);
            data[index] += strength * 100 * mouseState.vX * power;
            data[index + 1] -= strength * 100 * mouseState.vY * power;
          }
        }
      }

      dataTexture.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      } else {
        window.removeEventListener("resize", handleResize);
      }

      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);

      if (renderer) {
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }

      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (dataTexture) dataTexture.dispose();
      if (uniforms.uTexture.value) uniforms.uTexture.value.dispose();

      sceneRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
      planeRef.current = null;
    };
  }, [grid, mouse, strength, relaxation, imageSrc]);

  // Typing effect for subtitle
  useEffect(() => {
    setIsTyping(true);
    setDisplayedText("");
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < SUBTITLE_TEXT.length) {
        setDisplayedText(SUBTITLE_TEXT.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50); // Adjust speed here (lower = faster)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden
              min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh]
              aspect-[2/3] sm:aspect-[16/10] md:aspect-[16/9]
              w-full
              ${className}
              shadow-[0_40px_120px_rgba(0,0,0,0.7)]`}
    >
      {/* --- Background Overlays --- */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-0" />
      {/* Enhanced radial gradient with purple accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,182,245,0.12)_0%,rgba(94,56,220,0.08)_30%,transparent_60%)] z-0" />
      {/* Secondary radial for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(94,56,220,0.06)_0%,transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[url('/grain-texture.png')] opacity-[0.08] mix-blend-overlay z-0" />
      {/* Subtle scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(200,182,245,0.02)_50%)] bg-[length:100%_4px] opacity-30 z-0" />

      {/* --- Enhanced Halo Glow with purple accent --- */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%]
                  w-[70%] aspect-square rounded-full blur-3xl opacity-40
                  bg-[radial-gradient(circle,rgba(94,56,220,0.3)_0%,rgba(94,56,220,0.1)_40%,transparent_70%)]
                  animate-pulse-slow z-0"
      />
      {/* Secondary glow for depth */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%]
                  w-[50%] aspect-square rounded-full blur-2xl opacity-20
                  bg-[#c8b6f5]/20 z-0"
      />

      {/* --- Main Title --- */}
      <h1
        className="absolute inset-0 flex items-center justify-center 
               text-[#c8b6f5] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-orbitron font-extrabold tracking-tight z-30
               px-4"
      >
        EXOTU
      </h1>
      {/* bottom-16 sm:bottom-2 md:bottom-4 lg:bottom-40 */}
      {/* --- Subtitle Chip --- */}
      <div className="absolute bottom-[10%] sm:bottom-[13%] lg:bottom-[25%] left-1/2 -translate-x-1/2 z-30 w-[90%] sm:w-auto sm:min-w-[350px] text-center px-4">
        <span
          className="inline-flex items-center gap-2
                 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full
                 text-[#c8b6f5] text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold font-orbitron
                 bg-white/10 backdrop-blur-md ring-1 ring-white/20
                 shadow-[0_8px_25px_rgba(0,0,0,0.4)]
                 hover:bg-white/15 transition-all duration-300
                 break-words"
        >
          {displayedText}
          {isTyping && <span className="animate-pulse">|</span>}
        </span>
      </div>

      {/* --- Enhanced Ambient gradient reflection bottom --- */}
      <div
        className="absolute bottom-0 inset-x-0 h-[50%]
                  bg-gradient-to-t from-black via-black/90 via-black/60 via-black/30 to-transparent z-10"
      />
      {/* Purple accent gradient at bottom for seamless transition */}
      <div
        className="absolute bottom-0 inset-x-0 h-[20%]
                  bg-gradient-to-t from-black via-[#5e38dc]/5 to-transparent z-10"
      />
    </div>
  );
};

export default GridDistortion;
