import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, CheckCircle, ArrowRight } from "lucide-react";
const solutions = [{
  category: "Data Protection",
  products: [{
    name: "Availability",
    description: "Real-time HA replication for any-to-any server protection",
    features: ["Zero-downtime protection", "Any-to-any replication", "Automated failover", "Cross-platform support"]
  }, {
    name: "Migrate",
    description: "Live server migration with zero business interruption",
    features: ["Any-to-any migration", "Live workload mobility", "Cloud migration", "Zero downtime"]
  }]
}, {
  category: "Secure Cloud",
  products: [{
    name: "Cloud-to-Cloud Backup",
    description: "Comprehensive backup for Microsoft 365, Google Workspace, Salesforce, Box, and Dropbox",
    features: ["Complete M365 protection", "Google Workspace backup", "Salesforce data protection", "Box & Dropbox backup", "Unlimited retention", "Granular recovery"]
  }, {
    name: "Email Archiving & Continuity",
    description: "Email protection, archiving, and business continuity",
    features: ["Email continuity", "Compliance archiving", "Advanced search", "Legal hold"]
  }, {
    name: "Secure Cloud",
    description: "Complete security and protection suite for enterprise environments",
    features: ["Endpoint Protection", "EDR (Endpoint Detection & Response)", "MDR (Managed Detection & Response)", "Email Encryption", "DNS Protection", "Security Awareness Training"]
  }]
}];
export default function OpenTextPage() {
  return <div className="min-h-screen bg-background">
      <SEOHead 
        title="OpenText Data Protection Solutions - S2 Management Solutions"
        description="Enterprise-grade OpenText data protection, disaster recovery, and secure cloud solutions. Zero-downtime migrations, high availability, and comprehensive backup for MENA businesses."
        keywords="OpenText data protection, disaster recovery, zero downtime migration, enterprise backup, high availability, secure cloud, data replication, business continuity"
        canonicalUrl="https://s2mgt.com/vendors/opentext"
        ogImage="https://s2mgt.com/assets/opentext-og.png"
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white backdrop-blur-sm rounded-lg flex items-center justify-center p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="42" viewBox="0 0 200 32" fill="none" className="w-52 h-auto rounded-sm">
                      <g clipPath="url(#ot-logo-clip-path)">
                         <path d="M64.1399 15.9434C64.1399 20.8204 61.3318 26.1042 53.7955 26.1042C48.3674 26.1042 43.416 23.073 43.416 15.9434C43.416 10.0342 47.147 5.48963 54.5347 5.89641C62.4034 6.33818 64.1399 12.4355 64.1399 15.9434ZM50.1038 12.2343C49.404 13.3147 49.1415 14.6137 49.1415 15.9128C49.1415 18.9046 50.6199 21.6121 53.7955 21.6121C56.971 21.6121 58.375 19.1189 58.375 16.1621C58.375 14.0714 57.8589 12.4486 56.7873 11.4382C55.6063 10.3579 54.2766 10.3229 53.463 10.3929C51.8359 10.5022 50.878 11.0402 50.0994 12.2299H50.1038V12.2343Z" fill="#101C2F"></path>
                         <path d="M114.581 8.07472C115.136 7.48424 115.503 7.04247 116.501 6.56133C117.389 6.19391 118.644 5.89648 120.009 5.89648C121.155 5.89648 122.445 6.08019 123.447 6.63569C125.48 7.70731 125.997 9.44378 125.997 12.4356V25.6231H120.345V14.7625C120.345 13.0261 120.31 12.3962 120.087 11.8801C119.646 10.8478 118.648 10.4017 117.537 10.4017C114.546 10.4017 114.546 12.803 114.546 15.2043V25.6231H108.855V6.37762H114.581V8.0791V8.07472Z" fill="#101C2F"></path>
                         <path d="M106.152 20.641C105.631 21.7388 103.952 26.1041 96.5467 26.1041C90.8212 26.1041 86.7927 22.6005 86.7927 16.2845C86.7927 11.6306 89.0847 5.89629 96.6954 5.89629C97.8414 5.89629 101.166 5.75632 103.641 8.4157C106.152 11.1144 106.301 14.8804 106.375 17.0587H92.597C92.562 19.46 93.9267 21.8613 96.9928 21.8613C100.059 21.8613 101.166 19.8274 101.87 18.4627L106.156 20.641H106.152ZM100.501 13.5114C100.391 12.6978 100.243 11.6262 99.4291 10.7776C98.7293 10.0778 97.6577 9.70602 96.6604 9.70602C95.2957 9.70602 94.3335 10.3709 93.778 10.9614C93.0038 11.8099 92.8157 12.6978 92.632 13.5114H100.501Z" fill="#101C2F"></path>
                         <path d="M185.26 10.3709H189.03V6.37743H185.299V2.32275H179.648V6.37743H178.751L176.162 10.3752H179.648V19.53C179.648 21.3758 179.683 22.7448 180.461 23.8908C181.682 25.6623 183.825 25.776 185.78 25.776C186.812 25.776 187.552 25.6667 188.772 25.4786V21.0434L186.738 21.1177C185.225 21.1177 185.225 20.1205 185.26 18.9395V10.3709Z" fill="#101C2F"></path>
                         <path d="M128.827 2.32275H134.478V6.37743H140.352L137.763 10.3752H134.438V18.9395C134.403 20.1205 134.403 21.1177 135.917 21.1177L137.951 21.0434V25.4786C136.73 25.6623 135.991 25.776 134.959 25.776C132.999 25.776 130.856 25.6667 129.64 23.8908C128.866 22.7448 128.827 21.3802 128.827 19.53V2.32275Z" fill="#101C2F"></path>
                         <path d="M194.266 10.3709H193.566V6.96353H192.276V6.37305H195.525V6.96353H194.261V10.3709H194.266ZM199.742 10.3709H199.055L199.077 7.90394L199.112 7.08601L198.92 7.7596L198.102 10.3709H197.476L196.671 7.7596L196.466 7.09913L196.514 7.90394L196.54 10.3709H195.867V6.37742H196.816L197.813 9.53106L198.788 6.37742H199.738V10.3752H199.742V10.3709Z" fill="#101C2F"></path>
                         <path d="M158.163 20.6585L157.082 22.3293C156.068 23.8165 154.161 26.1041 148.702 26.1041C143.243 26.1041 139.127 22.6005 139.127 16.2845C139.127 11.6306 141.419 5.89629 149.03 5.89629C150.176 5.89629 153.5 5.75632 155.976 8.4157C158.487 11.1144 158.635 14.8804 158.71 17.0587H144.932C144.897 19.46 146.082 21.8613 149.148 21.8613C152.214 21.8613 153.142 19.8274 153.846 18.4627L158.167 20.6585H158.163ZM152.831 13.5114C152.722 12.6978 152.573 11.6262 151.759 10.7776C151.06 10.0778 149.988 9.70602 148.991 9.70602C147.626 9.70602 146.664 10.3709 146.108 10.9614C145.334 11.8099 145.146 12.6978 144.962 13.5114H152.831Z" fill="#101C2F"></path>
                         <path d="M177.531 25.6273L170.463 15.4928L176.354 6.37744H169.885L167.103 10.6814L164.103 6.37744H157.634L163.993 15.4928L157.446 25.6273H163.915L167.353 20.3086L171.062 25.6273H177.531Z" fill="#101C2F"></path>
                         <path d="M71.9737 8.07472C72.5161 7.24804 74.2613 5.89648 77.0344 5.89648C81.7627 5.89648 85.0912 9.47877 85.0912 15.9085C85.0912 19.8626 83.6522 26.1042 76.7982 26.1042C74.3356 26.1042 72.4242 24.7352 71.9387 23.926V32.0004H66.2482V6.37762H71.9737V8.0791V8.07472ZM75.814 10.3361C74.7818 10.3361 73.7102 10.7472 72.8966 11.7795C72.083 12.7767 71.7156 14.3251 71.7156 16.0091C71.7156 18.2792 72.3805 19.6526 73.0803 20.4443C73.7364 21.1835 74.7074 21.6078 75.6303 21.6078C78.3991 21.6078 79.6194 18.6904 79.6194 15.8691C79.6194 13.4985 78.9196 10.9878 76.5882 10.4367C76.3302 10.3667 76.0721 10.3317 75.814 10.3317V10.3361Z" fill="#101C2F"></path>
                         <path d="M26.7376 0H5.27017C2.36148 0 0.00390625 2.35757 0.00390625 5.26627V26.7381C0.00390625 29.6468 2.36148 32.0044 5.27017 32.0044H26.742C29.6507 32.0044 32.0083 29.6468 32.0083 26.7381V5.26627C32.0083 2.35757 29.6507 0 26.742 0H26.7376Z" fill="url(#ot-logo-gradient-background)"></path>
                         <path d="M22.4778 13.6466C22.4778 13.4629 22.6309 13.3098 22.8146 13.3098H24.5861C24.6998 13.3098 24.8048 13.253 24.8704 13.1567L26.2176 11.0747C26.3663 10.8517 26.2045 10.5542 25.9333 10.5542H22.8409C22.6528 10.5542 22.5041 10.4011 22.5041 10.2174V8.09605C22.5041 7.90797 22.351 7.75488 22.1673 7.75488H18.9393C18.7512 7.75488 18.6025 7.90797 18.6025 8.09168V13.9965C17.4653 11.8139 15.182 10.318 12.5533 10.318C8.78729 10.318 5.73425 13.3711 5.73425 17.1371C5.73425 20.9031 8.78729 23.9561 12.5533 23.9561C15.1908 23.9561 17.474 22.4602 18.6112 20.2688C18.6287 21.2311 18.725 21.9878 19.1667 22.6395C20.0065 23.8642 21.4849 23.9386 22.8365 23.9386C23.4663 23.9386 23.9344 23.8817 24.6123 23.7768C24.7785 23.7505 24.901 23.6062 24.901 23.44V21.0211C24.901 20.8287 24.7435 20.6756 24.5511 20.6844L23.5013 20.7237C22.456 20.7237 22.4822 20.037 22.4822 19.2191V13.6466H22.4778ZM12.5533 20.1988C10.8649 20.1988 9.4915 18.8298 9.4915 17.1371C9.4915 15.4443 10.8606 14.0753 12.5533 14.0753C14.246 14.0753 15.6151 15.4443 15.6151 17.1371C15.6151 18.8298 14.246 20.1988 12.5533 20.1988Z" fill="white"></path>
                      </g>
                      <defs>
                         <linearGradient id="ot-logo-gradient-background" x1="24.3932" y1="26.6681" x2="5.13458" y2="2.17824" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#00008B"></stop>
                            <stop offset="1" stopColor="#1A6AFF"></stop>
                         </linearGradient>
                         <clipPath id="ot-logo-clip-path">
                            <rect width="199.742" height="32" fill="white"></rect>
                         </clipPath>
                      </defs>
                    </svg>
                  </div>
                  
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Data protection made 
                  <span className="block text-blue-200">simple</span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Focus on moving your business forward with enterprise-grade protection, 
                  zero-downtime migrations, and secure cloud solutions.
                </p>
                
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold">
                  Explore products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="relative lg:block hidden">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <img src="/lovable-uploads/9170555c-1cfd-4ce2-9a0e-3574bf5975d2.png" alt="Professional working with data protection solutions" className="w-full h-auto rounded-xl object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">Core Platform</Badge>
                <h2 className="text-3xl font-bold mb-4">Complete Data Protection Ecosystem</h2>
                <p className="text-lg text-muted-foreground">
                  OpenText provides the backbone of S2's data protection offerings, delivering 
                  enterprise-grade availability, migration, and secure cloud solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      99.9%
                    </div>
                    <h3 className="font-semibold mb-2">Uptime Guarantee</h3>
                    <p className="text-sm text-muted-foreground">Mission-critical availability</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      0
                    </div>
                    <h3 className="font-semibold mb-2">Zero Downtime</h3>
                    <p className="text-sm text-muted-foreground">Live migration & replication</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      24/7
                    </div>
                    <h3 className="font-semibold mb-2">Global Support</h3>
                    <p className="text-sm text-muted-foreground">Enterprise-grade support</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">OpenText Solution Portfolio</h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive data protection and secure cloud solutions
                </p>
              </div>

              {solutions.map((category, categoryIndex) => <div key={categoryIndex} className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">{category.category}</h3>
                  <div className="grid lg:grid-cols-2 gap-6">
                    {category.products.map((product, productIndex) => <Card key={productIndex} className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-xl">{product.name}</CardTitle>
                          <p className="text-muted-foreground">{product.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {product.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </div>)}
                          </div>
                        </CardContent>
                      </Card>)}
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Ideal Use Cases</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Government & Public Sector</h3>
                    <p className="text-muted-foreground">
                      High availability requirements, compliance needs, and citizen service continuity
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Banking & Financial Services</h3>
                    <p className="text-muted-foreground">
                      Zero-downtime requirements, regulatory compliance, and data sovereignty
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Healthcare & Critical Infrastructure</h3>
                    <p className="text-muted-foreground">
                      Patient data protection, system availability, and disaster recovery
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Implement OpenText Solutions?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let S2's certified OpenText specialists design and implement the right data protection 
              strategy for your enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">
                  Contact Our OT Specialists
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.opentext.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit OpenText
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}