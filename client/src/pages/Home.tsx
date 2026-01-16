import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThreeDCar } from "@/components/ThreeDCar";
import { CarCard } from "@/components/CarCard";
import { useCars } from "@/hooks/use-cars";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: cars, isLoading } = useCars();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Intro Animations */}
        <div className="absolute inset-0 z-[100] pointer-events-none overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="shooting-star-cross-left"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="shooting-star-cross-right"
          />
        </div>

        {/* Background Image (Cover) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute inset-0"
        >
          <ThreeDCar />
        </motion.div>

        {/* Hero Text */}
        <div className="relative z-20 text-center pointer-events-none mb-[20vh]">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="text-6xl md:text-9xl font-mono font-bold tracking-tighter text-white mb-4 drop-shadow-2xl"
          >
            REVVO<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">FLEET</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="text-lg md:text-xl font-mono text-gray-400 tracking-[0.3em] uppercase"
          >
            Elevate Your Drive
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-red-600 to-transparent mx-auto"></div>
          <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-2">Scroll</p>
        </motion.div>
      </header>

      {/* Fleet Section */}
      <section id="cars" className="py-24 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our <span className="text-red-600">Collection</span></h2>
              <p className="text-gray-400 font-mono text-sm max-w-md">
                Handpicked engineering marvels ready for your command.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="font-mono text-red-600 text-xs uppercase tracking-widest border border-red-600/30 px-4 py-2 bg-red-600/5">
                {cars?.length || 0} Vehicles Available
              </span>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars?.map((car, index) => (
                <CarCard key={car.id} car={car} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Why <span className="text-red-600">Revafleet</span>?
            </h2>
            <div className="space-y-8">
              {[
                { title: "Premium Selection", desc: "Only the top 1% of vehicles make it into our exclusive fleet." },
                { title: "Concierge Service", desc: "24/7 dedicated support for your entire journey." },
                { title: "Doorstep Delivery", desc: "We bring the experience directly to your location." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-[1px] bg-red-600 mt-6" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
