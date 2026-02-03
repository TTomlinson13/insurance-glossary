import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import InsuranceChatbot from "@/components/InsuranceChatbot";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-6 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="rounded-full ui-text">
                ← Back to Glossary
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-semibold">Insurance Glossary</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-semibold">Insurance Blog</h1>
            <p className="text-xl text-muted-foreground">
              Expert insights, guides, and tips to help you understand insurance better
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="card-organic hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-2xl leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-base mb-4 flex-1">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-primary font-medium">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Explore Our Glossary
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse 119+ insurance terms with clear definitions and examples
            </p>
            <Link href="/">
              <Button size="lg" className="rounded-full px-8 ui-text">
                View Glossary
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <InsuranceChatbot />
    </div>
  );
}
