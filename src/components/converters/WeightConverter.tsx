import React, { useState, useEffect } from 'react';
import { convertWeight } from '../../utils/conversions';
import ConverterInput from '../ui/ConverterInput';

const weightUnits = [
  'Kilogram',
  'Gram',
  'Milligram',
  'Metric Ton',
  'Long Ton',
  'Short Ton',
  'Pound',
  'Ounce',
  'Carrat',
  'Atomic Mass Unit'
];

const WeightConverter: React.FC = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('Kilogram');
  const [toUnit, setToUnit] = useState<string>('Gram');

  useEffect(() => {
    if (fromValue === '') {
      setToValue('');
      return;
    }

    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const result = convertWeight(numValue, fromUnit, toUnit);
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
      const result = convertWeight(numValue, toUnit, fromUnit);
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
          units={weightUnits}
        />
        <ConverterInput
          label="To:"
          value={toValue}
          onChange={handleToValueChange}
          unit={toUnit}
          onUnitChange={setToUnit}
          units={weightUnits}
        />
      </div>
    </div>
  );
};

export default WeightConverter;