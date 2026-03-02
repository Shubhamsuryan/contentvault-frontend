import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-white/10 bg-black text-white">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            ContentVault Pro
          </h3>
          <p className="text-gray-400 text-sm">
            Premium digital assets & resell-ready content designed to help creators and freelancers launch faster.
          </p>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy" className="hover:text-white transition">Refund Policy</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/license" className="hover:text-white transition">License Agreement</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <p className="text-gray-400 text-sm">
            Email: support@contentvaultpro.com
          </p>

          <p className="text-gray-500 text-xs mt-4">
            © {new Date().getFullYear()} ContentVault Pro. All rights reserved.
          </p>

          <p className="text-gray-500 text-xs mt-2">
            Operated from India.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;