import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Circle, Triangle, Square, Diamond } from "lucide-react";
import migrationImage from "@/assets/rivermeadow-migration.png";
import cloudMigrationImage from "@/assets/rivermeadow-cloud-migration.png";
import multiCloudGif from "@/assets/multi-cloud-migration.gif";

export default function RiverMeadowPage() {
  const heroAnimation = useScrollAnimation({ threshold: 0.3 });
  
  const gridFeatures = [
    {
      icon: "fas fa-exchange-alt",
      title: "Workload Mobility",
      description: "Seamlessly migrate workloads across any environment with complete automation and zero disruption to your business operations.",
      color: "blue"
    },
    {
      icon: "fas fa-rocket",
      title: "Workload Modernization",
      description: "Transform and upgrade legacy systems to modern platforms efficiently while maintaining full application functionality.",
      color: "green"
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "Workload Optimization",
      description: "Maximize performance and reduce operational costs through intelligent workload placement and resource allocation.",
      color: "purple"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Disaster Recovery",
      description: "Protect critical workloads with comprehensive backup solutions and restore capabilities for business continuity.",
      color: "orange"
    }
  ];

  const modules = [
    {
      icon: "fas fa-cloud-upload-alt",
      title: "Migration",
      color: "blue",
      items: [
        "Be up and running migrations in less than one hour with minimal setup required",
        "Complete more migrations in less time and with significantly reduced risk",
        "Choose between VM-based or OS-based migration approaches",
        "Deploy as SaaS, Private SaaS, or On-premise based on your needs"
      ]
    },
    {
      icon: "fas fa-sync-alt",
      title: "OS Modernization",
      color: "green",
      items: [
        "Safely retire legacy operating systems without business disruption",
        "Avert business risk and achieve full regulatory compliance",
        "Avoid expensive End of Support costs and extended security fees",
        "Minimize security vulnerabilities associated with older OS versions",
        "Fully test applications with newer OS in target clone environment"
      ]
    },
    {
      icon: "fas fa-server",
      title: "Backup & Disaster Recovery",
      color: "purple",
      items: [
        "Quick and easy deployment with intuitive setup process",
        "Low-cost object storage options for efficient data protection",
        "Support for any vSphere environment as the source platform",
        "Near synchronous replication for minimal data loss",
        "Flexible recovery options to meet your business continuity needs"
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="RiverMeadow Workload Mobility Platform | S2 Management"
        description="Automated workload migration platform enabling fast, secure movement of Windows and Linux servers to any cloud environment with minimal downtime."
        keywords="RiverMeadow partner, cloud migration, workload mobility, OS modernization, automated migration, disaster recovery"
        canonicalUrl="https://s2mgt.com/vendors/rivermeadow"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          {/* Hero Section */}
          <section className="min-h-screen relative overflow-hidden flex items-center px-4 md:px-8 pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated background particles */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `
                  radial-gradient(2px 2px at 20px 30px, rgba(74, 144, 226, 0.3), transparent),
                  radial-gradient(2px 2px at 40px 70px, rgba(74, 144, 226, 0.2), transparent),
                  radial-gradient(1px 1px at 90px 40px, rgba(74, 144, 226, 0.4), transparent),
                  radial-gradient(1px 1px at 130px 80px, rgba(74, 144, 226, 0.3), transparent)
                `,
                backgroundRepeat: 'repeat',
                backgroundSize: '150px 150px',
                animation: 'float 20s infinite linear'
              }} />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto w-full">
              <motion.div
                ref={heroAnimation.ref}
                initial={{ opacity: 0, y: 50 }}
                animate={heroAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                {/* Hero Container with Shine Effect */}
                <div className="relative bg-slate-900/90 border-2 border-primary rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300 px-4 py-2 mb-8 relative overflow-hidden group/badge">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                      <span className="relative">Workload Mobility Platform</span>
                    </Badge>
                    
                    <motion.h1 
                      className="text-5xl sm:text-6xl lg:text-8xl font-extralight leading-none mb-8 tracking-tight"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      The Ultimate Workload<br />
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent inline-block" style={{
                        backgroundSize: '300% 300%',
                        animation: 'gradientShift 4s ease-in-out infinite'
                      }}>
                        Mobility Platform
                      </span>
                    </motion.h1>
                    
                    <motion.div 
                      className="flex flex-col md:flex-row gap-6 md:gap-16 justify-center text-slate-300 mb-16 text-sm"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <span className="hover:text-primary transition-colors cursor-default">Lift Your Workloads</span>
                      <span className="hover:text-primary transition-colors cursor-default">Optimize Performance</span>
                      <span className="hover:text-primary transition-colors cursor-default">Protect Your Data</span>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <Button 
                        size="lg"
                        className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden px-12 py-6 text-sm tracking-wider"
                        asChild
                      >
                        <a href="/contact">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                          <span className="relative">Get Started Today</span>
                          <ArrowRight className="ml-6 group-hover:translate-x-2 transition-transform duration-500" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-32 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Comprehensive Workload Mobility Solutions
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Transform your IT infrastructure with enterprise-grade migration, modernization, and protection
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {gridFeatures.map((feature, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                      viewport={{ once: true }}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`text-4xl mb-6 ${
                            feature.color === 'blue' ? 'text-blue-500' : 
                            feature.color === 'green' ? 'text-green-500' : 
                            feature.color === 'purple' ? 'text-purple-500' : 
                            'text-orange-500'
                          }`}
                        >
                          <i className={feature.icon}></i>
                        </motion.div>
                        
                        <h3 className="text-xl font-semibold mb-4 leading-tight">
                          {feature.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Migration Section */}
          <section className="py-32 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto text-center mb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
                  Migration Solutions
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight">
                  Migrate any source to any<br />public or private cloud
                </h2>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-8 justify-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {["On-premise to Cloud", "Cloud to Cloud", "Cloud to On-premise"].map((tab, i) => (
                <button
                  key={i}
                  className="px-10 py-4 bg-transparent border border-transparent text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 text-xs tracking-wider"
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            <motion.div 
              className="max-w-5xl mx-auto aspect-video bg-card flex items-center justify-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={multiCloudGif} 
                alt="Multi-cloud migration animated diagram showing workload mobility across platforms" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </section>

          {/* Statement Section */}
          <section className="py-40 px-4 md:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight leading-snug mb-12">
                  The Workload Mobility Company
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  RiverMeadow offers a market-leading workload mobility platform that empowers customers and partners to seamlessly lift, optimize, and protect workloads across any environment with confidence and ease.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Use Case Split Sections */}
          <section className="grid md:grid-cols-2 min-h-[80vh]">
            <motion.div 
              className="bg-muted relative overflow-hidden flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={migrationImage} 
                alt="Server to cloud migration visualization" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="bg-card p-12 lg:p-24 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-primary mb-8 inline-block">
                OS Modernization
              </span>
              <h2 className="text-3xl lg:text-4xl font-light leading-snug mb-8">
                Mitigate End of<br />Support Risk
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                RiverMeadow's unique OS Modernization capability can help reduce technical debt and security vulnerabilities, whether you're moving to the cloud or staying on-premise. Our proven process offers a fast and safe way to modernize workloads on the target environment while the source remains completely unimpacted.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Windows Server 2012 and 2012 R2 have now reached End of Support (EOS), and these products will no longer receive security updates, non-security updates, bug fixes, or technical support from Microsoft. This puts your business, data, applications, and infrastructure at significant risk from security vulnerabilities and regulatory non-compliance issues.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-4 text-foreground hover:text-primary hover:gap-8 transition-all duration-300 text-sm tracking-wider group"
              >
                Learn More About Modernization 
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </section>

          <section className="grid md:grid-cols-2 min-h-[80vh]">
            <motion.div 
              className="bg-card p-12 lg:p-24 flex flex-col justify-center order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Transition at speed and scale from Windows Server 2003, 2008, or 2012 to Windows Server 2016, 2019, or 2022 with complete confidence. Whether on-premise to on-premise, on-premise to cloud, or cloud to cloud—we can modernize your operating systems and potentially save you millions of dollars in Microsoft Extended Security Update (ESU) fees in one smart, efficient move with RiverMeadow OS Modernization.
              </p>
              <Button 
                size="lg"
                className="group bg-foreground text-background hover:bg-primary hover:text-white border border-foreground hover:border-primary transition-all duration-500 w-fit px-12 py-6 text-sm tracking-wider"
                asChild
              >
                <a href="/contact">
                  Get Started Now
                  <ArrowRight className="ml-6 group-hover:translate-x-2 transition-transform duration-500" />
                </a>
              </Button>
            </motion.div>

            <motion.div 
              className="bg-muted relative overflow-hidden flex items-center justify-center order-1 md:order-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={cloudMigrationImage} 
                alt="Cloud migration visualization with servers and data flow" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </section>

          {/* Modules Section */}
          <section className="py-32 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 mb-8 px-4 py-2">
                    Available Modules
                  </Badge>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                    Lift, Optimize, Protect
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Comprehensive platform modules designed for complete workload lifecycle management
                  </p>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {modules.map((module, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="group bg-slate-50 hover:bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 relative overflow-hidden flex flex-col"
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -15, scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)", transition: { duration: 0.3 } }}
                      viewport={{ once: true }}
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                          className={`text-5xl mb-6 ${
                            module.color === 'blue' ? 'text-blue-500' : 
                            module.color === 'green' ? 'text-green-500' : 
                            'text-purple-500'
                          }`}
                        >
                          <i className={module.icon}></i>
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold mb-6">
                          {module.title}
                        </h3>
                        
                        <ul className="space-y-4 mb-8 flex-grow">
                          {module.items.map((item, i) => (
                            <li key={i} className="text-slate-600 text-sm leading-relaxed pl-6 relative">
                              <span className="absolute left-0 text-primary">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group/btn"
                          asChild
                        >
                          <a href="/contact">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                            <span className="relative">Get Started</span>
                            <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-40 px-4 md:px-8 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                  radial-gradient(2px 2px at 20px 30px, rgba(74, 144, 226, 0.3), transparent),
                  radial-gradient(2px 2px at 40px 70px, rgba(74, 144, 226, 0.2), transparent)
                `,
                backgroundRepeat: 'repeat',
                backgroundSize: '150px 150px',
                animation: 'float 20s infinite linear'
              }} />
            </div>
            
            <div className="max-w-4xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative bg-slate-900/50 border-2 border-blue-500 rounded-2xl p-12 backdrop-blur-sm hover:shadow-blue-500/20 shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent" style={{
                    backgroundSize: '300% 300%',
                    animation: 'gradientShift 4s ease-in-out infinite'
                  }}>
                    Ready to Get Started?
                  </h2>
                  <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Experience the power of automated cloud migration with RiverMeadow's comprehensive workload mobility platform and transform your infrastructure today.
                  </p>
                  <Button 
                    size="lg"
                    className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden px-12 py-6 text-sm tracking-wider"
                    asChild
                  >
                    <a href="/contact">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                      <span className="relative">Contact Us Today</span>
                      <ArrowRight className="ml-6 group-hover:translate-x-2 transition-transform duration-500" />
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
