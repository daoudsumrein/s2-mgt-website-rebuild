export const SITE_URL = "https://s2mgt.com";

export type Solution = {
  title: string;
  category: "Data Protection" | "Cybersecurity";
  description: string;
  path: string;
};

export const solutions: Solution[] = [
  { title: "Disaster Recovery", category: "Data Protection", description: "Comprehensive DR planning and orchestration.", path: "/solutions/opentext-carbonite-availability" },
  { title: "Server Migration", category: "Data Protection", description: "Seamless any-to-any server migrations.", path: "/solutions/opentext-carbonite-migrate" },
  { title: "Disaster Recovery Orchestration", category: "Data Protection", description: "Automated DR workflow orchestration.", path: "/solutions/disaster-recovery-orchestration" },
  { title: "Server Migration Orchestration", category: "Data Protection", description: "Automated server migration workflows.", path: "/solutions/server-migration-orchestration" },
  { title: "Endpoint Cloud Backup", category: "Data Protection", description: "Cloud-based endpoint protection.", path: "/solutions/endpoint-backup" },
  { title: "Servers Cloud Backup", category: "Data Protection", description: "Server backup and replication in the cloud.", path: "/solutions/saas-backup" },
  { title: "On Prem Backup", category: "Data Protection", description: "Local, on-premises backup solutions.", path: "/solutions/onprem-backup" },
  { title: "Server Backup", category: "Data Protection", description: "OpenText server backup and replication.", path: "/solutions/OpenText-Server-Backup" },
  { title: "Email Archiving", category: "Data Protection", description: "Email compliance and continuity archiving.", path: "/solutions/email-archiving" },
  { title: "Container Migration", category: "Data Protection", description: "Kubernetes and OpenShift cluster migration.", path: "/solutions/container-migration" },
  { title: "Cloud Migration & Modernization", category: "Data Protection", description: "Agentless migration and OS modernization across multi-cloud environments.", path: "/solutions/cloud-migration" },
  { title: "Servers and Data Protection", category: "Cybersecurity", description: "Insider threat protection and access control.", path: "/solutions/servers-data-protection" },
  { title: "Endpoint Protection with EDR", category: "Cybersecurity", description: "Comprehensive endpoint security with detection and response.", path: "/solutions/endpoint-protection" },
  { title: "Ransomware Protection", category: "Cybersecurity", description: "Advanced ransomware defense systems.", path: "/solutions/ransomware-protection" },
  { title: "MDR", category: "Cybersecurity", description: "Managed Detection and Response.", path: "/solutions/mdr" },
  { title: "Security Awareness", category: "Cybersecurity", description: "User security awareness training.", path: "/solutions/security-awareness" },
  { title: "Email Protection", category: "Cybersecurity", description: "Email threat protection.", path: "/solutions/email-protection" },
  { title: "Email Encryption", category: "Cybersecurity", description: "Secure, encrypted email communications.", path: "/solutions/email-encryption" },
];

export type Vendor = {
  name: string;
  focus: string;
  tagline: string;
  offerings: string[];
  path: string;
};

export const vendors: Vendor[] = [
  { name: "OpenText", focus: "Core Data Protection Platform", tagline: "Enterprise-grade data protection, availability, and secure cloud solutions.", offerings: ["Data Protection - Availability & Migrate", "Secure Cloud Suite - Cloud-to-Cloud Backup", "Email Continuity & Archiving", "Endpoint & Threat Protection"], path: "/vendors/opentext" },
  { name: "TDS", focus: "Orchestration & IT Visibility", tagline: "Orchestration and automation platform that streamlines migration and disaster recovery while accelerating IT operations.", offerings: ["IT Discovery & Asset Management", "Dependency Mapping & Visualization", "Migration Wave Planning", "DR Orchestration & Reporting"], path: "/vendors/tds" },
  { name: "appCURE", focus: "Application Modernization", tagline: "Complete application transformation and modernization platform.", offerings: ["Capture - Application Assessment", "Studio - App Repackaging", "Runtime - Secure Environments", "DMT - Desktop Modernization"], path: "/vendors/appcure" },
  { name: "NAKIVO", focus: "Backup & Recovery", tagline: "Fast, affordable data protection for virtual, cloud, and hybrid environments.", offerings: ["VM Backup & Recovery for VMware, Hyper-V, Nutanix AHV, Proxmox VE", "Cloud data protection to Amazon S3, Azure, Wasabi", "Microsoft 365 backup", "Physical server and file share backup"], path: "/vendors/nakivo" },
  { name: "Arrosoft", focus: "Advanced Cybersecurity & Threat Protection", tagline: "Protecting against insider threats and ransomware attacks.", offerings: ["Stealth - Kernel-level protection & data hiding", "AirGap - Immutable backup vault protection", "Driver-layer isolation", "Multi-factor authentication / zero trust"], path: "/vendors/arrosoft" },
  { name: "RiverMeadow", focus: "Automated Cloud Migration", tagline: "Automated workload migration of Windows and Linux servers to any cloud with minimal downtime.", offerings: ["Automated cloud migration (Collect-Convert-Deploy)", "Agentless, rapid and secure migration", "Fixed-price per-instance service", "Lift & optimize: OS upgrades, SQL to AWS RDS"], path: "/vendors/rivermeadow" },
  { name: "CloudCasa", focus: "Kubernetes Data Protection & Migration", tagline: "Backup and disaster recovery for Kubernetes environments across multi-cloud and hybrid infrastructures.", offerings: ["Kubernetes backup & recovery for any CNCF distribution", "Multi-cloud management from a single dashboard", "Application migration between distributions and clouds", "SaaS or self-hosted with immutable backups"], path: "/vendors/cloudcasa" },
];

export const services = [
  { title: "Strategic Consulting", items: ["Strategic technology planning & roadmapping", "Vendor-neutral assessments & recommendations", "Custom development roadmaps", "Risk analysis & mitigation strategies", "Business continuity planning"] },
  { title: "Solutions Architecture", items: ["Cloud transformation design & strategy", "Enterprise cybersecurity architecture", "Disaster recovery & backup planning", "Infrastructure modernization", "Future-proof scalable solutions"] },
  { title: "Professional Services", items: ["Full project management & delivery", "Milestone-driven project execution", "Comprehensive testing & validation", "Knowledge transfer & training", "On-time, on-budget execution"] },
  { title: "Service Level Agreements", items: ["Customizable service level tiers", "Guaranteed recovery time objectives", "24/7 incident response protocols", "Regular testing & validation cycles", "Clear escalation procedures"] },
  { title: "App Modernization", items: ["Legacy system assessment & planning", "Detailed dependency mapping", "Minimal downtime migration strategies", "Multi-platform compatibility support", "Risk-managed modernization approach"] },
];

export const contact = {
  email: "admin@s2mgt.com",
  offices: [
    { country: "United Arab Emirates", address: "Office 101, Building 10, Dubai Internet City, UAE", phone: "+971 4 434 2221" },
    { country: "Saudi Arabia", phone: "+966 55 084 6532" },
  ],
  contactPage: "/contact",
};
