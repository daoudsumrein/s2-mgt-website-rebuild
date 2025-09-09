import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, AlertTriangle, Link, FileX, Eye, Zap, BarChart3, Settings, Smartphone, Clock, Target, CheckCircle, RefreshCw, Search, Lock, Users, Mail, Server, HardDrive, TrendingUp, Monitor, Filter } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "High catch rate (99.9%)",
    description: "Exceptional threat detection accuracy with minimal false positives"
  },
  {
    icon: Users,
    title: "24/7/365 live threat analyst team",
    description: "Round-the-clock monitoring by expert threat analysts"
  },
  {
    icon: Shield,
    title: "Identity/impersonation protection",
    description: "Advanced protection against identity-based attacks and impersonation"
  },
  {
    icon: Lock,
    title: "Link protection",
    description: "Real-time URL analysis and malicious link protection"
  },
  {
    icon: AlertTriangle,
    title: "Attachment quarantine",
    description: "Secure quarantine and analysis of suspicious email attachments"
  },
  {
    icon: Mail,
    title: "Message retraction and internal mail filtering for Microsoft 365",
    description: "Advanced filtering and message control for Microsoft 365 environments"
  },
  {
    icon: Settings,
    title: "Fast and simple implementation",
    description: "Quick deployment with minimal configuration requirements"
  },
  {
    icon: Monitor,
    title: "Easy-to-use portal",
    description: "Intuitive management portal for simplified administration"
  },
  {
    icon: Eye,
    title: "Dashboards for intuitive management",
    description: "Comprehensive dashboards for monitoring and management"
  },
  {
    icon: Filter,
    title: "Customizable filtering",
    description: "Flexible filtering rules tailored to your organization's needs"
  },
  {
    icon: TrendingUp,
    title: "Comprehensive logging and reporting",
    description: "Detailed logs and reports for compliance and analysis"
  },
  {
    icon: Mail,
    title: "Mobile access",
    description: "Mobile-friendly access for on-the-go management"
  }
];

const deliverables = [
  "Provides enhanced security for business-critical communications",
  "Single Management Console Offers a unified console for managing multiple email security products",
  "Enhanced Security Status in Regulated Industries",
  "Consolidates cybersecurity solutions under one vendor",
  "Reduced False Positives/Negatives"
];

export default function EmailProtection() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Email Protection Solutions | Advanced Email Security MENA"
        description="Comprehensive email protection for MENA enterprises. Advanced threat protection, anti-phishing, and email security solutions for business communication."
        keywords="email protection MENA, email security UAE, anti-phishing Middle East, email threat protection Saudi Arabia"
        canonicalUrl="https://s2mgt.com/solutions/email-protection"
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
                        Email Threat Protection
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Advanced email protection with multi-layered filtering to block phishing, ransomware, and business email compromise.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Email%20Protection%20Consultation', '_blank')}>
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
        {/* <title>OpenText Core Advanced Email Threat Protection - Multi-Layer Security</title> */}
        {/* <meta name="description" content="99.9% catch rate against phishing, ransomware & BEC. Multi-layered filtering with 24/7 threat analysts. Link protection & attachment sandboxing." /> */}
        
        <section id="product-content" className="relative bg-gradient-to-br from-slate-50 via-red-50/20 to-orange-50/10 py-20">
          
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                OpenText™ Core Advanced Email Threat Protection
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Purpose-built multi-layered filtering that blocks malicious threats while permitting legitimate email. 
                Protect against phishing, ransomware, BEC, and impersonation attacks with AI-powered security.
              </p>
            </motion.div>

            {/* Challenge Section */}
            <motion.div 
              className="backdrop-blur-lg bg-red-500/10 border border-red-200/30 rounded-2xl p-8 mb-20 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                    <h3 className="text-2xl font-bold text-gray-900">The Email Security Challenge</h3>
                  </div>
                  <div className="space-y-3 text-gray-700 mb-6">
                    <p>Email remains the most vulnerable aspect of business communications, targeted by threat actors due to its ubiquitous usage and unique vulnerabilities.</p>
                    <p>Businesses face ever-increasing social engineering, ransomware attacks, Business Email Compromise (BEC), and targeted impersonation attacks.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Phishing Attacks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Ransomware</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>BEC Attacks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Impersonation</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-red-600 mb-2">1,122%</div>
                  <p className="text-gray-600 font-medium">increase in phishing attacks year over year</p>
                  <p className="text-sm text-gray-500 mt-2">Source: Webroot/BrightCloud Threat Intelligence Report</p>
                </div>
              </div>
            </motion.div>

            {/* Core Protection Features */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Multi-Layered Protection Features</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="backdrop-blur-lg bg-white/30 border border-white/30 rounded-xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Link className="w-7 h-7 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Link Protection</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">Rewrites links and performs time-of-click analysis on destination addresses. Users are redirected to safe sites, warned about suspicious ones, or blocked from malicious destinations.</p>
                </motion.div>

                <motion.div
                  className="backdrop-blur-lg bg-white/30 border border-white/30 rounded-xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                      <FileX className="w-7 h-7 text-orange-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Attachment Quarantine</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">Forensic analysis in secure, cloud-based sandbox environment. Instantly delivers disarmed versions by removing macros or converting files to PDF.</p>
                </motion.div>

                <motion.div
                  className="backdrop-blur-lg bg-white/30 border border-white/30 rounded-xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                      <RefreshCw className="w-7 h-7 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Message Retraction</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">For Microsoft 365 - Enhances incident response by retracting malicious emails already delivered to inboxes, with detailed audit trails.</p>
                </motion.div>

                <motion.div
                  className="backdrop-blur-lg bg-white/30 border border-white/30 rounded-xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Internal Mail Filtering</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">For Microsoft 365 - Protects against Business Email Compromise by safeguarding internal communications and reducing lateral movement.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* How It Works */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">How Multi-Layer Filtering Works</h3>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Our advanced filtering engine delivers extraordinary accuracy, reducing false negatives and false positives to keep everyone productive.
              </p>
              <div className="backdrop-blur-lg bg-white/25 border border-white/25 rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-search text-xl text-blue-600"></i>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Proprietary & multi-engine malware scanning</p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-list text-xl text-blue-600"></i>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Allow and block lists</p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-user-check text-xl text-blue-600"></i>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Sender verification and impersonation tests</p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-file-alt text-xl text-blue-600"></i>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Content and origin tests</p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-cogs text-xl text-blue-600"></i>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Admin and custom mail rules</p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-microscope text-xl text-blue-600"></i>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Deep analysis</p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-link text-xl text-blue-600"></i>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Link protection</p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-shield-alt text-xl text-blue-600"></i>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Attachment disarming/sandboxing</p>
                  </motion.div>
                </div>
                <div className="mt-8 grid md:grid-cols-4 gap-4 text-center text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span>Block/Quarantine</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Reporting</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Alerts</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    <span>Remediation</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Differentiators */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Sets Us Apart</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div
                  className="backdrop-blur-lg bg-white/30 border border-white/30 rounded-xl p-8 shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <h4 className="font-semibold text-gray-900 mb-3">99.9% Catch Rate</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Extremely low false-positives powered by AI, automated traffic analysis, and machine learning</p>
                </motion.div>

                <motion.div
                  className="backdrop-blur-lg bg-white/30 border border-white/30 rounded-xl p-8 shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <h4 className="font-semibold text-gray-900 mb-3">24/7/365 Threat Analysts</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Live threat analyst team constantly identifies new threats and provides real-time updates</p>
                </motion.div>

                <motion.div
                  className="backdrop-blur-lg bg-white/30 border border-white/30 rounded-xl p-8 shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Included</div>
                  <h4 className="font-semibold text-gray-900 mb-3">Identity Protection Included</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Impersonation protection included in base offering with no additional costs</p>
                </motion.div>

                <motion.div
                  className="backdrop-blur-lg bg-white/30 border border-white/30 rounded-xl p-8 shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Cloud-Based</div>
                  <h4 className="font-semibold text-gray-900 mb-3">Advanced Analysis</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Forensic analysis on attachments in secure, cloud-based sandbox environment</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Business Benefits</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div
                  className="flex items-start gap-4 backdrop-blur-lg bg-white/25 border border-white/25 rounded-lg p-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Enhanced Security</h4>
                    <p className="text-gray-600 leading-relaxed">Business-critical communications protected with multi-layered defense</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 backdrop-blur-lg bg-white/25 border border-white/25 rounded-lg p-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ x: -10 }}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Single Console</h4>
                    <p className="text-gray-600 leading-relaxed">Unified management console for multiple email security products</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 backdrop-blur-lg bg-white/25 border border-white/25 rounded-lg p-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Regulatory Compliance</h4>
                    <p className="text-gray-600 leading-relaxed">Enhanced security status for regulated industries and compliance requirements</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 backdrop-blur-lg bg-white/25 border border-white/25 rounded-lg p-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ x: -10 }}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Server className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Single Vendor</h4>
                    <p className="text-gray-600 leading-relaxed">Complete cybersecurity solution from one trusted provider</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Implementation Features */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Simple Implementation & Management</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  className="backdrop-blur-lg bg-white/20 border border-white/20 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Fast Implementation</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">Quick and simple deployment process</p>
                </motion.div>

                <motion.div
                  className="backdrop-blur-lg bg-white/20 border border-white/20 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Intuitive Dashboards</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">Easy-to-use portal with comprehensive management</p>
                </motion.div>

                <motion.div
                  className="backdrop-blur-lg bg-white/20 border border-white/20 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Customizable Filtering</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">Tailored protection rules for your organization</p>
                </motion.div>

                <motion.div
                  className="backdrop-blur-lg bg-white/20 border border-white/20 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Comprehensive Reporting</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">Detailed logging and analytics capabilities</p>
                </motion.div>

                <motion.div
                  className="backdrop-blur-lg bg-white/20 border border-white/20 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Mobile Access</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">Manage security on-the-go with mobile support</p>
                </motion.div>

                <motion.div
                  className="backdrop-blur-lg bg-white/20 border border-white/20 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <HardDrive className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Reliable Processing</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">Multi-layer filtering with extraordinary accuracy</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Cyber Resilience */}
            <motion.div 
              className="backdrop-blur-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/30 rounded-2xl p-12 shadow-xl text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Built for Cyber Resilience</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  OpenText Core Advanced Email Threat Protection is integral to our cyber resilience solutions, 
                  providing the first line of defense against email-borne threats while enabling business continuity even under attack.
                </p>
                <div className="grid md:grid-cols-4 gap-6 text-sm">
                  <div className="flex flex-col items-center gap-2">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <span className="font-medium">Prevent</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Eye className="w-8 h-8 text-green-600" />
                    <span className="font-medium">Detect</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Zap className="w-8 h-8 text-orange-600" />
                    <span className="font-medium">Respond</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RefreshCw className="w-8 h-8 text-purple-600" />
                    <span className="font-medium">Recover</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Strengthen Your Email Security?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contact us to learn how our advanced email threat protection can safeguard your business communications.
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
      
      <Footer />
      </main>
      
      <Footer />
    </div>
  );
}