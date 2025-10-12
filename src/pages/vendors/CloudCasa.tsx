import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
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
        <section className="cloudcasa-hero">
          <div className="cloudcasa-container">
            <div className="cloudcasa-hero-content">
              <div className="cloudcasa-hero-badge">
                <span className="cloudcasa-hero-badge-icon">☁️</span>
                <span>CLOUDCASA BY CATALOGIC</span>
              </div>
              
              <h1 className="cloudcasa-hero-title">
                Kubernetes Data Protection & Migration
              </h1>
              
              <p className="cloudcasa-hero-subtitle">
                Secure, scalable backup and disaster recovery for Kubernetes environments with unified management across multi-cloud and hybrid infrastructures
              </p>
              
              <div className="cloudcasa-hero-cta">
                <Link to="/contact" className="cloudcasa-btn cloudcasa-btn-primary">
                  Get Started
                  <span>→</span>
                </Link>
                <a href="#about" className="cloudcasa-btn cloudcasa-btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About CloudCasa Section */}
        <section id="about" className="cloudcasa-section">
          <div className="cloudcasa-container">
            <div className="cloudcasa-section-header">
              <span className="cloudcasa-section-badge">ABOUT CLOUDCASA</span>
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
              <span className="cloudcasa-section-badge">KEY FEATURES</span>
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
              <span className="cloudcasa-section-badge">ARCHITECTURE</span>
              <h2 className="cloudcasa-section-title">How CloudCasa Works</h2>
              <p className="cloudcasa-section-subtitle">
                Understand the architecture and workflow behind CloudCasa's data protection
              </p>
            </div>

            <div className="cloudcasa-diagram-container">
              <h3 style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center' }}>CloudCasa Architecture Overview</h3>
              <div className="cloudcasa-diagram-placeholder">
                <div className="cloudcasa-diagram-icon">📐</div>
                <div className="cloudcasa-diagram-label">Architecture Diagram</div>
                <p className="cloudcasa-diagram-note">
                  Placeholder for CloudCasa architecture diagram showing multi-cluster management, backup flows, and storage integration
                </p>
              </div>
            </div>

            <div className="cloudcasa-diagram-container">
              <h3 style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center', color: '#DB268C' }}>Why CloudCasa</h3>
              <div className="cloudcasa-diagram-placeholder">
                <div className="cloudcasa-diagram-icon">🖼️</div>
                <div className="cloudcasa-diagram-label">Why CloudCasa Diagram</div>
                <p className="cloudcasa-diagram-note">
                  [Insert "Why CloudCasa" diagram image here - showing Cloud Scale, Cloud Native, Cloud Service, Cloud Portable, Cloud Secure, and Cloud Smart benefits in circular layout]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="cloudcasa-section">
          <div className="cloudcasa-container">
            <div className="cloudcasa-section-header">
              <span className="cloudcasa-section-badge">TESTIMONIALS</span>
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
                  <div className="cloudcasa-testimonial-divider">
                    <div className="cloudcasa-testimonial-name">Christian</div>
                    <div className="cloudcasa-testimonial-role">System Administrator</div>
                    <div className="cloudcasa-testimonial-stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              <div className="cloudcasa-testimonial-card">
                <div>
                  <p className="cloudcasa-testimonial-quote">
                    "Kasten didn't have a real centralized dashboard. With CloudCasa, I can just go to one console and see all our clusters. I didn't even believe that was possible at this price point."
                  </p>
                  <div className="cloudcasa-testimonial-divider">
                    <div className="cloudcasa-testimonial-name">Anonymous</div>
                    <div className="cloudcasa-testimonial-role">System Engineer</div>
                    <div className="cloudcasa-testimonial-stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              <div className="cloudcasa-testimonial-card">
                <div>
                  <p className="cloudcasa-testimonial-quote">
                    "Velero can be complex and lacks support, which underscored the importance of investing in backups with solutions like CloudCasa, especially in a data company where a robust disaster recovery (DR) plan is crucial."
                  </p>
                  <div className="cloudcasa-testimonial-divider">
                    <div className="cloudcasa-testimonial-name">Francisco</div>
                    <div className="cloudcasa-testimonial-role">DevOps Manager</div>
                    <div className="cloudcasa-testimonial-stars">⭐⭐⭐⭐⭐</div>
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
                  Start Free Trial
                  <span>→</span>
                </Link>
                <Link to="/contact" className="cloudcasa-btn cloudcasa-btn-secondary">
                  Schedule a Demo
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
