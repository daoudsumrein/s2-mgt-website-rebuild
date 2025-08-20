import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Clock, Database, CheckCircle, Target } from "lucide-react";
const features = [{
  icon: Shield,
  title: "Data Encryption",
  description: "Data encryption, in flight, between the source and the target"
}, {
  icon: Zap,
  title: "Automatic Failover",
  description: "Available automatic failover with server heartbeat monitor"
}, {
  icon: Database,
  title: "DNS Management",
  description: "Integrated DNS management"
}, {
  icon: Target,
  title: "Compression Support",
  description: "Support compression to minimize network impact"
}, {
  icon: Clock,
  title: "Bandwidth Throttling",
  description: "Available bandwidth throttling options"
}, {
  icon: CheckCircle,
  title: "Comprehensive API",
  description: "A comprehensive API for integration"
}, {
  icon: Shield,
  title: "Alerting & Reporting",
  description: "Alerting and reporting features"
}, {
  icon: Target,
  title: "Non-Disruptive Testing",
  description: "Easy, non-disruptive testing"
}];
const deliverables = [{
  icon: Zap,
  title: "No delays, no data loss",
  description: "Continuous replication ensures zero data loss and rapid recovery"
}, {
  icon: Clock,
  title: "Rapid failovers prevent downtime",
  description: "Instant failover capabilities minimize business disruption"
}, {
  icon: Shield,
  title: "Negligible performance impact",
  description: "Lightweight solution that doesn't burden primary systems"
}, {
  icon: Database,
  title: "Physical systems support",
  description: "Comprehensive support for diverse IT environments"
}];
export default function DisasterRecovery() {
  return <div className="min-h-screen flex flex-col">
      <SEOHead title="Disaster Recovery Solutions MENA - Business Continuity & Data Protection | S2 Solutions" description="Comprehensive disaster recovery solutions for MENA region. Ensure maximum uptime for Windows and Linux servers with continuous replication, automated failover, and comprehensive DR tools." keywords="disaster recovery MENA, business continuity UAE, DR solutions Middle East, server replication, automated failover, data protection Saudi Arabia, enterprise DR tools" canonicalUrl="https://s2mgt.com/solutions/disaster-recovery" />
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

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Hero Container */}
              <div className="relative bg-slate-900/90 border-2 border-blue-500 rounded-2xl p-6 md:p-12 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <Badge 
                      variant="outline" 
                      className="border-blue-500/50 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition-all duration-300 px-4 py-2 relative overflow-hidden group/badge"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                      <span className="relative">Disaster Recovery Solution</span>
                    </Badge>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        Carbonite Availability
                      </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg">
                      Ensure maximum uptime for your Windows and Linux servers with comprehensive DR solutions featuring continuous replication and automated failover.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Disaster%20Recovery%20Consultation', '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[280px] sm:h-[320px] lg:h-[360px] group/video hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-xl">
                      {/* Video Container */}
                      <div className="absolute inset-0">
                        <iframe 
                          src="https://player.vimeo.com/video/724980545?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0" 
                          className="w-full h-full border-none rounded-xl"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="Disaster Recovery Solutions"
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

        {/* Problem & Solution Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              The Cost of Downtime is Rising
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto mb-12">
              From natural disasters to user errors and cyber attacks, IT systems face constant threats. 
              Every hour of downtime costs thousands in lost revenue and productivity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    ⚠️
                  </div>
                  <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Organizations face multiple downtime risks daily - hardware failures, human errors, cyber attacks, and natural disasters. Traditional backup solutions often result in significant data loss and extended recovery times.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    🛡️
                  </div>
                  <h3 className="text-xl font-bold mb-4">The Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    OpenText Availability provides continuous real-time replication with byte-level precision, ensuring minimal data loss and near-instantaneous failover capabilities across any environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Why Choose OpenText Availability?
            </h2>
            <p className="text-lg text-center text-slate-300 max-w-4xl mx-auto mb-12">
              Proven technology that delivers enterprise-grade protection with minimal performance impact
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-sm text-slate-300 font-medium">Uptime Achieved</div>
              </div>
              <div className="text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">&lt;30s</div>
                <div className="text-sm text-slate-300 font-medium">Failover Time</div>
              </div>
              <div className="text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">0</div>
                <div className="text-sm text-slate-300 font-medium">Performance Impact</div>
              </div>
              <div className="text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">256</div>
                <div className="text-sm text-slate-300 font-medium">AES Encryption</div>
              </div>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    ⚡
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Continuous Replication</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Real-time, byte-level replication ensures your secondary systems are always in sync with virtually no data loss.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    🚀
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Rapid Failover</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Automatic or manual failover in seconds or minutes, not hours. Get your business back online fast.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    🔒
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Secure & Encrypted</h3>
                  <p className="text-slate-300 leading-relaxed">
                    All data transmission uses AES-256 encryption with three-tier compression to optimize bandwidth.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    ☁️
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Any Platform</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Support for physical, virtual, and cloud environments. Replicate from anywhere to anywhere.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    📊
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Zero Performance Impact</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Your production systems maintain full performance with negligible network bandwidth usage.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    🔧
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Easy Management</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Comprehensive API, integrated DNS management, and non-disruptive testing capabilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              How It Works
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto mb-12">
              Patented replication technology that captures changes at the byte level and replicates them between any source and target environment
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/40">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Deploy & Configure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Install the technology on all servers being protected and configure target secondary environments through the management console.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/40">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Initial Seeding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete initial data replication with encrypted transmission and three-tier compression to minimize network impact.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/40">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Real-Time Sync</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Continuous byte-level change capture and real-time replication keeps your secondary systems perfectly synchronized.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/40">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4">Instant Failover</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In case of outage, automatic or manual failover redirects users to secondary systems in seconds with minimal disruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Failover Diagram Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Seamless Failover in Action
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto mb-12">
              See how OpenText Availability ensures business continuity with continuous replication and instant failover
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="overflow-hidden">
                  <img 
                    src="/lovable-uploads/75dbbe95-acbf-4db9-8719-50b578aa327c.png" 
                    alt="OpenText Availability Failover Process - Shows primary system replicating to target system, then automatic failover when primary fails"
                    className="w-full h-auto object-contain rounded-xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4 transition-transform duration-300 group-hover:scale-110">
                        1
                      </div>
                      <h3 className="text-xl font-bold">Normal Operations</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Primary system operates normally while changes are continuously replicated to the target system in real-time, ensuring virtually no data loss.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4 transition-transform duration-300 group-hover:scale-110">
                        2
                      </div>
                      <h3 className="text-xl font-bold">Automatic Failover</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      When primary system failure is detected, automatic or manual failover activates the target system, ensuring near-zero downtime and seamless user experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <Card className="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">🔄</div>
                  <h4 className="font-bold mb-2">Continuous Sync</h4>
                  <p className="text-sm text-muted-foreground">Real-time replication ensures target system is always current</p>
                </CardContent>
              </Card>
              
              <Card className="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">⚡</div>
                  <h4 className="font-bold mb-2">Instant Detection</h4>
                  <p className="text-sm text-muted-foreground">Heartbeat monitoring detects failures within seconds</p>
                </CardContent>
              </Card>
              
              <Card className="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">🚀</div>
                  <h4 className="font-bold mb-2">Zero Downtime</h4>
                  <p className="text-sm text-muted-foreground">Users seamlessly redirected to target system</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Platform Support Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Universal Platform Support
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto mb-12">
              Protect all your critical systems regardless of underlying infrastructure
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-white/70 backdrop-blur-md border-l-4 border-blue-500 transition-all duration-300 hover:translate-x-1 hover:shadow-lg group">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4 text-gray-800">Operating Systems</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="font-medium">Windows Server</li>
                    <li className="font-medium">Red Hat Enterprise Linux</li>
                    <li className="font-medium">Oracle Enterprise Linux</li>
                    <li className="font-medium">SUSE Linux Enterprise</li>
                    <li className="font-medium">CentOS</li>
                    <li className="font-medium">Ubuntu</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white/70 backdrop-blur-md border-l-4 border-purple-500 transition-all duration-300 hover:translate-x-1 hover:shadow-lg group">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4 text-gray-800">Virtualization</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="font-medium">VMware ESXi (Native Integration)</li>
                    <li className="font-medium">Microsoft Hyper-V (Native Integration)</li>
                    <li className="font-medium">Any Hypervisor Platform</li>
                    <li className="font-medium">Physical to Virtual Migration</li>
                    <li className="font-medium">Virtual to Physical Migration</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white/70 backdrop-blur-md border-l-4 border-emerald-500 transition-all duration-300 hover:translate-x-1 hover:shadow-lg group">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4 text-gray-800">Cloud Platforms</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="font-medium">Amazon Web Services (AWS)</li>
                    <li className="font-medium">Microsoft Azure</li>
                    <li className="font-medium">Google Cloud Platform</li>
                    <li className="font-medium">VMware vCloud Director</li>
                    <li className="font-medium">Hybrid Cloud Architectures</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="py-16 text-foreground" style={{ backgroundColor: '#F4F5F8' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Advanced Features
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto mb-12">
              Enterprise-grade capabilities designed for mission-critical environments
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="bg-white/80 border border-gray-200 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Security & Compliance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      AES-256 encryption in transit
                    </li>
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Secure heartbeat monitoring
                    </li>
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Comprehensive audit trails
                    </li>
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Role-based access controls
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 border border-gray-200 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Performance Optimization</h3>
                  <ul className="space-y-3">
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Three-tier compression technology
                    </li>
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Bandwidth throttling options
                    </li>
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Byte-level change tracking
                    </li>
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Network impact minimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 border border-gray-200 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Management & Monitoring</h3>
                  <ul className="space-y-3">
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Comprehensive REST API
                    </li>
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Integrated DNS management
                    </li>
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Real-time alerting system
                    </li>
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Detailed reporting dashboard
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 border border-gray-200 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Testing & Recovery</h3>
                  <ul className="space-y-3">
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Non-disruptive testing capabilities
                    </li>
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Point-in-time recovery options
                    </li>
                     <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Automatic and manual failover
                    </li>
                    <li className="flex items-center text-muted-foreground font-medium">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      Granular recovery controls
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Official Distributor Section */}
        <section className="py-16 text-white relative overflow-hidden" style={{ backgroundColor: '#0B1328' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0066FF', background: 'none', WebkitTextFillColor: 'initial' }}>Official Authorized Distributor</h2>
              <p className="text-lg text-blue-100 max-w-4xl mx-auto">
                We are the only legal official OpenText/Carbonite Availability distributor, ensuring authentic licensing and professional support
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">✓</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Officially Authorized</h3>
                    </div>
                    <p className="text-blue-100 leading-relaxed">
                      Direct partnership with OpenText ensures you receive genuine software licenses, official updates, and comprehensive warranty coverage.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-lg transition-all duration-300 hover:bg-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold">🏆</span>
                      </div>
                      <h4 className="text-white font-bold text-lg">Exclusive Rights</h4>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Only legal distributor with exclusive rights to sell and support OpenText Availability solutions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20 backdrop-blur-lg transition-all duration-300 hover:bg-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold">🛡️</span>
                      </div>
                      <h4 className="text-white font-bold text-lg">Guaranteed Authenticity</h4>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Protect yourself from counterfeit software and unauthorized licensing with our official distribution.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20 backdrop-blur-lg transition-all duration-300 hover:bg-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold">📞</span>
                      </div>
                      <h4 className="text-white font-bold text-lg">Direct Support Line</h4>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Access to official OpenText technical support and our certified expert team.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="bg-amber-400/10 border-amber-400/30 backdrop-blur-lg mt-12 max-w-4xl mx-auto">
              <CardContent className="p-8 text-center">
                <h3 className="text-amber-400 font-bold text-xl mb-4 flex items-center justify-center">
                  <span className="mr-2">⚠️</span>
                  Beware of Unauthorized Resellers
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Purchasing from unauthorized sources may result in invalid licenses, no support coverage, and potential legal compliance issues. 
                  Ensure your investment is protected by working directly with the official distributor.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="text-center min-w-[8rem]">
                    <div className="text-lg font-bold text-blue-400 mb-1">✓ Valid Licensing</div>
                    <div className="text-sm text-blue-200">With Official Distributor</div>
                  </div>
                  <div className="text-center min-w-[8rem]">
                    <div className="text-lg font-bold text-blue-400 mb-1">✓ Technical Support</div>
                    <div className="text-sm text-blue-200">Direct Access to OpenText</div>
                  </div>
                  <div className="text-center min-w-[8rem]">
                    <div className="text-lg font-bold text-blue-400 mb-1">✓ Software Updates</div>
                    <div className="text-sm text-blue-200">Latest Features & Security</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Call to Action Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Eliminate Downtime?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto font-normal">
              Protect your critical systems with proven high availability and disaster recovery technology
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-semibold"
                onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=DR%20Assessment%20Request', '_blank')}
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 font-semibold"
                onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=DR%20Demo%20Request', '_blank')}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}