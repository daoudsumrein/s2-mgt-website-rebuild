import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function NakivoPage() {
  const features = [
    "Trusted by organizations with strict cybersecurity standards",
    "One platform for all data protection needs",
    "Fraction of the cost of competitors"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section with Background */}
        <section className="min-h-screen relative overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(30, 115, 190, 0.9) 0%, rgba(46, 141, 214, 0.8) 50%, rgba(74, 159, 240, 0.7) 100%), url('https://www.nakivo.com/res/images/pages/trial/bg-top.webp')`
            }}
          />

          <div className="relative z-10 min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content Section */}
                <motion.div 
                  className="text-white lg:pr-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.h1 
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    Why Choose<br />
                    NAKIVO
                  </motion.h1>

                  <motion.p 
                    className="text-lg lg:text-xl leading-relaxed mb-8 text-white/95 max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    Customers choose NAKIVO Backup & Replication for the advanced feature set, 
                    superior performance and highly-rated technical support team.
                  </motion.p>

                  <motion.ul 
                    className="space-y-4 mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  >
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white/95 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </motion.ul>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg font-semibold text-sm tracking-wide uppercase px-8 py-3"
                      asChild
                    >
                      <a href="/contact">
                        Download Guide
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Video Section */}
                <motion.div 
                  className="lg:pl-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <div className="bg-white rounded-xl p-6 lg:p-8 shadow-2xl backdrop-blur-sm">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-6">
                      NAKIVO Overview
                    </h2>
                    
                    {/* Larger Video Container */}
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
                        src="https://www.youtube.com/embed/p267EiNziU4"
                        title="NAKIVO Backup & Replication Overview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Content Sections can be added here */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Why NAKIVO Stands Out</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg">Enterprise Security</h3>
                  <p className="text-muted-foreground">
                    Trusted by organizations with the strictest cybersecurity requirements and compliance standards.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg">Unified Platform</h3>
                  <p className="text-muted-foreground">
                    Complete data protection solution covering backup, replication, and recovery in one platform.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg">Cost Effective</h3>
                  <p className="text-muted-foreground">
                    Achieve enterprise-grade data protection at a fraction of the cost of competing solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Transform Your Data Protection Strategy?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let S2's data protection experts help you implement NAKIVO's comprehensive backup and replication solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">
                  Schedule NAKIVO Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="https://www.nakivo.com" target="_blank" rel="noopener noreferrer">
                  Learn More About NAKIVO
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}