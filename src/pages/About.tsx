import { Helmet } from "react-helmet-async";
import flowerImage from "@/assets/Flower.JPG";

const About = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : 'https://94522e3f-9a15-4291-b133-8a56b3a03438.lovableproject.com/about';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About – MONEY LAWS AND FINANCIAL GROWTH",
    "description": "About the finance blogger behind MONEY LAWS AND FINANCIAL GROWTH.",
  };

  return (
    <main>
      <Helmet>
        <title>About – BUDGET BRIEFS AND TAX POLICY TALKS</title>
        <meta name="description" content="YOUR SHARP, NO-FLUFF GUIDE TO MAKING SENSE OF MONEY LAWS AND EVERYTHING IN BETWEEN." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="container mx-auto grid items-center gap-10 py-16 md:grid-cols-2">
        <div>
          <img src={flowerImage} alt="Flower" className="mx-auto w-full max-w-sm rounded-2xl object-cover shadow" />
        </div>
        <article>
          <h1 className="text-4xl font-extrabold">Hi, I’m your guide to Budget briefs and tax policy talks</h1>
          <p className="mt-4 text-muted-foreground">
          Kenyan-based writer and researcher focused on analyzing recent government legislative changes, Treasury policies, and economic proposals.
             My work blends in-depth coverage of Kenya’s fiscal landscape with insights into international affairs, offering readers clear, timely, and well-researched perspectives on issues shaping both local and global. Feel free to reach me
            for any enquiries
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
