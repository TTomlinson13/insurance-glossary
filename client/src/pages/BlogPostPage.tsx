import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, Calendar, Tag } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { generateSlug } from "@/lib/utils-slug";
import InsuranceChatbot from "@/components/InsuranceChatbot";
import { Streamdown } from "streamdown";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const { data: post, isLoading } = trpc.blog.getBySlug.useQuery(
    { slug: params?.slug || "" },
    { enabled: !!params?.slug }
  );
  const [scrollTracked, setScrollTracked] = useState({ 25: false, 50: false, 75: false, 100: false });

  useEffect(() => {
    if (post) {
      // Update page title and meta
      document.title = `${post.title} - Insurance Glossary Blog`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', post.excerpt);
      }
      
      // Add Schema.org Article and Breadcrumb structured data
      const structuredData = [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.excerpt,
          "author": {
            "@type": "Organization",
            "name": post.author
          },
          "datePublished": post.publishedDate,
          "keywords": post.seoKeywords.join(", ")
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://insurance-glossary.manus.space/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://insurance-glossary.manus.space/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": post.title,
              "item": `https://insurance-glossary.manus.space/blog/${post.slug}`
            }
          ]
        }
      ];
      
      let script = document.getElementById('article-structured-data') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = 'article-structured-data';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [post]);

  // Track scroll depth for blog engagement
  useEffect(() => {
    if (!post) return;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const scrollPercent = (scrolled / scrollHeight) * 100;

      // Track milestones
      if (scrollPercent >= 25 && !scrollTracked[25]) {
        setScrollTracked(prev => ({ ...prev, 25: true }));
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'blog_scroll', {
            'percent_scrolled': 25,
            'article_title': post.title
          });
        }
      }
      if (scrollPercent >= 50 && !scrollTracked[50]) {
        setScrollTracked(prev => ({ ...prev, 50: true }));
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'blog_scroll', {
            'percent_scrolled': 50,
            'article_title': post.title
          });
        }
      }
      if (scrollPercent >= 75 && !scrollTracked[75]) {
        setScrollTracked(prev => ({ ...prev, 75: true }));
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'blog_scroll', {
            'percent_scrolled': 75,
            'article_title': post.title
          });
        }
      }
      if (scrollPercent >= 95 && !scrollTracked[100]) {
        setScrollTracked(prev => ({ ...prev, 100: true }));
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'blog_scroll', {
            'percent_scrolled': 100,
            'article_title': post.title
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, scrollTracked]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold">Blog Post Not Found</h1>
          <Link href="/blog">
            <Button>← Back to Blog</Button>
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

      {/* Article */}
      <article className="py-16">
        <div className="container max-w-4xl">
          {/* Article Header */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="text-sm">{post.category}</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
            
            <div className="text-sm text-muted-foreground">
              By {post.author}
            </div>
          </div>

          {/* Article Content */}
          <Card className="card-organic">
            <CardContent className="pt-8">
              <div className="prose prose-lg max-w-none">
                <Streamdown>{post.content}</Streamdown>
              </div>
            </CardContent>
          </Card>

          {/* Related Terms */}
          {post.relatedTerms && post.relatedTerms.length > 0 && (
            <div className="mt-12 p-6 rounded-2xl bg-accent/20 border border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Related Insurance Terms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.relatedTerms.map((term: string) => (
                  <Link key={term} href={`/term/${generateSlug(term)}`}>
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {term}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary text-center space-y-4">
            <h3 className="text-2xl font-semibold">Explore More Insurance Terms</h3>
            <p className="text-muted-foreground">
              Browse our comprehensive glossary to understand insurance better
            </p>
            <Link href="/">
              <Button size="lg" className="rounded-full px-8 ui-text">
                View Glossary
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <InsuranceChatbot />
    </div>
  );
}
