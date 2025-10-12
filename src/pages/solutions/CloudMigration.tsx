import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, CloudUpload, Database, Shield, Workflow, Server, HardDrive, Cloud, Timer, Target, Repeat, Settings, Zap, Lock, TrendingUp, CheckSquare, DollarSign, RefreshCw, Layers, FileText, Wrench, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CloudMigration() {
  const heroAnimation = useScrollAnimation({
    threshold: 0.3
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <SEOHead
        title="Cloud Migration & Modernization - Agentless Multi-Cloud Platform"
        description="Enterprise cloud migration platform with zero agents. Migrate physical, virtual, or cloud workloads to AWS, Azure, VMware, Google Cloud with OS modernization."
        keywords="cloud migration, agentless migration, OS modernization, multi-cloud migration, AWS migration, Azure migration"
        canonicalUrl="https://s2mgt.com/solutions/cloud-migration"
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16 relative overflow-hidden h-[75vh] flex items-center justify-center">
          {/* Animated background particles */}
          <div className="fixed inset-0 pointer-events-none z-0">
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              ref={heroAnimation.ref} 
              initial={{ opacity: 0, y: 50 }} 
              animate={heroAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
              transition={{ duration: 0.8, ease: "easeOut" }} 
              className="max-w-7xl mx-auto"
            >
              {/* Hero Container */}
              <div className="relative bg-slate-900/90 border-2 border-blue-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Content */}
                  <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                    <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 relative overflow-hidden group/badge text-xs sm:text-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                      <span className="relative">Enterprise Cloud Migration</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block" style={{
                        backgroundSize: '300% 300%',
                        animation: 'gradientShift 4s ease-in-out infinite'
                      }}>
                        Agentless Cloud Migration
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Migrate workloads faster and more securely with minimal downtime. No agents. No source disruption. Multi-cloud platform for seamless migrations.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto" 
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Cloud%20Migration%20Consultation', '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/video hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                      {/* Video Container */}
                      <iframe 
                        src="https://www.youtube.com/embed/9rXwvI7JJdY?si=PZ-Pgvy60mirCghm" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="absolute inset-0 w-full h-full rounded-lg sm:rounded-xl"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "<1 Hr", label: "Setup & Start Migrating" },
                { number: "95%", label: "First Migration Success" },
                { number: "Zero", label: "Agents Required" },
                { number: "10x", label: "Faster Than Manual" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center hover:bg-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-2 shadow-xl"
                >
                  <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agentless Features Section */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-block bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                True Agentless
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                No Software. No Agents.<br />No Disruption.
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Zero software installation on production systems. Our "Collect, Convert, Deploy" process creates live clones using block-level or file-based replication with continuous sync. Source machines stay fully operational throughout.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {[
                { icon: CheckCircle, title: "No Software Installation", desc: "Zero footprint on source systems - no agents required" },
                { icon: CheckCircle, title: "No Change Management", desc: "No security authorization or compliance approvals needed" },
                { icon: CheckCircle, title: "No Production Impact", desc: "Servers stay running - duplicate cloning in target cloud" },
                { icon: CheckCircle, title: "No Hypervisor Access", desc: "Works without access to VMware, Hyper-V, or KVM APIs" },
                { icon: CheckCircle, title: "Live Cloning", desc: "Hot clones allow testing and validation before cutover" },
                { icon: CheckCircle, title: "Continuous Synchronization", desc: "Block-based or file-based sync keeps target updated" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 bg-blue-500/5 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-8 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all hover:translate-x-2 relative group"
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                  <div className="min-w-[50px] h-[50px] flex items-center justify-center bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-block bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Platform Capabilities
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Complete Migration Solution
              </h2>
              <p className="text-xl text-slate-400">
                Four integrated modules streamline discovery through ongoing optimization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
              {[
                { icon: Target, title: "Discovery & Assessment", desc: "Automated asset discovery with dependency mapping, cloud sizing based on actual consumption, and multi-cloud pricing comparisons." },
                { icon: Zap, title: "Live Migration", desc: "Variable delta sync (block or file-based). Hot, warm, and cold migrations. Data-only and data seeding options." },
                { icon: RefreshCw, title: "OS Modernization", desc: "Automated OS upgrades during migration. Windows Server 2008 R2 through 2025, Linux distributions (RHEL, CentOS, Ubuntu, Rocky, AlmaLinux)." },
                { icon: Shield, title: "Security & Compliance", desc: "Source data stays 100% behind the firewall. GDPR compliant. OS hardening with CIS Benchmarks (Level 1 & 2) applied during migration." },
                { icon: CheckSquare, title: "Pre-Flight Validation", desc: "150+ parameter checks before migration. Alerts to obstacles or confirms readiness, resulting in 95% first-time success." },
                { icon: Settings, title: "Optimize & Manage", desc: "VM scheduler, data protection profiles, cost management, storage optimization, and tagging policies for ongoing control." },
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-2 shadow-xl"
                >
                  <div className="text-5xl mb-6">
                    <capability.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{capability.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-block bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Migration Scenarios
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Comprehensive Use Cases
              </h2>
              <p className="text-xl text-slate-400">
                From simple lifts to complex transformations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
              {[
                { icon: Server, title: "Physical to Cloud", desc: "Migrate physical servers to AWS, Azure, VMware, or Google Cloud. Auto-virtualization eliminates manual conversion." },
                { icon: HardDrive, title: "Virtual to Cloud", desc: "Migrate from VMware, Hyper-V, KVM, or other hypervisors. No dependencies on source hypervisor APIs." },
                { icon: Cloud, title: "Cloud to Cloud", desc: "Move workloads between providers or regions. AWS Classic to VPC, cross-region migrations, multi-cloud mobility." },
                { icon: Database, title: "Database Migrations", desc: "SQL IaaS to AWS RDS or Azure SQL PaaS. Automated MSSQL upgrades. Oracle RAC support." },
                { icon: Layers, title: "Data & Storage", desc: "Large data volumes with no ceiling. Migrate to AWS S3, Azure Blob, cloud-native storage with automated optimization." },
                { icon: Workflow, title: "Complex Workloads", desc: "Domain controllers, VDI to AWS Workspaces, automated 3rd party software installation during migration." },
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-2 shadow-xl"
                >
                  <div className="text-5xl mb-6">
                    <useCase.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{useCase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-block bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Why RiverMeadow
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Migration Without Compromise
              </h2>
              <p className="text-xl text-slate-400">
                Enterprise-grade platform with fixed-price model and comprehensive automation
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { icon: Zap, title: "Fast Setup", desc: "Up and migrating in less than one hour" },
                { icon: Lock, title: "Secure", desc: "No additional attack surface on source systems" },
                { icon: TrendingUp, title: "Maximum Uptime", desc: "Short, predictable downtimes for 24/7 operations" },
                { icon: CheckCircle, title: "High Success Rate", desc: "95% first-time migration success with validation" },
                { icon: Cloud, title: "Multi-Cloud", desc: "No vendor lock-in, migrate to any platform" },
                { icon: DollarSign, title: "Predictable Costs", desc: "Fixed per-VM pricing, pay only for success" },
                { icon: RefreshCw, title: "Automation", desc: "RESTful APIs for large-scale automation" },
                { icon: Target, title: "Flexible Deployment", desc: "SaaS, Private SaaS, or On-premise" },
                { icon: Layers, title: "Multi-Project", desc: "Manage multiple projects under single account" },
                { icon: Repeat, title: "Reusable Plans", desc: "Create migration plans used over and over" },
                { icon: Wrench, title: "Extensions", desc: "Customize servers during migration process" },
                { icon: Clock, title: "24/7 Support", desc: "Expert support for after-hours migrations" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-10 h-10 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-base">{benefit.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Windows Server 2025 */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-block bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Latest Update
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Windows Server 2025 Support
              </h2>
              <p className="text-xl text-slate-400">
                Migrate and modernize from Windows Server 2008 R2 through 2025 with lift-and-optimize or OS modernization strategies.
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">
                Comprehensive Windows Server Migrations
              </h3>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-semibold text-blue-400 mb-4">Lift-and-Optimize</h4>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Migrate Windows Server 2025 from on-premise to cloud or between clouds with optimization during migration:
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Rightsize compute resources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Optimize storage partitioning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Apply OS hardening configurations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Update security settings</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-blue-400 mb-4">OS Modernization</h4>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Eliminate technical debt by creating target clones and modernizing them without impacting source machines:
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Risk-free modernization process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Source machines remain untouched</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Modernize to Windows Server 2025</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Test applications before cutover</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-block bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Multi-Cloud Support
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Migrate to Major Cloud Platforms
              </h2>
              <p className="text-xl text-slate-400">
                Physical, virtual, or cloud to AWS, Azure, VMware, Google Cloud, and more
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {["AWS", "Microsoft Azure", "VMware", "Google Cloud", "IBM Cloud", "Oracle Cloud", "OpenStack", "Alibaba Cloud"].map((platform, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-slate-300 font-semibold hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400 transition-all hover:-translate-y-1"
                >
                  {platform}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Ready to Start Your<br />Agentless Migration?
              </h2>
              <p className="text-xl text-slate-400 mb-10">
                Join leading enterprises using RiverMeadow for secure, efficient cloud migrations
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 text-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
                  onClick={() => window.location.href = 'mailto:admin@s2mgt.com'}
                >
                  Contact Sales →
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
