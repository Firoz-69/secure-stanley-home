import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Award, Shield, Factory } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-steel-gray text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold text-gradient-safety mb-4">
              STANLEY SAFETY
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading manufacturer of premium industrial safety equipment. 
              Protecting workers with ISO 9001:2015 certified products made in India.
            </p>
            
            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Award className="h-5 w-5 text-primary" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-5 w-5 text-secondary" />
                <span>ANSI & EN Standards</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Factory className="h-5 w-5 text-success-green" />
                <span>Made in India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Our Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Quality Certifications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Manufacturing Facility</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Career Opportunities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">News & Updates</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Product Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Safety Helmets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Protective Goggles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Safety Gloves</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Safety Harnesses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">High-Vis Clothing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Safety Footwear</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Stanley Safety Products Pvt Ltd<br />
                    Industrial Area, Sector 12<br />
                    Gurgaon, Haryana - 122001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">info@stanleysafety.in</span>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div className="text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-steel-gray-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © 2024 Stanley Safety Products Pvt Ltd. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm mr-2">Follow Us:</span>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;