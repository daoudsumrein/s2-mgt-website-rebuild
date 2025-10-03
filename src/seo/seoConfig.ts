export const BASE_URL = 'https://s2mgt.com';

export type SEOData = {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalPath?: string; // if provided, will be appended to BASE_URL
};

const commonKeywords = [
  'backup',
  'disaster recovery',
  'cybersecurity',
  'data protection',
  'migration orchestration',
  'MENA',
  'UAE',
  'Saudi Arabia',
  'OpenText',
];

const defaultOg = 'https://s2mgt.com/assets/s2-logo.png';

const seoMap: Record<string, SEOData> = {
  '/': {
    title: 'S2 Management | Backup, DR & Cybersecurity in MENA',
    description:
      'Trusted distributor for backup, disaster recovery, cybersecurity and orchestration across MENA. Improve resilience with S2 Management.',
    keywords: [...commonKeywords, 'S2 Management', 'IT transformation'].join(', '),
    ogImage: defaultOg,
  },
  '/about': {
    title: 'About S2 Management | IT Transformation Experts in MENA',
    description:
      'Learn about S2 Management—experts in data protection, DR orchestration and cybersecurity serving UAE, KSA and the wider Middle East.',
    keywords: [...commonKeywords, 'about S2'].join(', '),
    ogImage: defaultOg,
  },
  '/services': {
    title: 'IT Services: Backup, DR, Security & Orchestration | S2',
    description:
      'Comprehensive services for backup, disaster recovery, cybersecurity, and migration orchestration tailored to enterprises in MENA.',
    keywords: [...commonKeywords, 'IT services'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions': {
    title: 'IT Solutions Portfolio | Backup, DR, Security | S2',
    description:
      'Browse our IT solutions including backup, disaster recovery, email security, endpoint protection, and more for MENA enterprises.',
    keywords: [...commonKeywords, 'solutions portfolio'].join(', '),
    ogImage: defaultOg,
  },
  '/contact': {
    title: 'Contact S2 Management | Dubai, UAE',
    description:
      'Get in touch with S2 Management for enterprise backup, DR orchestration and cybersecurity solutions across MENA.',
    keywords: [...commonKeywords, 'contact'].join(', '),
    ogImage: defaultOg,
  },
  '/vendors': {
    title: 'Technology Vendors | OpenText, TDS, AppCURE, NAKIVO | S2',
    description:
      'Discover S2’s vendor ecosystem: OpenText, TDS, AppCURE, NAKIVO, Sangfor, Arrosoft and more for resilient IT.',
    keywords: [...commonKeywords, 'vendors', 'partners'].join(', '),
    ogImage: defaultOg,
  },
  // Vendors
  '/vendors/opentext': {
    title: 'OpenText Carbonite & Security Solutions | S2 Management',
    description:
      'OpenText Carbonite backup, availability and migration solutions delivered by S2 for enterprise resilience in MENA.',
    keywords: [...commonKeywords, 'OpenText Carbonite'].join(', '),
    ogImage: defaultOg,
  },
  '/vendors/tds': {
    title: 'TransitionManager (TDS) Orchestration | S2 Management',
    description:
      'Plan and orchestrate complex migrations with TransitionManager® (TDS) from S2 Management in MENA.',
    keywords: [...commonKeywords, 'TransitionManager', 'TDS'].join(', '),
    ogImage: defaultOg,
  },
  '/vendors/appcure': {
    title: 'AppCURE Application Modernization | S2 Management',
    description:
      'Modernize legacy apps with AppCURE—capture, convert and deliver with S2 Management in MENA.',
    keywords: [...commonKeywords, 'AppCURE', 'app modernization'].join(', '),
    ogImage: defaultOg,
  },
  '/vendors/sangfor': {
    title: 'Sangfor HCI & NGAF | Infrastructure & Security | S2',
    description:
      'Sangfor hyper-converged infrastructure and next-gen firewall solutions integrated by S2 for specific use cases.',
    keywords: [...commonKeywords, 'Sangfor', 'HCI', 'NGAF'].join(', '),
    ogImage: defaultOg,
  },
  '/vendors/arrosoft': {
    title: 'Arrosoft Data Security & Archiving | S2 Management',
    description:
      'Arrosoft solutions for data security, governance and archiving—implemented by S2 in MENA.',
    keywords: [...commonKeywords, 'Arrosoft'].join(', '),
    ogImage: defaultOg,
  },
  '/vendors/nakivo': {
    title: 'NAKIVO Backup & Replication | S2 Management',
    description:
      'Fast, reliable and cost-effective backup & replication with NAKIVO—delivered by S2 Management.',
    keywords: [...commonKeywords, 'NAKIVO', 'VM backup'].join(', '),
    ogImage: defaultOg,
  },
  // Solutions
  '/solutions/opentext-carbonite-availability': {
    title: 'OpenText Carbonite Availability | DR Replication | S2',
    description:
      'Continuous replication and disaster recovery with OpenText Carbonite Availability for critical workloads.',
    keywords: [...commonKeywords, 'Carbonite Availability', 'replication'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/data-protection': {
    title: 'Enterprise Data Protection Solutions | S2 Management',
    description:
      'Data backup, recovery and archiving strategies tailored for compliance and resilience across MENA.',
    keywords: [...commonKeywords, 'enterprise backup', 'archiving'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/it-discovery': {
    title: 'IT Discovery & Dependency Mapping | S2 Management',
    description:
      'Automated discovery and dependency mapping to accelerate migrations and reduce risk.',
    keywords: [...commonKeywords, 'IT discovery', 'dependency mapping'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/secure-cloud': {
    title: 'Secure Cloud Backup & Archiving | S2 Management',
    description:
      'Secure cloud solutions for backup, archiving and long-term retention with optimal cost.',
    keywords: [...commonKeywords, 'cloud backup', 'cloud archiving'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/app-modernization': {
    title: 'Application Modernization Services | S2 Management',
    description:
      'Capture, convert and deliver legacy applications to modern platforms with minimal code changes.',
    keywords: [...commonKeywords, 'app modernization', 'AppCURE'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/security': {
    title: 'Cybersecurity Services | Email, Endpoint, Network | S2',
    description:
      'Holistic cybersecurity services including email, endpoint and network protection for enterprises.',
    keywords: [...commonKeywords, 'cybersecurity services'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/email-archiving': {
    title: 'Email Archiving Solutions | Compliance & Retention | S2',
    description:
      'Ensure compliance and retention with scalable, searchable email archiving solutions.',
    keywords: [...commonKeywords, 'email archiving', 'compliance'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/endpoint-backup': {
    title: 'Endpoint Backup Solutions | Laptops & Desktops | S2',
    description:
      'Protect endpoint data with automated, secure backups for remote and office workers.',
    keywords: [...commonKeywords, 'endpoint backup'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/saas-backup': {
    title: 'SaaS Backup for M365 & Google Workspace | S2',
    description:
      'Protect SaaS data against accidental deletion and ransomware with dedicated backup.',
    keywords: [...commonKeywords, 'Microsoft 365 backup', 'Google Workspace backup'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/onprem-backup': {
    title: 'On-Premises Backup & Recovery | S2 Management',
    description:
      'Reliable on-prem backup and fast recovery for physical and virtual workloads.',
    keywords: [...commonKeywords, 'on-prem backup', 'VM backup'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/opentext-carbonite-migrate': {
    title: 'OpenText Carbonite Migrate | Server Migration | S2',
    description:
      'Streamline server migrations with minimal downtime using Carbonite Migrate.',
    keywords: [...commonKeywords, 'Carbonite Migrate', 'server migration'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/disaster-recovery-orchestration': {
    title: 'Disaster Recovery Orchestration (DRO) | S2 Management',
    description:
      'Automate DR runbooks and failover with orchestration to meet stringent RTO/RPO.',
    keywords: [...commonKeywords, 'DR orchestration', 'runbooks'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/server-migration-orchestration': {
    title: 'Server Migration Orchestration | S2 Management',
    description:
      'Plan, test and execute complex server migrations with orchestration and dependencies.',
    keywords: [...commonKeywords, 'migration orchestration'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/endpoint-protection': {
    title: 'Endpoint Protection (EPP) | Antivirus & Hardening | S2',
    description:
      'Reduce attack surface and block malware with modern endpoint protection platforms.',
    keywords: [...commonKeywords, 'EPP', 'endpoint security'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/edr': {
    title: 'Endpoint Detection & Response (EDR) | S2 Management',
    description:
      'Detect, investigate and remediate endpoint threats in real time with EDR.',
    keywords: [...commonKeywords, 'EDR', 'endpoint detection'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/mdr': {
    title: 'Managed Detection & Response (MDR) | S2 Management',
    description:
      '24/7 threat monitoring and response with MDR services tailored for enterprises.',
    keywords: [...commonKeywords, 'MDR', 'managed detection'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/security-awareness': {
    title: 'Security Awareness Training | Phishing Simulation | S2',
    description:
      'Improve user resilience with security awareness training and phishing simulations.',
    keywords: [...commonKeywords, 'security awareness', 'phishing training'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/email-protection': {
    title: 'Email Protection & Anti-Phishing | S2 Management',
    description:
      'Block spam, phishing and business email compromise with layered email security.',
    keywords: [...commonKeywords, 'email security', 'anti-phishing'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/email-encryption': {
    title: 'Email Encryption Solutions | Compliance & Privacy | S2',
    description:
      'Protect sensitive email content with secure encryption and policy-based controls.',
    keywords: [...commonKeywords, 'email encryption'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/ransomware-protection': {
    title: 'Ransomware Protection | Backup & Security Controls | S2',
    description:
      'Reduce ransomware risk with immutable backups, least privilege and rapid recovery.',
    keywords: [...commonKeywords, 'ransomware protection'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/OpenText-Server-Backup': {
    title: 'OpenText Server Backup | Carbonite Server | S2',
    description:
      'Protect Windows and Linux servers with OpenText Carbonite Server backup & recovery.',
    keywords: [...commonKeywords, 'Carbonite Server', 'server backup'].join(', '),
    ogImage: defaultOg,
  },
  '/solutions/servers-data-protection': {
    title: 'Servers Data Protection | Backup & Recovery | S2',
    description:
      'Enterprise server data protection covering physical, virtual and cloud workloads.',
    keywords: [...commonKeywords, 'server data protection'].join(', '),
    ogImage: defaultOg,
  },
};

export function getSEOForPath(pathname: string): SEOData {
  return seoMap[pathname] || {};
}
