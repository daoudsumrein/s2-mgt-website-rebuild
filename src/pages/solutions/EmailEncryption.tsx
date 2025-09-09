import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Lock, Mail, Users, CheckCircle, BarChart3, Globe, Server, Settings, Zap, Eye, ArrowRight, Building, FileText, UserCheck, ArrowLeftRight, Monitor, Target } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Secure, bi-directional email",
    description: "Secure communication in both directions with encrypted messaging"
  },
  {
    icon: Mail,
    title: "Enables users to send emails easily and securely",
    description: "Simple and secure email sending without complex procedures"
  },
  {
    icon: Users,
    title: "Customized drop-down list of company email addresses, names, or departments",
    description: "Organized contact management for streamlined communication"
  },
  {
    icon: Shield,
    title: "User authentication for inbound email messages",
    description: "Verify sender identity for enhanced security"
  },
  {
    icon: Monitor,
    title: "Accessible on all Internet-enabled devices",
    description: "Cross-platform compatibility for universal access"
  }
];

const deliverables = [
  "Convenient, secure email at no extra cost to your recipients",
  "Direct-to-inbox delivery for your staff",
  "Simplifies adoption for users no user training or software to install",
  "Improved workflow for your business with secure bidirectional support",
  "Added confidence and competitive advantage"
];

export default function EmailEncryption() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Email Encryption Solutions | Secure Communications MENA"
        description="Enterprise email encryption solutions for MENA region. End-to-end encryption, digital signatures, and secure document exchange for business communications."
        keywords="email encryption MENA, secure email UAE, encrypted communications Middle East, email security Saudi Arabia"
        canonicalUrl="https://s2mgt.com/solutions/email-encryption"
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-4 relative overflow-hidden md:py-[55px]">
          <div className="container mx-auto px-2 md:px-4">
            <div className="mx-auto">
              {/* Floating Background Container with Gradient Border */}
              <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-primary via-blue-500 to-secondary">
                <div className="bg-slate-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-6">
                  <div className="max-w-6xl mx-auto pl-8">
                    <div className="grid lg:grid-cols-2 gap-4 items-center justify-items-start">
                    {/* Left Content */}
                    <div>
                      <Badge variant="outline" className="mb-3 border-primary/40 text-primary bg-primary/10">
                        Cybersecurity Solutions
                      </Badge>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Email Encryption
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Secure email communications with encryption to eliminate impersonation risks and protect sensitive information.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Email%20Encryption%20Consultation', '_blank')}>
                          <span className="relative z-10">Schedule Consultation</span>
                          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Right Image Placeholder */}
                    <div className="relative flex justify-center lg:justify-start lg:pl-8">
                      <div className="w-96 h-72 bg-gradient-to-br from-primary/20 via-blue-500/20 to-secondary/20 rounded-lg flex items-center justify-center border border-white/10 px-[11px] mx-[60px]">
                        
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Meta Tags as Comments */}
        {/* <title>OpenText Core Email Encryption - Secure Email Solutions</title> */}
        {/* <meta name="description" content="Advanced email encryption with DLP filters, multiple delivery options, and regulatory compliance for healthcare, finance, and government." /> */}
        
        <section id="product-content" className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 py-20">
          
          {/* Product Hero */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                OpenText™ Core Email Encryption
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Give your teams peace of mind with advanced email encryption that automatically scans and secures sensitive data. 
                Increase threat defense while empowering safe communication outside your network.
              </p>
            </motion.div>

            {/* Remote Work Challenge */}
            <motion.div 
              className="backdrop-blur-lg bg-white/20 border border-white/20 rounded-2xl p-8 mb-20 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Remote Work Security Challenges</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Cyber threats increasing across all industries</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Increased data leakage via email communications</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Lack of visibility is a top concern for IT leaders</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">84%</div>
                  <p className="text-gray-600">of IT leaders say remote work makes DLP more challenging</p>
                </div>
              </div>
            </motion.div>

            {/* Key Features Grid */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features & Differentiators</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Default DLP Filters Included",
                    description: "Advanced content filters included at no additional cost with customizable email DLP capabilities"
                  },
                  {
                    icon: Zap,
                    title: "Automatic & On-Demand Encryption", 
                    description: "Seamless encryption for both sender and recipient with intelligent policy-based triggers"
                  },
                  {
                    icon: Globe,
                    title: "Multiple Secure Delivery Options",
                    description: "Three delivery methods to fit any encryption need - from transparent to portal-based"
                  },
                  {
                    icon: Users,
                    title: "External Collaboration Portal",
                    description: "Empower secure communication with external partners via Secure Compose portal"
                  },
                  {
                    icon: BarChart3,
                    title: "Comprehensive Reporting",
                    description: "Graphical reporting for compliance, delivery methods, and security analytics"
                  },
                  {
                    icon: Eye,
                    title: "Transparent User Experience",
                    description: "Secured by Zix™ with seamless integration that doesn't disrupt workflow"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="backdrop-blur-lg bg-white/30 border border-white/30 rounded-xl p-6 shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Delivery Options */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Multiple Secure Delivery Options</h3>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Best Method of Delivery (BMOD) automatically selects the optimal encryption approach for each recipient
              </p>
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Bi-directional Secure Delivery",
                    description: "Message level encryption (S/MIME) between customers for seamless secure communication",
                    icon: ArrowLeftRight
                  },
                  {
                    title: "Policy-based TLS Delivery", 
                    description: "Automatic TLS encryption based on configurable policies and recipient verification",
                    icon: Shield
                  },
                  {
                    title: "Secure Message Portal",
                    description: "Web-based portal delivery accessible from any device, anywhere, anytime",
                    icon: Monitor
                  }
                ].map((option, index) => (
                  <motion.div
                    key={index}
                    className="backdrop-blur-lg bg-white/25 border border-white/25 rounded-xl p-8 shadow-lg text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <option.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{option.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="backdrop-blur-lg bg-white/20 border border-white/20 rounded-2xl p-8 mb-20 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by Industry Leaders</h3>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { label: "Customers", value: "100,000+", icon: Users },
                  { label: "Messages Daily", value: "Millions", icon: Mail },
                  { label: "U.S. Banks", value: "30%", icon: Building },
                  { label: "Healthcare Orgs", value: "40%", icon: UserCheck }
                ].map((indicator, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <indicator.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{indicator.value}</div>
                    <div className="text-gray-600 font-medium">{indicator.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 text-center text-gray-600">
                <p className="mb-2">Trusted by 24 state financial regulators • 100% of U.S. FFIEC regulators • U.S. SEC</p>
                <p>7 divisions of the U.S. Treasury • 1,200+ U.S. hospitals</p>
              </div>
            </motion.div>

            {/* Business Benefits */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Business Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  "Choose encryption methods that fit your specific business needs",
                  "Single management console for multiple email security products", 
                  "Deal with one trusted vendor for comprehensive cyber resilience",
                  "Potential cyber insurance benefits and premium cost reduction"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 backdrop-blur-lg bg-white/25 border border-white/25 rounded-lg p-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Case Studies */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Customer Success Stories</h3>
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    quote: "We are fully committed to securing every member's personal information.",
                    author: "Mike Burnsides",
                    title: "Executive Director",
                    company: "Kentucky Retirement Systems"
                  },
                  {
                    quote: "With the alarming rate of identity theft in the United States, email encryption was crucial for the protection of our members' information.",
                    author: "Rifat Ikram", 
                    title: "Vice President Electronic Delivery",
                    company: "Justice Federal Credit Union"
                  },
                  {
                    quote: "Email encryption and policies are a way for us to meet our HIPAA requirements and automatically prevent spillage for everyone in our organization.",
                    author: "Patrick Santiamo",
                    title: "Cyber Security Analyst", 
                    company: "Memorial Hermann Health System"
                  }
                ].map((study, index) => (
                  <motion.div
                    key={index}
                    className="backdrop-blur-lg bg-white/30 border border-white/30 rounded-xl p-8 shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <div className="mb-6">
                      <div className="text-4xl text-blue-600 mb-4">"</div>
                      <p className="text-gray-700 leading-relaxed italic">{study.quote}</p>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-semibold text-gray-900">{study.author}</p>
                      <p className="text-sm text-gray-600">{study.title}</p>
                      <p className="text-sm text-blue-600 font-medium">{study.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Regulatory Compliance */}
            <motion.div 
              className="mt-20 text-center backdrop-blur-lg bg-white/20 border border-white/20 rounded-2xl p-12 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Regulatory Compliance Made Simple</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Meet requirements for HIPAA, GDPR, GLBA, and other regulations while protecting personal information and reducing reputational risk.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <span className="bg-blue-100 px-4 py-2 rounded-full">Financial Services</span>
                <span className="bg-green-100 px-4 py-2 rounded-full">Healthcare & Medical</span>
                <span className="bg-purple-100 px-4 py-2 rounded-full">Government</span>
                <span className="bg-orange-100 px-4 py-2 rounded-full">HIPAA Compliant</span>
                <span className="bg-red-100 px-4 py-2 rounded-full">GDPR Ready</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Secure Your Email Communications?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contact us to learn how our email encryption solution can protect your sensitive communications and ensure secure messaging.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Download Datasheet
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}