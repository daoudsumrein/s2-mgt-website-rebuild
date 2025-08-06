
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import s2Logo from "@/assets/s2-logo-new.png";

const solutions = [
  { name: "Disaster Recovery", href: "/solutions/disaster-recovery" },
  { name: "Data Protection", href: "/solutions/data-protection" },
  { name: "Security", href: "/solutions/security" }
];

const vendors = [
  { name: "OpenText", href: "/vendors/opentext" },
  { name: "TDS", href: "/vendors/tds" }
];

export default function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-2 py-2 md:px-3 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
          {/* Company Info */}
          <div className="space-y-2 md:space-y-3">
            <img src="/lovable-uploads/eb7f3e31-40a6-49e7-9ffc-c95c8289130d.png" alt="S2 Management Solutions" className="h-4 md:h-6 w-auto" />
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Mail className="h-3 w-3" />
                <a href="mailto:info@s2mgt.com" className="hover:text-primary transition-colors">
                  info@s2mgt.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Phone className="h-3 w-3" />
                <span>+971 4 123 4567</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-2 md:space-y-3">
            <h3 className="font-semibold text-sm">Solutions</h3>
            <ul className="space-y-1">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link 
                    to={solution.href} 
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vendors */}
          <div className="hidden md:block space-y-2 md:space-y-3">
            <h3 className="font-semibold text-sm">Vendors</h3>
            <ul className="space-y-1">
              {vendors.map((vendor) => (
                <li key={vendor.href}>
                  <Link 
                    to={vendor.href} 
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {vendor.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2 md:space-y-3">
            <h3 className="font-semibold text-sm">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://preview--pipeline-pro-portal.lovable.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Partner Portal
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-2 md:mt-6 pt-2 md:pt-4 flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © 2024 S2 Management Solutions
          </p>
          <a 
            href="https://linkedin.com/company/s2-management-solutions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
