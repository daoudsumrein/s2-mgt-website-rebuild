import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Laptop, AlertTriangle, Eye, Lock, Zap, Cloud, Settings, CheckCircle, Users, Target } from "lucide-react";
import { useEffect } from "react";

const features = [
  {
    icon: Shield,
    title: "Proactive, Predictive, and Multi-layered Security",
    description: "Advanced threat protection with multiple defense layers"
  },
  {
    icon: Lock,
    title: "Multi-Shield Protection",
    description: "Comprehensive security across all attack vectors"
  },
  {
    icon: Eye,
    title: "Patented Evasion Shield Technology",
    description: "Proprietary technology to detect evasion techniques"
  },
  {
    icon: AlertTriangle,
    title: "Script Shield",
    description: "Advanced protection against malicious scripts"
  },
  {
    icon: Cloud,
    title: "Cloud-Based Management Console",
    description: "Intuitive, award-winning management interface"
  },
  {
    icon: Zap,
    title: "Cloud-Driven Processing",
    description: "Real-time machine learning and cloud computing power"
  },
  {
    icon: Settings,
    title: "Automated Updates",
    description: "Continuous protection with automatic security updates"
  },
  {
    icon: CheckCircle,
    title: "Automated Alerting and Remediation",
    description: "Instant response and automated threat remediation"
  },
  {
    icon: Laptop,
    title: "Device Isolation",
    description: "Quarantine compromised devices to prevent spread"
  },
  {
    icon: Users,
    title: "Process Tree Visualization",
    description: "Visual mapping of process relationships and activities"
  }
];

const deliverables = [
  "Fully Remote Endpoint Management and Control",
  "Highly Automated, Low-Cost Operation",
  "Hassle-Free Deployment",
  "Superior Efficacy Against Zero-Day Threats",
  "Reduced Infections and Incidents",
  "Empowered Human Defenders",
  "Fulfillment of Cyber-Insurance Requirements",
  "Simplified Security",
  "Holistic Security Portfolio",
  "High-Efficacy Products and Compliant Experience"
];

export default function EndpointProtection() {
  useEffect(() => {
    // Counter animation for trust badge numbers
    function animateCounter(element: HTMLElement, target: number, suffix = '', duration = 2000) {
      const startValue = 0;
      const startTime = performance.now();
      
      function updateCounter(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (target - startValue) * easeOut);
        
        element.textContent = currentValue + suffix;
        element.classList.add('counting');
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          element.classList.remove('counting');
        }
      }
      
      requestAnimationFrame(updateCounter);
    }

    // Intersection Observer for trust badges animation
    const trustBadges = document.querySelector('.trust-badges');
    let hasAnimated = false;

    if (trustBadges) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            
            const numberElements = entry.target.querySelectorAll('.trust-number');
            
            numberElements.forEach((el, index) => {
              const target = el.getAttribute('data-target');
              const suffix = el.getAttribute('data-suffix') || '';
              
              // Handle special case for "zero"
              if (target?.toLowerCase() === 'zero') {
                setTimeout(() => {
                  el.classList.add('counting');
                  setTimeout(() => {
                    el.classList.remove('counting');
                  }, 100);
                }, index * 200);
                return;
              }
              
              // Delay each counter for staggered effect
              setTimeout(() => {
                animateCounter(el as HTMLElement, parseInt(target || '0'), suffix);
              }, index * 200);
            });
          }
        });
      }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
      });

      observer.observe(trustBadges);
      
      // Cleanup observer on unmount
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Endpoint Protection with EDR Solutions | Advanced Security for MENA Enterprises"
        description="Comprehensive endpoint protection with EDR functionality for MENA region. Real-time threat detection, automated remediation, and cloud-based management for enterprise endpoints."
        keywords="endpoint protection EDR MENA, endpoint security UAE, cybersecurity Middle East, threat protection Saudi Arabia, automated remediation"
        canonicalUrl="https://s2mgt.com/solutions/endpoint-protection"
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
                        Endpoint Protection with EDR
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Comprehensive endpoint security with detection and response capabilities for real-time threat protection.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Endpoint%20Protection%20Consultation', '_blank')}>
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

        <section id="product-content">
          <style dangerouslySetInnerHTML={{__html: `
            #product-content {
              --accent: #1a6aff;
              --bg: #0b1020;
              --card: rgba(255,255,255,0.08);
              --border: rgba(255,255,255,0.18);
              --text-primary: #ffffff;
              --text-secondary: #a0a8b8;
              background: var(--bg);
              color: var(--text-primary);
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              position: relative;
              overflow: hidden;
              padding: 4rem 1rem;
            }

            #product-content::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: radial-gradient(circle at 20% 50%, rgba(26, 106, 255, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(26, 106, 255, 0.05) 0%, transparent 50%);
              animation: float 8s ease-in-out infinite;
              pointer-events: none;
            }

            .container {
              max-width: 1200px;
              margin: 0 auto;
              position: relative;
              z-index: 1;
            }

            .hero-section {
              text-align: center;
              margin-bottom: 5rem;
              opacity: 0;
              transform: translateY(50px);
              animation: fadeSlideUp 0.8s ease-out 0.2s forwards;
            }

            .hero-title {
              font-size: clamp(2.5rem, 5vw, 4rem);
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 1.5rem;
            }

            .hero-subtitle {
              font-size: 1.25rem;
              color: var(--text-secondary);
              max-width: 600px;
              margin: 0 auto 2rem;
            }

            .benefits-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              margin-bottom: 5rem;
            }

            .benefit-card {
              background: var(--card);
              backdrop-filter: blur(16px);
              border: 1px solid var(--border);
              border-radius: 1rem;
              padding: 2rem;
              transition: all 0.3s ease;
              opacity: 0;
              transform: translateY(50px);
              animation: fadeSlideUp 0.8s ease-out forwards;
            }

            .benefit-card[data-i="0"] { animation-delay: calc(0.3s + 0 * 0.1s); }
            .benefit-card[data-i="1"] { animation-delay: calc(0.3s + 1 * 0.1s); }
            .benefit-card[data-i="2"] { animation-delay: calc(0.3s + 2 * 0.1s); }
            .benefit-card[data-i="3"] { animation-delay: calc(0.3s + 3 * 0.1s); }

            .benefit-card:hover {
              transform: translateY(-10px) scale(1.02);
              box-shadow: 0 20px 40px rgba(26, 106, 255, 0.2);
            }

            .benefit-icon {
              width: 3rem;
              height: 3rem;
              color: var(--accent);
              margin-bottom: 1.5rem;
              transition: transform 0.3s ease;
            }

            .benefit-card:hover .benefit-icon {
              animation: iconTilt 0.6s ease-in-out;
            }

            .benefit-title {
              font-size: 1.25rem;
              font-weight: 600;
              margin-bottom: 1rem;
              color: var(--text-primary);
            }

            .benefit-description {
              color: var(--text-secondary);
              line-height: 1.7;
            }

            .feature-section {
              margin-bottom: 5rem;
              opacity: 0;
              transform: translateY(50px);
              animation: fadeSlideUp 0.8s ease-out 0.6s forwards;
            }

            .section-title {
              font-size: 2.5rem;
              font-weight: 700;
              text-align: center;
              margin-bottom: 1rem;
              background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .section-subtitle {
              text-align: center;
              color: var(--text-secondary);
              margin-bottom: 3rem;
              max-width: 800px;
              margin-left: auto;
              margin-right: auto;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 1.5rem;
              margin-bottom: 4rem;
            }

            .feature-item {
              background: var(--card);
              backdrop-filter: blur(12px);
              border: 1px solid var(--border);
              border-radius: 0.75rem;
              padding: 1.5rem;
              display: flex;
              align-items: flex-start;
              gap: 1rem;
              transition: all 0.3s ease;
              opacity: 0;
              transform: translateY(30px);
              animation: fadeSlideUp 0.8s ease-out forwards;
            }

            .feature-item[data-i="0"] { animation-delay: calc(0.7s + 0 * 0.1s); }
            .feature-item[data-i="1"] { animation-delay: calc(0.7s + 1 * 0.1s); }
            .feature-item[data-i="2"] { animation-delay: calc(0.7s + 2 * 0.1s); }
            .feature-item[data-i="3"] { animation-delay: calc(0.7s + 3 * 0.1s); }
            .feature-item[data-i="4"] { animation-delay: calc(0.7s + 4 * 0.1s); }
            .feature-item[data-i="5"] { animation-delay: calc(0.7s + 5 * 0.1s); }
            .feature-item[data-i="6"] { animation-delay: calc(0.7s + 6 * 0.1s); }
            .feature-item[data-i="7"] { animation-delay: calc(0.7s + 7 * 0.1s); }

            .feature-item:hover {
              transform: translateY(-5px);
              border-color: var(--accent);
            }

            .feature-icon {
              width: 2rem;
              height: 2rem;
              color: var(--accent);
              flex-shrink: 0;
              transition: transform 0.3s ease;
            }

            .feature-item:hover .feature-icon {
              transform: rotate(5deg);
            }

            .feature-content h4 {
              font-size: 1.1rem;
              font-weight: 600;
              margin-bottom: 0.5rem;
              color: var(--text-primary);
            }

            .feature-content p {
              color: var(--text-secondary);
              font-size: 0.95rem;
            }

            .protection-stages {
              background: var(--card);
              backdrop-filter: blur(16px);
              border: 1px solid var(--border);
              border-radius: 1rem;
              padding: 3rem 2rem;
              margin-bottom: 4rem;
              opacity: 0;
              transform: translateY(50px);
              animation: fadeSlideUp 0.8s ease-out 0.8s forwards;
            }

            .stages-list {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              gap: 2rem;
              margin-top: 2rem;
            }

            .stage-item {
              display: flex;
              align-items: flex-start;
              gap: 1rem;
            }

            .stage-number {
              background: var(--accent);
              color: var(--bg);
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 700;
              flex-shrink: 0;
            }

            .stage-content h4 {
              font-weight: 600;
              margin-bottom: 0.5rem;
            }

            .stage-content p {
              color: var(--text-secondary);
              font-size: 0.95rem;
            }

            .cta-section {
              text-align: center;
              background: var(--card);
              backdrop-filter: blur(16px);
              border: 1px solid var(--border);
              border-radius: 1rem;
              padding: 3rem 2rem;
              opacity: 0;
              transform: translateY(50px);
              animation: fadeSlideUp 0.8s ease-out 1s forwards;
            }

            .cta-title {
              font-size: 2rem;
              font-weight: 700;
              margin-bottom: 1rem;
            }

            .cta-description {
              color: var(--text-secondary);
              margin-bottom: 2rem;
              max-width: 600px;
              margin-left: auto;
              margin-right: auto;
            }

            .trust-badges {
              display: flex;
              justify-content: center;
              gap: 2rem;
              margin-top: 2rem;
              flex-wrap: wrap;
            }

            .trust-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.5rem;
            }

            .trust-number {
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--accent);
              min-height: 2rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .trust-number.counting {
              animation: pulse 0.1s ease-in-out;
            }

            .trust-label {
              font-size: 0.9rem;
              color: var(--text-secondary);
            }

            @keyframes fadeSlideUp {
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
              0%, 100% { transform: rotate(0deg); }
              25% { transform: rotate(-5deg); }
              75% { transform: rotate(5deg); }
            }

            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }

            @media (max-width: 768px) {
              #product-content {
                padding: 2rem 1rem;
              }
              
              .hero-title {
                font-size: 2.5rem;
              }
              
              .benefits-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
              }
              
              .features-grid {
                grid-template-columns: 1fr;
              }
              
              .stages-list {
                grid-template-columns: 1fr;
              }
              
              .trust-badges {
                gap: 1rem;
              }
            }
          `}} />

          <div className="container">
            <div className="hero-section">
              <h1 className="hero-title">Advanced Endpoint Protection</h1>
              <p className="hero-subtitle">Secure users anywhere with AI-powered, real-time threat detection and automated remediation against malware, ransomware, phishing, cryptomining, and zero-day attacks.</p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card" data-i="0">
                <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <h3 className="benefit-title">Multi-Shield Protection</h3>
                <p className="benefit-description">Seven-layer defense including real-time behavior, core system, web threat, identity, phishing, evasion, and offline shields. Patented Evasion Shield detects file-based, fileless, obfuscated, and encrypted attacks.</p>
              </div>

              <div className="benefit-card" data-i="1">
                <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <h3 className="benefit-title">Real-Time AI Defense</h3>
                <p className="benefit-description">Built on BrightCloud Threat Intelligence platform, combining artificial intelligence and machine learning to combat rapidly shifting threats. Trusted by 140+ network, security, and technology vendors worldwide.</p>
              </div>

              <div className="benefit-card" data-i="2">
                <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                </svg>
                <h3 className="benefit-title">Cloud-Based Management</h3>
                <p className="benefit-description">Award-winning, intuitive management console with RESTful API and 40+ third-party integrations. Cloud processing handles intensive malware analysis, with agent updates in just 3 seconds.</p>
              </div>

              <div className="benefit-card" data-i="3">
                <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 className="benefit-title">Automated Operations</h3>
                <p className="benefit-description">Purpose-built for managed service providers and SMBs. No signatures or definitions to update—threat prevention occurs in real-time from the cloud with reduced false positives.</p>
              </div>
            </div>

            <div className="feature-section">
              <h2 className="section-title">Advanced Security Features</h2>
              <p className="section-subtitle">Powered by world-class threat intelligence, trusted by 140+ network, security, and technology vendors worldwide.</p>
              
              <div className="features-grid">
                <div className="feature-item" data-i="0">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <div className="feature-content">
                    <h4>Behavioral Analysis</h4>
                    <p>Advanced behavior monitoring detects and blocks unknown threats in real-time without signature updates.</p>
                  </div>
                </div>

                <div className="feature-item" data-i="1">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                  <div className="feature-content">
                    <h4>Script Shield Protection</h4>
                    <p>Prevents malicious behaviors in PowerShell, JavaScript, and VBScript environments with advanced script analysis.</p>
                  </div>
                </div>

                <div className="feature-item" data-i="2">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div className="feature-content">
                    <h4>Device Isolation</h4>
                    <p>Instantly isolate compromised endpoints while preserving essential communications for rapid containment.</p>
                  </div>
                </div>

                <div className="feature-item" data-i="3">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                  </svg>
                  <div className="feature-content">
                    <h4>Process Tree Visualization</h4>
                    <p>Forensic-level insights with clear visualization of threat origins and pathways for effective investigation.</p>
                  </div>
                </div>

                <div className="feature-item" data-i="4">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div className="feature-content">
                    <h4>Offline Protection</h4>
                    <p>Monitors, journals, and contains infections even when endpoints are disconnected from the network.</p>
                  </div>
                </div>

                <div className="feature-item" data-i="5">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  <div className="feature-content">
                    <h4>Automated Rollback</h4>
                    <p>Automatically restore systems to pre-infected state when threats are identified and contained.</p>
                  </div>
                </div>

                <div className="feature-item" data-i="6">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
                  </svg>
                  <div className="feature-content">
                    <h4>Cyber Insurance Ready</h4>
                    <p>Lightweight enhancements designed to aid in fulfilling cyber-insurance requirements with compliance focus.</p>
                  </div>
                </div>

                <div className="feature-item" data-i="7">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
                  </svg>
                  <div className="feature-content">
                    <h4>Cloud Intelligence</h4>
                    <p>Intensive malware discovery and analysis performed in the cloud, eliminating local resource impact and ensuring real-time protection.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-section">
              <h2 className="section-title">Comprehensive Cyber Resilience</h2>
              <p className="section-subtitle">Build organizational resilience with prevention, detection, response, recovery, investigation, and compliance capabilities in one unified platform.</p>
              
              <div className="features-grid">
                <div className="feature-item" data-i="0">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  <div className="feature-content">
                    <h4>Automated Reporting</h4>
                    <p>Regular reporting scheduled for content, timing, and circulation with visibility across multiple sites and locations.</p>
                  </div>
                </div>

                <div className="feature-item" data-i="1">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div className="feature-content">
                    <h4>Regulatory Compliance</h4>
                    <p>Help organizations adapt and comply with changing regulations through comprehensive security controls.</p>
                  </div>
                </div>

                <div className="feature-item" data-i="2">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div className="feature-content">
                    <h4>Transparent Operations</h4>
                    <p>Agent updates occur in just 3 seconds and are completely transparent to users with minimal system impact.</p>
                  </div>
                </div>

                <div className="feature-item" data-i="3">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  <div className="feature-content">
                    <h4>MSP & SMB Ready</h4>
                    <p>Purpose-built solutions specifically designed for managed service providers and small-to-medium businesses.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="protection-stages">
              <h2 className="section-title">Three-Stage Protection Model</h2>
              <p className="section-subtitle">Unlike traditional single-opportunity detection approaches, our next-generation protection provides three-stage defense with reduced false positives and no signature updates required.</p>
              
              <div className="stages-list">
                <div className="stage-item">
                  <div className="stage-number">1</div>
                  <div className="stage-content">
                    <h4>Predictive Prevention</h4>
                    <p>Prevents malware infiltration and stops unknown files from executing if they display malicious behavior patterns.</p>
                  </div>
                </div>

                <div className="stage-item">
                  <div className="stage-number">2</div>
                  <div className="stage-content">
                    <h4>Monitor & Journal</h4>
                    <p>Continuously monitors and journals file activity until proper classification, maintaining detailed forensic records.</p>
                  </div>
                </div>

                <div className="stage-item">
                  <div className="stage-number">3</div>
                  <div className="stage-content">
                    <h4>Automated Remediation</h4>
                    <p>Automatically rolls back system changes to pre-infected state when threats are confirmed and contained.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <h2 className="cta-title">Award-Winning Endpoint Security</h2>
              <p className="cta-description">Join organizations worldwide leveraging OpenText's unified cybersecurity platform. From prevention and detection to response, recovery, and compliance—build cyber resilience with fewer infections, security incidents, and productivity losses.</p>
              
              <div className="trust-badges">
                <div className="trust-item">
                  <div className="trust-number" data-target="140" data-suffix="+">0</div>
                  <div className="trust-label">Technology Vendors Trust BrightCloud</div>
                </div>
                <div className="trust-item">
                  <div className="trust-number" data-target="40" data-suffix="+">0</div>
                  <div className="trust-label">Third-Party Integrations</div>
                </div>
                <div className="trust-item">
                  <div className="trust-number" data-target="3" data-suffix="sec">0</div>
                  <div className="trust-label">Agent Update Time</div>
                </div>
                <div className="trust-item">
                  <div className="trust-number" data-target="7" data-suffix="">0</div>
                  <div className="trust-label">Protection Shields</div>
                </div>
                <div className="trust-item">
                  <div className="trust-number" data-target="zero" data-suffix="">Zero</div>
                  <div className="trust-label">Signature Updates Required</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}