// CONVERSION UTILITIES

// Length conversion factors to meter
const lengthToMeter: Record<string, number> = {
  'Meter': 1,
  'Kilometer': 1000,
  'Centimeter': 0.01,
  'Millimeter': 0.001,
  'Micrometer': 0.000001,
  'Nanometer': 0.000000001,
  'Mile': 1609.344,
  'Yard': 0.9144,
  'Foot': 0.3048,
  'Inch': 0.0254,
  'Light Year': 9.461e15
};

export function convertLength(value: number, fromUnit: string, toUnit: string): number {
  const meterValue = value * lengthToMeter[fromUnit];
  return meterValue / lengthToMeter[toUnit];
}

// Temperature conversions
export function convertTemperature(value: number, fromUnit: string, toUnit: string): number {
  // Convert to Kelvin first
  let kelvin: number;
  
  if (fromUnit === 'Celsius') {
    kelvin = value + 273.15;
  } else if (fromUnit === 'Fahrenheit') {
    kelvin = (value - 32) * 5/9 + 273.15;
  } else { // Kelvin
    kelvin = value;
  }
  
  // Convert from Kelvin to target unit
  if (toUnit === 'Celsius') {
    return kelvin - 273.15;
  } else if (toUnit === 'Fahrenheit') {
    return (kelvin - 273.15) * 9/5 + 32;
  } else { // Kelvin
    return kelvin;
  }
}

// Area conversion factors to square meter
const areaToSquareMeter: Record<string, number> = {
  'Square Meter': 1,
  'Square Kilometer': 1000000,
  'Square Centimeter': 0.0001,
  'Square Millimeter': 0.000001,
  'Square Micrometer': 1e-12,
  'Hectare': 10000,
  'Square Mile': 2589988.11,
  'Square Yard': 0.83612736,
  'Square Foot': 0.09290304,
  'Square Inch': 0.00064516,
  'Acre': 4046.8564224
};

export function convertArea(value: number, fromUnit: string, toUnit: string): number {
  const squareMeterValue = value * areaToSquareMeter[fromUnit];
  return squareMeterValue / areaToSquareMeter[toUnit];
}

// Volume conversion factors to cubic meter
const volumeToCubicMeter: Record<string, number> = {
  'Cubic Meter': 1,
  'Cubic Kilometer': 1e9,
  'Cubic Centimeter': 1e-6,
  'Cubic Millimeter': 1e-9,
  'Liter': 0.001,
  'Milliliter': 1e-6,
  'US Gallon': 0.00378541,
  'US Quart': 0.000946353,
  'US Pint': 0.000473176,
  'US Cup': 0.000236588,
  'US Fluid Ounce': 2.9574e-5,
  'US Tea Spoon': 4.92892e-6,
  'Imperial Gallon': 0.00454609,
  'Imperial Quart': 0.00113652,
  'Imperial Pint': 0.000568261,
  'Imperial Fluid Ounce': 2.84131e-5,
  'Imperial Table Spoon': 1.77582e-5,
  'Imperial Tea Spoon': 5.91939e-6,
  'Cubic Mile': 4.168182e9,
  'Cubic Yard': 0.764555,
  'Cubic Foot': 0.0283168,
  'Cubic Inch': 1.63871e-5
};

export function convertVolume(value: number, fromUnit: string, toUnit: string): number {
  const cubicMeterValue = value * volumeToCubicMeter[fromUnit];
  return cubicMeterValue / volumeToCubicMeter[toUnit];
}

// Weight conversion factors to kilogram
const weightToKilogram: Record<string, number> = {
  'Kilogram': 1,
  'Gram': 0.001,
  'Milligram': 1e-6,
  'Metric Ton': 1000,
  'Long Ton': 1016.0469088,
  'Short Ton': 907.18474,
  'Pound': 0.45359237,
  'Ounce': 0.028349523125,
  'Carrat': 0.0002,
  'Atomic Mass Unit': 1.66053904e-27
};

export function convertWeight(value: number, fromUnit: string, toUnit: string): number {
  const kilogramValue = value * weightToKilogram[fromUnit];
  return kilogramValue / weightToKilogram[toUnit];
}