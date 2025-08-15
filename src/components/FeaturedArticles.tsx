import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";

const articles = [
  {
    id: 1,
    title: "Master your money with smart budgeting and asset strategies",
    excerpt: "How should you spend to get rich? Budgeting is not just about cutting, its about making smart financial wisdom.Budgeting is about giving your money a purpose and controlling your payslip so you grow your wealth,its a habit that builds your financial discpline and growth.Modern budgetting is easier(The 50/30/20 rule explains this technique.You can also try the envelope system where each spending category have its own limit.Budgetting is not just a financial excise its road map to independence and the momemt you take charge of where every coin goes you shift from reacting to your finances to actively building the life you want.",
    image: article1,
    href: "#",
  },
  {
    id: 2,
    title: "Investing in Liquid, Technological and tangible assets",
    excerpt: "Which asset should you back and how can you leverage them for maximum returns?You should have a clear Knowledge and understanding between old age,modern and emmerging twist.Today,'Liquid and Tecnological assets' are emmerging as powerful alternatives and some cases complements to traditional,physical investment.As an investor, understanding how to balance and leverage these categories is no longer optional;is the difference between stagnant growth and compounding returns.Defining theses assets: 1.Liquid Asset-Can be quickly converted into cash.Think of stocks treasury bills money market funds or high-grade corperate bonds.We will guide you with newsletters and financial wisdom on how to respond swiftly to market opportunities or shocks on these assets.2.Tangible Asets-They Inlude real Estate properties, machinery, gold or manufacturing plants. Get a deeper understanging on Inflation Hedger on these assets, and playing of the colleteral values for these assetsTechnological Assets-They Inlude Software like Intellectual Properties, patents, propriery algorithms and digital financial platforms.Walk with me to get a clear insights of how you can levarage on these investments.3.Tangible Asets-They Inlude real Estate properties, machinery, gold or manufacturing plants. Get a deeper understanging on Inflation Hedger on these assets, and playing of the colleteral values for these assets and leveraging both for Higher returns.Do you know future isn't purely digital, nor is it purely physcal?For the investor who understands how to pivot between these asset classes — and how to make them reinforce each other — the reward isn’t just higher returns, it’s resilience in any market cycle.",
    image: article2,
    href: "#",
  },
  {
    id: 3,
    title: "Compliance Chronicles",
    excerpt: "Every Dollar counts — and so does every clause in our tax laws in every regime,The government’s new amendments aren’t just legal fine print; they directly affect how much you take home, what you owe, and how you plan for the future. Understanding both the latest changes and existing policies empowers you
      1. Avoid Costly Mistakes – Misinterpreting a tax requirement can lead to penalties, interest, or missed deductions.2. Stay Compliant – Tax rules shift constantly. What was acceptable last year may be non-compliant today.3. Plan Strategically – Knowledge of current and upcoming tax provisions allows you to structure your finances, investments, and business deals more efficiently. 4. Leverage Opportunities – New policies sometimes come with reliefs,exemptions, or incentives that can benefit you — but only if you know about them in time.
      Stay tuned- I'll bebringing you timely updates, expert insights, and plain- language explanatios so you can navigate Fiscal policies in different regimes",
    image: article3,
    href: "#",
  },
];

const FeaturedArticles = () => {
  return (
    <section aria-labelledby="featured-heading" className="container mx-auto py-14">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 id="featured-heading" className="text-3xl font-bold">Budgeting and Government Fiscal Briefs</h2>
          <p className="mt-1 text-sm text-muted-foreground">Catch up with best budgeting and investment strategies and Latest insights of government Tax Laws and Amendments.</p>
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
