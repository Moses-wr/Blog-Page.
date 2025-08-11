import { Helmet } from "react-helmet-async";
import portrait from "@/assets/portrait-finance-blogger.jpg";

const About = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : 'https://94522e3f-9a15-4291-b133-8a56b3a03438.lovableproject.com/about';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About – Money Mastery Blog",
    "description": "About the finance blogger behind Money Mastery.",
  };

  return (
    <main>
      <Helmet>
        <title>About – Money Mastery Blog</title>
        <meta name="description" content="Meet the finance blogger behind Money Mastery and learn the story behind the blog." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="container mx-auto grid items-center gap-10 py-16 md:grid-cols-2">
        <div>
          <img src={portrait} alt="Finance blogger portrait" className="mx-auto w-full max-w-sm rounded-2xl object-cover shadow" />
        </div>
        <article>
          <h1 className="text-4xl font-extrabold">Hi, I’m your guide to mastering money</h1>
          <p className="mt-4 text-muted-foreground">
            Over the past decade, I’ve helped thousands of readers simplify their finances and build wealth the
            calm, sustainable way. My approach blends proven frameworks with behavioral science, so you can take
            action confidently and stick with it.
          </p>
          <p className="mt-3 text-muted-foreground">
            Expect deep dives on investing, practical budgeting tactics, side hustle frameworks, and the money
            mindset shifts that unlock consistent progress.
          </p>
        </article>
      </section>
    </main>
  );
};

export default About;
