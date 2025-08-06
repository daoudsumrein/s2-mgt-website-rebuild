import { ArrowRight, Shield, Server, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import TypewriterText from "@/components/TypewriterText";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden py-8 sm:py-12">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 motion-preset-fade motion-duration-1000" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left motion-preset-slide-left motion-delay-200">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-normal leading-tight motion-preset-slide-up motion-delay-400">
                
                <TypewriterText 
                  texts={["High\nAvailability", "Disaster\n Recovery", "Server\n Migration", "Backup\n& Recovery"]}
                  className="bg-gradient-metallic-blue bg-clip-text text-transparent font-extrabold"
                />{" "}
      
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 motion-preset-fade motion-delay-600">
                As a Value-Added Distributor, S2 enables digital transformation for the modern era through consultancy-driven solutions that modernize your IT infrastructure and business operations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start motion-preset-slide-up motion-delay-800">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto motion-preset-bounce motion-delay-1000 hover:motion-preset-pulse" asChild>
                <Link to="/solutions">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto motion-preset-bounce motion-delay-1100 hover:motion-preset-pulse" asChild>
                <a href="https://outlook.office365.com/book/S2VideoBooking@s2mgt.com/?ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer">
                  Request Consultation
                </a>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-6 sm:pt-8 border-t border-border/50 motion-preset-fade motion-delay-1200">
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 motion-preset-slide-up motion-delay-1400">Trusted by enterprises across</p>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-muted-foreground justify-center lg:justify-start">
                <span className="motion-preset-slide-up motion-delay-1500 hover:motion-preset-bounce">Government</span>
                <span className="hidden sm:inline motion-preset-fade motion-delay-1600">•</span>
                <span className="motion-preset-slide-up motion-delay-1600 hover:motion-preset-bounce">Banking & Financial Services</span>
                <span className="hidden sm:inline motion-preset-fade motion-delay-1700">•</span>
                <span className="motion-preset-slide-up motion-delay-1700 hover:motion-preset-bounce">Healthcare</span>
                <span className="hidden sm:inline motion-preset-fade motion-delay-1800">•</span>
                <span className="motion-preset-slide-up motion-delay-1800 hover:motion-preset-bounce">Oil & Gas</span>
                <span className="hidden sm:inline motion-preset-fade motion-delay-1900">•</span>
                <span className="motion-preset-slide-up motion-delay-1900 hover:motion-preset-bounce">Telecommunications</span>
                <span className="hidden sm:inline motion-preset-fade motion-delay-2000">•</span>
                <span className="motion-preset-slide-up motion-delay-2000 hover:motion-preset-bounce">Education</span>
                <span className="hidden sm:inline motion-preset-fade motion-delay-2100">•</span>
                <span className="motion-preset-slide-up motion-delay-2100 hover:motion-preset-bounce">Manufacturing</span>
                <span className="hidden sm:inline motion-preset-fade motion-delay-2200">•</span>
                <span className="motion-preset-slide-up motion-delay-2200 hover:motion-preset-bounce">Critical Infrastructure</span>
              </div>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="lg:pl-8 mt-8 lg:mt-0 motion-preset-slide-right motion-delay-300">
            <div className="grid gap-4 sm:gap-6">
              <Card className="group hover:shadow-[0_10px_5px_0px_#3EB9FA] transition-all duration-300 border-border/50 motion-preset-slide-up motion-delay-500 hover:motion-preset-wobble">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary-light flex-shrink-0 motion-preset-bounce motion-delay-800">
                      <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base motion-preset-slide-left motion-delay-700">Data Protection & Continuity</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed motion-preset-fade motion-delay-900">
                        Real-time replication, on premise and cloud backup, and email archiving solutions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-[0_10px_5px_0px_#3EB9FA] transition-all duration-300 border-border/50 motion-preset-slide-up motion-delay-600 hover:motion-preset-wobble">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary-light flex-shrink-0 motion-preset-bounce motion-delay-900">
                      <Workflow className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base motion-preset-slide-left motion-delay-800">DR & Migration Orchestration</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed motion-preset-fade motion-delay-1000">
                        Orchestrate and automate the Disaster Recovery and Migration workflow from the discovery level up to the management approval
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-[0_10px_5px_0px_#3EB9FA] transition-all duration-300 border-border/50 motion-preset-slide-up motion-delay-700 hover:motion-preset-wobble">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary-light flex-shrink-0 motion-preset-bounce motion-delay-1000">
                      <Server className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base motion-preset-slide-left motion-delay-900">Application Modernization</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed motion-preset-fade motion-delay-1100">
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