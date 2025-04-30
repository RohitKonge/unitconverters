import React, { useState, useEffect } from 'react';
import { convertVolume } from '../../utils/conversions';
import ConverterInput from '../ui/ConverterInput';

const volumeUnits = [
  'Cubic Meter',
  'Cubic Kilometer',
  'Cubic Centimeter',
  'Cubic Millimeter',
  'Liter',
  'Milliliter',
  'US Gallon',
  'US Quart',
  'US Pint',
  'US Cup',
  'US Fluid Ounce',
  'US Tea Spoon',
  'Imperial Gallon',
  'Imperial Quart',
  'Imperial Pint',
  'Imperial Fluid Ounce',
  'Imperial Table Spoon',
  'Imperial Tea Spoon',
  'Cubic Mile',
  'Cubic Yard',
  'Cubic Foot',
  'Cubic Inch'
];

const VolumeConverter: React.FC = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('Cubic Meter');
  const [toUnit, setToUnit] = useState<string>('Cubic Kilometer');

  useEffect(() => {
    if (fromValue === '') {
      setToValue('');
      return;
    }

    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const result = convertVolume(numValue, fromUnit, toUnit);
      setToValue(result.toFixed(6).replace(/\.?0+$/, ''));
    }
  }, [fromValue, fromUnit, toUnit]);

  const handleToValueChange = (value: string) => {
    setToValue(value);
    if (value === '') {
      setFromValue('');
      return;
    }

    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const result = convertVolume(numValue, toUnit, fromUnit);
      setFromValue(result.toFixed(6).replace(/\.?0+$/, ''));
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ConverterInput
          label="From:"
          value={fromValue}
          onChange={setFromValue}
          unit={fromUnit}
          onUnitChange={setFromUnit}
          units={volumeUnits}
        />
        <ConverterInput
          label="To:"
          value={toValue}
          onChange={handleToValueChange}
          unit={toUnit}
          onUnitChange={setToUnit}
          units={volumeUnits}
        />
      </div>
    </div>
  );
};

export default VolumeConverter;