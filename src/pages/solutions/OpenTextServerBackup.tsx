import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation, useCounterAnimation, useScrollProgress } from "@/hooks/useScrollAnimation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Shield, 
  Clock, 
  Database, 
  CheckCircle, 
  ArrowRight, 
  Mail,
  Users,
  FileText,
  Zap,
  Lock,
  RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Cloud,
    title: "Windows & Linux Server Support",
    description: "Complete protection for Windows and Linux servers with automated backup and replication capabilities"
  },
  {
    icon: Shield,
    title: "Ransomware Protection",
    description: "Advanced threat detection and immutable backups to protect against sophisticated attacks"
  },
  {
    icon: Clock,
    title: "Point-in-Time Recovery",
    description: "Granular restore capabilities with unlimited retention and instant recovery options"
  },
  {
    icon: Database,
    title: "Unlimited Storage",
    description: "No storage limits or per-server restrictions - backup everything without worrying about costs"
  }
];

const deliverables = [
  {
    icon: Mail,
    title: "Server & Application Backup",
    features: [
      "Complete Windows Server protection",
      "Linux server backup and recovery",
      "Application-consistent backups",
      "Database protection (SQL, Oracle, MySQL)",
      "Active Directory and Exchange Server backup"
    ]
  },
  {
    icon: FileText,
    title: "File System & Data Protection",
    features: [
      "Full file system backup",
      "Incremental and differential backups",
      "Version history preservation",
      "File-level recovery",
      "Cross-platform data migrations"
    ]
  },
  {
    icon: Users,
    title: "Enterprise Management",
    features: [
      "Centralized backup management",
      "Multi-site server protection",
      "Automated backup scheduling",
      "Real-time monitoring and alerts",
      "Role-based access control"
    ]
  }
];

const protectionFeatures = [
  "Automated daily backups with customizable schedules",
  "Agent-based and agentless backup options",
  "Regulatory compliance (GDPR, HIPAA, SOX)",
  "Multi-site backup replication for data sovereignty",
  "Enterprise-grade encryption in transit and at rest",
  "Role-based access control and authentication",
  "Comprehensive audit trails and reporting"
];

const technologies = [
  {
    name: "OpenText Server Backup",
    purpose: "Primary server backup and replication platform"
  },
  {
    name: "Windows VSS Integration",
    purpose: "Application-consistent Windows server backups"
  },
  {
    name: "Linux LVM Snapshots",
    purpose: "Complete Linux server protection"
  },
  {
    name: "AES-256 Encryption",
    purpose: "Enterprise security standards"
  }
];

const outcomes = [
  "100% protection of server data with no gaps",
  "Instant recovery from hardware failures",
  "Compliance-ready data retention policies",
  "Reduced IT overhead with automated protection",
  "Protection against data corruption and ransomware"
];

const idealFor = [
  "Organizations with critical Windows and Linux servers",
  "Companies requiring compliance and data governance",
  "Businesses with on-premises server infrastructure",
  "Enterprises needing reliable disaster recovery",
  "IT departments seeking centralized backup management"
];

// Component definitions for the new sections
const FeatureCard = ({ icon, title, description, delay }: { 
  icon: string; 
  title: string; 
  description: string; 
  delay: number; 
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`glass-card p-8 text-center transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="text-5xl mb-6 animate-float">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-4">{title}</h3>
      <p className="text-slate-700 leading-relaxed">{description}</p>
    </div>
  );
};

const BenefitCard = ({ title, description, side, delay }: { 
  title: string; 
  description: string; 
  side: 'left' | 'right'; 
  delay: number; 
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`glass-card p-8 border-l-4 border-blue-500 transition-all duration-700 hover:translate-x-2 ${
        isInView ? 'opacity-100 translate-x-0' : `opacity-0 ${side === 'left' ? '-translate-x-8' : 'translate-x-8'}`
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <h3 className="text-xl font-semibold text-blue-900 mb-4">{title}</h3>
      <p className="text-slate-700 leading-relaxed">{description}</p>
    </div>
  );
};

const PlatformCard = ({ title, items, delay }: { 
  title: string; 
  items: string[]; 
  delay: number; 
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`glass-dark-card p-6 text-center transition-all duration-700 hover:-translate-y-1 ${
        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <h3 className="text-lg font-semibold text-blue-900 mb-4">{title}</h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="text-sm text-slate-700">• {item}</div>
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ number, label, suffix = '', special }: { 
  number: number; 
  label: string; 
  suffix?: string; 
  special?: string; 
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });
  const count = useCounterAnimation(number, isInView);
  
  return (
    <div 
      ref={ref}
      className={`glass-card p-8 text-center transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {special || `${count}${suffix}`}
      </div>
      <div className="text-lg text-slate-700 font-medium">{label}</div>
    </div>
  );
};

// Add custom CSS styles to index.css for glass morphism effects
const customStyles = `
  .glass-card {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }

  .glass-dark-card {
    background: rgba(26, 106, 255, 0.1);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(26, 106, 255, 0.2);
    border-radius: 20px;
    box-shadow: 0 12px 40px 0 rgba(26, 106, 255, 0.15);
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

export default function OpenTextServerBackup() {
  // Add custom styles to head
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const progress = useScrollProgress();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 z-50 origin-left transition-transform duration-100"
        style={{ transform: `scaleX(${progress})` }}
      />
      
      <SEOHead 
        title="OpenText Server Backup Solutions MENA - Enterprise Server Protection | S2 Solutions"
        description="Enterprise OpenText server backup solutions for MENA region. Complete server backup and replication with unlimited storage, ransomware protection, and compliance features. Serving UAE, Saudi Arabia, and Middle East."
        keywords="server backup MENA, OpenText server backup UAE, server backup Middle East, server replication Saudi Arabia, server data protection, enterprise backup, server disaster recovery"
        canonicalUrl="https://s2mgt.com/solutions/OpenText-Server-Backup"
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
                      <span className="relative">Server Backup Solution</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        OpenText Server Backup
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Comprehensive OpenText server backup and replication solutions for Windows and Linux servers with automated protection and instant recovery capabilities.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=OpenText%20Server%20Backup%20Consultation', '_blank')}
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
                          title="Server Backup Solutions"
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

        {/* Overview Section - Keep existing as placeholder */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 font-inter">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Enterprise Server Backup & Recovery Solutions
              </h2>
              <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light">
                Protect your critical business data with OpenText Server Backup - the comprehensive, all-in-one solution that secures over 200 operating systems, platforms, and applications with enterprise-grade reliability.
              </p>
              <Button 
                size="lg" 
                className="mt-8 text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 font-inter">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Comprehensive Data Protection Features
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto font-light">
                Advanced backup capabilities designed for modern enterprise environments with flexible deployment options and rapid recovery.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <FeatureCard
                icon="⚡"
                title="Rapid VM Recovery"
                description="Restore virtual machines to full functionality in as little as 2 minutes, regardless of VM size. Continuous backup protection ensures zero data loss."
                delay={0.1}
              />
              
              <FeatureCard
                icon="🛡️"
                title="Ransomware Protection"
                description="Immutable backup 'safe-sets' with automatic ransomware threat detection for Windows systems. Comprehensive recovery options from uncompromised backups."
                delay={0.2}
              />
              
              <FeatureCard
                icon="☁️"
                title="Cloud Failover"
                description="Seamless cloud failover for critical systems ensuring near-zero downtime. Simple failback to primary environment with point-in-time recovery options."
                delay={0.3}
              />
              
              <FeatureCard
                icon="🔄"
                title="Forever Incremental Backups"
                description="Efficient backup strategy with hourly incremental backups and flexible retention from 1-7 years. Significantly reduces backup times and storage requirements."
                delay={0.4}
              />
              
              <FeatureCard
                icon="🎯"
                title="Bare Metal Restore"
                description="Complete system recovery including OS, data, and applications. Granular recovery options for files, folders, databases, and application data."
                delay={0.5}
              />
              
              <FeatureCard
                icon="🌐"
                title="Universal Platform Support"
                description="Protect over 200 operating systems, platforms, and applications including physical, virtual, and legacy systems with comprehensive coverage."
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 font-inter">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Why Choose OpenText Server Backup
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto font-light">
                Enterprise-grade backup solution trusted by organizations worldwide for critical data protection and business continuity.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <BenefitCard
                title="Simplified Management"
                description="Unified management portal with tag-based backup job creation, automatic verification reports, and comprehensive scheduling to minimize operational costs."
                side="left"
                delay={0.1}
              />
              
              <BenefitCard
                title="Compliance Ready"
                description="SOC 2 Type 2 compliant with support for HIPAA, FERPA, GDPR, and GLBA regulations. Immutable backups ensure data integrity and regulatory compliance."
                side="right"
                delay={0.2}
              />
              
              <BenefitCard
                title="Flexible Deployment"
                description="Direct-to-cloud, on-site, and hybrid deployment options. Keep up to three copies of backup data with integrated software and optional onsite hardware."
                side="left"
                delay={0.3}
              />
              
              <BenefitCard
                title="Advanced Compression"
                description="Dynamic bandwidth throttling and advanced compression minimize network utilization while preserving performance during peak hours."
                side="right"
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Platform Support Section */}
        <section className="py-20 font-inter">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Comprehensive Platform Coverage
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto font-light">
                Extensive support for diverse IT environments ensuring complete data protection across your entire infrastructure.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <PlatformCard
                title="Operating Systems"
                items={[
                  "Microsoft Windows",
                  "Linux Distributions", 
                  "IBM AIX & iSeries",
                  "VMware & Hyper-V"
                ]}
                delay={0.1}
              />
              
              <PlatformCard
                title="Application Support"
                items={[
                  "Microsoft SQL Server",
                  "Microsoft Exchange",
                  "Microsoft SharePoint", 
                  "Oracle Database"
                ]}
                delay={0.2}
              />
              
              <PlatformCard
                title="Granular Recovery"
                items={[
                  "Files & Folders",
                  "Exchange Mailboxes",
                  "SQL Databases & Tables",
                  "SharePoint & Active Directory"
                ]}
                delay={0.3}
              />
              
              <PlatformCard
                title="Virtualization"
                items={[
                  "VMware vSphere",
                  "Microsoft Hyper-V",
                  "Physical Servers",
                  "Legacy Systems"
                ]}
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 font-inter">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Proven Performance
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto font-light">
                Industry-leading backup and recovery performance metrics that ensure your business stays protected and operational.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <StatCard number={200} label="Supported Platforms" suffix="+" />
              <StatCard number={2} label="Minutes VM Recovery" />
              <StatCard number={7} label="Years Retention" />
              <StatCard number={24} label="24/7 Expert Support" special="24/7" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-inter">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Business Data?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90 font-light">
              Join thousands of organizations worldwide who trust OpenText Server Backup for their critical data protection needs. Start your journey to cyber resilience today.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 font-semibold"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}