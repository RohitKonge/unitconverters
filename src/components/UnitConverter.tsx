import React from 'react';
import LengthConverter from './converters/LengthConverter';
import TemperatureConverter from './converters/TemperatureConverter';
import AreaConverter from './converters/AreaConverter';
import VolumeConverter from './converters/VolumeConverter';
import WeightConverter from './converters/WeightConverter';

type ConversionType = 'length' | 'temperature' | 'area' | 'volume' | 'weight';

interface UnitConverterProps {
  activeTab: ConversionType;
  onTabChange: (type: ConversionType) => void;
}

const UnitConverter: React.FC<UnitConverterProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: ConversionType; label: string }[] = [
    { id: 'length', label: 'Length' },
    { id: 'temperature', label: 'Temperature' },
    { id: 'area', label: 'Area' },
    { id: 'volume', label: 'Volume' },
    { id: 'weight', label: 'Weight' }
  ];

  return (
    <div className="w-full">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-3 px-4 font-medium text-sm sm:text-base transition-colors duration-200 focus:outline-none ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {activeTab === 'length' && <LengthConverter />}
        {activeTab === 'temperature' && <TemperatureConverter />}
        {activeTab === 'area' && <AreaConverter />}
        {activeTab === 'volume' && <VolumeConverter />}
        {activeTab === 'weight' && <WeightConverter />}
      </div>
    </div>
  );
};

export default UnitConverter;