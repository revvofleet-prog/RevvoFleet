import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-display font-bold text-white tracking-widest mb-6 block">
              REVVO<span className="text-red-600">FLEET</span>
            </Link>
            <p className="text-gray-400 font-light max-w-sm mb-8 leading-relaxed">
              Experience the pinnacle of automotive engineering. We provide an exclusive selection of the world's finest vehicles for those who demand excellence in every journey.
            </p>
            <div className="flex space-x-6">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-red-500 uppercase tracking-widest mb-6 text-sm">Navigation</h4>
            <ul className="space-y-4">
              <button
                onClick={() => {
                  document.getElementById("cars")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Our Fleet
              </button>
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Terms & Conditions", href: "/terms" }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-red-500 uppercase tracking-widest mb-6 text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-red-500 shrink-0 mt-1" />
                <span>Plot no. 36A, M- Block, Gali no. 16, Defence Enclave, Tajpur Khurd, New Delhi- 110071
                  Near Yashobhoomi Convention Centre,UER II, Dwarka Expressway,</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={18} className="text-red-500 shrink-0" />
                <span>91+ 9136060001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={18} className="text-red-500 shrink-0" />
                <span>bookings@revvofleet.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center">
          <p className="text-xs text-gray-600 font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Revvofleet Luxury Rentals. All rights reserved. Developed by Tanish Kumar
          </p>
        </div>
      </div>
    </footer>
  );
}
