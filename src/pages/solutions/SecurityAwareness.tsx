import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Shield, Zap, Clock, Target, BarChart, CheckCircle, BookOpen, Users, RefreshCw, TrendingDown, Server, Settings, Monitor, Award, Cloud, Globe, ShieldCheck, UserCog } from "lucide-react";

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

        {/* Enhanced Hero Statistics with Advanced Animations */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {/* Floating background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background: "linear-gradient(45deg, #1e293b, #3b82f6, #10b981, #1e293b)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Transform Your{' '}
                <span className="text-blue-600 block sm:inline">Weakest Link</span>
                <br className="hidden sm:block" />
                <span className="block sm:inline"> Into Your </span>
                <span className="text-green-600">Strongest Defense</span>
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                OpenText Core Security Awareness Training transforms employees from security vulnerabilities into your first line of cyber defense through continuous, measurable education.
              </motion.p>
            </motion.div>

            {/* Enhanced stats grid with advanced animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                { value: "82%", label: "of successful cyberattacks are caused by human factors", icon: Target, color: "text-red-500", bg: "bg-red-50", gradient: "from-red-400 to-red-600" },
                { value: "74%", label: "of phishing attacks on US businesses succeed", icon: Shield, color: "text-orange-500", bg: "bg-orange-50", gradient: "from-orange-400 to-orange-600" },
                { value: "20%", label: "less malware with training vs endpoint protection alone", icon: TrendingDown, color: "text-green-500", bg: "bg-green-50", gradient: "from-green-400 to-green-600" },
                { value: "65%", label: "reduction in click-throughs with 11+ campaigns over 4-6 months", icon: BarChart, color: "text-blue-500", bg: "bg-blue-50", gradient: "from-blue-400 to-blue-600" }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{
                      y: -20,
                      scale: 1.08,
                      rotateY: 10,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                    viewport={{ once: true }}
                    className={`${stat.bg} backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group cursor-pointer transform-gpu`}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full"
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    
                    {/* Icon with rotation animation */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10 mb-3 sm:mb-4"
                    >
                      <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.color} mx-auto drop-shadow-sm`} />
                    </motion.div>
                    
                    {/* Value with pulsing effect */}
                    <motion.div 
                      className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 relative z-10"
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div className="text-sm sm:text-base text-slate-600 leading-snug relative z-10">{stat.label}</div>
                    
                    {/* Gradient background animation */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl`}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Enhanced additional quick stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.05, delayChildren: 0.3 }}
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
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    viewport={{ once: true }}
                    className="text-center p-3 sm:p-4 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer"
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500 mx-auto mb-2" />
                    </motion.div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Core Features with Advanced Animations */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white/50 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Why Choose OpenText Core Security Awareness Training
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive security awareness training that reduces risk, saves administrative time, and delivers measurable business results.
              </p>
            </motion.div>

            {/* Enhanced feature grid with stagger animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Zap,
                  title: "Autopilot Program",
                  description: "Turnkey security awareness training. You manage users; we automatically send monthly training and phishing campaigns.",
                  color: "bg-blue-50 border-blue-100",
                  iconColor: "text-blue-600",
                  gradient: "from-blue-400 to-blue-600"
                },
                {
                  icon: Clock,
                  title: "Minimal Administrative Overhead",
                  description: "Campaign wizard, Azure AD integration, automated reporting, and delivery time randomization reduce management complexity.",
                  color: "bg-green-50 border-green-100",
                  iconColor: "text-green-600",
                  gradient: "from-green-400 to-green-600"
                },
                {
                  icon: BookOpen,
                  title: "Expansive Course Library",
                  description: "300+ microlearning courses from multiple publishers in several languages, updated monthly with evolving threat intelligence.",
                  color: "bg-purple-50 border-purple-100",
                  iconColor: "text-purple-600",
                  gradient: "from-purple-400 to-purple-600"
                },
                {
                  icon: Target,
                  title: "450+ Phishing Simulation Templates",
                  description: "Fully customizable templates adapted from real-world attacks, categorized and regionalized for maximum relevance.",
                  color: "bg-red-50 border-red-100",
                  iconColor: "text-red-600",
                  gradient: "from-red-400 to-red-600"
                },
                {
                  icon: Monitor,
                  title: "Single-Pane-of-Glass Dashboard",
                  description: "Integrated console with OpenText Core Endpoint Protection and DNS Protection for unified security management.",
                  color: "bg-indigo-50 border-indigo-100",
                  iconColor: "text-indigo-600",
                  gradient: "from-indigo-400 to-indigo-600"
                },
                {
                  icon: Award,
                  title: "NIST Framework Aligned",
                  description: "Training topics recommended by NIST Cybersecurity Framework with compliance reporting for PCI, HIPAA, GDPR requirements.",
                  color: "bg-orange-50 border-orange-100",
                  iconColor: "text-orange-600",
                  gradient: "from-orange-400 to-orange-600"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    whileHover={{
                      y: -15,
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                    }}
                    viewport={{ once: true }}
                    className={`${feature.color} backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border shadow-sm hover:shadow-lg transition-all duration-500 relative overflow-hidden group cursor-pointer transform-gpu`}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl mb-4 sm:mb-6 mx-auto shadow-sm relative z-10"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.iconColor}`} />
                    </motion.div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4 text-center leading-tight relative z-10">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center relative z-10">
                      {feature.description}
                    </p>
                    
                    {/* Background gradient on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl`}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Process Flow with 3D Effects */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                How It Works
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Streamlined automation with highly automated Learning Management System makes security awareness training simple and effective.
              </p>
            </motion.div>

            {/* Enhanced process steps with 3D animations */}
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
                    initial={{ opacity: 0, y: 50, rotateX: -30 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      rotateY: 10,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    viewport={{ once: true }}
                    className="relative group perspective-1000"
                    transition={{
                      delay: index * 0.1,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className={`bg-gradient-to-br ${step.gradient} text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 relative overflow-hidden min-h-[280px] sm:min-h-[320px] flex flex-col transform-gpu`}>
                      {/* Animated background pattern */}
                      <motion.div
                        className="absolute inset-0 opacity-10"
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
                          backgroundSize: "20px 20px"
                        }}
                      />
                      
                      {/* Background icon with animation */}
                      <motion.div 
                        className="absolute top-4 right-4 opacity-10 group-hover:opacity-20"
                        whileHover={{ rotate: 180, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-16 h-16 sm:w-20 sm:h-20" />
                      </motion.div>
                      
                      {/* Step number with glow effect */}
                      <motion.div 
                        className="text-4xl sm:text-6xl font-bold opacity-30 mb-4"
                        whileHover={{ 
                          scale: 1.1,
                          textShadow: "0 0 20px rgba(255,255,255,0.5)"
                        }}
                      >
                        {step.step}
                      </motion.div>
                      
                      {/* Content with stagger animation */}
                      <div className="flex-1 flex flex-col justify-center">
                        <motion.h3 
                          className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 relative z-10 leading-tight"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {step.title}
                        </motion.h3>
                        <motion.p 
                          className="text-white/90 text-sm sm:text-base leading-relaxed relative z-10 mb-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {step.description}
                        </motion.p>
                        <motion.div 
                          className="text-xs sm:text-sm text-white/75 font-medium"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                        >
                          {step.details}
                        </motion.div>
                      </div>
                      
                      {/* Shine effect overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Results with Interactive Circular Progress */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white/50 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Proven Results from Real Customers
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Customer snapshot showing dramatic improvement in security awareness over time with measurable behavioral change.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50 rounded-2xl sm:rounded-3xl"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))",
                    "linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(139, 92, 246, 0.1))",
                    "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 relative z-10">
                {[
                  { phase: "1st Simulation", clickRate: 11, description: "Initial baseline phishing susceptibility", improvement: "Starting point" },
                  { phase: "6th Simulation", clickRate: 6, description: "Significant behavioral improvement", improvement: "45% reduction" },
                  { phase: "18th Simulation", clickRate: 4, description: "Sustained security awareness achieved", improvement: "64% reduction" }
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    viewport={{ once: true }}
                    className="text-center group cursor-pointer"
                    transition={{
                      delay: index * 0.15,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {/* Enhanced progress circle with animation */}
                    <div className="relative mb-6 sm:mb-8">
                      <motion.div 
                        className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto rounded-full flex items-center justify-center relative overflow-hidden"
                        whileHover={{ rotateY: 15 }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Animated background */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{
                            background: `conic-gradient(#10b981 0% ${100 - result.clickRate * 8}%, #ef4444 ${100 - result.clickRate * 8}% 100%)`,
                          }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          style={{ 
                            mask: 'radial-gradient(circle at center, transparent 45px, black 45px)',
                            WebkitMask: 'radial-gradient(circle at center, transparent 45px, black 45px)'
                          }}
                        />
                        
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 to-red-400/20 group-hover:from-green-400/30 group-hover:to-red-400/30"
                          transition={{ duration: 0.3 }}
                        />
                        
                        <motion.span 
                          className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {result.clickRate}%
                        </motion.span>
                      </motion.div>
                    </div>
                    
                    <motion.h3 
                      className="text-lg sm:text-xl font-semibold text-slate-900 mb-2"
                      whileHover={{ color: "#3b82f6" }}
                    >
                      {result.phase}
                    </motion.h3>
                    <p className="text-sm sm:text-base text-slate-600 mb-2">
                      {result.description}
                    </p>
                    <motion.div 
                      className="text-xs sm:text-sm font-medium text-green-600"
                      whileHover={{ scale: 1.05 }}
                    >
                      {result.improvement}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center mt-8 sm:mt-12"
              >
                <motion.div 
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-green-100 rounded-full"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                  </motion.div>
                  <span className="text-green-800 font-semibold text-sm sm:text-base">
                    Up to 64% reduction in successful phishing attacks
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Platform Benefits with 3D Cards */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-6 lg:p-8 xl:p-12 text-white relative overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated background pattern - Mobile optimized */}
              <motion.div
                className="absolute inset-0 opacity-3 sm:opacity-5"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.08\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                  backgroundSize: "40px 40px",
                }}
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-6 sm:mb-8 lg:mb-12 relative z-10 px-2"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                  Perfect for MSPs and Enterprises
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-2">
                  Multi-client management, automated delivery, and proven ROI make this the ideal security awareness solution for managed service providers and large organizations.
                </p>
              </motion.div>

              {/* Enhanced platform features - Mobile-first responsive grid */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6 xl:gap-8 mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-0">
                {[
                  {
                    icon: Cloud,
                    title: "Fully Cloud-Based SaaS",
                    description: "No infrastructure required with automatic updates and 99.9% uptime guarantee",
                    color: "text-blue-400",
                    stat: "SaaS"
                  },
                  {
                    icon: UserCog,
                    title: "Multi-Tenant Management", 
                    description: "MSPs can manage training across multiple clients from a single global console",
                    color: "text-green-400",
                    stat: "MSP Ready"
                  },
                  {
                    icon: ShieldCheck,
                    title: "Compliance Automation",
                    description: "Automated reporting for cyber insurance and regulatory requirements", 
                    color: "text-purple-400",
                    stat: "Auto Reports"
                  },
                  {
                    icon: Globe,
                    title: "Global Localization",
                    description: "Multiple languages with regionalized content for worldwide deployment",
                    color: "text-orange-400",
                    stat: "Multi-Language"
                  }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, rotateX: -10 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.03,
                        rotateY: 5,
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      viewport={{ once: true }}
                      className="text-center p-3 sm:p-4 lg:p-6 relative group cursor-pointer transform-gpu touch-manipulation"
                      transition={{
                        delay: index * 0.08,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 120,
                        damping: 15
                      }}
                    >
                      {/* Card background with enhanced gradient and no white bleed */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-slate-700/20 to-slate-800/30 hover:from-slate-700/40 hover:via-slate-600/30 hover:to-slate-700/40 rounded-lg sm:rounded-xl lg:rounded-2xl backdrop-blur-md border border-slate-600/20 hover:border-slate-500/30 shadow-lg hover:shadow-xl"
                        whileHover={{ 
                          backgroundColor: "rgba(51, 65, 85, 0.25)",
                          scale: 1.01,
                          boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                      
                      {/* Icon container - Mobile optimized sizing */}
                      <motion.div 
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/10 hover:bg-white/20 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 backdrop-blur-sm transition-colors relative z-10"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        whileTap={{ rotate: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                      >
                        <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ${feature.color} drop-shadow-sm`} />
                      </motion.div>
                      
                      {/* Stat badge - Mobile responsive */}
                      <motion.div 
                        className="text-xs sm:text-sm font-bold text-white/70 mb-1 sm:mb-2 relative z-10 uppercase tracking-wide"
                        whileHover={{ scale: 1.05 }}
                      >
                        {feature.stat}
                      </motion.div>
                      
                      {/* Title - Responsive typography */}
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 leading-tight relative z-10 text-white">
                        {feature.title}
                      </h3>
                      
                      {/* Description - Mobile optimized line height and spacing */}
                      <p className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed sm:leading-relaxed lg:leading-relaxed relative z-10 px-1 sm:px-0">
                        {feature.description}
                      </p>
                      
                      {/* Enhanced shine effect for mobile */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full rounded-lg sm:rounded-xl lg:rounded-2xl"
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Enhanced CTA with 3D button effect */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center relative z-10"
              >
                <motion.button 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-colors touch-manipulation relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Security%20Awareness%20Training%20Consultation', '_blank')}
                >
                  <span className="relative z-10">Start Your Trial Today</span>
                  
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl"
                    animate={{
                      background: [
                        "linear-gradient(90deg, #3b82f6, #1d4ed8)",
                        "linear-gradient(90deg, #1d4ed8, #3b82f6)",
                        "linear-gradient(90deg, #3b82f6, #1d4ed8)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.button>
                
                <motion.p 
                  className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  No infrastructure required • Automatic updates included
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
}