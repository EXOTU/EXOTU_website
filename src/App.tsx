import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ProjectsPreview from './components/ProjectsPreview';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import JoinPage from './pages/JoinPage';
import SponsorsPage from './pages/SponsorsPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Mission />
            <ProjectsPreview onViewAll={() => setCurrentPage('projects')} />
          </>
        );
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage />;
      case 'team':
        return <TeamPage />;
      case 'join':
        return <JoinPage />;
      case 'sponsors':
        return <SponsorsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'blog':
        return <BlogPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <StructuredData />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
