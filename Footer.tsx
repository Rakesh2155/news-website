import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About BharatNews</h3>
            <p className="text-gray-400 mb-4">
              BharatNews is India's premier AI-powered news platform, bringing you the latest updates from across the nation in multiple languages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/politics" className="text-gray-400 hover:text-white transition-colors">
                  Politics
                </Link>
              </li>
              <li>
                <Link to="/category/business" className="text-gray-400 hover:text-white transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/category/technology" className="text-gray-400 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/category/sports" className="text-gray-400 hover:text-white transition-colors">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/category/entertainment" className="text-gray-400 hover:text-white transition-colors">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link to="/category/regional" className="text-gray-400 hover:text-white transition-colors">
                  Regional
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/advertise" className="text-gray-400 hover:text-white transition-colors">
                  Advertise with Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Get the latest news delivered to your inbox daily.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r text-white transition-colors"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} BharatNews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;