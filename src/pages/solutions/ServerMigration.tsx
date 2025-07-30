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
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-white/20 text-white">
                Data Protection Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Server Migration
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Migrating physical, virtual, and cloud workloads made fast and easy with very little risk and almost no downtime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">Request Migration Assessment</Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-white text-slate-900 border-white hover:bg-white/90">Learn More</Button>
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

        {/* Deliverables Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Deliverables</h2>
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
      </main>
      <Footer />
    </div>
  );
}