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
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16 relative overflow-hidden h-[75vh] flex items-center justify-center">
          {/* Animated background particles */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  radial-gradient(2px 2px at 20px 30px, rgba(74, 144, 226, 0.3), transparent),
                  radial-gradient(2px 2px at 40px 70px, rgba(74, 144, 226, 0.2), transparent),
                  radial-gradient(1px 1px at 90px 40px, rgba(74, 144, 226, 0.4), transparent),
                  radial-gradient(1px 1px at 130px 80px, rgba(74, 144, 226, 0.3), transparent)
                `,
                backgroundRepeat: 'repeat',
                backgroundSize: '150px 150px',
                animation: 'float 20s infinite linear'
              }}
            />
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
                    <Badge 
                      variant="outline" 
                      className="border-blue-500/50 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 relative overflow-hidden group/badge text-xs sm:text-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                      <span className="relative">Compliance Solutions</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        Email Archiving
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Comprehensive email archiving solutions for compliance, legal discovery, and business continuity with automated data retention and seamless access.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Email%20Archiving%20Consultation', '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/video hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                      {/* Video Container */}
                      <div className="absolute inset-0">
                        <iframe 
                          src="https://player.vimeo.com/video/724980545?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0" 
                          className="w-full h-full border-none rounded-xl"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="Email Archiving Solutions"
                        />
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                    </div>
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
                        <feature.icon className="h-8 w-8 text-blue-500" />
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
                            <CheckCircle className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
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

        {/* Ideal For & Key Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Ideal For */}
                <div>
                  <Card className="border-blue-200 bg-blue-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-blue-700">
                        <Target className="h-6 w-6" />
                        <span>Ideal For</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {idealFor.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Benefits */}
                <div>
                  <Card className="border-teal-200 bg-teal-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-teal-700">
                        <CheckCircle className="h-6 w-6" />
                        <span>Key Benefits</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {keyBenefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
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