import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Send,
  Building,
  Clock
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary-light to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Contact S2 Management Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to discuss your IT infrastructure needs? Our team of experts is here to help 
                architect the right solution for your enterprise.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Consultation</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our technical team will get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@company.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+971 XX XXX XXXX" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select a solution area</option>
                      <option value="data-protection">Data Protection & Backup</option>
                      <option value="disaster-recovery">Disaster Recovery</option>
                      <option value="app-modernization">Application Modernization</option>
                      <option value="it-discovery">IT Discovery & Mapping</option>
                      <option value="secure-cloud">Secure Cloud Solutions</option>
                      <option value="security">Security & Ransomware Protection</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your infrastructure requirements, current challenges, or specific project needs..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Building className="h-5 w-5" />
                      <span>Our Office</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">UAE & Saudi Arabia</p>
                        <p className="text-sm text-muted-foreground">
                          Serving enterprise clients across the UAE and KSA region
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@s2mgt.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          info@s2mgt.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-sm text-muted-foreground">
                          Within 24 hours during business days
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5" />
                      <span>Direct Communication</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://wa.me/971XXXXXXXX" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Business
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="mailto:info@s2mgt.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Direct
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose S2?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Consultancy-led approach with technical expertise</li>
                      <li>• Regional focus on UAE & KSA enterprise requirements</li>
                      <li>• Certified specialists in OpenText, TDS, and AppCURE</li>
                      <li>• End-to-end project delivery and ongoing support</li>
                      <li>• Proven track record in government and critical infrastructure</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the growing list of enterprises that trust S2 for their critical IT infrastructure projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Request Technical Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Our Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}