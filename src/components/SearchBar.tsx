import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { validBancolombiaDomains } from '../data/validDomains';
import ValidationModal from './modals/ValidationModal';
import { levenshteinDistance } from '../utils/stringUtils';

interface ModalInfo {
  title: string;
  message: string | null;
  domainQueried: string | null;
  isSuccess: boolean;
  isInputEmpty?: boolean;
  isInvalidFormat?: boolean;
}

const TYPOSQUATTING_THRESHOLD = 2;

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);

  const normalizeDomain = (input: string): string => {
    let processedInput = input.trim().toLowerCase();
    if (!processedInput.startsWith('http://') && !processedInput.startsWith('https://')) {
      processedInput = `http://${processedInput}`;
    }
    try {
      const url = new URL(processedInput);
      return url.hostname.replace(/^www\./, '');
    } catch (error) {
      const basicDomain = input.trim().toLowerCase().replace(/^www\./, '');
      if (/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/.test(basicDomain)) {
        return basicDomain;
      }
      return input.trim().toLowerCase().replace(/^www\./, '');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setModalInfo({
        title: 'Entrada Vacía',
        message: 'Por favor, ingrese un dominio o URL para validar.',
        domainQueried: null,
        isSuccess: false,
        isInputEmpty: true,
      });
      setIsModalOpen(true);
      return;
    }

    const normalizedQueryDomain = normalizeDomain(trimmedQuery);
    const isValidDomainFormat = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i.test(normalizedQueryDomain) || normalizedQueryDomain === "localhost";

    if (!isValidDomainFormat) {
        setModalInfo({
            title: 'Formato Inválido',
            message: `El texto ingresado no parece ser un dominio o URL con un formato válido. Por favor, verifique e inténtelo de nuevo.`,
            domainQueried: trimmedQuery,
            isSuccess: false,
            isInvalidFormat: true,
        });
        setIsModalOpen(true);
        return;
    }

    const isOfficial = validBancolombiaDomains.some(officialDomain => 
      normalizedQueryDomain === officialDomain || normalizedQueryDomain.endsWith(`.${officialDomain}`)
    );

    if (isOfficial) {
      setModalInfo({
        title: 'Dominio Verificado',
        message: 'Este dominio está reconocido como un sitio oficial de Bancolombia. Puedes confiar en él.',
        domainQueried: normalizedQueryDomain,
        isSuccess: true,
      });
    } else {
      let typosquattingSuggestion: string | null = null;
      for (const officialDomain of validBancolombiaDomains) {
        const distance = levenshteinDistance(normalizedQueryDomain, officialDomain);
        if (distance > 0 && distance <= TYPOSQUATTING_THRESHOLD) {
          typosquattingSuggestion = officialDomain;
          break; 
        }
      }

      let mainAlertMessage = 'Este dominio NO se reconoce como un sitio oficial de Bancolombia. Procede con precaución y no ingreses información sensible.';
      
      if (typosquattingSuggestion) {
        mainAlertMessage = `Este dominio NO es oficial. Es muy similar a "${typosquattingSuggestion}", un dominio legítimo de Bancolombia. Podría ser un intento de suplantación (phishing). Verifica cuidadosamente la URL.`;
      }

      const phishingWarning = 'Si esta dirección o URL llegó a usted por mensajes de texto o correo electrónico no solicitado, por favor omita y elimine el mensaje.\nLo invitamos a denunciar este link o cualquier actividad sospechosa a: correosospechoso@bancolombia.com';
      
      setModalInfo({
        title: 'Alerta de Seguridad',
        message: `${mainAlertMessage}\n\n${phishingWarning}`,
        domainQueried: normalizedQueryDomain,
        isSuccess: false,
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative max-w-4xl mx-auto w-full">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            className="w-full p-4 pr-14 rounded-full border-0 bg-white shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            placeholder="Ingrese el link o dominio y presione enter..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors"
            aria-label="Buscar"
          >
            <Search size={24} />
          </button>
        </div>
      </form>

      {isModalOpen && modalInfo && (
        <ValidationModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalInfo.title}
          message={modalInfo.message}
          domainQueried={modalInfo.domainQueried}
          isSuccess={modalInfo.isSuccess}
          isInputEmpty={modalInfo.isInputEmpty}
          isInvalidFormat={modalInfo.isInvalidFormat}
        />
      )}
    </div>
  );
};

export default SearchBar;