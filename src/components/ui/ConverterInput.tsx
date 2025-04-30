import React from 'react';

interface ConverterInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit: string;
  onUnitChange: (unit: string) => void;
  units: string[];
}

const ConverterInput: React.FC<ConverterInputProps> = ({
  label,
  value,
  onChange,
  unit,
  onUnitChange,
  units
}) => {
  return (
    <div className="space-y-2">
      <div className="text-base font-semibold text-gray-700">{label}</div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        placeholder="Enter value"
      />
      <div className="relative">
        <div className="w-full h-80 overflow-y-auto border border-gray-300 rounded bg-white">
          {units.map((u) => (
            <button
              key={u}
              className={`w-full text-left px-3 py-2 hover:bg-gray-100 transition-colors ${
                unit === u ? 'bg-gray-200' : ''
              }`}
              onClick={() => onUnitChange(u)}
            >
              {u}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConverterInput;