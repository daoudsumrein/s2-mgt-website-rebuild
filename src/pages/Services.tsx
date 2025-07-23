import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Server, 
  Workflow, 
  Search, 
  Cloud, 
  Lock,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Shield,
    title: "Data Protection & Availability",
    description: "Comprehensive backup, replication, and high availability solutions",
    features: [
      "Real-time server replication with OpenText Availability",
      "Endpoint and cloud workload backup",
      "Email archiving and continuity solutions",
      "Immutable backup architectures"
    ],
    link: "/solutions/data-protection"
  },
  {
    icon: Workflow,
    title: "Server Migration & DR",
    description: "Disaster recovery orchestration and seamless server migrations",
    features: [
      "DR readiness planning and assessment",
      "Automated failover and failback orchestration",
      "Any-to-any server migration with OpenText Migrate",
      "Workflow automation with TDS TransitionManager"
    ],
    link: "/solutions/disaster-recovery"
  },
  {
    icon: Server,
    title: "Application Modernization",
    description: "Legacy application transformation and secure runtime environments",
    features: [
      "Application capture and repackaging",
      "Legacy to VDI migration",
      "Secure application runtime environments",
      "Desktop modernization toolkit"
    ],
    link: "/solutions/app-modernization"
  },
  {
    icon: Search,
    title: "IT Discovery & Dependency Mapping",
    description: "Comprehensive infrastructure analysis and visualization",
    features: [
      "Application and infrastructure discovery",
      "CMDB and ITSM integration",
      "Dependency visualization and mapping",
      "Migration wave planning"
    ],
    link: "/solutions/it-discovery"
  },
  {
    icon: Cloud,
    title: "Secure Cloud Suite",
    description: "Cloud-to-cloud backup and email protection",
    features: [
      "Microsoft 365 backup and protection",
      "Google Workspace data protection",
      "Email threat protection and filtering",
      "Cloud endpoint security"
    ],
    link: "/solutions/secure-cloud"
  },
  {
    icon: Lock,
    title: "Ransomware & Server Security",
    description: "Advanced threat protection and security solutions",
    features: [
      "File-level ransomware protection",
      "Immutable backup storage",
      "Email and server threat detection",
      "Security policy enforcement"
    ],
    link: "/solutions/security"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary-light to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Our Services</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive IT Infrastructure Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                S2 delivers end-to-end solutions covering data protection, disaster recovery, 
                application modernization, and IT infrastructure transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-primary-light group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                        <Link to={service.link}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Consultancy-Led Approach</h2>
              <p className="text-lg text-muted-foreground mb-12">
                We don't just deliver technology—we partner with you to architect solutions 
                that align with your business objectives and infrastructure requirements.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Discovery & Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive analysis of your current infrastructure, dependencies, and requirements
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Solution Architecture</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom design leveraging best-in-class technologies tailored to your environment
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Implementation & Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional deployment with ongoing technical support and optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how S2 can help modernize your data protection, disaster recovery, 
              and application infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/solutions/disaster-recovery">View Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}