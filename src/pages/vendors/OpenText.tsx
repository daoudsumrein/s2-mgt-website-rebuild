import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, CheckCircle, ArrowRight } from "lucide-react";


const solutions = [
  {
    category: "Data Protection",
    products: [
      {
        name: "Availability",
        description: "Real-time HA replication for any-to-any server protection",
        features: ["Zero-downtime protection", "Any-to-any replication", "Automated failover", "Cross-platform support"]
      },
      {
        name: "Migrate",
        description: "Live server migration with zero business interruption",
        features: ["Any-to-any migration", "Live workload mobility", "Cloud migration", "Zero downtime"]
      }
    ]
  },
  {
    category: "Secure Cloud",
    products: [
      {
        name: "Cloud-to-Cloud Backup",
        description: "Comprehensive backup for Microsoft 365, Google Workspace, Salesforce, Box, and Dropbox",
        features: ["Complete M365 protection", "Google Workspace backup", "Salesforce data protection", "Box & Dropbox backup", "Unlimited retention", "Granular recovery"]
      },
      {
        name: "Email Archiving & Continuity",
        description: "Email protection, archiving, and business continuity",
        features: ["Email continuity", "Compliance archiving", "Advanced search", "Legal hold"]
      },
      {
        name: "Secure Cloud",
        description: "Complete security and protection suite for enterprise environments",
        features: ["Endpoint Protection", "EDR (Endpoint Detection & Response)", "MDR (Managed Detection & Response)", "Email Encryption", "DNS Protection", "Security Awareness Training"]
      }
    ]
  }
];

export default function OpenTextPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center p-2">
                    <img src="/src/assets/logos/opentext-logo.png" alt="OpenText logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-white/80 font-medium">OpenText Solutions</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Data protection made 
                  <span className="block text-blue-200">simple</span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Focus on moving your business forward with enterprise-grade protection, 
                  zero-downtime migrations, and secure cloud solutions.
                </p>
                
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold">
                  Explore products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="relative lg:block hidden">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <img 
                    src="/lovable-uploads/9170555c-1cfd-4ce2-9a0e-3574bf5975d2.png" 
                    alt="Professional working with data protection solutions" 
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">Core Platform</Badge>
                <h2 className="text-3xl font-bold mb-4">Complete Data Protection Ecosystem</h2>
                <p className="text-lg text-muted-foreground">
                  OpenText provides the backbone of S2's data protection offerings, delivering 
                  enterprise-grade availability, migration, and secure cloud solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      99.9%
                    </div>
                    <h3 className="font-semibold mb-2">Uptime Guarantee</h3>
                    <p className="text-sm text-muted-foreground">Mission-critical availability</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      0
                    </div>
                    <h3 className="font-semibold mb-2">Zero Downtime</h3>
                    <p className="text-sm text-muted-foreground">Live migration & replication</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      24/7
                    </div>
                    <h3 className="font-semibold mb-2">Global Support</h3>
                    <p className="text-sm text-muted-foreground">Enterprise-grade support</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">OpenText Solution Portfolio</h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive data protection and secure cloud solutions
                </p>
              </div>

              {solutions.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">{category.category}</h3>
                  <div className="grid lg:grid-cols-2 gap-6">
                    {category.products.map((product, productIndex) => (
                      <Card key={productIndex} className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-xl">{product.name}</CardTitle>
                          <p className="text-muted-foreground">{product.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {product.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Ideal Use Cases</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Government & Public Sector</h3>
                    <p className="text-muted-foreground">
                      High availability requirements, compliance needs, and citizen service continuity
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Banking & Financial Services</h3>
                    <p className="text-muted-foreground">
                      Zero-downtime requirements, regulatory compliance, and data sovereignty
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Healthcare & Critical Infrastructure</h3>
                    <p className="text-muted-foreground">
                      Patient data protection, system availability, and disaster recovery
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Implement OpenText Solutions?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let S2's certified OpenText specialists design and implement the right data protection 
              strategy for your enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">
                  Contact Our OT Specialists
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.opentext.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit OpenText
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}