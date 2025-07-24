import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Mail, Server, Eye, Users, Target, AlertTriangle } from "lucide-react";

const deliverables = [
  {
    icon: Shield,
    title: "Endpoint & Server Protection",
    features: [
      "Webroot EDR + AV with DNS filtering",
      "Low-footprint agent for real-time protection",
      "Policy-controlled deployment at scale",
      "Ideal for MSP fleet management"
    ]
  },
  {
    icon: Mail,
    title: "Email Threat Protection",
    features: [
      "OpenText Advanced Email Protection",
      "Anti-spam, spoofing, phishing detection",
      "URL and attachment sandboxing",
      "Identity-based filtering and impersonation detection",
      "Optional OpenText Email Encryption"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Ransomware Defense & Isolation",
    features: [
      "Arrosoft Stealth: Server-level obfuscation & anti-access",
      "Arrosoft AirGap: Immutable backup layering for anti-ransomware defense",
      "Disconnected storage policies with timed re-attachment logic"
    ]
  },
  {
    icon: Eye,
    title: "Managed Detection & Response (MDR)",
    features: [
      "Powered by Pilr",
      "24/7 threat hunting",
      "SIEM/SOC services for SMBs and MSPs",
      "Triage and ticketing built for MSP workflows",
      "Compliance reporting (GDPR, HIPAA, NIST, etc.)"
    ]
  },
  {
    icon: Users,
    title: "User-Level Protection",
    features: [
      "OpenText Security Awareness Training",
      "User phishing simulation",
      "LMS-based training & reporting",
      "Monthly updates based on active threats"
    ]
  }
];

const technologies = [
  {
    name: "Webroot",
    purpose: "Antivirus, EDR, DNS filtering"
  },
  {
    name: "OpenText Email Protection",
    purpose: "Email threat prevention & encryption"
  },
  {
    name: "Arrosoft Stealth",
    purpose: "Server cloaking & unauthorized access defense"
  },
  {
    name: "Arrosoft AirGap",
    purpose: "Ransomware-resistant storage control"
  },
  {
    name: "Pilr MDR",
    purpose: "Managed detection & response (MSP-ready)"
  },
  {
    name: "OpenText Security Awareness",
    purpose: "User training and phishing simulation"
  }
];

const outcomes = [
  "360° layered threat protection",
  "Rapid MDR response without in-house SOC",
  "Air-gapped backup defense for ransomware resilience",
  "Email and endpoint threats blocked in real-time",
  "End-user behavior trained and hardened"
];

const idealFor = [
  "MSPs delivering Security-as-a-Service",
  "Enterprises needing endpoint + email + backup hardening",
  "Public sector and regulated industries",
  "Clients with ransomware incidents or audit risk",
  "Any org with distributed or hybrid users"
];

export default function Security() {
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
                Security & Ransomware Protection
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Multi-Layered, Real-Time Defense Built for Modern Threats
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Book Threat Posture Review</Button>
                <Button variant="outline" size="lg">MSP Security Demo</Button>
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
                  Cyber threats are no longer a question of if, but when.
                </p>
                <p className="text-center mb-8">
                  S2 helps clients and partners build resilient security postures by combining prevention, detection, 
                  isolation, and response — all within a single, layered framework.
                </p>
                <p className="text-center">
                  From endpoint defense and email protection to ransomware air gaps and managed detection & response (MDR) — 
                  we deliver a <strong>turnkey protection stack that's fast to deploy, MSP-friendly, and audit-ready</strong>.
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
                      <th className="text-left py-3 px-4 font-semibold">Security Tool</th>
                      <th className="text-left py-3 px-4 font-semibold">Functionality</th>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Build Your Security Stack?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Still patching together cybersecurity with duct tape?<br />
                Let S2 deliver your full protection stack — fast, proven, and ready to scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Book Threat Posture Review</Button>
                <Button variant="outline" size="lg">MSP Security Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}