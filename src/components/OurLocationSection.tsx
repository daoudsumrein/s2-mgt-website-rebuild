import { motion } from 'framer-motion';

const OurLocationSection = () => {
  return (
    <motion.section 
      className="bg-slate-900 text-white py-20 px-5 min-h-screen flex items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-20 items-center w-full">
        <motion.div 
          className="pr-0 lg:pr-5 text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Our Office Locations
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Operating from Dubai and Riyadh, we provide IT and automation services to enterprises across the UAE, Saudi Arabia, and the GCC. As regional partners of Opentext, Nakivo, TDS, Appcure, and Arrosoft, we offer secure cloud backup, disaster recovery, automated data migration, and cybersecurity solutions developed for companies in the Middle East and North Africa (MENA).
          </p>
        </motion.div>
        
        <motion.div 
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <iframe 
            src="https://www.google.com/maps/d/u/0/embed?mid=1wXbC_xoJqUfvjc9WIXbZK3bMcTp7nSA&ehbc=2E312F&noprof=1" 
            width="100%" 
            height="480"
            className="border-0 rounded-2xl h-96 md:h-[480px]"
            loading="lazy"
            title="S2 Management Solutions Office Locations"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurLocationSection;