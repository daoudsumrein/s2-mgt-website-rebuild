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

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Simplified Migration Process</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    The simplified process automates and combines many steps that would otherwise be done manually and could lead to human error, reducing them to just a few simple tasks. This significantly lessens the effort required to achieve migration objectives.
                  </p>
                  <h3 className="text-xl font-semibold mb-4">Challenges in Data and Workload Migrations:</h3>
                  <p className="mb-4">
                    Data and workload moving are frequently time consuming, risky, and resource intensive, often deterring organizations due to the potential for downtime and data loss. While often unavoidable, migrations are frequently driven by mergers, relocations, hardware, software, and application upgrades, or transitions to the cloud.
                  </p>
                  <p className="mb-4">Organizations often postpone or avoid these crucial changes because of:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">The significant investment of time and money in IT resources</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">The inherent complexity of such projects</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">The associated downtime that can impact operations</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">The risk of data loss or corruption</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">Potential application performance issues after migration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
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