import { ArrowRight, Shield, Server, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-foreground">Enterprise</span>{" "}
                <span className="bg-gradient-metallic-blue bg-clip-text text-transparent font-extrabold">IT Transformation</span>{" "}
                <span className="text-foreground">for the Modern Era</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                As a Value-Added Distributor, S2 enables digital transformation for the modern era through consultancy-driven solutions that modernize your IT infrastructure and business operations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/services">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="gradient-outline" size="lg" className="text-lg px-8" asChild>
                <a href="https://outlook.office365.com/book/S2VideoBooking@s2mgt.com/?ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer">
                  Request Consultation
                </a>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by enterprises across</p>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
                <span>Government</span>
                <span>•</span>
                <span>Banking & Financial Services</span>
                <span>•</span>
                <span>Healthcare</span>
                <span>•</span>
                <span>Oil & Gas</span>
                <span>•</span>
                <span>Telecommunications</span>
                <span>•</span>
                <span>Education</span>
                <span>•</span>
                <span>Manufacturing</span>
                <span>•</span>
                <span>Critical Infrastructure</span>
              </div>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="lg:pl-8">
            <div className="grid gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative p-3 rounded-lg bg-primary-light before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-metallic-blue before:-z-10 before:content-[''] after:absolute after:inset-[1px] after:rounded-[calc(0.5rem-1px)] after:bg-primary-light after:-z-10 after:content-['']">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Data Protection & Continuity</h3>
                      <p className="text-sm text-muted-foreground">
                        Real-time replication, cloud backup, and email archiving solutions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative p-3 rounded-lg bg-primary-light before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-metallic-blue before:-z-10 before:content-[''] after:absolute after:inset-[1px] after:rounded-[calc(0.5rem-1px)] after:bg-primary-light after:-z-10 after:content-['']">
                      <Workflow className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">DR Orchestration & Migration</h3>
                      <p className="text-sm text-muted-foreground">
                        Automated disaster recovery and dependency mapping solutions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative p-3 rounded-lg bg-primary-light before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-metallic-blue before:-z-10 before:content-[''] after:absolute after:inset-[1px] after:rounded-[calc(0.5rem-1px)] after:bg-primary-light after:-z-10 after:content-['']">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Application Modernization</h3>
                      <p className="text-sm text-muted-foreground">
                        Legacy app transformation and secure runtime environments
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}