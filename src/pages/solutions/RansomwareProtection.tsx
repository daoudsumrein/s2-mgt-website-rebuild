import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Settings, CheckCircle, AlertTriangle, Server, FileX, Target } from "lucide-react";

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
                          Ransomware Protection
                        </h1>
                        <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                          Advanced ransomware defense systems with isolated backup vaults as your last line of defense against cyber threats.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Ransomware%20Protection%20Consultation', '_blank')}>
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
                    For years, data backups have played a critical role in defending against ransomware attacks. Organizations have long depended on backup systems as the foundation of their cyber resilience strategies.
                  </p>
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

          {/* What We Deliver Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Last line of defense against ransomware",
                    "Secure offline data vault",
                    "Clean, verified backup sets",
                    "Resilient backup infrastructure",
                    "Enhanced backup security layer",
                    "Compliance-ready backup environment"
                  ].map((deliverable, index) => (
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

          {/* Ideal For & Key Benefits */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Ideal For */}
                  <div>
                    <Card className="border-blue-200 bg-blue-50/50">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-3 text-blue-700">
                          <Target className="h-6 w-6" />
                          <span>Ideal For</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            "Organizations with critical data assets",
                            "Companies in high-risk industries",
                            "Businesses with remote workforce",
                            "Enterprises requiring compliance",
                            "Organizations with legacy systems",
                            "Companies needing rapid recovery"
                          ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <Card className="border-teal-200 bg-teal-50/50">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-3 text-teal-700">
                          <Shield className="h-6 w-6" />
                          <span>Key Benefits</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            "Proactive ransomware prevention",
                            "Rapid recovery capabilities",
                            "Minimal business disruption",
                            "Enhanced security posture",
                            "Reduced financial risk",
                            "Improved business continuity"
                          ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
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