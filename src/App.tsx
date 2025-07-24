import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
