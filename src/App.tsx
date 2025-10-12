import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Vendors from "./pages/Vendors";
import OpenTextPage from "./pages/vendors/OpenText";
import TDSPage from "./pages/vendors/TDS";
import AppCUREPage from "./pages/vendors/AppCURE";
import AppCUREVendorPage from "./pages/vendors/AppCUREVendor";
import SangforPage from "./pages/vendors/Sangfor";
import ArrosoftPage from "./pages/vendors/Arrosoft";
import NakivoPage from "./pages/vendors/Nakivo";
import RiverMeadowPage from "./pages/vendors/RiverMeadow";
import CloudCasaPage from "./pages/vendors/CloudCasa";
import DisasterRecovery from "./pages/solutions/DisasterRecovery";
import DataProtection from "./pages/solutions/DataProtection";
import ITDiscovery from "./pages/solutions/ITDiscovery";
import SecureCloud from "./pages/solutions/SecureCloud";
import AppModernization from "./pages/solutions/AppModernization";
import Security from "./pages/solutions/Security";
import EmailArchiving from "./pages/solutions/EmailArchiving";
import EndpointBackup from "./pages/solutions/EndpointBackup";
import SaasBackup from "./pages/solutions/SaasBackup";
import OnPremBackup from "./pages/solutions/OnPremBackup";
import ServerMigration from "./pages/solutions/ServerMigration";
import DROrchestration from "./pages/solutions/DROrchestration";
import ServerMigrationOrchestration from "./pages/solutions/ServerMigrationOrchestration";
import EndpointProtection from "./pages/solutions/EndpointProtection";
import EDR from "./pages/solutions/EDR";
import MDR from "./pages/solutions/MDR";
import SecurityAwareness from "./pages/solutions/SecurityAwareness";
import EmailProtection from "./pages/solutions/EmailProtection";
import EmailEncryption from "./pages/solutions/EmailEncryption";
import RansomwareProtection from "./pages/solutions/RansomwareProtection";
import OpenTextServerBackup from "./pages/solutions/OpenTextServerBackup";
import ServersDataProtection from "./pages/solutions/ServersDataProtection";
import ContainerMigration from "./pages/solutions/ContainerMigration";
import CloudMigration from "./pages/solutions/CloudMigration";
import NotFound from "./pages/NotFound";
import Clients from "./pages/Clients";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/vendors/opentext" element={<OpenTextPage />} />
          <Route path="/vendors/tds" element={<TDSPage />} />
           <Route path="/vendors/appcure" element={<AppCUREVendorPage />} />
            <Route path="/vendors/sangfor" element={<SangforPage />} />
            <Route path="/vendors/arrosoft" element={<ArrosoftPage />} />
            <Route path="/vendors/nakivo" element={<NakivoPage />} />
            <Route path="/vendors/rivermeadow" element={<RiverMeadowPage />} />
            <Route path="/vendors/cloudcasa" element={<CloudCasaPage />} />
          <Route path="/solutions/opentext-carbonite-availability" element={<DisasterRecovery />} />
          <Route path="/solutions/data-protection" element={<DataProtection />} />
          <Route path="/solutions/it-discovery" element={<ITDiscovery />} />
          <Route path="/solutions/secure-cloud" element={<SecureCloud />} />
          <Route path="/solutions/app-modernization" element={<AppModernization />} />
          <Route path="/solutions/security" element={<Security />} />
          <Route path="/solutions/email-archiving" element={<EmailArchiving />} />
          <Route path="/solutions/endpoint-backup" element={<EndpointBackup />} />
          <Route path="/solutions/saas-backup" element={<SaasBackup />} />
          <Route path="/solutions/onprem-backup" element={<OnPremBackup />} />
          <Route path="/solutions/opentext-carbonite-migrate" element={<ServerMigration />} />
          <Route path="/solutions/disaster-recovery-orchestration" element={<DROrchestration />} />
          <Route path="/solutions/server-migration-orchestration" element={<ServerMigrationOrchestration />} />
          <Route path="/solutions/endpoint-protection" element={<EndpointProtection />} />
          <Route path="/solutions/edr" element={<EDR />} />
          <Route path="/solutions/mdr" element={<MDR />} />
          <Route path="/solutions/security-awareness" element={<SecurityAwareness />} />
          <Route path="/solutions/email-protection" element={<EmailProtection />} />
          <Route path="/solutions/email-encryption" element={<EmailEncryption />} />
          <Route path="/solutions/ransomware-protection" element={<RansomwareProtection />} />
          <Route path="/solutions/OpenText-Server-Backup" element={<OpenTextServerBackup />} />
          <Route path="/solutions/servers-data-protection" element={<ServersDataProtection />} />
          <Route path="/solutions/container-migration" element={<ContainerMigration />} />
          <Route path="/solutions/cloud-migration" element={<CloudMigration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
