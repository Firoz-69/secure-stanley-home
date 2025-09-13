import Header from "@/components/Header";
import AnimatedLogoTagline from "@/components/AnimatedLogoTagline";
import HeroSlider from "@/components/HeroSlider";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutStats from "@/components/AboutStats";
import SafetyFacts from "@/components/SafetyFacts";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="relative flex flex-col items-center justify-center h-[60vh]">
        <AnimatedLogoTagline />
      </div>
      <main>
        <HeroSlider />
        <ProductCategories />
        <FeaturedProducts />
        <AboutStats />
        <SafetyFacts />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
