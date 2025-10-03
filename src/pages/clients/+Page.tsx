import ClientCarousel from "@/components/ClientCarousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Clients() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: carouselRef, isInView: carouselInView } = useScrollAnimation();
  const { ref: trustRef, isInView: trustInView } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Our Valued <span className="text-primary">Clients</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            S2 Management Solutions delivers expert Data Management, Cybersecurity, and Backup services helping businesses achieve their goals with confidence.
          </p>
        </motion.div>

        {/* Client Carousel */}
        <motion.section 
          ref={carouselRef}
          initial={{ opacity: 0, y: 30 }}
          animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <ClientCarousel />
        </motion.section>

        {/* Trust Indicators */}
        <motion.section 
          ref={trustRef}
          initial={{ opacity: 0, y: 30 }}
          animate={trustInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="bg-muted/50 rounded-lg p-8 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Trusted by Organizations Nationwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Active Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export const documentProps = {
  title: "Our Clients - S2 Management Solutions",
  description: "Discover the diverse range of clients we serve across healthcare, finance, education, and manufacturing sectors with our data protection and cybersecurity solutions.",
  keywords: "S2 clients, cybersecurity clients, data protection customers, IT solutions clients"
}
