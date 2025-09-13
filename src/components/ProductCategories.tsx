import {
  ArrowRight,
  HardHat,
  Glasses,
  HandHelping,
  Shield,
  Shirt,
  FootprintsIcon,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Safety Helmets",
    description: "ANSI & EN certified protective headgear",
    icon: HardHat,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJebPf7KPc9t_817ywcCC4cyEnuxGa8LJ13Q&s",
    link: "#helmets",
  },
  {
    id: 2,
    name: "Protective Goggles",
    description: "Clear vision with maximum eye protection",
    icon: Glasses,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpABgCVSOjI0Ax5YdRWTRuVwVRQSZX2nVAOA&s",
    link: "#goggles",
  },
  {
    id: 3,
    name: "Safety Gloves",
    description: "Durable hand protection for all industries",
    icon: HandHelping,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIfwaeWew9Qg-A8RXcb9FNKCIZQnase4ZcQ&s",
    link: "#gloves",
  },
];

const ProductCategories = () => {
  return (
    <section id="product-categories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Product
            <span className="text-gradient-safety ml-3">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive safety solutions designed to protect workers across
            industries. Each product meets or exceeds international safety
            standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="card-category group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="bg-primary text-white rounded-full p-2">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <a
                    href={category.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Explore Range
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Bottom Border Accent */}
                <div className="h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need help choosing the right safety equipment for your industry?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-industrial">Consult Our Experts</button>
            <button className="btn-outline-safety">
              Download Full Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
