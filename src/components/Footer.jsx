import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative mt-16">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current opacity-10"></path>
        </svg>
      </div>

      <div className="bg-black/20 backdrop-blur-lg pt-20 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Café Delight</h3>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-xl opacity-80" />
                <p className="opacity-80">123 Coffee Street, New York, NY 10001</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-xl opacity-80" />
                <p className="opacity-80">(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-xl opacity-80" />
                <p className="opacity-80">info@cafedelight.com</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-xl font-bold mb-6">Opening Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between opacity-80">
                  <span>Monday - Friday</span>
                  <span>7:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between opacity-80">
                  <span>Saturday</span>
                  <span>8:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between opacity-80">
                  <span>Sunday</span>
                  <span>8:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white/80 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center opacity-60 text-sm">
            © {new Date().getFullYear()} Café Delight. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}