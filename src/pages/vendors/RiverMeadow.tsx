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
  const heroAnimation = useScrollAnimation({
    threshold: 0.3,
  });

  const gridFeatures = [
    {
      icon: Circle,
      faIcon: "fas fa-sync-alt",
      color: "text-blue-500",
      title: "Workload Mobility",
      description:
        "Seamlessly migrate workloads across any environment with complete automation and zero disruption to your business operations.",
    },
    {
      icon: Triangle,
      faIcon: "fas fa-rocket",
      color: "text-green-500",
      title: "Workload Modernization",
      description:
        "Transform and upgrade legacy systems to modern platforms efficiently while maintaining full application functionality.",
    },
    {
      icon: Square,
      faIcon: "fas fa-cogs",
      color: "text-purple-500",
      title: "Workload Optimization",
      description:
        "Maximize performance and reduce operational costs through intelligent workload placement and resource allocation.",
    },
    {
      icon: Diamond,
      faIcon: "fas fa-shield-alt",
      color: "text-red-500",
      title: "Disaster Recovery",
      description:
        "Protect critical workloads with comprehensive backup solutions and restore capabilities for business continuity.",
    },
  ];

  const modules = [
    {
      title: "Migration",
      faIcon: "fas fa-plane-departure",
      color: "text-blue-500",
      items: [
        "Be up and running migrations in less than one hour with minimal setup required",
        "Complete more migrations in less time and with significantly reduced risk",
        "Choose between VM-based or OS-based migration approaches",
        "Deploy as SaaS, Private SaaS, or On-premise based on your needs",
      ],
    },
    {
      title: "OS Modernization",
      faIcon: "fas fa-sync",
      color: "text-green-500",
      items: [
        "Safely retire legacy operating systems without business disruption",
        "Avert business risk and achieve full regulatory compliance",
        "Avoid expensive End of Support costs and extended security fees",
        "Minimize security vulnerabilities associated with older OS versions",
        "Fully test applications with newer OS in target clone environment",
      ],
    },
    {
      title: "Backup & Disaster Recovery",
      faIcon: "fas fa-shield-alt",
      color: "text-purple-500",
      items: [
        "Quick and easy deployment with intuitive setup process",
        "Low-cost object storage options for efficient data protection",
        "Support for any vSphere environment as the source platform",
        "Near synchronous replication for minimal data loss",
        "Flexible recovery options to meet your business continuity needs",
      ],
    },
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
          <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16 relative overflow-hidden min-h-screen flex items-center justify-center">
            {/* Animated background particles */}
            <div className="fixed inset-0 pointer-events-none z-0">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                  radial-gradient(2px 2px at 20px 30px, rgba(74, 144, 226, 0.3), transparent),
                  radial-gradient(2px 2px at 40px 70px, rgba(74, 144, 226, 0.2), transparent),
                  radial-gradient(1px 1px at 90px 40px, rgba(74, 144, 226, 0.4), transparent),
                  radial-gradient(1px 1px at 130px 80px, rgba(74, 144, 226, 0.3), transparent)
                `,
                  backgroundRepeat: "repeat",
                  backgroundSize: "150px 150px",
                  animation: "float 20s infinite linear",
                }}
              />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                ref={heroAnimation.ref}
                initial={{ opacity: 0, y: 50 }}
                animate={heroAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto"
              >
                {/* Hero Container */}
                <div className="relative bg-slate-900/90 border-2 border-primary rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                  {/* Content */}
                  <div className="space-y-6 sm:space-y-8 text-center relative z-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={heroAnimation.isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <Badge
                        variant="outline"
                        className="border-primary/50 text-primary bg-primary/10 hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 relative overflow-hidden group/badge text-xs sm:text-sm"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                        <span className="relative">Workload Mobility Platform</span>
                      </Badge>
                    </motion.div>

                    <motion.h1
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                      initial={{ opacity: 0, y: 30 }}
                      animate={heroAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <span
                        className="bg-gradient-to-r from-primary via-blue-500 to-green-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: "300% 300%",
                          animation: "gradientShift 4s ease-in-out infinite",
                        }}
                      >
                        The Workload That Does It All
                      </span>
                      <br />
                      <span
                        className="bg-gradient-to-r from-green-400 via-blue-500 to-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: "300% 300%",
                          animation: "gradientShift 4s ease-in-out infinite",
                        }}
                      >
                        Mobility Platform
                      </span>
                    </motion.h1>

                    <motion.div
                      className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center text-slate-300 mb-8 text-sm sm:text-base"
                      initial={{ opacity: 0, y: 30 }}
                      animate={heroAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      {[
                        { icon: "fas fa-arrow-up", text: "Lift Your Workloads" },
                        { icon: "fas fa-chart-line", text: "Optimize Performance" },
                        { icon: "fas fa-shield-alt", text: "Protect Your Data" },
                      ].map((item, index) => (
                        <motion.span
                          key={index}
                          className="flex items-center gap-2 hover:text-primary transition-all duration-300 cursor-default group/item"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <i
                            className={`${item.icon} text-primary group-hover/item:rotate-12 transition-transform duration-300`}
                          />
                          {item.text}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={heroAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-8 sm:px-12 py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
                        asChild
                      >
                        <a href="/contact">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                          <span className="relative">Get Started Today</span>
                          <ArrowRight className="ml-4 relative group-hover/btn:translate-x-2 transition-transform duration-500" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
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
                        <motion.div
                          className="w-16 h-16 border-2 border-foreground/20 rounded-lg flex items-center justify-center mb-8 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500 bg-background/50"
                          whileHover={{
                            rotate: [0, -5, 5, -5, 0],
                            scale: 1.1,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                          }}
                        >
                          <i
                            className={`${feature.faIcon} text-2xl ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                          />
                        </motion.div>

                        <h3 className="text-xl font-normal mb-6 leading-tight">{feature.title}</h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
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
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">Migration Solutions</div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight">
                  Migrate any source to
                  <br />
                  public or private cloud
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
          <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight leading-snug mb-6 sm:mb-8 md:mb-12">
                  The Workload Mobility Company
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  RiverMeadow offers a market-leading workload mobility platform that empowers customers and partners to
                  seamlessly lift, optimize, and protect workloads across any environment with confidence and ease.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Use Case Split Sections */}
          <section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] md:min-h-[80vh]">
            <motion.div
              className="bg-muted relative overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[400px]"
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
              className="bg-card p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-primary mb-4 sm:mb-6 md:mb-8 inline-block">
                OS Modernization
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-snug mb-4 sm:mb-6 md:mb-8">
                Mitigate End of
                <br />
                Support Risk
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                RiverMeadow's unique OS Modernization capability can help reduce technical debt and security
                vulnerabilities, whether you're moving to the cloud or staying on-premise. Our proven process offers a
                fast and safe way to modernize workloads on the target environment while the source remains completely
                unimpacted.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Windows Server 2012 and 2012 R2 have now reached End of Support (EOS), and these products will no longer
                receive security updates, non-security updates, bug fixes, or technical support from Microsoft. This
                puts your business, data, applications, and infrastructure at significant risk from security
                vulnerabilities and regulatory non-compliance issues.
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

          <section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] md:min-h-[80vh]">
            <motion.div
              className="bg-card p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Transition at speed and scale from Windows Server 2003, 2008, or 2012 to Windows Server 2016, 2019, or
                2022 with complete confidence. Whether on-premise to on-premise, on-premise to cloud, or cloud to
                cloud—we can modernize your operating systems and potentially save you millions of dollars in Microsoft
                Extended Security Update (ESU) fees in one smart, efficient move with RiverMeadow OS Modernization.
              </p>
              <Button
                size="lg"
                className="group bg-foreground text-background hover:bg-primary hover:text-white border border-foreground hover:border-primary transition-all duration-500 w-full sm:w-fit px-8 sm:px-12 py-5 sm:py-6 text-xs sm:text-sm tracking-wider"
                asChild
              >
                <a href="/contact">
                  Get Started Now
                  <ArrowRight className="ml-4 sm:ml-6 group-hover:translate-x-2 transition-transform duration-500" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="bg-muted relative overflow-hidden flex items-center justify-center order-1 md:order-2 min-h-[300px] sm:min-h-[400px]"
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
          <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-muted">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6 md:mb-8">
                    Available Modules
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight">
                    Lift, Optimize, Protect
                  </h2>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                {modules.map((module, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="group bg-card p-6 sm:p-8 md:p-10 lg:p-12 border border-transparent hover:border-primary hover:-translate-y-2 transition-all duration-500 flex flex-col"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-foreground/20 rounded-lg flex items-center justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500 bg-background/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{
                          rotate: [0, -8, 8, -8, 0],
                          scale: 1.15,
                        }}
                      >
                        <i
                          className={`${module.faIcon} text-xl sm:text-2xl ${module.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </motion.div>

                      <h3 className="text-xl sm:text-2xl font-normal mb-6 sm:mb-8 md:mb-10">{module.title}</h3>

                      <ul className="space-y-3 sm:space-y-4 md:space-y-5 mb-8 sm:mb-10 md:mb-12 flex-grow">
                        {module.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground text-xs sm:text-sm leading-relaxed pl-6 relative"
                          >
                            <span className="absolute left-0 text-primary">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="/contact"
                        className="inline-flex items-center gap-4 text-foreground hover:text-primary hover:gap-8 transition-all duration-300 text-xs sm:text-sm tracking-wider group mt-auto"
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
          <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8 text-center bg-foreground text-background">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-4 sm:mb-6 md:mb-8 text-background">
                  Ready to Get Started?
                </h2>
                <p className="text-base sm:text-lg text-muted mb-8 sm:mb-12 md:mb-16 leading-relaxed max-w-2xl mx-auto">
                  Experience the power of automated cloud migration with RiverMeadow's comprehensive workload mobility
                  platform and transform your infrastructure today.
                </p>
                <Button
                  size="lg"
                  className="group bg-background text-foreground hover:bg-primary hover:text-white border border-background hover:border-primary transition-all duration-500 w-full sm:w-fit px-8 sm:px-12 py-5 sm:py-6 text-xs sm:text-sm tracking-wider"
                  asChild
                >
                  <a href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-4 sm:ml-6 group-hover:translate-x-2 transition-transform duration-500" />
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
