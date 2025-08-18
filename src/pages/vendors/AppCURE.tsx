import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, CheckCircle, ArrowRight, Package, Settings, Play, Monitor, Gauge, RefreshCw, AlertTriangle, Zap } from "lucide-react";

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
    <>
      <SEOHead 
        title="AppCURE Application Modernization Solutions | S2 Management"
        description="Transform legacy applications with AppCURE's complete modernization platform. VDI migration, application repackaging, and secure runtime environments."
        keywords="AppCURE partner, application modernization, VDI migration, legacy applications, app repackaging, desktop modernization"
        canonicalUrl="https://s2mgt.com/vendors/appcure"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          {/* Grid Pattern Background */}
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23334155' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            opacity: 0.4
          }}></div>
          
          {/* Floating 3D Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Red/Orange Cubes */}
            <div className="absolute top-20 right-20 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 transform rotate-45 animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 transform rotate-12 animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-60 right-16 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 transform rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-40 right-24 w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 transform rotate-12 animate-bounce" style={{ animationDelay: '3s' }}></div>
            
            {/* Purple/Pink Cubes */}
            <div className="absolute top-32 right-40 w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-500 transform rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-72 right-12 w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-500 transform rotate-12 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-60 right-36 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 transform rotate-45 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
            
            {/* Colorful Circle Element */}
            <div className="absolute top-1/2 right-32 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-transparent to-red-500" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
            </div>
            
            {/* Additional scattered elements */}
            <div className="absolute top-16 right-60 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-500 transform rotate-45 animate-pulse" style={{ animationDelay: '4s' }}></div>
            <div className="absolute bottom-20 right-56 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 transform rotate-12 animate-bounce" style={{ animationDelay: '5s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 flex items-center min-h-screen">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Content Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">appCURE</span>
                  <span className="text-gray-900"> + Industry Leaders Accelerate Migration to Modern Windows</span>
                </h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Struggling to migrate from older versions of Windows and your applications are holding you back? Whether it's Client, Server, cloud or even hybrid <span className="font-semibold text-purple-600">appCURE</span> is partnering with the leading names in the industry to support your digital transformation projects at speed.
                </p>
                <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
                  Discover
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Empty space for 3D elements on the right */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* CURE Methodology Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">Core Methodology</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  The <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">CURE</span> Methodology
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our proven four-step approach transforms applications with precision, speed, and reliability
                </p>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600"></div>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      C
                    </div>
                    <CardTitle className="text-xl text-primary">Capture</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      Find the installed parts of the application and capture them, ready to be moved to the target Operating System.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-600/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      U
                    </div>
                    <CardTitle className="text-xl text-purple-600">Update</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      Look at the differences between the "today" and where it is being delivered to.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-pink-600/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 to-orange-500"></div>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-orange-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      R
                    </div>
                    <CardTitle className="text-xl text-pink-600">Remediate</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      Find errors and apply fixes to ensure seamless application functionality.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      E
                    </div>
                    <CardTitle className="text-xl text-orange-600">Execute</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      Deliver applications to your chosen vendor/platform with confidence.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='black-grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23374151' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23black-grid)'/%3E%3C/svg%3E")`,
            opacity: 0.3
          }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
              <blockquote className="text-2xl lg:text-3xl font-light italic leading-relaxed mb-8">
                "Transforming applications with precision, speed, and reliability."
              </blockquote>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Production Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold">
                    Reduce Time to <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Production</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Moving Applications at speed, Understanding the issues, offering solutions and automating creation of the package, the format and the volume.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      "Accelerated migration timelines",
                      "Automated package creation", 
                      "Comprehensive issue resolution",
                      "Scalable volume processing"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-600 rounded-full flex-shrink-0"></div>
                        <span className="text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center lg:text-right">
                  <div className="relative inline-block">
                    <img 
                      src="https://appcure.io/wp-content/uploads/2025/06/Homepage.png" 
                      alt="appCURE Application Transformation Platform" 
                      className="max-w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
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

        {/* Modern Migration Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-8 h-8 bg-red-500 rounded transform rotate-45 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-pink-400 rounded transform rotate-12 animate-bounce"></div>
            <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-red-400 rounded transform -rotate-12"></div>
            <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-red-300 rounded transform rotate-45"></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='modern-grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23modern-grid)'/%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
                <div className="text-center">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                    <span className="text-red-400">appCURE</span> + Industry Leaders Accelerate
                    <br />
                    <span className="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                      Migration to Modern Windows
                    </span>
                  </h2>
                  
                  <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Struggling to migrate from older versions of Windows and your applications are holding you back? Whether it's Client, Server, cloud or even hybrid <span className="text-red-400 font-semibold">appCURE</span> is partnering with the leading names in the industry to support your digital transformation projects at speed.
                  </p>

                  <Button 
                    size="lg" 
                    className="bg-slate-800 hover:bg-slate-700 text-white border-0 px-8 py-3 rounded-full font-semibold"
                    asChild
                  >
                    <a href="/contact">
                      Discover
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Partners Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">Industry Leadership</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Accelerating Migration with 
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-pink-500 bg-clip-text text-transparent"> Proven Results</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Join leading organizations who have successfully modernized their application estates with appCURE's innovative platform
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-red-500/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-pink-500"></div>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Gauge className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl text-red-600">10x Faster</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Application migration speed compared to traditional manual processes
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-red-500/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <RefreshCw className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl text-red-600">95% Success Rate</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Automated remediation and successful application transformation
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-red-500/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl text-red-600">Zero Downtime</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Seamless migration with minimal business disruption
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 via-red-500 to-pink-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Applications?</h2>
              <p className="text-lg mb-8 opacity-90">
                Partner with S2 Management and appCURE to accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600" asChild>
                  <a href="/contact">
                    Schedule Consultation
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