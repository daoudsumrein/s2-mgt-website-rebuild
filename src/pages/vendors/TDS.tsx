import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, CheckCircle, ArrowRight, Workflow, Map, Eye, Search } from "lucide-react";

export default function TDSPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-700 via-cyan-600 to-teal-700 text-white flex items-center py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Hero Content */}
                <div className="space-y-6 motion-preset-slide-right motion-delay-200">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight motion-preset-fade motion-delay-300">
                    Enterprise Data Migration Made Simple
                  </h1>
                  <div className="text-xl md:text-2xl font-medium opacity-90 motion-preset-fade motion-delay-500">
                    Transitional Data Solutions
                  </div>
                  <p className="text-lg md:text-xl opacity-80 leading-relaxed motion-preset-fade motion-delay-700">
                    Transform your data infrastructure with our industry-leading platform for seamless cloud migration, data center modernization, and enterprise transformations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 motion-preset-fade motion-delay-1000">
                    <Button 
                      size="lg" 
                      className="bg-orange-500 hover:bg-orange-600 text-white border-none px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30"
                      asChild
                    >
                      <a href="#video" className="flex items-center gap-2">
                        Watch Demo
                        <ArrowRight className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
                      asChild
                    >
                      <a href="/contact">
                        Get Started
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Video Container */}
                <div className="motion-preset-slide-left motion-delay-500" id="video">
                  <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 lg:p-8">
                    <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                      <iframe 
                        className="absolute inset-0 w-full h-full border-none rounded-2xl"
                        src="https://www.youtube.com/embed/FS_oklVl0Cw?si=3UrsVbzUD6qPUrIt" 
                        title="TDS Platform Demo" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Platform */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">Orchestration Platform</Badge>
                <h2 className="text-3xl font-bold mb-4">TransitionManager Core Capabilities</h2>
                <p className="text-lg text-muted-foreground">
                  The industry's most comprehensive IT orchestration and visualization platform
                </p>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <Search className="h-12 w-12 text-green-600 mb-4" />
                    <CardTitle>IT Discovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive IT infrastructure discovery and asset identification
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Automated asset discovery</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Configuration tracking</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Inventory management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <Eye className="h-12 w-12 text-green-600 mb-4" />
                    <CardTitle>Dependency Mapping</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Complete IT infrastructure visualization with real-time dependency tracking
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Real-time discovery</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Visual dependency maps</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Impact analysis</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <Map className="h-12 w-12 text-green-600 mb-4" />
                    <CardTitle>Migration Wave Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Intelligent migration planning with dependency analysis and risk assessment
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Automated wave generation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Risk-based sequencing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Timeline optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <Workflow className="h-12 w-12 text-green-600 mb-4" />
                    <CardTitle>DR Orchestration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Automated disaster recovery workflows with intelligent sequencing, validation, and reporting
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Automated failover sequences</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Intelligent dependency handling</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Validation and testing automation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">Comprehensive reporting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Advanced Technical Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>IT Visualization & Dashboards</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Real-time infrastructure topology views</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Executive and technical dashboards</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Custom reporting and analytics</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Integration with monitoring tools</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise Integration</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">CMDB and ITSM platform integration</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">API-driven automation capabilities</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Multi-cloud environment support</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Role-based access control</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Enterprise Use Cases</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Large-Scale Migrations</h3>
                    <p className="text-muted-foreground">
                      Data center consolidations, cloud migrations, and infrastructure modernization projects with hundreds or thousands of applications
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Disaster Recovery Automation</h3>
                    <p className="text-muted-foreground">
                      Automated DR testing, failover orchestration, and business continuity management for mission-critical environments
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">IT Asset Management</h3>
                    <p className="text-muted-foreground">
                      Comprehensive infrastructure discovery, dependency mapping, and ongoing asset tracking for complex enterprise environments
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your IT Operations with TDS</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let S2's TDS specialists show you how TransitionManager can revolutionize your 
              infrastructure management and migration capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">
                  Schedule TDS Demonstration
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.tds.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit TDS Website
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