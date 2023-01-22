import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../images/Small.png'
import Refubook from '../../images/Refubook.png'

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-[100%] text-refubook-blue px-2 sm:px-4 py-2.5 rounded m-3">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="flex justify-between">
          <NavLink to="/" className="flex items-center">
            <img className="px-4 justify-self-end" src={Logo} alt='logo'/>
                <img className="p-0 justify-self-start" src={Refubook} alt='logo'/>
          </NavLink>
        </div>

        <div>
          <button
            onClick={() => setNavbar(!navbar)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-refubook-blue"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            </svg>
          </button>
          <div className="hidden md:block md:w-auto">
            <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 ">
              <li>
              <NavLink to="/" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Home</NavLink>
              </li>
              <li>
              <NavLink to="/about" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>About</NavLink>
              </li>
              <li>
              <NavLink to="/blog" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Blog</NavLink>
              </li>
              <li>
              <NavLink to="/contact" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Contact</NavLink>
              </li>
              <li>
              <NavLink to="/signup"><button type="submit" className="button sm:w-28 md:w-32 text-center text-white py-2 px-6 rounded-full bg-sky-600 hover:text-sky-600 hover:bg-white hover:border-sky-600 border">Sign Up</button></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {navbar ? (
        <div className="w-full md:hidden md:w-auto">
            <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
              <NavLink to="/" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Home</NavLink>
              </li>
              <li>
              <NavLink to="/about" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>About</NavLink>
              </li>
              <li>
              <NavLink to="/blog" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Blog</NavLink>
              </li>
              <li>
              <NavLink to="/contact" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Contact</NavLink>
              </li>
              <li>
              <NavLink to="/signup" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Sign Up</NavLink>
              </li>
            </ul>
        </div>
      ) : (
        ''
      )}
    </nav>
  );
}
export default NavBar;
