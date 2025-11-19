import { useState } from 'react';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      category: 'Competition',
      images: [
        'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    {
      category: 'Lab Work',
      images: [
        'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    {
      category: 'Testing',
      images: [
        'https://images.pexels.com/photos/7551666/pexels-photo-7551666.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    {
      category: 'Team Events',
      images: [
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-primary-vibrant/10 border border-primary-vibrant/30 rounded-full mb-6">
            <span className="text-sm text-primary-vibrant font-medium uppercase tracking-wide">Gallery</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Capturing Innovation
            <span className="block text-primary-vibrant">in Action</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Explore photos and highlights from our projects, competitions, lab work, and team events.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {galleryItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-primary-vibrant pl-4">
              {section.category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image, imageIndex) => (
                <button
                  key={imageIndex}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-gray-800 hover:border-primary-vibrant/50 transition-all"
                >
                  <img
                    src={image}
                    alt={`${section.category} ${imageIndex + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-r from-primary-vibrant/10 to-secondary-royal/10 border border-primary-vibrant/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Video Highlights</h2>
          <p className="text-xl text-gray-300 mb-8">
            Check out our competition performances and project demonstrations
          </p>
          <div className="aspect-video max-w-4xl mx-auto bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-center">
            <p className="text-gray-500">Video player placeholder</p>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} className="text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
