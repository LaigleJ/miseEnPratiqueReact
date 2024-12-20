import { NavLink } from "react-router";

export function NavBar() {
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
      </nav>
    </>
  );
}
