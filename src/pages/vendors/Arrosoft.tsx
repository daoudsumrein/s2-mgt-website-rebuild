import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Arrosoft = () => {
  return (
    <>
      <SEOHead 
        title="Arrosoft - Data Security Solutions | S2 Technical Solutions"
        description="Partner with Arrosoft for excellent data protection solutions and services. Redefining the standard in data security for your clients."
        keywords="Arrosoft, data security, data protection, cybersecurity solutions, S2 Technical Solutions"
      />
      <Navigation />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden flex items-center px-4 md:px-8 pt-20">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://www.arrosoft.com/_next/image?url=%2Fhome%2Fhero-1.webp&w=3840&q=75&dpl=dpl_Az22Nx4AgfZkMx3AXcFv5Yhsntgr')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Content */}
          <motion.div 
            className="relative z-30 max-w-2xl text-white mx-auto md:mx-0 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Redefining the standard in data security for your clients
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl leading-relaxed mb-10 text-white/80 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Partnering with you to deliver excellent data protection solutions and services.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40"
                whileHover={{ 
                  y: -2,
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Discovery Call
                <motion.span 
                  className="text-lg md:text-xl"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Additional Content Sections */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Arrosoft?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Leading the industry with innovative data security solutions that protect your most valuable assets.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Advanced Protection",
                  description: "State-of-the-art encryption and security protocols to safeguard your data"
                },
                {
                  title: "Scalable Solutions",
                  description: "Flexible infrastructure that grows with your business needs"
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock monitoring and expert technical support"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="p-4 md:p-6 bg-card rounded-lg border shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Ready to Secure Your Data?</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get in touch with our experts to learn how Arrosoft can transform your data security strategy.
              </p>
              <motion.a 
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg transition-all duration-300 hover:bg-primary/90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Arrosoft;