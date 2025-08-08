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
    content: "We listen first, then provide solutions. Our consultants focus on understanding your specific needs and challenges before recommending technology solutions. We offer strategic planning, technology assessments, and roadmap development that align with your business goals. Every recommendation is tailored to solve real problems, not sell products.",
    features: [
      "Strategic technology planning",
      "Vendor-neutral assessments", 
      "Custom roadmap development",
      "Risk analysis and mitigation",
      "Business continuity planning"
    ]
  },
  {
    icon: Building,
    title: "Solutions Architecture",
    description: "Robust, scalable, and future-proof IT environments designed for your ecosystem",
    content: "We design IT environments that grow with your business. Our certified architects create scalable solutions for cloud transformation, cybersecurity, disaster recovery, and infrastructure modernization. We take a vendor-neutral approach to ensure your architecture performs reliably in mission-critical environments.",
    features: [
      "Cloud transformation design",
      "Cybersecurity architecture",
      "Disaster recovery planning",
      "Infrastructure modernization",
      "Future-proof solutions"
    ]
  },
  {
    icon: Wrench,
    title: "Professional Services",
    description: "Comprehensive, milestone-driven project execution from start to finish",
    content: "We handle your IT projects from start to finish. Our team manages the complete lifecycle including planning, implementation, testing, and support. We execute projects in clear stages with defined milestones, ensuring everything is delivered on time and within budget. We also provide training to empower your internal teams.",
    features: [
      "Full project lifecycle management",
      "Milestone-driven delivery",
      "Comprehensive testing",
      "Team training and knowledge transfer",
      "On-time, on-budget execution"
    ]
  },
  {
    icon: Shield,
    title: "Service Level Agreements",
    description: "Business-critical commitment with measurable reliability and accountability",
    content: "Disaster recovery isn't just technology—it's a business commitment. Our SLAs guarantee measurable reliability and performance when you need it most. We offer customizable service levels that align with your specific recovery time objectives, ensuring your critical systems are protected and recoverable within agreed timeframes.",
    features: [
      "Customizable service levels",
      "Guaranteed recovery times",
      "24/7 incident response",
      "Regular testing and validation",
      "Clear escalation procedures"
    ]
  },
  {
    icon: RefreshCw,
    title: "Application Modernization and Migration",
    description: "Seamless transition from legacy systems to modern, secure platforms",
    content: "We move your critical applications from outdated systems to modern, secure platforms. Our process includes assessing your current environment, identifying dependencies, and executing migrations with minimal downtime. Whether moving to cloud, on-premises, or hybrid environments, we ensure data integrity and improved performance.",
    features: [
      "Legacy system assessment",
      "Dependency mapping",
      "Minimal downtime migration",
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
    // Scroll to the specific service section
    setTimeout(() => {
      const serviceSection = document.querySelector(`#service-${index}`);
      if (serviceSection) {
        serviceSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
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

          {/* Service Details Section - All Services */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Services in Detail</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive information about each of our specialized service offerings
                </p>
              </div>

              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} id={`service-${index}`} className="mb-16 last:mb-0">
                    <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                          <IconComponent className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                          <p className="text-lg text-muted-foreground">{service.description}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-4">Overview</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.content}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-4">Key Features</h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </section>


        </main>
        <Footer />
      </div>
    </>
  );
}