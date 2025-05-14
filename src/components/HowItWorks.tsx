import React from 'react';
import { UserPlus, LayoutDashboard, Wallet, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus className="h-8 w-8 text-primary-600" />,
      title: 'Create Account',
      description: 'Sign up for your business account with simple KYC verification process.'
    },
    {
      icon: <LayoutDashboard className="h-8 w-8 text-primary-600" />,
      title: 'Access Dashboard',
      description: 'Get instant access to your comprehensive payment management dashboard.'
    },
    {
      icon: <Wallet className="h-8 w-8 text-primary-600" />,
      title: 'Start Transactions',
      description: 'Begin managing payments, transfers, and bills from your dashboard.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wide text-primary-600 uppercase">
            How It Works
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Get Started in Minutes
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Simple onboarding process to start managing all your payment needs from a single dashboard.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-50 mb-6 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-center text-gray-500">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            Create Account
            <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;