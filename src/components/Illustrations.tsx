import React from 'react';
import logo from '../../assets/images/banner.png';

const Illustrations: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={logo}
        alt="Logo de Bancolombia"
        className="w-full max-w-full h-auto object-cover"
      />
    </div>
  );
};

export default Illustrations;
