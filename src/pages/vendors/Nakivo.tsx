import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackupPlatforms from "@/components/BackupPlatforms";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function NakivoPage() {
  const features = [
    "Trusted by organizations with strict cybersecurity standards",
    "One platform for all data protection needs",
    "Fraction of the cost of competitors"
  ];

  return (
    <>
      <SEOHead 
        title="NAKIVO Backup & Replication Solutions | S2 Management"
        description="Comprehensive data protection with NAKIVO's enterprise backup and replication platform. Trusted by organizations with strict cybersecurity standards."
        keywords="NAKIVO partner, data protection, backup replication, enterprise backup, VM backup, cloud data protection"
        canonicalUrl="https://s2mgt.com/vendors/nakivo"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
      <main>
        {/* Hero Section with Background */}
        <section className="min-h-screen relative overflow-hidden flex items-center px-4 md:px-8 pt-20">
          {/* Background Image - Clear on Desktop */}
          <div 
            className="absolute inset-0 z-0 hidden md:block"
            style={{
              backgroundImage: `url('https://www.nakivo.com/res/images/pages/trial/bg-top.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Background Image with Gradient Overlay - Mobile Only */}
          <div 
            className="absolute inset-0 z-0 md:hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(30, 115, 190, 0.8), rgba(46, 141, 214, 0.7)), url('https://www.nakivo.com/res/images/pages/trial/bg-top.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content Section */}
              <motion.div 
                className="text-white lg:pr-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Why Choose<br />
                  NAKIVO
                </motion.h1>

                <motion.p 
                  className="text-lg lg:text-xl leading-relaxed mb-8 text-white/95 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  Customers choose NAKIVO Backup & Replication for the advanced feature set, 
                  superior performance and highly-rated technical support team.
                </motion.p>

                <motion.ul 
                  className="space-y-4 mb-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/95 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg font-semibold text-sm tracking-wide uppercase px-8 py-3"
                    asChild
                  >
                    <a href="/contact">
                      Download Guide
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Video Section */}
              <motion.div 
                className="lg:pl-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <div className="bg-white rounded-xl p-6 lg:p-8 shadow-2xl backdrop-blur-sm">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-6">
                    NAKIVO Overview
                  </h2>
                  
                  {/* Larger Video Container */}
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
                      src="https://www.youtube.com/embed/p267EiNziU4"
                      title="NAKIVO Backup & Replication Overview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Backup Platforms Section */}
        <BackupPlatforms />

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                More Capabilities, Half the Price
              </h2>
            </motion.div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
              {[
                {
                  icon: "/lovable-uploads/f148bb84-417a-4fb7-a214-c38e19f53a70.png",
                  title: "Save time on routine tasks",
                  features: [
                    "One platform for all your workloads",
                    "Fast backup and replication", 
                    "Powerful automation options"
                  ]
                },
                {
                  icon: "/lovable-uploads/79b0c06d-0165-429f-81e0-4ba016484354.png", 
                  title: "Reliable uptime, short RTOs",
                  features: [
                    "Instant full and granular recovery",
                    "Recovery flexibility across platforms",
                    "Disaster recovery orchestration"
                  ]
                },
                {
                  icon: "/lovable-uploads/5fa38de6-21bb-4e68-9d3f-75594406855d.png",
                  title: "Ransomware-proof for peace of mind", 
                  features: [
                    "Immutable and air-gapped storage",
                    "Source-side backup encryption",
                    "Pre-recovery backup malware scan"
                  ]
                },
                {
                  icon: "/lovable-uploads/b7ffacde-f80e-4224-8b4d-6d3fe7583f73.png",
                  title: "Get started in minutes",
                  features: [
                    "Deploy where you need",
                    "Agentless for modern infrastructures", 
                    "MSP-ready"
                  ]
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-12 text-left shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Animated top border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  {/* Icon */}
                  <div className="w-30 h-30 mb-8 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                    <img 
                      src={feature.icon}
                      alt={`${feature.title} icon`}
                      className="w-30 h-30 object-contain drop-shadow-lg"
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-7 leading-tight transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </h3>
                  
                  {/* Features List */}
                  <ul className="space-y-4">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-muted-foreground font-medium transition-colors duration-200 group-hover:text-foreground">
                        <div className="w-5 h-5 flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-200 group-hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" fill="none" viewBox="0 0 18 13">
                            <path d="M6.552 13l-5.7-5.7 1.425-1.425 4.275 4.275L15.727.975 17.152 2.4 6.552 13z" fill="#006ae8"/>
                          </svg>
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Ready to Transform Your Data Protection Strategy?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let S2's data protection experts help you implement NAKIVO's comprehensive backup and replication solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/contact">
                    Schedule NAKIVO Demo
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <a href="https://www.nakivo.com" target="_blank" rel="noopener noreferrer">
                    Learn More About NAKIVO
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        </main>
        <Footer />
      </div>
    </>
  );
}