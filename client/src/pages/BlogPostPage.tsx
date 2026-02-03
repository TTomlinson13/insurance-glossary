import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, Calendar, Tag } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blog";
import { generateSlug } from "@/lib/utils-slug";
import InsuranceChatbot from "@/components/InsuranceChatbot";
import { Streamdown } from "streamdown";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (params?.slug) {
      const foundPost = blogPosts.find(p => p.slug === params.slug);
      if (foundPost) {
        setPost(foundPost);
        
        // Update page title and meta
        document.title = `${foundPost.title} - Insurance Glossary Blog`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', foundPost.excerpt);
        }
        
        // Add Schema.org Article structured data
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": foundPost.title,
          "description": foundPost.excerpt,
          "author": {
            "@type": "Organization",
            "name": foundPost.author
          },
          "datePublished": foundPost.publishedDate,
          "keywords": foundPost.seoKeywords.join(", ")
        };
        
        let script = document.getElementById('article-structured-data') as HTMLScriptElement | null;
        if (!script) {
          script = document.createElement('script');
          script.id = 'article-structured-data';
          script.type = 'application/ld+json';
          document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(structuredData);
      } else {
        setPost(null);
      }
    }
    
    return () => {
      const script = document.getElementById('article-structured-data');
      if (script) {
        script.remove();
      }
      document.title = 'Insurance Glossary - Your Complete Guide to Insurance Terms';
    };
  }, [params?.slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-3xl font-semibold">Post Not Found</h1>
          <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="rounded-full ui-text">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-6 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/blog">
              <Button variant="ghost" className="rounded-full ui-text">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-semibold">Insurance Glossary</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="py-4 border-b border-border/50">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline">{post.category}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4">
                {post.excerpt}
              </p>
              
              <div className="text-sm text-muted-foreground">
                By {post.author}
              </div>
            </div>

            {/* Article Content */}
            <Card className="card-organic mb-8">
              <CardContent className="prose prose-lg max-w-none pt-8">
                <Streamdown>{post.content}</Streamdown>
              </CardContent>
            </Card>

            {/* Related Terms */}
            {post.relatedTerms.length > 0 && (
              <Card className="card-organic">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-semibold">Related Glossary Terms</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.relatedTerms.map((term) => (
                      <Link key={term} href={`/term/${generateSlug(term)}`}>
                        <Badge 
                          variant="outline" 
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-sm py-1 px-3"
                        >
                          {term}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary text-center">
              <h3 className="text-2xl font-semibold mb-3">
                Need Insurance Quotes?
              </h3>
              <p className="text-muted-foreground mb-6">
                Compare quotes from top insurance providers and find the best coverage for your needs
              </p>
              <Link href="/compare">
                <Button size="lg" className="rounded-full px-8 ui-text">
                  Get Quotes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <InsuranceChatbot />
    </div>
  );
}
