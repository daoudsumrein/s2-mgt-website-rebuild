import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, Shield, Search, Clock, Users, Database, Globe } from "lucide-react";

const deliverables = [
  {
    icon: Mail,
    title: "Email Continuity",
    features: [
      "Guaranteed uptime during Office 365, Exchange, or server outages",
      "Real-time failover for inbound and outbound email",
      "Seamless browser-based access for users",
      "No email loss, even during extended downtime"
    ]
  },
  {
    icon: Database,
    title: "Email Archiving",
    features: [
      "Compliant, tamper-proof journaling of all inbound/outbound/internal emails",
      "Long-term retention (7–15+ years)",
      "Lightning-fast full-text search",
      "Legal hold & eDiscovery features"
    ]
  },
  {
    icon: Shield,
    title: "Compliance & Policy Management",
    features: [
      "Granular retention policies by user, group, or department",
      "Supports GDPR, HIPAA, SEC, FINRA, UAE data laws",
      "Audit trails and access logs",
      "Optional encryption and data loss prevention (DLP)"
    ]
  },
  {
    icon: Globe,
    title: "Flexible Deployment",
    features: [
      "Cloud-based (OpenText Secure Cloud)",
      "On-premise or hybrid options (MailStore)",
      "Supports Exchange, Office 365, Google Workspace, and IMAP"
    ]
  }
];

const technologies = [
  {
    name: "OpenText Email Continuity",
    purpose: "Always-on access during outages"
  },
  {
    name: "OpenText Archiving",
    purpose: "Secure, compliant journal archiving"
  },
  {
    name: "MailStore",
    purpose: "Lightweight, on-premise archiving for SMEs"
  }
];

const outcomes = [
  "24/7 email access — even when Microsoft goes down",
  "Full compliance with data retention laws",
  "No more lost emails or PST sprawl",
  "Rapid response to audits, legal, or HR requests",
  "Employee productivity protected"
];

const idealFor = [
  "Companies with strict regulatory or legal archiving requirements",
  "Organizations using Microsoft 365 or Google Workspace",
  "IT teams looking to offload PST headaches",
  "Firms seeking non-disruptive continuity during migrations"
];

export default function EmailArchiving() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Email Archiving & Continuity Solutions MENA - Email Backup & Compliance | S2"
        description="Professional email archiving and business continuity solutions for MENA enterprises. OpenText Email Backup, Microsoft 365 archiving, and compliance solutions across UAE, Saudi Arabia, and Middle East."
        keywords="email archiving MENA, Microsoft 365 backup UAE, email compliance Middle East, OpenText archiving Saudi Arabia, business continuity, email backup solutions, regulatory compliance"
        canonicalUrl="https://s2mgt.com/solutions/email-archiving"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Email Archiving & Continuity
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Compliance, Access, and Uptime — Without Compromise
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Schedule Assessment</Button>
                <Button variant="outline" size="lg">Download Datasheet</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-center mb-8">
                  Email is your organization's lifeline — and it's also your biggest compliance and continuity risk.
                </p>
                <p className="text-center mb-8">
                  S2 provides enterprise-grade email continuity and archiving solutions that ensure your users never lose access to communication, 
                  and your business never loses control of its data.
                </p>
                <p className="text-center">
                  Powered by <strong>OpenText Secure Cloud</strong> and <strong>MailStore</strong>, we ensure your emails are always:<br />
                  <em>Accessible. Searchable. Defensible.</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {deliverables.map((deliverable, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <deliverable.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{deliverable.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {deliverable.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
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
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Platform/Tool</th>
                      <th className="text-left py-3 px-4 font-semibold">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technologies.map((tech, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4 font-medium">{tech.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{tech.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal For & Outcomes Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Ideal For
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {idealFor.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Outcomes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{outcome}</span>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Email Infrastructure?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Downtime is costly. Gaps in compliance are worse.<br />
                Let S2 make your email always-on and legally bulletproof.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Schedule Archiving Assessment</Button>
                <Button variant="outline" size="lg">Contact Specialist</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}