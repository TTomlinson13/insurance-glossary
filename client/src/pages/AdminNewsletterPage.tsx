import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { trpc } from "@/lib/trpc";
import { 
  ArrowLeft, 
  Download, 
  Search, 
  TrendingUp, 
  Users, 
  UserX,
  Loader2,
  Send
} from "lucide-react";
import { format } from "date-fns";

export default function AdminNewsletterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "unsubscribed">("all");

  // Fetch stats
  const { data: stats, isLoading: statsLoading } = trpc.newsletter.getSubscriberStats.useQuery();

  // Fetch subscribers
  const { data: subscribers, isLoading: subscribersLoading, refetch } = 
    trpc.newsletter.getAllSubscribers.useQuery({
      status: statusFilter,
      search: searchQuery,
    });

  // Export mutation
  const exportMutation = trpc.newsletter.exportSubscribers.useQuery(
    { status: statusFilter },
    { enabled: false }
  );

  const handleExport = async () => {
    const result = await exportMutation.refetch();
    
    if (result.data) {
      // Create and download CSV file
      const blob = new Blob([result.data.csv], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = result.data.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-7xl">
        <Link href="/admin">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Admin
          </Button>
        </Link>

        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-semibold mb-2">Newsletter Management</h1>
            <p className="text-muted-foreground">
              Manage your newsletter subscribers and track growth
            </p>
          </div>
          <Link href="/admin/newsletter/compose">
            <Button className="rounded-full">
              <Send className="w-4 h-4 mr-2" />
              Compose Newsletter
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {statsLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <div className="text-2xl font-bold">{stats?.total || 0}</div>
                  <p className="text-xs text-muted-foreground">
                    All time
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              {statsLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <div className="text-2xl font-bold">{stats?.active || 0}</div>
                  <p className="text-xs text-muted-foreground">
                    Currently subscribed
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unsubscribed</CardTitle>
              <UserX className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              {statsLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <div className="text-2xl font-bold">{stats?.unsubscribed || 0}</div>
                  <p className="text-xs text-muted-foreground">
                    Opted out
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">30-Day Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              {statsLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <div className="text-2xl font-bold">+{stats?.recentGrowth || 0}</div>
                  <p className="text-xs text-muted-foreground">
                    New subscribers
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Subscriber List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Subscriber List</CardTitle>
                <CardDescription>
                  Search, filter, and export your newsletter subscribers
                </CardDescription>
              </div>
              <Button onClick={handleExport} disabled={exportMutation.isFetching}>
                {exportMutation.isFetching ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Download className="w-4 h-4 mr-2" />
                )}
                Export CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subscribers</SelectItem>
                  <SelectItem value="active">Active Only</SelectItem>
                  <SelectItem value="unsubscribed">Unsubscribed Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Table */}
            {subscribersLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            ) : subscribers && subscribers.length > 0 ? (
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>Subscribed</TableHead>
                      <TableHead>Unsubscribed</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscribers.map((subscriber) => (
                      <TableRow key={subscriber.id}>
                        <TableCell className="font-medium">{subscriber.email}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              subscriber.status === "active"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {subscriber.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {subscriber.source || "N/A"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {subscriber.subscribedAt
                            ? format(new Date(subscriber.subscribedAt), "MMM d, yyyy")
                            : "N/A"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {subscriber.unsubscribedAt
                            ? format(new Date(subscriber.unsubscribedAt), "MMM d, yyyy")
                            : "-"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No subscribers found matching your filters.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
