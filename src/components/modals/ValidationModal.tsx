import React from 'react';
import { X, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

interface ValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string | null;
  domainQueried: string | null;
  isSuccess: boolean;
  isInputEmpty?: boolean;
  isInvalidFormat?: boolean;
}

const ValidationModal: React.FC<ValidationModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  domainQueried,
  isSuccess,
  isInputEmpty = false,
  isInvalidFormat = false,
}) => {
  if (!isOpen) return null;

  let IconComponent;
  let iconColorClass;
  let titleColorClass;
  let buttonClass;

  if (isInputEmpty) {
    IconComponent = AlertTriangle;
    iconColorClass = 'text-yellow-500';
    titleColorClass = 'text-yellow-700';
    buttonClass = 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400 text-black';
  } else if (isInvalidFormat) {
    IconComponent = AlertTriangle;
    iconColorClass = 'text-yellow-500';
    titleColorClass = 'text-yellow-700';
    buttonClass = 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400 text-black';
  } else if (isSuccess) {
    IconComponent = CheckCircle2;
    iconColorClass = 'text-emerald-600';
    titleColorClass = 'text-emerald-700';
    buttonClass = 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500 text-white';
  } else {
    IconComponent = XCircle;
    iconColorClass = 'text-red-600';
    titleColorClass = 'text-red-700';
    buttonClass = 'bg-gray-700 hover:bg-gray-800 focus:ring-gray-600 text-white';
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="validation-modal-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-md w-full mx-auto transform transition-all duration-300 ease-in-out scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar modal"
          >
            <X size={28} />
          </button>
        </div>

        <div className="text-center">
          <IconComponent size={72} className={`mx-auto mb-5 ${iconColorClass}`} strokeWidth={1.75} />
          <h2 id="validation-modal-title" className={`text-2xl sm:text-3xl font-bold mb-3 ${titleColorClass}`}>
            {title}
          </h2>
          
          {message && (
            <div className="space-y-2">
              {message.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
          
          {domainQueried && !isInputEmpty && (
            <div className="my-6">
              <p className="text-xs text-gray-500 mb-1">Información ingresada:</p>
              <p className="text-sm sm:text-base text-gray-800 font-mono bg-gray-100 p-3 rounded-md break-all shadow-sm">
                {domainQueried}
              </p>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className={`w-full mt-8 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ease-in-out ${buttonClass}
            focus:outline-none focus:ring-2 focus:ring-opacity-60`}
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default ValidationModal;