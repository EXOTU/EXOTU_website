import { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navigation from './components/Navigation';
import Mission from './components/Mission';
import ProjectsPreview from './components/ProjectsPreview';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import JoinPage from './pages/JoinPage';
import SponsorsPage from './pages/SponsorsPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';
import GridDistortion from './components/GridHero';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import PageTransition from './components/PageTransition';

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const previousPageRef = useRef<string | null>(null);

  // Wrapper function to track page changes
  const handlePageChange = (newPage: string) => {
    previousPageRef.current = currentPage;
    setCurrentPage(newPage);
  };

  // Enhanced smooth scroll to top when page changes
  useEffect(() => {
    // Delay scroll to allow transition to start
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <GridDistortion
              imageSrc="/RobotArm2.jpg"
              grid={30}
              mouse={0.12}
              strength={0.6}
              relaxation={0.92}
              className="custom"
            />
            <Mission />
            <ProjectsPreview onViewAll={() => handlePageChange("projects")} />
          </>
        );
      case 'about':
        return <AboutPage onNavigate={handlePageChange} />;
      case 'projects':
        return <ProjectsPage />;
      case 'team':
        return <TeamPage onNavigate={handlePageChange} />;
      case 'join':
        return <JoinPage />;
      case "sponsors":
        return <SponsorsPage onNavigate={handlePageChange} />;
      case "gallery":
        return <GalleryPage />;
      case "blog":
        return <BlogPage />;
      case "contact":
        return <ContactPage onNavigate={handlePageChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <StructuredData />
      <ScrollProgress />
      <Navigation currentPage={currentPage} onNavigate={handlePageChange} />
      <main>
        <PageTransition currentPage={currentPage} previousPage={previousPageRef.current}>
          {renderPage()}
        </PageTransition>
      </main>
      <Footer onNavigate={handlePageChange} />
      <BackToTop />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
