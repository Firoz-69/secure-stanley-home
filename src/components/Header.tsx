import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const productCategories = [
    "Safety Helmets",
    "Protective Goggles",
    "Safety Gloves",
    "Safety Harnesses",
    "High-Vis Clothing",
    "Safety Shoes",
  ];

  const [showLogo, setShowLogo] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShowLogo(window.scrollY > 120);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border shadow-[var(--shadow-elegant)] transition-colors duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md text-white"
          : "bg-background/95 backdrop-blur-sm text-foreground"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar */}

        {/* Main Navigation */}
        <div
          className={`flex items-center justify-between py-4 ${
            scrolled ? "text-white" : "text-foreground"
          }`}
        >
          <div className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}logo.jpg`}
              alt="Stanley Safety Products Logo"
              className="h-12 w-auto transition-opacity duration-500"
              style={{ opacity: showLogo ? 1 : 0 }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex items-center gap-8 ${
              scrolled ? "text-white" : "text-foreground"
            }`}
          >
            <a
              href="#"
              className="font-medium hover:text-primary transition-colors"
            >
              Home
            </a>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 font-medium hover:text-primary transition-colors">
                Products
                <ChevronDown className="h-4 w-4" />
              </button>

              {activeDropdown === "products" && (
                <div className="absolute top-full left-0 w-64 bg-popover border border-border rounded-lg shadow-lg py-2 z-50">
                  {productCategories.map((category) => (
                    <a
                      key={category}
                      href="#"
                      className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#about"
              className="font-medium hover:text-primary transition-colors"
            >
              About Us
            </a>
            <a
              href="#certifications"
              className="font-medium hover:text-primary transition-colors"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" className="btn-outline-safety">
              Download Brochure
            </Button>
            <Button className="btn-hero">Get Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              <a
                href="#"
                className="font-medium hover:text-primary transition-colors"
              >
                Home
              </a>
              <div>
                <button
                  className="flex items-center justify-between w-full font-medium hover:text-primary transition-colors"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "mobile-products"
                        ? null
                        : "mobile-products"
                    )
                  }
                >
                  Products
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "mobile-products" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-products" && (
                  <div className="mt-2 ml-4 space-y-2">
                    {productCategories.map((category) => (
                      <a
                        key={category}
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#about"
                className="font-medium hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="#certifications"
                className="font-medium hover:text-primary transition-colors"
              >
                Certifications
              </a>
              <a
                href="#contact"
                className="font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>

              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <Button variant="outline" className="btn-outline-safety w-full">
                  Download Brochure
                </Button>
                <Button className="btn-hero w-full">Get Quote</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
