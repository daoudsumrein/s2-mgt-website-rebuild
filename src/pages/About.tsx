import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Building2, Globe, Award, CheckCircle, ArrowRight, Target, Lightbulb, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const heroAnimation = useScrollAnimation({ threshold: 0.3 });
  const missionAnimation = useScrollAnimation({ threshold: 0.2 });
  const capabilitiesAnimation = useScrollAnimation({ threshold: 0.2 });
  const valuesAnimation = useScrollAnimation({ threshold: 0.2 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead 
        title="Data Protection & DR Specialists in UAE, KSA & MENA"
        description="Leading MENA IT consultancy since 2013, specializing in data protection, disaster recovery, backup, and business continuity for government & enterprise clients."
        keywords="OpenText Data Protection Distributor MENA,Business Continuity & Resilience KSA,Disaster Recovery Services UAE,DR Orchestration & Automation MENA, Cybersecurity & Endpoint Protection UAE, High Availability Solutions KSA"
        canonicalUrl="https://s2mgt.com/about"
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 md:py-16 relative overflow-hidden h-[75vh] flex items-center justify-center">
          {/* Animated background particles */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `
                radial-gradient(2px 2px at 20px 30px, rgba(35, 146, 207, 0.3), transparent),
                radial-gradient(2px 2px at 40px 70px, rgba(35, 146, 207, 0.2), transparent),
                radial-gradient(1px 1px at 90px 40px, rgba(35, 146, 207, 0.4), transparent),
                radial-gradient(1px 1px at 130px 80px, rgba(35, 146, 207, 0.3), transparent)
              `,
              backgroundRepeat: 'repeat',
              backgroundSize: '150px 150px',
              animation: 'float 20s infinite linear'
            }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              ref={heroAnimation.ref} 
              initial={{ opacity: 0, y: 50 }} 
              animate={heroAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
              transition={{ duration: 0.8, ease: "easeOut" }} 
              className="max-w-5xl mx-auto text-center"
            >
              {/* Hero Glass Container */}
              <div className="bg-white/90 border-2 border-[#2392CF] rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl hover:shadow-[#2392CF]/20 transition-all duration-500">
                <Badge variant="outline" className="border-[#2392CF]/50 text-[#2392CF] bg-[#2392CF]/10 hover:bg-[#2392CF]/20 mb-6 text-sm px-6 py-2 font-bold uppercase tracking-wider">
                  Founded 2013
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                  <span className="bg-gradient-to-r from-[#2392CF] via-[#1E7FB8] to-[#2392CF] bg-clip-text text-transparent" style={{
                    backgroundSize: '300% 300%',
                    animation: 'gradientShift 4s ease-in-out infinite'
                  }}>
                    About S2 Management Solutions
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
                  Delivering secure, scalable IT transformation across MENA since 2013. We are a consultancy-led Value-Added Distributor specializing in data protection, high availability, disaster recovery, and application modernization.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              ref={missionAnimation.ref}
              initial={{ opacity: 0, y: 30 }}
              animate={missionAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <div className="inline-block bg-[#2392CF]/10 backdrop-blur-xl border border-[#2392CF]/20 text-[#2392CF] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6">
                  Architecting Enterprise Solutions
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="bg-white backdrop-blur-xl border border-slate-200 rounded-3xl p-8 md:p-10 shadow-lg">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Since 2013, S2 Management Solutions has been at the forefront of critical IT infrastructure transformation in the Middle East. We don't just distribute technology - we architect solutions that protect, modernize, and optimize enterprise environments.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Our consultancy-first approach ensures every implementation is tailored to specific infrastructure requirements, compliance needs, and business objectives across government, BFSI, and critical infrastructure sectors.
                  </p>
                </div>

                {/* Right Content - Key Points */}
                <div className="space-y-4">
                  {[
                    { 
                      title: "Technical Expertise", 
                      desc: "S2's technical team brings together certified experts with deep industry experience and advanced technical knowledge, ensuring the delivery of reliable, secure, and scalable IT solutions" 
                    },
                    { 
                      title: "Regional Focus", 
                      desc: "Deep understanding of MENA region regulatory compliance and infrastructure requirements" 
                    },
                    { 
                      title: "End-to-End Delivery", 
                      desc: "From assessment and design to implementation and ongoing support" 
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 bg-[#2392CF]/5 backdrop-blur-xl border border-[#2392CF]/10 rounded-2xl p-6 hover:bg-[#2392CF]/10 hover:border-[#2392CF]/30 transition-all"
                    >
                      <CheckCircle className="w-6 h-6 text-[#2392CF] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800 text-lg mb-2">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              ref={capabilitiesAnimation.ref}
              initial={{ opacity: 0, y: 30 }}
              animate={capabilitiesAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <div className="inline-block bg-[#2392CF]/10 backdrop-blur-xl border border-[#2392CF]/20 text-[#2392CF] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Why Choose S2
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6">
                  Our Capabilities
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Comprehensive expertise delivering enterprise-grade solutions across MENA
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { icon: Building2, title: "Enterprise Scale", desc: "Government and large enterprise deployments with proven track record" },
                  { icon: Globe, title: "Regional Presence", desc: "MENA region operations since 2013 with deep market understanding" },
                  { icon: Users, title: "Expert Team", desc: "Certified technical consultants with extensive implementation experience" },
                  { icon: Award, title: "Proven Results", desc: "Successful critical infrastructure projects across multiple sectors" },
                  { icon: Target, title: "Client-Focused", desc: "Tailored solutions aligned with your specific business objectives" },
                  { icon: CheckCircle, title: "Quality Delivery", desc: "End-to-end support from planning through implementation and beyond" }
                ].map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white backdrop-blur-xl border border-slate-200 rounded-2xl p-8 text-center hover:bg-slate-50 hover:border-[#2392CF]/50 transition-all hover:-translate-y-2 group shadow-lg"
                  >
                    <div className="flex justify-center mb-6">
                      <capability.icon className="w-12 h-12 text-[#2392CF] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{capability.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{capability.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              ref={valuesAnimation.ref}
              initial={{ opacity: 0, y: 30 }}
              animate={valuesAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <div className="inline-block bg-[#2392CF]/10 backdrop-blur-xl border border-[#2392CF]/20 text-[#2392CF] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  What Drives Us
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6">
                  Our Core Values
                </h2>
              </div>

              {/* Our Core Narrative */}
              <div className="max-w-4xl mx-auto mb-16">
                <div className="bg-white backdrop-blur-xl border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-8">Our Core</h3>
                  <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                    <p>
                      At our core, S2 is built on one simple principle - <span className="text-[#2392CF] font-semibold">total commitment to those we serve</span>.
                    </p>
                    <p>
                      We don't push products. We <span className="text-[#2392CF] font-semibold">listen, we learn, and we adapt</span>. Our team takes the time to understand your challenges - whether you're a partner, a client, or both - and we craft <span className="text-[#2392CF] font-semibold">solutions that fit you</span>, not the other way around.
                    </p>
                    <p>
                      With a <span className="text-[#2392CF] font-semibold">diverse portfolio</span> across cybersecurity, data protection, modernization, and continuity, we're uniquely positioned to <span className="text-[#2392CF] font-semibold">mix, match, and customize</span> offerings that work for your environment - efficiently, intelligently, and always with <span className="text-[#2392CF] font-semibold">your goals in mind</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Values Cards */}
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  { 
                    icon: Target, 
                    title: "Technical Excellence", 
                    desc: "We maintain the highest levels of technical certification and expertise to deliver enterprise-grade solutions that work reliably in production environments." 
                  },
                  { 
                    icon: Heart, 
                    title: "Client Partnership", 
                    desc: "Every engagement is a partnership. We invest time to understand your unique requirements and architect solutions that align with your business objectives." 
                  },
                  { 
                    icon: Lightbulb, 
                    title: "Continuous Innovation", 
                    desc: "We stay ahead of technology trends to bring the latest data protection, disaster recovery, and application modernization capabilities to our clients." 
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white backdrop-blur-xl border border-slate-200 rounded-3xl p-8 hover:bg-slate-50 hover:border-[#2392CF]/50 transition-all hover:-translate-y-2 shadow-lg"
                  >
                    <div className="flex justify-center mb-6">
                      <value.icon className="w-12 h-12 text-[#2392CF]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-center">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ctaAnimation.ref}
              initial={{ opacity: 0, y: 30 }}
              animate={ctaAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="bg-white backdrop-blur-xl border border-slate-200 rounded-3xl p-10 md:p-16 shadow-2xl">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6">
                  Ready to Partner with S2?
                </h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  Let's discuss how our expertise can help transform your IT infrastructure
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#2392CF] to-[#1E7FB8] hover:from-[#1E7FB8] hover:to-[#1A6EA3] text-white px-8 py-6 text-lg shadow-2xl hover:shadow-[#2392CF]/50 transition-all hover:scale-105"
                    asChild
                  >
                    <a href="/contact">
                      Contact Our Team
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#2392CF] text-[#2392CF] hover:bg-[#2392CF] hover:text-white px-8 py-6 text-lg"
                    asChild
                  >
                    <a href="/services">
                      View Our Services
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}