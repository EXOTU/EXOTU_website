import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import AnimatedProgressBar from './AnimatedProgressBar';
import ScrollAnimation from './ScrollAnimation';
import HoverCard from './HoverCard';
import LazyImage from './LazyImage';

interface ProjectsPreviewProps {
  onViewAll: () => void;
}

export default function ProjectsPreview({ onViewAll }: ProjectsPreviewProps) {
  // Limit to max 4 projects for preview
  const displayProjects = projects.slice(0, 4);
  const projectCount = displayProjects.length;

  // Dynamic grid columns based on project count
  const getGridCols = () => {
    if (projectCount === 1) return 'md:grid-cols-1';
    if (projectCount === 2) return 'md:grid-cols-2';
    if (projectCount === 3) return 'md:grid-cols-3';
    return 'md:grid-cols-4';
  };

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fadeIn" delay={0}>
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="inline-block px-4 py-1 bg-primary-vibrant/10 border border-primary-vibrant/30 rounded-full mb-4">
                <span className="text-sm text-primary-vibrant font-medium uppercase tracking-wide">Featured Projects</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Innovation in Motion
              </h2>
            </div>
            <button
              onClick={onViewAll}
              className="hidden md:flex items-center space-x-2 px-6 py-3 bg-primary-vibrant hover:bg-primary-muted text-white font-semibold rounded-lg transition-all group"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollAnimation>

        <div className={`grid grid-cols-1 ${getGridCols()} gap-8`}>
          {displayProjects.map((project, index) => (
            <ScrollAnimation 
              key={index} 
              animation="slideUp" 
              delay={index * 150}
            >
              <HoverCard tiltIntensity={4}>
                <div className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-primary-vibrant/50 transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <LazyImage
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-2 px-3 py-1 bg-primary-vibrant/90 rounded-full">
                        <project.icon size={14} className="text-white" />
                        <span className="text-xs font-medium text-white">{project.categoryDisplay || project.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-vibrant transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <AnimatedProgressBar progress={project.progress} label="Progress" />
                  </div>
                </div>
              </HoverCard>
            </ScrollAnimation>
          ))}
        </div>

        <button
          onClick={onViewAll}
          className="md:hidden flex items-center space-x-2 px-6 py-3 bg-primary-vibrant hover:bg-primary-muted text-white font-semibold rounded-lg transition-all group mx-auto mt-8"
        >
          <span>View All Projects</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
