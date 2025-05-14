import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
    >
      {children}
    </a>
  );
};