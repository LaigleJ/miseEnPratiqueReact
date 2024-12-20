import { NavLink } from "react-router";
import { useState } from "react";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Menu de navigation */}
          <div className="space-x-6 hidden md:flex">
            <NavLink
              className="text-white hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105"
              to="/"
            >
              Accueil
            </NavLink>
            <NavLink
              className="text-white hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105"
              to="/about"
            >
              À propos
            </NavLink>
          </div>

          {/* Icone mobile */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 rounded-lg shadow-2xl p-6">
            <NavLink
              className="block text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 p-3 rounded-lg mb-3 hover:bg-purple-800"
              to="/"
            >
              Accueil
            </NavLink>
            <NavLink
              className="block text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 p-3 rounded-lg mb-3 hover:bg-purple-800"
              to="/about"
            >
              À propos
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}
