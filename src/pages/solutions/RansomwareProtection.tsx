import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Settings, CheckCircle, AlertTriangle, Server, FileX } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Isolation backup data in an offline, undiscoverable vault",
    description: "Secure offline storage that remains invisible to potential attackers"
  },
  {
    icon: Lock,
    title: "Secured with multi-factor authentication (MFA)",
    description: "Prevents credential-based attacks with robust authentication"
  },
  {
    icon: Eye,
    title: "Intelligence equipped with smart sensors",
    description: "Monitor and source data integrity with advanced detection capabilities"
  },
  {
    icon: CheckCircle,
    title: "Ensures only clean data enters the vault",
    description: "Verifies data integrity before storage to prevent contamination"
  },
  {
    icon: Shield,
    title: "Immutability ensures data cannot be modified, deleted, or corrupted",
    description: "Protected data remains unchanged and secure from tampering"
  },
  {
    icon: Settings,
    title: "NIST cybersecurity framework compliance",
    description: "Meets industry standards for comprehensive security"
  },
  {
    icon: Server,
    title: "Zero Trust Architecture",
    description: "Never trust, always verify approach to security"
  },
  {
    icon: Database,
    title: "Randomized vault connectivity",
    description: "Unpredictable connection patterns enhance security"
  },
  {
    icon: AlertTriangle,
    title: "Real-time threat detection",
    description: "Immediate identification and response to security threats"
  },
  {
    icon: FileX,
    title: "Tamper-Resistant Vault",
    description: "Protected storage that resists unauthorized modifications"
  }
];

const deliverables = [
  {
    icon: Shield,
    title: "Last Line of Defense Against Ransomware",
    description: "Ultimate protection when all other security measures fail"
  },
  {
    icon: Database,
    title: "Secure Offline Data Vault",
    description: "Isolated storage environment protected from online threats"
  },
  {
    icon: CheckCircle,
    title: "Clean, Verified Backup Sets",
    description: "Guaranteed integrity of backup data for reliable recovery"
  },
  {
    icon: Server,
    title: "Resilient Backup Infrastructure",
    description: "Robust system designed to withstand cyber attacks"
  },
  {
    icon: Lock,
    title: "Enhanced Backup Security Layer",
    description: "Additional protection for critical backup systems"
  },
  {
    icon: Settings,
    title: "Compliance-Ready Backup Environment",
    description: "Meeting regulatory requirements for data protection"
  },
  {
    icon: AlertTriangle,
    title: "Reduced Risk of Data Tampering",
    description: "Minimized exposure to data manipulation threats"
  },
  {
    icon: Eye,
    title: "Operational Continuity in Crisis",
    description: "Maintained business operations during security incidents"
  }
];

export default function RansomwareProtection() {
  return (
    <>
      <SEOHead 
        title="Ransomware Protection Solutions | S2 Management Solutions"
        description="Advanced ransomware protection with isolated backup vaults, smart monitoring, and tamper-resistant storage. Your last line of defense against cyber threats."
        keywords="ransomware protection, backup security, cyber resilience, data vault, immutable backups, threat detection"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-background via-muted/50 to-background py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                  <Badge variant="outline" className="mb-4">
                    Cybersecurity Solutions
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Ransomware Protection
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                    For years, data backups have played a critical role in defending against ransomware attacks. Organizations have long depended on backup systems as the foundation of their cyber resilience strategies.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8">
                      Learn More
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    The Evolution of Ransomware Defense
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                  <p className="mb-6">
                    However, cybercriminals are aware of this reliance and now frequently target backup and data protection systems directly. Their goal is to encrypt, tamper with, or delete backup data, making recovery far more difficult and giving them leverage to demand higher ransom payments.
                  </p>
                  <p>
                    Today, organizations face the urgent challenge of safeguarding their backup infrastructure. Effective backup solutions must offer isolation from cyber threats, immutability to resist tampering or destruction, and most importantly, intelligent monitoring to detect if data has been compromised even before it's needed for recovery.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Advanced Protection Features
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive ransomware protection with cutting-edge security features
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <feature.icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Deliverables Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Key Deliverables
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Tangible benefits and outcomes from our ransomware protection solution
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {deliverables.map((deliverable, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <deliverable.icon className="h-8 w-8 text-secondary mb-2" />
                      <CardTitle className="text-lg">{deliverable.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {deliverable.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Strengthen Your Ransomware Defenses?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Contact us to learn how our advanced ransomware protection can safeguard your critical data and ensure business continuity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8">
                    Schedule Consultation
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    Download Datasheet
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}