import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "Master your money with smart budgeting and asset strategies",
    excerpt: "How should you spend to get rich? Budgeting is not just about cutting, it's about making smart financial decisions. Modern budgeting techniques like the 50/30/20 rule and envelope system can help you take control of your finances and build wealth.",
    image: article1,
    href: "#",
  },
  {
    id: 2,
    title: "Investing in Liquid, Technological and tangible assets",
    excerpt: "Understand the difference between liquid assets (stocks, bonds), tangible assets (real estate, gold), and technological assets (IP, patents). Learn how to balance these for maximum returns and market resilience.",
    image: article2,
    href: "#",
  },
  {
    id: 3,
    title: "Compliance Chronicles",
    excerpt: "Stay updated with the latest tax law amendments and fiscal policies. Learn how to avoid costly mistakes, remain compliant, and leverage new opportunities in changing regulatory environments.",
    image: article3,
    href: "#",
  },
];

const FeaturedArticles = () => {
  return (
    <section aria-labelledby="featured-heading" className="container mx-auto py-14 px-4">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 id="featured-heading" className="text-3xl font-bold tracking-tight">
            Budgeting and Government Fiscal Briefs
          </h2>
          <p className="mt-2 text-muted-foreground">
            Catch up with best budgeting strategies and the latest insights on tax laws and amendments.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card 
            key={article.id} 
            className="group flex flex-col h-full overflow-hidden transition-shadow hover:shadow-lg"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg font-semibold leading-tight">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="line-clamp-3 text-muted-foreground mb-4">
                {article.excerpt}
              </p>
              <div className="mt-auto">
                <Button 
                  variant="link" 
                  className="px-0 text-primary font-medium hover:no-underline"
                  asChild
                >
                  <a href={article.href}>
                    Read more <span aria-hidden="true">→</span>
                  </a>
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
