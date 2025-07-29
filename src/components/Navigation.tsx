import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react";
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
    href: "/solutions/disaster-recovery",
    description: "Comprehensive DR planning and orchestration"
  },
  {
    title: "Server Migration",
    href: "/solutions/server-migration",
    description: "Seamless any-to-any server migrations"
  },
  {
    title: "DR & Migration Orchestration",
    href: "/solutions/dr-orchestration",
    description: "Automated workflow orchestration"
  },
  {
    title: "Endpoint Cloud Backup",
    href: "/solutions/endpoint-backup",
    description: "Cloud-based endpoint protection"
  },
  {
    title: "Servers Cloud Backup",
    href: "/solutions/server-backup",
    description: "Server backup and replication"
  },
  {
    title: "On Prem Backup",
    href: "/solutions/onprem-backup",
    description: "Local backup solutions"
  },
  {
    title: "Cloud-to-Cloud Backup",
    href: "/solutions/cloud-to-cloud-backup",
    description: "SaaS data protection and backup"
  },
  {
    title: "Email Archiving",
    href: "/solutions/email-archiving",
    description: "Compliance and continuity"
  }
];

const cybersecuritySolutions = [
  {
    title: "Endpoint Protection",
    href: "/solutions/endpoint-protection",
    description: "Advanced endpoint security"
  },
  {
    title: "EDR",
    href: "/solutions/edr",
    description: "Endpoint Detection and Response"
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
  }
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
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img src="/lovable-uploads/fe3bd2a5-dd8f-4976-ae4b-b206b6aec68e.png" alt="S2 Management Solutions" className="h-8 w-8 rounded-full object-contain" />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
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
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-4">
                    <div className="mb-4">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/solutions"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 text-lg font-medium">
                            View All Solutions
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Comprehensive data protection and cybersecurity solutions for enterprise infrastructure.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {/* Data Protection Column */}
                      <div>
                        <h3 className="font-semibold text-sm mb-3 text-primary">Data Protection Solutions</h3>
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
                        <h3 className="font-semibold text-sm mb-3 text-secondary">Cybersecurity Solutions</h3>
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
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      isActive("/contact") ? "text-primary" : ""
                    }`}
                  >
                    Contact Us
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
              <MobileNav setIsOpen={setIsOpen} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MobileNav({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
  return (
    <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
      <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
        <img src="/lovable-uploads/fe3bd2a5-dd8f-4976-ae4b-b206b6aec68e.png" alt="S2 Management Solutions" className="h-8 w-8 rounded-full object-contain" />
      </Link>
      <div className="flex flex-col space-y-3 mt-6">
        <Link to="/about" onClick={() => setIsOpen(false)} className="text-sm font-medium">
          About S2
        </Link>
        <Link to="/services" onClick={() => setIsOpen(false)} className="text-sm font-medium">
          Services
        </Link>
        <div className="space-y-2">
          <div className="text-sm font-medium text-muted-foreground">Solutions</div>
          <Link to="/solutions" onClick={() => setIsOpen(false)} className="block text-sm pl-4 text-muted-foreground hover:text-foreground">
            All Solutions
          </Link>
          <div className="pl-4 space-y-1">
            <div className="text-xs font-medium text-primary">Data Protection</div>
            {dataProtectionSolutions.map((solution) => (
              <Link
                key={solution.href}
                to={solution.href}
                onClick={() => setIsOpen(false)}
                className="block text-xs pl-4 text-muted-foreground hover:text-foreground"
              >
                {solution.title}
              </Link>
            ))}
          </div>
          <div className="pl-4 space-y-1">
            <div className="text-xs font-medium text-secondary">Cybersecurity</div>
            {cybersecuritySolutions.map((solution) => (
              <Link
                key={solution.href}
                to={solution.href}
                onClick={() => setIsOpen(false)}
                className="block text-xs pl-4 text-muted-foreground hover:text-foreground"
              >
                {solution.title}
              </Link>
            ))}
          </div>
        </div>
        <Link to="/vendors" onClick={() => setIsOpen(false)} className="text-sm font-medium">
          Our Vendors
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="text-sm font-medium">
          Contact Us
        </Link>
        <a 
          href="https://preview--pipeline-pro-portal.lovable.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          Partner Portal
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}