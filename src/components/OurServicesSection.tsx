import { motion } from 'framer-motion';

const OurServicesSection = () => {
  return (
    <motion.section 
      className="bg-white py-6 px-4 sm:py-8 sm:px-5 md:py-12 text-center min-h-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
        <motion.h2 
          className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[40px] font-bold tracking-tight m-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
    </motion.section>
  );
};

export default OurServicesSection;