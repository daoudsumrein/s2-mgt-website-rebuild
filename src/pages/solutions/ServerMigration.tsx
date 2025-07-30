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
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-4 md:py-6 relative overflow-hidden">
          <div className="container mx-auto px-2 md:px-4">
            <div className="mx-auto">
              {/* Floating Background Container with Gradient Border */}
              <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-primary via-blue-500 to-secondary">
                <div className="bg-slate-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-6">
                  <div className="max-w-5xl mx-auto pl-4">
                    <div className="grid lg:grid-cols-2 gap-4 items-center justify-items-start">
                    {/* Left Content */}
                    <div>
                      <Badge variant="outline" className="mb-3 border-primary/40 text-primary bg-primary/10">
                        Migration Solutions
                      </Badge>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Server Migration
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Seamless any-to-any server migrations with minimal downtime and maximum efficiency
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Migration%20Consultation', '_blank')}>
                          <span className="relative z-10">Schedule Consultation</span>
                          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Right Image Placeholder */}
                    <div className="relative flex justify-center lg:justify-start lg:pl-8">
                      <div className="w-96 h-72 bg-gradient-to-br from-primary/20 via-blue-500/20 to-secondary/20 rounded-lg flex items-center justify-center border border-white/10">
                        
                      </div>
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