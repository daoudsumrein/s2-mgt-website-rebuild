import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function AppCUREVendorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <motion.section 
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center p-4 md:p-8 relative"
        style={{
          backgroundImage: `url('https://appcure.io/wp-content/uploads/2025/07/home-page-section-1.1.jpg')`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex items-center w-full">
          <motion.div 
            className="bg-white/95 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl max-w-full md:max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 md:mb-8 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                appCURE
              </span>{" "}
              + Industry Leaders Accelerate Migration to Modern Windows
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-10 text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Struggling to migrate from older versions of Windows and your applications are holding you back? Whether it's Client, Server, cloud or even hybrid{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                appCURE
              </span>{" "}
              is partnering with the leading names in the industry to support your digital transformation projects at speed.
            </motion.p>
            
            <motion.a 
              href="/contact"
              className="inline-flex items-center gap-2 md:gap-3 bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
}