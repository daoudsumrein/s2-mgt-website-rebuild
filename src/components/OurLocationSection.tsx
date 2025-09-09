import { motion } from 'framer-motion';

const OurLocationSection = () => {
  return (
    <section 
      className="relative text-white py-8 sm:py-12 md:py-16 lg:py-20 min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/lovable-uploads/877d6d8a-b597-4939-a15f-a1e228853466.png)' }}
    >
      {/* Background overlay for better text readability */}
      <motion.div 
        className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-5 md:px-6">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-15 items-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Content Section */}
          <motion.div 
            className="order-2 lg:order-1 text-center lg:text-left bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-7 leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our Office Locations
            </motion.h2>
            <h3 className="sr-only">
              United Arab Emirates and Kingdom of Saudi Arabia Office Locations - UAE and KSA
            </h3>
            <motion.p 
              className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Operating from Dubai and Riyadh, we provide IT and automation services to enterprises across the UAE, Saudi Arabia, and the GCC. As regional partners of Opentext, Nakivo, TDS, Appcure, and Arrosoft, we offer secure cloud backup, disaster recovery, automated data migration, and cybersecurity solutions developed for companies in the Middle East and North Africa (MENA).
            </motion.p>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            className="order-1 lg:order-2 relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
          >
            <motion.iframe 
              src="https://www.google.com/maps/d/u/0/embed?mid=1wXbC_xoJqUfvjc9WIXbZK3bMcTp7nSA&ehbc=2E312F&noprof=1"
              width="640" 
              height="480"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[480px] border-0 rounded-lg sm:rounded-xl md:rounded-xl"
              title="Our Office Locations"
              loading="lazy"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurLocationSection;