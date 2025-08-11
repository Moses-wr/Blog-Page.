import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";

const articles = [
  {
    id: 1,
    title: "Beginner's Guide to Investing in Index Funds",
    excerpt: "Why low-cost index funds often outperform the pros and how to get started today.",
    image: article1,
    href: "#",
  },
  {
    id: 2,
    title: "The 50/30/20 Budget: A Simple Framework",
    excerpt: "Take control of your spending with an easy, realistic budgeting method.",
    image: article2,
    href: "#",
  },
  {
    id: 3,
    title: "7 Profitable Side Hustles You Can Start This Weekend",
    excerpt: "Actionable ideas to boost your income without burning out.",
    image: article3,
    href: "#",
  },
  {
    id: 4,
    title: "Money Mindset Reset: Build Wealth From Within",
    excerpt: "Break limiting beliefs and create habits that compound over time.",
    image: article4,
    href: "#",
  },
];

const FeaturedArticles = () => {
  return (
    <section aria-labelledby="featured-heading" className="container mx-auto py-14">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 id="featured-heading" className="text-3xl font-bold">Featured Articles</h2>
          <p className="mt-1 text-sm text-muted-foreground">Latest insights to grow your wealth.</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((a) => (
          <Card key={a.id} className="group overflow-hidden transition-transform hover:-translate-y-0.5">
            <div className="aspect-[3/2] overflow-hidden">
              <img src={a.image} alt={`${a.title} thumbnail`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
            </div>
            <CardHeader>
              <CardTitle className="text-base">{a.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="line-clamp-3 text-sm text-muted-foreground">{a.excerpt}</p>
              <div className="mt-4">
                <Button variant="link" className="p-0" asChild>
                  <a href={a.href} aria-label={`Read more: ${a.title}`}>Read more →</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
