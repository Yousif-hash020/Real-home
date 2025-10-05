import { useState, useEffect } from 'react';
import { RiMenuFill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import SubmitButton from "./SubmitButton";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSidebarDropdown, setOpenSidebarDropdown] = useState(null);

  useEffect(() => {
    if (!sidebarOpen) setOpenSidebarDropdown(null);
  }, [sidebarOpen]);

  const navLinks = [
    {
      name: "Real Estate", path: "/ListLayout",
      subLinks: [
        { name: "List Layout", path: "/ListLayout" },
        { name: "Agents", path: "/Agent" },
        { name: "Agencies", path: "/Agent" },
      ]
    },
    {
      name: "Property", path: "/",
      subLinks: [
        { name: "Default Layout", path: "/" },
        { name: "Thumbs Gallery", path: "/" },
        { name: "Full Width Layout", path: "/" },

      ]
    },
    {
      name: "Gallery", path: "/",
      subLinks: [
        { name: "Gallery 2 Columns", path: "/" },
      ]
    },
    {
      name: "Pages", path: "/",
      subLinks: [
        { name: "Properties ", path: "/ListLayout" },
        { name: "Agents ", path: "/Agent" },
        { name: "For Sale", path: "/ListLayout" },
      ]
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative z-[10] lg:pt-5 pt-3 w-full  lg:bg-[#ffffff00] bg-black text-white">

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed top-0 right-0 w-[80%] h-full bg-white text-black shadow-lg z-50 p-5 overflow-y-auto">
          <div className="flex justify-end">
            <button onClick={() => setSidebarOpen(false)}>
              <IoClose className="w-8 h-8 text-black" />
            </button>
          </div>

          <ul className="mt-6 space-y-4">
            {navLinks.map((link) => {
              const hasDropdown = link.subLinks;
              const isOpen = openSidebarDropdown === link.name;

              return (
                <li key={link.name}>
                  <div className="flex justify-between items-center">
                    <Link to={link.path} className="text-[16px] font-medium">
                      {link.name}
                    </Link>
                    {hasDropdown && (
                      <button onClick={() => setOpenSidebarDropdown(isOpen ? null : link.name)}>
                        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                      </button>
                    )}
                  </div>

                  {hasDropdown && isOpen && (
                    <ul className="mt-2 pl-3 space-y-2">
                      {link.subLinks.map((sublink) => (
                        <li key={sublink.name}>
                          <Link to={sublink.path} className="text-[14px] text-gray-600 hover:text-[#0054A6]">
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Main Navigation */}
      <div className="lg:px-0 max-w-7xl mx-8 text-white flex justify-between items-center">
        {/* Mobile: only logo + hamburger */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          {/* Logo */}
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/10/rh-logo-retina.png"
            alt="Logo"
            className="w-[110px]"
          />

          {/* Hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden block ms-2 text-[24px]"
          >
            <RiMenuFill />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2 lg:text-[15px] font-medium">
          <Link to="/" className="bg-[#0054A6] transition px-5 py-3 rounded-[6px]">Home</Link>

          {navLinks.map((link) => {
            const hasDropdown = link.subLinks;
            const isOpen = openDropdown === link.name;

            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => hasDropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
              >
                <Link
                  to={link.path || "#"}
                  className={`transition px-5 py-4 rounded-[6px] ${isOpen ? " bg-[#0054A6]" : ""
                    } hover:bg-[#0054A6] px-5 py-3 text-white`}
                >
                  {link.name}
                </Link>

                {hasDropdown && isOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-[240px] bg-white shadow-lg rounded border-t-4 border-[#0054A6] z-10 p-2">
                    {link.subLinks.map((sublink) => (
                      <li
                        key={sublink.name}
                        className="px-5 py-3 lg:text-[15px] text-gray-500 hover:bg-[#dedede40] transition"
                      >
                        <Link to={sublink.path}>{sublink.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex justify-end items-center">
          <SubmitButton
            label="Submit"
            onClick={() => console.log("Clicked!")}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
