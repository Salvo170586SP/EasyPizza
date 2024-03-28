import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const isOpenNav = () => {
    setOpenNav((openNav) => !openNav);
  };

  return (
    <>
      <header className="fixed w-full text-gray-700 bg-white z-20 shadow">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <Link
              to="/"
              className="text-lg flex items-center font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              <img
                width={60}
                src="https://previews.123rf.com/images/andyadi/andyadi1806/andyadi180600264/103255512-pizza-vector-icon-logo-design-for-restaurant-and-cafe-bistro.jpg"
                alt=""
              />
              EasyPizza
            </Link>
            <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
              onClick={isOpenNav}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {openNav == false ? (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                )}
              </svg>
            </button>
          </div>
          <nav
            className={`${
              openNav ? "flex-col flex-grow" : "hidden"
            }  pb-4 md:pb-0  md:flex md:justify-end md:flex-row `}
          >
            <div className={` flex flex-col  md:justify-end md:flex-row `}>
              <Link
                className="inline-block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-yellow-400 focus:bg-yellow-400 focus-visible:outline-none"
                to="/about"
              >
                Chi siamo
              </Link>
              <Link
                className="inline-block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-yellow-400 focus:bg-yellow-400 focus-visible:outline-none"
                to="/contact"
              >
                Prenota
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
