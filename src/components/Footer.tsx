import { Link } from 'react-router-dom';
import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded gold-gradient flex items-center justify-center">
                <Building2 className="text-dark-900 w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold">
                Hyr<span className="text-gold-500">Estate</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium recruitment solutions for the luxury real estate market in Pakistan. Connecting elite talent with high-value opportunities.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-gold-500 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-gold-500 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-600 hover:text-gold-500 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-gold-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/jobs" className="hover:text-gold-500 transition-colors">Find Jobs</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-6">Categories</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Residential Sales</li>
              <li>Commercial Leasing</li>
              <li>Off-Plan Investment</li>
              <li>Luxury Villas</li>
              <li>Property Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <span>Karachi, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span>+92 328 6987365</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span>careers@hyrestate.online</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between text-gray-600 text-xs gap-4">
          <p>© 2026 HyrEstate. All Rights Reserved. Built for the future of Real Estate Hiring.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-white cursor-pointer">Privacy Policy</Link>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
