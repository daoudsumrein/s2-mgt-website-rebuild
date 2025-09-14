import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Cloud, Zap, RefreshCw, CheckCircle, Target, Shield, Clock, Database, ArrowUpDown, Monitor, Gauge } from "lucide-react";
const features = [{
  icon: Clock,
  title: "Minimal Downtime",
  description: "Planned and consistent migrations designed to maintain operations with minimal interruption"
}, {
  icon: Zap,
  title: "Extensive Automation",
  description: "Extensive automation that reduces migration risks and simplifies complex processes"
}, {
  icon: Database,
  title: "Lower Costs",
  description: "Lower infrastructure costs through optimized and efficient data management"
}, {
  icon: Cloud,
  title: "Platform Flexibility",
  description: "Flexibility to operate across any cloud, hypervisor, or hardware, avoiding vendor lock in"
}, {
  icon: ArrowUpDown,
  title: "Cross Platform Migration",
  description: "Cross platform migration across physical, virtual, or cloud environments regardless of location"
}, {
  icon: RefreshCw,
  title: "Continuous Replication",
  description: "Continuous, scalable replication that preserves system performance and conserves bandwidth"
}, {
  icon: CheckCircle,
  title: "Non-Intrusive Testing",
  description: "Non-intrusive testing capabilities that validate migrations without affecting production"
}, {
  icon: Shield,
  title: "Enterprise Grade Protection",
  description: "Enterprise grade data protection using 256-bit AES encryption"
}, {
  icon: Gauge,
  title: "Scalability",
  description: "Scalability and effortless from a single workload to thousands across distributed environments"
}];
const deliverables = ["All administrative tasks are handled from a single console", "Real-time data synchronization is possible regardless of geographic boundaries between any source to any target", "Cutover and switch to the new environment can be completed within minutes"];
export default function ServerMigration() {
  return <div className="min-h-screen flex flex-col">
      <SEOHead title="OpenText (Carbonite) Migrate Distributor MENA | UAE, KSA, Qatar" description="S2 Management Official MENA distributor of OpenText Carbonite Migrate. Real-time replication, automated failover & 24/7 protection." keywords="Carbonite Migrate MENA, OpenText Migrate distributor, server migration UAE, zero downtime migration Saudi Arabia, data center migration Middle East, cloud migration Qatar, Carbonite partner Oman, Carbonite distributor Bahrain, OpenText Migrate Kuwait, infrastructure migration UAE, enterprise server migration, Carbonite Migrate solutions, OpenText partner MENA" canonicalUrl="https://s2mgt.com/solutions/opentext-carbonite-migrate" />
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
            <div className="max-w-7xl mx-auto">
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
                      <span className="relative">Migration Solutions</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-teal-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block" style={{
                        backgroundSize: '300% 300%',
                        animation: 'gradientShift 4s ease-in-out infinite'
                      }}>
                        OpenText Migrate
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Seamless any-to-any server migrations with minimal downtime and maximum efficiency using advanced automation and continuous replication.
                    </p>
                    
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Migration%20Consultation', '_blank')}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Video */}
                  <div className="relative">
                    <div className="relative overflow-hidden h-[280px] sm:h-[320px] lg:h-[360px] group/video hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-xl">
                      
                      {/* Video gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/10 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      
                      <div className="w-full h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] relative rounded-xl overflow-hidden">
                        <iframe src="https://player.vimeo.com/video/735940664?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=1&amp;title=0&amp;byline=0&amp;portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="w-full h-full border-none absolute inset-0" title="Server Migration Solution" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(2px 2px at 20px 30px, rgba(74, 144, 226, 0.1), transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(74, 144, 226, 0.05), transparent),
              radial-gradient(1px 1px at 90px 40px, rgba(74, 144, 226, 0.1), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px'
          }} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                OpenText Migrate
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
                Simple and seamless hardware upgrades, virtualization, switching hypervisors, and moving to, from and between clouds
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#024cbb] mb-1 sm:mb-2">Zero</div>
                  <div className="text-xs sm:text-sm text-slate-400">Downtime</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#024cbb] mb-1 sm:mb-2">256-bit</div>
                  <div className="text-xs sm:text-sm text-slate-400">AES Encryption</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#024cbb] mb-1 sm:mb-2">Any</div>
                  <div className="text-xs sm:text-sm text-slate-400">Platform</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#024cbb] mb-1 sm:mb-2">Real-time</div>
                  <div className="text-xs sm:text-sm text-slate-400">Replication</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] bg-clip-text text-transparent">
                Why Choose OpenText Migrate?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Structured, repeatable migration with near-zero downtime and highly automated processes
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              <Card className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Near-Zero Downtime</h3>
                  <p className="text-muted-foreground">Migrate workloads with minimal business disruption. Cutover takes just seconds or minutes.</p>
                </CardContent>
              </Card>

              <Card className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Highly Automated</h3>
                  <p className="text-muted-foreground">Streamlined process eliminates manual steps and human error, reducing migration complexity.</p>
                </CardContent>
              </Card>

              <Card className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl">🔓</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Freedom from Lock-in</h3>
                  <p className="text-muted-foreground">Move freely between clouds, hypervisors, and hardware without vendor constraints.</p>
                </CardContent>
              </Card>

              <Card className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Risk Elimination</h3>
                  <p className="text-muted-foreground">Reduces common migration risks through proven, repeatable processes and testing.</p>
                </CardContent>
              </Card>

              <Card className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Universal Compatibility</h3>
                  <p className="text-muted-foreground">Migrate any server workload to any target destination with comprehensive platform support.</p>
                </CardContent>
              </Card>

              <Card className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Award-winning Support</h3>
                  <p className="text-muted-foreground">Industry-recognized customer support to ensure successful migration outcomes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Migration Types Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] bg-clip-text text-transparent">
                Move Any Server Workload
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Flexible migration options for any source to any target destination
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {["Physical-to-Physical", "Physical-to-Virtual", "Virtual-to-Virtual", "Onsite-to-Cloud", "Cloud-to-Cloud", "Cloud-back-Onsite"].map((type, index) => <div key={index} className="bg-gradient-to-br from-[#024cbb] to-[#006] text-white p-4 rounded-xl text-center font-semibold text-sm hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#024cbb]/25 transition-all duration-300 cursor-pointer">
                  {type}
                </div>)}
            </div>
          </div>
        </section>

        {/* Platform Support Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] bg-clip-text text-transparent">
                Comprehensive Platform Support
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Source and target platform compatibility across operating systems and environments
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-[#024cbb]">
                <h4 className="font-semibold text-lg mb-4 text-slate-800">Source Operating Systems</h4>
                <ul className="space-y-2">
                  {["Microsoft Windows Server", "Red Hat Enterprise Linux", "Oracle Enterprise Linux", "CentOS", "SUSE Enterprise Linux", "Ubuntu"].map((os, index) => <li key={index} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-[#024cbb] rounded-full mr-3"></div>
                      {os}
                    </li>)}
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-[#024cbb]">
                <h4 className="font-semibold text-lg mb-4 text-slate-800">Target Environments</h4>
                <ul className="space-y-2">
                  {["VMware vSphere", "VMware vCloud Director", "VMware ESXi", "Microsoft Hyper-V", "Microsoft Azure Stack", "Microsoft Azure (Classic & ARM)"].map((env, index) => <li key={index} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-[#024cbb] rounded-full mr-3"></div>
                      {env}
                    </li>)}
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-[#024cbb]">
                <h4 className="font-semibold text-lg mb-4 text-slate-800">Cloud Platforms</h4>
                <ul className="space-y-2">
                  {["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "Hybrid Cloud Architectures", "Multi-Cloud Environments", "Private Cloud Solutions"].map((cloud, index) => <li key={index} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-[#024cbb] rounded-full mr-3"></div>
                      {cloud}
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] bg-clip-text text-transparent">
                Migration Process Visualization
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how OpenText Migrate ensures seamless transitions with real-time replication and planned cutover
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div>
                <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                  <img src="/lovable-uploads/3b568986-ceac-4168-b49c-ab14b2f2efd8.png" alt="Migration Process Diagram showing real-time replication from primary system to target system and planned cutover with near zero downtime" className="w-full h-auto object-contain rounded-xl" />
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] rounded-xl flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                      <h3 className="text-xl font-semibold">Real-time Replication</h3>
                    </div>
                    <p className="text-muted-foreground">Continuous byte-level replication from primary system to target system ensures data synchronization with minimal network impact.</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] rounded-xl flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                      <h3 className="text-xl font-semibold">Planned Cutover</h3>
                    </div>
                    <p className="text-muted-foreground">Scheduled cutover seamlessly transitions users to the new primary system while decommissioning the old infrastructure with near-zero downtime.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[{
              icon: "🔄",
              title: "Continuous Sync",
              desc: "Real-time data replication keeps systems synchronized"
            }, {
              icon: "⏱️",
              title: "Planned Timing",
              desc: "Schedule cutover at optimal business windows"
            }, {
              icon: "✅",
              title: "Seamless Transition",
              desc: "Users automatically redirected to new system"
            }, {
              icon: "🗑️",
              title: "Clean Decommission",
              desc: "Safe removal of legacy infrastructure"
            }].map((item, index) => <Card key={index} className="text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Real-time, byte-level replication with automated orchestration from discovery to cutover
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[{
              step: "1",
              title: "Discovery & Setup",
              desc: "Console discovers your systems and provisions target VMs automatically."
            }, {
              step: "2",
              title: "Real-time Replication",
              desc: "Byte-level replication creates and maintains synchronized replica with compression."
            }, {
              step: "3",
              title: "Testing & Validation",
              desc: "Test cutovers anytime without disrupting production operations."
            }, {
              step: "4",
              title: "Automated Cutover",
              desc: "Final cutover automation with seconds of downtime and rollback capability."
            }].map((item, index) => <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 hover:scale-125 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>)}
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
                  <ul className="space-y-3">
                    {["AES 256-bit encryption for security", "Bandwidth throttling and compression", "Non-disruptive testing capabilities", "Predictable and repeatable process", "Unified console management", "Third-party tool integration"].map((feature, index) => <li key={index} className="flex items-center text-slate-300">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        {feature}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Business Benefits</h3>
                  <ul className="space-y-3">
                    {["Eliminates migration downtime and data loss", "Reduces human error through automation", "Enables platform agility and flexibility", "Streamlines complex migration projects", "Provides straightforward rollback options", "Maximizes IT investment returns"].map((benefit, index) => <li key={index} className="flex items-center text-slate-300">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        {benefit}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Official Distributor Section */}
        <section className="py-16 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,rgba(255,255,255,0.05),transparent),radial-gradient(2px_2px_at_40px_70px,rgba(255,255,255,0.03),transparent)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Official OpenText Distributor - Middle East
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">We are the preferred Official OpenText distributor in the Middle East, ensuring authentic licensing and professional support</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div>
                <div className="bg-white/10 border-2 border-white/20 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-2xl">✓</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Exclusively Authorized</h3>
                  </div>
                  <p className="text-white/90">
                    Direct partnership with OpenText ensures you receive genuine OpenText Migrate licenses, official updates, and comprehensive warranty coverage throughout the Middle East region.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                {[{
                icon: "🏆",
                title: "Regional Exclusivity",
                desc: "Sole authorized distributor with exclusive rights to sell and support OpenText Migrate across the Middle East."
              }, {
                icon: "🛡️",
                title: "Legal Compliance",
                desc: "Protect your organization from unauthorized software and ensure full legal compliance with official licensing."
              }, {
                icon: "🌍",
                title: "Local Expertise",
                desc: "Regional support team with deep understanding of Middle East business requirements and technical needs."
              }].map((item, index) => <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    </div>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>)}
              </div>
            </div>
            
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 mt-12 text-center backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">⚠️ Avoid Unauthorized Resellers</h3>
              <p className="text-white/90 mb-6 max-w-4xl mx-auto">
                Ensure your migration projects are protected with genuine OpenText Migrate licenses. 
                Unauthorized sources may provide invalid software, void warranties, and compromise your migration success.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[{
                title: "✓ Genuine Licenses",
                desc: "Official OpenText Authorization"
              }, {
                title: "✓ Expert Support",
                desc: "Regional Technical Team"
              }, {
                title: "✓ Full Warranty",
                desc: "Complete Protection Coverage"
              }].map((item, index) => <div key={index} className="text-center">
                    <div className="text-lg font-bold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-white/70">{item.desc}</div>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] bg-clip-text text-transparent">
              Ready to Migrate with Confidence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Experience seamless migrations with near-zero downtime and minimal risk
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#024cbb] via-[#006] to-[#024cbb] hover:shadow-lg hover:shadow-[#024cbb]/25 hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}