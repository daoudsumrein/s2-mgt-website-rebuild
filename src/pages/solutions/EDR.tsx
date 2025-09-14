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
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16 relative overflow-hidden h-[75vh] flex items-center justify-center">
          {/* Animated background particles */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `
                radial-gradient(2px 2px at 20px 30px, rgba(74, 144, 226, 0.3), transparent),
                radial-gradient(2px 2px at 40px 70px, rgba(74, 144, 226, 0.2), transparent),
                radial-gradient(1px 1px at 90px 40px, rgba(74, 144, 226, 0.4), transparent),
                radial-gradient(1px 1px at 130px 80px, rgba(74, 144, 226, 0.3), transparent)
              `,
              backgroundRepeat: 'repeat',
              backgroundSize: '150px 150px',
              animation: 'float 20s infinite linear'
            }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Hero Container */}
              <div className="relative bg-slate-900/90 border-2 border-blue-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Content */}
                  <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                    <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 relative overflow-hidden group/badge text-xs sm:text-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                      <span className="relative">Cybersecurity Solutions</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block" style={{
                        backgroundSize: '300% 300%',
                        animation: 'gradientShift 4s ease-in-out infinite'
                      }}>
                        Endpoint Detection & Response
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Advanced threat detection and response capabilities with real-time behavioral analytics for sophisticated cyber threats.
                    </p>
                    
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=EDR%20Solution%20Consultation', '_blank')}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Content - Can be added later if needed */}
                  <div className="hidden lg:block">
                    {/* Placeholder for future content */}
                  </div>
                </div>
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