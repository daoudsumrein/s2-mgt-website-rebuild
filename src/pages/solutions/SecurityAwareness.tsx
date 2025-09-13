import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield, Zap, Clock, Target, BarChart, CheckCircle, BookOpen, Users, RefreshCw, TrendingDown, Server, Settings, Monitor, Award } from "lucide-react";

export default function SecurityAwareness() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Security Awareness Training | Human Firewall Development MENA"
        description="Comprehensive security awareness training programs for MENA enterprises. Phishing simulations, interactive training, and human risk management solutions."
        keywords="security awareness training MENA, cybersecurity training UAE, phishing simulation Middle East, security education Saudi Arabia"
        canonicalUrl="https://s2mgt.com/solutions/security-awareness"
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
                        Security Awareness Training
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Transform end-users from the weakest link into a resilient first line of cyber defense through comprehensive training programs.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Security%20Training%20Consultation', '_blank')}>
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

        {/* Mobile-First Hero Statistics */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 }
                }
              }} 
              className="text-center mb-12 sm:mb-16"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                Transform Your{' '}
                <span className="text-blue-600 block sm:inline">Weakest Link</span>
                <br className="hidden sm:block" />
                <span className="block sm:inline"> Into Your </span>
                <span className="text-green-600">Strongest Defense</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2">
                OpenText Core Security Awareness Training transforms employees from security vulnerabilities into your first line of cyber defense through continuous, measurable education.
              </p>
            </motion.div>

            {/* Mobile-optimized stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                { value: "82%", label: "of successful cyberattacks are caused by human factors", icon: Target, color: "text-red-500", bg: "bg-red-50" },
                { value: "74%", label: "of phishing attacks on US businesses succeed", icon: Shield, color: "text-orange-500", bg: "bg-orange-50" },
                { value: "20%", label: "less malware with training vs endpoint protection alone", icon: TrendingDown, color: "text-green-500", bg: "bg-green-50" },
                { value: "65%", label: "reduction in click-throughs with 11+ campaigns over 4-6 months", icon: BarChart, color: "text-blue-500", bg: "bg-blue-50" }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.6, delay: 0.1 }
                      }
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                    className={`${stat.bg} backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-white/20 shadow-sm hover:shadow-lg transition-shadow`}
                    style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.color} mx-auto mb-3 sm:mb-4`} />
                    <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-sm sm:text-base text-slate-600 leading-snug">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional quick stats */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 }
                }
              }}
              className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
            >
              {[
                { label: "Phishing Templates", value: "450+", icon: Target },
                { label: "Training Courses", value: "300+", icon: BookOpen },
                { label: "Monthly Updates", value: "Regular", icon: RefreshCw },
                { label: "Languages Supported", value: "Multiple", icon: Server }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-3 sm:p-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500 mx-auto mb-2" />
                    <div className="text-xl sm:text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* Mobile-First Core Features */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white/50"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 }
                }
              }} 
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Why Choose OpenText Core Security Awareness Training
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive security awareness training that reduces risk, saves administrative time, and delivers measurable business results.
              </p>
            </motion.div>

            {/* Mobile-first feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Zap,
                  title: "Autopilot Program",
                  description: "Turnkey security awareness training. You manage users; we automatically send monthly training and phishing campaigns.",
                  color: "bg-blue-50 border-blue-100",
                  iconColor: "text-blue-600"
                },
                {
                  icon: Clock,
                  title: "Minimal Administrative Overhead",
                  description: "Campaign wizard, Azure AD integration, automated reporting, and delivery time randomization reduce management complexity.",
                  color: "bg-green-50 border-green-100",
                  iconColor: "text-green-600"
                },
                {
                  icon: BookOpen,
                  title: "Expansive Course Library",
                  description: "300+ microlearning courses from multiple publishers in several languages, updated monthly with evolving threat intelligence.",
                  color: "bg-purple-50 border-purple-100",
                  iconColor: "text-purple-600"
                },
                {
                  icon: Target,
                  title: "450+ Phishing Simulation Templates",
                  description: "Fully customizable templates adapted from real-world attacks, categorized and regionalized for maximum relevance.",
                  color: "bg-red-50 border-red-100",
                  iconColor: "text-red-600"
                },
                {
                  icon: Monitor,
                  title: "Single-Pane-of-Glass Dashboard",
                  description: "Integrated console with OpenText Core Endpoint Protection and DNS Protection for unified security management.",
                  color: "bg-indigo-50 border-indigo-100",
                  iconColor: "text-indigo-600"
                },
                {
                  icon: Award,
                  title: "NIST Framework Aligned",
                  description: "Training topics recommended by NIST Cybersecurity Framework with compliance reporting for PCI, HIPAA, GDPR requirements.",
                  color: "bg-orange-50 border-orange-100",
                  iconColor: "text-orange-600"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.6, delay: 0.1 }
                      }
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                    className={`${feature.color} backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border shadow-sm hover:shadow-md transition-all duration-300`}
                    style={{ transitionDelay: `${0.2 + index * 0.08}s` }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl mb-4 sm:mb-6 mx-auto shadow-sm">
                      <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4 text-center leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Mobile-Optimized Process Flow */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 }
                }
              }} 
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                How It Works
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Streamlined automation with highly automated Learning Management System makes security awareness training simple and effective.
              </p>
            </motion.div>

            {/* Mobile-stacked process steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  step: "01",
                  title: "Automated User Import",
                  description: "Microsoft Azure AD integration automatically syncs and manages target users across your organization.",
                  icon: Users,
                  gradient: "from-blue-500 to-blue-600",
                  details: "Keep users in sync automatically"
                },
                {
                  step: "02", 
                  title: "Campaign Wizard Setup",
                  description: "Simple wizard creates phishing simulations and training campaigns in minutes with intuitive workflow.",
                  icon: Settings,
                  gradient: "from-green-500 to-green-600",
                  details: "Name, select recipients, choose content, launch"
                },
                {
                  step: "03",
                  title: "Intelligent Delivery",
                  description: "Schedule sequences with randomized timing, automated reminders, and staggered delivery for maximum impact.",
                  icon: Clock,
                  gradient: "from-purple-500 to-purple-600",
                  details: "Optimize engagement through smart scheduling"
                },
                {
                  step: "04",
                  title: "Comprehensive Tracking",
                  description: "Built-in LMS tracks every user interaction with executive summary reports and per-user action analytics.",
                  icon: BarChart,
                  gradient: "from-orange-500 to-orange-600",
                  details: "Measure progress and ROI continuously"
                }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.6, delay: 0.1 }
                      }
                    }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative group"
                    style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className={`bg-gradient-to-br ${step.gradient} text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 relative overflow-hidden min-h-[280px] sm:min-h-[320px] flex flex-col`}>
                      {/* Background icon */}
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Icon className="w-16 h-16 sm:w-20 sm:h-20" />
                      </div>
                      
                      {/* Step number */}
                      <div className="text-4xl sm:text-6xl font-bold opacity-30 mb-4">{step.step}</div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 relative z-10 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed relative z-10 mb-3">
                          {step.description}
                        </p>
                        <div className="text-xs sm:text-sm text-white/75 font-medium">
                          {step.details}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Mobile-First Results Visualization */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white/50"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 }
                }
              }} 
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Proven Results from Real Customers
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Customer snapshot showing dramatic improvement in security awareness over time with measurable behavioral change.
              </p>
            </motion.div>

            <div className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 shadow-lg">
              {/* Mobile-stacked results */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                {[
                  { phase: "1st Simulation", clickRate: 11, description: "Initial baseline phishing susceptibility", improvement: "Starting point" },
                  { phase: "6th Simulation", clickRate: 6, description: "Significant behavioral improvement", improvement: "45% reduction" },
                  { phase: "18th Simulation", clickRate: 4, description: "Sustained security awareness achieved", improvement: "64% reduction" }
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.6, delay: 0.1 }
                      }
                    }}
                    className="text-center"
                    style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                  >
                    {/* Mobile-optimized progress circle */}
                    <div className="relative mb-6 sm:mb-8">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto rounded-full bg-gradient-to-br from-red-500 to-green-500 flex items-center justify-center relative overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-green-500 transition-all duration-1000"
                          style={{ 
                            background: `conic-gradient(#10b981 0% ${100 - result.clickRate * 8}%, #ef4444 ${100 - result.clickRate * 8}% 100%)`,
                            mask: 'radial-gradient(circle at center, transparent 45px, black 45px)',
                            WebkitMask: 'radial-gradient(circle at center, transparent 45px, black 45px)'
                          }}
                        />
                        <span className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                          {result.clickRate}%
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                      {result.phase}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 mb-2">
                      {result.description}
                    </p>
                    <div className="text-xs sm:text-sm font-medium text-green-600">
                      {result.improvement}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: 0.1 }
                  }
                }} 
                className="text-center mt-8 sm:mt-12"
              >
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-green-100 rounded-full">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-semibold text-sm sm:text-base">
                    Up to 64% reduction in successful phishing attacks
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Mobile-First Platform Benefits */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: 0.1 }
                  }
                }} 
                className="text-center mb-8 sm:mb-12"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  Perfect for MSPs and Enterprises
                </h2>
                <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  Multi-client management, automated delivery, and proven ROI make this the ideal security awareness solution for managed service providers and large organizations.
                </p>
              </motion.div>

              {/* Mobile-optimized platform features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                {[
                  {
                    icon: "fas fa-cloud-upload-alt",
                    title: "Fully Cloud-Based SaaS",
                    description: "No infrastructure required with automatic updates and 99.9% uptime guarantee",
                    color: "text-blue-400",
                    stat: "SaaS"
                  },
                  {
                    icon: "fas fa-users-cog",
                    title: "Multi-Tenant Management",
                    description: "MSPs can manage training across multiple clients from a single global console",
                    color: "text-green-400",
                    stat: "MSP Ready"
                  },
                  {
                    icon: "fas fa-certificate",
                    title: "Compliance Automation",
                    description: "Automated reporting for cyber insurance and regulatory requirements",
                    color: "text-purple-400",
                    stat: "Auto Reports"
                  },
                  {
                    icon: "fas fa-globe-americas",
                    title: "Global Localization",
                    description: "Multiple languages with regionalized content for worldwide deployment",
                    color: "text-orange-400",
                    stat: "Multi-Language"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.6, delay: 0.1 }
                      }
                    }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="text-center p-4 sm:p-6"
                    style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <i className={`${feature.icon} text-xl sm:text-2xl ${feature.color}`}></i>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white/60 mb-1">
                      {feature.stat}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Mobile-friendly CTA */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: 0.1 }
                  }
                }} 
                className="text-center"
              >
                <motion.button 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-colors touch-manipulation"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Security%20Awareness%20Training%20Consultation', '_blank')}
                >
                  Start Your Trial Today
                </motion.button>
                <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4">
                  No infrastructure required • Automatic updates included
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
}