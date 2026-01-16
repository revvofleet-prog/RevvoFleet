import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-display font-bold text-white tracking-widest group-hover:text-red-500 transition-colors duration-300">
              REVA<span className="text-red-600">FLEET</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:text-red-500 hover:text-glow",
                  location === link.href ? "text-red-500 font-bold" : "text-gray-400"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="#cars" 
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-mono text-xs uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] skew-x-[-12deg]"
            >
              <span className="block skew-x-[12deg]">Fleet</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-red-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 border-b border-white/10 p-4 flex flex-col space-y-4 animate-accordion-down">
          {links.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-3 px-4 font-mono text-sm uppercase tracking-wider border-l-2 transition-all",
                location === link.href 
                  ? "border-red-600 text-white bg-white/5" 
                  : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
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
