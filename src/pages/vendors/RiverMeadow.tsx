import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Circle, Triangle, Square, Diamond } from "lucide-react";
import migrationImage from "@/assets/rivermeadow-migration.png";
import cloudMigrationImage from "@/assets/rivermeadow-cloud-migration.png";
import multiCloudGif from "@/assets/multi-cloud-migration.gif";

export default function RiverMeadowPage() {
  const gridFeatures = [
    {
      icon: Circle,
      title: "Workload Mobility",
      description: "Seamlessly migrate workloads across any environment with complete automation and zero disruption to your business operations."
    },
    {
      icon: Triangle,
      title: "Workload Modernization",
      description: "Transform and upgrade legacy systems to modern platforms efficiently while maintaining full application functionality."
    },
    {
      icon: Square,
      title: "Workload Optimization",
      description: "Maximize performance and reduce operational costs through intelligent workload placement and resource allocation."
    },
    {
      icon: Diamond,
      title: "Disaster Recovery",
      description: "Protect critical workloads with comprehensive backup solutions and restore capabilities for business continuity."
    }
  ];

  const modules = [
    {
      title: "Migration",
      items: [
        "Be up and running migrations in less than one hour with minimal setup required",
        "Complete more migrations in less time and with significantly reduced risk",
        "Choose between VM-based or OS-based migration approaches",
        "Deploy as SaaS, Private SaaS, or On-premise based on your needs"
      ]
    },
    {
      title: "OS Modernization",
      items: [
        "Safely retire legacy operating systems without business disruption",
        "Avert business risk and achieve full regulatory compliance",
        "Avoid expensive End of Support costs and extended security fees",
        "Minimize security vulnerabilities associated with older OS versions",
        "Fully test applications with newer OS in target clone environment"
      ]
    },
    {
      title: "Backup & Disaster Recovery",
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
          <section className="min-h-screen relative overflow-hidden flex items-center px-4 md:px-8 pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
            
            <div className="relative z-10 max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.div 
                  className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Workload Mobility Platform
                </motion.div>
                
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-8xl font-extralight leading-none mb-8 tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  The Ultimate Workload<br />
                  <span className="font-light text-primary">Mobility Platform</span>
                </motion.h1>
                
                <motion.div 
                  className="flex flex-col md:flex-row gap-6 md:gap-16 justify-center text-muted-foreground mb-16 text-sm"
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
                    className="group bg-foreground text-background hover:bg-primary hover:text-white border border-foreground hover:border-primary transition-all duration-500 px-12 py-6 text-sm tracking-wider"
                    asChild
                  >
                    <a href="/contact">
                      Get Started Today
                      <ArrowRight className="ml-6 group-hover:translate-x-2 transition-transform duration-500" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-32 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
                {gridFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group bg-card p-12 lg:p-16 hover:-translate-y-4 transition-all duration-500 relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute bottom-0 left-0 w-full h-0 bg-primary/5 group-hover:h-full transition-all duration-500 -z-0" />
                      
                      <div className="relative z-10">
                        <div className="w-10 h-10 border border-foreground flex items-center justify-center mb-12 group-hover:border-primary group-hover:text-primary group-hover:rotate-90 transition-all duration-500">
                          <Icon className="w-5 h-5" />
                        </div>
                        
                        <h3 className="text-xl font-normal mb-6 leading-tight">
                          {feature.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed">
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
          <section className="py-32 px-4 md:px-8 bg-muted">
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
              className="max-w-5xl mx-auto aspect-video bg-card border border-border/50 flex items-center justify-center relative overflow-hidden"
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
          <section className="py-32 px-4 md:px-8 bg-muted">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
                    Available Modules
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight">
                    Lift, Optimize, Protect
                  </h2>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-16">
                {modules.map((module, index) => {
                  const icons = [Circle, Triangle, Square];
                  const Icon = icons[index];
                  
                  return (
                    <motion.div
                      key={index}
                      className="group bg-card p-12 border border-transparent hover:border-primary hover:-translate-y-2 transition-all duration-500 flex flex-col"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 border border-foreground flex items-center justify-center mb-12 group-hover:border-primary group-hover:text-primary transition-all duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-2xl font-normal mb-10">
                        {module.title}
                      </h3>
                      
                      <ul className="space-y-5 mb-12 flex-grow">
                        {module.items.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm leading-relaxed pl-6 relative">
                            <span className="absolute left-0 text-primary">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <a 
                        href="/contact" 
                        className="inline-flex items-center gap-4 text-foreground hover:text-primary hover:gap-8 transition-all duration-300 text-sm tracking-wider group mt-auto"
                      >
                        Get Started 
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-40 px-4 md:px-8 text-center bg-foreground text-background">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight mb-8 text-background">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted mb-16 leading-relaxed max-w-2xl mx-auto">
                  Experience the power of automated cloud migration with RiverMeadow's comprehensive workload mobility platform and transform your infrastructure today.
                </p>
                <Button 
                  size="lg"
                  className="group bg-background text-foreground hover:bg-primary hover:text-white border border-background hover:border-primary transition-all duration-500 px-12 py-6 text-sm tracking-wider"
                  asChild
                >
                  <a href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-6 group-hover:translate-x-2 transition-transform duration-500" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
