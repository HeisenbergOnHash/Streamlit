import React from 'react';
import { Wallet } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Wallet className="h-8 w-8 text-primary-400" strokeWidth={1.5} />
              <span className="ml-2 text-xl font-bold">PayVault</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming digital payments in India with secure, efficient, and innovative solutions for businesses of all sizes.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Wallet</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bill Payments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vendor Payments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bulk Transfers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} PayVault. All rights reserved. | Licensed by RBI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;