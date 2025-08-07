import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ClientCarousel from "@/components/ClientCarousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function Clients() {
  return <>
      <SEOHead title="Our Clients - S2 Management Solutions" description="Discover the diverse range of clients we serve across healthcare, finance, education, and manufacturing sectors with our data protection and cybersecurity solutions." keywords="S2 clients, cybersecurity clients, data protection customers, IT solutions clients" />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Our Valued <span className="text-primary">Clients</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              S2 Management Solutions proudly serves a diverse range of businesses, delivering innovative solutions in Data Management, CyberSecurity, Backup, and more. Our commitment to excellence ensures our customers achieve their goals with confidence.
            </p>
          </div>


          {/* Client Carousel */}
          <section className="mb-16">
            
            <ClientCarousel />
          </section>

          {/* Trust Indicators */}
          <section className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-6">Trusted by Organizations Nationwide</h2>
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
          </section>
        </main>

        <Footer />
      </div>
    </>;
}