import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, HardDrive, Zap, Cloud, Shield, Monitor, Settings, CheckCircle, Target, Award, DollarSign, Clock, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "All-in-One Platform",
    description: "Comprehensive, all-in-one platform covering all data protection needs"
  },
  {
    icon: Cloud,
    title: "Diverse Environment Support",
    description: "Support for diverse environments, including physical, virtual, cloud, hybrid, and SaaS"
  },
  {
    icon: RotateCcw,
    title: "Adaptive Recovery",
    description: "Adaptive recovery options tailored to meet varying business continuity requirements"
  },
  {
    icon: HardDrive,
    title: "Flexible Deployment",
    description: "Flexible deployment models to fit on-premises, cloud, or hybrid infrastructures"
  },
  {
    icon: Server,
    title: "Storage Integration",
    description: "Seamless integration with leading storage technologies for optimized performance"
  },
  {
    icon: Zap,
    title: "Infinite Scalability",
    description: "Infinite scalability to grow with your business across locations, workloads, and users"
  },
  {
    icon: Shield,
    title: "High-Speed Backups",
    description: "High-speed, reliable backups that safeguard workloads across virtual machines, cloud platforms, physical servers, SaaS applications, and hybrid systems"
  },
  {
    icon: RotateCcw,
    title: "Instant Restore",
    description: "Instant restore capabilities to recover VMs, servers, files, folders, or application data directly to original or alternative locations"
  },
  {
    icon: Shield,
    title: "Ransomware Defense",
    description: "Built-in ransomware defense to enhance cyber resilience and data integrity"
  },
  {
    icon: CheckCircle,
    title: "Compliance Standards",
    description: "Meets key cybersecurity and data protection compliance standards"
  },
  {
    icon: Monitor,
    title: "Infrastructure Monitoring",
    description: "Real-time IT infrastructure monitoring, including VMware environments"
  },
  {
    icon: Cloud,
    title: "BaaS for MSPs",
    description: "Backup-as-a-Service (BaaS) offerings tailored for Managed Service Providers (MSPs)"
  }
];

const deliverables = [
  {
    icon: Zap,
    title: "2X Faster Performance",
    description: "2X faster with native change tracking technology for enhanced backup speed"
  },
  {
    icon: DollarSign,
    title: "Lower TCO",
    description: "49% lower TCO than other market vendors, providing significant cost savings"
  },
  {
    icon: Award,
    title: "High Customer Rating",
    description: "4.8/5 average rating for saving time and money from satisfied customers"
  },
  {
    icon: RotateCcw,
    title: "Multiple Recovery Options",
    description: "12+ Recovery options to restore lost/deleted data with precision and flexibility"
  },
  {
    icon: Clock,
    title: "Quick Deployment",
    description: "5 minutes to deploy, configure and run the backup job for immediate protection"
  }
];

const keyBenefits = [
  "Award-winning platform with proven track record",
  "Unified dashboard for simplified management",
  "Cost-effective solution with lower TCO",
  "Fast deployment and configuration",
  "Comprehensive protection for all environments",
  "Built-in cyber resilience features"
];

const idealFor = [
  "Small and medium businesses (SMBs)",
  "Large enterprises with complex infrastructures",
  "Managed Service Providers (MSPs)",
  "Organizations requiring on-premises data control",
  "Companies with hybrid IT environments",
  "Businesses needing compliance adherence"
];

export default function OnPremBackup() {
  const heroAnimation = useScrollAnimation({ threshold: 0.3 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.2 });
  const deliverableAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="On-Premises Backup Solutions MENA - Local Data Protection | S2 Solutions"
        description="Enterprise on-premises backup solutions for MENA region. Local data protection with high-performance platforms offering fast recovery, deduplication, and secure storage. Serving UAE, Saudi Arabia, and Middle East."
        keywords="on-premises backup MENA, local backup UAE, enterprise backup Middle East, data protection Saudi Arabia, backup appliance, deduplication, fast recovery"
        canonicalUrl="https://s2mgt.com/solutions/onprem-backup"
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16 relative overflow-hidden h-[75vh] flex items-center justify-center">
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
                backgroundRepeat: 'repeat',
                backgroundSize: '150px 150px',
                animation: 'float 20s infinite linear'
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
              <motion.div 
                className="relative bg-slate-900/90 border-2 border-blue-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Content */}
                  <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                    <Badge 
                      variant="outline" 
                      className="border-blue-500/50 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 relative overflow-hidden group/badge text-xs sm:text-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                      <span className="relative">Backup Solutions</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        On Prem Backup
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Comprehensive on-premise backup solutions with rapid recovery and local data control for complete infrastructure protection.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=On%20Premise%20Backup%20Consultation', '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/video hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                      {/* Video Container */}
                      <div className="absolute inset-0">
                        <iframe 
                          width="1296" 
                          height="729" 
                          src="https://www.youtube.com/embed/p267EiNziU4" 
                          title="NAKIVO Backup &amp; Replication Overview" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          className="w-full h-full border-none rounded-xl"
                        />
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 md:py-24 relative overflow-hidden" 
          style={{ background: 'var(--gradient-blue-deep)' }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, #194BFA 0%, #006AE8 100%)',
              backgroundSize: '100% 100%'
            }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Main Content Card */}
              <div className="backdrop-blur-xl bg-card/80 border border-border/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="text-center space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                      The Complete Data Protection Platform Your Business Deserves
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    <p className="text-xl md:text-2xl text-primary font-semibold">
                      Protect everything. Recover instantly. Scale endlessly.
                    </p>
                    <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                      NAKIVO Backup & Replication v11.0.1 delivers enterprise-grade backup, replication, instant restore, and disaster recovery in one unified solution. Trusted by thousands of organizations worldwide, we make data protection simple, fast, and affordable.
                    </p>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12">
                    {[
                      { value: "2X", label: "Faster Backups", icon: "fas fa-rocket" },
                      { value: "49%", label: "Lower Costs", icon: "fas fa-dollar-sign" },
                      { value: "5 Min", label: "Setup Time", icon: "fas fa-clock" },
                      { value: "4.8★", label: "Star Rating", icon: "fas fa-star" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        whileHover={{ 
                          y: -8, 
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                        viewport={{ once: true }}
                        className="backdrop-blur-sm bg-primary/10 border border-primary/20 p-6 rounded-2xl hover:bg-primary/15 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="text-xl text-primary mb-3 relative z-10"
                        >
                          <i className={stat.icon}></i>
                        </motion.div>
                        <div className="text-2xl font-bold text-primary mb-2 relative z-10">{stat.value}</div>
                        <div className="text-sm font-medium text-foreground relative z-10">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Platform Overview */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 md:py-24 relative overflow-hidden" 
          style={{ background: 'var(--gradient-light-custom)' }}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose NAKIVO Backup & Replication?</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-lg mb-4 font-semibold">ALL-IN-ONE SOLUTION</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Backup</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Replication</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Instant Restore</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Ransomware Protection</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>IT Monitoring</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Site Recovery</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-lg mb-4 font-semibold">MULTI-PLATFORM SUPPORT</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>VMware vSphere</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Microsoft Hyper-V</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Nutanix AHV</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Proxmox VE</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Amazon EC2</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Windows, Linux</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>NAS, Microsoft 365</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Oracle Database (via RMAN)</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-lg mb-4 font-semibold">FLEXIBLE RECOVERY</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    Instantly restore VMs, physical machines, files, folders, and application objects from backups to original or custom locations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-lg mb-4 font-semibold">VERSATILE DEPLOYMENT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    Install on NAS devices for a complete backup appliance or deploy on Windows/Linux or as a VMware/Nutanix VA or AMI in Amazon EC2.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-lg mb-4 font-semibold">LIMITLESS SCALABILITY</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    Supports single or multi-tenant needs. Efficiently scales for ROBO and edge environments. One instance protects over 8,000 VMs across 300+ locations for our biggest clients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Universal Platform Support */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 md:py-24 relative overflow-hidden" 
          style={{ background: 'var(--gradient-blue-bright)' }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Universal Platform Support</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                NAKIVO Backup & Replication can protect the following platforms across your entire infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="backdrop-blur-xl bg-card/80 border-l-4 border-l-primary border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-foreground text-xl font-bold">Virtual Environments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>VMware vSphere 5.5–8.0U3b</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Microsoft Hyper-V 2012–2022</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Nutanix AHV v6.5–v6.10 (LTS)</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Proxmox VE 8.x</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>VMware Cloud Director 10.2.1–10.6</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border-l-4 border-l-primary border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-foreground text-xl font-bold">Cloud Platforms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Amazon EC2 (all regions)</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>All instance types</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>VPC and Classic networks</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Microsoft 365 complete suite</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border-l-4 border-l-primary border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-foreground text-xl font-bold">Physical Systems</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Windows Server 2012–2025</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Windows 11/10/8 Professional</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Ubuntu Server/Desktop 16.04–24.04</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>RHEL, SUSE, CentOS, Debian</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>AlmaLinux, Oracle Linux, Rocky Linux</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border-l-4 border-l-primary border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-foreground text-xl font-bold">Applications & Databases</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Oracle Database 11g R2–23c Free</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Microsoft SQL Server</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Exchange & Active Directory</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Application-consistent backups</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Fast and Efficient Backup */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'var(--gradient-orange-section)' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Fast and Efficient Backup</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                With NAKIVO Backup & Replication, you can reliably protect your virtual, cloud, physical, SaaS and hybrid environments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 text-center group">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">💻</div>
                  <CardTitle className="text-foreground text-xl mb-2 font-bold">VM Backup</CardTitle>
                  <p className="text-primary text-sm font-medium mb-4">Image-based, agentless backup for VMware vSphere, Microsoft Hyper-V, Nutanix AHV VMs and Proxmox VE VMs</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Complete VM protection without agents</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Application-consistent backups</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Native change tracking efficiency</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Support for all major hypervisors</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 text-center group">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">📧</div>
                  <CardTitle className="text-foreground text-xl mb-2 font-bold">Microsoft 365 Backup</CardTitle>
                  <p className="text-primary text-sm font-medium mb-4">Full and incremental backups for Exchange Online, Microsoft Teams, OneDrive for Business and SharePoint Online data</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>MFA-enabled Microsoft 365 accounts</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Exchange Online protection</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Teams, OneDrive, SharePoint coverage</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Complete SaaS data protection</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 text-center group">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">🖥️</div>
                  <CardTitle className="text-foreground text-xl mb-2 font-bold">Physical Machine Backup</CardTitle>
                  <p className="text-primary text-sm font-medium mb-4">Image-based, incremental backup for Windows- and Linux-based servers and workstations</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Complete server protection</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Workstation backup support</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Incremental backup efficiency</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Cross-platform compatibility</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 text-center group">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">📂</div>
                  <CardTitle className="text-foreground text-xl mb-2 font-bold">File Share Backup</CardTitle>
                  <p className="text-primary text-sm font-medium mb-4">Fast incremental backups of unstructured data in SMB/NFS file shares</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>NAS devices protection</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Windows and Linux machines</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>SMB/NFS protocol support</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Incremental efficiency</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 text-center group">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">☁️</div>
                  <CardTitle className="text-foreground text-xl mb-2 font-bold">Amazon EC2 Backup</CardTitle>
                  <p className="text-primary text-sm font-medium mb-4">Image-based, incremental backup for Amazon EC2 instances</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>All AWS regions support</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>All instance types</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Incremental backup technology</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Cloud-native protection</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-6 hover:shadow-lg hover:scale-105 transition-all duration-500 text-center group">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">🗃️</div>
                  <CardTitle className="text-foreground text-xl mb-2 font-bold">Application Support</CardTitle>
                  <p className="text-primary text-sm font-medium mb-4">Application-aware consistent backup for applications and databases</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Microsoft SQL Server support</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Exchange Server protection</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Active Directory backup</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Oracle Database via RMAN</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 md:py-24 relative overflow-hidden" 
          style={{ background: 'var(--gradient-blue-vibrant)' }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Performance</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Boost backup, replication, and recovery speeds by up to 2 times and reduce network load by as much as 50%.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <div className="backdrop-blur-xl bg-card/80 border border-border/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/10 border-b border-border/50">
                      <th className="text-foreground font-bold p-6 text-left text-lg">Performance Feature</th>
                      <th className="text-foreground font-bold p-6 text-left text-lg">Improvement</th>
                      <th className="text-foreground font-bold p-6 text-left text-lg">Business Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                      <td className="p-6 text-foreground font-semibold">Native Change Tracking</td>
                      <td className="p-6 text-primary font-medium">2X faster backups</td>
                      <td className="p-6 text-muted-foreground">VMware CBT, Hyper-V RCT, Nutanix AHV CRT for faster incremental backups</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                      <td className="p-6 text-foreground font-semibold">LAN-Free Data Transfer</td>
                      <td className="p-6 text-primary font-medium">50% network load reduction</td>
                      <td className="p-6 text-muted-foreground">HotAdd or Direct SAN Access modes offload production networks</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                      <td className="p-6 text-foreground font-semibold">Network Acceleration</td>
                      <td className="p-6 text-primary font-medium">Enhanced performance</td>
                      <td className="p-6 text-muted-foreground">Built-in acceleration for busy LAN and WAN environments</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="p-6 text-foreground font-semibold">Bandwidth Throttling</td>
                      <td className="p-6 text-primary font-medium">Controlled impact</td>
                      <td className="p-6 text-muted-foreground">Global or per-job bandwidth rules for working hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 md:py-24 relative overflow-hidden" 
          style={{ background: 'var(--gradient-dark)' }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-8 hover:shadow-lg hover:scale-105 transition-all duration-500 relative group">
                <div className="absolute top-6 left-8 text-6xl text-primary/20 font-serif">"</div>
                <CardContent className="pt-12 space-y-6">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors text-lg italic leading-relaxed">
                    75% lower backup costs. We save more than 50% on VMware backup and additionally 25% in storage space costs with better deduplication, lowering our backup expenses by 75% overall.
                  </p>
                  <div className="space-y-1">
                    <div className="text-foreground font-bold">Rick Braddy</div>
                    <div className="text-primary text-sm font-medium">CEO/CTO at SoftNAS</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-8 hover:shadow-lg hover:scale-105 transition-all duration-500 relative group">
                <div className="absolute top-6 left-8 text-6xl text-primary/20 font-serif">"</div>
                <CardContent className="pt-12 space-y-6">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors text-lg italic leading-relaxed">
                    7X faster backups. The solution is faster than other products I have used and supports many different configurations.
                  </p>
                  <div className="space-y-1">
                    <div className="text-foreground font-bold">Praful Soni</div>
                    <div className="text-primary text-sm font-medium">Senior IT Manager at Transpek</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-xl bg-card/80 border border-border/50 p-8 hover:shadow-lg hover:scale-105 transition-all duration-500 relative group">
                <div className="absolute top-6 left-8 text-6xl text-primary/20 font-serif">"</div>
                <CardContent className="pt-12 space-y-6">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors text-lg italic leading-relaxed">
                    99% faster recovery. With granular recovery, we can restore files in just a few minutes, while previously it would have taken us hours to restore the entire VM that held it.
                  </p>
                  <div className="space-y-1">
                    <div className="text-foreground font-bold">Krister Laag</div>
                    <div className="text-primary text-sm font-medium">CIO at Stendahls</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-16">
              <div className="backdrop-blur-xl bg-card/60 border border-border/50 p-8 rounded-2xl hover:shadow-lg transition-all duration-500">
                <p className="text-foreground text-lg mb-2 font-bold">Industry Recognition</p>
                <p className="text-muted-foreground">4.8/5 stars with 96% willing to recommend | Named in Gartner® Magic Quadrant™ 2024 | Top rated on Capterra, TrustRadius, and Spiceworks</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--primary)) 0%, transparent 50%), 
                               radial-gradient(circle at 80% 20%, hsl(var(--secondary)) 0%, transparent 50%)`,
              backgroundSize: '150px 150px'
            }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="backdrop-blur-xl bg-card/90 border border-border/50 p-12 lg:p-16 text-center rounded-3xl shadow-2xl hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">Ready to Transform Your Data Protection?</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Join thousands of IT professionals who trust NAKIVO to protect their most critical business data. With 2X faster backups, 49% lower costs, and 5-minute deployment, there's never been a better time to upgrade your data protection strategy.
                  </p>
                </div>
                
                <div className="flex justify-center items-center pt-4">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 w-full sm:w-auto relative overflow-hidden group text-white"
                    style={{ background: 'var(--gradient-orange-button)' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    <span className="relative">Contact Us</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}