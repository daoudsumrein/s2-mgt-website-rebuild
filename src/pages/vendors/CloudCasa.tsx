import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import cloudCasaLogo from "@/assets/cloudcasa-logo.png";
import "@/styles/cloudcasa.css";

const CloudCasa = () => {
  useEffect(() => {
    // Add Poppins font
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <SEOHead
        title="CloudCasa - Kubernetes Data Protection & Migration | S2 Management"
        description="Enterprise-grade Kubernetes backup and disaster recovery with CloudCasa. Secure, scalable protection for containers and VMs across multi-cloud and hybrid infrastructures."
        keywords="CloudCasa, Kubernetes backup, Kubernetes disaster recovery, container backup, multi-cloud backup, Kubernetes migration, CNCF, OpenShift, Rancher, Tanzu"
      />
      
      <Navigation />
      
      <div className="cloudcasa-page">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(/lovable-uploads/cloudcasa-hero-bg.png)` }}
          />
          
          {/* Flowing Background Elements */}
          <div className="absolute top-0 right-0 w-[60%] h-full">
            <div className="absolute inset-0 bg-gradient-radial from-[hsl(200,100%,50%,0.3)] via-[hsl(200,100%,50%,0.1)] to-transparent blur-[40px]" />
          </div>
          
          {/* Animated Flowing Element */}
          <motion.div 
            className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-gradient-radial from-[hsl(194,100%,62%,0.4)] via-[hsl(200,100%,50%,0.2)] to-transparent blur-[40px] rounded-full"
            style={{ willChange: 'transform' }}
            animate={{ 
              transform: ['translate3d(0, 0, 0) scale(1)', 'translate3d(0, -20px, 0) scale(1.05)', 'translate3d(0, 0, 0) scale(1)']
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Decorative Flow Elements */}
          <motion.div 
            className="absolute top-[15%] right-[15%] w-[200px] h-[200px] bg-gradient-radial from-[hsl(200,100%,50%,0.2)] to-transparent rounded-full blur-[15px] hidden md:block"
            style={{ willChange: 'transform, opacity' }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              transform: ['scale3d(1, 1, 1)', 'scale3d(1.1, 1.1, 1)', 'scale3d(1, 1, 1)']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-[25%] right-[5%] w-[150px] h-[300px] bg-gradient-to-t from-[hsl(194,100%,62%,0.15)] to-transparent rounded-full blur-[20px] hidden md:block"
            style={{ willChange: 'transform' }}
            animate={{ 
              transform: ['translate3d(0, 0, 0) scale(1)', 'translate3d(0, -20px, 0) scale(1.05)', 'translate3d(0, 0, 0) scale(1)']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 -mt-32 sm:-mt-16 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl text-center md:text-left"
            >
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <img 
                  src={cloudCasaLogo} 
                  alt="CloudCasa Logo" 
                  className="h-16 w-auto"
                />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 tracking-tight"
              >
                Kubernetes Data Protection & Migration
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-10 font-normal"
              >
                Secure, scalable backup and disaster recovery for Kubernetes environments with unified management across multi-cloud and hybrid infrastructures
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] text-white px-10 py-5 text-xl font-semibold rounded-full shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300 border-0"
                  asChild
                >
                  <Link to="/contact">
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About CloudCasa Section */}
        <section id="about" className="cloudcasa-section">
          <div className="cloudcasa-container">
            <div className="cloudcasa-section-header">
              <span className="cloudcasa-section-badge text-white">ABOUT CLOUDCASA</span>
              <h2 className="cloudcasa-section-title">Enterprise-Grade Kubernetes Protection</h2>
              <p className="cloudcasa-section-subtitle">
                The comprehensive data protection platform designed for modern cloud-native environments
              </p>
            </div>

            <div className="cloudcasa-about-content">
              <p className="cloudcasa-about-text">
                <strong>CloudCasa by Catalogic</strong> is an enterprise-grade data protection platform specifically designed for Kubernetes and cloud-native environments. It provides comprehensive backup, disaster recovery, and migration capabilities for containerized applications and virtual machines across multi-cloud and hybrid infrastructures.
              </p>

              <p className="cloudcasa-about-text">
                Built for modern DevOps and IT teams, CloudCasa simplifies the complex challenge of protecting Kubernetes workloads at scale. Whether your clusters are running on-premises, in AWS, Azure, GCP, or at the edge, CloudCasa delivers unified management and protection from a single dashboard.
              </p>

              <div className="cloudcasa-about-highlight">
                <p>
                  <strong>Why CloudCasa?</strong> Traditional backup solutions weren't designed for the dynamic, distributed nature of Kubernetes. CloudCasa understands cloud-native architectures and provides purpose-built protection that scales with your infrastructure—from a handful of clusters to thousands of workloads across multiple clouds.
                </p>
              </div>

              <p className="cloudcasa-about-text">
                With support for <strong>any CNCF Kubernetes distribution</strong> including Red Hat OpenShift, SUSE Rancher, VMware Tanzu, and managed services like AKS, EKS, and GKE, CloudCasa gives you the freedom to protect your workloads wherever they run. The platform offers both <strong>fully-managed SaaS</strong> and <strong>self-hosted deployment</strong> options, adapting to your operational and regulatory requirements.
              </p>

              <p className="cloudcasa-about-text">
                CloudCasa delivers enterprise-grade security with immutable backups, RBAC-driven access control, encryption at rest and in transit, and compliance-ready recovery capabilities. Support for 13+ storage providers including Amazon S3, Azure Blob, Google Cloud Storage, and MinIO ensures you maintain control over where your backup data resides.
              </p>
            </div>

            <div className="cloudcasa-stats-grid">
              <div className="cloudcasa-stat-card">
                <div className="cloudcasa-stat-value">13+</div>
                <div className="cloudcasa-stat-label">Storage Providers</div>
              </div>
              <div className="cloudcasa-stat-card">
                <div className="cloudcasa-stat-value">∞</div>
                <div className="cloudcasa-stat-label">Cluster Support</div>
              </div>
              <div className="cloudcasa-stat-card">
                <div className="cloudcasa-stat-value">3</div>
                <div className="cloudcasa-stat-label">Major Cloud Platforms</div>
              </div>
              <div className="cloudcasa-stat-card">
                <div className="cloudcasa-stat-value">100%</div>
                <div className="cloudcasa-stat-label">Kubernetes Native</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="cloudcasa-section">
          <div className="cloudcasa-container">
            <div className="cloudcasa-section-header">
              <span className="cloudcasa-section-badge text-white">KEY FEATURES</span>
              <h2 className="cloudcasa-section-title">Powerful Protection, Simplified</h2>
              <p className="cloudcasa-section-subtitle">
                Everything you need to protect, recover, and migrate your Kubernetes workloads
              </p>
            </div>

            <div className="cloudcasa-features-grid">
              <div className="cloudcasa-feature-card">
                <div className="cloudcasa-feature-icon">💾</div>
                <h3 className="cloudcasa-feature-title">Automated Backups</h3>
                <p className="cloudcasa-feature-description">
                  Policy-driven backup automation for all cluster resources, persistent volumes, and databases with customizable scheduling and retention policies
                </p>
              </div>

              <div className="cloudcasa-feature-card">
                <div className="cloudcasa-feature-icon">🌐</div>
                <h3 className="cloudcasa-feature-title">Multi-Cloud Support</h3>
                <p className="cloudcasa-feature-description">
                  Unified management across AWS, Azure, GCP, on-premises, and edge environments with centralized policies and RBAC
                </p>
              </div>

              <div className="cloudcasa-feature-card">
                <div className="cloudcasa-feature-icon">🔐</div>
                <h3 className="cloudcasa-feature-title">Enterprise Security</h3>
                <p className="cloudcasa-feature-description">
                  Immutable backups, ransomware protection, encryption at rest and in transit, and RBAC-driven access control
                </p>
              </div>

              <div className="cloudcasa-feature-card">
                <div className="cloudcasa-feature-icon">🚀</div>
                <h3 className="cloudcasa-feature-title">Seamless Migration</h3>
                <p className="cloudcasa-feature-description">
                  Move workloads between any Kubernetes distributions and clouds without vendor lock-in or complex manual processes
                </p>
              </div>

              <div className="cloudcasa-feature-card">
                <div className="cloudcasa-feature-icon">📊</div>
                <h3 className="cloudcasa-feature-title">Easy Monitoring</h3>
                <p className="cloudcasa-feature-description">
                  Real-time monitoring, alerting, and reporting with centralized logging and guided recovery workflows
                </p>
              </div>

              <div className="cloudcasa-feature-card">
                <div className="cloudcasa-feature-icon">⚙️</div>
                <h3 className="cloudcasa-feature-title">Flexible Deployment</h3>
                <p className="cloudcasa-feature-description">
                  Choose between fully-managed SaaS or self-hosted options for air-gapped and regulatory-sensitive environments
                </p>
              </div>

              <div className="cloudcasa-feature-card">
                <div className="cloudcasa-feature-icon">🔄</div>
                <h3 className="cloudcasa-feature-title">Disaster Recovery</h3>
                <p className="cloudcasa-feature-description">
                  Cross-cluster, cross-account, and cross-cloud restores with high availability and failover capabilities
                </p>
              </div>

              <div className="cloudcasa-feature-card">
                <div className="cloudcasa-feature-icon">🤝</div>
                <h3 className="cloudcasa-feature-title">Vendor Integration</h3>
                <p className="cloudcasa-feature-description">
                  Native integrations with OpenShift, Rancher, Tanzu, and major cloud providers for seamless workflows
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="cloudcasa-section">
          <div className="cloudcasa-container">
            <div className="cloudcasa-section-header">
              <span className="cloudcasa-section-badge text-white">ARCHITECTURE</span>
              <h2 className="cloudcasa-section-title">How CloudCasa Works</h2>
              <p className="cloudcasa-section-subtitle">
                Understand the architecture and workflow behind CloudCasa's data protection
              </p>
            </div>

            <div className="cloudcasa-diagram-container">
              <h3 style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center' }}>CloudCasa Architecture Overview</h3>
              <img 
                src="/lovable-uploads/cloudcasa-architecture.png" 
                alt="CloudCasa Architecture Overview - Platform Services, Application Services, Developer Services, Cluster Services, and Kubernetes infrastructure" 
                className="cloudcasa-diagram-image"
              />
            </div>

            <div className="cloudcasa-diagram-container">
              <h3 className="invisible h-0 m-0" style={{ fontSize: '28px', textAlign: 'center', color: '#DB268C' }}>Why CloudCasa</h3>
              <img 
                src="/lovable-uploads/why-cloudcasa.png" 
                alt="Why CloudCasa - Cloud Scale, Cloud Native, Cloud Service, Cloud Portable, Cloud Secure, and Cloud Smart benefits" 
                className="cloudcasa-diagram-image"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="cloudcasa-section">
          <div className="cloudcasa-container">
            <div className="cloudcasa-section-header">
              <span className="cloudcasa-section-badge text-white">TESTIMONIALS</span>
              <h2 className="cloudcasa-section-title">Trusted by Enterprise Teams</h2>
              <p className="cloudcasa-section-subtitle">
                See what our customers say about CloudCasa
              </p>
            </div>

            <div className="cloudcasa-testimonials-grid">
              <div className="cloudcasa-testimonial-card">
                <div>
                  <p className="cloudcasa-testimonial-quote">
                    "Especially not so much cost savings, but time savings, because we didn't need to learn Velero from scratch. We're 'GUI guys' and CloudCasa's UI saved a lot of effort."
                  </p>
              <div className="cloudcasa-testimonial-divider" aria-label="Reviewer details">
                <div className="cloudcasa-testimonial-name">Christian</div>
                <div className="cloudcasa-testimonial-role">System Administrator</div>
                <div className="cloudcasa-testimonial-stars" aria-label="5 star rating" role="img" aria-roledescription="rating">⭐⭐⭐⭐⭐</div>
              </div>
                </div>
              </div>

              <div className="cloudcasa-testimonial-card">
                <div>
                  <p className="cloudcasa-testimonial-quote">
                    "Kasten didn't have a real centralized dashboard. With CloudCasa, I can just go to one console and see all our clusters. I didn't even believe that was possible at this price point."
                  </p>
                  <div className="cloudcasa-testimonial-divider" aria-label="Reviewer details">
                    <div className="cloudcasa-testimonial-name">Anonymous</div>
                    <div className="cloudcasa-testimonial-role">System Engineer</div>
                    <div className="cloudcasa-testimonial-stars" aria-label="5 star rating" role="img" aria-roledescription="rating">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              <div className="cloudcasa-testimonial-card">
                <div>
                  <p className="cloudcasa-testimonial-quote">
                    "Velero can be complex and lacks support, which underscored the importance of investing in backups with solutions like CloudCasa, especially in a data company where a robust disaster recovery (DR) plan is crucial."
                  </p>
                  <div className="cloudcasa-testimonial-divider" aria-label="Reviewer details">
                    <div className="cloudcasa-testimonial-name">Francisco</div>
                    <div className="cloudcasa-testimonial-role">DevOps Manager</div>
                    <div className="cloudcasa-testimonial-stars" aria-label="5 star rating" role="img" aria-roledescription="rating">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="cloudcasa-section">
          <div className="cloudcasa-container">
            <div className="cloudcasa-final-cta">
              <h2 className="cloudcasa-final-cta-title">Ready to Protect Your Kubernetes Workloads?</h2>
              <p className="cloudcasa-final-cta-text">
                Join enterprise teams worldwide who trust CloudCasa for Kubernetes data protection, disaster recovery, and migration across any cloud environment.
              </p>
              <div className="cloudcasa-final-cta-buttons">
                <Link to="/contact" className="cloudcasa-btn cloudcasa-btn-primary">
                  Contact Us
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CloudCasa;
