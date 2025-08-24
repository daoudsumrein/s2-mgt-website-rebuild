import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Laptop, Shield, Cloud, Settings, Globe, HeadphonesIcon, CheckCircle, Target } from "lucide-react";
const features = [{
  icon: Shield,
  title: "Complete Data Protection",
  description: "Complete your data protection approach, as company information often resides on employee devices without adequate security"
}, {
  icon: Cloud,
  title: "Reduce Impact of Data Loss",
  description: "Lessen the impact of data loss and security breaches"
}, {
  icon: Settings,
  title: "Optimized Performance",
  description: "Safeguard data while optimizing both network efficiency and user experience"
}, {
  icon: CheckCircle,
  title: "Continuous Operation",
  description: "Guarantee continuous operation and simplify processes while lowering expenses"
}, {
  icon: Shield,
  title: "Advanced Threat Protection",
  description: "Diminish the threat posed by ransomware, misplaced or stolen equipment, and human mistakes"
}];
const deliverables = [{
  icon: Shield,
  title: "Comprehensive Protection",
  features: ["Protection against data loss, data breaches, and ransomware", "Advanced threat detection and mitigation", "Real-time monitoring and alerts"]
}, {
  icon: Cloud,
  title: "Flexible Deployment",
  features: ["Flexible deployment options for various environments", "Cloud-based and hybrid deployment models", "Scalable architecture for organizations of any size"]
}, {
  icon: Settings,
  title: "Storage Optimization",
  features: ["Provide deduplication and encrypted data to optimize storage", "Intelligent compression algorithms", "Cost-effective storage management"]
}, {
  icon: Laptop,
  title: "Centralized Management",
  features: ["Single dashboard for Administration and Management", "Unified policy management across all endpoints", "Comprehensive reporting and analytics"]
}, {
  icon: Globe,
  title: "Global Tracking",
  features: ["Global location tracking to track lost or stolen endpoint devices", "Remote device management capabilities", "Asset inventory and compliance reporting"]
}, {
  icon: HeadphonesIcon,
  title: "24/7 Support",
  features: ["Availability of 24/7 support", "Expert technical assistance", "Proactive monitoring and maintenance"]
}];
const keyBenefits = ["Automated backup for all endpoint devices", "Protection across vast geographical areas", "Simplified management regardless of scale", "Enhanced security for distributed environments", "Reduced operational complexity and costs"];
const idealFor = ["Organizations with distributed workforce", "Companies with remote employees", "Enterprises with BYOD policies", "Businesses requiring compliance with data regulations", "Organizations seeking to reduce data loss risks"];
export default function EndpointBackup() {
  return <div className="min-h-screen flex flex-col">
      <SEOHead title="Official Distributor of OpenText Core Endpoint Backup Solutions" description="S2, the official MENA distributor for OpenText Core Endpoint Backup, delivers automated device & data protection against human error, malware & theft." keywords="endpoint backup MENA, cloud backup UAE, device protection Middle East, automated backup Saudi Arabia, endpoint security, remote device backup, enterprise endpoint protection" canonicalUrl="https://s2mgt.com/solutions/endpoint-backup" />
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
                      <span className="relative">Endpoint Backup Solution</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block" style={{
                      backgroundSize: '300% 300%',
                      animation: 'gradientShift 4s ease-in-out infinite'
                    }}>
                        Endpoint Cloud Backup
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Secure, automated endpoint backup solutions with cloud-based protection for all your devices and data across your distributed workforce.
                    </p>
                    
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Endpoint%20Backup%20Consultation', '_blank')}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/video hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                      {/* Video Container */}
                      <div className="absolute inset-0">
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-xl flex items-center justify-center border border-blue-500/20">
                          <div className="text-center text-white/80">
                            <Laptop className="h-16 w-16 mx-auto mb-4 text-blue-400" />
                            <p className="text-lg font-semibold">Endpoint Protection Demo</p>
                            <p className="text-sm text-white/60 mt-2">Coming Soon</p>
                          </div>
                        </div>
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

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="text-center border border-border hover:border-primary/30 transition-colors duration-300 group">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">75%</div>
                  <p className="text-muted-foreground">of IT professionals say organizations are more vulnerable with remote work</p>
                </CardContent>
              </Card>
              <Card className="text-center border border-border hover:border-primary/30 transition-colors duration-300 group">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <p className="text-muted-foreground">Award-winning support availability with global coverage</p>
                </CardContent>
              </Card>
              <Card className="text-center border border-border hover:border-primary/30 transition-colors duration-300 group">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <p className="text-muted-foreground">Automated IT-controlled backups across all endpoints</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Protect Your Most Vulnerable Data
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced endpoint data protection as part of your comprehensive cyber resilience strategy
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Provides easy deployment and management</h3>
                    <p className="text-muted-foreground">Automated, silent, centralized installation and operation across your entire organization.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Intelligently manages global bandwidth usage</h3>
                    <p className="text-muted-foreground">Minimal disruption to network performance with intelligent optimization algorithms.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reduces backup-related WAN traffic by up to 98%</h3>
                    <p className="text-muted-foreground">During business hours for global deduplication and efficient data transfer.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Offers advanced administrative control</h3>
                    <p className="text-muted-foreground">Including legal hold which is invisible to end users, as well as admin-driven restore functionality.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Delivers secure protection with 256-bit AES encryption</h3>
                    <p className="text-muted-foreground">In motion and at rest, and mitigation features, like global location tracking and remote data wipe.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Lets you easily create and deploy policy-controlled backups</h3>
                    <p className="text-muted-foreground">As often as every minute with flexible scheduling and automated policies.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Deployment Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Simple Deployment Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Deploy across thousands of endpoints with our proven silent deployment technology
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <Card className="p-8 min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                <img src="/lovable-uploads/272ca275-0347-49eb-9c18-c071208dc276.png" alt="Endpoint Backup Deployment Architecture - Shows devices connecting through QuickCache to secure vault" className="max-w-full max-h-full object-contain rounded-lg" />
              </Card>
              
              <div className="space-y-6">
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-semibold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Establish Secure Vault</h3>
                      <p className="text-muted-foreground">Set up a centrally managed vault in OpenText's Microsoft Azure-hosted environment with enterprise-grade security protocols.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-semibold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Silent Software Deployment</h3>
                      <p className="text-muted-foreground">Deploy backup software across computers and laptops without user intervention using our advanced deployment technology.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-semibold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Automated Backup Sync</h3>
                      <p className="text-muted-foreground">Automatically back up distributed devices using intelligent local cache or direct-to-vault synchronization.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-semibold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Recovery & Protection</h3>
                      <p className="text-muted-foreground">Instantly recover critical data or remotely wipe devices when lost or stolen to maintain data security.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Enterprise-Grade Compliance
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                SOC 2 Type 2 control framework with comprehensive support for industry-standard regulations
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
              {['SOC 2 Type 2', 'HIPAA', 'FERPA', 'GLBA', 'GDPR'].map((badge, index) => <Badge key={index} variant="outline" className="px-6 py-3 text-base hover:bg-primary hover:text-white border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105">
                  {badge}
                </Badge>)}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="text-6xl text-primary/20 mb-6">"</div>
                <blockquote className="text-2xl font-medium text-foreground mb-8 italic leading-relaxed">
                  Having a centralized copy of our remote employees' endpoint data reduces our fears of lost and stolen endpoints impacting our business operations.
                </blockquote>
                <div className="space-y-2">
                  <div className="font-semibold text-lg">Martin Polaszewski</div>
                  <div className="text-muted-foreground">Sr. Network Engineer, Viskase</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Supported Platforms
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive compatibility with modern operating systems and enterprise infrastructure
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <Laptop className="h-6 w-6 text-primary" />
                    Endpoint Clients
                  </h3>
                  <div className="space-y-3">
                    {['Windows 10 and later versions', 'Windows 11 on ARM-based devices', 'macOS 12 Monterey and later', 'Linux distributions (Enterprise)'].map((platform, index) => <div key={index} className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{platform}</span>
                      </div>)}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <Cloud className="h-6 w-6 text-primary" />
                    Endpoint Vault Infrastructure
                  </h3>
                  <div className="space-y-3">
                    {['Microsoft Azure Cloud Platform', 'Windows Server 2022, 2019, 2016, 2012 R2', 'SQL Server 2022, 2019, 2016, 2014, 2012 R2', 'Hybrid cloud deployments'].map((platform, index) => <div key={index} className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{platform}</span>
                      </div>)}
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-card to-card/80">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Ready to Secure Your Endpoints?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Experience enterprise-grade endpoint protection with OpenText Core Endpoint Backup
                </p>
                <div className="flex justify-center">
                  <Button size="lg" className="px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" onClick={() => window.location.href = '/contact'}>
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}