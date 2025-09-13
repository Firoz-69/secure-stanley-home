import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Vhagar",
    position: "Safety Manager",
    company: "ABC Construction Ltd.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Stanley Safety Products has been our trusted partner for over 3 years. Their helmets and harnesses have significantly improved our site safety record. The quality is exceptional and the team is very responsive to our needs.",
  },
  {
    id: 2,
    name: "Ajay Sharma",
    position: "Operations Director",
    company: "Industrial Solutions Pvt Ltd",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5GX1lkI6T4INseXlhyZhaGMtq07LNid9Tw&s",
    rating: 5,
    text: "The protective equipment from Stanley Safety exceeded our expectations. The comfort and durability of their products have made a real difference in our workers' daily operations. Highly recommended for any industrial setup.",
  },
  {
    id: 3,
    name: "Mohammed Hareesh",
    position: "Plant Head",
    company: "Steel Manufacturing Co.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Quality, reliability, and excellent customer service – that's what we get from Stanley Safety. Their ISO certification gives us confidence, and their products have helped us maintain zero accident records.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="py-20 bg-muted/20 relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* WhatsApp Floating Button */}

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our
            <span className="text-gradient-safety ml-3">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry professionals
            say about their experience with Stanley Safety Products.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative overflow-hidden rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-transform duration-500 ease-in-out ${
                  index === currentIndex
                    ? "translate-x-0"
                    : index < currentIndex
                    ? "-translate-x-full"
                    : "translate-x-full"
                } ${
                  index === currentIndex ? "relative" : "absolute top-0 w-full"
                }`}
              >
                <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-[var(--shadow-elegant)] border border-border/50">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-warning-yellow fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg lg:text-xl text-center leading-relaxed mb-8 text-muted-foreground">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="text-center">
                      <h4 className="text-lg font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground mb-8 font-medium">
            Trusted by leading companies across industries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for client logos */}
            <div className="text-2xl font-bold text-muted-foreground">
              ABC Construction
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              Industrial Solutions
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              Steel Manufacturing
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              Metro Projects
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              Infra Corp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
