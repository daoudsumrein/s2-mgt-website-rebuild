import { useState, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ExternalLink, Shield, Database, Home, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import s2Logo from "@/assets/s2-logo-new.png";

const dataProtectionSolutions = [
  {
    title: "Disaster Recovery",
    href: "/solutions/opentext-carbonite-availability",
    description: "Comprehensive DR planning and orchestration"
  },
  {
    title: "Server Migration",
    href: "/solutions/opentext-carbonite-migrate",
    description: "Seamless any-to-any server migrations"
  },
  {
    title: "Disaster Recovery Orchestration",
    href: "/solutions/disaster-recovery-orchestration",
    description: "Automated DR workflow orchestration"
  },
  {
    title: "Server Migration Orchestration",
    href: "/solutions/server-migration-orchestration", 
    description: "Automated migration workflow management"
  },
  {
    title: "Endpoint Cloud Backup",
    href: "/solutions/endpoint-backup",
    description: "Cloud-based endpoint protection"
  },
  {
    title: "Cloud to Cloud Backup",
    href: "/solutions/saas-backup",
    description: "SaaS backup and protection"
  },
  {
    title: "NAKIVO Backup & Replication",
    href: "/solutions/Nakivo-Backup&Replication",
    description: "Complete data protection platform"
  },
  {
    title: "Server Backup",
    href: "/solutions/OpenText-Server-Backup",
    description: "Server backup and replication"
  },
  {
    title: "Email Archiving",
    href: "/solutions/email-archiving",
    description: "Compliance and continuity"
  }
];

const cybersecuritySolutions = [
  {
    title: "Servers and Data Protection",
    href: "/solutions/servers-data-protection",
    description: "Insider threat protection and access control"
  },
  {
    title: "Endpoint Protection",
    href: "/solutions/endpoint-protection",
    description: "Advanced endpoint security"
  },
  {
    title: "Ransomware Protection",
    href: "/solutions/ransomware-protection",
    description: "Advanced ransomware defense systems"
  },
  {
    title: "MDR",
    href: "/solutions/mdr",
    description: "Managed Detection and Response"
  },
  {
    title: "Security Awareness",
    href: "/solutions/security-awareness",
    description: "User security training"
  },
  {
    title: "Email Protection",
    href: "/solutions/email-protection",
    description: "Email threat protection"
  },
  {
    title: "Email Encryption",
    href: "/solutions/email-encryption",
    description: "Secure email communications"
  },
];

const vendors = [
  {
    name: "OpenText",
    href: "/vendors/opentext",
    description: "Data Protection & Secure Cloud Platform"
  },
  {
    name: "TDS",
    href: "/vendors/tds",
    description: "Orchestration & IT Visibility"
  },
  {
    name: "AppCURE",
    href: "/vendors/appcure",
    description: "Application Modernization"
  },
  {
    name: "Sangfor",
    href: "/vendors/sangfor",
    description: "Infrastructure & Cybersecurity"
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataProtectionOpen, setDataProtectionOpen] = useState(false);
  const [cybersecurityOpen, setCybersecurityOpen] = useState(false);
  const location = useLocation();

  // Memoized function to prevent recreation on every render
  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  // Memoized handler to prevent recreation
  const handleSolutionsClick = useCallback(() => {
    window.location.href = '/solutions';
  }, []);

  // Memoized close handler
  const handleSheetClose = useCallback(() => setIsOpen(false), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 will-change-transform">
      <div className="container flex h-24 items-center">
        {/* Mobile Logo */}
        <Link to="/" className="mr-4 flex items-center md:hidden">
          <img src="/lovable-uploads/fe3bd2a5-dd8f-4976-ae4b-b206b6aec68e.png" alt="S2 Management Solutions" className="h-16 w-auto object-contain" />
        </Link>
        
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img src="/lovable-uploads/fe3bd2a5-dd8f-4976-ae4b-b206b6aec68e.png" alt="S2 Management Solutions" className="h-20 w-auto object-contain" />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 gap-2 ${
                      isActive("/") ? "text-primary" : ""
                    }`}
                  >
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About S2</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">All About S2</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Company overview, mission, team, and regional expertise
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/vendors"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Our Vendors</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Technology partners and solution stack
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/clients"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Our Clients</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Industries we serve and client success stories
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/services"
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      isActive("/services") ? "text-primary" : ""
                    }`}
                  >
                    Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={`will-change-transform transition-colors duration-150 ${isActive("/solutions") ? "text-primary" : ""}`}
                  onClick={handleSolutionsClick}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-4 will-change-transform">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Data Protection Column */}
                      <div>
                        <h3 className="font-semibold text-sm mb-3 text-black flex items-center gap-2">
                          <Database className="h-4 w-4 text-primary" />
                          Data Protection Solutions
                        </h3>
                        <ul className="space-y-2">
                          {dataProtectionSolutions.map((solution) => (
                            <li key={solution.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={solution.href}
                                  className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-xs font-medium leading-none">{solution.title}</div>
                                  <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                    {solution.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cybersecurity Column */}
                      <div>
                        <h3 className="font-semibold text-sm mb-3 text-black flex items-center gap-2">
                          <Shield className="h-4 w-4 text-teal-500" />
                          Cybersecurity Solutions
                        </h3>
                        <ul className="space-y-2">
                          {cybersecuritySolutions.map((solution) => (
                            <li key={solution.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={solution.href}
                                  className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-xs font-medium leading-none">{solution.title}</div>
                                  <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                    {solution.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/contact"
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 gap-2 ${
                      isActive("/contact") ? "text-primary" : ""
                    }`}
                  >
                    Contact Us
                    <span className="relative flex size-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Partner Portal Link */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
              <a 
                href="https://odoo.s2mgt.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Employee Login
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav setIsOpen={handleSheetClose} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MobileNav({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
  const [dataProtectionOpen, setDataProtectionOpen] = useState(false);
  const [cybersecurityOpen, setCybersecurityOpen] = useState(false);

  return (
    <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 overflow-y-auto">
      <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
        <img src="/lovable-uploads/fe3bd2a5-dd8f-4976-ae4b-b206b6aec68e.png" alt="S2 Management Solutions" className="h-16 w-auto object-contain" />
      </Link>
      <div className="flex flex-col space-y-3 mt-6">
        <Link to="/" onClick={() => setIsOpen(false)} className="text-sm font-medium flex items-center gap-2 hover:text-primary transition-colors">
          <Home className="h-4 w-4" />
          Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">
          About S2
        </Link>
        <Link to="/services" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">
          Services
        </Link>
        
        {/* Solutions with animated dropdowns */}
        <div className="space-y-2">
          <Link to="/solutions" onClick={() => setIsOpen(false)} className="block text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
            All Solutions
          </Link>
          
          {/* Data Protection Dropdown */}
          <div className="pl-4 space-y-1">
            <button
              onClick={() => setDataProtectionOpen(!dataProtectionOpen)}
              className="text-xs font-medium text-black flex items-center justify-between w-full group hover:text-primary transition-colors"
            >
              <div className="flex items-center gap-2">
                <Database className="h-3 w-3 text-primary" />
                Data Protection
              </div>
              {dataProtectionOpen ? (
                <Minus className="h-3 w-3 transition-transform duration-200 mr-2" />
              ) : (
                <Plus className="h-3 w-3 transition-transform duration-200 mr-2" />
              )}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dataProtectionOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pt-1 space-y-1">
                {dataProtectionSolutions.map((solution) => (
                  <Link
                    key={solution.href}
                    to={solution.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-xs pl-4 text-muted-foreground hover:text-primary transition-colors py-1"
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Cybersecurity Dropdown */}
          <div className="pl-4 space-y-1">
            <button
              onClick={() => setCybersecurityOpen(!cybersecurityOpen)}
              className="text-xs font-medium text-black flex items-center justify-between w-full group hover:text-primary transition-colors"
            >
              <div className="flex items-center gap-2">
                <Shield className="h-3 w-3 text-teal-500" />
                Cybersecurity
              </div>
              {cybersecurityOpen ? (
                <Minus className="h-3 w-3 transition-transform duration-200 mr-2" />
              ) : (
                <Plus className="h-3 w-3 transition-transform duration-200 mr-2" />
              )}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${cybersecurityOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pt-1 space-y-1">
                {cybersecuritySolutions.map((solution) => (
                  <Link
                    key={solution.href}
                    to={solution.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-xs pl-4 text-muted-foreground hover:text-primary transition-colors py-1"
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <Link to="/vendors" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">
          Our Vendors
        </Link>
        <Link to="/clients" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">
          Our Clients
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">
          Contact Us
        </Link>
        <a 
          href="https://odoo.s2mgt.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium flex items-center gap-2 hover:text-primary transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Employee Login
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}