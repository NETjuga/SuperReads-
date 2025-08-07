import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectShowcase = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground font-alliance px-4 sm:px-8 py-12 transition-opacity duration-1000 ${
      visible ? "opacity-100" : "opacity-0"
    }`}>
      {/* Navigation */}
      <nav className="mb-8">
        <ul className="flex space-x-4 text-sm sm:text-base">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="text-center mb-16 animate-tactical-fade-in">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <img
            src="/SuperReads-/images/Chapterlylogo.png"
            alt="Chapterly Logo"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient-primary animate-intelligence-glow">
            Chapterly
          </h1>
        </div>
        <button className="tactical-button flex items-center justify-center space-x-2 mt-6">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5Z" />
          </svg>
          <div className="text-left">
            <div className="text-xs">Download on</div>
            <div className="text-sm font-semibold">App Store</div>
          </div>
        </button>
      </section>

      {/* Features */}
      <section className="app-showcase mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-tactical-slide-up">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold">Your Personal Library</h2>
            <p className="text-muted-foreground">
              Keep track of all your books in one place. Organize your reading list, mark favorites,
              and set reading goals with our intuitive interface.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg animate-tactical-slide-right">
            <img src="/SuperReads-/images/app-screen-1.jpg" alt="App Screen" className="w-full" />
          </div>
        </div>
      </section>

      {/* Notifications Visual */}
      <div className="text-center my-10">
        <img
          src="/SuperReads-/images/notiIMAGE.png"
          alt="Chapterly Notifications"
          className="mx-auto max-w-sm rounded-lg shadow-md animate-tactical-fade-in"
        />
      </div>

      {/* About Section */}
      <div className="about-section max-w-4xl mx-auto px-4 sm:px-0 animate-tactical-slide-up">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-accent text-center">About <span>Chapterly</span></h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Project Overview</h3>
            <p className="text-muted-foreground">
              Chapterly is a modern all-in-one book/library application designed to enhance your reading experience...
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Personal Library Management</li>
              <li>Reading Progress Tracking</li>
              <li>Notes for insights on different books</li>
              <li>Reading Statistics and Insights</li>
              <li>Book Recommendations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Technology Stack</h3>
            <p className="text-muted-foreground">
              Built using Swift for iOS, with a clean and minimalist interface that prioritizes user experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Future Development</h3>
            <p className="text-muted-foreground">
              Upcoming features include social sharing, reading challenges, integration with e-readers, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;

