import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Users, Globe, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="S2 Management Solutions - Leading IT Transformation, Disaster Recovery & Cybersecurity in MENA"
        description="Premier IT transformation and digital modernization services in MENA. Expert disaster recovery, cybersecurity, data protection, and IT orchestration solutions for enterprises across UAE, Saudi Arabia, and Middle East."
        keywords="disaster recovery MENA, cybersecurity UAE, IT transformation Middle East, digital transformation Saudi Arabia, Carbonite solutions, IT orchestration, data protection MENA, enterprise cybersecurity, business continuity"
        canonicalUrl="https://s2mgt.com/"
      />
      <LocalBusinessSchema />
      <Navigation />
      <main className="motion-preset-fade motion-duration-1000">
        <HeroSection />
        
        {/* Company Overview Section */}
        <section className="py-16 bg-muted/30 motion-preset-slide-up motion-delay-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 motion-preset-fade motion-delay-400">
              <Badge className="mb-4 motion-preset-bounce motion-delay-600">Founded 2013</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 motion-preset-slide-up motion-delay-700">
                Leading IT Transformation & Digital Modernization in MENA
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto motion-preset-fade motion-delay-800">
                S2 Management Solutions is the leading Data Protection and disaster recovery consultancy in the Middle East. Since 2013, we have been delivering enterprise-grade IT transformation, data protection, and digital orchestration solutions across the UAE, Saudi Arabia, and the broader MENA region. Our mission is to empower organizations with resilient, secure, and future ready IT infrastructures tailored to their unique business needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="motion-preset-slide-up motion-delay-1000 hover:motion-preset-bounce hover:shadow-lg transition-all duration-300">
                <CardContent className="text-center p-6">
                  <Building className="h-12 w-12 text-primary mx-auto mb-4 motion-preset-wobble motion-delay-1200" />
                  <h3 className="font-semibold mb-2">Enterprise Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Serving government, BFSI, and critical infrastructure sectors
                  </p>
                </CardContent>
              </Card>
              
              <Card className="motion-preset-slide-up motion-delay-1100 hover:motion-preset-bounce hover:shadow-lg transition-all duration-300">
                <CardContent className="text-center p-6">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4 motion-preset-wobble motion-delay-1300" />
                  <h3 className="font-semibold mb-2">MENA Regional Leadership</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep Data Protection and IT transformation expertise across UAE, Saudi Arabia, and MENA markets
                  </p>
                </CardContent>
              </Card>
              
              <Card className="motion-preset-slide-up motion-delay-1200 hover:motion-preset-bounce hover:shadow-lg transition-all duration-300">
                <CardContent className="text-center p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4 motion-preset-wobble motion-delay-1400" />
                  <h3 className="font-semibold mb-2">Technical Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Certified experts delivering enterprise-grade solutions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 motion-preset-slide-up motion-delay-300">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 motion-preset-slide-left motion-delay-500">
                <Badge className="motion-preset-bounce motion-delay-700">Our Approach</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold motion-preset-fade motion-delay-800">
                  Consultancy-Led Selling & Services
                </h2>
                <p className="text-lg text-muted-foreground motion-preset-slide-up motion-delay-900">
                  We don't just sell technology—we architect solutions. Our consultancy-first approach 
                  ensures every inquiry or implementation is tailored to your specific infrastructure and business requirements.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 motion-preset-slide-right motion-delay-1000">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0 motion-preset-bounce motion-delay-1200" />
                    <div>
                      <h4 className="font-semibold">Discovery & Assessment</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive IT infrastructure analysis and dependency mapping</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 motion-preset-slide-right motion-delay-1100">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0 motion-preset-bounce motion-delay-1300" />
                    <div>
                      <h4 className="font-semibold">Solution Design</h4>
                      <p className="text-sm text-muted-foreground">Custom architecture leveraging best-in-class vendor technologies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 motion-preset-slide-right motion-delay-1200">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0 motion-preset-bounce motion-delay-1400" />
                    <div>
                      <h4 className="font-semibold">Implementation & Support</h4>
                      <p className="text-sm text-muted-foreground">End-to-end deployment with ongoing technical support</p>
                    </div>
                  </div>
                </div>
                
                <Button size="lg" className="mt-6 motion-preset-slide-up motion-delay-1300 hover:motion-preset-pulse" asChild>
                  <Link to="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 motion-preset-slide-right motion-delay-600">
                <Card className="hover:shadow-lg transition-all duration-300 motion-preset-slide-up motion-delay-1000 hover:motion-preset-wobble">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Data Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Endpoint, server, and cloud backup solutions</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 motion-preset-slide-up motion-delay-1100 hover:motion-preset-wobble">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Disaster Recovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">DR and migration orchestration and automation</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 motion-preset-slide-up motion-delay-1200 hover:motion-preset-wobble">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">App Modernization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Legacy application transformation</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 motion-preset-slide-up motion-delay-1300 hover:motion-preset-wobble">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">IT Discovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Infrastructure mapping and analysis</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-light motion-preset-slide-up motion-delay-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 motion-preset-bounce motion-delay-600">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto motion-preset-fade motion-delay-800">
              Let's discuss how S2 can help modernize your data protection, disaster recovery, 
              and application infrastructure in the Region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center motion-preset-slide-up motion-delay-1000">
              <Button size="lg" className="text-lg px-8 motion-preset-pulse motion-delay-1200 hover:motion-preset-wobble" asChild>
                <a href="https://outlook.office365.com/book/S2VideoBooking@s2mgt.com/?ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer">
                  Request Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 motion-preset-pulse motion-delay-1300 hover:motion-preset-wobble" asChild>
                <Link to="/solutions">
                  View Solutions
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
