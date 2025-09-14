import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Cloud, Mail, Shield, Server, Eye, Users, Target } from "lucide-react";

const deliverables = [
  {
    icon: Cloud,
    title: "Cloud-to-Cloud Backup",
    features: [
      "Fully automated backup for Microsoft 365 (Outlook, OneDrive, SharePoint, Teams)",
      "Google Workspace (Gmail, Drive, Calendar, Contacts)",
      "Point-in-time restore and unlimited retention",
      "MSP multi-tenant dashboard for client management"
    ]
  },
  {
    icon: Mail,
    title: "Email Continuity & Archiving",
    features: [
      "Keep email live during Microsoft or Google outages",
      "Seamless web access for users",
      "Automatic journaling and tamper-proof archive",
      "Legal hold, DLP, and eDiscovery support"
    ]
  },
  {
    icon: Server,
    title: "Endpoint Backup & Protection",
    features: [
      "Policy-driven backup for laptops, desktops, remote users",
      "Silent deployment and encrypted transmission",
      "Geo-redundant restore with role-based access",
      "Ideal for hybrid workforces and MSP endpoint fleets"
    ]
  },
  {
    icon: Shield,
    title: "Advanced Threat Protection (ATP)",
    features: [
      "Phishing, malware, and spoof detection",
      "Attachment sandboxing and URL rewrite",
      "Ransomware kill chain detection",
      "Policy-based rules for users/groups"
    ]
  },
  {
    icon: Eye,
    title: "Webroot (AV, EDR, DNS Protection)",
    features: [
      "Lightweight, MSP-ready endpoint security",
      "Antivirus, DNS filtering, Endpoint Detection & Response (EDR)",
      "Single dashboard for fleet visibility",
      "Agent-based with low resource impact"
    ]
  },
  {
    icon: Target,
    title: "Pilr MDR for MSPs",
    features: [
      "Managed Detection & Response platform built for MSPs",
      "24/7 threat hunting and alert triage",
      "Connects with Webroot, OpenText, and third-party sensors",
      "Compliance reporting and ticket integration"
    ]
  }
];

const technologies = [
  {
    name: "OpenText Secure Cloud Backup",
    purpose: "Cloud-to-cloud SaaS backup"
  },
  {
    name: "OpenText Email Continuity",
    purpose: "Email uptime + web access"
  },
  {
    name: "OpenText Endpoint Protection",
    purpose: "Workstation backup & restore"
  },
  {
    name: "Webroot AV / DNS / EDR",
    purpose: "Lightweight MSP-friendly endpoint protection"
  },
  {
    name: "Pilr MDR",
    purpose: "Managed detection & response + 24/7 SOC-as-a-Service"
  }
];

const outcomes = [
  "One cloud-native platform for backup, continuity, protection",
  "Zero vendor bloat — deploy what you need",
  "MSPs can offer multi-tenant, margin-friendly services",
  "Real-time threat visibility and response",
  "Peace of mind across all data endpoints"
];

const idealFor = [
  "Organizations using M365 / GWS and worried about data loss",
  "MSPs looking to launch full Secure Cloud bundles",
  "Regulated businesses needing retention & recovery",
  "Remote-first and BYOD-heavy environments",
  "Any company serious about uptime, threats, and audit readiness"
];

export default function SecureCloud() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Secure Cloud
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete SaaS & Endpoint Protection for Cloud-First Businesses and MSPs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Book White-Label Demo</Button>
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
                  Cloud doesn't eliminate your responsibility — it reshapes it.
                </p>
                <p className="text-center mb-8">
                  S2 delivers a modern Secure Cloud portfolio built for data protection, endpoint resilience, business continuity, 
                  and threat mitigation, designed around OpenText Secure Cloud, Webroot, and Pilr MDR technologies.
                </p>
                <p className="text-center">
                  This stack is ideal for direct clients and MSPs building their own Secure Cloud bundles, with 
                  <strong> central management, policy enforcement, and full auditability</strong>.
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deliverables.map((deliverable, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <deliverable.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{deliverable.title}</CardTitle>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Secure Cloud Stack?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Want to launch your own Secure Cloud stack as an MSP?<br />
                Let S2 help you deliver a complete service — under your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Book White-Label Secure Cloud MSP Demo</Button>
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