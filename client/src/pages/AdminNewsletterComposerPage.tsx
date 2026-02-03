import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, Send, Eye, Loader2, CheckCircle2 } from "lucide-react";

export default function AdminNewsletterComposerPage() {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const { data: stats } = trpc.newsletter.getSubscriberStats.useQuery();
  const sendMutation = trpc.newsletter.sendManualNewsletter.useMutation();

  const handleSend = async () => {
    if (!subject.trim() || !content.trim()) {
      alert("Please fill in both subject and content");
      return;
    }

    const confirmed = confirm(
      `Send this newsletter to ${stats?.active || 0} active subscribers?`
    );

    if (!confirmed) return;

    try {
      const result = await sendMutation.mutateAsync({
        subject,
        content,
      });

      if (result.success) {
        setSendSuccess(true);
        setTimeout(() => {
          setSendSuccess(false);
          setSubject("");
          setContent("");
        }, 3000);
      } else {
        alert(`Failed to send: ${result.message}`);
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  const previewHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      ${content.split("\n").map(line => `<p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #333333;">${line}</p>`).join("")}
    </div>
  `;

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <Link href="/admin/newsletter">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Newsletter Management
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-semibold mb-2">Compose Newsletter</h1>
          <p className="text-muted-foreground">
            Create and send a custom newsletter to your {stats?.active || 0} active subscribers
          </p>
        </div>

        {sendSuccess && (
          <Card className="mb-6 border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 text-green-700">
                <CheckCircle2 className="w-5 h-5" />
                <p className="font-medium">Newsletter sent successfully!</p>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-6">
          {/* Composer */}
          <Card>
            <CardHeader>
              <CardTitle>Newsletter Content</CardTitle>
              <CardDescription>
                Write your newsletter content. HTML formatting is supported.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Subject Line</label>
                <Input
                  placeholder="Weekly Insurance Tips - January 2026"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="text-lg"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email Content
                </label>
                <Textarea
                  placeholder="Write your newsletter content here...

Example:
Hi there!

This week we're covering important insurance topics:

1. Understanding Your Deductible
Learn how choosing the right deductible can save you money.

2. New Blog Post: Auto Insurance Basics
Check out our latest article on auto insurance coverage types.

3. Term of the Week: Coinsurance
Coinsurance is the percentage of costs you pay after meeting your deductible.

Stay informed!
The Insurance Glossary Team"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={16}
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Tip: Keep paragraphs short and use clear headings for better readability
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setShowPreview(!showPreview)}
                  variant="outline"
                  disabled={!content.trim()}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {showPreview ? "Hide Preview" : "Preview"}
                </Button>

                <Button
                  onClick={handleSend}
                  disabled={!subject.trim() || !content.trim() || sendMutation.isPending}
                  className="ml-auto"
                >
                  {sendMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send to {stats?.active || 0} Subscribers
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          {showPreview && content.trim() && (
            <Card>
              <CardHeader>
                <CardTitle>Email Preview</CardTitle>
                <CardDescription>
                  This is how your newsletter will appear to subscribers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-6 bg-white">
                  <div className="mb-4 pb-4 border-b">
                    <p className="text-sm text-muted-foreground mb-1">Subject:</p>
                    <p className="text-lg font-semibold">{subject || "(No subject)"}</p>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Newsletter Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Use a clear, descriptive subject line (avoid spam trigger words)</li>
                <li>✓ Keep content concise and scannable with short paragraphs</li>
                <li>✓ Include 2-3 main topics or articles per newsletter</li>
                <li>✓ Add links to your website for more detailed content</li>
                <li>✓ Send consistently (same day/time each week)</li>
                <li>✓ Test with a personal email first before sending to all subscribers</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
