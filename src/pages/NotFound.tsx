import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead 
        title="Page Not Found - S2 Management Solutions"
        description="The page you're looking for doesn't exist. Return to S2 Management Solutions homepage for IT transformation and cybersecurity solutions."
        keywords="404 error, page not found, S2 Management Solutions"
        canonicalUrl="https://s2mgt.com/404"
      />
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">404</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">Oops! Page not found</p>
          <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
