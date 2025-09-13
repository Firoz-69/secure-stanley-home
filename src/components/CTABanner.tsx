import { Button } from '@/components/ui/button';
import { Download, MessageCircle, Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0), radial-gradient(circle at 75px 75px, white 2px, transparent 0)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Enhance Your Workplace Safety?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
            Get expert consultation, detailed product information, or request a custom quote. 
            Our safety specialists are here to help you choose the right equipment for your specific needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              Get Expert Consultation
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="h-6 w-6 mr-3" />
              Download Full Catalog
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="h-6 w-6 mr-3" />
              Request Quote
            </Button>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="h-8 w-8 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-200">+91 98765 43210</p>
              <p className="text-sm text-gray-300 mt-2">Mon-Sat 9AM-6PM</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MessageCircle className="h-8 w-8 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-200">info@stanleysafety.in</p>
              <p className="text-sm text-gray-300 mt-2">Quick Response Guaranteed</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Download className="h-8 w-8 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">Resources</h3>
              <p className="text-gray-200">Product Catalogs</p>
              <p className="text-sm text-gray-300 mt-2">Safety Guides & Specs</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Free Consultation
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Custom Solutions
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Bulk Pricing Available
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Quick Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;