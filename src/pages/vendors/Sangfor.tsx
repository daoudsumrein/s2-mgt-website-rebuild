import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, CheckCircle, ArrowRight, Server, Shield } from "lucide-react";

export default function SangforPage() {
  return (
    <>
      <SEOHead 
        title="Sangfor HCI & Security Solutions | S2 Management"
        description="Hyper-converged infrastructure and next-generation firewall solutions by Sangfor. Cost-effective infrastructure and security for enterprise environments."
        keywords="Sangfor partner, hyper-converged infrastructure, NGAF firewall, HCI solutions, network security, infrastructure consolidation"
        canonicalUrl="https://s2mgt.com/vendors/sangfor"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-orange-50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center font-bold text-xl mx-auto mb-6 border border-orange-200">
                SF
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Sangfor Infrastructure Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Hyper-converged infrastructure and next-generation security solutions 
                for modern enterprise environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Request Information
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Overview
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Solutions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">Core Solutions</Badge>
                <h2 className="text-3xl font-bold mb-4">Primary Sangfor Offerings</h2>
                <p className="text-lg text-muted-foreground">
                  Select infrastructure and security solutions complementing our core portfolio
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-orange-100">
                        <Server className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">HCI - Hyper-Converged Infrastructure</CardTitle>
                        <p className="text-muted-foreground">Integrated compute, storage, and networking</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm">Simplified infrastructure management</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm">Scalable performance and capacity</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm">Integrated backup and DR capabilities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm">Cost-effective infrastructure consolidation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-orange-100">
                        <Shield className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">NGAF - Next-Gen Firewall</CardTitle>
                        <p className="text-muted-foreground">Advanced network security and protection</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm">Deep packet inspection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm">Application-level filtering</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm">Intrusion prevention system</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm">Centralized security management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Note */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Partner Integration</Badge>
              <h2 className="text-2xl font-bold mb-4">Complementary Infrastructure Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sangfor solutions are selectively integrated into S2's portfolio where they complement 
                our core OpenText, TDS, and AppCURE offerings for specific infrastructure requirements.
              </p>
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Integration Focus Areas:</h3>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Infrastructure consolidation projects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Security perimeter enhancement</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Cost-effective infrastructure modernization</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Suitable Use Cases</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Small to Medium Infrastructure</h3>
                    <p className="text-muted-foreground">
                      HCI solutions for organizations looking to simplify and consolidate their infrastructure footprint
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Budget-Conscious Deployments</h3>
                    <p className="text-muted-foreground">
                      Cost-effective infrastructure and security solutions for organizations with specific budget constraints
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Specific Security Requirements</h3>
                    <p className="text-muted-foreground">
                      NGAF deployment where specific network security requirements align with Sangfor capabilities
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Explore Sangfor Solutions</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact S2 to discuss how Sangfor solutions might fit into your infrastructure 
              modernization strategy alongside our core platform offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Discuss Infrastructure Requirements
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="mr-2 h-4 w-4" />
                Learn More About Sangfor
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