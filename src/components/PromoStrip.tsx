import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PromoStrip = () => {
  return (
    <section aria-labelledby="promos" className="container mx-auto py-12">
      <h2 id="promos" className="sr-only">Promotions</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-dashed">
          <CardContent className="p-6">
            <Badge variant="secondary">Sponsored</Badge>
            <h3 className="mt-3 text-lg font-semibold">Elite Investing Newsletter</h3>
            <p className="mt-1 text-sm text-muted-foreground">Daily market insights from top analysts. Try 30 days free.</p>
            <div className="mt-4"><Button variant="outline">Learn More</Button></div>
          </CardContent>
        </Card>
        <Card className="border-dashed">
          <CardContent className="p-6">
            <Badge variant="secondary">Affiliate</Badge>
            <h3 className="mt-3 text-lg font-semibold">High-Yield Savings Account</h3>
            <p className="mt-1 text-sm text-muted-foreground">Boost your emergency fund with a market-leading APY.</p>
            <div className="mt-4"><Button variant="outline">View Offer</Button></div>
          </CardContent>
        </Card>
        <Card className="border-dashed">
          <CardContent className="p-6">
            <Badge variant="secondary">Course</Badge>
            <h3 className="mt-3 text-lg font-semibold">Wealth Foundations 101</h3>
            <p className="mt-1 text-sm text-muted-foreground">A step-by-step system to master money in 6 weeks.</p>
            <div className="mt-4"><Button variant="brand">Enroll Now</Button></div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PromoStrip;
