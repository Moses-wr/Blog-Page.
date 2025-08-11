import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="font-extrabold text-lg tracking-tight">
          Money Mastery
        </Link>
        <nav className="hidden gap-6 md:flex">
          <NavLink to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </NavLink>
          <a href="#categories" className="text-sm text-muted-foreground hover:text-foreground">
            Categories
          </a>
          <NavLink to="/about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </NavLink>
          <a href="#subscribe" className="text-sm text-muted-foreground hover:text-foreground">
            Subscribe
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#subscribe">
            <Button size="sm" variant="brand">Subscribe</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
