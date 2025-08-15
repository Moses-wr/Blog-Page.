import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToElement } from "@/utils/scrollUtils";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-bold">Money Mastery</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Empowering you to master your money with practical, proven strategies.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="mb-2 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/">Home</Link></li>
              <li><button onClick={() => scrollToElement('categories')} className="hover:text-foreground">Categories</button></li>
              <li><Link to="/about">About</Link></li>
              <li><button onClick={() => scrollToElement('subscribe')} className="hover:text-foreground">Subscribe</button></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:hello@moneymastery.blog">hello@moneymastery.blog</a></li>
              <li><a href="#">Sponsorships</a></li>
              <li><a href="#">Collaborations</a></li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Follow</h4>
          <div className="flex items-center gap-3 text-muted-foreground">
            <a aria-label="Twitter" href="#" className="hover:text-foreground"><Twitter size={18} /></a>
            <a aria-label="LinkedIn" href="#" className="hover:text-foreground"><Linkedin size={18} /></a>
            <a aria-label="YouTube" href="#" className="hover:text-foreground"><Youtube size={18} /></a>
            <a aria-label="Facebook" href="#" className="hover:text-foreground"><Facebook size={18} /></a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">© {new Date().getFullYear()} Money Mastery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
