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
import SangforPage from "./pages/vendors/Sangfor";
import DisasterRecovery from "./pages/solutions/DisasterRecovery";
import DataProtection from "./pages/solutions/DataProtection";
import ITDiscovery from "./pages/solutions/ITDiscovery";
import SecureCloud from "./pages/solutions/SecureCloud";
import AppModernization from "./pages/solutions/AppModernization";
import Security from "./pages/solutions/Security";
import EmailArchiving from "./pages/solutions/EmailArchiving";
import EndpointBackup from "./pages/solutions/EndpointBackup";
import ServerBackup from "./pages/solutions/ServerBackup";
import OnPremBackup from "./pages/solutions/OnPremBackup";
import ServerMigration from "./pages/solutions/ServerMigration";
import DROrchestration from "./pages/solutions/DROrchestration";
import EndpointProtection from "./pages/solutions/EndpointProtection";
import EDR from "./pages/solutions/EDR";
import MDR from "./pages/solutions/MDR";
import SecurityAwareness from "./pages/solutions/SecurityAwareness";
import EmailProtection from "./pages/solutions/EmailProtection";
import EmailEncryption from "./pages/solutions/EmailEncryption";
import CloudToCloudBackup from "./pages/solutions/CloudToCloudBackup";
import NotFound from "./pages/NotFound";
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
          <Route path="/vendors/opentext" element={<OpenTextPage />} />
          <Route path="/vendors/tds" element={<TDSPage />} />
          <Route path="/vendors/appcure" element={<AppCUREPage />} />
          <Route path="/vendors/sangfor" element={<SangforPage />} />
          <Route path="/solutions/disaster-recovery" element={<DisasterRecovery />} />
          <Route path="/solutions/data-protection" element={<DataProtection />} />
          <Route path="/solutions/it-discovery" element={<ITDiscovery />} />
          <Route path="/solutions/secure-cloud" element={<SecureCloud />} />
          <Route path="/solutions/app-modernization" element={<AppModernization />} />
          <Route path="/solutions/security" element={<Security />} />
          <Route path="/solutions/email-archiving" element={<EmailArchiving />} />
          <Route path="/solutions/endpoint-backup" element={<EndpointBackup />} />
          <Route path="/solutions/server-backup" element={<ServerBackup />} />
          <Route path="/solutions/onprem-backup" element={<OnPremBackup />} />
          <Route path="/solutions/server-migration" element={<ServerMigration />} />
          <Route path="/solutions/dr-orchestration" element={<DROrchestration />} />
          <Route path="/solutions/endpoint-protection" element={<EndpointProtection />} />
          <Route path="/solutions/edr" element={<EDR />} />
          <Route path="/solutions/mdr" element={<MDR />} />
          <Route path="/solutions/security-awareness" element={<SecurityAwareness />} />
          <Route path="/solutions/email-protection" element={<EmailProtection />} />
          <Route path="/solutions/email-encryption" element={<EmailEncryption />} />
          <Route path="/solutions/cloud-to-cloud-backup" element={<CloudToCloudBackup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
