import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-16">
            Contact <span className="text-red-600">Us</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Mail className="text-red-600 mr-4" /> Email Us
                </h3>
                <p className="text-gray-400 mb-2">General Inquiries</p>
                <a href="mailto:info@revvofleet.com" className="text-xl hover:text-red-500 transition-colors">info@revvofleet.com</a>
                
                <p className="text-gray-400 mt-6 mb-2">Bookings</p>
                <a href="mailto:bookings@revvofleet.com" className="text-xl hover:text-red-500 transition-colors">bookings@revvofleet.com</a>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Phone className="text-red-600 mr-4" /> Call Us
                </h3>
                <p className="text-gray-400 mb-2">24/7 Support Line</p>
                <a href="tel:+15551234567" className="text-xl hover:text-red-500 transition-colors">91+ 9136060001</a>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <MapPin className="text-red-600 mr-4" /> Visit Us
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Plot no. 36A, M- Block, Gali no. 16, Defence Enclave, Tajpur Khurd, New Delhi- 110071 Near Yashobhoomi Convention Centre,UER II, Dwarka Expressway,
                </p>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
