import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, GitBranch, ShieldCheck, PlayCircle, CheckCircle, Target, Database, Network } from "lucide-react";

const deliverables = [
  {
    icon: Database,
    title: "Infrastructure & Application Discovery",
    features: [
      "Ingest data from any CMDB, ITSM, discovery tool, or spreadsheet",
      "Normalize and clean imported data sets",
      "Centralize into TDS TransitionManager for single-pane-of-glass control"
    ]
  },
  {
    icon: GitBranch,
    title: "Live Dependency Mapping",
    features: [
      "Application-to-infrastructure relationships visualized",
      "Communication paths and failure impact analysis",
      "Logical and physical dependency chains",
      "Includes business context (criticality, owner, SLA)"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Risk & Planning Intelligence",
    features: [
      "Assess what systems are in scope for DR, transformation, or cloud",
      "Identify conflicts, overlaps, and performance dependencies",
      "Support regulatory, DR, and migration planning"
    ]
  },
  {
    icon: PlayCircle,
    title: "Execution-Ready Output",
    features: [
      "Visual mapping integrated into TransitionManager workflows",
      "Dynamically sequence tasks based on dependency logic",
      "Enable cross-functional coordination: IT, business, security"
    ]
  }
];

const platforms = [
  {
    name: "TDS TransitionManager",
    role: "Core engine for ingest, mapping, orchestration"
  },
  {
    name: "Any CMDB/ITSM/Source",
    role: "Accepted input (ServiceNow, BMC, Excel, Device42, Dynatrace etc.)"
  }
];

const outcomes = [
  "One trusted map of everything that matters",
  "Zero blind spots in planning",
  "Reduction in planning errors and missed dependencies",
  "Accelerated, confident execution",
  "Improved compliance posture"
];

const idealFor = [
  "Enterprises preparing for DR, cloud, or app modernization",
  "Environments with fragmented or stale infrastructure data",
  "Clients requiring full visibility across business and IT layers",
  "MSPs needing rapid onboarding visibility across customer stacks"
];

export default function ITDiscovery() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="IT Discovery & Infrastructure Mapping MENA - IT Orchestration | S2 Solutions"
        description="Comprehensive IT discovery and infrastructure mapping services for MENA enterprises. Expert IT orchestration, dependency mapping, and infrastructure analysis across UAE, Saudi Arabia, and Middle East."
        keywords="IT discovery MENA, infrastructure mapping UAE, IT orchestration Middle East, dependency mapping Saudi Arabia, IT assessment, infrastructure analysis, IT transformation planning"
        canonicalUrl="https://s2mgt.com/solutions/it-discovery"
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
                        IT Discovery & Dependency Mapping
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Infrastructure Awareness, App Dependency, Risk Elimination
                    </p>
                    
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Book Discovery Session</span>
                    </Button>
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
              <h2 className="text-3xl font-bold mb-8 text-center">Overview</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">
                    <strong>Before you migrate, modernize, or protect — you must understand.</strong>
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    At S2, we offer comprehensive IT discovery and dependency mapping through TDS TransitionManager, helping you build a single source of truth from multiple data inputs.
                  </p>
                  <p className="text-lg leading-relaxed">
                    By consolidating data from CMDBs, ITSMs, DCIMs, and third-party scans, we centralize everything into one intelligent platform — giving you <strong>real-time visibility</strong> into your infrastructure and application landscape.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {deliverables.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
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

        {/* Platform Used Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Platform Used</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">Platform</th>
                          <th className="text-left py-3 px-4 font-semibold">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {platforms.map((platform, index) => (
                          <tr key={index} className="border-b last:border-b-0">
                            <td className="py-3 px-4 font-medium">{platform.name}</td>
                            <td className="py-3 px-4 text-muted-foreground">{platform.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ideal For & Outcomes Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-6 w-6 text-primary" />
                      <span>Ideal For</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {idealFor.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      <span>Outcomes</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{outcome}</span>
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
              <Card>
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-4">Siloed Data is Dangerous</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Let S2 unify your data sources into one live, actionable map. Book your discovery mapping session today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">Book Discovery Session</Button>
                    <Button variant="outline" size="lg">Learn More About Mapping</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}