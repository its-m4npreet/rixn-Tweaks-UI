  import { NavLink } from "react-router-dom";
  import "./navBar.css"
  import { FiUser, FiShoppingBag   } from "react-icons/fi";


  export const NavBar = () => {
    return (
      <nav className="bg-[#0f0f0f] h-16 border-b border-[#0c2526] text-white w-full  ">
        <div className="flex items-center justify-between h-full px-6">
          {/* Left: Logo */}
          <div className="flex items-center h-full">
            <NavLink to="/">
              <img src="/RISXNTWEAKS_16.webp" alt="Logo" className="h-10 mr-4 text-white hover:trans" />
            </NavLink>
          </div>
          {/* Center: Nav Links */}
          <div className="flex-1 flex justify-center">
            <div className="navigationLinks flex space-x-12 text-sm font-semibold">
                <NavLink to="/" className={({ isActive }) => isActive ? "navigationlink text-[#e6e6e6] hover:text-[#00dce8] transition-colors hover:underline" : "navigationlink hover:text-[#00dce8] transition-colors hover:underline"}>Home</NavLink>
                <NavLink to="/" className={({ isActive }) => isActive ? "navigationlink text-[#e6e6e6] hover:text-[#00dce8] transition-colors hover:underline" : "navigationlink hover:text-[#00dce8] transition-colors hover:underline"}>Products</NavLink>
                <NavLink to="/" className={({ isActive }) => isActive ? "navigationlink text-[#e6e6e6] hover:text-[#00dce8] transition-colors hover:underline" : "navigationlink hover:text-[#00dce8] transition-colors hover:underline"}>Affiliate</NavLink>
                <NavLink to="/" className={({ isActive }) => isActive ? "navigationlink text-[#e6e6e6] hover:text-[#00dce8] transition-colors hover:underline" : "navigationlink hover:text-[#00dce8] transition-colors hover:underline"}>About Us</NavLink>
            </div>
          </div>
          {/* Right: Icons */}
          <div className="btn flex items-center space-x-4">
            <button className="bg-[#181818] border border-[#343434] p-2 rounded-md hover:bg-[transparent] hover:border-[#00c0cb] hover:text-[#00c0cb] navigation-shadow transition-colors">
              <FiUser />
            </button>
            <button className="bg-[#181818] border border-[#343434] p-2 rounded-md hover:bg-[transparent] hover:border-[#00c0cb] hover:text-[#00c0cb] transition-colors">
              <FiShoppingBag />
            </button>
          </div>
        </div>
      </nav>
    );
  };
