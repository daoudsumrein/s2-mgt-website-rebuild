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
      "Strategic technology planning and assessments",
      "Vendor-neutral guidance and recommendations", 
      "Customized roadmap development",
      "Risk analysis and mitigation strategies",
      "Business continuity and resilience planning"
    ]
  },
  {
    icon: Building,
    title: "Solutions Architecture",
    description: "Robust, scalable, and future-proof IT environments designed for your ecosystem",
    content: "Our strength in solutions architecture lies in our ability to design robust, scalable, and future proof IT environments tailored to each client's unique ecosystem. Backed by deep technical expertise and industry recognized certifications, our architects bridge business objectives with technology strategies. Whether it's cloud transformation, cybersecurity architecture, disaster recovery design, or infrastructure modernization, we take a holistic, vendor agnostic approach to craft architectures that perform reliably in complex, mission critical environments. With S2, you don't just get a design, you get a roadmap to sustainable innovation.",
    features: [
      "Cloud transformation architecture design",
      "Cybersecurity framework and infrastructure",
      "Disaster recovery and business continuity",
      "Infrastructure modernization strategies",
      "Vendor-agnostic, future-proof solutions"
    ]
  },
  {
    icon: Wrench,
    title: "Professional Services",
    description: "Comprehensive, milestone-driven project execution from start to finish",
    content: "S2 Professional Services are designed to deliver comprehensive, milestone driven project execution from start to finish. We manage the full lifecycle, beginning with assessment and planning, through implementation, optimization, and post deployment support, ensuring each phase is executed with precision and aligned to your business objectives. Our certified technical team leads every project through well-defined stages, including solution design, architecture, deployment, testing, onsite training and knowledge transfer, culminating in a smooth operational handover. We place strong emphasis on empowering your internal teams through hands on training and documentation, ensuring long-term success and self-sufficiency. Whether you're migrating to the cloud, implementing a disaster recovery solution, or modernizing your infrastructure, S2's structured and agile delivery model guarantees seamless execution, minimal disruption, and measurable results, on time and within budget.",
    features: [
      "Full lifecycle project management",
      "Milestone-driven execution and delivery",
      "Comprehensive testing and optimization",
      "Onsite training and knowledge transfer",
      "Seamless operational handover process"
    ]
  },
  {
    icon: Shield,
    title: "Service Level Agreements",
    description: "Business-critical commitment with measurable reliability and accountability",
    content: "At S2 Management Solutions, we understand that Disaster Recovery is not just technology, it's a business critical commitment. Our SLAs for DR operations are designed to deliver measurable reliability, performance, and accountability when it matters most. We offer customizable SLA tiers to align with your specific RTOs and RPOs, ensuring your critical systems and data are protected and recoverable within agreed timelines. From incident response to regular DR testing and 24/7 support, our SLA framework ensures operational continuity, compliance, and peace of mind. With clearly defined escalation paths, guaranteed response times, and full transparency, S2 acts as an extension of your team, committed to keeping your business running through any disruption.",
    features: [
      "Customizable SLA tiers for specific needs",
      "Defined RTOs and RPOs with guarantees",
      "24/7 incident response and support",
      "Regular DR testing and validation",
      "Transparent escalation and communication"
    ]
  },
  {
    icon: RefreshCw,
    title: "Application Modernization and Migration",
    description: "Seamless transition from legacy systems to modern, secure platforms",
    content: "At S2 Management Solutions, our Application Modernization and Migration services are purpose-built to transition your critical applications from outdated, legacy operating systems to modern, secure, and fully supported platforms. We specialize in assessing legacy environments, identifying application dependencies, and executing seamless migrations to updated OS versions, whether on premises, in the cloud, or across hybrid environments. Our process ensures minimal downtime, data integrity, and application continuity, while also enhancing security, performance, and long-term maintainability. From discovery and planning to execution, testing, and post-migration support, S2 delivers a structured, risk managed approach that helps organizations reduce technical debt and unlock the benefits of a modern IT ecosystem.",
    features: [
      "Legacy environment assessment and analysis",
      "Application dependency mapping and planning",
      "Seamless migration with minimal downtime",
      "Multi-platform support (on-premises, cloud, hybrid)",
      "Risk-managed approach with thorough testing"
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
          block: 'start'
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

                      <div className="mt-8 text-center">
                        <Button size="lg" className="group">
                          Get Started with {service.title}
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
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