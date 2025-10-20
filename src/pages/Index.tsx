import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedCompanies from "@/components/TrustedCompanies";
import TechServicesSection from "@/components/TechServicesSection";
import OurServicesSection from "@/components/OurServicesSection";
import TechForwardSection from "@/components/TechForwardSection";
import OurLocationSection from "@/components/OurLocationSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Users, Globe, CheckCircle, Calendar, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const { ref: navigationRef, isInView: navigationInView } = useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Solutions Distributor | Backup, DR, Cybersecurity & Orchestrator"
        description="S2 Management delivers Disaster Recovery & Backup, Data protection, DR orchestration, Application Modernization, business continuity & resilience."
        keywords="Disaster recovery solutions UAE, KSA, MENA, OpenText distributor Middle East, Enterprise data protection KSA, application modernization MENA, Carbonite solutions, IT orchestration, data protection MENA, Migration Orchestration Dubai & KSA, DR Orchestration Dubai & Riyadh"
        canonicalUrl="https://s2mgt.com/"
        author="S2 Management Solutions"
      />
      <LocalBusinessSchema />
      <motion.div
        ref={navigationRef}
        initial={{ opacity: 0, y: -20 }}
        animate={navigationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <Navigation />
      </motion.div>
      <main>
        <HeroSection />
        
        {/* GITEX Global 2025 Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="mb-4">Event Announcement</Badge>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                S2 Management Solutions
              </h2>
              
              <p className="text-sm text-muted-foreground tracking-wider uppercase">
                OpenText Cybersecurity
              </p>
              
              <p className="text-sm text-muted-foreground tracking-wider uppercase">
                Official Distributor in the GCC Region - UAE, KSA & MENA
              </p>
              
              <div className="inline-block px-6 py-3 bg-primary/10 rounded-full text-sm font-semibold tracking-wide uppercase my-6">
                We're Exhibiting at
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                GITEX GLOBAL
              </h2>
              
              <p className="text-xl sm:text-2xl font-semibold text-accent">
                2025
              </p>
              
              <h2 className="text-lg sm:text-xl font-semibold pt-4">
                S2 Management Solutions Attending GITEX Global 2025 Dubai
              </h2>
              
              <Card className="max-w-2xl mx-auto mt-8">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-xl font-bold">
                      October 13-17, 2025
                    </span>
                  </div>
                  
                  <div className="flex items-start justify-center gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-base font-semibold">
                        Dubai World Trade Centre
                      </p>
                      <h2 className="text-base font-semibold text-primary mt-2">
                        OpenText Cybersecurity Partner Booth - Hall 7 Booth C30 Dubai World Trade Centre
                      </h2>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="pt-8">
                <p className="text-xl font-bold mb-6">
                  Visit Us at the OpenText Booth
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://wa.me/97144342221" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      WhatsApp Us
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:admin@s2mgt.com" className="inline-flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TrustedCompanies />
        <TechServicesSection />
        <OurServicesSection />
        <TechForwardSection />
        <OurLocationSection />
        
        {/* Company Overview Section */}
        {/* <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Founded 2013</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Leading IT Transformation & Digital Modernization in MENA
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                S2 Management Solutions is the leading Data Protection and disaster recovery consultancy in the Middle East. Since 2013, we have been delivering enterprise-grade IT transformation, data protection, and digital orchestration solutions across the UAE, Saudi Arabia, and the broader MENA region. Our mission is to empower organizations with resilient, secure, and future ready IT infrastructures tailored to their unique business needs.
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
                  <h3 className="font-semibold mb-2">MENA Regional Leadership</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep Data Protection and IT transformation expertise across UAE, Saudi Arabia, and MENA markets
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="text-center p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Technical Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Certified experts delivering enterprise-grade solutions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Services Overview */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge>Our Approach</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Consultancy-Led Selling & Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  We don't just sell technology—we architect solutions. Our consultancy-first approach 
                  ensures every inquiry or implementation is tailored to your specific infrastructure and business requirements.
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
                
                <Button size="lg" className="mt-6" asChild>
                  <Link to="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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
                    <p className="text-sm text-muted-foreground">DR and migration orchestration and automation</p>
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
        </section> */}

        {/* CTA Section */}
        {/* <section className="py-16 bg-primary-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how S2 can help modernize your data protection, disaster recovery, 
              and application infrastructure in the Region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://outlook.office365.com/book/S2VideoBooking@s2mgt.com/?ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer">
                  Request Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <Link to="/solutions">
                  View Solutions
                </Link>
              </Button>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
