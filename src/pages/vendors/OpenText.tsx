import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
  useEffect(() => {
    // Load Vidyard script
    const script = document.createElement('script');
    script.src = 'https://play.vidyard.com/embed/v4.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src="https://play.vidyard.com/embed/v4.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Official OpenText Distributor in Middle East, GCC & Africa"
        description="Official OpenText distributor for the Middle East, GCC & Africa. We specialise in secure cloud, business continuity, and seamless migrations with expert regional support."
        keywords="official opentext distributor mena, opentext partner saudi arabia uae, opentext cybersecurity solutions gcc, opentext distributor middle east, opentext enterprise solutions mena region"
        canonicalUrl="https://s2mgt.com/vendors/opentext"
        ogImage="https://s2mgt.com/assets/opentext-og.png"
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="flex items-center justify-center lg:justify-start gap-3 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="bg-white backdrop-blur-sm rounded-lg flex items-center justify-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="42" viewBox="0 0 200 32" fill="none" className="w-48 sm:w-56 lg:w-72 h-auto rounded-sm">
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
                </motion.div>
                
                <motion.h1 
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight text-center lg:text-left"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  OpenText Data Protection Solutions 
                  <span className="block text-blue-200 text-sm sm:text-base lg:text-lg mt-2">Official Distributor for the Middle East & North Africa</span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 lg:mb-8 leading-relaxed text-center lg:text-left"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                   S2 Management Solutions provides enterprise data protection, disaster recovery, secure cloud, and zero-downtime migration for business resilience.
                </motion.p>
                
                <motion.div 
                  className="flex justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 h-auto font-semibold transition-all duration-300 hover:scale-105">
                    Explore products
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative order-first lg:order-last"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-white/20 ">
                  <div className="vidyard-player-wrap">
                    <img className="vidyard-player-embed js-embed-vidyard w-full h-auto rounded-xl object-cover" 
                         data-uuid="b6xu2sAXPMQNB1bgy4CrQz"
                         data-v="4" 
                         data-init-load="true" 
                         data-type="inline" 
                         src="https://cdn.vidyard.com/thumbnails/45187710/Ny3bZA8EQZGoXaUzP_YGaA.jpg" 
                         alt="OpenText Information Management Video" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OpenText Products Showcase */}
        <section className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto text-center p-8 sm:p-16 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl">
              <motion.h2 
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-wide leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Discover other OpenText products that<br />
                enhance your cybersecurity:
              </motion.h2>
              <motion.p 
                className="text-white/80 text-lg sm:text-xl font-light mt-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Comprehensive security solutions for modern enterprises
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {/* Carbonite */}
                <motion.div
                  className="relative bg-white/8 backdrop-blur-sm rounded-2xl p-10 border border-white/10 transition-all duration-500 hover:bg-white/12 hover:border-blue-400/50 hover:shadow-[0_20px_40px_rgba(74,158,255,0.2)] hover:-translate-y-3 hover:scale-105 overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-white/10 to-transparent transition-all duration-600 group-hover:w-full"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <svg width="200" height="40" viewBox="0 0 417 83" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                      <path d="M74.1199 22.84C74.1199 8.53 83.0199 2.59 95.8099 2.59C100.6 2.59 105.33 3.42 108.19 4.31L106.84 14.63C104.34 13.58 100.96 12.85 97.7299 12.85C91.0699 12.85 86.2799 15.96 86.2799 22.83C86.2799 29.7 90.9599 32.81 97.9899 32.81C102.05 32.81 105.79 31.76 108.76 30.48L108.81 41.3C106 42.19 100.54 43.08 95.6499 43.08C82.9599 43.08 74.1099 37.15 74.1099 22.83L74.1199 22.84Z" fill="white"/>
                      <path d="M123.72 3.42H138.7L151.5 42.25H139.32L137.14 35.09H125.28L123.15 42.25H110.92L123.72 3.42ZM134.59 27.27L131.21 16.06L127.83 27.27H134.59Z" fill="white"/>
                      <path d="M154.3 3.42H173.81C183.9 3.42 189.63 8.3 189.63 16.57C189.63 22.45 186.77 26.17 182.66 28.16L190.31 42.25H176.73L170.85 30.55H166.48V42.25H154.3V3.42ZM172.3 22C175.16 22 177.35 20.72 177.35 17.56C177.35 14.23 175.22 13.12 172.36 13.12H166.48V22H172.31H172.3Z" fill="white"/>
                      <path d="M194.17 3.42H214.72C223.46 3.42 228.61 7.25 228.61 13.35C228.61 18.01 225.65 21.12 221.27 22.06C226.11 23.11 230.01 26 230.01 31.6C230.01 38.15 224.65 42.25 216.12 42.25H194.17V3.42ZM212.69 19.06C214.93 19.06 216.49 17.9 216.49 15.51C216.49 13.12 214.77 12.01 212.54 12.01H206.25V19.06H212.7H212.69ZM213.68 33.54C216.12 33.54 217.63 32.21 217.63 29.88C217.63 27.55 216.12 26.16 213.68 26.16H206.24V33.54H213.68Z" fill="white"/>
                      <path d="M232.45 22.78C232.45 9.58 240.46 2.59 251.8 2.59C263.14 2.59 271.15 9.58 271.15 22.78C271.15 35.98 263.09 43.08 251.8 43.08C240.51 43.08 232.45 35.98 232.45 22.78ZM258.77 22.78C258.77 15.9 256.01 12.8 251.8 12.8C247.59 12.8 244.83 15.91 244.83 22.78C244.83 29.65 247.54 32.82 251.8 32.82C256.06 32.82 258.77 29.71 258.77 22.78Z" fill="white"/>
                      <path d="M275.41 3.42H288.37L300.28 21.5V3.42H312.4V42.25H301.11L287.53 22.39V42.25H275.41V3.42Z" fill="white"/>
                      <path d="M317.33 3.42H329.45V42.25H317.33V3.42Z" fill="white"/>
                      <path d="M344.22 13.41H333.97V3.42H366.69V13.4H356.39V42.25H344.21V13.41H344.22Z" fill="white"/>
                      <path d="M371.11 3.42H402.17V13.35H383.13V18.45H398.58V26.16H383.13V32.26H403.32V42.24H371.12V3.42H371.11Z" fill="white"/>
                    </svg>
                    <div className="text-white/70 text-sm font-light tracking-wide mb-4">Data Protection</div>
                    <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide opacity-90">
                      by OpenText
                    </div>
                  </div>
                </motion.div>

                {/* Webroot */}
                <motion.div
                  className="relative bg-white/8 backdrop-blur-sm rounded-2xl p-10 border border-white/10 transition-all duration-500 hover:bg-white/12 hover:border-green-400/50 hover:shadow-[0_20px_40px_rgba(76,175,80,0.2)] hover:-translate-y-3 hover:scale-105 overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-white/10 to-transparent transition-all duration-600 group-hover:w-full"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <svg width="200" height="37" viewBox="0 0 435 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                      <g clipPath="url(#clip0_550_38828)">
                        <path d="M143.15 4.86L131.01 41.28H118.87L111.79 20.03L104.71 41.28H92.5697L80.4297 4.86H92.5697L99.7997 26.56L107.04 4.86H116.55L123.79 26.56L131.03 4.86H143.17H143.15Z" fill="white"/>
                        <path d="M183.98 32.18V41.29H146.54V4.86H183.98V13.97H157.67V18.52H181.95V27.63H157.67V32.18H183.98Z" fill="white"/>
                        <path d="M229.94 30.79C229.94 36.58 225.23 41.28 219.44 41.28H188.45V4.86H217.41C223.19 4.86 227.9 9.57 227.9 15.36C227.9 17.95 226.95 20.33 225.39 22.16C228.13 24.05 229.93 27.22 229.93 30.79H229.94ZM199.59 13.97V19.03H214.26C215.66 19.03 216.79 17.9 216.79 16.5C216.79 15.1 215.66 13.97 214.26 13.97H199.59ZM218.81 29.65C218.81 28.25 217.67 27.12 216.28 27.12H199.59V32.18H216.28C217.67 32.18 218.81 31.05 218.81 29.65Z" fill="white"/>
                        <path d="M258.18 32.18H244.78V41.29H233.65V4.86H261.48C269.01 4.86 275.14 10.99 275.14 18.52C275.14 23.11 272.87 27.17 269.39 29.65L275.53 41.29H263L258.19 32.18H258.18ZM244.78 23.07H259.45C261.96 23.07 264 21.03 264 18.52C264 16.01 261.96 13.97 259.45 13.97H244.78V23.08V23.07Z" fill="white"/>
                        <path d="M302.15 42.3C287.96 42.3 278.85 38.25 278.85 23.08C278.85 8.91 286.94 3.86 302.15 3.86C317.36 3.86 325.4 8.92 325.4 23.08C325.4 38.26 317.31 42.3 302.15 42.3ZM302.15 12.96C295.04 12.96 291 14.98 291 23.08C291 31.18 295.05 33.2 302.15 33.2C309.25 33.2 313.26 31.18 313.26 23.08C313.26 14.98 309.34 12.96 302.15 12.96Z" fill="white"/>
                        <path d="M353.36 42.3C339.17 42.3 330.06 38.25 330.06 23.08C330.06 8.91 338.15 3.86 353.36 3.86C368.57 3.86 376.61 8.92 376.61 23.08C376.61 38.26 368.52 42.3 353.36 42.3ZM353.36 12.96C346.25 12.96 342.21 14.98 342.21 23.08C342.21 31.18 346.26 33.2 353.36 33.2C360.46 33.2 364.47 31.18 364.47 23.08C364.47 14.98 360.55 12.96 353.36 12.96Z" fill="white"/>
                        <path d="M419.49 13.97H404.82V41.29H393.69V13.97H379.02V4.86H419.49V13.97Z" fill="white"/>
                        <path d="M6.97 7.34L28.81 29.54C28.81 29.54 30.76 31.48 30.76 34.6C30.76 36.49 29.37 42.29 23.07 42.29C20 42.29 17.92 40.37 17.92 40.37L3.04 25.44C3.04 25.44 0 22.85 0 19.22V9.61C0 5.77 3.84 5.77 3.84 5.77C5.7 5.77 6.96 7.34 6.96 7.34H6.97ZM58.39 7.34L36.55 29.54C36.55 29.54 34.6 31.48 34.6 34.6C34.6 36.49 35.99 42.29 42.29 42.29C45.36 42.29 47.44 40.37 47.44 40.37L62.31 25.44C62.31 25.44 65.35 22.85 65.35 19.22C65.35 14.59 65.35 13.45 65.35 9.61C65.35 5.77 61.51 5.77 61.51 5.77C59.65 5.77 58.39 7.34 58.39 7.34ZM32.68 0C27.37 0 23.07 4.3 23.07 9.61C23.07 12.02 23.96 14.22 25.42 15.91L31.24 22.42C31.59 22.81 32.11 23.06 32.68 23.06C33.25 23.06 33.77 22.81 34.11 22.42L39.79 16.07C41.34 14.36 42.29 12.1 42.29 9.61C42.29 4.3 37.99 0 32.68 0Z" fill="#7DCC26"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_550_38828">
                          <rect width="434.71" height="80.94" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-white/70 text-sm font-light tracking-wide mb-4">Endpoint Security</div>
                    <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide opacity-90">
                      by OpenText
                    </div>
                  </div>
                </motion.div>

                {/* MailStore */}
                <motion.div
                  className="relative bg-white/8 backdrop-blur-sm rounded-2xl p-10 border border-white/10 transition-all duration-500 hover:bg-white/12 hover:border-orange-400/50 hover:shadow-[0_20px_40px_rgba(255,107,53,0.2)] hover:-translate-y-3 hover:scale-105 overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-white/10 to-transparent transition-all duration-600 group-hover:w-full"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <svg width="200" height="35" viewBox="0 0 270 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                      <path d="M79.9825 78.4594C79.9825 84.2709 85.9328 84.1741 85.9328 86.4793C85.9328 87.1315 85.3854 87.9322 83.9816 87.9322C82.2815 87.9322 80.9807 87.6804 79.7313 87.1315L77.9282 94.9512C79.3256 95.2999 81.1803 95.5001 83.5759 95.5001C91.1232 95.5001 96.172 90.9865 96.172 85.0264C96.172 79.0664 90.022 78.8081 90.022 76.7547C90.022 75.9023 90.6209 75.3987 91.9733 75.3987C93.3256 75.3987 94.4719 75.5988 95.6761 75.9992L97.3762 68.4765C96.0754 68.2763 94.4783 68.1278 92.0763 68.1278C83.08 68.1278 79.9761 73.694 79.9761 78.4529L79.9825 78.4594Z" fill="white"/>
                      <path d="M109.122 94.8027L112.574 76.7546L116.985 76.7417C118.054 73.6035 119.941 70.8527 122.394 68.7347H99.4238L97.9233 76.7546H103.571L100.119 94.8027H109.122Z" fill="white"/>
                      <path d="M150.156 68.7347L149.493 72.2216C151.547 75.1984 152.758 78.808 152.758 82.7082C152.758 87.3381 151.051 91.5676 148.237 94.8027H154.2L155.901 85.8271H156.248L158.148 94.8027H168.548L166.198 87.4349C165.798 86.1306 165.444 85.1814 165.097 84.3807C167.698 83.3281 171.047 80.5709 171.047 75.5084C171.047 71.1497 167.949 68.541 161.6 68.541C158.097 68.541 152.797 68.5927 150.15 68.7412L150.156 68.7347ZM158.303 80.1641C157.955 80.1641 157.453 80.1641 157.002 80.1124L157.852 75.5988C158.251 75.5471 158.753 75.5471 159.204 75.5471C160.602 75.5471 161.252 76.3478 161.252 77.2002C161.252 78.9049 159.752 80.1576 158.303 80.1576V80.1641Z" fill="white"/>
                      <path d="M175.702 68.7347L170.75 94.8027H188.35L189.747 87.4285H181.15L181.601 85.0716H189.747L191.048 78.1042H182.953L183.353 75.9991H191.898L193.302 68.7347H175.702Z" fill="white"/>
                      <path d="M80.4977 51.9847H80.5492C80.6007 54.3932 80.6458 56.7436 80.7488 58.5517L81.2511 66.0744H90.402L94.2529 57.751C95.0515 56.0463 95.9015 54.0897 96.7 51.8361H96.7515C96.6034 53.4375 96.4553 55.3941 96.4038 56.7501L96.056 66.0744H105.503L106.347 40H94.8454L90.3955 49.1758C89.6936 50.6286 88.9981 52.385 88.4443 53.9347H88.3928C88.3413 52.0815 88.2962 50.3768 88.1931 49.2726L87.3431 40H76.0993L67 66.0679H76.2024L79.0037 57.3442C79.506 55.7944 79.9567 54.0833 80.5041 51.9847H80.4977Z" fill="white"/>
                      <path d="M115.395 66.0679L117.043 62.807H124.745L125.158 66.7588C127.869 65.1833 131.018 64.2728 134.373 64.2728C134.392 64.2728 134.405 64.2728 134.424 64.2728L130.792 40H119.793L106.044 66.0679H115.395ZM121.944 53.0372C122.343 52.1848 122.794 51.2292 123.342 49.9765H123.393C123.393 50.9773 123.496 52.1332 123.593 53.0372L123.94 56.2981H120.341L121.938 53.0372H121.944Z" fill="white"/>
                      <path d="M145.326 66.0679L150.278 40H141.276L136.381 64.3826C139.55 64.7313 142.473 65.8807 144.946 67.6306L145.32 66.0679H145.326Z" fill="white"/>
                      <path d="M165.161 66.0679L166.758 57.7445H159.662L163.062 40H154.059L149.113 66.0679H165.161Z" fill="white"/>
                    </svg>
                    <div className="text-white/70 text-sm font-light tracking-wide mb-4">Email Archiving</div>
                    <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide opacity-90">
                      by OpenText
                    </div>
                  </div>
                </motion.div>

                {/* Cloudally */}
                <motion.div
                  className="relative bg-white/8 backdrop-blur-sm rounded-2xl p-10 border border-white/10 transition-all duration-500 hover:bg-white/12 hover:border-cyan-400/50 hover:shadow-[0_20px_40px_rgba(0,212,255,0.2)] hover:-translate-y-3 hover:scale-105 overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-white/10 to-transparent transition-all duration-600 group-hover:w-full"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <svg width="200" height="52" viewBox="0 0 100 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                      <path d="M96.2712 12.5859L93.0419 6.86062L99.5004 6.86062L96.2712 12.5859Z" fill="url(#paint0_linear_7040_108)"/>
                      <path d="M85.2891 6.85742H89.1824L94.2863 16.0953L89.579 24.6155H85.6856L90.3929 16.0953L85.2891 6.85742Z" fill="#101C2F"/>
                      <path d="M80.4922 18.2958V0L83.8663 2.96965V18.2958H80.4922Z" fill="#101C2F"/>
                      <path d="M74.4922 18.2958V0L77.8663 2.9663V18.2958H74.4922Z" fill="#101C2F"/>
                      <path d="M65.3448 18.6009C64.2718 18.6009 63.2957 18.3278 62.4167 17.7814C61.5376 17.2351 60.833 16.5109 60.303 15.6088C59.7859 14.694 59.5273 13.6839 59.5273 12.5785C59.5273 11.4732 59.7859 10.4631 60.303 9.54829C60.833 8.63349 61.5376 7.90928 62.4167 7.37565C63.2957 6.82932 64.2718 6.55615 65.3448 6.55615C66.0945 6.55615 66.7797 6.68956 67.4002 6.95637C68.0208 7.21048 68.5508 7.56624 68.9903 8.02363V6.86108H71.899V18.296H68.9903V17.1334C68.5508 17.5908 68.0208 17.9529 67.4002 18.2198C66.7797 18.4739 66.0945 18.6009 65.3448 18.6009ZM65.752 15.685C66.3208 15.685 66.8379 15.5453 67.3033 15.2657C67.7687 14.9862 68.1371 14.6114 68.4086 14.1413C68.693 13.6712 68.8352 13.1503 68.8352 12.5785C68.8352 12.0068 68.693 11.4859 68.4086 11.0158C68.1371 10.5457 67.7687 10.1709 67.3033 9.89133C66.8379 9.61181 66.3208 9.47205 65.752 9.47205C65.1832 9.47205 64.6661 9.61181 64.2007 9.89133C63.7353 10.1709 63.3604 10.5457 63.076 11.0158C62.8045 11.4859 62.6687 12.0068 62.6687 12.5785C62.6687 13.1503 62.8045 13.6712 63.076 14.1413C63.3604 14.6114 63.7353 14.9862 64.2007 15.2657C64.6661 15.5453 65.1832 15.685 65.752 15.685Z" fill="#101C2F"/>
                      <path d="M51.0223 18.6008C49.9364 18.6008 48.9539 18.3276 48.0749 17.7813C47.1958 17.2349 46.4912 16.5107 45.9612 15.6086C45.4441 14.6938 45.1855 13.6838 45.1855 12.5784C45.1855 11.473 45.4441 10.4629 45.9612 9.54814C46.4912 8.63335 47.1958 7.90914 48.0749 7.37551C48.9539 6.82918 49.9364 6.55601 51.0223 6.55601C51.6429 6.55601 52.2181 6.64495 52.7482 6.82283C53.2782 7.0007 53.7565 7.25481 54.1831 7.58515V2.95682L57.5572 0V18.2958H54.6485V17.1714C54.209 17.6161 53.679 17.9655 53.0584 18.2196C52.4379 18.4737 51.7592 18.6008 51.0223 18.6008ZM51.4102 15.6849C51.979 15.6849 52.4961 15.5451 52.9615 15.2656C53.4269 14.9861 53.7953 14.6113 54.0668 14.1412C54.3512 13.6711 54.4934 13.1501 54.4934 12.5784C54.4934 12.0066 54.3512 11.4857 54.0668 11.0156C53.7953 10.5455 53.4269 10.1707 52.9615 9.89119C52.4961 9.61167 51.979 9.47191 51.4102 9.47191C50.8414 9.47191 50.3243 9.61167 49.8589 9.89119C49.3935 10.1707 49.0186 10.5455 48.7342 11.0156C48.4627 11.4857 48.3269 12.0066 48.3269 12.5784C48.3269 13.1501 48.4627 13.6711 48.7342 14.1412C49.0186 14.6113 49.3935 14.9861 49.8589 15.2656C50.3243 15.5451 50.8414 15.6849 51.4102 15.6849Z" fill="#101C2F"/>
                      <path d="M36.6846 18.6769C35.8702 18.6769 35.101 18.4863 34.377 18.1052C33.6531 17.7113 33.0649 17.1459 32.6124 16.409C32.1729 15.6594 31.9531 14.7573 31.9531 13.7027V9.83976L35.3272 6.86084V13.2644C35.3272 13.8997 35.5211 14.4651 35.909 14.9606C36.3097 15.4561 36.8656 15.7038 37.5766 15.7038C38.1584 15.7038 38.6755 15.5005 39.1279 15.094C39.5933 14.6747 39.826 14.0775 39.826 13.3025V6.86084H43.2001V18.2957H40.1363V17.0951C39.7226 17.6033 39.212 17.9972 38.6044 18.2767C38.0097 18.5435 37.3698 18.6769 36.6846 18.6769Z" fill="#101C2F"/>
                      <path d="M23.9254 18.6772C22.7748 18.6772 21.7212 18.404 20.7646 17.8577C19.8079 17.3114 19.0452 16.5745 18.4764 15.647C17.9205 14.7195 17.6426 13.6967 17.6426 12.5786C17.6426 11.4478 17.9205 10.425 18.4764 9.51023C19.0452 8.58273 19.8079 7.84582 20.7646 7.29948C21.7212 6.75315 22.7748 6.47998 23.9254 6.47998C25.0889 6.47998 26.1425 6.75315 27.0862 7.29948C28.0428 7.84582 28.7991 8.58273 29.355 9.51023C29.9238 10.425 30.2082 11.4478 30.2082 12.5786C30.2082 13.6967 29.9238 14.7195 29.355 15.647C28.7991 16.5745 28.0428 17.3114 27.0862 17.8577C26.1425 18.404 25.0889 18.6772 23.9254 18.6772ZM23.9254 15.7041C24.5071 15.7041 25.0307 15.5644 25.4961 15.2849C25.9744 15.0053 26.3493 14.6305 26.6208 14.1604C26.9052 13.6776 27.0474 13.1503 27.0474 12.5786C27.0474 11.9941 26.9052 11.4669 26.6208 10.9968C26.3493 10.5267 25.9744 10.1519 25.4961 9.87233C25.0307 9.59281 24.5071 9.45305 23.9254 9.45305C23.3436 9.45305 22.8136 9.59281 22.3353 9.87233C21.8699 10.1519 21.495 10.5267 21.2106 10.9968C20.9391 11.4669 20.8034 11.9941 20.8034 12.5786C20.8034 13.1503 20.9391 13.6776 21.2106 14.1604C21.495 14.6305 21.8699 15.0053 22.3353 15.2849C22.8136 15.5644 23.3436 15.7041 23.9254 15.7041Z" fill="#101C2F"/>
                      <path d="M12.2637 18.2958V0L15.6378 2.96883V18.2958H12.2637Z" fill="#101C2F"/>
                      <path d="M6.2828 18.6767C5.13224 18.6767 4.07865 18.4036 3.12201 17.8572C2.16537 17.3109 1.40264 16.574 0.833828 15.6465C0.277943 14.719 0 13.6962 0 12.5781C0 11.4473 0.277943 10.4245 0.833828 9.50974C1.40264 8.58224 2.16537 7.84533 3.12201 7.29899C4.07865 6.75266 5.13224 6.47949 6.2828 6.47949C7.08431 6.47949 7.84057 6.6129 8.55159 6.87971C9.27553 7.13382 9.91544 7.51499 10.4713 8.0232L9.59872 11.3965C9.27553 10.8756 8.84246 10.4245 8.2995 10.0434C7.76947 9.6495 7.14248 9.45257 6.41854 9.45257C5.81094 9.45257 5.26798 9.59233 4.78966 9.87185C4.31134 10.1514 3.93644 10.5262 3.66497 10.9963C3.39349 11.4664 3.25775 11.9937 3.25775 12.5781C3.25775 13.1499 3.39349 13.6771 3.66497 14.1599C3.93644 14.63 4.31134 15.0048 4.78966 15.2844C5.26798 15.5639 5.81094 15.7036 6.41854 15.7036C7.14248 15.7036 7.76947 15.5131 8.2995 15.1319C8.84246 14.738 9.27553 14.2806 9.59872 13.7597L10.4713 17.133C9.91544 17.6412 9.27553 18.0287 8.55159 18.2956C7.84057 18.5497 7.08431 18.6767 6.2828 18.6767Z" fill="#101C2F"/>
                      <defs>
                        <linearGradient id="paint0_linear_7040_108" x1="98.1087" y1="10.0002" x2="93.4227" y2="7.15085" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00008B"/>
                          <stop offset="1" stopColor="#1A6AFF"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="text-white/70 text-sm font-light tracking-wide mb-4">SaaS Data Protection</div>
                    <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide opacity-90">
                      by OpenText
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="text-center mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">OpenText Solution Portfolio</h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Comprehensive data protection and secure cloud solutions
                </p>
              </motion.div>

              {solutions.map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex} 
                  className="mb-8 sm:mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">{category.category}</h3>
                  <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                    {category.products.map((product, productIndex) => (
                      <motion.div
                        key={productIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: productIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="hover:shadow-lg transition-all duration-300 h-full">
                          <CardHeader className="pb-3 sm:pb-4">
                            <CardTitle className="text-lg sm:text-xl">{product.name}</CardTitle>
                            <p className="text-sm sm:text-base text-muted-foreground">{product.description}</p>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="space-y-2">
                              {product.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start space-x-2">
                                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-xs sm:text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ideal Use Cases
              </motion.h2>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Government & Public Sector",
                    description: "High availability requirements, compliance needs, and citizen service continuity"
                  },
                  {
                    title: "Financial Services",
                    description: "Real-time replication for trading systems, regulatory compliance, and zero-tolerance downtime"
                  },
                  {
                    title: "Healthcare Organizations",
                    description: "Patient data protection, HIPAA compliance, and 24/7 availability for critical systems"
                  },
                  {
                    title: "Enterprise Cloud Migration",
                    description: "Zero-downtime migration to cloud platforms with comprehensive data protection"
                  }
                ].map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="font-semibold mb-2 text-sm sm:text-base">{useCase.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{useCase.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Implement OpenText Solutions?</h2>
              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let S2's certified OpenText specialists design and implement the right data protection 
                strategy for your enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="transition-all duration-300 hover:scale-105">
                  <a href="/contact">
                    Contact Our OT Specialists
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:scale-105">
                  <a href="https://www.opentext.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Visit OpenText
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}