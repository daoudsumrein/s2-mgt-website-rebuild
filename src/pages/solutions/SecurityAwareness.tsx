import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Mail, Target, Users, Award, TrendingUp, Monitor, Settings, Cloud, CheckCircle, Shield } from "lucide-react";

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
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-4 relative overflow-hidden md:py-[55px]">
          <div className="container mx-auto px-2 md:px-4">
            <div className="mx-auto">
              {/* Floating Background Container with Gradient Border */}
              <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-primary via-blue-500 to-secondary">
                <div className="bg-slate-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-6">
                  <div className="max-w-6xl mx-auto pl-8">
                    <div className="grid lg:grid-cols-2 gap-4 items-center justify-items-start">
                    {/* Left Content */}
                    <div>
                      <Badge variant="outline" className="mb-3 border-primary/40 text-primary bg-primary/10">
                        Cybersecurity Solutions
                      </Badge>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Security Awareness Training
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Transform end-users from the weakest link into a resilient first line of cyber defense through comprehensive training programs.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Security%20Training%20Consultation', '_blank')}>
                          <span className="relative z-10">Schedule Consultation</span>
                          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Right Image Placeholder */}
                    <div className="relative flex justify-center lg:justify-start lg:pl-8">
                      <div className="w-96 h-72 bg-gradient-to-br from-primary/20 via-blue-500/20 to-secondary/20 rounded-lg flex items-center justify-center border border-white/10 px-[11px] mx-[60px]">
                        
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
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

        {/* Ideal For Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Ideal For</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Organizations with remote workers",
                  "Companies in regulated industries",
                  "Businesses handling sensitive data",
                  "Educational institutions",
                  "Healthcare organizations",
                  "Financial services firms"
                ].map((item, index) => (
                  <Card key={index} className="bg-white border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <Target className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-sm font-medium text-blue-900">{item}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
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

        {/* Key Benefits Section */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Reduced human error risks",
                  "Enhanced security culture",
                  "Improved threat recognition",
                  "Better compliance posture",
                  "Lower security incidents",
                  "Increased cyber resilience"
                ].map((item, index) => (
                  <Card key={index} className="bg-white border-teal-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <Shield className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                        <span className="text-sm font-medium text-teal-900">{item}</span>
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