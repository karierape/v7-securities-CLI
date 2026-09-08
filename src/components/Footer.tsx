import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
  onServiceClick?: (serviceId: string) => void;
}

export default function Footer({ onNavigate, onServiceClick }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/v7-logo.jpeg"
                alt="V7 Securities Group logo - security company in Mandi, Himachal Pradesh"
                className="h-12 w-12 rounded-lg object-cover shadow-lg"
              />
              <div>
                <h3 className="text-lg font-bold text-white">v7 Securities</h3>
                <p className="text-xs text-amber-400">Group</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Your trusted security guard company based in Mandi, Himachal Pradesh. Providing professional security services across Shimla, Kullu, Sundernagar, Chandigarh, Mohali, Ludhiana, and 20+ cities in HP, Punjab &amp; Chandigarh since 2010.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate?.('about')} className="hover:text-amber-400 transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('services')} className="hover:text-amber-400 transition-colors text-left">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('coverage')} className="hover:text-amber-400 transition-colors text-left">
                  Coverage Areas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('contact')} className="hover:text-amber-400 transition-colors text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onServiceClick?.('residential')} className="hover:text-amber-400 transition-colors text-left">
                  Residential Security
                </button>
              </li>
              <li>
                <button onClick={() => onServiceClick?.('corporate')} className="hover:text-amber-400 transition-colors text-left">
                  Corporate Security
                </button>
              </li>
              <li>
                <button onClick={() => onServiceClick?.('industrial')} className="hover:text-amber-400 transition-colors text-left">
                  Industrial Security
                </button>
              </li>
              <li>
                <button onClick={() => onServiceClick?.('event')} className="hover:text-amber-400 transition-colors text-left">
                  Event Security
                </button>
              </li>
              <li>
                <button onClick={() => onServiceClick?.('bouncers')} className="hover:text-amber-400 transition-colors text-left">
                  Bouncers
                </button>
              </li>
              <li>
                <button onClick={() => onServiceClick?.('vip')} className="hover:text-amber-400 transition-colors text-left">
                  VIP Protection
                </button>
              </li>
              <li>
                <button onClick={() => onServiceClick?.('personal')} className="hover:text-amber-400 transition-colors text-left">
                  Personal Security
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-sm">Jawahar Park, Sundar Nagar, Mandi, Himachal Pradesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+919318970000" className="hover:text-amber-400 transition-colors block">+91-9318970000</a>
                  <a href="tel:+917399800007" className="hover:text-amber-400 transition-colors block">+91-7399800007</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:v7securitiesgroup@gmail.com" className="text-sm hover:text-amber-400 transition-colors">
                  v7securitiesgroup@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-sm">24/7 Emergency Support Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} v7 Securities Group. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Licensed Security Service Provider | Serving Mandi, Sundernagar, Shimla, Kullu, Dharamshala, Chandigarh, Mohali, Ludhiana &amp; 20+ cities across Himachal Pradesh, Punjab &amp; Chandigarh
          </p>
        </div>
      </div>
    </footer>
  );
}
