import { Car } from "@shared/schema";
import { Link } from "wouter";
import { ArrowRight, Fuel, Gauge, Settings } from "lucide-react";
import { motion } from "framer-motion";

interface CarCardProps {
  car: Car;
  index: number;
}

export function CarCard({ car, index }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/book/${car.id}`} className="block h-full">
        <div className="h-full bg-zinc-900 border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-red-600/50 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.2)]">
          
          {/* Image Container */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60 z-10" />
            <img 
              src={car.imageUrl} 
              alt={`${car.make} ${car.model}`} 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Price Tag */}
            <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur border border-white/10 px-4 py-2 skew-x-[-12deg]">
              <div className="skew-x-[12deg] text-center">
                <span className="text-xs text-gray-400 block uppercase font-mono">Daily Rate</span>
                <span className="text-xl font-bold text-white">{car.pricePerDay} Rs</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-600/10 to-transparent -translate-y-1/2 translate-x-1/2 rounded-full blur-xl group-hover:bg-red-600/20 transition-all" />

            <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
              {car.make} {car.model}
            </h3>
            <p className="text-sm text-gray-500 font-mono mb-6"> • {car.category.toUpperCase()}</p>
            
            <p className="text-gray-400 text-sm line-clamp-2 mb-6 h-10 leading-relaxed">
              {car.description}
            </p>

            {/* Specs Grid */}
            {/* <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5 mb-6">
              <div className="flex flex-col items-center justify-center text-center">
                <Gauge size={16} className="text-red-600 mb-1" />
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Fast</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center border-l border-white/5">
                <Fuel size={16} className="text-red-600 mb-1" />
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Petrol</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center border-l border-white/5">
                <Settings size={16} className="text-red-600 mb-1" />
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Auto/Manual/Elec</span>
              </div>
            </div> */}

            <div className="flex items-center text-red-500 font-mono text-xs uppercase tracking-widest font-bold group-hover:translate-x-2 transition-transform duration-300">
              Reserve Now <ArrowRight size={14} className="ml-2" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
