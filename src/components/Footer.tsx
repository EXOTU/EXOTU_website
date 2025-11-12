import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">EX</span>
              <span className="text-blue-400">OTU</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Engineering the future of human potential through innovative powered exoskeleton technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                <Mail size={20} className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                <Github size={20} className="text-gray-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['about', 'projects', 'team'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="text-gray-400 hover:text-blue-400 transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {['join', 'sponsors'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="text-gray-400 hover:text-blue-400 transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EXOTU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
