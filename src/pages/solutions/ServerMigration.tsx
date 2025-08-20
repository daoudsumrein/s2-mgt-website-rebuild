import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Cloud, Zap, RefreshCw, CheckCircle, Target, Shield, Clock, Database, ArrowUpDown, Monitor, Gauge } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Minimal Downtime",
    description: "Planned and consistent migrations designed to maintain operations with minimal interruption"
  },
  {
    icon: Zap,
    title: "Extensive Automation",
    description: "Extensive automation that reduces migration risks and simplifies complex processes"
  },
  {
    icon: Database,
    title: "Lower Costs",
    description: "Lower infrastructure costs through optimized and efficient data management"
  },
  {
    icon: Cloud,
    title: "Platform Flexibility",
    description: "Flexibility to operate across any cloud, hypervisor, or hardware, avoiding vendor lock in"
  },
  {
    icon: ArrowUpDown,
    title: "Cross Platform Migration",
    description: "Cross platform migration across physical, virtual, or cloud environments regardless of location"
  },
  {
    icon: RefreshCw,
    title: "Continuous Replication",
    description: "Continuous, scalable replication that preserves system performance and conserves bandwidth"
  },
  {
    icon: CheckCircle,
    title: "Non-Intrusive Testing",
    description: "Non-intrusive testing capabilities that validate migrations without affecting production"
  },
  {
    icon: Shield,
    title: "Enterprise Grade Protection",
    description: "Enterprise grade data protection using 256-bit AES encryption"
  },
  {
    icon: Gauge,
    title: "Scalability",
    description: "Scalability and effortless from a single workload to thousands across distributed environments"
  }
];

const deliverables = [
  "All administrative tasks are handled from a single console",
  "Real-time data synchronization is possible regardless of geographic boundaries between any source to any target",
  "Cutover and switch to the new environment can be completed within minutes"
];

export default function ServerMigration() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Server Migration Solutions MENA - Seamless Infrastructure Migration | S2 Solutions"
        description="Professional server migration services for MENA enterprises. Any-to-any server migrations with zero downtime using OpenText Migrate technology. Serving UAE, Saudi Arabia, and Middle East."
        keywords="server migration MENA, infrastructure migration UAE, OpenText Migrate Middle East, zero downtime migration Saudi Arabia, cloud migration, data center migration"
        canonicalUrl="https://s2mgt.com/solutions/server-migration"
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden h-[75vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Animated background particles */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,rgba(74,144,226,0.3),transparent),radial-gradient(2px_2px_at_40px_70px,rgba(74,144,226,0.2),transparent),radial-gradient(1px_1px_at_90px_40px,rgba(74,144,226,0.4),transparent),radial-gradient(1px_1px_at_130px_80px,rgba(74,144,226,0.3),transparent)] bg-[length:150px_150px] animate-[float_20s_infinite_linear]"></div>
          </div>

          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Hero Container */}
              <div className="bg-slate-900/90 border-2 border-blue-500 rounded-2xl p-12 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(74,144,226,0.1)] relative overflow-hidden transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(74,144,226,0.3),0_0_30px_rgba(74,144,226,0.2)] hover:border-blue-400 hover:-translate-y-1 group">
                
                {/* Hover Effect Overlay */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transition-all duration-500 group-hover:left-full"></div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2 text-sm font-medium w-fit hover:bg-blue-500/30 hover:border-blue-400 hover:scale-105 transition-all duration-300 relative overflow-hidden group/badge">
                      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 group-hover/badge:left-full"></div>
                      <span className="relative z-10">Migration Solutions</span>
                    </Badge>
                    
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-teal-400 bg-clip-text text-transparent hover:scale-[1.02] hover:drop-shadow-[0_0_10px_rgba(74,144,226,0.3)] transition-all duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        Server Migration
                      </span>
                    </h1>
                    
                    <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                      Seamless any-to-any server migrations with minimal downtime and maximum efficiency using advanced automation and continuous replication.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-[0_4px_15px_rgba(74,144,226,0.3)] hover:shadow-[0_10px_30px_rgba(74,144,226,0.5),0_0_20px_rgba(74,144,226,0.3)] hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-[1.02] transition-all duration-300 relative overflow-hidden group/btn"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Migration%20Consultation', '_blank')}
                    >
                      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover/btn:left-full"></div>
                      <span className="relative z-10">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Video */}
                  <div className="relative">
                    <div className="relative overflow-hidden h-[280px] sm:h-[320px] lg:h-[360px] group/video hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-xl">
                      
                      {/* Video gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/10 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      
                      <div className="w-full h-full min-h-[320px] relative rounded-xl overflow-hidden">
                        <iframe
                          src="https://player.vimeo.com/video/735940664?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=1&amp;title=0&amp;byline=0&amp;portrait=0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full border-none absolute inset-0"
                          title="Server Migration Solution"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OpenText Migrate Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,rgba(74,144,226,0.1),transparent),radial-gradient(2px_2px_at_40px_70px,rgba(74,144,226,0.08),transparent)] bg-[length:150px_150px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                  OpenText Migrate
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Simple and seamless hardware upgrades, virtualization, switching hypervisors, and moving to, from and between clouds
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12">
              <div className="bg-slate-900/90 border border-blue-500/30 rounded-xl p-4 lg:p-6 text-center backdrop-blur-sm hover:border-blue-400/50 hover:scale-105 transition-all duration-300">
                <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-2">Zero</div>
                <div className="text-sm lg:text-base text-slate-400">Downtime</div>
              </div>
              <div className="bg-slate-900/90 border border-blue-500/30 rounded-xl p-4 lg:p-6 text-center backdrop-blur-sm hover:border-blue-400/50 hover:scale-105 transition-all duration-300">
                <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-2">256-bit</div>
                <div className="text-sm lg:text-base text-slate-400">AES Encryption</div>
              </div>
              <div className="bg-slate-900/90 border border-blue-500/30 rounded-xl p-4 lg:p-6 text-center backdrop-blur-sm hover:border-blue-400/50 hover:scale-105 transition-all duration-300">
                <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-2">Any</div>
                <div className="text-sm lg:text-base text-slate-400">Platform</div>
              </div>
              <div className="bg-slate-900/90 border border-blue-500/30 rounded-xl p-4 lg:p-6 text-center backdrop-blur-sm hover:border-blue-400/50 hover:scale-105 transition-all duration-300">
                <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-2">Real-time</div>
                <div className="text-sm lg:text-base text-slate-400">Replication</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=OpenText%20Migrate%20Consultation', '_blank')}
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose OpenText Migrate?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Structured, repeatable migration with near-zero downtime and highly automated processes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-blue-500">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Near-Zero Downtime</h3>
                  <p className="text-muted-foreground">Migrate workloads with minimal business disruption. Cutover takes just seconds or minutes.</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-teal-500">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <RefreshCw className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Highly Automated</h3>
                  <p className="text-muted-foreground">Streamlined process eliminates manual steps and human error, reducing migration complexity.</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-emerald-500">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Freedom from Lock-in</h3>
                  <p className="text-muted-foreground">Move freely between clouds, hypervisors, and hardware without vendor constraints.</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-purple-500">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Risk Elimination</h3>
                  <p className="text-muted-foreground">Reduces common migration risks through proven, repeatable processes and testing.</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-orange-500">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Server className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Universal Compatibility</h3>
                  <p className="text-muted-foreground">Migrate any server workload to any target destination with comprehensive platform support.</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-amber-500">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Award-winning Support</h3>
                  <p className="text-muted-foreground">Industry-recognized customer support to ensure successful migration outcomes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Migration Types Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Move Any Server Workload</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Flexible migration options for any source to any target destination
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                'Physical-to-Physical',
                'Physical-to-Virtual', 
                'Virtual-to-Virtual',
                'Onsite-to-Cloud',
                'Cloud-to-Cloud',
                'Cloud-back-Onsite'
              ].map((type, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 lg:p-6 rounded-lg text-center font-semibold text-sm lg:text-base hover:scale-105 hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 cursor-pointer"
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Support Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Comprehensive Platform Support</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Source and target platform compatibility across operating systems and environments
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-700">Source Operating Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      'Microsoft Windows Server',
                      'Red Hat Enterprise Linux',
                      'Oracle Enterprise Linux',
                      'CentOS',
                      'SUSE Enterprise Linux',
                      'Ubuntu'
                    ].map((os, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {os}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-teal-500 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-teal-700">Target Environments</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      'VMware vSphere',
                      'VMware vCloud Director',
                      'VMware ESXi',
                      'Microsoft Hyper-V',
                      'Microsoft Azure Stack',
                      'Microsoft Azure (Classic & ARM)'
                    ].map((env, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        {env}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-emerald-500 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-emerald-700">Cloud Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      'Amazon Web Services (AWS)',
                      'Microsoft Azure',
                      'Google Cloud Platform',
                      'Hybrid Cloud Architectures',
                      'Multi-Cloud Environments',
                      'Private Cloud Solutions'
                    ].map((cloud, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        {cloud}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Migration Process Visualization</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how OpenText Migrate ensures seamless transitions with real-time replication and planned cutover
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <h3 className="text-xl font-semibold">Real-time Replication</h3>
                    </div>
                    <p className="text-muted-foreground">Continuous byte-level replication from primary system to target system ensures data synchronization with minimal network impact.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-teal-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                      <h3 className="text-xl font-semibold">Planned Cutover</h3>
                    </div>
                    <p className="text-muted-foreground">Scheduled cutover seamlessly transitions users to the new primary system while decommissioning the old infrastructure with near-zero downtime.</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Monitor className="h-16 w-16 mx-auto mb-4 text-blue-500" />
                    <p className="text-sm">Migration Process Diagram</p>
                    <p className="text-xs">Real-time replication visualization</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🔄</div>
                  <h4 className="font-semibold mb-2">Continuous Sync</h4>
                  <p className="text-sm text-muted-foreground">Real-time data replication keeps systems synchronized</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">⏱️</div>
                  <h4 className="font-semibold mb-2">Planned Timing</h4>
                  <p className="text-sm text-muted-foreground">Schedule cutover at optimal business windows</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">✅</div>
                  <h4 className="font-semibold mb-2">Seamless Transition</h4>
                  <p className="text-sm text-muted-foreground">Users automatically redirected to new system</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🗑️</div>
                  <h4 className="font-semibold mb-2">Clean Decommission</h4>
                  <p className="text-sm text-muted-foreground">Safe removal of legacy infrastructure</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                  How It Works
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Real-time, byte-level replication with automated orchestration from discovery to cutover
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { title: 'Discovery & Setup', description: 'Console discovers your systems and provisions target VMs automatically.' },
                { title: 'Real-time Replication', description: 'Byte-level replication creates and maintains synchronized replica with compression.' },
                { title: 'Testing & Validation', description: 'Test cutovers anytime without disrupting production operations.' },
                { title: 'Automated Cutover', description: 'Final cutover automation with seconds of downtime and rollback capability.' }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'AES 256-bit encryption for security',
                      'Bandwidth throttling and compression',
                      'Non-disruptive testing capabilities',
                      'Predictable and repeatable process',
                      'Unified console management',
                      'Third-party tool integration'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-300">
                        <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Business Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'Eliminates migration downtime and data loss',
                      'Reduces human error through automation',
                      'Enables platform agility and flexibility',
                      'Streamlines complex migration projects',
                      'Provides straightforward rollback options',
                      'Maximizes IT investment returns'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center text-slate-300">
                        <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Official Distributor Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,rgba(255,255,255,0.05),transparent),radial-gradient(2px_2px_at_40px_70px,rgba(255,255,255,0.03),transparent)] bg-[length:150px_150px] opacity-30"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Official OpenText Distributor - Middle East
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We are the only legal and authorized OpenText distributor in the Middle East, ensuring authentic licensing and professional support
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="bg-white/10 border-2 border-white/20 rounded-2xl p-8 backdrop-blur-lg hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Exclusively Authorized</h3>
                </div>
                <p className="text-blue-100">
                  Direct partnership with OpenText ensures you receive genuine OpenText Migrate licenses, official updates, and comprehensive warranty coverage throughout the Middle East region.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: '🏆', title: 'Regional Exclusivity', description: 'Sole authorized distributor with exclusive rights to sell and support OpenText Migrate across the Middle East.' },
                  { icon: '🛡️', title: 'Legal Compliance', description: 'Protect your organization from unauthorized software and ensure full legal compliance with official licensing.' },
                  { icon: '🌍', title: 'Local Expertise', description: 'Regional support team with deep understanding of Middle East business requirements and technical needs.' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                    </div>
                    <p className="text-blue-100 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Warning Box */}
            <div className="bg-amber-500/10 border-2 border-amber-400/30 rounded-2xl p-8 text-center backdrop-blur-sm">
              <h3 className="text-xl font-bold text-amber-400 mb-4">⚠️ Avoid Unauthorized Resellers</h3>
              <p className="text-white mb-6">
                Ensure your migration projects are protected with genuine OpenText Migrate licenses. 
                Unauthorized sources may provide invalid software, void warranties, and compromise your migration success.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-white mb-1">✓ Genuine Licenses</div>
                  <div className="text-sm text-blue-100">Official OpenText Authorization</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white mb-1">✓ Expert Support</div>
                  <div className="text-sm text-blue-100">Regional Technical Team</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white mb-1">✓ Full Warranty</div>
                  <div className="text-sm text-blue-100">Complete Protection Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Migrate with Confidence?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience seamless migrations with near-zero downtime and minimal risk
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Migration%20Consultation', '_blank')}
              >
                Start Your Migration
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <feature.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ideal For & Key Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Ideal For */}
                <div>
                  <Card className="border-blue-200 bg-blue-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-blue-700">
                        <Target className="h-6 w-6" />
                        <span>Ideal For</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Organizations planning infrastructure migrations</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Companies moving to cloud environments</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Enterprises with mixed IT environments</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Businesses requiring minimal downtime</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Benefits */}
                <div>
                  <Card className="border-teal-200 bg-teal-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-teal-700">
                        <CheckCircle className="h-6 w-6" />
                        <span>Key Benefits</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Planned migrations with minimal downtime</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Extensive automation reducing migration risks</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Lower infrastructure costs through optimization</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Cross-platform migration flexibility</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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