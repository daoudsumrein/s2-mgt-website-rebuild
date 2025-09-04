import { motion } from 'framer-motion';

const TechForwardSection = () => {
  const serviceCategories = [
    {
      title: "Strategic Consulting",
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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:bg-white/10 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,229,255,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4 sm:mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-[0_0_15px_rgba(0,229,255,0.8)]" />
                {category.title}
              </h3>
              
              <ul className="space-y-2 sm:space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li 
                    key={serviceIndex}
                    className="text-cyan-50/80 text-xs sm:text-sm lg:text-base leading-relaxed pl-6 relative group-hover:text-white transition-colors duration-300"
                  >
                    <span className="absolute left-0 text-cyan-400 font-bold group-hover:translate-x-1 transition-transform duration-300">
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