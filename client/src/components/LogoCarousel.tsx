import { motion } from "framer-motion";
import { 
  SiBmw, SiMercedes, SiHonda, SiToyota, SiLandrover, SiSuzuki
} from "react-icons/si";
import mahindraLogo from "@assets/b2ed7793-b31d-4ff8-bcf1-4c35777ea1d2-removebg-preview_1769103790003.png";
import suzukiLogo from "@assets/image_1769103512367.png";

const logos = [
  { icon: SiBmw, name: "BMW" },
  { icon: SiMercedes, name: "Mercedes" },
  { icon: SiHonda, name: "Honda" },
  { icon: SiToyota, name: "Toyota" },
  { icon: SiLandrover, name: "Land Rover" },
  { image: mahindraLogo, name: "Mahindra" },
  { image: suzukiLogo, name: "Maruti Suzuki" },
];

export function LogoCarousel() {
  return (
    <div className="w-full bg-black/50 border-y border-white/5 py-12 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      <motion.div 
        className="flex whitespace-nowrap items-center"
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center mx-12 text-white/30 hover:text-[#fed337] transition-colors duration-300 group"
          >
            {logo.icon ? (
              <logo.icon className="w-12 h-12" />
            ) : (
              <img 
                src={logo.image} 
                alt={logo.name} 
                className="h-12 w-auto grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
              />
            )}
            <span className="ml-3 font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              {logo.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
