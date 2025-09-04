import { motion } from 'framer-motion';
import { Target, Building2, Briefcase, Shield, Rocket } from 'lucide-react';

const TechForwardSection = () => {
  const serviceCategories = [
    {
      title: "Strategic Consulting",
      icon: Target,
      services: [
        "Strategic technology planning & roadmapping",
        "Vendor-neutral assessments & recommendations", 
        "Custom development roadmaps",
        "Risk analysis & mitigation strategies",
        "Business continuity planning"
      ]
    },
    {
      title: "Solutions Architecture", 
      icon: Building2,
      services: [
        "Cloud transformation design & strategy",
        "Enterprise cybersecurity architecture",
        "Disaster recovery & backup planning",
        "Infrastructure modernization",
        "Future-proof scalable solutions"
      ]
    },
    {
      title: "Professional Services",
      icon: Briefcase,
      services: [
        "Full project management & delivery",
        "Milestone-driven project execution", 
        "Comprehensive testing & validation",
        "Knowledge transfer & training",
        "On-time, on-budget execution"
      ]
    },
    {
      title: "Service Level Agreements",
      icon: Shield,
      services: [
        "Customizable service level tiers",
        "Guaranteed recovery time objectives",
        "24/7 incident response protocols", 
        "Regular testing & validation cycles",
        "Clear escalation procedures"
      ]
    },
    {
      title: "App Modernization",
      icon: Rocket,
      services: [
        "Legacy system assessment & planning",
        "Detailed dependency mapping",
        "Minimal downtime migration strategies",
        "Multi-platform compatibility support",
        "Risk-managed modernization approach"
      ]
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2392CF]/30 to-transparent animate-pulse opacity-20"
        />
        <div 
          className="absolute inset-0 bg-white"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-gradient-to-br from-white/90 via-white/80 to-cyan-50/60 backdrop-blur-sm border border-[#2392CF]/20 rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:bg-gradient-to-br hover:from-[#2392CF]/5 hover:via-teal-50/80 hover:to-purple-50/40 hover:border-[#2392CF]/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(35,146,207,0.15),0_0_20px_rgba(20,184,166,0.1)] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2392CF]/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-3" style={{ color: '#2392CF' }}>
                <category.icon size={20} style={{ color: '#2392CF' }} />
                {category.title}
              </h3>
              
              <ul className="space-y-2 sm:space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li 
                    key={serviceIndex}
                    className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed pl-6 relative group-hover:text-gray-800 transition-colors duration-300"
                  >
                    <span className="absolute left-0 text-[#2392CF] font-bold group-hover:translate-x-1 group-hover:text-teal-600 transition-all duration-300">
                      →
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechForwardSection;