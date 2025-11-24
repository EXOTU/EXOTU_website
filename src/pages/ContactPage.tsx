import { Mail, Linkedin, Instagram, MapPin, Send, Building2, Users } from 'lucide-react';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../config/site';
import ScrollAnimation from '../components/ScrollAnimation';
import HoverCard from '../components/HoverCard';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <ScrollAnimation animation="fadeIn" delay={0}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Contact
              <span className="block text-primary-vibrant">EXOTU</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Have questions about partnerships, sponsorships, or general inquiries? We'd love to hear from you.
              Reach out through any of the channels below.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <ScrollAnimation animation="slideRight" delay={0}>
              <HoverCard tiltIntensity={2}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-primary-vibrant/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-vibrant/10 rounded-lg">
                  <Mail className="text-primary-vibrant" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400 mb-4">
                    For general inquiries, partnership opportunities, or sponsorship information.
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary-vibrant hover:text-primary-muted transition-colors inline-flex items-center space-x-2"
                  >
                    <span>{CONTACT_EMAIL}</span>
                    <Send size={16} />
                  </a>
                </div>
              </div>
                </div>
              </HoverCard>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={100}>
              <HoverCard tiltIntensity={2}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-primary-vibrant/50 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-vibrant/10 rounded-lg">
                      <Linkedin className="text-primary-vibrant" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                      <p className="text-gray-400 mb-4">
                        Connect with us on LinkedIn for updates, news, and professional networking.
                      </p>
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-vibrant hover:text-primary-muted transition-colors inline-flex items-center space-x-2"
                      >
                        <span>Visit our LinkedIn</span>
                        <Send size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={200}>
              <HoverCard tiltIntensity={2}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-primary-vibrant/50 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-vibrant/10 rounded-lg">
                      <Instagram className="text-primary-vibrant" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">Instagram</h3>
                      <p className="text-gray-400 mb-4">
                        Follow us on Instagram for behind-the-scenes content and project updates.
                      </p>
                      <a
                        href={SOCIAL_LINKS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-vibrant hover:text-primary-muted transition-colors inline-flex items-center space-x-2"
                      >
                        <span>Follow @exotu</span>
                        <Send size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={300}>
              <HoverCard tiltIntensity={2}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-primary-vibrant/50 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-vibrant/10 rounded-lg">
                      <MapPin className="text-primary-vibrant" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                      <p className="text-gray-400 mb-4">
                        Based at Ontario Tech University in Oshawa, Ontario, Canada.
                      </p>
                      <p className="text-gray-300">
                        Ontario Tech University<br />
                        Oshawa, ON, Canada
                      </p>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ScrollAnimation>
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            <ScrollAnimation animation="slideLeft" delay={0}>
              <HoverCard tiltIntensity={2}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-primary-vibrant/50 transition-all">
                  <div className="flex items-center space-x-3 mb-6">
                    <Building2 className="text-primary-vibrant" size={28} />
                    <h2 className="text-2xl font-bold text-white">For Sponsors</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Interested in supporting our mission? We're always looking for partners who share our vision
                    of advancing exoskeleton technology. Sponsorship opportunities include:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary-vibrant mt-1">•</span>
                      <span>Equipment and material funding</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary-vibrant mt-1">•</span>
                      <span>Research collaboration opportunities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary-vibrant mt-1">•</span>
                      <span>Brand visibility and recognition</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary-vibrant mt-1">•</span>
                      <span>Access to talented engineering students</span>
                    </li>
                  </ul>
                  <a
                    href="/EXOTU Sponsorship Package.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block px-6 py-3 bg-primary-vibrant hover:bg-primary-muted text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02]"
                  >
                    Learn More About Sponsorship
                  </a>
                </div>
              </HoverCard>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft" delay={100}>
              <HoverCard tiltIntensity={2}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-primary-vibrant/50 transition-all">
                  <div className="flex items-center space-x-3 mb-6">
                    <Users className="text-primary-vibrant" size={28} />
                    <h2 className="text-2xl font-bold text-white">For Students</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Are you an Ontario Tech University student interested in joining our team? We're always
                    looking for passionate engineers and researchers to join our mission.
                  </p>
                  <button
                    onClick={() => onNavigate('join')}
                    className="mt-4 inline-block px-6 py-3 bg-primary-vibrant hover:bg-primary-muted text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02]"
                  >
                    Apply to Join EXOTU
                  </button>
                </div>
              </HoverCard>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft" delay={200}>
              <div className="bg-gradient-to-br from-primary-vibrant/10 to-secondary-royal/10 border border-primary-vibrant/30 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Response Time</h3>
                <p className="text-gray-300 leading-relaxed">
                  We typically respond to inquiries within <span className="text-primary-vibrant font-semibold">48 hours</span>.
                  For urgent matters, please reach out via email and include "URGENT" in the subject line.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

