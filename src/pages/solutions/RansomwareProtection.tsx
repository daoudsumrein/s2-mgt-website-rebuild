import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Settings, CheckCircle, AlertTriangle, Server, FileX, Target, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Isolation backup data in an offline, undiscoverable vault",
    description: "Secure offline storage that remains invisible to potential attackers"
  },
  {
    icon: Lock,
    title: "Secured with multi-factor authentication (MFA)",
    description: "Prevents credential-based attacks with robust authentication"
  },
  {
    icon: Eye,
    title: "Intelligence equipped with smart sensors",
    description: "Monitor and source data integrity with advanced detection capabilities"
  },
  {
    icon: CheckCircle,
    title: "Ensures only clean data enters the vault",
    description: "Verifies data integrity before storage to prevent contamination"
  },
  {
    icon: Shield,
    title: "Immutability ensures data cannot be modified, deleted, or corrupted",
    description: "Protected data remains unchanged and secure from tampering"
  },
  {
    icon: Settings,
    title: "NIST cybersecurity framework compliance",
    description: "Meets industry standards for comprehensive security"
  },
  {
    icon: Server,
    title: "Zero Trust Architecture",
    description: "Never trust, always verify approach to security"
  },
  {
    icon: Database,
    title: "Randomized vault connectivity",
    description: "Unpredictable connection patterns enhance security"
  },
  {
    icon: AlertTriangle,
    title: "Real-time threat detection",
    description: "Immediate identification and response to security threats"
  },
  {
    icon: FileX,
    title: "Tamper-Resistant Vault",
    description: "Protected storage that resists unauthorized modifications"
  }
];

const deliverables = [
  {
    icon: Shield,
    title: "Last Line of Defense Against Ransomware",
    description: "Ultimate protection when all other security measures fail"
  },
  {
    icon: Database,
    title: "Secure Offline Data Vault",
    description: "Isolated storage environment protected from online threats"
  },
  {
    icon: CheckCircle,
    title: "Clean, Verified Backup Sets",
    description: "Guaranteed integrity of backup data for reliable recovery"
  },
  {
    icon: Server,
    title: "Resilient Backup Infrastructure",
    description: "Robust system designed to withstand cyber attacks"
  },
  {
    icon: Lock,
    title: "Enhanced Backup Security Layer",
    description: "Additional protection for critical backup systems"
  },
  {
    icon: Settings,
    title: "Compliance-Ready Backup Environment",
    description: "Meeting regulatory requirements for data protection"
  },
  {
    icon: AlertTriangle,
    title: "Reduced Risk of Data Tampering",
    description: "Minimized exposure to data manipulation threats"
  },
  {
    icon: Eye,
    title: "Operational Continuity in Crisis",
    description: "Maintained business operations during security incidents"
  }
];

export default function RansomwareProtection() {
  return (
    <>
      <SEOHead 
        title="Ransomware Protection Solutions | S2 Management Solutions"
        description="Advanced ransomware protection with isolated backup vaults, smart monitoring, and tamper-resistant storage. Your last line of defense against cyber threats."
        keywords="ransomware protection, backup security, cyber resilience, data vault, immutable backups, threat detection"
      />
      <div className="min-h-screen flex flex-col">
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
                          Ransomware Protection
                        </h1>
                        <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                          Advanced ransomware defense systems with isolated backup vaults as your last line of defense against cyber threats.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Ransomware%20Protection%20Consultation', '_blank')}>
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

          {/* Hero Content */}
          <section className="pt-6 pb-2 bg-white">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-24">
                <h1 className="text-5xl font-light text-gray-900 mb-6">
                  AirGap Ransomware Protection
                </h1>
                <p className="text-xl text-gray-600 mb-8 font-light">
                  Your Last Line of Defence Against Ransomware
                </p>
                <div className="w-24 h-px bg-gray-300 mx-auto"></div>
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-medium text-gray-900 mb-4">Your Backups Are At Risk</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For a long time, data backups have been the mainstay of ransomware recovery. Organizations rely on 
                  backups as the primary approach for their cyber resiliency strategy.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cyber criminals know this and have set their sights on your backup and data protection infrastructure, 
                  with the aim of corrupting, encrypting, or deleting them. This makes it very challenging to execute a 
                  reliable and timely recovery and allows attackers to ask for more extreme ransoms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For many organizations, the challenge now is to protect that backup infrastructure. Backups should 
                  provide the isolation needed from cyber-attacks, immutability from destructive threats, and, most 
                  importantly, the intelligence to know if that data has already been compromised.
                </p>
              </div>
            </div>
          </section>

          {/* Solution Overview */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-light text-gray-900 text-center mb-12">
                  The Arrosoft AirGap Advantage
                </h2>
                <div className="text-center mb-16">
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
                    Arrosoft AirGap Ransomware Protection is designed to be the last line of defense against ransomware attacks. 
                    It is used when all other methods have become powerless and cannot be recovered.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Arrosoft AirGap is a vendor-agnostic offline data protection solution that backs up your data and stores 
                    it in a secure offline data vault with multiple layers of defence. These layers include isolation, 
                    intelligence and immutability.
                  </p>
                </div>

                {/* Three Pillars */}
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-600 rounded-full text-white font-bold">
                      1
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">ISOLATION</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Cybercriminals cannot corrupt data they do not know exists. AirGap isolates your backups using randomized port opening times to prevent the data from being discovered by attackers. Multi-factor authentication further isolates the AirGap vault from compromised network credentials.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-600 rounded-full text-white font-bold">
                      2
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">INTELLIGENCE</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Arrosoft AirGap deploys specially designed intelligent sensors to monitor and alert if the source data has been compromised. If suspicious behaviour is detected, AirGap isolates the infected server to prevent the corrupted data from being backed up. This ensures that the data in the AirGap vault is always clean.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-600 rounded-full text-white font-bold">
                      3
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">IMMUTABILITY</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Arrosoft AirGap deploys advanced technology to lock down the protected data and ensures that it cannot be tampered with, corrupted or destroyed. This includes protecting the backup database and catalogs to ensure that the data is recoverable even if the backup infrastructure has been damaged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Architecture Diagram */}
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-light text-gray-900 text-center mb-8">
                  Example Architecture
                </h3>
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-16 text-center">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">Primary Site → AirGap → Secondary Site</p>
                  <p className="text-gray-400 text-sm mt-2">Insert your AirGap architecture diagram here</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Details */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Built on NIST Cybersecurity Framework</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Arrosoft AirGap is built based on the NIST Cybersecurity Framework to provide the highest level of data protection. 
                    Working hand-in-hand with your existing backup software, AirGap introduces new and unique capabilities which will 
                    supercharge your backup's ability to defend against and recover from a ransomware attack.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These capabilities include the ability to connect the AirGap vault to the backup server based on a randomized schedule 
                    to make it more difficult for attackers to locate the vault. AirGap also deploys sensors throughout your environment to 
                    monitor the production data in your servers. These sensors report any abnormal activities and will lock down the vault if 
                    suspicious behaviour is detected.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Once the vault has been locked, it can only be unlocked using the built-in multi-factor authentication system. Arrosoft 
                    AirGap utilizes the world's latest enterprise zero-trust concept and permissionless design to create the cleanest and 
                    purest backup space for your precious data.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Packages */}
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-light text-gray-900 text-center mb-12">
                  Packages
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Bronze Package */}
                  <div className="border border-orange-300 rounded-lg p-6 bg-orange-50">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 mx-auto mb-3 bg-orange-500 rounded text-white flex items-center justify-center font-bold">
                        B
                      </div>
                      <h3 className="text-xl font-medium text-gray-900">Bronze</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">AirGap Subscription License</span>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Support Coverage</span>
                        <span className="text-sm font-medium text-gray-900">8x5</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">New Features & Upgrades</span>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Executive Reporting</span>
                        <span className="text-sm font-medium text-gray-900">Quarterly</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">AirGap Recovery Testing</span>
                        <span className="text-sm font-medium text-gray-900">Annually</span>
                      </div>
                    </div>
                  </div>

                  {/* Silver Package */}
                  <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gray-500 rounded text-white flex items-center justify-center font-bold">
                        S
                      </div>
                      <h3 className="text-xl font-medium text-gray-900">Silver</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">AirGap Subscription License</span>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Support Coverage</span>
                        <span className="text-sm font-medium text-gray-900">24x7</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">New Features & Upgrades</span>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Executive Reporting</span>
                        <span className="text-sm font-medium text-gray-900">Quarterly</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">AirGap Recovery Testing</span>
                        <span className="text-sm font-medium text-gray-900">Annually</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Health Check Analysis</span>
                        <span className="text-sm font-medium text-gray-900">Annually</span>
                      </div>
                    </div>
                  </div>

                  {/* Gold Package */}
                  <div className="border border-yellow-400 rounded-lg p-6 bg-yellow-50">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 mx-auto mb-3 bg-yellow-500 rounded text-white flex items-center justify-center font-bold">
                        G
                      </div>
                      <h3 className="text-xl font-medium text-gray-900">Gold</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">AirGap Subscription License</span>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Support Coverage</span>
                        <span className="text-sm font-medium text-gray-900">24x7</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">New Features & Upgrades</span>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Executive Reporting</span>
                        <span className="text-sm font-medium text-gray-900">Monthly</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">AirGap Recovery Testing</span>
                        <span className="text-sm font-medium text-gray-900">Twice a year</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Health Check Analysis</span>
                        <span className="text-sm font-medium text-gray-900">Quarterly</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Disaster Recovery Testing</span>
                        <span className="text-sm font-medium text-gray-900">Annually</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Audit Reports</span>
                        <span className="text-sm font-medium text-gray-900">Annually</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Remote Monitoring</span>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Remote Remediation</span>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Remote Management</span>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Remote Operations</span>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-light text-gray-900 mb-6">
                  Contact us today to find out how Arrosoft AirGap can be your last line of defense against ransomware attacks.
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    Contact Sales <ArrowRight className="w-4 h-4" />
                  </Button>
                  <div className="text-gray-600 text-center sm:text-left">
                    <p className="mb-1">sales@arrosoft.com</p>
                    <p className="text-sm">530 Union Ave. Suite 1 Middlesex, NJ 08846</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}