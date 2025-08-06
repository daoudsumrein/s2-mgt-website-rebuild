
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import s2Logo from "@/assets/s2-logo-new.png";

const solutions = [
  { name: "Disaster Recovery", href: "/solutions/disaster-recovery" },
  { name: "Data Protection", href: "/solutions/data-protection" },
  { name: "Application Modernization", href: "/solutions/app-modernization" },
  { name: "IT Discovery", href: "/solutions/it-discovery" },
  { name: "Secure Cloud", href: "/solutions/secure-cloud" },
  { name: "Security", href: "/solutions/security" }
];

const vendors = [
  { name: "OpenText", href: "/vendors/opentext" },
  { name: "TDS", href: "/vendors/tds" },
  { name: "AppCURE", href: "/vendors/appcure" },
  { name: "Sangfor", href: "/vendors/sangfor" }
];

export default function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-3 md:space-y-4 sm:col-span-2 lg:col-span-1">
            <img src="/lovable-uploads/eb7f3e31-40a6-49e7-9ffc-c95c8289130d.png" alt="S2 Management Solutions" className="h-6 md:h-8 w-auto" />
            <div className="space-y-1.5 md:space-y-2">
              <div className="flex items-start space-x-2 text-xs md:text-sm text-muted-foreground">
                <MapPin className="h-3 md:h-4 w-3 md:w-4 mt-0.5 flex-shrink-0" />
                <span>Office 101, Building 10, Dubai Internet City, UAE.</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground">
                <Phone className="h-3 md:h-4 w-3 md:w-4" />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-start space-x-2 text-xs md:text-sm text-muted-foreground">
                <MapPin className="h-3 md:h-4 w-3 md:w-4 mt-0.5 flex-shrink-0" />
                <span>KSA Office Address Here</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground">
                <Phone className="h-3 md:h-4 w-3 md:w-4" />
                <span>+966 X XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground">
                <Mail className="h-3 md:h-4 w-3 md:w-4" />
                <a href="mailto:info@s2mgt.com" className="hover:text-primary transition-colors">
                  info@s2mgt.com
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-semibold text-sm md:text-base">Solutions</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link 
                    to={solution.href} 
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-semibold text-sm md:text-base">Services</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li>
                <Link to="/services" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/solutions/disaster-recovery" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Disaster Recovery
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-protection" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Data Protection
                </Link>
              </li>
              <li>
                <Link to="/solutions/app-modernization" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                  App Modernization
                </Link>
              </li>
            </ul>
          </div>

          {/* Vendors */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-semibold text-sm md:text-base">Our Vendors</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {vendors.map((vendor) => (
                <li key={vendor.href}>
                  <Link 
                    to={vendor.href} 
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {vendor.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-semibold text-sm md:text-base">Company</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li>
                <Link to="/about" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                  About S2
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <div className="pt-2 md:pt-4">
              <h4 className="font-medium mb-1.5 md:mb-2 text-sm md:text-base">Partners</h4>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://preview--pipeline-pro-portal.lovable.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm"
                >
                  Partner Portal
                  <ExternalLink className="h-2.5 md:h-3 w-2.5 md:w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2024 S2 Management Solutions. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com/company/s2-management-solutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 md:h-5 w-4 md:w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
