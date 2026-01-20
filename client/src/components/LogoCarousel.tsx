import { motion } from "framer-motion";
import { 
  SiFerrari, SiLamborghini, SiMercedes, SiPorsche, 
  SiTesla, SiBmw, SiAudi, SiAstonmartin, 
  SiBentley, SiMaserati 
} from "react-icons/si";

const logos = [
  { icon: SiFerrari, name: "Ferrari" },
  { icon: SiLamborghini, name: "Lamborghini" },
  { icon: SiMercedes, name: "Mercedes" },
  { icon: SiPorsche, name: "Porsche" },
  { icon: SiTesla, name: "Tesla" },
  { icon: SiBmw, name: "BMW" },
  { icon: SiAudi, name: "Audi" },
  { icon: SiAstonmartin, name: "Aston Martin" },
  { icon: SiBentley, name: "Bentley" },
  { icon: SiMaserati, name: "Maserati" },
];

export function LogoCarousel() {
  return (
    <div className="w-full bg-black/50 border-y border-white/5 py-12 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      <motion.div 
        className="flex whitespace-nowrap"
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
            className="flex items-center justify-center mx-12 text-white/30 hover:text-red-600 transition-colors duration-300 group"
          >
            <logo.icon className="w-12 h-12" />
            <span className="ml-3 font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              {logo.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
