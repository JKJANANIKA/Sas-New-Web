import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-background border-t border-border">
      {/* Giant brand text */}
      <div className="overflow-hidden py-8">
        <div className="brand-text-huge text-center select-none opacity-20">
          Web Crafting
        </div>
      </div>

      <div className="container mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Jananika. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
