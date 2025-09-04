import { motion } from 'framer-motion';

const OurServicesSection = () => {
  return (
    <motion.section 
      className="relative bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-6 px-4 sm:py-8 sm:px-5 md:py-12 text-center min-h-auto overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2392CF]/30 to-transparent animate-pulse"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-bl from-teal-400/10 via-transparent to-purple-400/10"
        />
      </div>
      
      <div className="relative z-10">
        <motion.h2 
          className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[40px] font-semibold tracking-tight m-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
      </div>
    </motion.section>
  );
};

export default OurServicesSection;