import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Database } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background via-muted/50 to-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-sm px-4 py-2">
            Leading IT Solutions Provider in MENA Since 2013
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
            Transform Your IT Infrastructure
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade Data Protection, Disaster Recovery, and Cybersecurity solutions 
            for Government, BFSI, and Critical Infrastructure across the Middle East
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/solutions">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
          
          {/* Key Value Props */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 p-6 rounded-lg bg-background/60 backdrop-blur-sm border">
              <Database className="h-8 w-8 text-primary flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-2">Data Protection</h3>
                <p className="text-muted-foreground">
                  Comprehensive backup, disaster recovery, and business continuity solutions
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 p-6 rounded-lg bg-background/60 backdrop-blur-sm border">
              <Shield className="h-8 w-8 text-secondary flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-2">Cybersecurity</h3>
                <p className="text-muted-foreground">
                  Advanced endpoint protection, threat detection, and security awareness training
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}