import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => (
  <footer className="bg-[#0f0f0f] text-white pt-12 pb-4 border-t border-[#232323]">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between">
      {/* Left Section */}
      <div className="mb-8 md:mb-0 md:w-1/3">
        <h2 className="text-3xl font-bold mb-3">RisxnTweaks</h2>
        <p className="mb-6 text-[#b3b3b3]">Pro PC optimization to boost FPS, cut latency, and improve gaming.</p>
        <div className=" btns flex space-x-4">
          <a href="#" className="btn bg-[#181818] border border-[#343434]  p-3 rounded-[12px]  transition-colors"><FaDiscord size={24} /></a>
          <a href="#" className=" btn bg-[#181818] border border-[#343434]  p-3 rounded-[12px]  transition-colors"><FaTwitter size={24} /></a>
          <a href="#" className="btn bg-[#181818] border border-[#343434] p-3 rounded-[12px]  transition-colors"><FaYoutube size={24} /></a>
        </div>
      </div>
      {/* Center Section: Links */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-[#b3b3b3]">
            <li><Link to="#" className="hover:text-[#00dce8]">All Products</Link></li>
            <li><Link to="#" className="hover:text-[#00dce8]">Contact us</Link></li>
            <li><Link to="#" className="hover:text-[#00dce8]">About us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Products</h3>
          <ul className="space-y-2 text-[#b3b3b3]">
            <li><Link to="#" className="hover:text-[#00dce8]">Full Optimization</Link></li>
            <li><Link to="#" className="hover:text-[#00dce8]">Extreme Tweaks</Link></li>
            <li><Link to="#" className="hover:text-[#00dce8]">Hit Registration</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Support</h3>
          <ul className="space-y-2 text-[#b3b3b3]">
            <li><Link to="#" className="hover:text-[#00dce8]">Affiliate</Link></li>
            <li><Link to="#" className="hover:text-[#00dce8]">Discord</Link></li>
            <li><Link to="#" className="hover:text-[#00dce8]">Contact Info</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Legal</h3>
          <ul className="space-y-2 text-[#b3b3b3]">
            <li><Link to="#" className="hover:text-[#00dce8]">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-[#00dce8]">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-[#00dce8]">Refund Policy</Link></li>
          </ul>
        </div>
      </div>
    </div>
    {/* Bottom Section */}
    <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-[#232323] pt-4 flex flex-col md:flex-row md:justify-between items-center text-[#b3b3b3] text-sm">
      <div>© 2025 RisxnTweaks. All rights reserved.</div>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <Link to="#" className="hover:text-[#00dce8]">Terms</Link>
        <span>•</span>
        <Link to="#" className="hover:text-[#00dce8]">Privacy</Link>
        <span>•</span>
        <Link to="#" className="hover:text-[#00dce8]">Refunds</Link>
      </div>
    </div>
  </footer>
);
