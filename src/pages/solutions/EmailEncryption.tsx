import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Key, Shield, FileText, Users, Settings } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Military-grade encryption for emails and attachments from sender to recipient"
  },
  {
    icon: Key,
    title: "Key Management",
    description: "Centralized encryption key management with automated key lifecycle controls"
  },
  {
    icon: Shield,
    title: "Policy-Based Encryption",
    description: "Automatic encryption based on content, recipient, or compliance requirements"
  },
  {
    icon: FileText,
    title: "Secure Document Exchange",
    description: "Encrypted document sharing with access controls and audit trails"
  },
  {
    icon: Users,
    title: "Digital Signatures",
    description: "Digital signature capabilities for email authentication and non-repudiation"
  },
  {
    icon: Settings,
    title: "Seamless Integration",
    description: "Native integration with popular email clients and productivity suites"
  }
];

export default function EmailEncryption() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Email Encryption Solutions | Secure Communications MENA"
        description="Enterprise email encryption solutions for MENA region. End-to-end encryption, digital signatures, and secure document exchange for business communications."
        keywords="email encryption MENA, secure email UAE, encrypted communications Middle East, email security Saudi Arabia"
        canonicalUrl="https://s2mgt.com/solutions/email-encryption"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Cybersecurity Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Email Encryption Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Secure your business communications with enterprise-grade email encryption and digital signature solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Request Implementation</Button>
                <Button variant="outline" size="lg">Security Demo</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Encryption Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive email encryption capabilities to protect sensitive business communications and ensure compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Standards */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Security & Compliance</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Industry Standards</h3>
                  <p className="text-muted-foreground">
                    Compliant with leading security standards including FIPS 140-2, Common Criteria, and industry-specific regulations.
                  </p>
                  <h3 className="text-xl font-semibold">Data Sovereignty</h3>
                  <p className="text-muted-foreground">
                    Maintain control over encryption keys and ensure data sovereignty requirements are met for your jurisdiction.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Audit & Compliance</h3>
                  <p className="text-muted-foreground">
                    Comprehensive audit trails and compliance reporting for regulatory requirements including GDPR, HIPAA, and local data protection laws.
                  </p>
                  <h3 className="text-xl font-semibold">User Experience</h3>
                  <p className="text-muted-foreground">
                    Transparent encryption that doesn't disrupt user workflows while maintaining the highest security standards.
                  </p>
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