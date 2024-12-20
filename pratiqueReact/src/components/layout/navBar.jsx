import { NavLink } from "react-router";
import { useState } from "react";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Menu de navigation */}
          <div className="space-x-6 hidden md:flex">
            <NavLink
              className="text-white hover:text-red-500 transition-colors duration-300"
              to="/"
            >
              Accueil
            </NavLink>
            <NavLink
              className="text-white hover:text-red-500 transition-colors duration-300"
              to="/about"
            >
              À propos
            </NavLink>
          </div>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-red-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
          {isMenuOpen && (
            <div className="mt-4">
              <NavLink
                className="block text-white hover:text-red-500 transition-colors duration-300"
                to="/"
              >
                Accueil
              </NavLink>
              <NavLink
                className="block text-white hover:text-red-500 transition-colors duration-300"
                to="/about"
              >
                À propos
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
