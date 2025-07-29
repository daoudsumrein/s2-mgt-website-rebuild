import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Mail, Target, Users, Award, TrendingUp } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Interactive Training Modules",
    description: "Engaging, interactive training courses covering essential cybersecurity topics"
  },
  {
    icon: Mail,
    title: "Phishing Simulations",
    description: "Regular simulated phishing attacks to test and improve user awareness"
  },
  {
    icon: Target,
    title: "Targeted Campaigns",
    description: "Role-specific training campaigns tailored to different departments and risk levels"
  },
  {
    icon: Users,
    title: "Executive Briefings",
    description: "Leadership-focused security awareness sessions for C-level executives"
  },
  {
    icon: Award,
    title: "Certification Programs",
    description: "Security awareness certification tracking and compliance reporting"
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Detailed analytics and reporting on training effectiveness and user behavior"
  }
];

export default function SecurityAwareness() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Security Awareness Training | Human Firewall Development MENA"
        description="Comprehensive security awareness training programs for MENA enterprises. Phishing simulations, interactive training, and human risk management solutions."
        keywords="security awareness training MENA, cybersecurity training UAE, phishing simulation Middle East, security education Saudi Arabia"
        canonicalUrl="https://s2mgt.com/solutions/security-awareness"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Cybersecurity Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Security Awareness Training
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your employees into your strongest line of defense with comprehensive security awareness training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Start Training Program</Button>
                <Button variant="outline" size="lg">View Demo</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Training Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive security awareness training designed to build a human firewall against cyber threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index}>
                  <CardHeader>
                    <program.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{program.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Training Impact</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Reduced Human Risk</h3>
                  <p className="text-muted-foreground">
                    Significantly reduce successful phishing attacks and social engineering attempts through improved user awareness and behavior.
                  </p>
                  <h3 className="text-xl font-semibold">Compliance Ready</h3>
                  <p className="text-muted-foreground">
                    Meet regulatory requirements for security training and maintain comprehensive records for audit purposes.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Culture Change</h3>
                  <p className="text-muted-foreground">
                    Build a security-conscious culture where employees actively participate in protecting organizational assets.
                  </p>
                  <h3 className="text-xl font-semibold">Measurable Results</h3>
                  <p className="text-muted-foreground">
                    Track training effectiveness with detailed analytics and see measurable improvements in security behavior.
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