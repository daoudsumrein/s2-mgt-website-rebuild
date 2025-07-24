import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, GitBranch, ShieldCheck, PlayCircle, CheckCircle, Target, Database, Network } from "lucide-react";

const deliverables = [
  {
    icon: Database,
    title: "Infrastructure & Application Discovery",
    features: [
      "Ingest data from any CMDB, ITSM, discovery tool, or spreadsheet",
      "Normalize and clean imported data sets",
      "Centralize into TDS TransitionManager for single-pane-of-glass control"
    ]
  },
  {
    icon: GitBranch,
    title: "Live Dependency Mapping",
    features: [
      "Application-to-infrastructure relationships visualized",
      "Communication paths and failure impact analysis",
      "Logical and physical dependency chains",
      "Includes business context (criticality, owner, SLA)"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Risk & Planning Intelligence",
    features: [
      "Assess what systems are in scope for DR, transformation, or cloud",
      "Identify conflicts, overlaps, and performance dependencies",
      "Support regulatory, DR, and migration planning"
    ]
  },
  {
    icon: PlayCircle,
    title: "Execution-Ready Output",
    features: [
      "Visual mapping integrated into TransitionManager workflows",
      "Dynamically sequence tasks based on dependency logic",
      "Enable cross-functional coordination: IT, business, security"
    ]
  }
];

const platforms = [
  {
    name: "TDS TransitionManager",
    role: "Core engine for ingest, mapping, orchestration"
  },
  {
    name: "Any CMDB/ITSM/Source",
    role: "Accepted input (ServiceNow, BMC, Excel, Device42, Dynatrace etc.)"
  }
];

const outcomes = [
  "One trusted map of everything that matters",
  "Zero blind spots in planning",
  "Reduction in planning errors and missed dependencies",
  "Accelerated, confident execution",
  "Improved compliance posture"
];

const idealFor = [
  "Enterprises preparing for DR, cloud, or app modernization",
  "Environments with fragmented or stale infrastructure data",
  "Clients requiring full visibility across business and IT layers",
  "MSPs needing rapid onboarding visibility across customer stacks"
];

export default function ITDiscovery() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="IT Discovery & Infrastructure Mapping MENA - IT Orchestration | S2 Solutions"
        description="Comprehensive IT discovery and infrastructure mapping services for MENA enterprises. Expert IT orchestration, dependency mapping, and infrastructure analysis across UAE, Saudi Arabia, and Middle East."
        keywords="IT discovery MENA, infrastructure mapping UAE, IT orchestration Middle East, dependency mapping Saudi Arabia, IT assessment, infrastructure analysis, IT transformation planning"
        canonicalUrl="https://s2mgt.com/solutions/it-discovery"
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary-light to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">IT Discovery & Dependency Mapping</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Infrastructure Awareness, App Dependency, Risk Elimination
              </p>
              <Button size="lg">Book Discovery Session</Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Overview</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">
                    <strong>Before you migrate, modernize, or protect — you must understand.</strong>
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    At S2, we offer comprehensive IT discovery and dependency mapping through TDS TransitionManager, helping you build a single source of truth from multiple data inputs.
                  </p>
                  <p className="text-lg leading-relaxed">
                    By consolidating data from CMDBs, ITSMs, DCIMs, and third-party scans, we centralize everything into one intelligent platform — giving you <strong>real-time visibility</strong> into your infrastructure and application landscape.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {deliverables.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Used Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Platform Used</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">Platform</th>
                          <th className="text-left py-3 px-4 font-semibold">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {platforms.map((platform, index) => (
                          <tr key={index} className="border-b last:border-b-0">
                            <td className="py-3 px-4 font-medium">{platform.name}</td>
                            <td className="py-3 px-4 text-muted-foreground">{platform.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ideal For & Outcomes Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-6 w-6 text-primary" />
                      <span>Ideal For</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {idealFor.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      <span>Outcomes</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card>
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-4">Siloed Data is Dangerous</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Let S2 unify your data sources into one live, actionable map. Book your discovery mapping session today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">Book Discovery Session</Button>
                    <Button variant="outline" size="lg">Learn More About Mapping</Button>
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