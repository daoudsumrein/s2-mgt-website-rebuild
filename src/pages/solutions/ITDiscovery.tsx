import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ITDiscovery() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-16 bg-gradient-to-b from-primary-light to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">IT Discovery & Dependency Mapping</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive infrastructure analysis and dependency visualization.
              </p>
              <Button size="lg">Request Consultation</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}