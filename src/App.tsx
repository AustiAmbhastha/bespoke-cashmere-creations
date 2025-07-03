import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OurCreations from "./pages/OurCreations";
import BespokeShawls from "./pages/BespokeShawls";
import CustomBabyBlankets from "./pages/CustomBabyBlankets";
import PersonalizedBabyClothes from "./pages/PersonalizedBabyClothes";
import InspirationGallery from "./pages/InspirationGallery";
import BespokeProcess from "./pages/BespokeProcess";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import CustomInquiry from "./pages/CustomInquiry";
import FAQ from "./pages/FAQ";
import Shipping from "./pages/Shipping";
import CashmereCarе from "./pages/CashmereCare";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
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
          <Route path="/creations" element={<OurCreations />} />
          <Route path="/creations/shawls" element={<BespokeShawls />} />
          <Route path="/creations/baby-blankets" element={<CustomBabyBlankets />} />
          <Route path="/creations/baby-clothes" element={<PersonalizedBabyClothes />} />
          <Route path="/creations/gallery" element={<InspirationGallery />} />
          <Route path="/process" element={<BespokeProcess />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inquiry" element={<CustomInquiry />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/care" element={<CashmereCarе />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
