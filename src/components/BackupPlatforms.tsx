import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BackupPlatforms = () => {
  const { ref, isInView } = useScrollAnimation();

  const platforms = [
    {
      name: "VMware vSphere",
      description: "Virtualization Platform",
      logo: "/lovable-uploads/351fea02-cbae-493d-aceb-eb7edf8da3a7.png",
      gradient: "from-[#0072CE] to-[#005a9e]"
    },
    {
      name: "Microsoft Hyper-V", 
      description: "Windows Virtualization",
      logo: "/lovable-uploads/f5a97011-2962-4b12-a41d-0cfda4e911e9.png",
      gradient: "from-[#00BCF2] to-[#0078d4]"
    },
    {
      name: "Nutanix",
      description: "Hyperconverged Infrastructure", 
      logo: "/lovable-uploads/020811f6-6d1a-4a57-ab1b-aa5c6a4818ed.png",
      gradient: "from-[#024DA1] to-[#1e3a8a]"
    },
    {
      name: "Microsoft 365",
      description: "Cloud Productivity Suite",
      logo: "/lovable-uploads/ac9f30b7-08a9-4df3-a39b-cc27b0299705.png", 
      gradient: "from-[#FF6B35] to-[#e55a2b]"
    },
    {
      name: "NAS",
      description: "Network Attached Storage",
      logo: "/lovable-uploads/8617f030-dc57-491f-bbcc-6f78ce1fa11c.png",
      gradient: "from-[#4A90E2] to-[#357abd]"
    },
    {
      name: "Windows",
      description: "Desktop & Server OS", 
      logo: "/lovable-uploads/f5a97011-2962-4b12-a41d-0cfda4e911e9.png",
      gradient: "from-[#00BCF2] to-[#0078d4]"
    },
    {
      name: "Linux",
      description: "Server and Desktop",
      logo: "/lovable-uploads/7e53d434-9932-45c5-8601-d9aa865d02cc.png",
      gradient: "from-[#FCC624] to-[#e6b121]"
    },
    {
      name: "VMware Cloud Director",
      description: "Cloud Management Platform",
      logo: "/lovable-uploads/351fea02-cbae-493d-aceb-eb7edf8da3a7.png",
      gradient: "from-[#0072CE] to-[#005a9e]"
    },
    {
      name: "Amazon EC2", 
      description: "Elastic Cloud Computing",
      logo: "/lovable-uploads/89819c90-f36e-4a5d-bef8-bf0985e75ea4.png",
      gradient: "from-[#FF9900] to-[#e68a00]"
    },
    {
      name: "Microsoft SQL Server",
      description: "Relational Database",
      logo: "/lovable-uploads/a4a0c2c7-5c9c-4569-889f-164e47956887.png", 
      gradient: "from-[#CC2927] to-[#b12426]"
    },
    {
      name: "Oracle Database",
      description: "Enterprise Database", 
      logo: "/lovable-uploads/1d6932af-7aec-45a1-811b-ddd7bd077d17.png",
      gradient: "from-[#F80000] to-[#d40000]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Powerful Backup and Recovery
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground">
            for Your Data – Wherever It Resides
          </h2>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {platforms.map((platform, index) => (
            <div 
              key={platform.name}
              className={`bg-card rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 relative overflow-hidden group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="w-20 h-20 mx-auto mb-6 rounded-xl overflow-hidden bg-white shadow-md flex items-center justify-center">
                <img 
                  src={platform.logo} 
                  alt={`${platform.name} logo`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {platform.name}
              </h3>
              <p className="text-muted-foreground text-sm font-medium">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackupPlatforms;