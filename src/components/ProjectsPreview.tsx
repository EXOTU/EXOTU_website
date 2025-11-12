import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

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
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
              <span className="text-sm text-blue-400 font-medium uppercase tracking-wide">Featured Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Innovation in Motion
            </h2>
          </div>
          <button
            onClick={onViewAll}
            className="hidden md:flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all group"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className={`grid grid-cols-1 ${getGridCols()} gap-8`}>
          {displayProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 px-3 py-1 bg-blue-500/90 rounded-full">
                    <project.icon size={14} className="text-white" />
                    <span className="text-xs font-medium text-white">{project.categoryDisplay || project.category}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-blue-400 font-semibold">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onViewAll}
          className="md:hidden flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all group mx-auto mt-8"
        >
          <span>View All Projects</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
