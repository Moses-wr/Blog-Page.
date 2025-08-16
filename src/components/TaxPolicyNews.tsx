import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

const TaxPolicyNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "Tax Laws Change:I decode them for you",
      summary: "Stay ahead of the tax curve-My articles are your go-to source for clear, timely updates on the latest government tax laws and amendments. I break down complex legislation into simple, practical insights—so you understand not just what the law says, but what it means for you, your business, and your money.",
      date: "Timely Updates",
      category: "Tax Updates",
      urgent: true
    },
    {
      id: 2,
      title: "Retirement Account Contribution Limits for 2025",
      summary: "Updated Pension contribution limits released by the KRA.",
      date: "2025",
      category: "Retirement",
      urgent: false
    },
    {
      id: 3,
      title: "Tax Changes: What You Need to Know",
      summary: "Several states implementing new tax policies effective January 2025.",
      date: "2025",
      category: "KRA Taxes",
      urgent: false
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Tax Policy Updates</h2>
        <p className="text-muted-foreground">Stay informed on the latest tax changes and deadlines</p>
      </div>
      
      <div className="space-y-4">
        {newsItems.map((item) => (
          <Card key={item.id} className="transition-shadow hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge variant={item.urgent ? "destructive" : "secondary"}>
                    {item.category}
                  </Badge>
                  {item.urgent && (
                    <Badge variant="outline" className="text-red-600 border-red-600">
                      Urgent
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  {item.date}
                </div>
              </div>
              
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{item.summary}</p>
              
              <div className="flex items-center justify-between">
                <Button size="sm" variant="outline" className="gap-1">
                  Read Full Update
                  <ExternalLink size={12} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Button variant="brand">Subscribe to Tax Updates</Button>
      </div>
    </div>
  );
};

export default TaxPolicyNews;
