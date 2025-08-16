import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutTeaser = () => {
  return (
    <section aria-labelledby="about-teaser" className="container mx-auto items-center gap-8 py-16 md:grid md:grid-cols-2">
      <div className="order-2 md:order-1">
        <h2 id="about-teaser" className="text-3xl font-bold">About the Blogger</h2>
        <p className="mt-2 text-muted-foreground">
         Meet a Kenyan-based writer and researcher focused on analyzing recent government Legislative changes, Treasury policies, and Economic proposals. Our work blends in-depth coverage of Kenya’s fiscal landscape with insights into international affairs, offering readers clear, timely, and well-researched perspectives on issues shaping both local and global.Do you know you can protect your money against predators? Feel free to reach us for any enquiries
        </p>
        <div className="mt-4">
          <Button asChild variant="outline">
            <Link to="/about">Read the full story</Link>
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img src="/Flower.JPG" alt="Flower" className="mx-auto h-56 w-56 rounded-xl object-cover shadow" loading="lazy" />
      </div>
    </section>
  );
};

export default AboutTeaser;
