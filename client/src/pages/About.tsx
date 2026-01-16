import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            About <span className="text-red-600">Us</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed font-light text-lg">
              <p>
                Founded in 2024, <strong className="text-white">Revafleet</strong> was born from a singular obsession: the pure joy of driving. We believe that a car is not just a mode of transport, but an extension of one's personality and a vessel for creating unforgettable memories.
              </p>
              <p>
                We curate the world's most exceptional vehicles, maintaining them to showroom standards so that you can experience the thrill of the open road exactly as the engineers intended.
              </p>
              <p>
                Whether you crave the raw power of a V12, the silent luxury of an electric grand tourer, or the commanding presence of a luxury SUV, our fleet is at your disposal.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-red-600/20 blur-xl rounded-full" />
              {/* Unsplash image: Modern sleek office building or car collection */}
              <img 
                src="https://images.unsplash.com/photo-1562141989-c5c79ac8f576?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Showroom" 
                className="relative rounded-sm border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "50+", label: "Exotic Vehicles" },
              { value: "12", label: "Global Locations" },
              { value: "5k+", label: "Happy Clients" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-zinc-900/30 border border-white/5">
                <div className="text-5xl font-display font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-sm font-mono text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
