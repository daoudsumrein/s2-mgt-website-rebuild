import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import nakivoLogo from "@/assets/logos/nakivo-logo-new.png";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const vendors = [
  {
    name: "OpenText",
    logo: "https://www.opentext.com/assets/images/favicon.png",
    description: "Core Data Protection Platform",
    tagline: "Enterprise-grade data protection, availability, and secure cloud solutions",
    solutions: [
      "Data Protection - Availability & Migrate",
      "Secure Cloud Suite - Cloud-to-Cloud Backup",
      "Email Continuity & Archiving",
      "Endpoint & Threat Protection"
    ],
    href: "/vendors/opentext",
    color: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    name: "TDS",
    logo: "https://www.transitionaldata.com/uploads/2024/06/TDS-Website-Favicon-100x100.png",
    description: "Orchestration & IT Visibility",
    tagline: "TDS is a powerful orchestration and automation platform that streamlines migration and disaster recovery, while enhancing and accelerating IT operations to drive digital transformation",
    solutions: [
      "IT Discovery & Asset Management",
      "Dependency Mapping & Visualization",
      "Migration Wave Planning",
      "DR Orchestration & Reporting"
    ],
    href: "/vendors/tds",
    color: "bg-green-50 text-green-700 border-green-200"
  },
  {
    name: "appCURE",
    logo: "https://appcure.io/wp-content/uploads/2025/04/light-logo.png",
    description: "Application Modernization",
    tagline: "Complete application transformation and modernization platform",
    solutions: [
      "Capture - Application Assessment",
      "Studio - App Repackaging",
      "Runtime - Secure Environments",
      "DMT - Desktop Modernization"
    ],
    href: "/vendors/appcure",
    color: "bg-purple-50 text-purple-700 border-purple-200"
  },
  {
    name: "NAKIVO",
    logo: nakivoLogo,
    description: "Backup & Recovery",
    tagline: "Comprehensive data protection solutions for virtual and cloud environments",
    solutions: [
      "VM Backup & Recovery",
      "Cloud Data Protection",
      "Microsoft 365 Backup",
      "Disaster Recovery Orchestration"
    ],
    href: "/vendors/nakivo",
    color: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    name: "Arrosoft",
    logo: "https://www.arrosoft.com/favicon.svg",
    description: "Endpoint & Data Protection",
    tagline: "Advanced endpoint backup and data protection solutions",
    solutions: [
      "Endpoint Backup & Recovery",
      "Centralized Management",
      "Continuous Data Protection",
      "Bare Metal Recovery"
    ],
    href: "/vendors/arrosoft",
    color: "bg-cyan-50 text-cyan-700 border-cyan-200"
  }
];

export default function Vendors() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: vendorsRef, isInView: vendorsInView } = useScrollAnimation();
  const { ref: partnershipRef, isInView: partnershipInView } = useScrollAnimation();
  const { ref: portalRef, isInView: portalInView } = useScrollAnimation();

  return (
    <>
      <SEOHead 
        title="Technology Vendors & Partners | S2 Management Solutions"
        description="Explore S2's strategic technology partnerships with OpenText, TDS, AppCURE, NAKIVO, and Arrosoft. Expert solutions for data protection and cybersecurity."
        keywords="S2 vendors, OpenText partner, TDS distributor, AppCURE reseller, NAKIVO solutions, Arrosoft backup, technology partners MENA"
        canonicalUrl="https://s2mgt.com/vendors"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
      <main>
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="py-16 bg-gradient-to-b from-primary-light to-background"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">Technology Partners</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Our Strategic Vendors
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                S2 partners with industry-leading technology vendors to deliver comprehensive 
                data protection, disaster recovery, and application modernization solutions.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Vendors Grid */}
        <motion.section 
          ref={vendorsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={vendorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="py-16"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {vendors.map((vendor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={vendorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center font-bold text-lg border bg-white overflow-hidden">
                        <img src={vendor.logo} alt={`${vendor.name} logo`} className="w-12 h-12 object-contain" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{vendor.name}</CardTitle>
                        <Badge className="mb-3">{vendor.description}</Badge>
                        <p className="text-muted-foreground">{vendor.tagline}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-3">Key Solutions:</h4>
                      <ul className="space-y-2">
                        {vendor.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t mt-auto">
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                        <Link to={vendor.href}>
                          Learn More About {vendor.name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Partnership Approach */}
        <motion.section 
          ref={partnershipRef}
          initial={{ opacity: 0, y: 30 }}
          animate={partnershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="py-16 bg-muted/30"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Partnership Approach</h2>
              <p className="text-lg text-muted-foreground mb-12">
                S2 maintains deep technical partnerships with leading vendors to ensure we can 
                architect and deliver the most effective solutions for your enterprise needs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      1
                    </div>
                    <h3 className="font-semibold mb-2">Deep Technical Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team maintains advanced certifications and technical expertise across all partner platforms
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      2
                    </div>
                    <h3 className="font-semibold mb-2">Solution Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      We architect multi-vendor solutions that work seamlessly together in your environment
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      3
                    </div>
                    <h3 className="font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Direct access to vendor support channels and S2's technical team for complete coverage
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Partner Portal CTA */}
        <motion.section 
          ref={portalRef}
          initial={{ opacity: 0, y: 30 }}
          animate={portalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="py-16"
        >
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="text-center p-8">
                <h2 className="text-2xl font-bold mb-4">Partner Portal Access</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Existing partners can access technical resources, documentation, and project management tools 
                  through our dedicated partner portal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a 
                      href="https://preview--pipeline-pro-portal.lovable.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Access Partner Portal
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Request Partner Access</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>
        <Footer />
      </div>
    </>
  );
}