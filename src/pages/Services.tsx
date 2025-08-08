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
          {/* Hero Section */}
          <section className="relative py-24 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 8 + 4}px`,
                    height: `${Math.random() * 8 + 4}px`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                  }}
                />
              ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                    Our Service Delivery Process
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Structured, agile delivery model guaranteeing seamless execution and measurable results
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="group text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto font-bold text-2xl shadow-2xl shadow-primary/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        1
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-foreground">Assessment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive analysis of current state and requirements
                    </p>
                  </div>
                  
                  <div className="group text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto font-bold text-2xl shadow-2xl shadow-primary/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        2
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-foreground">Design</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Solution architecture and implementation planning
                    </p>
                  </div>
                  
                  <div className="group text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto font-bold text-2xl shadow-2xl shadow-primary/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        3
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-foreground">Implementation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Execution with testing, training, and knowledge transfer
                    </p>
                  </div>
                  
                  <div className="group text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto font-bold text-2xl shadow-2xl shadow-primary/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        4
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-foreground">Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ongoing optimization and operational handover
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stacking Cards Section */}
          <StackingCards cards={services} />


        </main>
        <Footer />
      </div>
    </>
  );
}