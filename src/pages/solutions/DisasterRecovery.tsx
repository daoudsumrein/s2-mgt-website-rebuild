import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Server, RotateCcw, Workflow, CheckCircle, Target } from "lucide-react";

const technologies = [
  {
    name: "OpenText Availability",
    purpose: "Real-time replication & failover"
  },
  {
    name: "OpenText Migrate", 
    purpose: "Agentless, real-time server migration"
  },
  {
    name: "TDS TransitionManager",
    purpose: "DR planning, discovery & orchestration"
  },
  {
    name: "AppCURE (Optional)",
    purpose: "App capture, repackage, legacy-to-modern lift"
  }
];

const deliverables = [
  {
    icon: Shield,
    title: "DR Readiness & Risk Assessment",
    features: [
      "Impact analysis and RPO/RTO planning",
      "Infrastructure & application dependency mapping (via TDS TransitionManager)",
      "End-to-end DR workflow design"
    ]
  },
  {
    icon: Server,
    title: "Server Migration",
    features: [
      "Any-to-any migration with OpenText Migrate",
      "Near-zero downtime with real-time replication", 
      "Hardware/cloud-agnostic transitions",
      "Option to combine with AppCURE for legacy apps"
    ]
  },
  {
    icon: RotateCcw,
    title: "Replication & Failover",
    features: [
      "Real-time replication (Windows & Linux) using OpenText Availability",
      "Support for failover, rollback, and rehydration",
      "Continuous sync between source and target VMs",
      "Tested in high-compliance and critical environments"
    ]
  },
  {
    icon: Workflow,
    title: "Orchestration & Workflow Automation",
    features: [
      "Orchestrated DR plans via TDS TransitionManager",
      "Dynamic sequencing of tasks (manual & automated)",
      "Scenario-based plans, live dashboards, full audit trails"
    ]
  }
];

const outcomes = [
  "Zero-to-near-zero data loss",
  "Proven failover and rollback workflows", 
  "Centralized planning across hybrid infrastructure",
  "Compliance-ready audit trails",
  "DR you can test, trust, and scale"
];

const idealFor = [
  "Enterprises migrating from legacy data centers",
  "Customers needing proven business continuity plans",
  "Regulated sectors (finance, healthcare, government)",
  "MSPs offering DRaaS to clients",
  "Organizations requiring sub-15 min RPO"
];

export default function DisasterRecovery() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Disaster Recovery Solutions MENA - DR Orchestration & Business Continuity | S2 Solutions"
        description="Enterprise disaster recovery solutions for MENA region. Expert DR orchestration, business continuity planning, and automated failover services. Carbonite partner serving UAE, Saudi Arabia, and Middle East."
        keywords="disaster recovery MENA, business continuity UAE, DR orchestration Middle East, Carbonite disaster recovery, automated failover, business continuity planning Saudi Arabia, enterprise DR solutions"
        canonicalUrl="https://s2mgt.com/solutions/disaster-recovery"
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary-light to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Disaster Recovery</h1>
              <p className="text-xl text-muted-foreground mb-8">
                DR Readiness, Server Migration, Orchestration & Automation
              </p>
              <Button size="lg">Request DR Assessment</Button>
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
                    At S2 Management Solutions, we help organizations eliminate downtime risk and build business continuity with a full-stack disaster recovery (DR) approach — not just software, but <strong>strategy, orchestration, and automation</strong>.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We partner with OpenText™ and TDS™ to deliver true DR readiness, combining <strong>real-time replication</strong>, <strong>intelligent orchestration</strong>, and <strong>dependency-aware planning</strong>. Whether your workloads are on-prem, hybrid, or cloud-native — we ensure your infrastructure is <strong>recoverable, testable, and resilient</strong>.
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

        {/* Technologies Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">Technology</th>
                          <th className="text-left py-3 px-4 font-semibold">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        {technologies.map((tech, index) => (
                          <tr key={index} className="border-b last:border-b-0">
                            <td className="py-3 px-4 font-medium">{tech.name}</td>
                            <td className="py-3 px-4 text-muted-foreground">{tech.purpose}</td>
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
                  <h2 className="text-3xl font-bold mb-4">Want to Test Your DR Readiness?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Book a free DR assessment with S2 today and ensure your infrastructure is recoverable, testable, and resilient.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">Book Free DR Assessment</Button>
                    <Button variant="outline" size="lg">Download DR Guide</Button>
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