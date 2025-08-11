import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedArticles from "@/components/FeaturedArticles";
import NewsletterForm from "@/components/NewsletterForm";
import PromoStrip from "@/components/PromoStrip";
import Categories from "@/components/Categories";
import AboutTeaser from "@/components/AboutTeaser";
import hero from "@/assets/hero-finance-blogger.jpg";
import { Button } from "@/components/ui/button";

const Index = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : 'https://94522e3f-9a15-4291-b133-8a56b3a03438.lovableproject.com/';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Money Mastery Blog",
    "description": "Finance blog with expert tips on investing, budgeting, side hustles, and money mindset.",
    "url": canonical,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Money Mastery Blog – Empower Your Finances</title>
        <meta name="description" content="Finance blog with expert tips on investing, budgeting, side hustles, and money mindset." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 -z-10">
            <img src={hero} alt="Legendary finance blogger speaking on stage" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          </div>
          <div className="container mx-auto flex min-h-[70vh] flex-col items-start justify-center py-24">
            <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
              Empowering You to Master Your Money
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Practical strategies for investing, budgeting, side hustles, and the mindset that makes it all stick.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#subscribe">
                <Button variant="brand" className="animate-brand-glow">Start Free Newsletter</Button>
              </a>
              <a href="#featured">
                <Button variant="hero">Explore Articles</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <div id="featured">
          <FeaturedArticles />
        </div>

        {/* Monetization */}
        <PromoStrip />

        {/* Categories */}
        <Categories />

        {/* Newsletter */}
        <NewsletterForm />

        {/* About teaser */}
        <AboutTeaser />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
