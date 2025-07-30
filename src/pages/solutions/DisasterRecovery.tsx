import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Clock, Database, CheckCircle, Target } from "lucide-react";

const features = [
  "Data encryption, in flight, between the source and the target",
  "Available automatic failover with server heartbeat monitor",
  "Integrated DNS management",
  "Support compression to minimize network impact",
  "Available bandwidth throttling options",
  "A comprehensive API",
  "Available API for integration",
  "Alerting and reporting features",
  "Easy, non-disruptive testing"
];

const deliverables = [
  {
    icon: Zap,
    title: "No delays, no data loss",
    description: "Continuous replication ensures zero data loss and rapid recovery"
  },
  {
    icon: Clock,
    title: "Rapid failovers prevent downtime",
    description: "Instant failover capabilities minimize business disruption"
  },
  {
    icon: Shield,
    title: "Negligible performance impact",
    description: "Lightweight solution that doesn't burden primary systems"
  },
  {
    icon: Database,
    title: "Physical systems support",
    description: "Comprehensive support for diverse IT environments"
  }
];

export default function DisasterRecovery() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Disaster Recovery Solutions MENA - Business Continuity & Data Protection | S2 Solutions"
        description="Comprehensive disaster recovery solutions for MENA region. Ensure maximum uptime for Windows and Linux servers with continuous replication, automated failover, and comprehensive DR tools."
        keywords="disaster recovery MENA, business continuity UAE, DR solutions Middle East, server replication, automated failover, data protection Saudi Arabia, enterprise DR tools"
        canonicalUrl="https://s2mgt.com/solutions/disaster-recovery"
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary-light to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Data Protection Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Disaster Recovery</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ensure maximum uptime for your Windows and Linux servers with comprehensive DR solutions
              </p>
              <Button size="lg">Request DR Assessment</Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">
                    IT organizations face various causes of downtime, ranging from infrequent natural disasters to common issues like user errors, cyberattacks, or patching problems, ensuring that some systems will experience downtime annually. The financial impact of downtime can be substantial, costing thousands of dollars per hour for revenue-generating systems and leading to significant productivity losses for business systems.
                  </p>
                  <p className="text-lg leading-relaxed">
                    DR tools help IT organizations ensure maximum uptime for their Windows and Linux servers by preventing data loss and downtime. It achieves this through continuous replication, maintaining a secondary copy without burdening the primary system or network. The DR solution supports diverse IT environments, including physical, virtual, and cloud-based source systems and target environments, making it a comprehensive replication choice for mixed IT infrastructures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Deliverables</h2>
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
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
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
                  <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Ensure your infrastructure is protected with our comprehensive disaster recovery solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">Get DR Assessment</Button>
                    <Button variant="outline" size="lg">Learn More</Button>
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