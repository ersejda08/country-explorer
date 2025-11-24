import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/react-logo.png";

const NavBar = () => {
  const linkStyle = ({ isActive }) =>
    isActive == true
      ? "text-white bg-gray-600 hover:bg-gray-400 rounded-md px-3 py-2"
      : "hover:text-white hover:bg-gray-600 rounded-md px-3 py-2";

  return (
    <div>
      <nav className="bg-blue-400 border-b border-blue-300">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* <!-- Logo --> */}
              <Link className="flex shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto" src={logo} alt="Explorer" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  Curious Explorer
                </span>
              </Link>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={linkStyle}>
                    Home
                  </NavLink>
                  <NavLink to="/countries" className={linkStyle}>
                    Countries
                  </NavLink>
                  <NavLink to=" /details" className={linkStyle}>
                    Details
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
