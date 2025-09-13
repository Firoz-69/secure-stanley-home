import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Shield, Award, Factory } from 'lucide-react';
import heroSafety1 from '@/assets/hero-safety-1.jpg';
import heroProducts2 from '@/assets/hero-products-2.jpg';
import heroFacility3 from '@/assets/hero-facility-3.jpg';

const slides = [
  {
    id: 1,
    image: heroSafety1,
    title: "Built for Your Safety, Engineered for Your Life",
    subtitle: "Premium Industrial Safety Equipment",
    description: "Protecting workers with ISO 9001:2015 certified safety gear manufactured with precision in India.",
    cta: "Explore Products",
    icon: Shield,
  },
  {
    id: 2,
    image: heroProducts2,
    title: "Durability Meets Comfort in Every Product",
    subtitle: "Quality You Can Trust",
    description: "Experience superior protection with our comprehensive range of safety equipment designed for maximum comfort and reliability.",
    cta: "Download Brochure",
    icon: Award,
  },
  {
    id: 3,
    image: heroFacility3,
    title: "1 Acre State-of-the-Art Manufacturing Facility",
    subtitle: "Made in India with Pride",
    description: "Our skilled team of 100+ professionals ensures every product meets international safety standards and exceeds expectations.",
    cta: "Get a Quote",
    icon: Factory,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const Icon = slide.icon;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-overlay"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <div className="flex items-center gap-3 mb-4 animate-fade-up">
                  <Icon className="h-8 w-8 text-primary" />
                  <span className="text-lg font-semibold text-primary">
                    {slide.subtitle}
                  </span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-up">
                  {slide.title}
                </h1>
                
                <p className="text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-up">
                  {slide.description}
                </p>

                {/* Certification Badges */}
                <div className="flex flex-wrap items-center gap-6 mb-8 animate-fade-up">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <span className="text-sm font-semibold text-primary">ISO 9001:2015</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <span className="text-sm font-semibold text-secondary">Made in India</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <span className="text-sm font-semibold text-success-green">100+ Skilled Workers</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
                  <Button size="lg" className="btn-hero text-lg px-8 py-4">
                    {slide.cta}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  );
};

export default HeroSlider;