import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/globe.png";

const NavBar = () => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-slate-800 bg-orange-200 rounded-full px-4 py-2 font-medium shadow-sm"
      : "text-slate-700 hover:bg-orange-100 hover:text-slate-800 rounded-full px-4 py-2 transition";

  return (
    <nav className="bg-amber-200 border-b border-orange-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo + Brand */}
          <Link className="flex items-center gap-3" to="/">
            <img className="h-10 w-auto" src={logo} alt="Explorer Globe Logo" />
            <span className="hidden md:block text-slate-800 text-2xl font-semibold tracking-wide">
              Curious Explorer
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-3 md:space-x-4">
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
            <NavLink to="/explore" className={linkStyle}>
              Countries
            </NavLink>
            <NavLink to="/details" className={linkStyle}>
              Details
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
