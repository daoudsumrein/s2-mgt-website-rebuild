import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Users, Globe, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        
        {/* Company Overview Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Founded 2013</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Leading IT Transformation in the Middle East
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                S2 Management Solutions is a consultancy-led Value-Added Distributor specializing in 
                data protection, high availability, disaster recovery, and application modernization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="text-center p-6">
                  <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Enterprise Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Serving government, BFSI, and critical infrastructure sectors
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="text-center p-6">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Regional Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep understanding of UAE & KSA market requirements
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="text-center p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Technical Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Certified experts in OpenText, TDS, and AppCURE solutions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary">Our Approach</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Consultancy-Led Implementation
                </h2>
                <p className="text-lg text-muted-foreground">
                  We don't just sell technology—we architect solutions. Our consultancy-first approach 
                  ensures every implementation is tailored to your specific infrastructure and business requirements.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Discovery & Assessment</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive IT infrastructure analysis and dependency mapping</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Solution Design</h4>
                      <p className="text-sm text-muted-foreground">Custom architecture leveraging best-in-class vendor technologies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Implementation & Support</h4>
                      <p className="text-sm text-muted-foreground">End-to-end deployment with ongoing technical support</p>
                    </div>
                  </div>
                </div>
                
                <Button size="lg" className="mt-6">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Data Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Endpoint, server, and cloud backup solutions</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Disaster Recovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">DR orchestration and migration automation</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">App Modernization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Legacy application transformation</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300">
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
        <section className="py-16 bg-primary-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how S2 can help modernize your data protection, disaster recovery, 
              and application infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Request Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Solutions
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
