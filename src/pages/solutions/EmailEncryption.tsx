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
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Email Encryption Solutions | Secure Communications MENA"
        description="Enterprise email encryption solutions for MENA region. End-to-end encryption, digital signatures, and secure document exchange for business communications."
        keywords="email encryption MENA, secure email UAE, encrypted communications Middle East, email security Saudi Arabia"
        canonicalUrl="https://s2mgt.com/solutions/email-encryption"
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-white/20 text-white">
                Cybersecurity Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Email Encryption with Secure Compose
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Email Encryption with Secure Compose empowers users to send secure messages and attachments. It aims to eliminate impersonation risks and cyberattacks associated with sending sensitive information via email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">Request Implementation</Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-white text-slate-900 border-white hover:bg-white/90">Security Demo</Button>
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
                  Secure Email Communications
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  Our email encryption solution allows for secure bidirectional email communication, protecting against impersonation risks and cyberattacks when sending sensitive information via email.
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
                Comprehensive email encryption with cutting-edge security features
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
                Tangible benefits and outcomes from our email encryption solution
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {deliverables.map((deliverable, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CheckCircle className="h-8 w-8 text-secondary mb-2" />
                    <CardTitle className="text-lg">{deliverable}</CardTitle>
                  </CardHeader>
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
                Ready to Secure Your Email Communications?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contact us to learn how our email encryption solution can protect your sensitive communications and ensure secure messaging.
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
  );
}