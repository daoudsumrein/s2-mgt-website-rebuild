import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Package, Settings, Layers, Zap, Users, Target } from "lucide-react";

const deliverables = [
  {
    icon: Package,
    title: "Legacy Application Capture",
    features: [
      "Use AppCURE Capture to snapshot entire legacy app environments",
      "Identify file structures, registry changes, dependencies, and config",
      "Eliminate need for source code or installer access"
    ]
  },
  {
    icon: Settings,
    title: "App Repackaging & Runtime Transformation",
    features: [
      "Convert apps to modern formats (.MSIX, container, App-V)",
      "Leverage AppCURE Studio for GUI packaging & customization",
      "Optional layering for security and config enforcement",
      "Deliver on modern Windows builds, W365, or AVD"
    ]
  },
  {
    icon: Zap,
    title: "Rapid Redeployment & VDI Readiness",
    features: [
      "Publish apps to virtual desktop environments",
      "Use AppCURE Runtime for secure execution on target platforms",
      "Policy-based delivery and rollback options"
    ]
  },
  {
    icon: Layers,
    title: "Migration-Ready Integration",
    features: [
      "Integrates with TDS TransitionManager for app-mapping",
      "Carbonite Migrate for server migrations",
      "OpenText Availability for HA/DR",
      "Allows simultaneous app and infra modernization"
    ]
  }
];

const technologies = [
  {
    name: "AppCURE Capture",
    purpose: "Legacy environment & file dependency grab"
  },
  {
    name: "AppCURE Studio",
    purpose: "App packaging and format transformation"
  },
  {
    name: "AppCURE Runtime",
    purpose: "Secure app launch and policy enforcement"
  },
  {
    name: "AppCURE DMT",
    purpose: "Full desktop transformation framework"
  },
  {
    name: "OpenText Migrate",
    purpose: "Server relocation, OS upgrade compatibility"
  },
  {
    name: "TDS TransitionManager",
    purpose: "App mapping and sequencing"
  }
];

const outcomes = [
  "Move legacy apps in hours — not months",
  "Eliminate rewrite costs and delays",
  "Improve security and compatibility",
  "Align apps with cloud, VDI, and modern OS",
  "Reduce IT overhead, increase flexibility"
];

const idealFor = [
  "Enterprises migrating to Windows 11 or Azure Virtual Desktop",
  "Public sector clients with proprietary legacy tools",
  "Healthcare, finance, or manufacturing apps that can't be rewritten",
  "MSPs offering App Modernization-as-a-Service",
  "DR/migration projects involving OS uplift or infrastructure refresh"
];

export default function AppModernization() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Application Modernization & Digital Transformation MENA | S2 Solutions"
        description="Legacy application modernization and digital transformation services for MENA enterprises. Expert IT transformation, cloud migration, and application orchestration across UAE, Saudi Arabia, and Middle East."
        keywords="application modernization MENA, digital transformation UAE, IT transformation Middle East, legacy modernization Saudi Arabia, cloud migration, app modernization, digital transformation services"
        canonicalUrl="https://s2mgt.com/solutions/app-modernization"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16 relative overflow-hidden h-[75vh] flex items-center justify-center">
          {/* Animated background particles */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `
                radial-gradient(2px 2px at 20px 30px, rgba(74, 144, 226, 0.3), transparent),
                radial-gradient(2px 2px at 40px 70px, rgba(74, 144, 226, 0.2), transparent),
                radial-gradient(1px 1px at 90px 40px, rgba(74, 144, 226, 0.4), transparent),
                radial-gradient(1px 1px at 130px 80px, rgba(74, 144, 226, 0.3), transparent)
              `,
              backgroundRepeat: 'repeat',
              backgroundSize: '150px 150px',
              animation: 'float 20s infinite linear'
            }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Hero Container */}
              <div className="relative bg-slate-900/90 border-2 border-blue-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Content */}
                  <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                    <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 relative overflow-hidden group/badge text-xs sm:text-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                      <span className="relative">Solutions</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block" style={{
                        backgroundSize: '300% 300%',
                        animation: 'gradientShift 4s ease-in-out infinite'
                      }}>
                        Application Modernization
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Legacy to Modern — Without Rewriting, Rebuilding, or Risk
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                      <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                        <span className="relative">Book Application Assessment</span>
                      </Button>
                      <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto">
                        Download Datasheet
                      </Button>
                    </div>
                  </div>
                  
                  {/* Right Content - Can be added later if needed */}
                  <div className="hidden lg:block">
                    {/* Placeholder for future content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-center mb-8">
                  Legacy applications are everywhere — and they're holding businesses back.
                </p>
                <p className="text-center mb-8">
                  S2 delivers fast, secure, and low-disruption application modernization using AppCURE and 
                  complementary tools from OpenText, enabling organizations to move apps to modern platforms 
                  without rewriting code or re-engineering user access.
                </p>
                <p className="text-center">
                  Whether it's part of a migration, VDI rollout, or compliance project — we help you 
                  <strong> capture, repackage, and redeploy apps faster than traditional refactoring ever could</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {deliverables.map((deliverable, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <deliverable.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{deliverable.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {deliverable.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Tool</th>
                      <th className="text-left py-3 px-4 font-semibold">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technologies.map((tech, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4 font-medium">{tech.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{tech.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal For & Outcomes Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Ideal For
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {idealFor.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Outcomes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Modernize Your Legacy Applications?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Still stuck with legacy software on aging systems?<br />
                Let S2 modernize your apps — fast, secure, and disruption-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Book Application Assessment</Button>
                <Button variant="outline" size="lg">Contact Modernization Team</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}