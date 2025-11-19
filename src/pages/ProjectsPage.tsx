import { projects } from '../data/projects';
import AnimatedProgressBar from '../components/AnimatedProgressBar';

export default function ProjectsPage() {

  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Building Tomorrow's Technology
            <span className="block text-primary-vibrant">Today</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            From concept to competition, explore our cutting-edge exoskeleton projects
            and research initiatives pushing the boundaries of human augmentation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 border border-gray-800 hover:border-primary-vibrant/50 rounded-2xl overflow-hidden transition-all"
            >
              <div className="grid md:grid-cols-5 gap-8 p-8">
                <div className="md:col-span-2">
                  <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2 px-3 py-1 bg-primary-vibrant/90 rounded-full">
                      <project.icon size={16} className="text-white" />
                      <span className="text-sm font-medium text-white">{project.category}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary-vibrant transition-colors">
                        {project.name}
                      </h3>
                      <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium rounded-full whitespace-nowrap ml-4">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {(project.specs || project.team) && (
                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        {project.specs && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                              Technical Specs
                            </h4>
                            <ul className="space-y-1">
                              {project.specs.map((spec, i) => (
                                <li key={i} className="text-sm text-gray-300">
                                  • {spec}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.team && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                              Team Disciplines
                            </h4>
                            <p className="text-sm text-gray-300">{project.team}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <AnimatedProgressBar progress={project.progress} label="Development Progress" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
