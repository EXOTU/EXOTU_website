import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: 'Breakthrough in Actuator Efficiency: 40% Power Reduction',
      author: 'Dr. Michael Park',
      date: 'March 15, 2024',
      category: 'Research',
      excerpt: 'Our team has achieved a significant milestone in actuator design, reducing power consumption by 40% while maintaining force output. This breakthrough could extend battery life in portable exoskeleton systems.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read',
    },
    {
      title: 'Competition Update: First Place at RoboExpo 2024',
      author: 'Sarah Chen',
      date: 'March 10, 2024',
      category: 'Competition',
      excerpt: 'EXOTU took first place in the powered exoskeleton category at RoboExpo 2024, competing against 15 international teams. Our APEX-1 system demonstrated superior load capacity and precision control.',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
    },
    {
      title: 'Neural Control Interface: Machine Learning Meets Biomechanics',
      author: 'Isabella Garcia',
      date: 'February 28, 2024',
      category: 'AI/ML',
      excerpt: 'Our latest research combines EMG signal processing with advanced neural networks to create an intuitive control interface. Early testing shows 94% accuracy in motion prediction.',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '12 min read',
    },
    {
      title: 'Materials Science Innovation: Lightweight Carbon Fiber Composite',
      author: 'Daniel White',
      date: 'February 15, 2024',
      category: 'Materials',
      excerpt: 'Introducing our custom carbon fiber composite that reduces frame weight by 30% while increasing structural integrity. This material will be integrated into all future exoskeleton designs.',
      image: 'https://images.pexels.com/photos/7551666/pexels-photo-7551666.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '10 min read',
    },
  ];

  const categories = ['All', 'Research', 'Competition', 'AI/ML', 'Materials', 'Medical', 'Open Source'];

  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="text-sm text-blue-400 font-medium uppercase tracking-wide">Research Updates</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Latest Insights &
            <span className="block text-blue-400">Technical Articles</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Stay updated with our latest research findings, competition results, and technical developments
            in powered exoskeleton technology.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-900 border border-gray-800 hover:border-blue-500/50 text-gray-300 hover:text-white rounded-lg transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-xl overflow-hidden transition-all hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/90 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <button className="flex items-center space-x-2 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
