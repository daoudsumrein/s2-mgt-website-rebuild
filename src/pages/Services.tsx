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
    description: "Certified Nutanix implementation and support services",
    content: "As a certified Nutanix Service Implementation Partner, we deliver enterprise-grade hyperconverged infrastructure solutions. Our team specializes in designing, deploying, and optimizing Nutanix environments that simplify IT operations while delivering the performance and scalability your business demands.",
    features: [
      "Certified Nutanix implementations",
      "Hyperconverged infrastructure design",
      "Migration to Nutanix platforms",
      "Performance optimization",
      "Ongoing support and management"
    ]
  },
  {
    icon: Cloud,
    title: "HPE Zerto Professional Services & HPE Partners Solution Implementation",
    description: "Enterprise disaster recovery and data protection with HPE partner solutions",
    content: "As an HPE Zerto professional service provider, we deliver comprehensive disaster recovery and business continuity solutions. We also implement HPE partner solutions including CloudCasa for Kubernetes backup and RiverMeadow for cloud migration, ensuring your infrastructure is protected and optimized across hybrid and multi-cloud environments.",
    features: [
      "HPE Zerto DR implementation",
      "CloudCasa Kubernetes backup",
      "RiverMeadow cloud migration",
      "Business continuity planning",
      "Multi-cloud data protection"
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
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          {/* Stacking Cards Section */}
          <div id="stacking-cards">
            <StackingCards cards={services} onCardClick={handleCardClick} />
          </div>

          {/* Service Details Section - All Services */}
          <motion.section 
            ref={detailsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="py-8 sm:py-12 lg:py-16 bg-background"
          >
            <div className="container mx-auto px-4">
               <div className="text-center mb-12 sm:mb-16">
                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Services in Detail</h2>
                 <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                   Comprehensive information about each of our specialized service offerings
                 </p>
               </div>

              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div 
                    key={index} 
                    id={`service-${index}`} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="mb-8 sm:mb-12 lg:mb-16 last:mb-0"
                  >
                     <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 sm:p-6 lg:p-8">
                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
                         <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                           <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                         </div>
                         <div className="flex-1">
                           <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">{service.title}</h3>
                           <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">{service.description}</p>
                         </div>
                       </div>

                       <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                         <div>
                           <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Overview</h4>
                           <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                             {service.content}
                           </p>
                         </div>

                         <div>
                           <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Key Features</h4>
                           <ul className="space-y-2 sm:space-y-3">
                             {service.features.map((feature, featureIndex) => (
                               <li key={featureIndex} className="flex items-start gap-3">
                                 <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                 <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                               </li>
                             ))}
                           </ul>
                         </div>
                       </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>


        </main>
        <Footer />
      </div>
    </>
  );
}