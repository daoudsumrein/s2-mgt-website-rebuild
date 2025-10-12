import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Users, Building, Wrench, Shield, Zap, RefreshCw, Server, Cloud } from "lucide-react";
import StackingCards from "@/components/StackingCards";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

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
  },
  {
    icon: Server,
    title: "Nutanix Service Implementation Partner",
    description: "Certified expertise in Nutanix hyperconverged infrastructure deployment",
    content: "As a certified Nutanix Service Implementation Partner, we deliver end-to-end deployment, configuration, and optimization of Nutanix hyperconverged infrastructure. Our team ensures seamless integration with your existing environment while maximizing performance and reliability.",
    features: [
      "Certified Nutanix deployment",
      "Infrastructure optimization",
      "Seamless integration",
      "Performance tuning",
      "Ongoing support and maintenance"
    ]
  },
  {
    icon: Cloud,
    title: "HPE Zerto Professional Services",
    description: "HPE partner implementations with CloudCasa and RiverMeadow integration",
    content: "We provide comprehensive HPE Zerto professional services as an authorized HPE partner. Our expertise extends to seamless integration with CloudCasa for Kubernetes protection and RiverMeadow for automated cloud migration, ensuring complete data protection and mobility across your hybrid environment.",
    features: [
      "HPE Zerto disaster recovery",
      "CloudCasa Kubernetes backup",
      "RiverMeadow cloud migration",
      "Multi-platform integration",
      "End-to-end deployment"
    ]
  }
];

export default function Services() {
  const [carouselApi, setCarouselApi] = useState(null);
  const [direction, setDirection] = useState('forward'); // Track direction
  const [isPaused, setIsPaused] = useState(false); // Track pause state
  const [selectedService, setSelectedService] = useState(services[0]); // Default to first service
  const [hoveredService, setHoveredService] = useState(null);
  const { ref: detailsRef, isInView: detailsInView } = useScrollAnimation();

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
        title="IT Consultancy & Professional Services – UAE, KSA & MENA"
        description="Consultancy-led IT services in MENA: strategy, solutions architecture, DR planning, migration, SLAs & modernization. Vendor-neutral, enterprise-focused delivery."
        keywords="IT Consultancy Services MENA,Disaster Recovery Planning KSA,IT Migration & Modernization Solutions,Business Continuity & SLA Management MENA,IT Migration & Modernization Solutions,IT Solutions Architecture UAE"
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          {/* Stacking Cards Section */}
          <div id="stacking-cards">
            <StackingCards cards={services} onCardClick={handleCardClick} />
          </div>

          {/* Hero Section */}
          <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl p-8 md:p-12 shadow-lg">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2392CF] mb-4">
                    Our Services in Detail
                  </h2>
                  <p className="text-lg md:text-xl text-[#2392CF] leading-relaxed">
                    Comprehensive information about each of our specialized service offerings
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Details Section - All Services */}
          <motion.section 
            ref={detailsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="py-16 md:py-24 bg-slate-50"
          >
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div 
                      key={index} 
                      id={`service-${index}`} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl p-6 hover:bg-white hover:border-[#2392CF]/50 hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      {/* Icon and Title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#2392CF] to-[#1E7FB8] rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#2392CF]">{service.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm font-semibold text-slate-700 mb-4">
                        {service.description}
                      </p>

                      {/* Overview */}
                      <div className="mb-4 flex-grow">
                        <h4 className="text-sm font-bold text-[#2392CF] mb-2">Overview</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {service.content}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-[#2392CF] mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-[#2392CF] rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-sm text-[#2392CF]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto pt-4 border-t border-slate-200 flex gap-2">
                        <Button 
                          size="sm"
                          className="flex-1 bg-[#2392CF] hover:bg-[#1E7FB8] text-white text-xs"
                          asChild
                        >
                          <Link to="/contact">Engage This Service</Link>
                        </Button>
                        <Button 
                          variant="outline"
                          size="sm"
                          className="flex-1 border-[#2392CF] text-[#2392CF] hover:bg-[#2392CF] hover:text-white text-xs"
                          asChild
                        >
                          <Link to="/contact">Request Consultation</Link>
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* Global CTA Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl p-8 md:p-12 shadow-lg text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2392CF] mb-4">
                    Ready to Transform Your IT Infrastructure?
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Let our team help you design and implement the right solutions for your business
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg"
                      className="bg-[#2392CF] hover:bg-[#1E7FB8] text-white shadow-lg hover:shadow-xl transition-all"
                      asChild
                    >
                      <Link to="/contact">
                        Contact Our Team
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-[#2392CF] text-[#2392CF] hover:bg-[#2392CF] hover:text-white transition-all"
                      asChild
                    >
                      <Link to="/solutions">View Our Solutions</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}