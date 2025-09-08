import { motion } from 'framer-motion';

const OurLocationSection = () => {
  return (
    <section 
      className="relative text-white py-20 min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/lovable-uploads/c9b2b3aa-fac0-44bd-989b-9647411e7456.png)' }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Content Section */}
          <motion.div 
            className="lg:pr-5 text-center lg:text-left bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl ml-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-7 leading-tight text-white">
              Our Office Locations
            </h2>
            <p className="text-lg leading-relaxed text-white/90">
              Operating from Dubai and Riyadh, we provide IT and automation services to enterprises across the UAE, Saudi Arabia, and the GCC. As regional partners of Opentext, Nakivo, TDS, Appcure, and Arrosoft, we offer secure cloud backup, disaster recovery, automated data migration, and cybersecurity solutions developed for companies in the Middle East and North Africa (MENA).
            </p>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://www.google.com/maps/d/u/0/embed?mid=1wXbC_xoJqUfvjc9WIXbZK3bMcTp7nSA&ehbc=2E312F&noprof=1"
              width="640" 
              height="480"
              className="w-full h-96 lg:h-[480px] border-0 rounded-xl"
              title="Our Office Locations"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurLocationSection;