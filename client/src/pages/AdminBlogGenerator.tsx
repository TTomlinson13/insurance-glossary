import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Sparkles, Trash2 } from "lucide-react";
import { Link } from "wouter";

export default function AdminBlogGenerator() {
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState<string>("");
  const [keywords, setKeywords] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const { data: blogPosts, refetch } = trpc.blog.list.useQuery();
  const generateMutation = trpc.blog.generate.useMutation();
  const deleteMutation = trpc.blog.delete.useMutation();

  const handleGenerate = async () => {
    if (!topic || !category) {
      toast.error("Please provide topic and category");
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateMutation.mutateAsync({
        topic,
        category: category as any,
        targetKeywords: keywords ? keywords.split(",").map(k => k.trim()) : undefined,
      });

      toast.success(`Blog post "${result.title}" generated successfully!`);
      setTopic("");
      setKeywords("");
      refetch();
    } catch (error: any) {
      toast.error(error.message || "Failed to generate blog post");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDelete = async (slug: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      await deleteMutation.mutateAsync({ slug });
      toast.success("Blog post deleted");
      refetch();
    } catch (error: any) {
      toast.error(error.message || "Failed to delete blog post");
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold mb-2">AI Blog Generator</h1>
          <p className="text-muted-foreground">
            Generate SEO-optimized insurance articles using AI
          </p>
        </div>

        {/* Generator Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Generate New Article
            </CardTitle>
            <CardDescription>
              Provide a topic and the AI will create a comprehensive, SEO-optimized blog post
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="topic">Article Topic *</Label>
              <Input
                id="topic"
                placeholder="e.g., Understanding Umbrella Insurance for Homeowners"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                disabled={isGenerating}
              />
            </div>

            <div>
              <Label htmlFor="category">Category *</Label>
              <Select value={category} onValueChange={setCategory} disabled={isGenerating}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Insurance Basics">Insurance Basics</SelectItem>
                  <SelectItem value="Auto Insurance">Auto Insurance</SelectItem>
                  <SelectItem value="Health Insurance">Health Insurance</SelectItem>
                  <SelectItem value="Life Insurance">Life Insurance</SelectItem>
                  <SelectItem value="Property Insurance">Property Insurance</SelectItem>
                  <SelectItem value="Business Insurance">Business Insurance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="keywords">Target SEO Keywords (optional)</Label>
              <Input
                id="keywords"
                placeholder="umbrella insurance, liability coverage, extra protection (comma-separated)"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                disabled={isGenerating}
              />
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !topic || !category}
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating Article...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Article
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Posts List */}
        <Card>
          <CardHeader>
            <CardTitle>Generated Blog Posts ({blogPosts?.length || 0})</CardTitle>
            <CardDescription>
              Manage AI-generated articles
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!blogPosts || blogPosts.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No blog posts generated yet. Create your first article above!
              </div>
            ) : (
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-start justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-1">
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="font-semibold text-lg hover:text-primary cursor-pointer">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">{post.excerpt}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(post.slug, post.title)}
                      disabled={deleteMutation.isPending}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/admin">
            <Button variant="outline">← Back to Admin Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
