import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, CheckCircle, ArrowRight, Package, Settings, Play, Monitor } from "lucide-react";

const products = [
  {
    icon: Package,
    name: "Capture",
    description: "Application assessment and inventory solution",
    features: [
      "Automated application discovery",
      "Compatibility analysis",
      "Dependency mapping",
      "Readiness assessment"
    ]
  },
  {
    icon: Settings,
    name: "Studio",
    description: "Application repackaging and modernization platform",
    features: [
      "MSI package creation",
      "Application virtualization",
      "Conflict resolution",
      "Automated testing"
    ]
  },
  {
    icon: Play,
    name: "Runtime",
    description: "Secure application runtime environments",
    features: [
      "Application isolation",
      "Secure execution",
      "Runtime protection",
      "Legacy app support"
    ]
  },
  {
    icon: Monitor,
    name: "DMT",
    description: "Desktop Modernization Toolkit",
    features: [
      "Desktop transformation",
      "VDI preparation",
      "User environment migration",
      "Profile management"
    ]
  }
];

export default function AppCUREPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-purple-50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center font-bold text-xl mx-auto mb-6 border border-purple-200">
                AC
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                appCURE Application Modernization
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete application transformation platform for legacy application modernization, 
                VDI migration, and secure runtime environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact">
                    <Download className="mr-2 h-4 w-4" />
                    Download Datasheet
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Suite */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">Product Suite</Badge>
                <h2 className="text-3xl font-bold mb-4">appCURE Platform Components</h2>
                <p className="text-lg text-muted-foreground">
                  End-to-end application modernization and transformation capabilities
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {products.map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-lg bg-purple-100">
                            <IconComponent className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{product.name}</CardTitle>
                            <p className="text-muted-foreground">{product.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Modernization Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Application Modernization Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Discover</h3>
                  <p className="text-sm text-muted-foreground">
                    Automated application inventory and assessment
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Analyze</h3>
                  <p className="text-sm text-muted-foreground">
                    Compatibility analysis and modernization planning
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Transform</h3>
                  <p className="text-sm text-muted-foreground">
                    Application repackaging and modernization
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Deploy</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure deployment and runtime management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Key Use Cases</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">VDI Migration Projects</h3>
                    <p className="text-muted-foreground">
                      Prepare legacy applications for virtual desktop infrastructure with automated compatibility assessment and repackaging
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Windows Migration</h3>
                    <p className="text-muted-foreground">
                      Modernize applications for new Windows versions with automated testing and conflict resolution
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Application Security</h3>
                    <p className="text-muted-foreground">
                      Secure legacy applications with runtime isolation and protection mechanisms
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Desktop Standardization</h3>
                    <p className="text-muted-foreground">
                      Standardize desktop environments and streamline application deployment across the enterprise
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Benefits & OS Support */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Technical Benefits & Platform Support</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Automation & Efficiency</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">90% reduction in manual effort</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Automated testing and validation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Accelerated migration timelines</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Risk Mitigation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Comprehensive compatibility testing</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Rollback capabilities</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Predictable outcomes</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Supported Operating Systems & Environments */}
              <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-center text-purple-800">Supported Operating Systems & Environments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <h4 className="font-semibold mb-2 text-purple-700">Windows Platforms</h4>
                      <div className="space-y-1 text-sm">
                        <div>Windows 11 / Windows 10</div>
                        <div>Windows Server 2022/2019/2016</div>
                        <div>Legacy Windows versions</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-purple-700">Virtualization</h4>
                      <div className="space-y-1 text-sm">
                        <div>VMware vSphere</div>
                        <div>Microsoft Hyper-V</div>
                        <div>Citrix XenServer</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-purple-700">Cloud Platforms</h4>
                      <div className="space-y-1 text-sm">
                        <div>Microsoft Azure</div>
                        <div>Amazon AWS</div>
                        <div>Google Cloud Platform</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Modernize Your Applications with appCURE</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let S2's application modernization experts help transform your legacy applications 
              for the modern enterprise environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">
                  Schedule appCURE Assessment
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.appcure.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn More About appCURE
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