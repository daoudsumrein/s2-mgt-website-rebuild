import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Workflow, Settings, Monitor, Zap, CheckCircle, Target, Search, Network, Database, FileText, Clock, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Dependency Analyzer",
    description: "Dependency analyzer and visually identify application relationships using an interactive map"
  },
  {
    icon: Database,
    title: "Automated Data Ingestion",
    description: "Automated data ingestion and speed up data gathering from CMDBs, files, and databases"
  },
  {
    icon: Settings,
    title: "Rules Engine",
    description: "Rules engine to implement business and IT parameters on your data throughout each phase of a migration or recovery project to transform data, evaluate hypothetical situations, enforce organizational policies, and improve decision-making"
  },
  {
    icon: Database,
    title: "Consolidated Data Repository",
    description: "Consolidated data repository by enhancing team collaboration providing access to uniform data"
  },
  {
    icon: FileText,
    title: "Automated Runbooks",
    description: "Automated runbooks, mitigate risks during migrations or any type of system modification"
  },
  {
    icon: Monitor,
    title: "Custom Views",
    description: "Custom views for reports, improve efficiency by saving frequently used queries as reports"
  },
  {
    icon: Clock,
    title: "Real-time Task Management",
    description: "Real time task management, actively oversee projects in real-time with data tailored to specific roles"
  }
];

const deliverables = [
  "Minimizes potential hazards and mistakes made by people",
  "Guarantees the correct order and completion of tasks",
  "Decreases the time taken for execution, leading to greater scale and speed",
  "Upholds security standards and adherence to regulations",
  "Enables highly skilled engineers to shift their focus from routine operational tasks to more significant, strategic initiatives"
];

export default function DROrchestration() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="DR & Migration Orchestration Solutions MENA - Automated Infrastructure Management | S2 Solutions"
        description="Advanced DR and migration orchestration for MENA enterprises. Automated failover, dependency mapping, and infrastructure orchestration. Serving UAE, Saudi Arabia, and Middle East."
        keywords="DR orchestration MENA, migration orchestration UAE, automated failover Middle East, infrastructure automation Saudi Arabia, disaster recovery automation"
        canonicalUrl="https://s2mgt.com/solutions/dr-orchestration"
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
                  <div className="max-w-6xl mx-auto pl-8">
                    <div className="grid lg:grid-cols-2 gap-4 items-center justify-items-start">
                    {/* Left Content */}
                    <div>
                      <Badge variant="outline" className="mb-3 border-primary/40 text-primary bg-primary/10">
                        Orchestration Solutions
                      </Badge>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        DR & Migration Orchestration
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Orchestrate and automate the Disaster Recovery and Migration workflow from the discovery level up to the management approval
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=DR%20Orchestration%20Consultation', '_blank')}>
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
              <h2 className="text-3xl font-bold mb-8 text-center">Intelligent DR Planning</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    In today's IT landscape, Disaster Recovery and Business Continuity are not just checkboxes, they shape and core the business critical strategies. Usually, DR plans and migration fail due to incomplete discovery, undocumented dependencies, and lack of orchestration.
                  </p>
                  <div className="grid md:grid-cols-1 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Search className="h-6 w-6 text-primary mr-3" />
                        Discovery
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Discovery is the first step toward resilience. It ensures you have full visibility of all systems, workloads, and applications across your infrastructure. Without it, blind spots can leave critical assets unprotected, turning a manageable incident into a crisis.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Network className="h-6 w-6 text-primary mr-3" />
                        Dependency Mapping
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Dependency Mapping uncovers the hidden connections between services, applications, and systems. Without this insight, a single failure can trigger a domino effect, cascading into a widespread outage that cripples operations. Knowing these relationships is key to minimizing impact and ensuring a targeted recovery.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Workflow className="h-6 w-6 text-primary mr-3" />
                        Orchestration
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Orchestration is the glue that holds it all together. By automating recovery steps, orchestration reduces downtime, eliminates human error, and ensures precision when every second counts. It's the difference between a chaotic scramble and a seamless, efficient recovery process.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg mt-6 text-center font-medium">
                    At S2 Management Solutions, we believe in intelligent DR planning that's powered by robust discovery tools, advanced dependency analytics, and real-time orchestration. Our approach gives organizations the confidence to face disruptions head-on, knowing their resilience is built on a solid foundation.
                  </p>
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
                          <span>Enterprise organizations with complex IT infrastructures</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Companies requiring automated disaster recovery</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Organizations with strict compliance requirements</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Businesses needing migration orchestration</span>
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
                          <span>Intelligent discovery and dependency mapping</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Automated orchestration reduces human error</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Real-time task management and monitoring</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Enhanced security and compliance adherence</span>
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