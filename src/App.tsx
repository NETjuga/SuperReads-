import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectShowcase from "./pages/ProjectShowcase";
import CodesumShowcase from "./pages/CodesumShowcase";
import StudentShowcase from "./pages/StudentShowcase";
import VentureLinkShowcase from "./pages/VentureLinkShowcase";
import CyberShowcase from "./pages/CyberShowcase";
import VLvisualise from "./pages/VLvisualise";
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
          <Route path="/ProjectShowcase" element={<ProjectShowcase />} />
          <Route path="/CodesumShowcase" element={<CodesumShowcase />} />
          <Route path="/StudentShowcase" element={<StudentShowcase />} />
          <Route path="/VentureLinkShowcase" element={<VentureLinkShowcase />} />
          <Route path="/CyberShowcase" element={<CyberShowcase />} />
          <Route path="/VLvisualise" element={<VLvisualise />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


