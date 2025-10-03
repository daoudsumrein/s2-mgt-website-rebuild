import HeroSection from '@/components/HeroSection'
import TrustedCompanies from '@/components/TrustedCompanies'
import TechServicesSection from '@/components/TechServicesSection'
import OurServicesSection from '@/components/OurServicesSection'
import TechForwardSection from '@/components/TechForwardSection'
import OurLocationSection from '@/components/OurLocationSection'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <main>
        <HeroSection />
        <TrustedCompanies />
        <TechServicesSection />
        <OurServicesSection />
        <TechForwardSection />
        <OurLocationSection />
      </main>
    </>
  )
}

export const documentProps = {
  title: 'S2 Management - IT Solutions & Services',
  description: 'Leading provider of IT solutions, cybersecurity, data protection, and cloud services in MENA region.',
  keywords: 'IT solutions, cybersecurity, data protection, cloud services, MENA',
}
