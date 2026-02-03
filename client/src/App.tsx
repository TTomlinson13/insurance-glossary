import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SkipToContent from "./components/SkipToContent";
import Home from "./pages/Home";
import TermPage from "./pages/TermPage";
import BusinessInsurancePage from "./pages/BusinessInsurancePage";
import ISOFormsPage from "./pages/ISOFormsPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminBlogGenerator from "./pages/AdminBlogGenerator";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import FloridaInsurancePage from "./pages/FloridaInsurancePage";
import CaliforniaInsurancePage from "./pages/CaliforniaInsurancePage";
import TexasInsurancePage from "./pages/TexasInsurancePage";
import CalculatorsPage from "./pages/CalculatorsPage";
import HmoVsPpoPage from "./pages/HmoVsPpoPage";
import TermVsWholeLifePage from "./pages/TermVsWholeLifePage";
import LiabilityLimitsPage from "./pages/LiabilityLimitsPage";
import InsuranceQuizPage from "./pages/InsuranceQuizPage";
import AdminNewsletterPage from "./pages/AdminNewsletterPage";
import AdminNewsletterComposerPage from "./pages/AdminNewsletterComposerPage";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/term/:slug"} component={TermPage} />
      <Route path={"/business-insurance"} component={BusinessInsurancePage} />
      <Route path={"/iso-forms"} component={ISOFormsPage} />
      <Route path={"/florida-insurance"} component={FloridaInsurancePage} />
      <Route path={"/california-insurance"} component={CaliforniaInsurancePage} />
      <Route path={"/texas-insurance"} component={TexasInsurancePage} />
      <Route path={"/calculators"} component={CalculatorsPage} />
      <Route path={"/compare/hmo-vs-ppo"} component={HmoVsPpoPage} />
      <Route path={"/compare/term-vs-whole-life"} component={TermVsWholeLifePage} />
      <Route path="/compare/liability-limits" component={LiabilityLimitsPage} />
      <Route path="/quiz" component={InsuranceQuizPage} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/newsletter" component={AdminNewsletterPage} />
      <Route path="/admin/newsletter/compose" component={AdminNewsletterComposerPage} />
      <Route path="/admin/blog-generator" component={AdminBlogGenerator} />
      <Route path={"/blog"} component={BlogPage} />
      <Route path={"/blog/:slug"} component={BlogPostPage} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <SkipToContent />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
