
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
      <div className="container mx-auto px-3 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Company Info */}
          <div className="space-y-2">
            <img src="/lovable-uploads/eb7f3e31-40a6-49e7-9ffc-c95c8289130d.png" alt="S2 Management Solutions" className="h-5 md:h-6 w-auto" />
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>Dubai Internet City, UAE</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Mail className="h-3 w-3" />
                <a href="mailto:info@s2mgt.com" className="hover:text-primary transition-colors">
                  info@s2mgt.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Solutions</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/solutions/disaster-recovery" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Disaster Recovery
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-protection" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Data Protection
                </Link>
              </li>
              <li>
                <Link to="/solutions/security" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  About S2
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/vendors" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Connect</h3>
            <div className="flex items-center space-x-3">
              <a 
                href="https://linkedin.com/company/s2-management-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <Button variant="outline" size="sm" asChild className="mt-2">
              <a 
                href="https://preview--pipeline-pro-portal.lovable.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs"
              >
                Partner Portal
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-4 pt-3 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 S2 Management Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
