import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Services</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional services and consulting to transform your IT infrastructure.
              </p>
              <Button size="lg">Request Consultation</Button>
            </div>
          </div>
        </section>
        
        {/* Content will be rebuilt later */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">Services content will be rebuilt soon.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}