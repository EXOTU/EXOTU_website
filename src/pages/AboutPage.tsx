import { Rocket, Users, Trophy, BookOpen } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import HoverCard from '../components/HoverCard';
import LazyImage from '../components/LazyImage';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <ScrollAnimation animation="fadeIn" delay={0}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Pioneering the Next Generation of
              <span className="block text-primary-vibrant">Human Augmentation</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Founded by passionate engineers and researchers, EXOTU is a university-based organization
              dedicated to advancing powered exoskeleton technology through hands-on innovation.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <ScrollAnimation animation="slideRight" delay={0}>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  EXOTU was established in 2025 by four engineering students who shared a vision: to make powered exoskeletons accessible, functional, and impactful.
                </p>
                <p>
                  What started as an idea quickly evolved into a thriving research organization with over 60 active members spanning multiple engineering disciplines. Today, we compete nationally and collaborate with industry leaders.
                </p>
                <p>
                  Driven by curiosity, compassion, and a commitment to real-world impact, EXOTU represents the spirit of innovation at Ontario Tech. Our mission goes beyond building a machine, we're building a community of students dedicated to pushing boundaries, learning by doing, and shaping a future where engineering meets purpose.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideLeft" delay={100}>
            <div className="relative">
              <LazyImage
                src="/images/gallery/crowd-5.JPG"
                alt="Team working"
                className="rounded-xl w-full h-full object-cover border border-gray-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
            </div>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Rocket, title: 'Innovation First', description: 'Pushing boundaries with cutting-edge technology' },
            { icon: Users, title: 'Collaborative Spirit', description: 'Diverse teams working toward shared goals' },
            { icon: Trophy, title: 'Competition Excellence', description: 'Proven track record in international events' },
            { icon: BookOpen, title: 'Research-Driven', description: 'Academic rigor meets practical engineering' },
          ].map((item, index) => (
            <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
              <HoverCard tiltIntensity={3}>
                <div className="text-center p-6 bg-gray-900/50 border border-gray-800 hover:border-primary-vibrant/50 rounded-xl transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary-vibrant/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary-vibrant/20 transition-colors">
                    <item.icon size={28} className="text-primary-vibrant" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </HoverCard>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fadeIn" delay={0}>
          <div className="bg-gradient-to-r from-primary-vibrant/10 to-secondary-royal/10 border border-primary-vibrant/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate students and industry partners
              to help us build the future of human augmentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('join')}
                className="px-8 py-4 bg-primary-vibrant hover:bg-primary-muted text-white font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Become a Member
              </button>
              <button 
                onClick={() => onNavigate('sponsors')}
                className="px-8 py-4 bg-transparent border-2 border-primary-vibrant hover:bg-primary-vibrant/10 text-primary-vibrant font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
