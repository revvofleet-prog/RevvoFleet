import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@assets/logo_1768588831731.jpeg";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src={logoImage} 
              alt="Revvofleet Logo" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:text-red-500",
                  location === link.href ? "text-red-500 font-bold" : "text-gray-400"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="#cars" 
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-mono text-[10px] uppercase tracking-[0.2em] transition-all rounded-full hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
            >
              Fleet
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-red-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 border border-white/10 rounded-3xl p-4 flex flex-col space-y-2 animate-accordion-down overflow-hidden">
          {links.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-3 px-6 font-mono text-xs uppercase tracking-widest rounded-full transition-all",
                location === link.href 
                  ? "text-white bg-red-600" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
