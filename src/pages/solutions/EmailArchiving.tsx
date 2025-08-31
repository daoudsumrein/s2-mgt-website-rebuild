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

        {/* MailStore Server Content - Following exact HTML/CSS structure */}
        <section id="product-content">
          <style dangerouslySetInnerHTML={{
            __html: `
              #product-content {
                --accent: #E65F1E;
                --bg: #fafbfc;
                --card: rgba(30, 41, 59, 0.8);
                --border: rgba(230, 95, 30, 0.25);
                --text: #1a1a1a;
                --text-muted: #6b7280;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                color: var(--text);
                line-height: 1.6;
                padding: 2rem 1rem;
                background: linear-gradient(135deg, var(--bg) 0%, #f1f5f9 100%);
                position: relative;
                overflow: hidden;
              }

              #product-content::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(circle at 20% 80%, rgba(230, 95, 30, 0.03) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.05) 0%, transparent 50%);
                pointer-events: none;
                animation: float 6s ease-in-out infinite;
              }

              .container {
                max-width: 1200px;
                margin: 0 auto;
                position: relative;
                z-index: 1;
              }

              .hero-section {
                text-align: center;
                margin-bottom: 4rem;
                animation: fadeSlideUp 0.8s ease-out 0.2s both;
              }

              .hero-title {
                font-size: clamp(2.5rem, 5vw, 3.5rem);
                font-weight: 700;
                margin-bottom: 1rem;
                background: linear-gradient(135deg, var(--accent), #ff8c00, #ffa500);
                background-size: 200% 200%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: gradientShift 3s ease-in-out infinite;
              }

              .hero-subtitle {
                font-size: 1.25rem;
                color: var(--text-muted);
                max-width: 600px;
                margin: 0 auto 2rem;
              }

              .stats-row {
                display: flex;
                justify-content: center;
                gap: 2rem;
                flex-wrap: wrap;
                margin-top: 2rem;
              }

              .stat-item {
                text-align: center;
                animation: fadeSlideUp 0.8s ease-out both;
              }

              .stat-item[data-i="0"] { animation-delay: calc(0.5s + 0 * 0.1s); }
              .stat-item[data-i="1"] { animation-delay: calc(0.5s + 1 * 0.1s); }
              .stat-item[data-i="2"] { animation-delay: calc(0.5s + 2 * 0.1s); }

              .stat-number {
                font-size: 2rem;
                font-weight: 700;
                color: var(--accent);
              }

              .stat-label {
                font-size: 0.875rem;
                color: var(--text-muted);
              }

              .benefits-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin: 4rem 0;
              }

              .benefit-card {
                background: var(--card);
                backdrop-filter: blur(12px);
                border: 1px solid var(--border);
                border-radius: 16px;
                padding: 2rem;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                animation: fadeSlideUp 0.8s ease-out both;
                box-shadow: 0 4px 20px rgba(230, 95, 30, 0.08);
              }

              .benefit-card:hover {
                transform: translateY(-10px) scale(1.02);
                box-shadow: 0 20px 40px rgba(230, 95, 30, 0.15);
                border-color: var(--accent);
              }

              .benefit-card[data-i="0"] { animation-delay: calc(0.3s + 0 * 0.1s); }
              .benefit-card[data-i="1"] { animation-delay: calc(0.3s + 1 * 0.1s); }
              .benefit-card[data-i="2"] { animation-delay: calc(0.3s + 2 * 0.1s); }
              .benefit-card[data-i="3"] { animation-delay: calc(0.3s + 3 * 0.1s); }
              .benefit-card[data-i="4"] { animation-delay: calc(0.3s + 4 * 0.1s); }
              .benefit-card[data-i="5"] { animation-delay: calc(0.3s + 5 * 0.1s); }

              .benefit-icon {
                width: 48px;
                height: 48px;
                margin-bottom: 1rem;
                color: var(--accent);
                transition: transform 0.3s ease;
              }

              .benefit-card:hover .benefit-icon {
                transform: rotate(5deg);
                animation: iconTilt 0.6s ease-in-out;
              }

              .benefit-title {
                font-size: 1.25rem;
                font-weight: 600;
                margin-bottom: 0.75rem;
                color: var(--text);
              }

              .benefit-description {
                color: var(--text-muted);
                font-size: 0.95rem;
              }

              .features-section {
                margin: 4rem 0;
              }

              .storage-info {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin: 2rem 0 4rem;
              }

              .storage-card {
                background: var(--card);
                backdrop-filter: blur(12px);
                border: 1px solid var(--border);
                border-radius: 16px;
                padding: 2rem;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                animation: fadeSlideUp 0.8s ease-out both;
                box-shadow: 0 4px 20px rgba(230, 95, 30, 0.05);
              }

              .storage-card:hover {
                transform: translateY(-5px);
                border-color: var(--accent);
                box-shadow: 0 10px 30px rgba(230, 95, 30, 0.1);
              }

              .storage-card h3 {
                color: var(--accent);
                font-size: 1.1rem;
                font-weight: 600;
                margin-bottom: 1rem;
              }

              .systems-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin: 2rem 0 4rem;
              }

              .system-category {
                background: var(--card);
                backdrop-filter: blur(12px);
                border: 1px solid var(--border);
                border-radius: 16px;
                padding: 2rem;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                animation: fadeSlideUp 0.8s ease-out both;
                box-shadow: 0 4px 20px rgba(230, 95, 30, 0.05);
              }

              .system-category:hover {
                transform: translateY(-5px);
                border-color: var(--accent);
              }

              .system-category h3 {
                color: var(--accent);
                font-size: 1.2rem;
                font-weight: 600;
                margin-bottom: 1.5rem;
              }

              .system-category ul {
                list-style: none;
                padding: 0;
              }

              .system-category li {
                padding: 0.5rem 0;
                color: var(--text-muted);
                border-bottom: 1px solid rgba(107, 114, 128, 0.2);
              }

              .system-category li:before {
                content: '✓';
                color: var(--accent);
                font-weight: bold;
                margin-right: 0.5rem;
              }

              .section-title {
                font-size: 2rem;
                font-weight: 600;
                text-align: center;
                margin-bottom: 3rem;
                animation: fadeSlideUp 0.8s ease-out 0.2s both;
              }

              .features-list {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 1.5rem;
                margin: 2rem 0;
              }

              .feature-item {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                background: var(--card);
                backdrop-filter: blur(8px);
                border: 1px solid var(--border);
                border-radius: 12px;
                transition: all 0.3s ease;
                animation: fadeSlideUp 0.8s ease-out both;
                box-shadow: 0 2px 10px rgba(230, 95, 30, 0.05);
              }

              .feature-item:hover {
                transform: translateX(10px);
                border-color: var(--accent);
              }

              .feature-item[data-i="0"] { animation-delay: calc(0.4s + 0 * 0.1s); }
              .feature-item[data-i="1"] { animation-delay: calc(0.4s + 1 * 0.1s); }
              .feature-item[data-i="2"] { animation-delay: calc(0.4s + 2 * 0.1s); }
              .feature-item[data-i="3"] { animation-delay: calc(0.4s + 3 * 0.1s); }
              .feature-item[data-i="4"] { animation-delay: calc(0.4s + 4 * 0.1s); }

              .feature-icon {
                width: 24px;
                height: 24px;
                color: var(--accent);
                flex-shrink: 0;
              }

              .compliance-section {
                background: var(--card);
                backdrop-filter: blur(16px);
                border: 1px solid var(--border);
                border-radius: 20px;
                padding: 3rem 2rem;
                margin: 4rem 0;
                text-align: center;
                animation: fadeSlideUp 0.8s ease-out 0.3s both;
                box-shadow: 0 6px 30px rgba(230, 95, 30, 0.08);
              }

              .compliance-details {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 2rem;
                margin: 2rem 0;
                text-align: left;
              }

              .compliance-item {
                background: rgba(230, 95, 30, 0.03);
                border: 1px solid rgba(230, 95, 30, 0.15);
                border-radius: 12px;
                padding: 1.5rem;
                transition: all 0.3s ease;
              }

              .compliance-item:hover {
                border-color: var(--accent);
                transform: translateY(-2px);
              }

              .compliance-item h3 {
                color: var(--accent);
                font-size: 1.1rem;
                font-weight: 600;
                margin-bottom: 0.75rem;
              }

              .compliance-item p {
                color: var(--text-muted);
                font-size: 0.9rem;
                line-height: 1.6;
              }

              .compliance-badges {
                display: flex;
                justify-content: center;
                gap: 2rem;
                flex-wrap: wrap;
                margin-top: 2rem;
              }

              .badge {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.75rem 1.5rem;
                background: rgba(230, 95, 30, 0.1);
                border: 1px solid rgba(230, 95, 30, 0.3);
                border-radius: 50px;
                font-size: 0.9rem;
                font-weight: 500;
                transition: all 0.3s ease;
              }

              .badge:hover {
                background: rgba(230, 95, 30, 0.2);
                transform: translateY(-2px);
              }

              .cta-section {
                text-align: center;
                margin: 4rem 0 2rem;
                animation: fadeSlideUp 0.8s ease-out 0.4s both;
              }

              .testimonials-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 2rem;
                margin: 2rem 0 4rem;
              }

              .testimonial-card {
                background: var(--card);
                backdrop-filter: blur(12px);
                border: 1px solid var(--border);
                border-radius: 16px;
                padding: 2rem;
                text-align: left;
                position: relative;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                animation: fadeSlideUp 0.8s ease-out both;
                box-shadow: 0 4px 20px rgba(230, 95, 30, 0.05);
              }

              .testimonial-card:hover {
                transform: translateY(-5px);
                border-color: var(--accent);
                box-shadow: 0 20px 40px rgba(230, 95, 30, 0.1);
              }

              .quote-mark {
                font-size: 4rem;
                color: var(--accent);
                line-height: 1;
                margin-bottom: 1rem;
                font-family: Georgia, serif;
              }

              .testimonial-text {
                color: var(--text-muted);
                font-size: 1rem;
                line-height: 1.6;
                margin-bottom: 1.5rem;
                font-style: italic;
              }

              .testimonial-author {
                color: var(--text);
                font-size: 0.9rem;
              }

              .testimonial-author span {
                color: var(--text-muted);
                font-size: 0.85rem;
              }

              .satisfaction-note {
                background: rgba(230, 95, 30, 0.1);
                border: 1px solid rgba(230, 95, 30, 0.3);
                border-radius: 16px;
                padding: 2rem;
                margin: 3rem 0;
                text-align: center;
              }

              .satisfaction-note h3 {
                color: var(--accent);
                margin-bottom: 1rem;
              }

              .satisfaction-note p {
                color: var(--text-muted);
                font-size: 0.95rem;
              }

              .tech-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 2rem;
                margin: 2rem 0 4rem;
                text-align: left;
              }

              .tech-card {
                background: var(--card);
                backdrop-filter: blur(12px);
                border: 1px solid var(--border);
                border-radius: 16px;
                padding: 2rem;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                animation: fadeSlideUp 0.8s ease-out both;
                box-shadow: 0 4px 20px rgba(230, 95, 30, 0.05);
              }

              .tech-card:hover {
                transform: translateY(-5px);
                border-color: var(--accent);
              }

              .tech-card h3 {
                color: var(--accent);
                font-size: 1.1rem;
                font-weight: 600;
                margin-bottom: 1rem;
              }

              .tech-card p {
                color: var(--text-muted);
                font-size: 0.95rem;
                line-height: 1.6;
              }

              .tech-card ul {
                list-style: none;
                padding: 0;
              }

              .tech-card li {
                color: var(--text-muted);
                padding: 0.5rem 0;
                border-bottom: 1px solid rgba(107, 114, 128, 0.2);
                font-size: 0.9rem;
              }

              .tech-card li:before {
                content: '•';
                color: var(--accent);
                font-weight: bold;
                margin-right: 0.5rem;
              }

              .cta-text {
                font-size: 1.1rem;
                color: var(--text-muted);
                margin-bottom: 1.5rem;
              }

              @keyframes fadeSlideUp {
                from {
                  opacity: 0;
                  transform: translateY(50px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }

              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }

              @keyframes iconTilt {
                0%, 100% { transform: rotate(5deg); }
                25% { transform: rotate(-5deg); }
                75% { transform: rotate(10deg); }
              }

              @media (max-width: 768px) {
                #product-content {
                  padding: 1rem 0.5rem;
                }
                
                .stats-row {
                  gap: 1rem;
                }
                
                .benefit-card, .compliance-section {
                  padding: 1.5rem;
                }
                
                .features-list {
                  grid-template-columns: 1fr;
                }
              }
            `
          }} />

          <div className="container">
            <div className="hero-section">
              <h1 className="hero-title">MailStore Server</h1>
              <p className="hero-subtitle">On the market since 2006, MailStore Server has grown to become a global standard for email archiving in business following years of successful operation at tens of thousands of companies. Easy to install, reliable and low-maintenance.</p>
              
              <div className="stats-row">
                <div className="stat-item" data-i="0">
                  <div className="stat-number">70%</div>
                  <div className="stat-label">Storage Reduction</div>
                </div>
                <div className="stat-item" data-i="1">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Countries Served</div>
                </div>
                <div className="stat-item" data-i="2">
                  <div className="stat-number">19</div>
                  <div className="stat-label">Years on Market</div>
                </div>
                <div className="stat-item" data-i="3">
                  <div className="stat-number">17</div>
                  <div className="stat-label">Languages Supported</div>
                </div>
              </div>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card" data-i="0">
                <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <h3 className="benefit-title">Regulatory Compliance</h3>
                <p className="benefit-description">Meet GDPR, legal hold requirements, and industry regulations with sophisticated retention policies and tamper-proof storage.</p>
              </div>

              <div className="benefit-card" data-i="1">
                <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                </svg>
                <h3 className="benefit-title">Storage Optimization</h3>
                <p className="benefit-description">Reduce storage requirements by up to 70% through intelligent de-duplication and compression technology.</p>
              </div>

              <div className="benefit-card" data-i="2">
                <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                <h3 className="benefit-title">One-Click Restore</h3>
                <p className="benefit-description">Users can restore emails instantly without administrator intervention, maintaining productivity and reducing IT workload.</p>
              </div>

              <div className="benefit-card" data-i="3">
                <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/>
                </svg>
                <h3 className="benefit-title">Universal Compatibility</h3>
                <p className="benefit-description">Supports Microsoft Exchange, Microsoft 365, Google Workspace, MDaemon, IceWarp, Kerio Connect, all IMAP/POP3 servers, PST/EML files, and email clients like Outlook and Thunderbird.</p>
              </div>

              <div className="benefit-card" data-i="4">
                <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <h3 className="benefit-title">Powerful Search</h3>
                <p className="benefit-description">Fast full-text search across emails and attachments with access via original folder structures and multiple interfaces.</p>
              </div>

              <div className="benefit-card" data-i="5">
                <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <h3 className="benefit-title">Business Continuity</h3>
                <p className="benefit-description">Maintain email access during server outages with independent archive access, ensuring uninterrupted operations.</p>
              </div>
            </div>

            <div className="features-section">
              <h2 className="section-title">Integrated Storage Technology</h2>
              <div className="storage-info">
                <div className="storage-card" data-i="0">
                  <h3>Highly Sophisticated Storage</h3>
                  <p>The core consists of a sophisticated storage technology that does not require any external database software and is available right after setup. Can optionally use Microsoft SQL Server or PostgreSQL for existing infrastructure.</p>
                </div>
                <div className="storage-card" data-i="1">
                  <h3>High Scalability</h3>
                  <p>While presenting as a singular entity to users, the archive can consist of any number of individual archive stores internally. New archive stores are automatically created when storage limits are approached, ensuring flexible storage management.</p>
                </div>
              </div>
              
              <h2 className="section-title">Supported Email Systems & Access Methods</h2>
              <div className="systems-grid">
                <div className="system-category" data-i="0">
                  <h3>Email Systems</h3>
                  <ul>
                    <li>Microsoft Exchange Server (current versions)</li>
                    <li>Microsoft 365</li>
                    <li>Google Workspace</li>
                    <li>All IMAP or POP3 compatible email servers</li>
                    <li>MDaemon, IceWarp and Kerio Connect</li>
                    <li>PST, EML and other email files</li>
                    <li>Microsoft Outlook and Mozilla Thunderbird</li>
                  </ul>
                </div>
                <div className="system-category" data-i="1">
                  <h3>Access Methods</h3>
                  <ul>
                    <li>Microsoft Outlook Add-in (distributed via group policies)</li>
                    <li>Responsive Web Access (any browser, mobile-friendly)</li>
                    <li>Integrated IMAP Server (for other email clients)</li>
                    <li>MailStore Client (full range of functions)</li>
                    <li>Administration API for automation</li>
                  </ul>
                </div>
              </div>

              <h2 className="section-title">Key Features</h2>
              <div className="features-list">
                <div className="feature-item" data-i="0">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                  <span>SHA hash values and AES-256 encryption for tamper-proof storage</span>
                </div>
                <div className="feature-item" data-i="1">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                  <span>Complete journaling - archive all email as soon as received or sent</span>
                </div>
                <div className="feature-item" data-i="2">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  <span>Independence from cumbersome PST files - centralized PST archiving and backup</span>
                </div>
                <div className="feature-item" data-i="3">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  <span>Administration API for workflow automation and central IT management integration</span>
                </div>
                <div className="feature-item" data-i="4">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>
                  </svg>
                  <span>Elimination of mailbox quotas - no longer need to limit email server storage capacity</span>
                </div>
              </div>
            </div>

            <div className="compliance-section">
              <h2 className="section-title">Enterprise-Grade Compliance</h2>
              <p style={{color: 'var(--text-muted)', marginBottom: '2rem'}}>Built for the most demanding regulatory environments with comprehensive audit trails and retention management.</p>
              
              <div className="compliance-details">
                <div className="compliance-item" data-i="0">
                  <h3>Legal Hold Functionality</h3>
                  <p>If Legal Hold has been enabled, no emails can be deleted from the archive, regardless of all other possible configurations of user privileges and retention policies.</p>
                </div>
                <div className="compliance-item" data-i="1">
                  <h3>Sophisticated Retention Policies</h3>
                  <p>Administrators can define sophisticated retention policies, enabling them to maintain complete control of the periods for which various types of email are archived. Helps customers meet GDPR obligations.</p>
                </div>
                <div className="compliance-item" data-i="2">
                  <h3>Authentic Archiving</h3>
                  <p>An archived email is identical to the original email in every respect and can, if necessary, be restored from the archive without losing any information.</p>
                </div>
              </div>
              
              <div className="compliance-badges">
                <div className="badge">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  GDPR Certified
                </div>
                <div className="badge">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                  Legal Hold
                </div>
                <div className="badge">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M11,17L6.5,12.5L7.91,11.09L11,14.18L16.59,8.59L18,10L11,17Z"/>
                  </svg>
                  Audit Ready
                </div>
                <div className="badge">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
                  </svg>
                  Made in Germany
                </div>
              </div>
            </div>

            <div className="cta-section">
              <h2 className="section-title">What Customers Are Saying</h2>
              <div className="testimonials-grid">
                <div className="testimonial-card" data-i="0">
                  <div className="quote-mark">"</div>
                  <p className="testimonial-text">From an IT administrator's perspective, MailStore is simple to install and easy to manage. When it comes to the archiving methods provided, the solution is enormously versatile and noticeably lightweight.</p>
                  <div className="testimonial-author">
                    <strong>Ashley Hunt</strong><br />
                    <span>Systems Coordinator, PGA of Australia</span>
                  </div>
                </div>
                <div className="testimonial-card" data-i="1">
                  <div className="quote-mark">"</div>
                  <p className="testimonial-text">MailStore Server offers a host of solutions that represent improvements over our previous approach to archiving and the system has simply been operating perfectly for a year and a half.</p>
                  <div className="testimonial-author">
                    <strong>Richard Edwards</strong><br />
                    <span>Senior Systems Administrator, Indianapolis Airport Authority</span>
                  </div>
                </div>
              </div>
              
              <div className="satisfaction-note">
                <h3>Customer Satisfaction Over 90%</h3>
                <p>Our customers are eligible for technical support as part of their Update & Support Service. Once a support case has been resolved, we invite customers to rate their experience. In recent years, overall customer satisfaction has been well over 90% each year.</p>
              </div>

              <h2 className="section-title">System Requirements & Technical Details</h2>
              <div className="tech-grid">
                <div className="tech-card" data-i="0">
                  <h3>Supported Operating Systems</h3>
                  <p>Microsoft Windows versions currently supported by Microsoft (32-bit and 64-bit versions)</p>
                </div>
                <div className="tech-card" data-i="1">
                  <h3>Infrastructure Requirements</h3>
                  <ul>
                    <li>No additional web server necessary (starts its own HTTP server)</li>
                    <li>Minimal system requirements</li>
                    <li>Microsoft SQL Server not necessary but can be used if required</li>
                    <li>Easy to set up in just a few minutes</li>
                  </ul>
                </div>
                <div className="tech-card" data-i="2">
                  <h3>Environment Compatibility</h3>
                  <ul>
                    <li>Runs smoothly in virtual environments such as VMware</li>
                    <li>Runs smoothly in terminal server environments</li>
                    <li>Low-maintenance operation</li>
                  </ul>
                </div>
                <div className="tech-card" data-i="3">
                  <h3>User Administration Options</h3>
                  <ul>
                    <li>Manual user creation</li>
                    <li>Active Directory integration</li>
                    <li>Generic LDAP integration</li>
                    <li>MDaemon, Kerio Connect, IceWarp integration</li>
                    <li>Google Workspace integration</li>
                    <li>Microsoft 365 integration</li>
                    <li>Application integration for external user databases</li>
                  </ul>
                </div>
              </div>
              
              <p className="cta-text">Join tens of thousands of organizations worldwide who trust MailStore Server for their email archiving needs.</p>
            </div>
          </div>

          <script dangerouslySetInnerHTML={{
            __html: `
              // Minimal intersection observer for enhanced animations
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };

              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                  }
                });
              }, observerOptions);

              document.querySelectorAll('#product-content .benefit-card, #product-content .feature-item').forEach(el => {
                observer.observe(el);
              });
            `
          }} />
        </section>
      </main>
      <Footer />
    </div>
  );
}