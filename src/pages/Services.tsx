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
          <section className="py-16 bg-gradient-to-b from-primary-light to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Our Service Delivery Process</h2>
                  <p className="text-lg text-muted-foreground">
                    Structured, agile delivery model guaranteeing seamless execution and measurable results
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      1
                    </div>
                    <h3 className="font-semibold mb-2">Assessment</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive analysis of current state and requirements
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      2
                    </div>
                    <h3 className="font-semibold mb-2">Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Solution architecture and implementation planning
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      3
                    </div>
                    <h3 className="font-semibold mb-2">Implementation</h3>
                    <p className="text-sm text-muted-foreground">
                      Execution with testing, training, and knowledge transfer
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      4
                    </div>
                    <h3 className="font-semibold mb-2">Support</h3>
                    <p className="text-sm text-muted-foreground">
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