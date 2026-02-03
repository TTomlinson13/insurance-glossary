/**
 * Insurance Chatbot Component
 * AI-powered chat interface for insurance questions, coverage recommendations, and lead capture
 */

import { useState, useEffect, useRef } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";
import { generateSlug } from "@/lib/utils-slug";

interface Message {
  role: "user" | "assistant";
  content: string;
  suggestedTerms?: string[];
}

export default function InsuranceChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [sessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessageMutation = trpc.chat.sendMessage.useMutation({
    onSuccess: (data) => {
      setConversationId(data.conversationId);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: data.message,
        suggestedTerms: data.suggestedTerms,
      }]);

      // Check if bot is asking for contact info or suggesting quotes
      if (data.message.toLowerCase().includes("get free quotes") || 
          data.message.toLowerCase().includes("connect you with") ||
          data.intentType === "coverage_recommendation") {
        // Suggest lead capture after a brief delay
        setTimeout(() => {
          setShowLeadForm(true);
        }, 2000);
      }
    },
    onError: (error) => {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    },
  });

  const captureLeadMutation = trpc.chat.captureLead.useMutation({
    onSuccess: () => {
      toast.success("Thanks! We'll connect you with insurance providers shortly.");
      setShowLeadForm(false);
    },
    onError: (error) => {
      toast.error("Failed to submit. Please try again.");
      console.error(error);
    },
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: "assistant",
        content: "👋 Hi! I'm your insurance advisor. I can help you understand insurance terms, recommend coverage, and connect you with quotes. What can I help you with today?",
      }]);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim() || sendMessageMutation.isPending) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    sendMessageMutation.mutate({
      message: userMessage,
      conversationId: conversationId || undefined,
      sessionId,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleLeadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (!conversationId) {
      toast.error("Please start a conversation first");
      return;
    }

    captureLeadMutation.mutate({
      conversationId,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || undefined,
      zipCode: formData.get("zipCode") as string || undefined,
      insuranceType: formData.get("insuranceType") as string,
      currentlyInsured: formData.get("currentlyInsured") as string || undefined,
    });
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl z-50 hover:scale-110 transition-transform"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-[400px] h-[600px] shadow-2xl z-50 flex flex-col rounded-3xl border-2">
      {/* Header */}
      <CardHeader className="border-b bg-primary/5 rounded-t-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">Insurance Advisor</CardTitle>
              <CardDescription className="text-xs">AI-powered assistance</CardDescription>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </CardHeader>

      {/* Messages */}
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index}>
            <div
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>

            {/* Suggested Terms */}
            {message.role === "assistant" && message.suggestedTerms && message.suggestedTerms.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {message.suggestedTerms.map((term, idx) => (
                  <Link key={idx} href={`/term/${generateSlug(term)}`}>
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary/10 text-xs"
                    >
                      📖 {term}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {sendMessageMutation.isPending && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-2xl px-4 py-2 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm text-muted-foreground">Thinking...</span>
            </div>
          </div>
        )}

        {/* Lead Capture Form */}
        {showLeadForm && !captureLeadMutation.isSuccess && (
          <Card className="border-primary/50 bg-primary/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Get Free Quotes</CardTitle>
              <CardDescription className="text-xs">
                Let's connect you with top insurance providers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLeadSubmit} className="space-y-3">
                <Input
                  name="name"
                  placeholder="Your name"
                  required
                  className="h-9 text-sm"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  className="h-9 text-sm"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone (optional)"
                  className="h-9 text-sm"
                />
                <Input
                  name="zipCode"
                  placeholder="ZIP code"
                  className="h-9 text-sm"
                />
                <Input
                  name="insuranceType"
                  placeholder="Insurance type (e.g., Auto, Business)"
                  required
                  className="h-9 text-sm"
                />
                <Input
                  name="currentlyInsured"
                  placeholder="Currently insured? (Yes/No)"
                  className="h-9 text-sm"
                />
                <div className="flex gap-2">
                  <Button
                    type="submit"
                    size="sm"
                    className="flex-1"
                    disabled={captureLeadMutation.isPending}
                  >
                    {captureLeadMutation.isPending ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      "Get Quotes"
                    )}
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowLeadForm(false)}
                  >
                    Later
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div ref={messagesEndRef} />
      </CardContent>

      {/* Input */}
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about insurance..."
            className="flex-1 rounded-full"
            disabled={sendMessageMutation.isPending}
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="rounded-full"
            disabled={!input.trim() || sendMessageMutation.isPending}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          AI-powered • Educational purposes only
        </p>
      </div>
    </Card>
  );
}
