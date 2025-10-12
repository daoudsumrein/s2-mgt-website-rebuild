import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container, Database, Cloud, Shield, Sliders, Package } from 'lucide-react';

const ContainerMigration = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const heroAnimation = useScrollAnimation({ threshold: 0.3 });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Container Migration - Kubernetes & OpenShift Migration | S2 Technologies"
        description="Effortless Kubernetes and OpenShift migration with CloudCasa. Secure, scalable, and cloud-native migration across clusters, clouds, and environments with zero vendor lock-in."
        keywords="kubernetes migration, openshift migration, container migration, cloudcasa, cluster migration, multi-cloud migration"
      />
      <div className="min-h-screen bg-background">
        <Navigation />

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
                      <span className="relative">RED HAT CERTIFIED PARTNER</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block pb-4"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        Kubernetes & OpenShift Migration
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Secure, scalable, and cloud-native migration powered by CloudCasa. Move workloads across clusters, clouds, and environments with zero vendor lock-in.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Container%20Migration%20Consultation', '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Start Your Migration</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/video hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                      {/* Placeholder for video - can be replaced with actual video URL */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-800 flex items-center justify-center rounded-xl">
                        <Container className="w-24 h-24 text-blue-400 opacity-50" />
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

        {/* Introduction Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center fade-in-section opacity-0 translate-y-5 transition-all duration-700">
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                Modern enterprises are increasingly adopting multi-cloud strategies and hybrid environments to optimize costs, improve resilience, and avoid vendor lock-in. However, <span className="text-[#DB268C] font-semibold">migrating Kubernetes workloads across different platforms remains one of the most challenging tasks</span> for DevOps and platform engineering teams.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CloudCasa simplifies this complexity by providing an enterprise-grade migration platform that handles the full lifecycle of Kubernetes cluster migration—from initial planning and assessment to execution, validation, and final cutover. With support for <span className="text-[#DB268C] font-semibold">Red Hat OpenShift, AWS EKS, Azure AKS, Google GKE</span>, and on-premises Kubernetes distributions, CloudCasa delivers a unified migration experience regardless of your source or target environment.
              </p>
            </div>
          </div>
        </section>

        {/* Migration Capabilities */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 fade-in-section opacity-0 translate-y-5 transition-all duration-700">
              <h2 className="text-4xl font-bold text-foreground mb-4">Migration Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                CloudCasa provides comprehensive migration capabilities designed to handle the most complex Kubernetes workload migrations with minimal downtime and maximum reliability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Package className="w-8 h-8" />,
                  title: "Full Cluster Migration",
                  description: "Migrate entire Kubernetes clusters including all resources, configurations, virtual networks, and load balancers with complete fidelity. CloudCasa captures and restores your entire cluster state, ensuring nothing is left behind.",
                  features: ["Migrate all Kubernetes resources and CRDs", "Preserve network configurations and policies", "Maintain load balancer and ingress settings", "Transfer secrets and ConfigMaps securely"]
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Persistent Data Transfer",
                  description: "Seamlessly migrate persistent volumes and application data across clusters with automated validation, consistency checks, and support for multiple storage backends.",
                  features: ["CSI snapshot orchestration", "Cross-storage provider migration", "Data consistency validation", "Storage class remapping"]
                },
                {
                  icon: <Cloud className="w-8 h-8" />,
                  title: "Multi-Cloud Support",
                  description: "Move workloads between AWS EKS, Azure AKS, Google GKE, and on-premises environments with unified workflows.",
                  features: ["Cross-cloud provider migration", "Hybrid cloud support", "Cloud-specific resource handling", "Automated cloud integration"]
                },
                {
                  icon: <i className="fas fa-hat-wizard text-2xl" />,
                  title: "OpenShift Integration",
                  description: "Native support for Red Hat OpenShift environments including OpenShift Container Platform (OCP), ROSA, ARO, and OSD.",
                  features: ["All OpenShift editions supported", "OADP/Velero compatibility", "OpenShift Virtualization support", "Multi-cluster management"]
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Disaster Recovery & Rollback",
                  description: "Built-in disaster recovery capabilities with continuous replication and instant rollback options ensure zero data loss during migration.",
                  features: ["Continuous replication between clusters", "Point-in-time recovery", "One-click rollback capability", "Automated failover support"]
                },
                {
                  icon: <Sliders className="w-8 h-8" />,
                  title: "Granular Control & Customization",
                  description: "Perform full cluster or namespace-level migrations with custom resource transformations and selective resource migration.",
                  features: ["Namespace-level migration", "Resource filtering and selection", "Custom transformations", "Pre and post-migration hooks"]
                }
              ].map((capability, index) => (
                <div key={index} className="fade-in-section opacity-0 translate-y-5 transition-all duration-700 p-8 bg-muted/30 rounded-xl border border-border hover:border-[#DB268C] hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#DB268C] to-[#c11e7a] rounded-xl flex items-center justify-center text-white mb-6 transition-transform hover:scale-110">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#DB268C] before:font-bold">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-muted/20 to-pink-50/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 fade-in-section opacity-0 translate-y-5 transition-all duration-700">
              <h2 className="text-4xl font-bold text-foreground mb-4">Key Benefits</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                CloudCasa's Kubernetes migration solution delivers measurable business value and operational efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { number: "20%", title: "Reduced Complexity", description: "Cut down migration steps by over 20% with smart workflows, automated provisioning, and intelligent cluster rebuilding capabilities." },
                { number: "Zero", title: "Downtime", description: "Achieve near-zero downtime migrations with continuous replication and automated cutover processes that minimize service disruption." },
                { number: "100%", title: "Data Integrity", description: "Ensure complete data integrity with automated validation checks, consistency verification, and immutable backup copies." },
                { number: "Multi", title: "Cloud Flexibility", description: "Enjoy true multi-cloud freedom with the ability to migrate workloads across any Kubernetes platform without vendor lock-in." }
              ].map((benefit, index) => (
                <div key={index} className="fade-in-section opacity-0 translate-y-5 transition-all duration-700 bg-background p-8 rounded-xl shadow-md border-l-4 border-[#DB268C] hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="text-5xl font-bold text-[#DB268C] mb-3">{benefit.number}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 fade-in-section opacity-0 translate-y-5 transition-all duration-700">
              <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                CloudCasa's migration process is designed for simplicity and efficiency, guiding you through each step with automated workflows and intelligent defaults
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our migration wizard simplifies complex Kubernetes migrations into three straightforward steps. Each phase includes automated validation, real-time monitoring, and built-in safeguards to ensure a successful migration with minimal manual intervention.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12 relative">
                {[
                  {
                    number: "1",
                    title: "Assess & Plan",
                    description: "Connect your source and target clusters to CloudCasa. Our intelligent assessment tool analyzes your cluster configuration and provides recommendations.",
                    steps: ["Add source and target clusters", "Select resources for migration", "Configure migration parameters", "Review automated recommendations", "Set up storage class mappings"]
                  },
                  {
                    number: "2",
                    title: "Execute Migration",
                    description: "CloudCasa automates the entire migration process, handling resource provisioning, data transfer, and configuration updates.",
                    steps: ["Automated resource provisioning", "Parallel data transfer", "Real-time progress monitoring", "Automatic retry on failures", "Continuous validation checks"]
                  },
                  {
                    number: "3",
                    title: "Validate & Optimize",
                    description: "Verify migrated resources in the target environment and perform comprehensive testing before final cutover.",
                    steps: ["Resource verification", "Application health checks", "Performance validation", "Final cutover execution", "Post-migration optimization"]
                  }
                ].map((step, index) => (
                  <div key={index} className="fade-in-section opacity-0 translate-y-5 transition-all duration-700 text-center relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#DB268C] to-[#c11e7a] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg relative z-10">
                      {step.number}
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-gradient-to-r from-[#DB268C] to-border" />
                    )}
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                    <ul className="text-left space-y-1">
                      {step.steps.map((s, i) => (
                        <li key={i} className="text-sm text-muted-foreground pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-[#DB268C] before:font-bold">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-gradient-to-b from-muted/20 to-pink-50/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 fade-in-section opacity-0 translate-y-5 transition-all duration-700">
              <h2 className="text-4xl font-bold text-foreground mb-4">Common Use Cases</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                CloudCasa supports a wide range of Kubernetes migration scenarios across different industries and use cases
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "☁️",
                  title: "Cloud Migration",
                  description: "Move workloads from on-premises data centers to public cloud platforms like AWS, Azure, or GCP as part of your cloud transformation initiative.",
                  example: "Example: Migrating legacy applications from on-premises Kubernetes to AWS EKS for improved scalability and reduced infrastructure costs."
                },
                {
                  icon: "🔄",
                  title: "Multi-Cloud Strategy",
                  description: "Implement a true multi-cloud strategy by distributing workloads across different cloud providers to optimize costs and avoid vendor lock-in.",
                  example: "Example: Migrating production workloads from GKE to Azure AKS to leverage Azure-specific services while maintaining disaster recovery in GCP."
                },
                {
                  icon: "🔧",
                  title: "Platform Upgrades",
                  description: "Upgrade to newer Kubernetes versions or migrate to different Kubernetes distributions like OpenShift, Rancher, or managed services with minimal risk.",
                  example: "Example: Migrating from self-managed Kubernetes clusters to Red Hat OpenShift for enhanced security, compliance, and enterprise support."
                },
                {
                  icon: "🧪",
                  title: "Dev/Test Environments",
                  description: "Replicate production environments to development and testing clusters for realistic testing scenarios with actual production data.",
                  example: "Example: Creating staging environments that mirror production for comprehensive testing before deploying new features to production clusters."
                }
              ].map((useCase, index) => (
                <div key={index} className="fade-in-section opacity-0 translate-y-5 transition-all duration-700 bg-background p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="text-5xl mb-5">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="bg-muted/50 p-3 rounded-lg text-sm text-muted-foreground italic">
                    {useCase.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 fade-in-section opacity-0 translate-y-5 transition-all duration-700">
              <h2 className="text-4xl font-bold text-foreground mb-4">Supported Platforms</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                CloudCasa works seamlessly across all major Kubernetes distributions and cloud providers
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                CloudCasa provides native integration with the most popular Kubernetes platforms, ensuring compatibility and optimal performance across your entire infrastructure. Our solution supports both managed Kubernetes services and self-hosted distributions, giving you the flexibility to migrate workloads anywhere.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
              {[
                { icon: <i className="fas fa-dharmachakra text-5xl" />, name: "Kubernetes", desc: "All CNCF distributions" },
                { icon: <i className="fab fa-redhat text-5xl" />, name: "Red Hat OpenShift", desc: "OCP, ROSA, ARO, OSD" },
                { icon: <i className="fab fa-aws text-5xl" />, name: "Amazon EKS", desc: "Managed Kubernetes on AWS" },
                { icon: <i className="fab fa-microsoft text-5xl" />, name: "Azure AKS", desc: "Managed Kubernetes on Azure" },
                { icon: <i className="fab fa-google text-5xl" />, name: "Google GKE", desc: "Managed Kubernetes on GCP" },
                { icon: <i className="fas fa-server text-5xl" />, name: "On-Premises", desc: "Self-hosted & private cloud" }
              ].map((platform, index) => (
                <div key={index} className="fade-in-section opacity-0 translate-y-5 transition-all duration-700 flex flex-col items-center justify-center p-8 bg-muted/30 rounded-xl border-2 border-border hover:border-[#DB268C] hover:shadow-lg hover:-translate-y-1 transition-all min-h-[180px]">
                  <div className="text-[#DB268C] mb-4 hover:scale-110 transition-transform">
                    {platform.icon}
                  </div>
                  <span className="font-semibold text-foreground text-center mb-2">{platform.name}</span>
                  <p className="text-xs text-muted-foreground text-center">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why CloudCasa Section */}
        <section className="py-24 bg-gradient-to-br from-[#0B163F] to-[#DB268C] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 fade-in-section opacity-0 translate-y-5 transition-all duration-700">
                <h2 className="text-4xl font-bold mb-4 text-white">Why CloudCasa?</h2>
                <p className="text-lg opacity-95">
                  CloudCasa is trusted by enterprises worldwide for mission-critical Kubernetes migrations
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: <i className="fas fa-certificate text-2xl" />, title: "Red Hat Certified", description: "As a Red Hat Certified Technology Partner, CloudCasa delivers validated solutions for OpenShift environments with full vendor support and certification." },
                  { icon: <i className="fas fa-users text-2xl" />, title: "Enterprise Ready", description: "Built for enterprise scale with RBAC, SSO integration, audit logging, and compliance features that meet the most stringent security requirements." },
                  { icon: <i className="fas fa-rocket text-2xl" />, title: "Easy to Use", description: "Intuitive wizard-based interface with smart defaults and automated workflows makes complex migrations accessible to teams of all skill levels." },
                  { icon: <i className="fas fa-headset text-2xl" />, title: "Expert Support", description: "Access to experienced technical support team, comprehensive documentation, and professional services for complex migration projects." }
                ].map((item, index) => (
                  <div key={index} className="fade-in-section opacity-0 translate-y-5 transition-all duration-700 bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                      {item.icon} {item.title}
                    </h3>
                    <p className="opacity-90 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 bg-gradient-to-br from-[#0B163F] to-[#DB268C] text-white text-center overflow-hidden">
          <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full opacity-30"
               style={{ background: 'radial-gradient(circle, rgba(219, 38, 140, 0.3) 0%, transparent 70%)' }} />
          
          <div className="container mx-auto px-6 relative z-10 max-w-3xl">
            <h2 className="text-5xl font-bold mb-6">Ready to Migrate?</h2>
            <p className="text-xl opacity-95 mb-10 leading-relaxed">
              Start your migration journey with CloudCasa today. Get a free assessment from our migration experts and discover how we can simplify your Kubernetes migration with minimal risk and maximum efficiency. No credit card required.
            </p>
            <Link to="/contact" className="inline-block bg-white text-[#DB268C] hover:bg-gray-100 hover:text-[#c11e7a] px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Request a Free Assessment
            </Link>
          </div>
        </section>

        <Footer />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float 25s ease-in-out infinite reverse;
        }
      `}</style>
    </>
  );
};

export default ContainerMigration;