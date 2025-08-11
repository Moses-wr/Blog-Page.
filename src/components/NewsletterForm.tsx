import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const WEBHOOK_KEY = "mm_webhook_url";

const NewsletterForm: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [webhookUrl, setWebhookUrl] = React.useState<string>("");
  const [showSettings, setShowSettings] = React.useState(false);

  React.useEffect(() => {
    const saved = localStorage.getItem(WEBHOOK_KEY) || "";
    setWebhookUrl(saved);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!webhookUrl) {
      toast({
        title: "Missing webhook",
        description: "Add your Mailchimp/ConvertKit/Zapier webhook URL in Settings",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          name,
          email,
          source: window.location.origin,
          timestamp: new Date().toISOString(),
        }),
      });
      toast({ title: "Request sent", description: "Check your email service for the captured lead." });
      setName("");
      setEmail("");
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const saveWebhook = () => {
    localStorage.setItem(WEBHOOK_KEY, webhookUrl);
    toast({ title: "Saved", description: "Webhook URL saved locally." });
  };

  return (
    <section id="subscribe" aria-labelledby="subscribe-heading" className="container mx-auto py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="subscribe-heading" className="text-3xl font-bold">Get Exclusive Tips & Updates</h2>
        <p className="mt-2 text-muted-foreground">Actionable emails on investing, budgeting, and building wealth.</p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
        </div>
        <div className="sm:col-span-3">
          <Button type="submit" variant="brand" className="w-full sm:w-auto" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe Now"}
          </Button>
        </div>
      </form>

      <div className="mx-auto mt-6 max-w-2xl text-center">
        <button onClick={() => setShowSettings((s) => !s)} className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4">
          {showSettings ? "Hide" : "Integration"} Settings
        </button>
      </div>

      {showSettings && (
        <div className="mx-auto mt-4 max-w-2xl rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            Paste your email provider webhook URL (Mailchimp, ConvertKit, or Zapier). We'll POST name & email.
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto]">
            <Input placeholder="https://hooks.zapier.com/..." value={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} />
            <Button type="button" variant="outline" onClick={saveWebhook}>Save</Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsletterForm;
