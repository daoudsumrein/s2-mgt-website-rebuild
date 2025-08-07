import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Users, Building, Wrench, Shield, Zap, RefreshCw } from "lucide-react";

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
          <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center text-primary-foreground">
                <Badge variant="secondary" className="mb-6 bg-white/20 border-white/30 text-white backdrop-blur-sm">
                  Professional Services
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Our Services
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed">
                  At S2 Management Solutions, we tailor our service offerings to meet the unique needs of every organization we support. Backed by deep expertise in cybersecurity, data protection, digital transformation, and business continuity.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <a href="/contact" className="flex items-center">
                    Discuss Your Requirements
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Services Carousel */}
          <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Comprehensive Service Portfolio
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    From strategic planning to full implementation and ongoing support
                  </p>
                </div>

                <Carousel 
                  className="w-full" 
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {services.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/1 lg:basis-1/1">
                          <div className="p-2">
                            <Card className="group h-full bg-gradient-to-br from-background via-background to-muted/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] overflow-hidden backdrop-blur-sm">
                              <CardContent className="p-0 relative">
                                {/* Animated Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                
                                {/* Header Section */}
                                <div className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8">
                                  {/* Decorative Elements */}
                                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl transform -translate-x-8 translate-y-8"></div>
                                  
                                  <div className="relative z-10 flex items-center space-x-6 mb-6">
                                    <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110">
                                      <IconComponent className="h-10 w-10 group-hover:rotate-6 transition-transform duration-500" />
                                    </div>
                                    <div>
                                      <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                                      <p className="text-primary-foreground/90 text-lg">{service.description}</p>
                                    </div>
                                  </div>
                                </div>

                                {/* Content Section */}
                                <div className="relative p-8 space-y-8">
                                  <div className="prose max-w-none">
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                      {service.content}
                                    </p>
                                  </div>

                                  {/* Key Capabilities */}
                                  <div className="space-y-6">
                                    <h4 className="font-bold text-xl text-foreground">Key Capabilities:</h4>
                                    <div className="grid grid-cols-1 gap-4">
                                      {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="group/item flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300">
                                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                                          <span className="font-medium text-foreground group-hover/item:text-primary transition-colors duration-300">{feature}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* CTA Button */}
                                  <div className="pt-6">
                                    <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6">
                                      <a href="/contact" className="flex items-center justify-center">
                                        Learn More About {service.title}
                                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
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
                  <div className="flex justify-center mt-12 space-x-6">
                    <CarouselPrevious className="relative translate-y-0 left-0 w-14 h-14 border-2 bg-background hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300" />
                    <CarouselNext className="relative translate-y-0 right-0 w-14 h-14 border-2 bg-background hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300" />
                  </div>
                </Carousel>
              </div>
            </div>
          </section>

          {/* Process Overview */}
          <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Our Service Delivery Process
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Structured, agile delivery model guaranteeing seamless execution and measurable results
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="group text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm hover:bg-background/80 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl flex items-center justify-center mx-auto font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
                        1
                      </div>
                      <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">Assessment</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Comprehensive analysis of current state and requirements
                    </p>
                  </div>
                  
                  <div className="group text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm hover:bg-background/80 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl flex items-center justify-center mx-auto font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
                        2
                      </div>
                      <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">Design</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Solution architecture and implementation planning
                    </p>
                  </div>
                  
                  <div className="group text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm hover:bg-background/80 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl flex items-center justify-center mx-auto font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
                        3
                      </div>
                      <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">Implementation</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Execution with testing, training, and knowledge transfer
                    </p>
                  </div>
                  
                  <div className="group text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm hover:bg-background/80 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl flex items-center justify-center mx-auto font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
                        4
                      </div>
                      <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">Support</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Ongoing optimization and operational handover
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20l20-20H20v20zM0 40l20-20v20H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-4xl mx-auto text-primary-foreground">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
                  Whether you're migrating to the cloud, implementing disaster recovery, or modernizing your infrastructure, 
                  S2's structured delivery model ensures seamless execution, minimal disruption, and measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg py-6 px-8">
                    <a href="/contact" className="flex items-center">
                      Start Your Project
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6 px-8">
                    <a href="/solutions">
                      View Our Solutions
                    </a>
                  </Button>
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