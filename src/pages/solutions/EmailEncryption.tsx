import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Key, Shield, FileText, Users, Settings, Mail, Monitor, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Secure, bi-directional email",
    description: "Secure communication in both directions with encrypted messaging"
  },
  {
    icon: Mail,
    title: "Enables users to send emails easily and securely",
    description: "Simple and secure email sending without complex procedures"
  },
  {
    icon: Users,
    title: "Customized drop-down list of company email addresses, names, or departments",
    description: "Organized contact management for streamlined communication"
  },
  {
    icon: Shield,
    title: "User authentication for inbound email messages",
    description: "Verify sender identity for enhanced security"
  },
  {
    icon: Monitor,
    title: "Accessible on all Internet-enabled devices",
    description: "Cross-platform compatibility for universal access"
  }
];

const deliverables = [
  "Convenient, secure email at no extra cost to your recipients",
  "Direct-to-inbox delivery for your staff",
  "Simplifies adoption for users no user training or software to install",
  "Improved workflow for your business with secure bidirectional support",
  "Added confidence and competitive advantage"
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
                Email Encryption with Secure Compose
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Request Implementation</Button>
                <Button variant="outline" size="lg">Security Demo</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Secure Email Communications</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    Email Encryption with Secure Compose empowers users to send secure messages and attachments. It aims to eliminate impersonation risks and cyberattacks associated with sending sensitive information via email, allowing for secure bidirectional email communication.
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

        {/* Deliverables Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Deliverables</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deliverables.map((deliverable, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm font-medium">{deliverable}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}