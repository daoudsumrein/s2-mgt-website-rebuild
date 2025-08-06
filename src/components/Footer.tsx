import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
      <div className="container mx-auto px-4 py-12">
        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/lovable-uploads/eb7f3e31-40a6-49e7-9ffc-c95c8289130d.png" alt="S2 Management Solutions" className="h-8 w-auto" />
            <div className="space-y-2">
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Office 101, Building 10, Dubai Internet City, UAE.</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>KSA Office Address Here</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+966 X XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@s2mgt.com" className="hover:text-primary transition-colors">
                  info@s2mgt.com
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Collapsible Sections */}
          <div className="space-y-4">
            {/* Solutions Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-semibold text-left">
                Solutions
                <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 pt-2">
                {solutions.map((solution) => (
                  <div key={solution.href}>
                    <Link 
                      to={solution.href} 
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {solution.name}
                    </Link>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Services Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-semibold text-left">
                Services
                <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 pt-2">
                <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                  All Services
                </Link>
                <Link to="/solutions/disaster-recovery" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                  Disaster Recovery
                </Link>
                <Link to="/solutions/data-protection" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                  Data Protection
                </Link>
                <Link to="/solutions/app-modernization" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                  App Modernization
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Vendors Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-semibold text-left">
                Our Vendors
                <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 pt-2">
                {vendors.map((vendor) => (
                  <div key={vendor.href}>
                    <Link 
                      to={vendor.href} 
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {vendor.name}
                    </Link>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Company Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-semibold text-left">
                Company
                <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 pt-2">
                <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                  About S2
                </Link>
                <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                  Contact Us
                </Link>
                <div className="pt-2">
                  <h4 className="font-medium mb-2 text-sm">Partners</h4>
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
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        {/* Desktop Grid - 5 columns aligned */}
        <div className="hidden md:grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/lovable-uploads/eb7f3e31-40a6-49e7-9ffc-c95c8289130d.png" alt="S2 Management Solutions" className="h-8 w-auto" />
            <div className="space-y-2">
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Office 101, Building 10, Dubai Internet City, UAE.</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>KSA Office Address Here</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+966 X XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@s2mgt.com" className="hover:text-primary transition-colors">
                  info@s2mgt.com
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link 
                    to={solution.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/solutions/disaster-recovery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Disaster Recovery
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-protection" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Data Protection
                </Link>
              </li>
              <li>
                <Link to="/solutions/app-modernization" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  App Modernization
                </Link>
              </li>
            </ul>
          </div>

          {/* Vendors */}
          <div className="space-y-4">
            <h3 className="font-semibold">Our Vendors</h3>
            <ul className="space-y-2">
              {vendors.map((vendor) => (
                <li key={vendor.href}>
                  <Link 
                    to={vendor.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {vendor.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About S2
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <div className="pt-4">
              <h4 className="font-medium mb-2">Partners</h4>
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
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 S2 Management Solutions. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com/company/s2-management-solutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}