import React from 'react';
import {
  ArrowRight,
  Wallet,
  CreditCard,
  Receipt,
  Building2,
} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-orange-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-20%] top-[-10%] h-[800px] w-[800px] rounded-full bg-primary-50/40 blur-3xl"></div>
        <div className="absolute right-[-30%] bottom-[-5%] h-[600px] w-[600px] rounded-full bg-secondary-50/30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Smart Payments for</span>
            <span className="block text-primary-600 mt-2">Modern India</span>
          </h1>
          <p className="mt-6 text-xl text-gray-500">
            Comprehensive payment solutions with digital wallet, instant
            transfers, bill payments, and vendor management - all in one
            platform.
          </p>
          <div className="mt-10 flex justify-center gap-5">
            <a
              href="#"
              className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 shadow-md"
            >
              Get Started
              <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white border-gray-200 hover:bg-gray-50 transition-colors duration-300 shadow-sm"
            >
              Contact Sales
            </a>
          </div>
        </div>

        <div className="mt-24 text-center w-full">
          <p className="text-base font-medium text-gray-500 mb-8">
            Trusted by leading businesses across India
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105">
            <div className="h-12 w-12 bg-primary-50 rounded-full flex items-center justify-center mb-5 mx-auto">
              <Wallet className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              Digital Wallet
            </h3>
            <p className="mt-2 text-gray-500 text-center">
              Secure digital wallet for instant transfers and payments.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105">
            <div className="h-12 w-12 bg-secondary-50 rounded-full flex items-center justify-center mb-5 mx-auto">
              <Receipt className="h-6 w-6 text-secondary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              Bill Payments
            </h3>
            <p className="mt-2 text-gray-500 text-center">
              Easy utility and service bill payments.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105">
            <div className="h-12 w-12 bg-accent-50 rounded-full flex items-center justify-center mb-5 mx-auto">
              <Building2 className="h-6 w-6 text-accent-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              Vendor Payments
            </h3>
            <p className="mt-2 text-gray-500 text-center">
              Streamlined vendor payment management.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105">
            <div className="h-12 w-12 bg-primary-50 rounded-full flex items-center justify-center mb-5 mx-auto">
              <CreditCard className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              Bulk Transfers
            </h3>
            <p className="mt-2 text-gray-500 text-center">
              Efficient bulk payment processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;