import React from 'react';
import logo from '../../assets/images/bancolombia.png';

interface BancolombiaLogoProps {
  className?: string;
}

const BancolombiaLogo: React.FC<BancolombiaLogoProps> = ({ className = 'w-[200px] h-[60px]' }) => {
  return (
    <img
      className={className}
      src={logo}
      alt="Logo de Bancolombia"
    />
  );
};

export default BancolombiaLogo;
