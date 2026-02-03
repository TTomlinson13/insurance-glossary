import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Users, TrendingUp, MessageSquare, FileText, 
  Filter, Download, ChevronLeft, ChevronRight, Sparkles 
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { getLoginUrl } from "@/const";

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const [, setLocation] = useLocation();
  
  const [filters, setFilters] = useState({
    insuranceType: "",
    source: "" as "" | "chatbot" | "form",
    startDate: "",
    endDate: "",
  });
  const [page, setPage] = useState(0);
  const pageSize = 20;

  const statsQuery = trpc.admin.getLeadStats.useQuery(undefined, {
    enabled: user?.role === 'admin',
  });

  const leadsQuery = trpc.admin.getLeads.useQuery({
    insuranceType: filters.insuranceType || undefined,
    source: filters.source || undefined,
    startDate: filters.startDate || undefined,
    endDate: filters.endDate || undefined,
    limit: pageSize,
    offset: page * pageSize,
  }, {
    enabled: user?.role === 'admin',
  });

  // Redirect non-admin users
  if (!loading && (!user || user.role !== 'admin')) {
    if (!user) {
      window.location.href = getLoginUrl();
    } else {
      setLocation('/');
    }
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-semibold mb-2">Loading...</div>
          <p className="text-muted-foreground">Checking permissions</p>
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil((leadsQuery.data?.total || 0) / pageSize);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Lead management and analytics</p>
            </div>
            <Link href="/">
              <Button variant="outline" className="rounded-full">
                Back to Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statsQuery.data?.total || 0}</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Chatbot Leads</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statsQuery.data?.chatbot || 0}</div>
              <p className="text-xs text-muted-foreground">
                {statsQuery.data?.total ? 
                  `${Math.round((statsQuery.data.chatbot / statsQuery.data.total) * 100)}% of total` 
                  : 'No data'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Form Leads</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statsQuery.data?.form || 0}</div>
              <p className="text-xs text-muted-foreground">
                {statsQuery.data?.total ? 
                  `${Math.round((statsQuery.data.form / statsQuery.data.total) * 100)}% of total` 
                  : 'No data'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Category</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsQuery.data?.byType && statsQuery.data.byType.length > 0
                  ? statsQuery.data.byType.sort((a, b) => b.count - a.count)[0].type
                  : 'N/A'}
              </div>
              <p className="text-xs text-muted-foreground">Most requested</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Insurance Type</label>
                <Select
                  value={filters.insuranceType}
                  onValueChange={(value) => {
                    setFilters({ ...filters, insuranceType: value });
                    setPage(0);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All types</SelectItem>
                    <SelectItem value="Auto">Auto</SelectItem>
                    <SelectItem value="Health">Health</SelectItem>
                    <SelectItem value="Life">Life</SelectItem>
                    <SelectItem value="Property">Property</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Source</label>
                <Select
                  value={filters.source}
                  onValueChange={(value: "" | "chatbot" | "form") => {
                    setFilters({ ...filters, source: value });
                    setPage(0);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All sources" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All sources</SelectItem>
                    <SelectItem value="chatbot">Chatbot</SelectItem>
                    <SelectItem value="form">Form</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Start Date</label>
                <Input
                  type="date"
                  value={filters.startDate}
                  onChange={(e) => {
                    setFilters({ ...filters, startDate: e.target.value });
                    setPage(0);
                  }}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">End Date</label>
                <Input
                  type="date"
                  value={filters.endDate}
                  onChange={(e) => {
                    setFilters({ ...filters, endDate: e.target.value });
                    setPage(0);
                  }}
                />
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button
                variant="outline"
                onClick={() => {
                  setFilters({ insuranceType: "", source: "", startDate: "", endDate: "" });
                  setPage(0);
                }}
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Leads Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Leads</CardTitle>
                <CardDescription>
                  Showing {leadsQuery.data?.leads.length || 0} of {leadsQuery.data?.total || 0} leads
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {leadsQuery.isLoading ? (
              <div className="text-center py-8 text-muted-foreground">Loading leads...</div>
            ) : leadsQuery.data?.leads.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">No leads found</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Name</th>
                      <th className="text-left py-3 px-4 font-medium">Email</th>
                      <th className="text-left py-3 px-4 font-medium">ZIP</th>
                      <th className="text-left py-3 px-4 font-medium">Type</th>
                      <th className="text-left py-3 px-4 font-medium">Source</th>
                      <th className="text-left py-3 px-4 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadsQuery.data?.leads.map((lead) => (
                      <tr key={lead.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">{lead.name}</td>
                        <td className="py-3 px-4">{lead.email}</td>
                        <td className="py-3 px-4">{lead.zipCode}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{lead.insuranceType}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant={lead.source === 'chatbot' ? 'default' : 'secondary'}>
                            {lead.source}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-muted-foreground">
                  Page {page + 1} of {totalPages}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(p => Math.max(0, p - 1))}
                    disabled={page === 0}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                    disabled={page >= totalPages - 1}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>            )}
          </CardContent>
        </Card>

        {/* AI Blog Generator Link */}
        <div className="mt-8">
          <Link href="/admin/blog-generator">
            <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  AI Blog Generator
                </CardTitle>
                <CardDescription>
                  Generate SEO-optimized insurance articles using AI
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
