import React, { useState, useEffect } from 'react';
import { convertArea } from '../../utils/conversions';
import ConverterInput from '../ui/ConverterInput';

const areaUnits = [
  'Square Meter',
  'Square Kilometer',
  'Square Centimeter',
  'Square Millimeter',
  'Square Micrometer',
  'Hectare',
  'Square Mile',
  'Square Yard',
  'Square Foot',
  'Square Inch',
  'Acre'
];

const AreaConverter: React.FC = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('Square Meter');
  const [toUnit, setToUnit] = useState<string>('Square Kilometer');

  useEffect(() => {
    if (fromValue === '') {
      setToValue('');
      return;
    }

    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const result = convertArea(numValue, fromUnit, toUnit);
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
      const result = convertArea(numValue, toUnit, fromUnit);
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
          units={areaUnits}
        />
        <ConverterInput
          label="To:"
          value={toValue}
          onChange={handleToValueChange}
          unit={toUnit}
          onUnitChange={setToUnit}
          units={areaUnits}
        />
      </div>
    </div>
  );
};

export default AreaConverter;