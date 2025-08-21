import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import "../../styles/tds-dr-content.css";

export default function DROrchestration() {
  // Scroll animation hooks for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.3 });
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          if (entry.target.classList.contains('stat-card')) {
            animateCounters(entry.target as HTMLElement);
          }
          if (entry.target.classList.contains('benefit-flow-item')) {
            animateProgressBar(entry.target as HTMLElement);
          }
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    // Animate benefit flow items
    document.querySelectorAll('.benefit-flow-item').forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('animate-in');
        animateProgressBar(el as HTMLElement);
      }, i * 200);
    });

    // Animate challenge/impact items
    document.querySelectorAll('.challenge-item, .impact-item').forEach((el, i) => {
      setTimeout(() => el.classList.add('animate-in'), i * 150);
    });

    // Enhanced interactions
    document.querySelectorAll('.stat-card').forEach(card => {
      card.addEventListener('click', () => {
        (card as HTMLElement).style.animation = 'pulse 0.6s ease-out';
        setTimeout(() => (card as HTMLElement).style.animation = '', 600);
      });
    });

    // Button interactions
    document.querySelectorAll('.tds-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        (btn as HTMLElement).style.transform = 'translateY(-3px) scale(1.02)';
      });
      btn.addEventListener('mouseleave', () => {
        (btn as HTMLElement).style.transform = 'translateY(0) scale(1)';
      });
    });

    // Feature card reveal
    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }, i * 100);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card').forEach(card => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(30px)';
      (card as HTMLElement).style.transition = 'all 0.6s ease-out';
      featureObserver.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      featureObserver.disconnect();
    };
  }, []);

  // Counter animation function
  const animateCounters = (container: HTMLElement) => {
    container.querySelectorAll('.animated-counter').forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count') || '0');
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        (counter as HTMLElement).textContent = target === 99.9 ? current.toFixed(1) + '%' :
          target === 24 ? Math.floor(current) + '/7' :
            Math.floor(current) + '%';
      }, 20);
      counter.classList.add('animate');
    });
  };

  // Progress bar animation function
  const animateProgressBar = (container: HTMLElement) => {
    container.querySelectorAll('.progress-indicator').forEach((indicator, i) => {
      setTimeout(() => indicator.classList.add('animate'), i * 300);
    });
  };
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Disaster Recovery Orchestration Solutions MENA - Automated DR Management | S2 Solutions"
        description="Advanced disaster recovery orchestration for MENA enterprises. Automated failover, dependency mapping, and DR workflow automation. Serving UAE, Saudi Arabia, and Middle East."
        keywords="disaster recovery orchestration MENA, automated DR UAE, failover automation Middle East, DR workflow Saudi Arabia, business continuity automation"
        canonicalUrl="https://s2mgt.com/solutions/disaster-recovery-orchestration"
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
            <motion.div 
              ref={heroAnimation.ref}
              initial={{ opacity: 0, y: 50 }}
              animate={heroAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-7xl mx-auto"
            >
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
                      <span className="relative">Disaster Recovery Solution</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        TDS Disaster Recovery Orchestrator
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Ensure maximum uptime for your Windows and Linux servers with comprehensive DR solutions featuring continuous replication and automated failover.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Disaster%20Recovery%20Consultation', '_blank')}
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
                          title="Disaster Recovery Solutions"
                        />
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="tds-content">
          {/* Introduction */}
          <section className="intro-section tds-section">
            <div className="tds-container">
              <h1 className="tds-section-title">TransitionManager <span className="highlight-blue">Disaster Recovery Orchestrator</span></h1>
              <p className="intro-text">Simplify disaster recovery by identifying gaps, mapping dependencies, and orchestrating failover plans. Respond confidently to any disruption with comprehensive features that ensure your organization is prepared, resilient, and ready to maintain continuity when it matters most.</p>
              
              <div className="tds-grid tds-grid-auto" style={{marginTop: '50px'}}>
                <div className="stat-card interactive-card animate-on-scroll">
                  <span className="stat-number animated-counter" data-count="99.9">0</span>
                  <p className="stat-label">System Uptime Target</p>
                </div>
                <div className="stat-card interactive-card animate-on-scroll">
                  <span className="stat-number animated-counter" data-count="75">0</span>
                  <p className="stat-label">Faster Recovery Times</p>
                </div>
                <div className="stat-card interactive-card animate-on-scroll">
                  <span className="stat-number animated-counter" data-count="24">0</span>
                  <p className="stat-label">Continuous Monitoring</p>
                </div>
              </div>
            </div>
          </section>

          {/* Importance */}
          <section className="tds-section">
            <div className="tds-container">
              <h2 className="tds-section-title">Why Disaster Recovery Matters</h2>
              <p className="tds-section-subtitle">A solid DR plan helps ensure business continuity, minimize financial loss, and support long-term success.</p>
              
              <div className="tds-grid tds-grid-3">
                <div className="importance-item interactive-card">
                  <div className="importance-icon">🛡️</div>
                  <h3 className="importance-title">Protect Your Data and Assets</h3>
                  <p className="importance-desc">Safeguard critical data and infrastructure from unexpected disruptions, ensuring your valuable business assets remain secure and accessible.</p>
                </div>
                <div className="importance-item interactive-card">
                  <div className="importance-icon">⚡</div>
                  <h3 className="importance-title">Minimize Downtime</h3>
                  <p className="importance-desc">Quickly restore systems and services to reduce business impact and maintain operational efficiency during critical situations.</p>
                </div>
                <div className="importance-item interactive-card">
                  <div className="importance-icon">✅</div>
                  <h3 className="importance-title">Ensure Compliance</h3>
                  <p className="importance-desc">Avoid penalties and maintain customer trust by meeting regulatory requirements and industry standards for data protection and business continuity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section className="challenges-section tds-section">
            <div className="tds-container">
              <h2 className="tds-section-title">Overcoming DR Challenges</h2>
              <p className="tds-section-subtitle">Traditional disaster recovery approaches face significant obstacles that can compromise business resilience.</p>
              
              <div className="tds-grid tds-grid-2">
                <div>
                  <h3 className="tds-subsection-title highlight-orange">Key Challenges</h3>
                  <div className="challenge-item"><div className="challenge-icon">1</div><div className="item-content"><h4>Incomplete Discovery Data</h4><p>Inaccurate or missing DR discovery data creates blind spots in recovery planning.</p></div></div>
                  <div className="challenge-item"><div className="challenge-icon">2</div><div className="item-content"><h4>Ineffective Failover Procedures</h4><p>Manual and error-prone failover processes that don't scale with business complexity.</p></div></div>
                  <div className="challenge-item"><div className="challenge-icon">3</div><div className="item-content"><h4>Manual Task Management</h4><p>Labor-intensive communication and task tracking that slows down recovery efforts.</p></div></div>
                  <div className="challenge-item"><div className="challenge-icon">4</div><div className="item-content"><h4>Complex System Dependencies</h4><p>Unclear relationships between systems make recovery planning difficult and risky.</p></div></div>
                  <div className="challenge-item"><div className="challenge-icon">5</div><div className="item-content"><h4>Compliance Tracking Gaps</h4><p>No automated regulatory compliance tracking creates audit and penalty risks.</p></div></div>
                </div>
                
                <div>
                  <h3 className="tds-subsection-title" style={{color: '#dc3545'}}>Business Impact</h3>
                  <div className="impact-item"><div className="impact-icon">⚠️</div><div className="item-content"><h4>Gaps in Recovery Plans</h4><p>Missing information increases recovery time and creates additional business risk.</p></div></div>
                  <div className="impact-item"><div className="impact-icon">⏱️</div><div className="item-content"><h4>Longer Failover Times</h4><p>Extended system restoration delays business recovery and customer service.</p></div></div>
                  <div className="impact-item"><div className="impact-icon">❌</div><div className="item-content"><h4>More Errors & Delays</h4><p>Manual processes lead to mistakes that compound recovery challenges.</p></div></div>
                  <div className="impact-item"><div className="impact-icon">🔄</div><div className="item-content"><h4>Extended Recovery Windows</h4><p>Restoring systems in the correct order takes significantly more time without automation.</p></div></div>
                  <div className="impact-item"><div className="impact-icon">💰</div><div className="item-content"><h4>Risk of Penalties</h4><p>Non-compliance exposure leads to regulatory fines and damaged reputation.</p></div></div>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions */}
          <section className="tds-section">
            <div className="tds-container">
              <h2 className="tds-section-title">How TransitionManager <span className="highlight-green">Solves</span> These Challenges</h2>
              <p className="tds-section-subtitle">Our comprehensive approach addresses each challenge with targeted solutions that streamline your disaster recovery process.</p>
              
              <div className="tds-grid tds-grid-3">
                <div className="solution-card interactive-card">
                  <div className="solution-icon">📊</div>
                  <h3 className="solution-title">Single Pane of Glass</h3>
                  <p className="solution-desc">Consolidate all IT data points into one comprehensive view, eliminating information gaps and providing complete visibility into your infrastructure.</p>
                </div>
                <div className="solution-card interactive-card">
                  <div className="solution-icon">🤖</div>
                  <h3 className="solution-title">Automated Failover</h3>
                  <p className="solution-desc">Guided recovery processes reduce errors and delays through intelligent automation that follows proven best practices.</p>
                </div>
                <div className="solution-card interactive-card">
                  <div className="solution-icon">👥</div>
                  <h3 className="solution-title">Centralized Task Management</h3>
                  <p className="solution-desc">Keep teams aligned in real-time with coordinated task management that allows everyone to focus on recovery efforts.</p>
                </div>
                <div className="solution-card interactive-card">
                  <div className="solution-icon">🗺️</div>
                  <h3 className="solution-title">Dependency Mapping</h3>
                  <p className="solution-desc">Clear visualization of system relationships enables better recovery planning and reduces the risk of cascading failures.</p>
                </div>
                <div className="solution-card interactive-card">
                  <div className="solution-icon">📋</div>
                  <h3 className="solution-title">Automated Compliance</h3>
                  <p className="solution-desc">Ensure audit readiness and regulatory alignment with automated compliance reporting that reduces manual overhead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* TransitionManager Benefits */}
          <section className="tds-section">
            <div className="tds-container">
              <h2 className="tds-section-title">Key Benefits of Using <span className="highlight-blue">TransitionManager</span> for DR</h2>
              <p className="tds-section-subtitle">Empowering Resilient Recovery with Data-Driven Precision</p>
              
              <div style={{background: '#f8f9fa', borderRadius: '12px', padding: '40px', margin: '40px 0'}}>
                <div className="benefit-flow-item">
                  <div><h4 style={{color: '#1a1a1a', fontWeight: '600', marginBottom: '5px'}}>TransitionManager Feature</h4><p style={{color: '#666', margin: '0'}}>Data-driven discovery and <span className="highlight-green">dependency mapping</span></p><div className="progress-indicator"><div className="progress-bar"></div></div></div>
                  <div className="benefit-arrow">→</div>
                  <div><h4 style={{color: '#1a1a1a', fontWeight: '600', marginBottom: '5px'}}>Benefit</h4><p style={{color: '#666', margin: '0'}}>Failover groups built on <span className="highlight-green">complete and accurate data</span></p></div>
                </div>
                <div className="benefit-flow-item">
                  <div><h4 style={{color: '#1a1a1a', fontWeight: '600', marginBottom: '5px'}}>TransitionManager Feature</h4><p style={{color: '#666', margin: '0'}}>Automated DR runbooks and <span className="highlight-green">event orchestration</span></p><div className="progress-indicator"><div className="progress-bar"></div></div></div>
                  <div className="benefit-arrow">→</div>
                  <div><h4 style={{color: '#1a1a1a', fontWeight: '600', marginBottom: '5px'}}>Benefit</h4><p style={{color: '#666', margin: '0'}}>Improved efficiency - <span className="highlight-green">75% reduction</span> in time & impact</p></div>
                </div>
                <div className="benefit-flow-item">
                  <div><h4 style={{color: '#1a1a1a', fontWeight: '600', marginBottom: '5px'}}>TransitionManager Feature</h4><p style={{color: '#666', margin: '0'}}>Accurate data and application <span className="highlight-green">dependency info</span></p><div className="progress-indicator"><div className="progress-bar"></div></div></div>
                  <div className="benefit-arrow">→</div>
                  <div><h4 style={{color: '#1a1a1a', fontWeight: '600', marginBottom: '5px'}}>Benefit</h4><p style={{color: '#666', margin: '0'}}>Easily determine "<span className="highlight-green">blast radius</span>" of a failed component</p></div>
                </div>
                <div className="benefit-flow-item">
                  <div><h4 style={{color: '#1a1a1a', fontWeight: '600', marginBottom: '5px'}}>TransitionManager Feature</h4><p style={{color: '#666', margin: '0'}}>Audit tracking of <span className="highlight-green">all DR tests and events</span></p><div className="progress-indicator"><div className="progress-bar"></div></div></div>
                  <div className="benefit-arrow">→</div>
                  <div><h4 style={{color: '#1a1a1a', fontWeight: '600', marginBottom: '5px'}}>Benefit</h4><p style={{color: '#666', margin: '0'}}>Metrics on actual <span className="highlight-green">adherence to RTO targets</span></p></div>
                </div>
                <div className="benefit-flow-item">
                  <div><h4 style={{color: '#1a1a1a', fontWeight: '600', marginBottom: '5px'}}>TransitionManager Feature</h4><p style={{color: '#666', margin: '0'}}>Customizable level-of-complexity <span className="highlight-green">views</span></p><div className="progress-indicator"><div className="progress-bar"></div></div></div>
                  <div className="benefit-arrow">→</div>
                  <div><h4 style={{color: '#1a1a1a', fontWeight: '600', marginBottom: '5px'}}>Benefit</h4><p style={{color: '#666', margin: '0'}}>App criticality, dependency maps and <span className="highlight-green">tailored reports</span></p></div>
                </div>
              </div>

              <div style={{marginTop: '50px'}}>
                <h3 style={{textAlign: 'center', color: '#1a1a1a', fontSize: '1.8rem', marginBottom: '40px'}}>Proven Results</h3>
                <div className="tds-grid tds-grid-auto">
                  <div className="stat-card interactive-card animate-on-scroll" style={{background: '#93C14F', color: 'white'}}>
                    <span className="stat-number animated-counter" data-count="75" style={{color: 'white'}}>0</span>
                    <p className="stat-label" style={{color: 'rgba(255,255,255,0.9)'}}>Reduction in Time</p>
                  </div>
                  <div className="stat-card interactive-card animate-on-scroll" style={{background: '#93C14F', color: 'white'}}>
                    <span className="stat-number animated-counter" data-count="98" style={{color: 'white'}}>0</span>
                    <p className="stat-label" style={{color: 'rgba(255,255,255,0.9)'}}>Fewer Manual Errors</p>
                  </div>
                  <div className="stat-card interactive-card animate-on-scroll" style={{background: '#93C14F', color: 'white'}}>
                    <span className="stat-number" style={{color: 'white', fontSize: '2rem'}}>Hit RTO</span>
                    <p className="stat-label" style={{color: 'rgba(255,255,255,0.9)'}}>Targets</p>
                  </div>
                  <div className="stat-card interactive-card animate-on-scroll" style={{background: '#93C14F', color: 'white'}}>
                    <span className="stat-number" style={{color: 'white', fontSize: '1.8rem'}}>Improved</span>
                    <p className="stat-label" style={{color: 'rgba(255,255,255,0.9)'}}>Validated Data</p>
                  </div>
                  <div className="stat-card interactive-card animate-on-scroll" style={{background: '#93C14F', color: 'white'}}>
                    <span className="stat-number animated-counter" data-count="50" style={{color: 'white'}}>0</span>
                    <p className="stat-label" style={{color: 'rgba(255,255,255,0.9)'}}>Reduction in Planning</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="features-section tds-section">
            <div className="tds-container">
              <h2 className="tds-section-title">Comprehensive DR Capabilities</h2>
              <p className="tds-section-subtitle">Whether you have no DR plan or full DR capability, TransitionManager scales with your organization's needs.</p>
              
              <div className="tds-grid tds-grid-3">
                <div className="feature-card interactive-card">
                  <div className="feature-icon">🔍</div>
                  <h3 className="feature-title">Assess Current DR Readiness</h3>
                  <p className="feature-desc">Identify gaps in your data and disaster recovery plan, ensuring your organization is prepared for unexpected disruptions with comprehensive assessment tools.</p>
                </div>
                <div className="feature-card interactive-card">
                  <div className="feature-icon">🔗</div>
                  <h3 className="feature-title">Map Critical Dependencies</h3>
                  <p className="feature-desc">Understand relationships across systems, applications, and infrastructure to create a more resilient and effective DR strategy.</p>
                </div>
                <div className="feature-card interactive-card">
                  <div className="feature-icon">⚡</div>
                  <h3 className="feature-title">Simplify Failover Processes</h3>
                  <p className="feature-desc">Streamline and automate failover steps, reducing recovery time and minimizing manual errors during critical business situations.</p>
                </div>
                <div className="feature-card interactive-card">
                  <div className="feature-icon">🤝</div>
                  <h3 className="feature-title">Enhance Team Collaboration</h3>
                  <p className="feature-desc">Provide a clear, centralized view of DR plans that makes it easier to align teams on roles, responsibilities, and recovery procedures.</p>
                </div>
                <div className="feature-card interactive-card">
                  <div className="feature-icon">📈</div>
                  <h3 className="feature-title">Adapt and Scale with Ease</h3>
                  <p className="feature-desc">Whether starting from scratch or refining advanced DR plans, TransitionManager scales with your organization's evolving needs and complexity.</p>
                </div>
                <div className="feature-card interactive-card">
                  <div className="feature-icon">🧪</div>
                  <h3 className="feature-title">Test and Validate Regularly</h3>
                  <p className="feature-desc">Conduct DR drills and simulations to ensure your team is ready and your recovery plan works as expected when it matters most.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-section tds-section-small">
            <div className="tds-container">
              <h2 className="cta-title">Ready to Transform Your <span className="highlight-blue">Disaster Recovery?</span></h2>
              <p className="cta-subtitle">Don't wait for a disaster to test your recovery capabilities. Start building resilience today with TransitionManager.</p>
              <div className="cta-buttons">
                <Button 
                  size="lg" 
                  className="tds-btn tds-btn-primary"
                  onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=DR%20Orchestration%20Consultation', '_blank')}
                >
                  Get Started Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="tds-btn tds-btn-secondary"
                  onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=DR%20Orchestration%20Demo', '_blank')}
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}