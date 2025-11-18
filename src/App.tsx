import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "./components/Navigation";
import Mission from "./components/Mission";
import ProjectsPreview from "./components/ProjectsPreview";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from "./pages/TeamPage";
import JoinPage from "./pages/JoinPage";
import SponsorsPage from "./pages/SponsorsPage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import Footer from "./components/Footer";
import GridDistortion from "./components/GridHero";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <GridDistortion
              imageSrc="/RobotArm2.jpg"
              grid={30}
              mouse={0.1}
              strength={0.5}
              relaxation={0.9}
              className="custom"
            />
            <Mission />
            <ProjectsPreview onViewAll={() => setCurrentPage("projects")} />
          </>
        );
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage />;
      case "team":
        return <TeamPage />;
      case "join":
        return <JoinPage />;
      case "sponsors":
        return <SponsorsPage />;
      case "gallery":
        return <GalleryPage />;
      case "blog":
        return <BlogPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <Analytics />
    </div>
  );
}

export default App;
