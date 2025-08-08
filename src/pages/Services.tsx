import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Users, Building, Wrench, Shield, Zap, RefreshCw } from "lucide-react";
import StackingCards from "@/components/StackingCards";
import { useEffect, useState } from "react";

// Auto-sliding carousel implementation
const services = [
  {
    icon: Users,
    title: "Consultancy Services",
    description: "Expert, vendor-neutral guidance tailored to your unique challenges and goals",
    content: "At S2 Management Solutions, our consultancy approach is grounded in a simple but powerful principle that to assure the total commitment to those we serve. We don't lead with products, we lead with purpose. Our consultants begin by listening carefully and understanding the specific needs, challenges, and goals of each client. From strategic planning to technology assessments and roadmap development, we provide expert, vendor-neutral guidance to design solutions that are practical, scalable, and aligned with your long-term vision. Every recommendation we make is tailored to solve real business challenges, never a one-size-fits-all answer, but a partnership built on trust, insight, and results.",
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
    content: "Our strength in solutions architecture lies in our ability to design robust, scalable, and future proof IT environments tailored to each client's unique ecosystem. Backed by deep technical expertise and industry recognized certifications, our architects bridge business objectives with technology strategies. Whether it's cloud transformation, cybersecurity architecture, disaster recovery design, or infrastructure modernization, we take a holistic, vendor agnostic approach to craft architectures that perform reliably in complex, mission critical environments. With S2, you don't just get a design, you get a roadmap to sustainable innovation.",
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
    content: "S2 Professional Services are designed to deliver comprehensive, milestone driven project execution from start to finish. We manage the full lifecycle, beginning with assessment and planning, through implementation, optimization, and post deployment support, ensuring each phase is executed with precision and aligned to your business objectives. Our certified technical team leads every project through well-defined stages, including solution design, architecture, deployment, testing, onsite training and knowledge transfer, culminating in a smooth operational handover. We place strong emphasis on empowering your internal teams through hands on training and documentation, ensuring long-term success and self-sufficiency.",
    features: [
      "Full lifecycle project management",
      "Solution design and implementation",
      "Testing and optimization",
      "Onsite training and knowledge transfer",
      "Smooth operational handover"
    ]
  },
  {
    icon: Shield,
    title: "Service Level Agreements",
    description: "Business-critical commitment with measurable reliability and accountability",
    content: "At S2 Management Solutions, we understand that Disaster Recovery is not just technology, it's a business critical commitment. Our SLAs for DR operations are designed to deliver measurable reliability, performance, and accountability when it matters most. We offer customizable SLA tiers to align with your specific RTOs and RPOs, ensuring your critical systems and data are protected and recoverable within agreed timelines. From incident response to regular DR testing and 24/7 support, our SLA framework ensures operational continuity, compliance, and peace of mind.",
    features: [
      "Customizable SLA tiers",
      "Defined RTOs and RPOs",
      "24/7 incident response",
      "Regular DR testing",
      "Transparent escalation paths"
    ]
  },
  {
    icon: RefreshCw,
    title: "Application Modernization and Migration",
    description: "Seamless transition from legacy systems to modern, secure platforms",
    content: "At S2 Management Solutions, our Application Modernization and Migration services are purpose-built to transition your critical applications from outdated, legacy operating systems to modern, secure, and fully supported platforms. We specialize in assessing legacy environments, identifying application dependencies, and executing seamless migrations to updated OS versions, whether on premises, in the cloud, or across hybrid environments. Our process ensures minimal downtime, data integrity, and application continuity, while also enhancing security, performance, and long-term maintainability.",
    features: [
      "Legacy environment assessment",
      "Application dependency mapping",
      "Seamless migration execution",
      "Multi-platform support",
      "Risk-managed approach"
    ]
  }
];

export default function Services() {
  const [carouselApi, setCarouselApi] = useState(null);
  const [direction, setDirection] = useState('forward'); // Track direction
  const [isPaused, setIsPaused] = useState(false); // Track pause state
  const [selectedService, setSelectedService] = useState(services[0]); // Default to first service
  const [hoveredService, setHoveredService] = useState(null);

  const handleCardClick = (service, index) => {
    setSelectedService(service);
  };

  useEffect(() => {
    if (!carouselApi || isPaused) return;

    const interval = setInterval(() => {
      if (direction === 'forward') {
        if (carouselApi.canScrollNext()) {
          carouselApi.scrollNext();
        } else {
          setDirection('backward'); // Switch to reverse
          carouselApi.scrollPrev();
        }
      } else {
        if (carouselApi.canScrollPrev()) {
          carouselApi.scrollPrev();
        } else {
          setDirection('forward'); // Switch to forward
          carouselApi.scrollNext();
        }
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [carouselApi, direction, isPaused]);

  return (
    <>
      <SEOHead 
        title="Professional IT Services | S2 Management Solutions"
        description="Comprehensive IT services including consultancy, solutions architecture, professional services, SLAs, and application modernization. Expert guidance for your digital transformation."
        keywords="IT consultancy, solutions architecture, professional services, application modernization, disaster recovery SLA, UAE IT services"
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          {/* Stacking Cards Section */}
          <div id="stacking-cards">
            <StackingCards cards={services} onCardClick={handleCardClick} />
          </div>

          {/* Service Details Section */}
          {selectedService && (
            <section className="py-16 bg-card/30 backdrop-blur-sm">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <selectedService.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{selectedService.title}</h2>
                      <p className="text-lg text-muted-foreground">{selectedService.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedService.content}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {selectedService.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button size="lg" className="group">
                      Get Started with {selectedService.title}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Hero Section with Animated Particles */}
          <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-background via-primary-light to-accent">
            {/* Animated Particles Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent"></div>
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-primary to-secondary opacity-40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 6 + 3}px`,
                    height: `${Math.random() * 6 + 3}px`,
                    animation: `floatMove ${Math.random() * 8 + 6}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
              {/* Additional floating elements with circular motion */}
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={`circle-${i}`}
                  className="absolute rounded-full bg-gradient-to-br from-primary/30 to-secondary/30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 4 + 2}px`,
                    animation: `floatCircle ${Math.random() * 15 + 10}s linear infinite`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
              {/* Hero Content */}
              <div className="mb-16 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent leading-tight">
                  Cybersecurity & IT Excellence
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  S2 Management Solutions delivers strategic, high-impact technology solutions that empower resilient and secure IT operations. Your trusted partner in building the foundation for lasting success.
                </p>
                <a 
                  href="#contact" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                  Start Your Transformation
                </a>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.slice(0, 6).map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className={`group relative bg-card/50 backdrop-blur-lg border border-primary/20 rounded-2xl p-6 transition-all duration-500 cursor-pointer transform hover:-translate-y-4 hover:scale-105 hover:bg-primary/5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 animate-fade-in ${
                        hoveredService === index ? 'ring-2 ring-primary/50' : ''
                      }`}
                      style={{
                        animationDelay: `${index * 0.15}s`,
                      }}
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                      onClick={() => {
                        setSelectedService(service);
                        // Only scroll if not already in the stacking cards viewport
                        const stackingSection = document.querySelector('#stacking-cards');
                        const rect = stackingSection?.getBoundingClientRect();
                        const isInViewport = rect && rect.top <= window.innerHeight && rect.bottom >= 0;
                        
                        if (!isInViewport) {
                          stackingSection?.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }}
                    >
                      {/* Gradient top border */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      
                      {/* Interactive glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Icon */}
                      <div className="relative w-16 h-16 mb-4 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/40">
                        <IconComponent className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="relative text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">
                        {service.title}
                      </h3>
                      <p className="relative text-muted-foreground leading-relaxed text-sm group-hover:text-foreground transition-all duration-300">
                        {service.description}
                      </p>
                      
                      {/* Interactive arrow */}
                      <div className="absolute bottom-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                      
                      {/* Click ripple effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-active:opacity-100 transition-opacity duration-150"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}