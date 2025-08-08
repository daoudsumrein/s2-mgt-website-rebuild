import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Building, Wrench, FileText, Rocket, Database } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const services = [
  {
    icon: Target,
    title: "Consultancy Services",
    description: "Expert, vendor-neutral guidance tailored to your unique challenges and goals",
    content: "At S2 Management Solutions, our consultancy approach is grounded in a simple but powerful principle: total commitment to those we serve. We don't lead with products, we lead with purpose. Our consultants begin by listening carefully and understanding the specific needs, challenges, and goals of each client.",
    features: [
      "Strategic technology planning",
      "Vendor-neutral assessments", 
      "Roadmap development",
      "Risk analysis and mitigation",
      "Business continuity planning"
    ]
  },
  {
    icon: Building,
    title: "Solutions Architecture",
    description: "Robust, scalable, and future-proof IT environments designed for your ecosystem",
    content: "Our strength in solutions architecture lies in our ability to design robust, scalable, and future-proof IT environments tailored to each client's unique ecosystem. Backed by deep technical expertise and industry-recognized certifications, our architects bridge business objectives with technology strategies.",
    features: [
      "Cloud transformation architecture",
      "Cybersecurity framework design",
      "Disaster recovery planning",
      "Infrastructure modernization",
      "Vendor-agnostic approach"
    ]
  },
  {
    icon: Wrench,
    title: "Professional Services",
    description: "Comprehensive, milestone-driven project execution from start to finish",
    content: "S2 Professional Services are designed to deliver comprehensive, milestone-driven project execution from start to finish. We manage the full lifecycle, beginning with assessment and planning, through implementation, optimization, and post-deployment support.",
    features: [
      "Full lifecycle project management",
      "Solution design and implementation",
      "Testing and optimization",
      "Onsite training and knowledge transfer",
      "Smooth operational handover"
    ]
  },
  {
    icon: FileText,
    title: "Service Level Agreements",
    description: "Business-critical commitment with measurable reliability and accountability",
    content: "At S2 Management Solutions, we understand that Disaster Recovery is not just technology, it's a business-critical commitment. Our SLAs for DR operations are designed to deliver measurable reliability, performance, and accountability when it matters most.",
    features: [
      "Customizable SLA tiers",
      "Defined RTOs and RPOs",
      "24/7 incident response",
      "Regular DR testing",
      "Transparent escalation paths"
    ]
  },
  {
    icon: Rocket,
    title: "Application Modernization",
    description: "Seamless transition from legacy systems to modern, secure platforms",
    content: "At S2 Management Solutions, our Application Modernization services are purpose-built to transition your critical applications from outdated, legacy operating systems to modern, secure, and fully supported platforms.",
    features: [
      "Legacy environment assessment",
      "Application dependency mapping",
      "Seamless migration execution",
      "Multi-platform support",
      "Risk-managed approach"
    ]
  },
  {
    icon: Database,
    title: "Migration Services",
    description: "Secure and efficient data and system migration",
    content: "Comprehensive migration services that ensure your data and applications are transferred securely and efficiently to new platforms with zero data loss and minimal downtime.",
    features: [
      "Data migration planning",
      "System transfer execution",
      "Testing and validation",
      "Rollback planning",
      "Post-migration support"
    ]
  }
];

export default function Services() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speedX: number;
    speedY: number;
  }>>([]);
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create 100 particles
    const newParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));
    setParticles(newParticles);

    const animateParticles = () => {
      if (typeof window === 'undefined') return;
      
      setParticles(prev => prev.map(particle => {
        const newX = particle.x + particle.speedX;
        const newY = particle.y + particle.speedY;
        
        return {
          ...particle,
          x: newX > window.innerWidth ? 0 : newX < 0 ? window.innerWidth : newX,
          y: newY > window.innerHeight ? 0 : newY < 0 ? window.innerHeight : newY,
        };
      }));
      animationRef.current = requestAnimationFrame(animateParticles);
    };

    animationRef.current = requestAnimationFrame(animateParticles);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <SEOHead 
        title="Professional IT Services & Solutions | S2 Management Solutions"
        description="Comprehensive IT services including consultancy, architecture, professional services, SLAs, application modernization, and migration. Expert solutions for enterprise technology needs."
        keywords="IT services, consultancy, solutions architecture, professional services, SLA, application modernization, migration, enterprise technology"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background particles */}
        <div 
          ref={containerRef}
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
          }}
        >
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                filter: 'blur(0.5px)',
              }}
            />
          ))}
        </div>

        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent leading-tight">
              Professional IT Services
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              S2 Management Solutions delivers strategic, high-impact technology solutions that empower resilient and secure IT operations. Your trusted partner in building the foundation for lasting success.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Transformation
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Our Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={index} 
                    className="group relative bg-white/5 backdrop-blur-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 hover:bg-white/10 rounded-2xl overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Top border gradient */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    
                    <CardHeader className="relative z-10 pb-4">
                      <div className="w-16 h-16 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 pt-0">
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {service.content}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <Badge 
                              key={featureIndex} 
                              variant="secondary" 
                              className="bg-blue-900/30 text-blue-200 border border-blue-500/30 hover:bg-blue-800/40 transition-colors duration-300"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-blue-600/10 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    99.9%
                  </div>
                  <div className="text-slate-300 text-sm lg:text-base">Uptime Guarantee</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-slate-300 text-sm lg:text-base">Support Coverage</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-slate-300 text-sm lg:text-base">Projects Delivered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    15min
                  </div>
                  <div className="text-slate-300 text-sm lg:text-base">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Your IT?
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Whether you're navigating complex challenges or pursuing ambitious growth, S2 is your trusted partner in building the technology foundation for lasting success.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </Button>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}