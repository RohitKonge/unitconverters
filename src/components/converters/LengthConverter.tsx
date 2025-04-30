import React, { useState, useEffect } from 'react';
import { convertLength } from '../../utils/conversions';
import ConverterInput from '../ui/ConverterInput';

const lengthUnits = [
  'Meter',
  'Kilometer',
  'Centimeter',
  'Millimeter',
  'Micrometer',
  'Nanometer',
  'Mile',
  'Yard',
  'Foot',
  'Inch',
  'Light Year'
];

const LengthConverter: React.FC = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('Meter');
  const [toUnit, setToUnit] = useState<string>('Kilometer');

  useEffect(() => {
    if (fromValue === '') {
      setToValue('');
      return;
    }

    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const result = convertLength(numValue, fromUnit, toUnit);
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
      const result = convertLength(numValue, toUnit, fromUnit);
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
          units={lengthUnits}
        />
        <ConverterInput
          label="To:"
          value={toValue}
          onChange={handleToValueChange}
          unit={toUnit}
          onUnitChange={setToUnit}
          units={lengthUnits}
        />
      </div>
    </div>
  );
};

export default LengthConverter;