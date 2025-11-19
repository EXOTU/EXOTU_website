import { executiveLeadership, departments } from '../data/team';

interface TeamPageProps {
  onNavigate: (page: string) => void;
}

export default function TeamPage({ onNavigate }: TeamPageProps) {

  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Meet the Minds Behind
            <span className="block text-primary-vibrant">the Innovation</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            A diverse team of passionate engineers, researchers, and innovators working together
            to push the boundaries of powered exoskeleton technology.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Executive Leadership Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-primary-vibrant pl-4">
            {executiveLeadership.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveLeadership.members.map((member, memberIndex) => (
              <div
                key={memberIndex}
                className="group bg-gray-900/50 border border-gray-800 hover:border-primary-vibrant/50 rounded-xl p-6 transition-all hover:-translate-y-2"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto group-hover:scale-110 transition-transform border-2 border-gray-700 group-hover:border-primary-vibrant">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-bold text-white text-center mb-1">
                  {member.role}
                </p>
                {member.engineeringTitle && (
                  <p className="text-sm font-bold text-white text-center underline">
                    {member.engineeringTitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Departments Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-primary-vibrant pl-4">
            Departments
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((department, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 hover:border-primary-vibrant/50 rounded-xl p-6 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {department.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {department.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-primary-vibrant/10 to-secondary-royal/10 border border-primary-vibrant/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented, passionate individuals to join our mission.
            Whether you're a student, researcher, or industry professional, there's a place for you at EXOTU.
          </p>
          <button 
            onClick={() => onNavigate('join')}
            className="px-8 py-4 bg-primary-vibrant hover:bg-primary-muted text-white font-semibold rounded-lg transition-all"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
