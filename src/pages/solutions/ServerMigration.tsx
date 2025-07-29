import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Cloud, Zap, RefreshCw, CheckCircle, Target } from "lucide-react";

export default function ServerMigration() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Server Migration Solutions MENA - Seamless Infrastructure Migration | S2 Solutions"
        description="Professional server migration services for MENA enterprises. Any-to-any server migrations with zero downtime using OpenText Migrate technology. Serving UAE, Saudi Arabia, and Middle East."
        keywords="server migration MENA, infrastructure migration UAE, OpenText Migrate Middle East, zero downtime migration Saudi Arabia, cloud migration, data center migration"
        canonicalUrl="https://s2mgt.com/solutions/server-migration"
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Server Migration</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Seamless any-to-any server migrations with minimal downtime
              </p>
              <Button size="lg">Request Migration Assessment</Button>
            </div>
          </div>
        </section>

        {/* Placeholder Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card>
                <CardContent className="p-12">
                  <Server className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h2 className="text-2xl font-bold mb-4">Server Migration Solutions</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    This page will be populated with detailed server migration content including features, 
                    technologies, and migration methodologies.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">Zero Downtime</h3>
                      <p className="text-sm text-muted-foreground">Live migration capabilities</p>
                    </div>
                    <div className="text-center">
                      <Cloud className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">Any-to-Any</h3>
                      <p className="text-sm text-muted-foreground">Platform agnostic migrations</p>
                    </div>
                    <div className="text-center">
                      <RefreshCw className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">Real-time Sync</h3>
                      <p className="text-sm text-muted-foreground">Continuous replication</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}