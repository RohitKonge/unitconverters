import React from 'react';

type ConversionType = 'length' | 'temperature' | 'area' | 'volume' | 'weight';

interface HeaderProps {
  activeConverter: ConversionType;
  onConverterChange: (type: ConversionType) => void;
}

const Header: React.FC<HeaderProps> = ({ activeConverter, onConverterChange }) => {
  const converters: { id: ConversionType; label: string }[] = [
    { id: 'length', label: 'Length' },
    { id: 'temperature', label: 'Temperature' },
    { id: 'area', label: 'Area' },
    { id: 'volume', label: 'Volume' },
    { id: 'weight', label: 'Weight' },
  ];

  return (
    <header className="w-full bg-white shadow-sm py-4 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="public/unitconverter.svg" alt="Unit Converter Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-blue-800">Unit Converter</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            {converters.map((converter) => (
              <li key={converter.id}>
                <button
                  onClick={() => onConverterChange(converter.id)}
                  className={`text-gray-600 hover:text-blue-800 transition-colors ${
                    activeConverter === converter.id ? 'text-blue-800 font-semibold' : ''
                  }`}
                >
                  {converter.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;