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
          {/* Hero Section with Animated Particles */}
          <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800">
            {/* Animated Particles Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial from-blue-600/10 to-transparent"></div>
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 4 + 2}px`,
                    animationDelay: `${Math.random() * 6}s`,
                    animationDuration: `${Math.random() * 4 + 4}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
              {/* Hero Content */}
              <div className="mb-16 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  Cybersecurity & IT Excellence
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  S2 Management Solutions delivers strategic, high-impact technology solutions that empower resilient and secure IT operations. Your trusted partner in building the foundation for lasting success.
                </p>
                <a 
                  href="#contact" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
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
                      className="group relative bg-white/5 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 transition-all duration-300 hover:transform hover:-translate-y-3 hover:bg-blue-600/10 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      {/* Gradient top border */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      
                      {/* Icon */}
                      <div className="w-15 h-15 mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
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