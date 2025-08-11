import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait-finance-blogger.jpg";
import { Link } from "react-router-dom";

const AboutTeaser = () => {
  return (
    <section aria-labelledby="about-teaser" className="container mx-auto items-center gap-8 py-16 md:grid md:grid-cols-2">
      <div className="order-2 md:order-1">
        <h2 id="about-teaser" className="text-3xl font-bold">About the Blogger</h2>
        <p className="mt-2 text-muted-foreground">
          I’m a finance educator and creator on a mission to make wealth-building simple and accessible. From
          investing to budgeting to mindset, I share practical strategies that work in the real world.
        </p>
        <div className="mt-4">
          <Button asChild variant="outline">
            <Link to="/about">Read the full story</Link>
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img src={portrait} alt="Portrait of the finance blogger" className="mx-auto h-56 w-56 rounded-xl object-cover shadow" loading="lazy" />
      </div>
    </section>
  );
};

export default AboutTeaser;
