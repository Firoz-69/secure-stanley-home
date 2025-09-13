import { useEffect, useState } from 'react';
import { Factory, Users, Award, Shield, Zap, Globe } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Users,
    number: 100,
    suffix: '+',
    label: 'Skilled Employees',
    description: 'Expert craftsmen and engineers',
  },
  {
    id: 2,
    icon: Factory,
    number: 1,
    suffix: ' Acre',
    label: 'Manufacturing Facility',
    description: 'State-of-the-art production unit',
  },
  {
    id: 3,
    icon: Award,
    number: 15,
    suffix: '+',
    label: 'Years Experience',
    description: 'Industry expertise and innovation',
  },
  {
    id: 4,
    icon: Shield,
    number: 50000,
    suffix: '+',
    label: 'Products Manufactured',
    description: 'Quality safety equipment delivered',
  },
];

const features = [
  {
    icon: Zap,
    title: 'Advanced Manufacturing',
    description: 'Cutting-edge technology and precision engineering ensure every product meets the highest quality standards.',
  },
  {
    icon: Award,
    title: 'ISO 9001:2015 Certified',
    description: 'Our quality management system is internationally recognized and continuously audited for excellence.',
  },
  {
    icon: Shield,
    title: 'Safety First Philosophy',
    description: 'Every design decision is made with worker safety as the primary consideration, not an afterthought.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'Our products meet or exceed ANSI, EN, and other international safety standards.',
  },
];

const CountUpAnimation = ({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      setCount(Math.floor(end * easeOutQuad));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span id={`counter-${end}`} className="text-4xl lg:text-6xl font-bold text-gradient-safety">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AboutStats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose 
            <span className="text-gradient-industrial ml-3">Stanley Safety?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 15 years of expertise in manufacturing premium safety equipment, 
            we've built a reputation for quality, innovation, and reliability.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="text-center p-6 bg-card rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="mb-2">
                  <CountUpAnimation end={stat.number} suffix={stat.suffix} />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 animate-slide-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* About Text & CTA */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-[var(--shadow-elegant)]">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Committed to Your Safety, Dedicated to Excellence
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Stanley Safety Products, we understand that behind every safety statistic is a real person – 
              someone's family member, friend, or colleague. That's why we don't just manufacture safety equipment; 
              we craft life-protecting solutions with uncompromising quality and attention to detail. 
              Our ISO 9001:2015 certification isn't just a badge – it's our promise of consistent excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Learn More About Us
              </button>
              <button className="btn-industrial">
                Visit Our Facility
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;