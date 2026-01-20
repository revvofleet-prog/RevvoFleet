import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LogoCarousel } from "@/components/LogoCarousel";
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  Zap,
  CheckCircle2,
  Building2,
  Heart,
  TrendingUp,
  Handshake
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const clients = [
  "BLUE STAR LIMITED", "C & A SOURCING", "Chegg India", "DS Spiceco", 
  "Care Health Insurance", "IL & FS FINANCIAL", "ABP Network", "India Tv News",
  "Voith Hydro", "BECHTEL INDIA", "BENNETT COLEMAN", "Dharampal Satyapal Ltd",
  "Greenpanel Industries", "INDIAN ENERGY EXCHANGE", "KELTECH ENERGIES", 
  "TECH MAHINDRA", "VLCC HEALTH CARE", "ZEE MEDIA", "Religare Enterprise"
];

const locations = [
  "Delhi", "Gurugram", "Noida", "Mumbai", "Pune", "Hyderabad", 
  "Bangalore", "Chennai", "Kochi", "Coimbatore", "Kolkata", 
  "Chandigarh", "Agra", "Jaipur", "Ahmedabad", "Vadodara"
];

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white overflow-x-hidden font-mono">
      <Navbar />

      <main className="pt-24 space-y-12 font-mono">
        {/* Hero Section - Compact */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-[url('/assets/Car.png')] bg-cover bg-center grayscale brightness-[0.2]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <motion.h1 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-display font-bold mb-2 tracking-tighter"
              >
                REVVOFLEET
              </motion.h1>
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-red-600 font-mono tracking-[0.2em] uppercase text-xs"
              >
                Premier Luxury Mobility Solutions
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Moving Logos */}
        <LogoCarousel />

        {/* Overview - Tightened */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-display font-bold mb-4 flex items-center">
                <span className="w-10 h-[2px] bg-red-600 mr-4" />
                Evolution of Excellence
              </h2>
              <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                <p>
                  Incorporated in 2012 as <span className="text-white/60 font-mono italic">Rousing Mobility and Hospitality India (OPC) Private Limited (CIN U74999DL2017OPC327472)</span>, we have evolved into the premier luxury rental brand known today as <span className="text-white font-bold">Revvofleet</span>.
                </p>
                <p>
                  Envisioned and brought to life by a team of Industry Professionals, our aim remains the same: providing world-class business auxiliary services by leveraging unparalleled expertise in luxury transport.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-zinc-900/40 border border-white/5 rounded-xl">
                  <span className="text-4xl font-bold text-red-600 block">250+</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Luxury Fleet</span>
                </div>
                <div className="p-4 bg-zinc-900/40 border border-white/5 rounded-xl">
                  <span className="text-4xl font-bold text-red-600 block">1M+</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Global Travelers</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-white/10"
            >
              <img 
                src="/assets/cars/Luxury_sedan.jpg" 
                alt="Luxury Car" 
                className="w-full h-full object-cover grayscale brightness-75"
              />
            </motion.div>
          </div>
        </section>

        {/* Core Philosophy & Quality Policy - Combined */}
        <section className="py-12 bg-zinc-950/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.h2 {...fadeInUp} className="text-3xl font-display font-bold mb-8 text-center">Core Philosophy</motion.h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="quality" className="border border-white/10 bg-black/40 px-4 rounded-xl">
                <AccordionTrigger className="text-lg font-display py-4 hover:no-underline hover:text-red-600 transition-colors">
                  Quality Policy
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-4 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <Users className="w-5 h-5 text-red-600 shrink-0" />
                      <p>Through the commitment of our people, we aim to anticipate, meet and exceed customer expectations the first time, every time.</p>
                    </div>
                    <div className="flex gap-4">
                      <Heart className="w-5 h-5 text-red-600 shrink-0" />
                      <p>To nurture an environment conducive to the well-being of our employees and partners in business.</p>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                      <p>To maintain and manage quality systems to ensure consistent, world-class luxury service.</p>
                    </div>
                    <div className="flex gap-4">
                      <Building2 className="w-5 h-5 text-red-600 shrink-0" />
                      <p>To provide consistent ground transport solutions to enhance performance and productivity.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="strengths" className="border border-white/10 bg-black/40 px-4 rounded-xl">
                <AccordionTrigger className="text-lg font-display py-4 hover:no-underline hover:text-red-600 transition-colors">
                  Revvofleet Strengths
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-4 space-y-4">
                  <div className="flex gap-4">
                    <Zap className="w-5 h-5 text-red-600 shrink-0" />
                    <p>An Integrated Travel Company with a High Emphasis On Technology.</p>
                  </div>
                  <div className="flex gap-4">
                    <Users className="w-5 h-5 text-red-600 shrink-0" />
                    <p>Team of Seasoned Travel Professionals and Operation staff who are experienced & qualified.</p>
                  </div>
                  <div className="flex gap-4">
                    <TrendingUp className="w-5 h-5 text-red-600 shrink-0" />
                    <p>Serviced More than Million Travelers till Date with the Objective to Provide World Class Service at an Economical Price.</p>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                    <p>Wide Geographical Spread for Effective Servicing across the country.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mission" className="border border-white/10 bg-black/40 px-4 rounded-xl">
                <AccordionTrigger className="text-lg font-display py-4 hover:no-underline hover:text-red-600 transition-colors">
                  Our Vision & Mission
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-4 space-y-3">
                  <p><span className="text-white font-bold">Vision:</span> Enhancing our leadership stature by keeping luxury travel economically viable and socially acceptable.</p>
                  <p><span className="text-white font-bold">Mission:</span> Being the most preferred transport provider known for Rejoice, Available, Care and Relationship.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Client List - Attractive Animated Scroll */}
        <section className="py-12 bg-black overflow-hidden">
          <motion.h2 {...fadeInUp} className="text-3xl font-display font-bold mb-8 text-center">Our Prestigious Clients</motion.h2>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            <motion.div 
              className="flex whitespace-nowrap py-4"
              animate={{ x: [0, -2000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...clients, ...clients].map((client, idx) => (
                <div key={idx} className="flex items-center px-10 gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                  <Handshake className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-mono tracking-widest text-gray-400 hover:text-white uppercase transition-colors">{client}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Rental Types - New Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-3xl font-display font-bold mb-12 text-center">Rental <span className="text-red-600">Types</span></motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Users, 
                title: "Employee Pickup & Drop", 
                desc: "Corporate employee transportation services across India in major metro cities and emerging hubs." 
              },
              { 
                icon: Zap, 
                title: "Self Driven Cars", 
                desc: "Competitive prices for young, well-maintained vehicles for a hassle-free and enjoyable driving experience." 
              },
              { 
                icon: MapPin, 
                title: "Outstations", 
                desc: "Economical and comfortable outstation packages for team building, events, or holidays." 
              },
              { 
                icon: Clock, 
                title: "Monthly & Long Term", 
                desc: "Cost-effective solutions for senior management and departmental requirements with dedicated chauffeurs." 
              },
              { 
                icon: Building2, 
                title: "Airport Transfers", 
                desc: "Timely pickup and drop services with high emphasis on technology and last-minute coordination." 
              },
              { 
                icon: TrendingUp, 
                title: "Spot Rental", 
                desc: "On-demand luxury vehicle availability for immediate and short-term premium transport needs." 
              }
            ].map((type, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="p-8 bg-zinc-900/30 border border-white/10 rounded-2xl hover:border-red-600/50 transition-all duration-300 group hover:-translate-y-2"
              >
                <type.icon className="w-10 h-10 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-display font-bold mb-4">{type.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Awards - User Images */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-3xl font-display font-bold mb-12 text-center">Recognition & Awards</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "/assets/awards/Award1.png", title: "Corporate Excellence", desc: "Recognized for outstanding leadership in corporate mobility." },
              { img: "/assets/awards/Award2.jpeg", title: "Achievement Award", desc: "Awarded for consistent quality and service benchmarks." },
              { img: "/assets/awards/Award3.jpeg", title: "Industry Leader", desc: "Honored for transforming the landscape of luxury transport." }
            ].map((award, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group border border-white/10 bg-zinc-900/20 rounded-xl overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={award.img} alt="Award" className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold mb-2">{award.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{award.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PAN India Presence - Animated Marquee */}
        <section className="py-12 bg-zinc-950/50 overflow-hidden">
          <motion.h2 {...fadeInUp} className="text-3xl font-display font-bold mb-8 text-center">PAN India Presence</motion.h2>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            <motion.div 
              className="flex whitespace-nowrap py-4"
              animate={{ x: [-2000, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...locations, ...locations].map((location, idx) => (
                <div key={idx} className="flex items-center px-12 gap-3 group">
                  <MapPin className="w-5 h-5 text-red-600 group-hover:scale-125 transition-transform" />
                  <span className="text-lg font-display tracking-widest text-gray-400 group-hover:text-white transition-colors">{location}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* International Expansion - Final Callout */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-3xl overflow-hidden border border-red-600/20 bg-gradient-to-br from-zinc-900/50 to-black text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Zap className="w-12 h-12 text-red-600 mx-auto" />
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 italic tracking-tight">
                Beyond Borders: <span className="text-red-600">2026</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                Revvofleet is proud to announce our global expansion. From <span className="text-white font-bold">2026</span>, our premier luxury mobility solutions are now <span className="text-red-600 font-bold uppercase tracking-widest">Internationally Available</span>.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// import { motion } from "framer-motion";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { LogoCarousel } from "@/components/LogoCarousel";
// import { 
//   ShieldCheck, 
//   Clock, 
//   MapPin, 
//   Users, 
//   Award, 
//   Zap,
//   CheckCircle2,
//   Building2,
//   Heart,
//   TrendingUp,
//   Handshake
// } from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const fadeInUp = {
//   initial: { opacity: 0, y: 15 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.5, ease: "easeOut" }
// };

// const staggerContainer = {
//   animate: {
//     transition: {
//       staggerChildren: 0.05
//     }
//   }
// };

// const clients = [
//   "BLUE STAR LIMITED", "C & A SOURCING", "Chegg India", "DS Spiceco", 
//   "Care Health Insurance", "IL & FS FINANCIAL", "ABP Network", "India Tv News",
//   "Voith Hydro", "BECHTEL INDIA", "BENNETT COLEMAN", "Dharampal Satyapal Ltd",
//   "Greenpanel Industries", "INDIAN ENERGY EXCHANGE", "KELTECH ENERGIES", 
//   "TECH MAHINDRA", "VLCC HEALTH CARE", "ZEE MEDIA", "Religare Enterprise"
// ];

// export default function About() {
//   return (
//     <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
//       <Navbar />

//       <main className="pt-24 space-y-12">
//         {/* Hero Section - Compact */}
//         <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.98 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10"
//           >
//             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale brightness-[0.2]" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
//               <motion.h1 
//                 initial={{ y: 10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-5xl md:text-7xl font-display font-bold mb-2 tracking-tighter"
//               >
//                 REVVOFLEET
//               </motion.h1>
//               <motion.p 
//                 initial={{ y: 10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-red-600 font-mono tracking-[0.2em] uppercase text-xs"
//               >
//                 Premier Luxury Mobility Solutions
//               </motion.p>
//             </div>
//           </motion.div>
//         </section>

//         {/* Moving Logos */}
//         <LogoCarousel />

//         {/* Overview - Tightened */}
//         <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div {...fadeInUp}>
//               <h2 className="text-3xl font-display font-bold mb-4 flex items-center">
//                 <span className="w-10 h-[2px] bg-red-600 mr-4" />
//                 Evolution of Excellence
//               </h2>
//               <div className="space-y-4 text-gray-400 text-base leading-relaxed">
//                 <p>
//                   Incorporated in 2012 as <span className="text-white/60 font-mono italic">Rousing Mobility and Hospitality India (OPC) Private Limited</span>, we have evolved into the premier luxury rental brand known today as <span className="text-white font-bold">Revvofleet</span>.
//                 </p>
//                 <p>
//                   Envisioned and brought to life by a team of Industry Professionals, our aim remains the same: providing world-class business auxiliary services by leveraging unparalleled expertise in luxury transport.
//                 </p>
//               </div>
//               <div className="grid grid-cols-2 gap-4 mt-8">
//                 <div className="p-4 bg-zinc-900/40 border border-white/5 rounded-xl">
//                   <span className="text-4xl font-bold text-red-600 block">250+</span>
//                   <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Luxury Fleet</span>
//                 </div>
//                 <div className="p-4 bg-zinc-900/40 border border-white/5 rounded-xl">
//                   <span className="text-4xl font-bold text-red-600 block">1M+</span>
//                   <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Global Travelers</span>
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div 
//               initial={{ opacity: 0, x: 15 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="relative aspect-video rounded-2xl overflow-hidden border border-white/10"
//             >
//               <img 
//                 src="/assets/cars/Luxury_sedan.jpg" 
//                 alt="Luxury Car" 
//                 className="w-full h-full object-cover grayscale brightness-75"
//               />
//             </motion.div>
//           </div>
//         </section>

//         {/* Core Philosophy & Quality Policy - Combined */}
//         <section className="py-12 bg-zinc-950/50">
//           <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//             <motion.h2 {...fadeInUp} className="text-3xl font-display font-bold mb-8 text-center">Core Philosophy</motion.h2>
//             <Accordion type="single" collapsible className="w-full space-y-3">
//               <AccordionItem value="quality" className="border border-white/10 bg-black/40 px-4 rounded-xl">
//                 <AccordionTrigger className="text-lg font-display py-4 hover:no-underline hover:text-red-600 transition-colors">
//                   Quality Policy
//                 </AccordionTrigger>
//                 <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-4 space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex gap-4">
//                       <Users className="w-5 h-5 text-red-600 shrink-0" />
//                       <p>Through the commitment of our people, we aim to anticipate, meet and exceed customer expectations the first time, every time.</p>
//                     </div>
//                     <div className="flex gap-4">
//                       <Heart className="w-5 h-5 text-red-600 shrink-0" />
//                       <p>To nurture an environment conducive to the well-being of our employees and partners in business.</p>
//                     </div>
//                     <div className="flex gap-4">
//                       <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
//                       <p>To maintain and manage quality systems to ensure consistent, world-class luxury service.</p>
//                     </div>
//                     <div className="flex gap-4">
//                       <Building2 className="w-5 h-5 text-red-600 shrink-0" />
//                       <p>To provide consistent ground transport solutions to enhance performance and productivity.</p>
//                     </div>
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="rousing" className="border border-white/10 bg-black/40 px-4 rounded-xl">
//                 <AccordionTrigger className="text-lg font-display py-4 hover:no-underline hover:text-red-600 transition-colors">
//                   Rousing Hospitality Concept
//                 </AccordionTrigger>
//                 <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-4 space-y-3">
//                   <p><span className="text-white font-bold">Rousing Hospitality</span> represents our philosophy of invigorating, energizing, and inspiring service.</p>
//                   <p>It implies a level of energetic service that transforms every journey into a memorable encounter beyond basic transportation.</p>
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="mission" className="border border-white/10 bg-black/40 px-4 rounded-xl">
//                 <AccordionTrigger className="text-lg font-display py-4 hover:no-underline hover:text-red-600 transition-colors">
//                   Our Vision & Mission
//                 </AccordionTrigger>
//                 <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-4 space-y-3">
//                   <p><span className="text-white font-bold">Vision:</span> Enhancing our leadership stature by keeping luxury travel economically viable and socially acceptable.</p>
//                   <p><span className="text-white font-bold">Mission:</span> Being the most preferred transport provider known for Rejoice, Available, Care and Relationship.</p>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </div>
//         </section>

//         {/* Client List - Attractive Animated Scroll */}
//         <section className="py-12 bg-black overflow-hidden">
//           <motion.h2 {...fadeInUp} className="text-3xl font-display font-bold mb-8 text-center">Our Prestigious Clients</motion.h2>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
//             <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
//             <motion.div 
//               className="flex whitespace-nowrap py-4"
//               animate={{ x: [0, -2000] }}
//               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//             >
//               {[...clients, ...clients].map((client, idx) => (
//                 <div key={idx} className="flex items-center px-10 gap-3 grayscale hover:grayscale-0 transition-all duration-300">
//                   <Handshake className="w-5 h-5 text-red-600" />
//                   <span className="text-sm font-mono tracking-widest text-gray-400 hover:text-white uppercase transition-colors">{client}</span>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Awards - User Images */}
//         <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
//           <motion.h2 {...fadeInUp} className="text-3xl font-display font-bold mb-12 text-center">Recognition & Awards</motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { img: "/assets/awards/Award1.png", title: "Corporate Excellence", desc: "Recognized for outstanding leadership in corporate mobility." },
//               { img: "/assets/awards/Award2.jpeg", title: "Achievement Award", desc: "Awarded for consistent quality and service benchmarks." },
//               { img: "/assets/awards/Award3.jpeg", title: "Industry Leader", desc: "Honored for transforming the landscape of luxury transport." }
//             ].map((award, idx) => (
//               <motion.div 
//                 key={idx}
//                 variants={fadeInUp}
//                 className="group border border-white/10 bg-zinc-900/20 rounded-xl overflow-hidden"
//               >
//                 <div className="aspect-[4/3] overflow-hidden">
//                   <img src={award.img} alt="Award" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg font-display font-bold mb-2">{award.title}</h3>
//                   <p className="text-gray-500 text-xs leading-relaxed">{award.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }
