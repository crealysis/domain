import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <--- Import Link here

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll to section (still relevant for internal page navigation)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Note: For actual page navigation via React Router,
      // you wouldn't typically call scrollToSection.
      // For links *within* the CrealysisApp page, this is fine.
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 h-20">
      <nav className="max-w-7xl mx-auto px-8 flex justify-between items-center h-full">
        <Link className="text-3xl font-semibold text-gray-900 tracking-tight"
          to="/"
        >
          Crealysis
        </Link>

        {/* Burger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Main Navigation - Hidden on small screens, visible on large screens */}
        <ul className="hidden lg:flex space-x-8">
          <li>
            {/* These are internal page scrolls, so button is fine */}
            <Link
              to="/"
            >

              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-900 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-3 transition-all duration-200"
              >
                Home
              </button>
            </Link>
          </li>
          {/* <li>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-900 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-3 transition-all duration-200"
            >
              Solutions
            </button>
          </li>
          <li>
            <Link
                to="/#features"
            >
            <button
            //   onClick={() => scrollToSection('features')}
            className="text-gray-900 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-3 transition-all duration-200"
            >
              Products
            </button>
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-900 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-3 transition-all duration-200"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-900 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-3 transition-all duration-200"
            >
              Contact
            </button>
          </li>
        </ul>


        <ul className="hidden lg:flex space-x-4">
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Get started
            </button>
          </li>
          <li>
            <Link
              to="/login" // <--- This is the path to your login page              
            >
              <button className="bg-gray-500 text-white px-6 py-3 hover:bg-gray-600 transition-colors duration-200 font-medium">
                Login / Register
              </button>
            </Link>
          </li> */}
        </ul>
      </nav>

      {/* Mobile Menu - Hidden by default, slides in when isMenuOpen is true */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-full bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        style={{ height: 'calc(100vh - 80px)' }} // Adjust height to fill remaining screen
      >
        <ul className="flex flex-col items-center py-8 space-y-6">
          <li>
            <Link
              to="/"
            >
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-900 text-xl hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </button>
            </Link>
          </li>
          {/* <li>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-900 text-xl hover:text-blue-600 transition-colors duration-200"
            >
              Solutions
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-900 text-xl hover:text-blue-600 transition-colors duration-200"
            >
              Products
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-900 text-xl hover:text-blue-600 transition-colors duration-200"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-900 text-xl hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </button>
          </li>
          <li className="pt-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
            >
              Get started
            </button>
          </li>
          <li>
            <Link
              to="/login" // <--- Path for the login page
              onClick={() => setIsMenuOpen(false)} // Close mobile menu when navigating
              className="bg-gray-500 text-white px-8 py-3 rounded-md hover:bg-gray-600 transition-colors duration-200 font-medium text-lg"
            >
              Login / Register
            </Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header2;