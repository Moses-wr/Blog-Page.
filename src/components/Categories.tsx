import { Card } from "@/components/ui/card";
import { Brain, Briefcase, LineChart, Wallet } from "lucide-react";

const items = [
  { title: "Investing", icon: LineChart, desc: "Long-term strategies for growing wealth and digging deap into the numbers uncovering the stories,trends and truth behind every investment scheme" },
  { title: "Budgeting", icon: Wallet, desc: "Simple systems to control spending.Your front-row seat to smarter budgeting strategies,insights,and the rules that keep your finances in check." },
  { title: "Tax Matters and Laws", icon: Brain, desc: "Where finance meets law and confusion goes to die and smart takes on money and law served in bite-sized briefs." },
];

const Categories = () => {
  return (
    <section id="categories" aria-labelledby="cat-heading" className="container mx-auto py-14">
      <h2 id="cat-heading" className="text-3xl font-bold"> Categories</h2>
      <p className="mt-1 text-sm text-muted-foreground">Your sharp, no fluff guide to making sense of money and everything in between.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, icon: Icon, desc }) => (
          <Card key={title} className="group p-6 transition-transform hover:-translate-y-0.5">
            <div className="mb-3 inline-flex rounded-md border bg-accent p-2 text-accent-foreground">
              <Icon size={18} />
            </div>
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Categories;
