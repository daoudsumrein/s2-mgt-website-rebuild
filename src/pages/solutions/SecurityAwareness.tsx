import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Mail, Target, Users, Award, TrendingUp, Monitor, Settings, Cloud, CheckCircle } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Continuous, Relevant, and Measurable Education",
    description: "Ongoing education programs with measurable outcomes and relevant content"
  },
  {
    icon: Mail,
    title: "Full-Featured Phishing Simulator",
    description: "Comprehensive phishing simulation tools to test user awareness"
  },
  {
    icon: Monitor,
    title: "Centralized Management Console",
    description: "Single dashboard for managing all training programs and campaigns"
  },
  {
    icon: Settings,
    title: "Automated Learning Management System (LMS)",
    description: "Fully automated learning management with progress tracking"
  },
  {
    icon: Cloud,
    title: "Microsoft Azure Active Directory Integration",
    description: "Seamless integration with Microsoft Azure AD for user management"
  },
  {
    icon: Target,
    title: "Simple Setup Wizard",
    description: "Easy configuration and deployment with guided setup process"
  },
  {
    icon: Users,
    title: "Flexible Scheduling",
    description: "Customizable training schedules to fit organizational needs"
  },
  {
    icon: Settings,
    title: "Multi-Client/Site Management",
    description: "Manage multiple clients or sites from a single platform"
  },
  {
    icon: TrendingUp,
    title: "Comprehensive Reporting",
    description: "Detailed analytics and reporting for compliance and effectiveness"
  },
  {
    icon: Award,
    title: "Turnkey Program",
    description: "Ready-to-deploy training programs with minimal setup required"
  },
  {
    icon: Monitor,
    title: "Monthly Training Catalog Updates",
    description: "Regular updates to training content and threat awareness materials"
  }
];

const deliverables = [
  "Reduced Malware Incidents",
  "Simple Administration and Campaign Management",
  "High Relevancy and Frequency of Training Updates",
  "Automated Training Management and Compliance Reporting",
  "Minimizes Risky User Behaviors",
  "Cost and Productivity Savings",
  "Accountable and Measurable Cybersecurity Education",
  "Cyber Resilience"
];

export default function SecurityAwareness() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Security Awareness Training | Human Firewall Development MENA"
        description="Comprehensive security awareness training programs for MENA enterprises. Phishing simulations, interactive training, and human risk management solutions."
        keywords="security awareness training MENA, cybersecurity training UAE, phishing simulation Middle East, security education Saudi Arabia"
        canonicalUrl="https://s2mgt.com/solutions/security-awareness"
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
                Security Awareness Training
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform end-users from the weakest link in the security chain into a resilient first line of cyber defense through comprehensive training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">Start Training Program</Button>
                <Button variant="outline" size="lg" className="text-lg px-8 border-white/20 text-white hover:bg-white/10">View Demo</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Security Awareness</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    Security Awareness Training is a comprehensive, cloud-based SaaS solution designed to reduce risk exposure through internal users. It aims to transform end-users from the weakest link in the security chain into a resilient first line of cyber defense.
                  </p>
                  <p className="text-lg mb-6">
                    The training helps businesses empower end-users to identify and report scams, avoid risks, fulfill regulatory compliance requirements, and prevent modern cyberattacks through regular training as part of a layered defense approach to become cyber resilient.
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
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-1 flex-shrink-0" />
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