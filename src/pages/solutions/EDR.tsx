import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, AlertTriangle, Activity, Target, Shield, Clock } from "lucide-react";

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

        {/* Ideal For Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Ideal For</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Enterprises with advanced threat concerns",
                  "Organizations requiring forensic capabilities",
                  "Companies with compliance requirements",
                  "Businesses needing rapid incident response",
                  "Multi-location organizations",
                  "Industries with sensitive data"
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

        {/* Key Benefits Section */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Enhanced endpoint visibility",
                  "Rapid threat detection and response",
                  "Advanced behavioral analytics",
                  "Automated incident containment",
                  "Forensic investigation capabilities",
                  "Compliance-ready reporting"
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