import React from 'react';
import { Link } from 'react-router-dom';
import BancolombiaLogo from '../BancolombiaLogo';

const MainNav: React.FC = () => {
  const mainNavItems = [
    { title: 'Inicio', url: '#' },
    { title: 'Necesidades', url: '#' },
    { title: 'Productos y Servicios', url: '#' },
    { title: 'Educación financiera', url: '#' },
  ];

  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="mr-8">
            <BancolombiaLogo className="w-92 h-20" />
            </Link>
            <div className="hidden md:flex space-x-6">
              {mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  className="text-gray-800 hover:text-emerald-600 transition-colors text-sm font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="#"
              className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors"
            >
              Trámites digitales
            </Link>
            <Link
              to="#"
              className="text-gray-800 hover:text-emerald-600 transition-colors text-sm"
            >
              Sucursal Virtual Personas
            </Link>
            <Link
              to="#"
              className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition-colors"
            >
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;