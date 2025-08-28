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

export default function NakivoBackupReplication() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="NAKIVO Backup & Replication - Complete Data Protection Platform | S2 Solutions"
        description="NAKIVO Backup & Replication v11.0.1 delivers enterprise-grade backup, replication, instant restore, and disaster recovery in one unified solution. 2X faster backups, 49% lower costs, 5-minute setup."
        keywords="NAKIVO backup, backup replication, data protection, disaster recovery, VMware backup, Hyper-V backup, cloud backup, ransomware protection"
        canonicalUrl="https://s2mgt.com/solutions/Nakivo-Backup&Replication"
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
            <div className="max-w-7xl mx-auto">
              {/* Hero Container */}
              <div className="relative bg-slate-900/90 border-2 border-blue-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
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
                        Nakivo Backup & Replication
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
                          src="https://player.vimeo.com/video/724980545?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0" 
                          className="w-full h-full border-none rounded-xl"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="On Premise Backup Solutions"
                        />
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass-panel p-8 md:p-16 text-center mb-10 fade-in">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                The Complete Data Protection Platform Your Business Deserves
              </h2>
              <p className="text-xl md:text-2xl text-text-light font-semibold mb-6">
                Protect everything. Recover instantly. Scale endlessly.
              </p>
              <p className="text-base md:text-lg text-text-muted mb-10 max-w-4xl mx-auto">
                NAKIVO Backup & Replication v11.0.1 delivers enterprise-grade backup, replication, instant restore, and disaster recovery in one unified solution. Trusted by thousands of organizations worldwide, we make data protection simple, fast, and affordable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {[
                  "2X Faster Backups",
                  "49% Lower Costs", 
                  "5-Minute Setup",
                  "4.8/5 Star Rating"
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="bg-glass-hover backdrop-blur-lg border border-glass-border rounded-2xl p-4 md:p-6 text-white font-semibold text-sm md:text-base transition-all duration-300 hover:bg-glass-border-hover hover:-translate-y-1 hover:shadow-glass-hover"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose NAKIVO Backup & Replication?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              <div className="glass-panel p-8 text-center">
                <h4 className="text-highlight-blue text-lg mb-4 font-semibold">ALL-IN-ONE SOLUTION</h4>
                <ul className="space-y-1 text-sm text-text-muted text-left">
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    Backup
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    Replication
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    Instant Restore
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    Ransomware Protection
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    IT Monitoring
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    Site Recovery
                  </li>
                </ul>
              </div>
              
              <div className="glass-panel p-8 text-center">
                <h4 className="text-highlight-blue text-lg mb-4 font-semibold">MULTI-PLATFORM SUPPORT</h4>
                <ul className="space-y-1 text-sm text-text-muted text-left">
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    VMware vSphere
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    Microsoft Hyper-V
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    Nutanix AHV
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    Proxmox VE
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    Amazon EC2
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    Windows, Linux
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    NAS, Microsoft 365
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 text-green-400">•</span>
                    Oracle Database (via RMAN)
                  </li>
                </ul>
              </div>
              
              <div className="glass-panel p-8 text-center">
                <h4 className="text-highlight-blue text-lg mb-4 font-semibold">FLEXIBLE RECOVERY</h4>
                <p className="text-sm text-text-muted">Instantly restore VMs, physical machines, files, folders, and application objects from backups to original or custom locations.</p>
              </div>
              
              <div className="glass-panel p-8 text-center">
                <h4 className="text-highlight-blue text-lg mb-4 font-semibold">VERSATILE DEPLOYMENT</h4>
                <p className="text-sm text-text-muted">Install on NAS devices for a complete backup appliance or deploy on Windows/Linux or as a VMware/Nutanix VA or AMI in Amazon EC2.</p>
              </div>
              
              <div className="glass-panel p-8 text-center">
                <h4 className="text-highlight-blue text-lg mb-4 font-semibold">LIMITLESS SCALABILITY</h4>
                <p className="text-sm text-text-muted">Supports single or multi-tenant needs. Efficiently scales for ROBO and edge environments. One instance protects over 8,000 VMs across 300+ locations for our biggest clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Universal Platform Support */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">Universal Platform Support</h2>
            <p className="text-xl text-slate-300 text-center mb-16 max-w-4xl mx-auto">
              NAKIVO Backup & Replication can protect the following platforms across your entire infrastructure
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 border-t-4 border-t-orange-500 p-6 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white text-xl mb-4">Virtual Environments</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>VMware vSphere 5.5–8.0U3b</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Microsoft Hyper-V 2012–2022</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Nutanix AHV v6.5–v6.10 (LTS)</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Proxmox VE 8.x</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>VMware Cloud Director 10.2.1–10.6</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 border-t-4 border-t-orange-500 p-6 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white text-xl mb-4">Cloud Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Amazon EC2 (all regions)</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>All instance types</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>VPC and Classic networks</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Microsoft 365 complete suite</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 border-t-4 border-t-orange-500 p-6 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white text-xl mb-4">Physical Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Windows Server 2012–2025</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Windows 11/10/8 Professional</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Ubuntu Server/Desktop 16.04–24.04</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>RHEL, SUSE, CentOS, Debian</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>AlmaLinux, Oracle Linux, Rocky Linux</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 border-t-4 border-t-orange-500 p-6 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white text-xl mb-4">Applications & Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Oracle Database 11g R2–23c Free</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Microsoft SQL Server</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Exchange & Active Directory</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Application-consistent backups</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fast and Efficient Backup */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">Fast and Efficient Backup</h2>
            <p className="text-xl text-slate-300 text-center mb-16 max-w-4xl mx-auto">
              With NAKIVO Backup & Replication, you can reliably protect your virtual, cloud, physical, SaaS and hybrid environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">💻</div>
                  <CardTitle className="text-white text-xl mb-2">VM Backup</CardTitle>
                  <p className="text-blue-400 text-sm font-medium mb-4">Image-based, agentless backup for VMware vSphere, Microsoft Hyper-V, Nutanix AHV VMs and Proxmox VE VMs</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300 text-left">
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Complete VM protection without agents</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Application-consistent backups</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Native change tracking efficiency</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Support for all major hypervisors</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">📧</div>
                  <CardTitle className="text-white text-xl mb-2">Microsoft 365 Backup</CardTitle>
                  <p className="text-blue-400 text-sm font-medium mb-4">Full and incremental backups for Exchange Online, Microsoft Teams, OneDrive for Business and SharePoint Online data</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300 text-left">
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>MFA-enabled Microsoft 365 accounts</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Exchange Online protection</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Teams, OneDrive, SharePoint coverage</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Complete SaaS data protection</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🖥️</div>
                  <CardTitle className="text-white text-xl mb-2">Physical Machine Backup</CardTitle>
                  <p className="text-blue-400 text-sm font-medium mb-4">Image-based, incremental backup for Windows- and Linux-based servers and workstations</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300 text-left">
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Complete server protection</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Workstation backup support</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Incremental backup efficiency</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Cross-platform compatibility</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">📂</div>
                  <CardTitle className="text-white text-xl mb-2">File Share Backup</CardTitle>
                  <p className="text-blue-400 text-sm font-medium mb-4">Fast incremental backups of unstructured data in SMB/NFS file shares</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300 text-left">
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>NAS devices protection</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Windows and Linux machines</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>SMB/NFS protocol support</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Incremental efficiency</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">☁️</div>
                  <CardTitle className="text-white text-xl mb-2">Amazon EC2 Backup</CardTitle>
                  <p className="text-blue-400 text-sm font-medium mb-4">Image-based, incremental backup for Amazon EC2 instances</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300 text-left">
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>All AWS regions support</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>All instance types</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Incremental backup technology</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Cloud-native protection</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🗃️</div>
                  <CardTitle className="text-white text-xl mb-2">Application Support</CardTitle>
                  <p className="text-blue-400 text-sm font-medium mb-4">Application-aware consistent backup for applications and databases</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300 text-left">
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Microsoft SQL Server support</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Exchange Server protection</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Active Directory backup</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Oracle Database via RMAN</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="py-20 bg-black/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">Performance</h2>
            <p className="text-xl text-slate-300 text-center mb-16 max-w-4xl mx-auto">
              Boost backup, replication, and recovery speeds by up to 2 times and reduce network load by as much as 50%.
            </p>
            <div className="overflow-x-auto">
              <div className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/10">
                      <th className="text-white font-semibold p-6 text-left">Performance Feature</th>
                      <th className="text-white font-semibold p-6 text-left">Improvement</th>
                      <th className="text-white font-semibold p-6 text-left">Business Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-5 text-white font-medium">Native Change Tracking</td>
                      <td className="p-5 text-slate-300">2X faster backups</td>
                      <td className="p-5 text-slate-300">VMware CBT, Hyper-V RCT, Nutanix AHV CRT for faster incremental backups</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-5 text-white font-medium">LAN-Free Data Transfer</td>
                      <td className="p-5 text-slate-300">50% network load reduction</td>
                      <td className="p-5 text-slate-300">HotAdd or Direct SAN Access modes offload production networks</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-5 text-white font-medium">Network Acceleration</td>
                      <td className="p-5 text-slate-300">Enhanced performance</td>
                      <td className="p-5 text-slate-300">Built-in acceleration for busy LAN and WAN environments</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-5 text-white font-medium">Bandwidth Throttling</td>
                      <td className="p-5 text-slate-300">Controlled impact</td>
                      <td className="p-5 text-slate-300">Global or per-job bandwidth rules for working hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">What Our Customers Say</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 relative">
                <div className="absolute top-6 left-8 text-6xl text-white/20 font-serif">"</div>
                <CardContent className="pt-12">
                  <p className="text-slate-300 text-lg italic mb-6 leading-relaxed">
                    75% lower backup costs. We save more than 50% on VMware backup and additionally 25% in storage space costs with better deduplication, lowering our backup expenses by 75% overall.
                  </p>
                  <div className="text-white font-semibold">Rick Braddy</div>
                  <div className="text-slate-400 text-sm">CEO/CTO at SoftNAS</div>
                </CardContent>
              </Card>
              
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 relative">
                <div className="absolute top-6 left-8 text-6xl text-white/20 font-serif">"</div>
                <CardContent className="pt-12">
                  <p className="text-slate-300 text-lg italic mb-6 leading-relaxed">
                    7X faster backups. The solution is faster than other products I have used and supports many different configurations.
                  </p>
                  <div className="text-white font-semibold">Praful Soni</div>
                  <div className="text-slate-400 text-sm">Senior IT Manager at Transpek</div>
                </CardContent>
              </Card>
              
              <Card className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 relative">
                <div className="absolute top-6 left-8 text-6xl text-white/20 font-serif">"</div>
                <CardContent className="pt-12">
                  <p className="text-slate-300 text-lg italic mb-6 leading-relaxed">
                    99% faster recovery. With granular recovery, we can restore files in just a few minutes, while previously it would have taken us hours to restore the entire VM that held it.
                  </p>
                  <div className="text-white font-semibold">Krister Laag</div>
                  <div className="text-slate-400 text-sm">CIO at Stendahls</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <p className="text-slate-200 text-lg mb-4 font-semibold">Industry Recognition</p>
              <p className="text-slate-400">4.8/5 stars with 96% willing to recommend | Named in Gartner® Magic Quadrant™ 2024 | Top rated on Capterra, TrustRadius, and Spiceworks</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-900/80 to-slate-900/80">
          <div className="container mx-auto px-4">
            <div className="glass-panel backdrop-blur-xl bg-white/5 border border-white/10 p-12 lg:p-16 text-center rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/60 via-white/40 to-blue-600/60"></div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Data Protection?</h2>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of IT professionals who trust NAKIVO to protect their most critical business data. With 2X faster backups, 49% lower costs, and 5-minute deployment, there's never been a better time to upgrade your data protection strategy.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto relative overflow-hidden group"
                  onClick={() => window.location.href = '/contact'}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  <span className="relative">Contact Us</span>
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