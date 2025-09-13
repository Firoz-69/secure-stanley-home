import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingCart,
  Eye,
} from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Safety Helmet HD-100",
    image:
      "https://daltonsafety.com/cdn/shop/files/LiferayProduct-BASEBALLDIAMONDBC.png?v=1742734647&width=533",
    price: "₹899",
    rating: 4.8,
    reviews: 156,
    features: ["ANSI Z89.1 Certified", "6-Point Suspension", "UV Resistant"],
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Anti-Fog Safety Goggles SG-200",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp2FnH65ovb6_oPOp9g02Wy54-JO3dxtOkA&s",
    price: "₹549",
    rating: 4.7,
    reviews: 89,
    features: ["Anti-Fog Coating", "Impact Resistant", "Comfort Fit"],
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "Cut-Resistant Work Gloves WG-300",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQdz6t-CiCJILfhJw9g-pM6z7u9lTk5cNhA&s",
    price: "₹699",
    rating: 4.9,
    reviews: 234,
    features: ["Level 5 Cut Protection", "Nitrile Grip", "Breathable"],
    badge: "Top Rated",
  },
  {
    id: 4,
    name: "Full Body Safety Harness FH-400",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    price: "₹1,299",
    rating: 4.6,
    reviews: 67,
    features: ["Fall Arrest System", "Adjustable Straps", "Forged Hardware"],
    badge: "",
  },
  {
    id: 5,
    name: "High-Visibility Safety Vest HV-500",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    price: "₹449",
    rating: 4.5,
    reviews: 123,
    features: ["Class 2 ANSI Compliant", "3M Reflective Tape", "Mesh Design"],
    badge: "Value Pick",
  },
];

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsToShow >= featuredProducts.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, featuredProducts.length - itemsToShow) : prev - 1
    );
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return "bg-primary text-primary-foreground";
      case "New Arrival":
        return "bg-success-green text-white";
      case "Top Rated":
        return "bg-warning-yellow text-steel-gray";
      case "Value Pick":
        return "bg-secondary text-secondary-foreground";
      default:
        return "";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured
              <span className="text-gradient-industrial ml-3">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover our most popular safety equipment trusted by
              professionals worldwide.
            </p>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
              >
                <div className="card-product group">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <div
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${getBadgeColor(
                          product.badge
                        )}`}
                      >
                        {product.badge}
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all">
                        <ShoppingCart className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "text-warning-yellow fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Features */}
                    <ul className="space-y-1 mb-4 text-sm text-muted-foreground">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary">
                        {product.price}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-xs">
                          Details
                        </Button>
                        <Button size="sm" className="btn-hero text-xs">
                          Add to Enquiry
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-2 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="btn-outline-safety">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
