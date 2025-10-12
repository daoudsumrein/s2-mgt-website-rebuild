import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Users, Target, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import nakivoLogo from "@/assets/logos/nakivo-logo-new.png";
import rivermeadowLogo from "@/assets/logos/rivermeadow-logo.webp";
import cloudCasaLogo from "@/assets/logos/cloudcasa-icon.png";
import opentextLogo from "@/assets/logos/opentext-logo.png";
import tdsLogo from "@/assets/logos/tds-logo.png";
import appcureLogo from "@/assets/logos/appcure-logo.png";
import arrosoftLogo from "@/assets/logos/arrosoft-logo.svg";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const vendors = [
  {
    name: "OpenText",
    logo: opentextLogo,
    description: "Core Data Protection Platform",
    tagline: "Enterprise-grade data protection, availability, and secure cloud solutions",
    solutions: [
      "Data Protection - Availability & Migrate",
      "Secure Cloud Suite - Cloud-to-Cloud Backup",
      "Email Continuity & Archiving"
    ],
    href: "/vendors/opentext"
  },
  {
    name: "TDS",
    logo: tdsLogo,
    description: "Orchestration & IT Visibility",
    tagline: "Powerful orchestration platform streamlining migration and disaster recovery",
    solutions: [
      "IT Discovery & Asset Management",
      "Migration Wave Planning",
      "DR Orchestration & Reporting"
    ],
    href: "/vendors/tds"
  },
  {
    name: "appCURE",
    logo: appcureLogo,
    description: "Application Modernization",
    tagline: "Complete application transformation and modernization platform",
    solutions: [
      "Application Assessment",
      "App Repackaging",
      "Desktop Modernization"
    ],
    href: "https://appcure.io/"
  },
  {
    name: "NAKIVO",
    logo: nakivoLogo,
    description: "Backup & Recovery",
    tagline: "Fast, affordable data protection for virtual, cloud, and hybrid environments",
    solutions: [
      "VM Backup & Recovery",
      "Microsoft 365 Backup",
      "Physical Server Protection"
    ],
    href: "/vendors/nakivo"
  },
  {
    name: "Arrosoft",
    logo: arrosoftLogo,
    description: "Advanced Cybersecurity",
    tagline: "Protecting against insider threats and ransomware attacks",
    solutions: [
      "Kernel-Level Protection",
      "Immutable Backup Vault",
      "Advanced Threat Containment"
    ],
    href: "/vendors/arrosoft"
  },
  {
    name: "RiverMeadow",
    logo: rivermeadowLogo,
    description: "Automated Cloud Migration",
    tagline: "Agentless live migration with OS modernization and fixed-price per instance",
    solutions: [
      "Collect Convert Deploy",
      "Rapid Secure Migration",
      "Fixed-Price Service"
    ],
    href: "/vendors/rivermeadow"
  },
  {
    name: "CloudCasa",
    logo: cloudCasaLogo,
    description: "Kubernetes Protection",
    tagline: "Backup and disaster recovery for Kubernetes across multi-cloud environments",
    solutions: [
      "Kubernetes Backup & Recovery",
      "Multi-Cloud Management",
      "Application Migration"
    ],
    href: "/vendors/cloudcasa"
  }
];

export default function Vendors() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: vendorsRef, isInView: vendorsInView } = useScrollAnimation();
  const { ref: partnershipRef, isInView: partnershipInView } = useScrollAnimation();
  const { ref: portalRef, isInView: portalInView } = useScrollAnimation();

  return (
    <>
      <SEOHead 
        title="Technology Vendors & Partners | S2 Management Solutions"
        description="Explore S2's strategic technology partnerships with OpenText, TDS, AppCURE, NAKIVO, and Arrosoft. Expert solutions for data protection and cybersecurity."
        keywords="S2 vendors, OpenText partner, TDS distributor, AppCURE reseller, NAKIVO solutions, Arrosoft backup, technology partners MENA"
        canonicalUrl="https://s2mgt.com/vendors"
      />
      <div className="min-h-screen bg-white">
        <Navigation />
      <main>
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <Badge className="mb-6 bg-[#2392CF]/10 border-[#2392CF]/30 text-[#2392CF] hover:bg-[#2392CF]/20">
                Technology Partners
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#2392CF]">
                Technology Partners
              </h1>
              <p className="text-xl md:text-2xl text-[#2392CF] mb-12 max-w-3xl mx-auto leading-relaxed">
                Strategic vendors delivering data protection, migration, and modernization
              </p>
              
              {/* Partner Logos Strip */}
              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl p-8 shadow-lg mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
                  {vendors.map((vendor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="w-16 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                    >
                      <img src={vendor.logo} alt={`${vendor.name} logo`} className="max-w-full max-h-full object-contain" />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-[#2392CF] hover:bg-[#1E7FB8] text-white shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link to="/contact">
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Partner Grid */}
        <motion.section 
          ref={vendorsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={vendorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-24 bg-slate-50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2392CF] mb-4">
                Our Technology Partners
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Industry-leading solutions for enterprise data protection and modernization
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {vendors.map((vendor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={vendorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl p-6 hover:bg-white hover:border-[#2392CF]/50 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Logo */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-16 flex items-center justify-center">
                      <img 
                        src={vendor.logo} 
                        alt={`${vendor.name} logo`} 
                        className="max-h-16 max-w-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Position */}
                  <h3 className="text-xl font-bold text-[#2392CF] mb-2 text-center">
                    {vendor.name}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 mb-4 text-center">
                    {vendor.description}
                  </p>
                  
                  {/* Key Solutions */}
                  <ul className="space-y-2 mb-6">
                    {vendor.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="text-sm text-[#2392CF] flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#2392CF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="flex-1">{solution}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <Link 
                    to={vendor.href}
                    className="inline-flex items-center text-sm font-semibold text-[#2392CF] hover:underline underline-offset-4 transition-all"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Partnership Approach */}
        <motion.section 
          ref={partnershipRef}
          initial={{ opacity: 0, y: 30 }}
          animate={partnershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2392CF] mb-4">
                  Our Partnership Approach
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Deep technical partnerships ensuring effective enterprise solutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={partnershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl p-8 hover:bg-white hover:border-[#2392CF]/50 hover:shadow-xl transition-all"
                >
                  <div className="flex justify-center mb-6">
                    <Users className="w-12 h-12 text-[#2392CF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2392CF] mb-3 text-center">
                    Deep Technical Expertise
                  </h3>
                  <p className="text-slate-600 text-center leading-relaxed">
                    Advanced certifications across all partner platforms
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={partnershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl p-8 hover:bg-white hover:border-[#2392CF]/50 hover:shadow-xl transition-all"
                >
                  <div className="flex justify-center mb-6">
                    <Target className="w-12 h-12 text-[#2392CF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2392CF] mb-3 text-center">
                    Solution Integration
                  </h3>
                  <p className="text-slate-600 text-center leading-relaxed">
                    Multi-vendor solutions working seamlessly together
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={partnershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl p-8 hover:bg-white hover:border-[#2392CF]/50 hover:shadow-xl transition-all"
                >
                  <div className="flex justify-center mb-6">
                    <Headphones className="w-12 h-12 text-[#2392CF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2392CF] mb-3 text-center">
                    Ongoing Support
                  </h3>
                  <p className="text-slate-600 text-center leading-relaxed">
                    Direct access to vendor and S2 technical teams
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Partner Portal & CTA */}
        <motion.section 
          ref={portalRef}
          initial={{ opacity: 0, y: 30 }}
          animate={portalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-24 bg-slate-50"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl p-8 md:p-12 shadow-lg text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2392CF] mb-4">
                  Partner Portal Access
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Access technical resources, documentation, and project management tools through our dedicated partner portal
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-[#2392CF] hover:bg-[#1E7FB8] text-white shadow-lg hover:shadow-xl transition-all"
                    asChild
                  >
                    <a 
                      href="https://preview--pipeline-pro-portal.lovable.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Access Partner Portal
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#2392CF] text-[#2392CF] hover:bg-[#2392CF] hover:text-white transition-all"
                    asChild
                  >
                    <Link to="/contact">Request Partner Access</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Footer CTA */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2392CF] mb-4">
                Become a Partner
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Join our network of technology partners and grow your business
              </p>
              <Button 
                size="lg"
                className="bg-[#2392CF] hover:bg-[#1E7FB8] text-white shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
        <Footer />
      </div>
    </>
  );
}