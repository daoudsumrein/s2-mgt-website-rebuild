import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/056d5ea9-8864-4541-9b47-a56718ba3b48.png)` }}
      />
      
      {/* Flowing Background Elements */}
      <div className="absolute top-0 right-0 w-[60%] h-full">
        <div className="absolute inset-0 bg-gradient-radial from-[hsl(200,100%,50%,0.3)] via-[hsl(200,100%,50%,0.1)] to-transparent blur-[40px]" />
      </div>
      
      {/* Animated Flowing Element */}
      <motion.div 
        className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-gradient-radial from-[hsl(194,100%,62%,0.4)] via-[hsl(200,100%,50%,0.2)] to-transparent blur-[60px] rounded-full"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Decorative Flow Elements */}
      <motion.div 
        className="absolute top-[15%] right-[15%] w-[200px] h-[200px] bg-gradient-radial from-[hsl(200,100%,50%,0.2)] to-transparent rounded-full blur-[20px] hidden md:block"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-[25%] right-[5%] w-[150px] h-[300px] bg-gradient-to-t from-[hsl(194,100%,62%,0.15)] to-transparent rounded-full blur-[30px] hidden md:block"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 tracking-tight"
          >
            Data Protection and Cybersecurity
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-10 max-w-lg font-normal"
          >
            S2 drives digital transformation with consultancy-led IT modernization and trusted security solutions for global enterprises.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300 border-0"
              asChild
            >
              <Link to="/contact">
                Connect With Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}