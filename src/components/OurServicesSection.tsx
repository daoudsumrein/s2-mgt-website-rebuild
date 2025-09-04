import { motion } from 'framer-motion';

const OurServicesSection = () => {
  return (
    <motion.section 
      className="py-6 px-4 sm:py-8 sm:px-5 md:py-12 text-center min-h-auto bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/51197c5b-8f1c-4124-a285-b8eddcbe3c95.png')`
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1 
        className="text-primary text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight m-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h1>
    </motion.section>
  );
};

export default OurServicesSection;