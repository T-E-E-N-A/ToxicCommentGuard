import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-lg font-semibold text-white drop-shadow-md">
          ToxicCommentGuard
        </div>

        {/* Right side nav links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/T-E-E-N-A/ToxicCommentGuard/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 font-medium transition"
          >
            Github
          </a>
          <a
            href="#project-info"
            className="text-white hover:text-gray-200 font-medium transition"
            >
              Project Info
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-200 font-medium transition"
          >
            About
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
