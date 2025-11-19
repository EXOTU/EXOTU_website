import { missionStatement, missionTitle, missionValues } from "../data/mission";
import ScrollAnimation from "./ScrollAnimation";
import HoverCard from "./HoverCard";

export default function Mission() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fadeIn" delay={0}>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-vibrant/10 border border-primary-vibrant/30 rounded-full mb-4">
              <span className="text-sm text-primary-vibrant font-medium uppercase tracking-wide">Mission Statement</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {missionTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
              {missionStatement}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionValues.map((value, index) => (
            <ScrollAnimation 
              key={index} 
              animation="slideUp" 
              delay={index * 100}
            >
              <HoverCard tiltIntensity={3}>
                <div className="group p-6 bg-gray-900/50 border border-gray-800 hover:border-primary-vibrant/50 rounded-xl transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary-vibrant/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-vibrant/20 transition-colors">
                    <value.icon size={24} className="text-primary-vibrant" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </HoverCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
