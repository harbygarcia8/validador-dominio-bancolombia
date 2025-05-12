import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SearchBar from '../components/SearchBar';
import Illustrations from '../components/Illustrations'; // Asumo que quieres mantener esto
import { ShieldCheck, LockKeyhole, Link2Off, HelpCircle } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const breadcrumbItems = [
    { title: 'Centro de ayuda', url: '#', active: false },
    { title: 'Seguridad y dominios', url: '#', active: true },
  ];

  const securityTips = [
    {
      icon: <ShieldCheck size={32} className="text-emerald-600" />,
      title: 'Verifica la URL Completa',
      description: 'Asegúrate de que la dirección en la barra de tu navegador sea exactamente la oficial, sin errores ortográficos ni caracteres extraños.',
    },
    {
      icon: <LockKeyhole size={32} className="text-emerald-600" />,
      title: 'Busca el Candado de Seguridad',
      description: 'Un sitio seguro mostrará un ícono de candado (HTTPS) en la barra de direcciones. Haz clic en él para ver los detalles del certificado.',
    },
    {
      icon: <Link2Off size={32} className="text-emerald-600" />,
      title: 'Desconfía de Enlaces Cortos o Redirecciones',
      description: 'Evita hacer clic en enlaces acortados si no confías en la fuente. Los estafadores los usan para ocultar la URL real.',
    },
    {
      icon: <HelpCircle size={32} className="text-emerald-600" />,
      title: 'Ante la Duda, No Ingreses Datos',
      description: 'Si algo te parece sospechoso, no ingreses tus claves, datos personales o financieros. Contacta directamente a Bancolombia por canales oficiales.',
    }
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Validador de Seguridad y Dominios Bancolombia
          </h1>
          <p className="text-center text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto">
            Ingresa una URL o dominio en la barra de búsqueda para verificar si pertenece a un sitio oficial de Bancolombia. Te ayudamos a navegar más seguro.
          </p>
          
          <SearchBar />
        </div>

        <div className="py-12 md:py-16 bg-slate-50 rounded-xl mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10 md:mb-12">
              Consejos Rápidos para tu Seguridad
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {securityTips.map((tip, index) => (
                <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex-shrink-0 mr-5 mt-1">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <Illustrations /> 
    </>
  );
};

export default SecurityPage;