import React from 'react';
import { ShoppingBag, Globe, Building2, Briefcase, ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="p-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-50 text-primary-600 mb-5">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 mb-6">{description}</p>
        <a 
          href={link} 
          className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-primary-500 to-secondary-500"></div>
    </div>
  );
};

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <ShoppingBag size={24} />,
      title: 'E-commerce',
      description: 'Seamless checkout experiences with cart abandonment recovery and recurring billing options.',
      link: '#'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Businesses',
      description: 'Multi-currency support with local payment methods and automatic currency conversion.',
      link: '#'
    },
    {
      icon: <Building2 size={24} />,
      title: 'Enterprises',
      description: 'Advanced security, detailed reporting, and custom integrations for large organizations.',
      link: '#'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Small Businesses',
      description: 'User-friendly dashboard with essential tools to help your business accept payments quickly.',
      link: '#'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wide text-primary-600 uppercase">
            Solutions
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Tailored for your industry
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Our payment solutions are designed to meet the specific needs of different industries and business sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              link={solution.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;