import { motion } from "framer-motion";

const BackupPlatforms = () => {
  const platforms = [
    {
      name: "VMware vSphere",
      description: "Virtualization Platform",
      logo: "/lovable-uploads/d9e8afa7-fa2b-4fac-a063-2ffcc263786e.png", // VMware from existing uploads
      className: "vmware"
    },
    {
      name: "Proxmox", 
      description: "Open Source Virtualization",
      logo: null, // Will use text logo "P" as fallback
      className: "proxmox"
    },
    {
      name: "Microsoft Hyper-V",
      description: "Windows Virtualization", 
      logo: null, // Will use text logo "H" as fallback
      className: "hyperv"
    },
    {
      name: "Nutanix",
      description: "Hyperconverged Infrastructure",
      logo: "/lovable-uploads/407e92f0-4a84-45b7-8761-88fa65c36cdb.png",
      className: "nutanix"
    },
    {
      name: "Microsoft 365",
      description: "Cloud Productivity Suite",
      logo: "/lovable-uploads/7b334a7a-2a2f-4b39-baf1-6b8aaea4007d.png",
      className: "microsoft365"
    },
    {
      name: "NAS",
      description: "Network Attached Storage", 
      logo: "/lovable-uploads/46e01893-8899-410e-bb65-21e244d6f24f.png",
      className: "nas"
    },
    {
      name: "Windows",
      description: "Desktop & Server OS",
      logo: "/lovable-uploads/a61a0d26-5bbe-45c8-b43b-502f180e90cd.png",
      className: "windows"
    },
    {
      name: "Linux", 
      description: "Server and Desktop",
      logo: "/lovable-uploads/105b00a4-431b-425f-bf8c-6b0cba1cd17d.png",
      className: "linux"
    },
    {
      name: "VMware Cloud Director",
      description: "Cloud Management Platform",
      logo: "/lovable-uploads/749c08a6-1944-4e39-8535-4f48cbf44f79.png",
      className: "cloud-director"
    },
    {
      name: "Amazon EC2",
      description: "Elastic Cloud Computing",
      logo: "/lovable-uploads/febf33bd-3761-41e3-918a-b28979810287.png",
      className: "ec2"
    },
    {
      name: "Microsoft SQL Server",
      description: "Relational Database",
      logo: "/lovable-uploads/a5bf8065-e8b7-44c7-8b0d-de33f81c399d.png",
      className: "sql-server"
    },
    {
      name: "Oracle Database",
      description: "Enterprise Database",
      logo: "/lovable-uploads/792196d9-b5b7-4c7a-aced-f8ebcef9450e.png",
      className: "oracle"
    }
  ];

  const getTextLogo = (className: string) => {
    const textLogos: { [key: string]: string } = {
      "vmware": "V",
      "proxmox": "P", 
      "hyperv": "H",
      "nutanix": "N",
      "microsoft365": "365",
      "nas": "≡",
      "windows": "⊞",
      "linux": "🐧",
      "cloud-director": "☁",
      "ec2": "EC2",
      "sql-server": "SQL",
      "oracle": "O"
    };
    return textLogos[className] || "?";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Powerful Backup and Recovery
          </h2>
          <p className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
            for Your Data – Wherever It Resides
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.div 
              key={platform.className}
              className="group bg-card border border-border rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Animated top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              {/* Logo container */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-xl overflow-hidden bg-muted/50">
                {platform.logo ? (
                  <img 
                    src={platform.logo} 
                    alt={`${platform.name} logo`}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <span className="text-2xl font-bold text-primary">
                    {getTextLogo(platform.className)}
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {platform.name}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                {platform.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackupPlatforms;