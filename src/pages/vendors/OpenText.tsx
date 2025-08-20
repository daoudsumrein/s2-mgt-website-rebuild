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
                  <div className="relative z-10 flex flex-col items-center h-full">
                    <div className="flex-1 flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" viewBox="0 0 417 83" fill="none" className="w-48 h-12">
...
</svg>
                    </div>
                    <div className="text-white/70 text-sm font-light tracking-wide text-center">Data Protection</div>
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
                  <div className="relative z-10 flex flex-col items-center h-full">
                    <div className="flex-1 flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="435" height="81" viewBox="0 0 435 81" fill="none" className="w-48 h-12">
...
</svg>
                    </div>
                    <div className="text-white/70 text-sm font-light tracking-wide text-center">Endpoint Security</div>
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
                  <div className="relative z-10 flex flex-col items-center h-full">
                    <div className="flex-1 flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="270" height="160" viewBox="60 35 150 90" fill="none" className="w-48 h-12">
...
</svg>
                    </div>
                    <div className="text-white/70 text-sm font-light tracking-wide text-center">Email Archiving</div>
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
                  <div className="relative z-10 flex flex-col items-center h-full">
                    <div className="flex-1 flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="26" viewBox="0 0 100 26" fill="none" className="w-48 h-12"><path d="M96.2712 12.5859L93.0419 6.86062L99.5004 6.86062L96.2712 12.5859Z" fill="url(#paint0_linear_7040_108)"/><path d="M85.2891 6.85742H89.1824L94.2863 16.0953L89.579 24.6155H85.6856L90.3929 16.0953L85.2891 6.85742Z" fill="#FFFFFF"/><path d="M80.4922 18.2958V0L83.8663 2.96965V18.2958H80.4922Z" fill="#FFFFFF"/><path d="M74.4922 18.2958V0L77.8663 2.9663V18.2958H74.4922Z" fill="#FFFFFF"/><path d="M65.3448 18.6009C64.2718 18.6009 63.2957 18.3278 62.4167 17.7814C61.5376 17.2351 60.833 16.5109 60.303 15.6088C59.7859 14.694 59.5273 13.6839 59.5273 12.5785C59.5273 11.4732 59.7859 10.4631 60.303 9.54829C60.833 8.63349 61.5376 7.90928 62.4167 7.37565C63.2957 6.82932 64.2718 6.55615 65.3448 6.55615C66.0945 6.55615 66.7797 6.68956 67.4002 6.95637C68.0208 7.21048 68.5508 7.56624 68.9903 8.02363V6.86108H71.899V18.296H68.9903V17.1334C68.5508 17.5908 68.0208 17.9529 67.4002 18.2198C66.7797 18.4739 66.0945 18.6009 65.3448 18.6009ZM65.752 15.685C66.3208 15.685 66.8379 15.5453 67.3033 15.2657C67.7687 14.9862 68.1371 14.6114 68.4086 14.1413C68.693 13.6712 68.8352 13.1503 68.8352 12.5785C68.8352 12.0068 68.693 11.4859 68.4086 11.0158C68.1371 10.5457 67.7687 10.1709 67.3033 9.89133C66.8379 9.61181 66.3208 9.47205 65.752 9.47205C65.1832 9.47205 64.6661 9.61181 64.2007 9.89133C63.7353 10.1709 63.3604 10.5457 63.076 11.0158C62.8045 11.4859 62.6687 12.0068 62.6687 12.5785C62.6687 13.1503 62.8045 13.6712 63.076 14.1413C63.3604 14.6114 63.7353 14.9862 64.2007 15.2657C64.6661 15.5453 65.1832 15.685 65.752 15.685Z" fill="#FFFFFF"/><path d="M51.0223 18.6008C49.9364 18.6008 48.9539 18.3276 48.0749 17.7813C47.1958 17.2349 46.4912 16.5107 45.9612 15.6086C45.4441 14.6938 45.1855 13.6838 45.1855 12.5784C45.1855 11.473 45.4441 10.4629 45.9612 9.54814C46.4912 8.63335 47.1958 7.90914 48.0749 7.37551C48.9539 6.82918 49.9364 6.55601 51.0223 6.55601C51.6429 6.55601 52.2181 6.64495 52.7482 6.82283C53.2782 7.0007 53.7565 7.25481 54.1831 7.58515V2.95682L57.5572 0V18.2958H54.6485V17.1714C54.209 17.6161 53.679 17.9655 53.0584 18.2196C52.4379 18.4737 51.7592 18.6008 51.0223 18.6008ZM51.4102 15.6849C51.979 15.6849 52.4961 15.5451 52.9615 15.2656C53.4269 14.9861 53.7953 14.6113 54.0668 14.1412C54.3512 13.6711 54.4934 13.1501 54.4934 12.5784C54.4934 12.0066 54.3512 11.4857 54.0668 11.0156C53.7953 10.5455 53.4269 10.1707 52.9615 9.89119C52.4961 9.61167 51.979 9.47191 51.4102 9.47191C50.8414 9.47191 50.3243 9.61167 49.8589 9.89119C49.3935 10.1707 49.0186 10.5455 48.7342 11.0156C48.4627 11.4857 48.3269 12.0066 48.3269 12.5784C48.3269 13.1501 48.4627 13.6711 48.7342 14.1412C49.0186 14.6113 49.3935 14.9861 49.8589 15.2656C50.3243 15.5451 50.8414 15.6849 51.4102 15.6849Z" fill="#FFFFFF"/><path d="M36.6846 18.6769C35.8702 18.6769 35.101 18.4863 34.377 18.1052C33.6531 17.7113 33.0649 17.1459 32.6124 16.409C32.1729 15.6594 31.9531 14.7573 31.9531 13.7027V9.83976L35.3272 6.86084V13.2644C35.3272 13.8997 35.5211 14.4651 35.909 14.9606C36.3097 15.4561 36.8656 15.7038 37.5766 15.7038C38.1584 15.7038 38.6755 15.5005 39.1279 15.094C39.5933 14.6747 39.826 14.0775 39.826 13.3025V6.86084H43.2001V18.2957H40.1363V17.0951C39.7226 17.6033 39.212 17.9972 38.6044 18.2767C38.0097 18.5435 37.3698 18.6769 36.6846 18.6769Z" fill="#FFFFFF"/><path d="M23.9254 18.6772C22.7748 18.6772 21.7212 18.404 20.7646 17.8577C19.8079 17.3114 19.0452 16.5745 18.4764 15.647C17.9205 14.7195 17.6426 13.6967 17.6426 12.5786C17.6426 11.4478 17.9205 10.425 18.4764 9.51023C19.0452 8.58273 19.8079 7.84582 20.7646 7.29948C21.7212 6.75315 22.7748 6.47998 23.9254 6.47998C25.0889 6.47998 26.1425 6.75315 27.0862 7.29948C28.0428 7.84582 28.7991 8.58273 29.355 9.51023C29.9238 10.425 30.2082 11.4478 30.2082 12.5786C30.2082 13.6967 29.9238 14.7195 29.355 15.647C28.7991 16.5745 28.0428 17.3114 27.0862 17.8577C26.1425 18.404 25.0889 18.6772 23.9254 18.6772ZM23.9254 15.7041C24.5071 15.7041 25.0307 15.5644 25.4961 15.2849C25.9744 15.0053 26.3493 14.6305 26.6208 14.1604C26.9052 13.6776 27.0474 13.1503 27.0474 12.5786C27.0474 11.9941 26.9052 11.4669 26.6208 10.9968C26.3493 10.5267 25.9744 10.1519 25.4961 9.87233C25.0307 9.59281 24.5071 9.45305 23.9254 9.45305C23.3436 9.45305 22.8136 9.59281 22.3353 9.87233C21.8699 10.1519 21.495 10.5267 21.2106 10.9968C20.9391 11.4669 20.8034 11.9941 20.8034 12.5786C20.8034 13.1503 20.9391 13.6776 21.2106 14.1604C21.495 14.6305 21.8699 15.0053 22.3353 15.2849C22.8136 15.5644 23.3436 15.7041 23.9254 15.7041Z" fill="#FFFFFF"/><path d="M12.2637 18.2958V0L15.6378 2.96883V18.2958H12.2637Z" fill="#FFFFFF"/><path d="M6.2828 18.6767C5.13224 18.6767 4.07865 18.4036 3.12201 17.8572C2.16537 17.3109 1.40264 16.574 0.833828 15.6465C0.277943 14.719 0 13.6962 0 12.5781C0 11.4473 0.277943 10.4245 0.833828 9.50974C1.40264 8.58224 2.16537 7.84533 3.12201 7.29899C4.07865 6.75266 5.13224 6.47949 6.2828 6.47949C7.08431 6.47949 7.84057 6.6129 8.55159 6.87971C9.27553 7.13382 9.91544 7.51499 10.4713 8.0232L9.59872 11.3965C9.27553 10.8756 8.84246 10.4245 8.2995 10.0434C7.76947 9.6495 7.14248 9.45257 6.41854 9.45257C5.81094 9.45257 5.26798 9.59233 4.78966 9.87185C4.31134 10.1514 3.93644 10.5262 3.66497 10.9963C3.39349 11.4664 3.25775 11.9937 3.25775 12.5781C3.25775 13.1499 3.39349 13.6771 3.66497 14.1599C3.93644 14.63 4.31134 15.0048 4.78966 15.2844C5.26798 15.5639 5.81094 15.7036 6.41854 15.7036C7.14248 15.7036 7.76947 15.5131 8.2995 15.1319C8.84246 14.738 9.27553 14.2806 9.59872 13.7597L10.4713 17.133C9.91544 17.6412 9.27553 18.0287 8.55159 18.2956C7.84057 18.5497 7.08431 18.6767 6.2828 18.6767Z" fill="#FFFFFF"/><path d="M44.477 20.8089C43.7968 20.8089 43.5891 21.2192 43.4704 21.3964H43.4247V19.7124H42.8906V24.2733H43.4065V23.7486H43.4704C43.5891 23.9347 43.815 24.3451 44.4861 24.3451C45.3557 24.3451 45.9652 23.6589 45.9652 22.5714C45.9652 21.4838 45.358 20.8066 44.477 20.8066V20.8089ZM44.4131 23.8742C43.7694 23.8742 43.4156 23.3405 43.4156 22.5646C43.4156 21.7888 43.7603 21.282 44.4131 21.282C45.0659 21.282 45.4288 21.8426 45.4288 22.5646C45.4288 23.2867 45.0841 23.8742 44.4131 23.8742Z" fill="#FFFFFF"/><path d="M47.7921 23.5783H47.7555L46.7946 20.8516H46.2148L47.5022 24.2913L47.4018 24.5582C47.2077 25.0784 46.9658 25.1277 46.5755 25.0313L46.4385 25.4955C46.4933 25.5224 46.6462 25.5583 46.8288 25.5583C47.3127 25.5583 47.6528 25.3071 47.8537 24.7734L49.3328 20.8538H48.753L47.7921 23.5805V23.5783Z" fill="#FFFFFF"/><path d="M53.6817 20.4231C52.1432 20.3402 51.3672 21.2685 51.3672 22.4771C51.3672 23.9346 52.3966 24.5535 53.5287 24.5535C55.0968 24.5535 55.6811 23.4727 55.6811 22.4771C55.6811 21.7596 55.3205 20.5128 53.6817 20.4231ZM53.5287 23.6364C52.8668 23.6364 52.5609 23.0825 52.5609 22.4704C52.5609 22.2058 52.6157 21.939 52.7618 21.7192C52.9239 21.477 53.1224 21.3649 53.4625 21.3425C53.6314 21.3268 53.9076 21.3358 54.1541 21.5555C54.3778 21.7618 54.4851 22.0937 54.4851 22.522C54.4851 23.1274 54.1701 23.6364 53.531 23.6364H53.5287Z" fill="#FFFFFF"/><path d="M68.024 20.5736C67.8163 20.4592 67.547 20.4233 67.3096 20.4233C67.0243 20.4233 66.7641 20.4839 66.5792 20.5601C66.3715 20.6588 66.2939 20.7485 66.1798 20.8696V20.522H64.9883V24.4573H66.1729V22.3271C66.1729 21.836 66.1729 21.3449 66.796 21.3449C67.0266 21.3449 67.2343 21.4346 67.3256 21.6477C67.3712 21.7531 67.3804 21.8809 67.3804 22.2374V24.4573H68.5559V21.7598C68.5559 21.1476 68.4486 20.7933 68.0263 20.5736H68.024Z" fill="#FFFFFF"/><path d="M63.9005 20.9369C63.3846 20.392 62.693 20.4212 62.4556 20.4212C60.8716 20.4212 60.3945 21.5939 60.3945 22.5447C60.3945 23.8363 61.2322 24.5516 62.4237 24.5516C63.9644 24.5516 64.3136 23.6591 64.4232 23.4349L63.5307 22.9887C63.3846 23.269 63.1609 23.6838 62.515 23.6838C61.869 23.6838 61.5929 23.1927 61.5997 22.7016H64.4665C64.4505 22.2554 64.4209 21.4863 63.8982 20.9347L63.9005 20.9369ZM61.6088 21.9796C61.6476 21.8137 61.6864 21.632 61.8462 21.4594C61.9626 21.3383 62.1612 21.2015 62.4465 21.2015C62.6542 21.2015 62.8779 21.2777 63.024 21.4213C63.1929 21.5939 63.2248 21.8137 63.2477 21.9796H61.6111H61.6088Z" fill="#FFFFFF"/><path d="M80.8974 19.6924H79.7219V20.5221H79.5348L78.9961 21.3383H79.7219V23.2106C79.7219 23.5873 79.7288 23.8676 79.8908 24.1031C80.1442 24.4663 80.5916 24.4888 80.9979 24.4888C81.2124 24.4888 81.3676 24.4663 81.621 24.4282V23.5223L81.1987 23.538C80.8837 23.538 80.8837 23.334 80.8906 23.0918V21.3405H81.6758V20.5243H80.8997V19.6946L80.8974 19.6924Z" fill="#FFFFFF"/><path d="M70.3132 23.0895V21.3383H71.0048L71.5435 20.5221H70.32V19.6924H69.1445V23.2106C69.1445 23.5873 69.1514 23.8676 69.3134 24.1031C69.5668 24.4663 70.0142 24.4888 70.4205 24.4888C70.635 24.4888 70.7902 24.4663 71.0436 24.4282V23.5223L70.6213 23.538C70.3063 23.538 70.3063 23.334 70.3132 23.0918V23.0895Z" fill="#FFFFFF"/><path d="M83.502 21.1653L83.2943 20.5195H83.0957V21.338H83.2372L83.2304 20.8335L83.2212 20.6675L83.2646 20.8043L83.4312 21.338H83.5613L83.7325 20.8043L83.7736 20.6653L83.7645 20.8335L83.7599 21.338H83.9037V20.5195H83.7051L83.502 21.1653Z" fill="#FFFFFF"/><path d="M82.3477 20.6406H82.617V21.338H82.7608V20.6406H83.0233V20.5195H82.3477V20.6406Z" fill="#FFFFFF"/><path d="M74.348 22.9929C74.2019 23.2731 74.017 23.688 73.371 23.688C72.7251 23.688 72.4854 23.1969 72.4946 22.7058H75.3614C75.3454 22.2596 75.3158 21.4905 74.7931 20.9389C74.2772 20.394 73.5856 20.4231 73.3482 20.4231C71.7642 20.4231 71.2871 21.5959 71.2871 22.5466C71.2871 23.8382 72.0883 24.5535 73.2797 24.5535C74.4712 24.5535 74.8136 24.0871 75.0236 23.7822L75.2496 23.4413L74.3502 22.9929H74.348ZM72.7388 21.4591C72.8529 21.338 73.0538 21.2012 73.3391 21.2012C73.5468 21.2012 73.7705 21.2775 73.9166 21.421C74.0855 21.5936 74.1174 21.8134 74.1403 21.9793H72.5014C72.5402 21.8134 72.579 21.6317 72.7388 21.4591Z" fill="#FFFFFF"/><path d="M79.0347 20.5195H77.688L77.1105 21.4008L76.4851 20.5195H75.1384L76.4623 22.3852L75.0996 24.4571H76.4463L77.1607 23.3696L77.9345 24.4571H79.2789L77.809 22.3852L79.0347 20.5195Z" fill="#FFFFFF"/><path d="M58.3648 20.4233C57.7873 20.4233 57.4244 20.6991 57.3126 20.8696V20.522H56.1211V25.7601H57.3057V24.1098C57.4062 24.2757 57.8033 24.556 58.3169 24.556C59.7435 24.556 60.0425 23.2801 60.0425 22.4706C60.0425 21.1566 59.3509 20.4233 58.3648 20.4233ZM58.0726 23.6366C57.8809 23.6366 57.6778 23.5492 57.5431 23.3989C57.397 23.2375 57.2578 22.9549 57.2578 22.493C57.2578 22.1477 57.3354 21.8315 57.5043 21.6275C57.6732 21.4167 57.8969 21.3315 58.1115 21.3315C58.1662 21.3315 58.2187 21.3382 58.2735 21.3517C58.7574 21.4638 58.9035 21.9773 58.9035 22.4616C58.9035 23.0379 58.6501 23.6344 58.0726 23.6344V23.6366Z" fill="#FFFFFF"/><defs><linearGradient id="paint0_linear_7040_108" x1="98.1087" y1="10.0002" x2="93.4227" y2="7.15085" gradientUnits="userSpaceOnUse"><stop stop-color="#00008B"/><stop offset="1" stop-color="#1A6AFF"/></linearGradient></defs></svg>
                    </div>
                    <div className="text-white/70 text-sm font-light tracking-wide text-center">SaaS Data Protection</div>
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