import OverlayMenu from "./OverlayMenu";
import { useState, useEffect } from "react";   // ✅ added useEffect
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  // ✅ Bug 4 fixed — scroll listener actually uses setVisible now
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">Angad</div>
        </div>

        <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2"></div>

        <button onClick={() => setMenuOpen(true)} className="text-white text-3xl focus:outline-none">
          <FiMenu />
        </button>

        <div className="hidden lg:block">
          <a href="#Contact" className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300">
            Reach out
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}