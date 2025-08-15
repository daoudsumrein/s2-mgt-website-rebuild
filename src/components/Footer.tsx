import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import s2Logo from "@/assets/s2-logo-new.png";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const solutions = [
  { name: "Data Protection", href: "/solutions" },
  { name: "Cyber Security", href: "/solutions" }
];

const vendors = [
  { name: "OpenText", href: "/vendors/opentext" },
  { name: "TDS", href: "/vendors/tds" },
  { name: "AppCURE", href: "/vendors/appcure" },
  { name: "Sangfor", href: "/vendors/sangfor" }
];

export default function Footer() {
  const { ref: footerRef, isInView: footerInView } = useScrollAnimation();
  
  return (
    <motion.footer 
      ref={footerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="bg-muted border-t"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Simple Horizontal Layout */}
        <div className="space-y-6">
          {/* LinkedIn */}
          <div className="flex justify-center">
            <a 
              href="https://linkedin.com/company/s2-management-solutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>

          {/* Locations */}
          <div className="text-center space-y-4">
            <h3 className="font-semibold text-lg">Locations:</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-medium">🇦🇪 UAE:</span>
                <span>Office 101, Building 10, Dubai Internet City</span>
                <span>|</span>
                <a href="tel:+97141234567" className="hover:text-primary transition-colors">+971 4 123 4567</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">🇸🇦 KSA:</span>
                <span>Building No. 7036, Saiyda st., Riyadh</span>
                <span>|</span>
                <a href="tel:+966550846532" className="hover:text-primary transition-colors">+966 550846532</a>
              </div>
            </div>
          </div>

          {/* Contact & Business Hours */}
          <div className="text-center space-y-2">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:admin@s2mgt.com" className="hover:text-primary transition-colors">
                  admin@s2mgt.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Business Hours:</span>
                <span>Monday to Friday, 9:00 AM to 6:00 PM (GST)</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-4">
                <span className="font-medium">Solutions:</span>
                {solutions.map((solution, index) => (
                  <span key={solution.href}>
                    <Link to={solution.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {solution.name}
                    </Link>
                    {index < solutions.length - 1 && <span className="ml-4 text-muted-foreground">•</span>}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium">Company:</span>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium">Vendors:</span>
                {vendors.map((vendor, index) => (
                  <span key={vendor.href}>
                    <Link to={vendor.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {vendor.name}
                    </Link>
                    {index < vendors.length - 1 && <span className="ml-4 text-muted-foreground">•</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Partner Portal */}
          <div className="flex justify-center">
            <Button variant="outline" size="sm" asChild>
              <a 
                href="https://preview--pipeline-pro-portal.lovable.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Partner Portal
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-2 pt-2 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 S2 Management Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}