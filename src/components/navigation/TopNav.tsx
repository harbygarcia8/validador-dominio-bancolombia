import React from 'react';
import { Link } from 'react-router-dom';

const TopNav: React.FC = () => {
  const navItems = [
    { title: 'Personas', active: true },
    { title: 'Negocios', active: false },
    { title: 'Corporativos', active: false },
    { title: 'Negocios especializados', active: false },
    { title: 'Tu360', active: false },
    { title: 'Blog', active: false },
  ];

  const rightNavItems = [
    { title: 'Transparencia', url: '#' },
    { title: 'Consumidor', url: '#' },
  ];

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          <div className="flex space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to="#"
                className={`px-3 py-2 text-sm hover:bg-gray-800 transition-colors ${
                  item.active ? 'bg-gray-800' : ''
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex space-x-4">
            {rightNavItems.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="px-3 py-2 text-sm hover:bg-gray-800 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;