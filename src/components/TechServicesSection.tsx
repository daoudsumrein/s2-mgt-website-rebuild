import { useState } from "react";

const TechServicesSection = () => {
  const [activeSection, setActiveSection] = useState<'data-protection' | 'cybersecurity'>('data-protection');

  const dataProtectionServices = [
    ["Disaster Recovery", "Server Migration", "Disaster Recovery Orchestration", "Server Migration Orchestration", "Endpoint Cloud Backup"],
    ["Servers Cloud Backup", "On Prem Backup", "Server Backup", "Email Archiving", "Application Modernization"]
  ];

  const cybersecurityServices = [
    ["Servers and Data Protection", "Endpoint Protection with EDR", "Ransomware Protection", "MDR", "Security Awareness"],
    ["Email Protection", "Email Encryption"]
  ];

  return (
    <section 
      className="min-h-screen relative flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/8d27f21f-0e90-44b2-a462-bae5390e8f22.png'), linear-gradient(135deg, #0a1229 0%, #1e3a5f 50%, #2a4d7a 100%)`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-[1]" />
      
      {/* Navigation Toggle - Mobile First */}
      <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/40 border border-white/20 rounded-[25px] p-1 backdrop-blur-[15px] z-10 flex w-[calc(100vw-2rem)] max-w-[320px] md:top-8 md:max-w-[400px]">
        <button
          onClick={() => setActiveSection('data-protection')}
          className={`flex-1 py-3 px-4 rounded-[20px] text-sm font-medium text-center min-h-[44px] transition-all duration-300 ${
            activeSection === 'data-protection'
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
              : 'bg-transparent text-white/80 hover:text-white'
          }`}
        >
          Data Protection
        </button>
        <button
          onClick={() => setActiveSection('cybersecurity')}
          className={`flex-1 py-3 px-4 rounded-[20px] text-sm font-medium text-center min-h-[44px] transition-all duration-300 ${
            activeSection === 'cybersecurity'
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
              : 'bg-transparent text-white/80 hover:text-white'
          }`}
        >
          Cybersecurity
        </button>
      </nav>

      {/* Container */}
      <div className="w-full px-4 relative z-[5] mt-20 md:px-8 md:mt-24 lg:px-16 max-w-[1200px] lg:ml-0 lg:mr-auto">
        {/* Content Sections Container */}
        <div className="relative min-h-[600px]">
          {/* Data Protection Section */}
          <div className={`absolute inset-0 transition-all duration-[600ms] ease-out ${
            activeSection === 'data-protection' 
              ? 'opacity-100 pointer-events-auto translate-x-0 z-10' 
              : 'opacity-0 pointer-events-none translate-x-[-50px] z-0'
          }`}>
            <h1 className="text-[1.75rem] md:text-4xl lg:text-5xl xl:text-[3.25rem] font-light leading-[1.3] mb-8 md:mb-10 lg:mb-12 xl:mb-14 text-white max-w-[700px] md:max-w-[800px]">
              Ensure business continuity with rapid recovery from disruptions.
            </h1>
            
            <div className="flex flex-col gap-6 mb-8 md:grid md:grid-cols-2 md:gap-8 md:mb-10 lg:gap-10 lg:mb-12 xl:gap-12 max-w-[800px]">
              <div className="flex flex-col gap-3 p-4 md:p-6 lg:p-8 rounded-lg bg-white/5">
                {dataProtectionServices[0].map((service, index) => (
                  <div key={index} className="text-white text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-[1.4] py-2 md:py-2.5 lg:py-3 xl:py-3.5">
                    {service}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 p-4 md:p-6 lg:p-8 rounded-lg bg-white/5">
                {dataProtectionServices[1].map((service, index) => (
                  <div key={index} className="text-white text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-[1.4] py-2 md:py-2.5 lg:py-3 xl:py-3.5">
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <a 
              href="/solutions" 
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm md:text-base font-medium transition-all duration-300 hover:translate-x-1 py-2"
            >
              Learn more about Data Protection
              <span className="transition-transform duration-300">→</span>
            </a>
          </div>

          {/* Cybersecurity Section */}
          <div className={`absolute inset-0 transition-all duration-[600ms] ease-out ${
            activeSection === 'cybersecurity' 
              ? 'opacity-100 pointer-events-auto translate-x-0 z-10' 
              : 'opacity-0 pointer-events-none translate-x-[-50px] z-0'
          }`}>
            <h1 className="text-[1.75rem] md:text-4xl lg:text-5xl xl:text-[3.25rem] font-light leading-[1.3] mb-8 md:mb-10 lg:mb-12 xl:mb-14 text-white max-w-[700px] md:max-w-[800px]">
              From endpoint to enterprise - secure everything, compromise nothing.<br />
              Advanced threat detection and response for complete cyber resilience.
            </h1>
            
            <div className="flex flex-col gap-6 mb-8 md:grid md:grid-cols-2 md:gap-8 md:mb-10 lg:gap-10 lg:mb-12 xl:gap-12 max-w-[800px]">
              <div className="flex flex-col gap-3 p-4 md:p-6 lg:p-8 rounded-lg bg-white/5">
                {cybersecurityServices[0].map((service, index) => (
                  <div key={index} className="text-white text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-[1.4] py-2 md:py-2.5 lg:py-3 xl:py-3.5">
                    {service}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 p-4 md:p-6 lg:p-8 rounded-lg bg-white/5">
                {cybersecurityServices[1].map((service, index) => (
                  <div key={index} className="text-white text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-[1.4] py-2 md:py-2.5 lg:py-3 xl:py-3.5">
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <a 
              href="/solutions/security" 
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm md:text-base font-medium transition-all duration-300 hover:translate-x-1 py-2"
            >
              Learn more about Cybersecurity
              <span className="transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechServicesSection;