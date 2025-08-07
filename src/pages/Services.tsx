import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Users, Building, Wrench, Shield, Zap, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselApi]);

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
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">Professional Services</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Our Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  At S2 Management Solutions, we tailor our service offerings to meet the unique needs of every organization we support. Backed by deep expertise in cybersecurity, data protection, digital transformation, and business continuity, we deliver strategic, high-impact solutions that empower resilient and secure IT operations. Whether you're navigating complex challenges or pursuing ambitious growth, S2 is your trusted partner in building the technology foundation for lasting success.
                </p>
                <Button size="lg" asChild>
                  <a href="/contact">
                    Discuss Your Requirements
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Services Carousel */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Comprehensive Service Portfolio</h2>
                  <p className="text-lg text-muted-foreground">
                    From strategic planning to full implementation and ongoing support
                  </p>
                </div>

                <Carousel className="w-full" setApi={setCarouselApi}>
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {services.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/1 lg:basis-1/1">
                          <div className="p-1">
                            <Card className="h-full bg-gradient-to-br from-background to-muted/30 border-2 hover:shadow-xl transition-all duration-500">
                              <CardContent className="p-0">
                                {/* Header Section */}
                                <div className="bg-primary text-primary-foreground p-6 rounded-t-lg">
                                  <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-3 rounded-lg bg-primary-foreground/20">
                                      <IconComponent className="h-8 w-8" />
                                    </div>
                                    <div>
                                      <h3 className="text-2xl font-bold">{service.title}</h3>
                                      <p className="text-primary-foreground/80">{service.description}</p>
                                    </div>
                                  </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 space-y-6">
                                  <div className="prose max-w-none">
                                    <p className="text-muted-foreground leading-relaxed">
                                      {service.content}
                                    </p>
                                  </div>

                                  {/* Key Capabilities */}
                                  <div className="space-y-4">
                                    <h4 className="font-semibold text-lg">Key Capabilities:</h4>
                                    <div className="grid grid-cols-1 gap-3">
                                      {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-start space-x-3">
                                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                          <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* CTA Button */}
                                  <div className="pt-4">
                                    <Button asChild className="w-full">
                                      <a href="/contact">
                                        Learn More About {service.title}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                      </a>
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <div className="flex justify-center mt-8 space-x-4">
                    <CarouselPrevious className="relative translate-y-0 left-0" />
                    <CarouselNext className="relative translate-y-0 right-0" />
                  </div>
                </Carousel>
              </div>
            </div>
          </section>

          {/* Process Overview */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Our Service Delivery Process</h2>
                  <p className="text-lg text-muted-foreground">
                    Structured, agile delivery model guaranteeing seamless execution and measurable results
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
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

          {/* CTA */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Whether you're migrating to the cloud, implementing disaster recovery, or modernizing your infrastructure, 
                S2's structured delivery model ensures seamless execution, minimal disruption, and measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="/solutions">
                    View Our Solutions
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}