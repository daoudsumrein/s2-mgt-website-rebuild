import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useEffect, useState } from "react";

export default function Services() {
  const [cardsArranged, setCardsArranged] = useState(false);

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
      }
    };

    // Navbar scroll effect
    const handleNavbarScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    // Scatter service cards initially
    const scatterServiceCards = () => {
      const cards = document.querySelectorAll('.service-card') as NodeListOf<HTMLElement>;
      
      cards.forEach((card, index) => {
        card.classList.add('scattered');
        
        // Generate random positions within viewport
        const randomX = Math.random() * (window.innerWidth - 350);
        const randomY = Math.random() * (window.innerHeight - 200);
        const randomRotation = (Math.random() - 0.5) * 60; // -30 to 30 degrees
        const randomScale = 0.6 + Math.random() * 0.4; // 0.6 to 1.0
        
        card.style.left = randomX + 'px';
        card.style.top = randomY + 'px';
        card.style.transform = `rotate(${randomRotation}deg) scale(${randomScale})`;
        card.style.opacity = '0.3';
        
        // Add entrance delay
        setTimeout(() => {
          card.style.opacity = '0.7';
        }, index * 150);
      });
    };

    // Arrange service cards into grid
    const arrangeServiceCards = () => {
      const cards = document.querySelectorAll('.service-card') as NodeListOf<HTMLElement>;
      
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.remove('scattered');
          card.classList.add('arranged');
          card.style.left = '';
          card.style.top = '';
          card.style.transform = '';
          card.style.opacity = '';
          setCardsArranged(true);
        }, index * 200);
      });
    };

    // Setup scroll animations
    const setupScrollAnimations = () => {
      const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      };

      // Services section observer
      const servicesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            arrangeServiceCards();
            servicesObserver.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const servicesSection = document.querySelector('.services');
      if (servicesSection) {
        servicesObserver.observe(servicesSection);
      }

      // Stats section observer with counter animation
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      const statsSection = document.querySelector('.stats');
      if (statsSection) {
        statsObserver.observe(statsSection);
      }
    };

    // Counter animation for stats
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = counter.textContent;
        if (target.includes('%')) {
          animateNumber(counter, 0, 99.9, 2000, '%');
        } else if (target.includes('+')) {
          animateNumber(counter, 0, 500, 2000, '+');
        } else if (target.includes('min')) {
          animateNumber(counter, 0, 15, 1500, 'min');
        } else if (target.includes('/')) {
          counter.textContent = '24/7';
        }
      });
    };

    const animateNumber = (element, start, end, duration, suffix = '') => {
      const startTime = performance.now();
      
      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = start + (end - start) * easeOutCubic(progress);
        
        if (suffix === '%') {
          element.textContent = current.toFixed(1) + suffix;
        } else if (suffix === 'min') {
          element.textContent = Math.round(current) + suffix;
        } else {
          element.textContent = Math.round(current) + suffix;
        }
        
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };
      
      requestAnimationFrame(update);
    };

    const easeOutCubic = (t) => {
      return 1 - Math.pow(1 - t, 3);
    };

    // Initialize everything
    createParticles();
    setupScrollAnimations();
    
    // Scatter service cards initially after a brief delay
    setTimeout(() => {
      scatterServiceCards();
    }, 500);

    window.addEventListener('scroll', handleNavbarScroll);

    return () => {
      window.removeEventListener('scroll', handleNavbarScroll);
    };
  }, []);

  return (
    <>
      <SEOHead 
        title="Professional IT Services | S2 Management Solutions"
        description="Comprehensive IT services including consultancy, solutions architecture, professional services, SLAs, and application modernization. Expert guidance for your digital transformation."
        keywords="IT consultancy, solutions architecture, professional services, application modernization, disaster recovery SLA, UAE IT services"
      />
      
      <div 
        className="min-h-screen text-white overflow-x-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}
      >
        {/* Animated background particles */}
        <div 
          id="particles" 
          className="fixed w-full h-full z-[-1]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(29, 78, 216, 0.1) 0%, transparent 50%)'
          }}
        ></div>

        {/* Navigation */}
        <nav 
          id="navbar"
          className="fixed top-0 w-full px-8 py-4 bg-[rgba(15,15,35,0.8)] backdrop-blur-[10px] border-b border-[rgba(59,130,246,0.2)] z-[1000] transition-all duration-300"
        >
          <div className="flex justify-between items-center max-w-[1400px] mx-auto">
            <div 
              className="text-[1.8rem] font-extrabold bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              S2
            </div>
            <ul className="flex gap-8 list-none">
              <li><a href="#home" className="text-[#e2e8f0] no-underline font-medium transition-all duration-300 relative hover:text-[#3b82f6] hover:-translate-y-0.5">Home</a></li>
              <li><a href="#services" className="text-[#e2e8f0] no-underline font-medium transition-all duration-300 relative hover:text-[#3b82f6] hover:-translate-y-0.5">Services</a></li>
              <li><a href="#about" className="text-[#e2e8f0] no-underline font-medium transition-all duration-300 relative hover:text-[#3b82f6] hover:-translate-y-0.5">About</a></li>
              <li><a href="#contact" className="text-[#e2e8f0] no-underline font-medium transition-all duration-300 relative hover:text-[#3b82f6] hover:-translate-y-0.5">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section 
          id="home"
          className="h-screen flex items-center justify-center text-center relative overflow-hidden"
        >
          <div className="max-w-[800px] z-[2] animate-fade-in">
            <h1 
              className="text-4xl md:text-6xl font-black mb-6 leading-[1.2] bg-gradient-to-br from-white via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent"
              style={{ 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
              }}
            >
              Cybersecurity & IT Excellence
            </h1>
            <p className="text-xl mb-8 text-[#cbd5e1] leading-relaxed">
              S2 Management Solutions delivers strategic, high-impact technology solutions that empower resilient and secure IT operations. Your trusted partner in building the foundation for lasting success.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-10 py-4 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] text-white no-underline rounded-full font-semibold text-lg transition-all duration-400 shadow-[0_10px_30px_rgba(59,130,246,0.3)] relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(59,130,246,0.4)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent -translate-x-full transition-transform duration-500 hover:translate-x-full"></span>
              Start Your Transformation
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services py-24 px-8 max-w-[1400px] mx-auto">
          <h2 
            className="text-center text-5xl font-extrabold mb-16 bg-gradient-to-br from-white to-[#3b82f6] bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Our Expertise
          </h2>
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(59,130,246,0.2)] rounded-[20px] p-10 transition-all duration-[1.2s] cubic-bezier-[0.4,0,0.2,1] relative overflow-hidden cursor-pointer opacity-0 transform rotate-[15deg] scale-[0.8] hover:-translate-y-3 hover:bg-[rgba(59,130,246,0.1)] hover:border-[rgba(59,130,246,0.4)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transform scale-x-0 transition-transform duration-400 hover:scale-x-100"></div>
              <div className="service-icon w-[60px] h-[60px] mb-6 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-[15px] flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:rotate-[5deg]">
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Strategic Consultancy</h3>
              <p className="text-[#cbd5e1] leading-relaxed">Expert, vendor-neutral guidance designed around your unique challenges. We lead with purpose, not products, delivering practical solutions aligned with your long-term vision.</p>
            </div>
            
            <div className="service-card bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(59,130,246,0.2)] rounded-[20px] p-10 transition-all duration-[1.2s] cubic-bezier-[0.4,0,0.2,1] relative overflow-hidden cursor-pointer opacity-0 transform rotate-[15deg] scale-[0.8] hover:-translate-y-3 hover:bg-[rgba(59,130,246,0.1)] hover:border-[rgba(59,130,246,0.4)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transform scale-x-0 transition-transform duration-400 hover:scale-x-100"></div>
              <div className="service-icon w-[60px] h-[60px] mb-6 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-[15px] flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:rotate-[5deg]">
                🏗️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Solutions Architecture</h3>
              <p className="text-[#cbd5e1] leading-relaxed">Robust, scalable, and future-proof IT environments. Our certified architects bridge business objectives with technology strategies for mission-critical performance.</p>
            </div>
            
            <div className="service-card bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(59,130,246,0.2)] rounded-[20px] p-10 transition-all duration-[1.2s] cubic-bezier-[0.4,0,0.2,1] relative overflow-hidden cursor-pointer opacity-0 transform rotate-[15deg] scale-[0.8] hover:-translate-y-3 hover:bg-[rgba(59,130,246,0.1)] hover:border-[rgba(59,130,246,0.4)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transform scale-x-0 transition-transform duration-400 hover:scale-x-100"></div>
              <div className="service-icon w-[60px] h-[60px] mb-6 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-[15px] flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:rotate-[5deg]">
                ⚡
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Professional Services</h3>
              <p className="text-[#cbd5e1] leading-relaxed">Comprehensive, milestone-driven project execution from assessment to deployment. Seamless delivery with minimal disruption, on time and within budget.</p>
            </div>
            
            <div className="service-card bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(59,130,246,0.2)] rounded-[20px] p-10 transition-all duration-[1.2s] cubic-bezier-[0.4,0,0.2,1] relative overflow-hidden cursor-pointer opacity-0 transform rotate-[15deg] scale-[0.8] hover:-translate-y-3 hover:bg-[rgba(59,130,246,0.1)] hover:border-[rgba(59,130,246,0.4)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transform scale-x-0 transition-transform duration-400 hover:scale-x-100"></div>
              <div className="service-icon w-[60px] h-[60px] mb-6 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-[15px] flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:rotate-[5deg]">
                🛡️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Disaster Recovery SLAs</h3>
              <p className="text-[#cbd5e1] leading-relaxed">Business-critical DR commitments with customizable SLA tiers. Guaranteed response times, 24/7 support, and operational continuity when it matters most.</p>
            </div>
            
            <div className="service-card bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(59,130,246,0.2)] rounded-[20px] p-10 transition-all duration-[1.2s] cubic-bezier-[0.4,0,0.2,1] relative overflow-hidden cursor-pointer opacity-0 transform rotate-[15deg] scale-[0.8] hover:-translate-y-3 hover:bg-[rgba(59,130,246,0.1)] hover:border-[rgba(59,130,246,0.4)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transform scale-x-0 transition-transform duration-400 hover:scale-x-100"></div>
              <div className="service-icon w-[60px] h-[60px] mb-6 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-[15px] flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:rotate-[5deg]">
                🚀
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Application Modernization</h3>
              <p className="text-[#cbd5e1] leading-relaxed">Seamless migration from legacy systems to modern, secure platforms. Minimal downtime, enhanced security, and reduced technical debt.</p>
            </div>
            
            <div className="service-card bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(59,130,246,0.2)] rounded-[20px] p-10 transition-all duration-[1.2s] cubic-bezier-[0.4,0,0.2,1] relative overflow-hidden cursor-pointer opacity-0 transform rotate-[15deg] scale-[0.8] hover:-translate-y-3 hover:bg-[rgba(59,130,246,0.1)] hover:border-[rgba(59,130,246,0.4)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transform scale-x-0 transition-transform duration-400 hover:scale-x-100"></div>
              <div className="service-icon w-[60px] h-[60px] mb-6 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-[15px] flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:rotate-[5deg]">
                🔒
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Data Protection</h3>
              <p className="text-[#cbd5e1] leading-relaxed">Comprehensive cybersecurity and data protection strategies that safeguard your digital assets while enabling business growth and innovation.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats bg-[rgba(59,130,246,0.1)] backdrop-blur-[10px] py-16 px-8 my-16">
          <div className="stats-container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div className="stat-item animate-fade-in">
              <span 
                className="stat-number text-5xl font-black bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent block"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                99.9%
              </span>
              <div className="stat-label text-lg text-[#cbd5e1] mt-2">Uptime Guarantee</div>
            </div>
            <div className="stat-item animate-fade-in">
              <span 
                className="stat-number text-5xl font-black bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent block"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                24/7
              </span>
              <div className="stat-label text-lg text-[#cbd5e1] mt-2">Support Coverage</div>
            </div>
            <div className="stat-item animate-fade-in">
              <span 
                className="stat-number text-5xl font-black bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent block"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                500+
              </span>
              <div className="stat-label text-lg text-[#cbd5e1] mt-2">Projects Delivered</div>
            </div>
            <div className="stat-item animate-fade-in">
              <span 
                className="stat-number text-5xl font-black bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent block"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                15min
              </span>
              <div className="stat-label text-lg text-[#cbd5e1] mt-2">Response Time</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact py-24 px-8 text-center max-w-[800px] mx-auto">
          <h2 
            className="text-4xl font-extrabold mb-8 bg-gradient-to-br from-white to-[#3b82f6] bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl text-[#cbd5e1] mb-12 leading-relaxed">
            Whether you're navigating complex challenges or pursuing ambitious growth, S2 is your trusted partner in building the technology foundation for lasting success.
          </p>
          <a 
            href="#" 
            className="inline-block px-10 py-4 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] text-white no-underline rounded-full font-semibold text-lg transition-all duration-400 shadow-[0_10px_30px_rgba(59,130,246,0.3)] relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(59,130,246,0.4)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent -translate-x-full transition-transform duration-500 hover:translate-x-full"></span>
            Get Started Today
          </a>
        </section>

        <Footer />
      </div>

      <style>{`
        .particle {
          position: absolute;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 1; 
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 1s ease-out;
        }

        nav.scrolled {
          background: rgba(15, 15, 35, 0.95) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .service-card.scattered {
          position: absolute;
          z-index: 10;
        }

        .service-card.arranged {
          opacity: 1 !important;
          transform: rotate(0deg) scale(1) !important;
          position: relative;
          z-index: 1;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .services {
            padding: 4rem 1rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .service-card {
            padding: 2rem;
          }
        }
      `}</style>
    </>
  );
}