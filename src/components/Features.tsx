import React from 'react';
import { Wallet, Receipt, Building2, CreditCard, Shield, Clock, Users, Banknote } from 'lucide-react';

const Feature: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ 
  icon, title, description 
}) => {
  return (
    <div className="flex flex-col items-start">
      <div className="rounded-md bg-primary-50 p-3 text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-base text-gray-500">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Wallet size={24} />,
      title: 'Digital Wallet',
      description: 'Secure digital wallet with instant transfers, QR payments, and balance management.'
    },
    {
      icon: <Receipt size={24} />,
      title: 'Bill Payments',
      description: 'Pay utility bills, recharge mobile, and handle subscriptions seamlessly.'
    },
    {
      icon: <Building2 size={24} />,
      title: 'Vendor Management',
      description: 'Streamlined vendor onboarding, payment scheduling, and reconciliation.'
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Bulk Payments',
      description: 'Process multiple payments efficiently with detailed reporting and tracking.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Enhanced Security',
      description: 'Multi-factor authentication and advanced encryption for all transactions.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Instant Settlements',
      description: 'Quick settlement to bank accounts with real-time transaction status.'
    },
    {
      icon: <Users size={24} />,
      title: 'Multi-User Access',
      description: 'Role-based access control for team management and operations.'
    },
    {
      icon: <Banknote size={24} />,
      title: 'Auto Reconciliation',
      description: 'Automated payment reconciliation with detailed transaction history.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wide text-primary-600 uppercase">
            Features
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Complete Payment Solution
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive payment infrastructure designed for Indian businesses, from startups to enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;