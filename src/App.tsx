import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/Candidates";
import Kanban from "./pages/Kanban";
import Assessments from "./pages/Assessments";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import { initMockApi } from "./lib/initMockApi";

const queryClient = new QueryClient();

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initMockApi().then(() => setIsReady(true));
  }, []);

  if (!isReady) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Loading TalentFlow...</h1>
          <p className="text-muted-foreground">Initializing mock API and seeding data</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout><Index /></Layout>} />
              <Route path="/jobs" element={<Layout><Jobs /></Layout>} />
              <Route path="/candidates" element={<Layout><Candidates /></Layout>} />
              <Route path="/kanban" element={<Layout><Kanban /></Layout>} />
              <Route path="/assessments" element={<Layout><Assessments /></Layout>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
