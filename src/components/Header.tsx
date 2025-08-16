import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/utils/scrollUtils";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="font-extrabold text-lg tracking-tight">
          MONEY LAWS AND FINANCIAL GROWTH
        </Link>
        <nav className="hidden gap-6 md:flex">
          <NavLink to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </NavLink>
          <button 
            onClick={() => scrollToElement('categories')} 
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Categories
          </button>
          <NavLink to="/about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </NavLink>
          <button 
            onClick={() => scrollToElement('subscribe')} 
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Subscribe
          </button>
        </nav>
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            variant="brand"
            onClick={() => scrollToElement('subscribe')}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
