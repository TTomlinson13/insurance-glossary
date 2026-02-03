import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
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
        <Route path="/admin" component={AdminDashboard} />
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
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
