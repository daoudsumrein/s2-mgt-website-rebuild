import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Application Modernization & Digital Transformation MENA | S2 Solutions</title>
        <meta name="description" content="Legacy application modernization and digital transformation services for MENA enterprises. Expert IT transformation, cloud migration, and application orchestration across UAE, Saudi Arabia, and Middle East." />
        <meta name="keywords" content="application modernization MENA, digital transformation UAE, IT transformation Middle East, legacy modernization Saudi Arabia, cloud migration, app modernization, digital transformation services" />
        <link rel="canonical" href="https://s2mgt.com/solutions/app-modernization" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Application Modernization & Digital Transformation MENA | S2 Solutions" />
        <meta property="og:description" content="Legacy application modernization and digital transformation services for MENA enterprises. Expert IT transformation, cloud migration, and application orchestration across UAE, Saudi Arabia, and Middle East." />
        <meta property="og:url" content="https://s2mgt.com/solutions/app-modernization" />
        <meta property="og:image" content="https://s2mgt.com/assets/s2-logo.png" />
        <meta property="og:site_name" content="S2 Management Solutions" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Application Modernization & Digital Transformation MENA | S2 Solutions" />
        <meta name="twitter:description" content="Legacy application modernization and digital transformation services for MENA enterprises. Expert IT transformation, cloud migration, and application orchestration across UAE, Saudi Arabia, and Middle East." />
        <meta name="twitter:image" content="https://s2mgt.com/assets/s2-logo.png" />
      </Helmet>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Application Modernization & Transformation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Legacy to Modern — Without Rewriting, Rebuilding, or Risk
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Book Application Assessment</Button>
                <Button variant="outline" size="lg">Download Datasheet</Button>
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