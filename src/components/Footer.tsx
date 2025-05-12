import React from 'react';
import logo from '../../assets/images/bancolombia_icon.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-500 py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
      </div>

      <div className="absolute bottom-0 right-0 mb-4 mr-4">
        <img
          src={logo}
          alt="Logo de Bancolombia"
          className="w-48 h-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
