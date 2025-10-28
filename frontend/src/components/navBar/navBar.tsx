  import { NavLink } from "react-router-dom";
  import "./navBar.css"
  import { FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
  import { useState } from "react";


  export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
      { to: "/", label: "Home" },
      { to: "/", label: "Products" },
      { to: "/", label: "Affiliate" },
      { to: "/", label: "About Us" },
    ];

    return (
      <nav className="bg-[#0f0f0f] h-16 border-b border-[#0c2526] text-white w-full relative">
        <div className="flex items-center justify-between h-full px-6">
          {/* Left: Logo */}
          <div className="flex items-center h-full">
            <NavLink to="/">
              <img src="/RISXNTWEAKS_16.webp" alt="Logo" className="h-10 mr-4 text-white hover:trans" />
            </NavLink>
          </div>

          {/* Center: Nav Links (hidden on small screens) */}
          <div className="flex-1 flex justify-center">
            <div className="navigationLinks hidden md:flex space-x-12 text-sm font-semibold">
              {links.map((l) => (
                <NavLink key={l.label} to={l.to} className={({ isActive }) => isActive ? "navigationlink text-[#e6e6e6] hover:text-[#00dce8] transition-colors hover:underline" : "navigationlink hover:text-[#00dce8] transition-colors hover:underline"}>{l.label}</NavLink>
              ))}
            </div>
          </div>

          {/* Right: Mobile menu button + Icons */}
          <div className="btn flex items-center space-x-4">
            {/* Mobile menu toggle - visible on small screens */}
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((s) => !s)}
              className="md:hidden bg-transparent p-2 rounded-md hover:bg-[#111]"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            <button className="hidden sm:inline-flex bg-[#181818] border border-[#343434] p-2 rounded-md hover:bg-[transparent] hover:border-[#00c0cb] hover:text-[#00c0cb] navigation-shadow transition-colors">
              <FiUser />
            </button>
            <button className="hidden sm:inline-flex bg-[#181818] border border-[#343434] p-2 rounded-md hover:bg-[transparent] hover:border-[#00c0cb] hover:text-[#00c0cb] transition-colors">
              <FiShoppingBag />
            </button>
          </div>

        </div>

        {/* Mobile menu panel (small screens) */}
        {isOpen && (
          <div className="mobileMenu md:hidden absolute left-0 right-0 top-16 bg-[#0f0f0f] border-b border-[#0c2526] z-40">
            <div className="flex flex-col py-4 px-6 space-y-3">
              {links.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => (isActive ? "navigationlink text-[#e6e6e6] hover:text-[#00dce8] transition-colors" : "navigationlink hover:text-[#00dce8] transition-colors") + " text-base font-medium"}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  };
