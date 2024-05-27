import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex items-center">
         
      <div className="dropdown md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  px-1 text-lg">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/explore"}>Explore</Link>
          </li>
          <li>
            <Link to={"/support"}>Support</Link>
          </li>
          <li>
            <Link to={"/dashboardlayout/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="mr-4">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Smart Product
        </Link>
      </div>
      <div className="md:flex hidden ">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/explore"}>Explore</Link>
          </li>
          <li>
            <Link to={"/support"}>Support</Link>
          </li>
          <li>
            <Link to={"/dashboardlayout/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
