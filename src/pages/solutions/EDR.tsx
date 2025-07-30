import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, AlertTriangle, Activity, Target, Shield, Clock, CheckCircle } from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "Advanced Threat Hunting",
    description: "Proactive threat hunting using AI and machine learning to detect sophisticated attacks"
  },
  {
    icon: AlertTriangle,
    title: "Real-time Detection",
    description: "Continuous monitoring and instant detection of suspicious endpoint activities"
  },
  {
    icon: Activity,
    title: "Behavioral Analytics",
    description: "Advanced behavioral analysis to identify anomalous patterns and zero-day threats"
  },
  {
    icon: Target,
    title: "Incident Response",
    description: "Automated response capabilities to contain and remediate security incidents"
  },
  {
    icon: Shield,
    title: "Forensic Analysis",
    description: "Detailed forensic capabilities for post-incident investigation and analysis"
  },
  {
    icon: Clock,
    title: "Historical Visibility",
    description: "Complete timeline reconstruction of security events and attack progression"
  }
];

export default function EDR() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Endpoint Detection and Response (EDR) Solutions | MENA Cybersecurity"
        description="Advanced EDR solutions for MENA enterprises. Real-time threat detection, behavioral analytics, and automated incident response for comprehensive endpoint security."
        keywords="EDR solutions MENA, endpoint detection response UAE, cybersecurity Middle East, threat hunting Saudi Arabia, incident response"
        canonicalUrl="https://s2mgt.com/solutions/edr"
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
                Endpoint Detection & Response (EDR)
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Advanced threat detection and response capabilities to identify, investigate, and respond to sophisticated cyber threats with real-time behavioral analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">Request Demo</Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-white text-slate-900 border-white hover:bg-white/90">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">EDR Capabilities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive endpoint detection and response capabilities for advanced threat protection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <Card key={index}>
                  <CardHeader>
                    <capability.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{capability.description}</CardDescription>
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
                  "Advanced threat hunting capabilities",
                  "Real-time behavioral analysis",
                  "Automated incident response",
                  "Comprehensive forensic investigation",
                  "Enhanced endpoint visibility",
                  "Compliance-ready reporting"
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
                          "Organizations with critical endpoints",
                          "Companies handling sensitive data",
                          "Businesses in regulated industries",
                          "Remote workforce environments",
                          "Enterprises requiring advanced threat detection",
                          "Organizations with BYOD policies"
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
                          "Advanced threat detection and response",
                          "Reduced security incident response time",
                          "Enhanced endpoint visibility",
                          "Improved security posture",
                          "Simplified security management",
                          "Cost-effective protection"
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
      </main>
      
      <Footer />
    </div>
  );
}