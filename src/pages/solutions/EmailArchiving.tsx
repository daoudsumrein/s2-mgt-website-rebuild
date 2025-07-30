import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Shield, Database, Search, HardDrive, Users, CheckCircle, Target, FileText, Building, TrendingUp, BookOpen } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Assistance with regulatory compliance helps companies to meet a growing number of compliance requirements and obligations under the GDPR"
  },
  {
    icon: Database,
    title: "Data Loss Protection",
    description: "Protection against data loss, safeguard the integrity of the archive. Even PST files can be centrally archived and protected"
  },
  {
    icon: HardDrive,
    title: "Storage Optimization",
    description: "Reduce storage requirements, rule-based deletion of emails from the server after archiving, de-duplication, and compression help you to save storage space"
  },
  {
    icon: FileText,
    title: "Simplified Backup & Restore",
    description: "Simplified backup & restore, reduced data volumes on the email server and one-click restore options for users mean shorter backup and restore times"
  },
  {
    icon: TrendingUp,
    title: "Increased Productivity",
    description: "Increase productivity, users benefit from the fast full-text search function, intuitive operation and the elimination of mailbox quotas"
  },
  {
    icon: Mail,
    title: "Email Service Independence",
    description: "Independence from the email service is an additional security measure for your email data"
  }
];

const deliverables = [
  {
    icon: Database,
    title: "Centralized Storage",
    features: [
      "Centralized storage of business-critical information",
      "Automated archiving of all email communications",
      "Seamless integration with Microsoft Outlook",
      "Long-term data availability and protection regardless of volume"
    ]
  },
  {
    icon: Shield,
    title: "Data Preservation",
    features: [
      "Preservation of classified company data",
      "Tamper-proof archive integrity",
      "Secure storage with advanced encryption",
      "Protection against data corruption and loss"
    ]
  },
  {
    icon: FileText,
    title: "Information Management",
    features: [
      "Information management enhancement",
      "Intelligent categorization and indexing",
      "Advanced search and retrieval capabilities",
      "Efficient data organization and access"
    ]
  },
  {
    icon: Building,
    title: "Corporate Strategy Support",
    features: [
      "Support corporate strategy execution",
      "Strategic data insights and analytics",
      "Business intelligence from archived communications",
      "Enhanced decision-making capabilities"
    ]
  },
  {
    icon: Users,
    title: "Communication Improvement",
    features: [
      "Business communication improvement",
      "Enhanced collaboration and transparency",
      "Better communication audit trails",
      "Improved organizational knowledge sharing"
    ]
  },
  {
    icon: CheckCircle,
    title: "Compliance & Risk Management",
    features: [
      "Compliance and risk mitigation",
      "Regulatory adherence and reporting",
      "Legal discovery and e-discovery support",
      "Risk assessment and management tools"
    ]
  },
  {
    icon: TrendingUp,
    title: "Data Utilization",
    features: [
      "Efficient data utilization",
      "Optimized storage and performance",
      "Cost-effective data management",
      "Improved operational efficiency"
    ]
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    features: [
      "Educational resources and training",
      "User adoption and best practices",
      "Ongoing support and guidance",
      "Knowledge transfer and skill development"
    ]
  }
];

const keyBenefits = [
  "Automatic storage of all emails in centralized archive",
  "Full user access to archived messages",
  "Seamless Microsoft Outlook integration",
  "Fast full-text search functionality",
  "Elimination of mailbox quotas",
  "Enhanced data security and protection"
];

const idealFor = [
  "Organizations requiring GDPR compliance",
  "Companies with growing email volumes",
  "Businesses seeking storage optimization",
  "Enterprises needing data loss protection",
  "Organizations requiring audit trails",
  "Companies with regulatory obligations"
];

export default function EmailArchiving() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Email Archiving Solutions MENA - Compliance & Data Retention | S2 Solutions"
        description="Professional email archiving solutions for MENA enterprises. Complete email archiving with compliance features, data retention policies, and secure storage. Serving UAE, Saudi Arabia, and Middle East."
        keywords="email archiving MENA, email compliance UAE, data retention Middle East, email storage Saudi Arabia, archiving solutions, compliance archiving"
        canonicalUrl="https://s2mgt.com/solutions/email-archiving"
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-white/20 text-white">
                Data Protection Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Email Archiving
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Enjoy the full advantages of modern email archiving securely and with ease, featuring compliance and data retention capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">Request Archiving Assessment</Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-white text-slate-900 border-white hover:bg-white/90">Download Guide</Button>
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
                    The solution enables organizations to <strong>enjoy the full advantages of modern email archiving securely and with ease</strong>. By automatically storing copies of all emails in a centralized archive, it ensures long-term data availability and protection, regardless of volume.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Users retain <strong>full access to their archived messages</strong> and can navigate them efficiently, thanks to features like seamless integration with Microsoft Outlook.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <feature.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {deliverables.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-8 w-8 text-teal-500" />
                        <CardTitle className="text-lg">{item.title}</CardTitle>
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

        {/* Benefits & Ideal For Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      <span>Key Benefits</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {keyBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

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
                  <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Email Management?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Ensure compliance, protect data, and enhance productivity with our comprehensive email archiving solution.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">Schedule Compliance Assessment</Button>
                    <Button variant="outline" size="lg">Download Solution Guide</Button>
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