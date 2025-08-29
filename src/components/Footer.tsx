import { Link } from "react-router-dom";
import { ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const solutions = [{
  name: "All Services",
  href: "/services"
}, {
  name: "Disaster Recovery",
  href: "/solutions/opentext-carbonite-availability"
}, {
  name: "Data Protection",
  href: "/solutions/data-protection"
}, {
  name: "Application Modernization",
  href: "/solutions/app-modernization"
}, {
  name: "IT Discovery",
  href: "/solutions/it-discovery"
}, {
  name: "Secure Cloud",
  href: "/solutions/secure-cloud"
}, {
  name: "Security",
  href: "/solutions/security"
}];
const vendors = [{
  name: "OpenText",
  href: "/vendors/opentext"
}, {
  name: "TDS",
  href: "/vendors/tds"
}, {
  name: "AppCURE",
  href: "/vendors/appcure"
}, {
  name: "Arrosoft",
  href: "/vendors/arrosoft"
}, {
  name: "Nakivo",
  href: "/vendors/nakivo"
}];
export default function Footer() {
  const {
    ref: footerRef,
    isInView: footerInView
  } = useScrollAnimation();
  return <motion.footer ref={footerRef} initial={{
    opacity: 0,
    y: 30
  }} animate={footerInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 30
  }} transition={{
    duration: 0.6
  }} className="bg-muted border-t">
      <div className="container mx-auto px-5 pt-10 pb-4">
        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {/* Contact Information Mobile */}
          <div className="space-y-4">
            <div className="text-base font-semibold text-foreground">📞 Contact Information</div>
            
            {/* UAE Office */}
            <div className="pb-4 border-b border-border">
              <div className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" className="flex-shrink-0">
                  <path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#ea3323"></path>
                  <path d="M10,20v8H27c2.209,0,4-1.791,4-4v-4H10Z"></path>
                  <path fill="#fff" d="M10 11H31V21H10z"></path>
                  <path d="M27,4H10V12H31v-4c0-2.209-1.791-4-4-4Z" fill="#317234"></path>
                  <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                  <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                </svg>
                UAE Office
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">📍</span>
                  <span>Office 101, Building 10, Dubai Internet City, UAE</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">📞</span>
                  <a href="tel:+97141234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +971 4 123 4567
                  </a>
                </div>
              </div>
            </div>
            
            {/* Saudi Arabia Office */}
            <div>
              <div className="font-semibold text-sm text-foreground mb-2">🇸🇦 Saudi Arabia Office</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">📍</span>
                  <span>Building No. 7036, Saiyda st., Riyadh Saudi Arabia | P.O. Box: 12796, Riyadh, KSA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">📞</span>
                  <a href="tel:+966550846532" className="text-muted-foreground hover:text-primary transition-colors">
                    +966 550846532
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Collapsible Sections */}
          <div className="space-y-4">
            {/* Solutions & Services Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-semibold text-left">
                Solutions & Services
                <span className="text-sm">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 pt-2">
                {solutions.map(solution => <div key={solution.href}>
                    <Link to={solution.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      {solution.name}
                    </Link>
                  </div>)}
              </CollapsibleContent>
            </Collapsible>

            {/* Vendors Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-semibold text-left">
                Our Vendors
                <span className="text-sm">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 pt-2">
                {vendors.map(vendor => <div key={vendor.href}>
                    <Link to={vendor.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      {vendor.name}
                    </Link>
                  </div>)}
              </CollapsibleContent>
            </Collapsible>

            {/* Company & Partners Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-semibold text-left">
                Company
                <span className="text-sm">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4 pt-2">
                <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                  About S2
                </Link>
                <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                  Contact Us
                </Link>
                <a href="https://preview--pipeline-pro-portal.lovable.app" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                  Employee Login
                </a>
                
                <div>
                  <div className="font-semibold text-sm text-foreground mb-2">Partners</div>
                  <a href="https://preview--pipeline-pro-portal.lovable.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                    Partner Portal 
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8">
          {/* Contact Information Section */}
          <div className="space-y-4">
            <div className="text-base font-semibold text-foreground">📞 Contact Information</div>
            
            {/* UAE Office */}
            <div className="pb-4 mb-5 border-b border-border">
              <div className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" className="flex-shrink-0">
                  <path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#ea3323"></path>
                  <path d="M10,20v8H27c2.209,0,4-1.791,4-4v-4H10Z"></path>
                  <path fill="#fff" d="M10 11H31V21H10z"></path>
                  <path d="M27,4H10V12H31v-4c0-2.209-1.791-4-4-4Z" fill="#317234"></path>
                  <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                  <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                </svg>
                UAE Office
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">📍</span>
                  <span>Office 101, Building 10, Dubai Internet City, UAE</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">📞</span>
                  <a href="tel:+97141234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +971 4 123 4567
                  </a>
                </div>
              </div>
            </div>
            
            {/* Saudi Arabia Office */}
            <div>
              <div className="font-semibold text-sm text-foreground mb-2">🇸🇦 Saudi Arabia Office</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">📍</span>
                  <span>Building No. 7036, Saiyda st., Riyadh Saudi Arabia | P.O. Box: 12796, Riyadh, KSA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">📞</span>
                  <a href="tel:+966550846532" className="text-muted-foreground hover:text-primary transition-colors">
                    +966 550846532
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions & Services Section */}
          <div className="space-y-4">
            <div className="text-base font-semibold text-foreground">Solutions & Services</div>
            <ul className="space-y-2">
              {solutions.map(solution => <li key={solution.href}>
                  <Link to={solution.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {solution.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Our Vendors Section */}
          <div className="space-y-4">
            <div className="text-base font-semibold text-foreground">Our Vendors</div>
            <ul className="space-y-2">
              {vendors.map(vendor => <li key={vendor.href}>
                  <Link to={vendor.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {vendor.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company & Partners Section */}
          <div className="space-y-4">
            <div className="text-base font-semibold text-foreground">Company</div>
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
              <li>
                <a href="https://preview--pipeline-pro-portal.lovable.app" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Employee Login
                </a>
              </li>
            </ul>
            
            <div className="mt-5">
              <div className="text-base font-semibold text-foreground mb-2">Partners</div>
              <ul className="space-y-2">
                <li>
                  <a href="https://preview--pipeline-pro-portal.lovable.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                    Partner Portal 
                    <span className="text-xs">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-border mt-8 pt-4 flex flex-col lg:flex-row justify-between items-center lg:space-y-0">
          <div className="flex items-center space-x-4">
            <a href="https://linkedin.com/company/s2-management-solutions" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
              <Linkedin className="h-6 w-6 my-[6px]" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 S2 Management Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>;
}