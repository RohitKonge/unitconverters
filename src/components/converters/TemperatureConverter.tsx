import React, { useState, useEffect } from 'react';
import { convertTemperature } from '../../utils/conversions';
import ConverterInput from '../ui/ConverterInput';

const temperatureUnits = ['Celsius', 'Kelvin', 'Fahrenheit'];

const TemperatureConverter: React.FC = () => {
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('Celsius');
  const [toUnit, setToUnit] = useState<string>('Kelvin');

  useEffect(() => {
    if (fromValue === '') {
      setToValue('');
      return;
    }

    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue)) {
      const result = convertTemperature(numValue, fromUnit, toUnit);
      setToValue(result.toFixed(2).replace(/\.?0+$/, ''));
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
      const result = convertTemperature(numValue, toUnit, fromUnit);
      setFromValue(result.toFixed(2).replace(/\.?0+$/, ''));
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
          units={temperatureUnits}
        />
        <ConverterInput
          label="To:"
          value={toValue}
          onChange={handleToValueChange}
          unit={toUnit}
          onUnitChange={setToUnit}
          units={temperatureUnits}
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;