import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Building2, Globe, Award, CheckCircle, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary-light to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">Founded 2013</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                About S2 Management Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We are a consultancy-led Value-Added Distributor specializing in data protection, 
                high availability, disaster recovery, and application modernization across MENA region.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  Since 2013, S2 Management Solutions has been at the forefront of critical IT infrastructure 
                  transformation in the Middle East. We don't just distribute technology—we architect solutions 
                  that protect, modernize, and optimize enterprise environments.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our consultancy-first approach ensures every implementation is tailored to specific 
                  infrastructure requirements, compliance needs, and business objectives across government, 
                  BFSI, and critical infrastructure sectors.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Technical Expertise</h4>
                      <p className="text-sm text-muted-foreground">S2's technical team brings together certified experts with deep industry experience and advanced technical knowledge, ensuring the delivery of reliable, secure, and scalable IT solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Regional Focus</h4>
                      <p className="text-sm text-muted-foreground">Deep understanding of MENA region regulatory compliance and infrastructure requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">End-to-End Delivery</h4>
                      <p className="text-sm text-muted-foreground">From assessment and design to implementation and ongoing support</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Enterprise Scale</h3>
                    <p className="text-sm text-muted-foreground">Government and large enterprise deployments</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Regional Presence</h3>
                    <p className="text-sm text-muted-foreground">MENA region operations since 2013</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">Certified technical consultants</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Proven Results</h3>
                    <p className="text-sm text-muted-foreground">Successful critical infrastructure projects</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that drive every client engagement and solution delivery
              </p>
            </div>
            
            {/* Our Core */}
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Core</h3>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    At our core, S2 is built on one simple principle — <span className="text-primary font-semibold">total commitment to those we serve</span>.
                  </p>
                  <p>
                    We don't push products. We <span className="text-primary font-semibold">listen, we learn, and we adapt</span>. Our team takes the time to understand your challenges — whether you're a partner, a client, or both — and we craft <span className="text-primary font-semibold">solutions that fit you</span>, not the other way around.
                  </p>
                  <p>
                    With a <span className="text-primary font-semibold">diverse portfolio</span> across cybersecurity, data protection, modernization, and continuity, we're uniquely positioned to <span className="text-primary font-semibold">mix, match, and customize</span> offerings that work for your environment — efficiently, intelligently, and always with <span className="text-primary font-semibold">your goals in mind</span>.
                  </p>
                </div>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We maintain the highest levels of technical certification and expertise 
                    to deliver enterprise-grade solutions that work reliably in production environments.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Client Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every engagement is a partnership. We invest time to understand your unique 
                    requirements and architect solutions that align with your business objectives.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Continuous Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We stay ahead of technology trends to bring the latest data protection, 
                    disaster recovery, and application modernization capabilities to our clients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with S2?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help transform your IT infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/services">
                  View Our Services
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}