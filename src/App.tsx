import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import UnitConverter from './components/UnitConverter';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import TermsOfService from './components/pages/TermsOfService';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import SEO from './components/ui/SEO';

type ConversionType = 'length' | 'temperature' | 'area' | 'volume' | 'weight';

function ConverterPage() {
  const { type } = useParams<{ type?: string }>();
  const navigate = useNavigate();
  const [activeConverter, setActiveConverter] = useState<ConversionType>(
    (type as ConversionType) || 'length'
  );

  const seoData = {
    length: {
      title: 'Length Converter - Convert Between Metric and Imperial Units',
      description: 'Convert length measurements between meters, feet, inches, yards, kilometers, miles, and more. Free online length unit converter with instant results.',
      type: 'length'
    },
    temperature: {
      title: 'Temperature Converter - Convert Between Celsius, Fahrenheit, and Kelvin',
      description: 'Convert temperature between Celsius (°C), Fahrenheit (°F), and Kelvin (K). Easy-to-use temperature conversion calculator with instant results.',
      type: 'temperature'
    },
    area: {
      title: 'Area Converter - Convert Square Meters, Square Feet, and More',
      description: 'Convert area measurements between square meters, square feet, acres, hectares, and more. Free online area unit converter for quick calculations.',
      type: 'area'
    },
    volume: {
      title: 'Volume Converter - Convert Liters, Gallons, Cubic Meters',
      description: 'Convert volume measurements between liters, gallons, cubic meters, and more. Simple volume unit converter for liquids and cubic measurements.',
      type: 'volume'
    },
    weight: {
      title: 'Weight Converter - Convert Between Kilograms, Pounds, and Ounces',
      description: 'Convert weight (mass) between kilograms, pounds, ounces, grams, and more. Fast and accurate weight conversion calculator.',
      type: 'weight'
    }
  };

  useEffect(() => {
    if (type && ['length', 'temperature', 'area', 'volume', 'weight'].includes(type)) {
      setActiveConverter(type as ConversionType);
    }
  }, [type]);

  const handleConverterChange = (newType: ConversionType) => {
    setActiveConverter(newType);
    navigate(`/${newType}`);
  };

  const currentSEO = type ? seoData[type as ConversionType] : {
    title: 'Unit Converter - Free Online Unit Conversion Calculator',
    description: 'Convert between different units of measurement instantly. Support for length, temperature, area, volume, and weight conversions. Free and easy to use.',
    type: 'unit'
  };

  return (
    <>
      <SEO 
        title={currentSEO.title}
        description={currentSEO.description}
        type={currentSEO.type}
        canonicalUrl={`https://unitconverters.live${type ? `/${type}` : ''}`}
      />
      <Header activeConverter={activeConverter} onConverterChange={handleConverterChange} />
      <main className="flex-1 flex flex-col items-center py-8 px-4">
        <div className="w-full max-w-3xl">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-700 mb-6">
              Use this Conversion Calculator to convert between commonly used units. Select the current unit in the left column, the desired unit in the right column, and enter a value in the left column to generate the resulting conversion.
            </p>
            <UnitConverter activeTab={activeConverter} onTabChange={handleConverterChange} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 prose prose-sm max-w-none">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Different Systems of Units</h2>
            <p className="mb-4">Historically, many different systems of units have been used, where a system of units is defined as a collection of units of measurement with rules that relate them to each other. A unit of measurement is a defined magnitude of a quantity that it used as a standard for measurement for the same kind of quantity, such as measurements of length, weight, and volume.</p>
            
            <p className="mb-4">In the past, many systems of measurement were defined on a local level, and could be based on factors as arbitrary as the length of a king's thumb. While this may work on a local level, when considering trade, as well as science, having systems of units based on units that others may not be able to relate to or understand makes interaction difficult. As such, the development of more universal and consistent systems developed over time. Today, some of the systems of units in use include the metric system, the imperial system, and the United States customary units.</p>
            
            <p className="mb-8">The International System of Units (SI) is the standard metric system that is currently used, and consists of seven SI base units of length, mass, time, temperature, electric current, luminous intensity, and amount of substance. Although SI is used almost universally in science (including in the US), some countries such as the United States still use their own system of units. This is partly due to the substantial financial and cultural costs involved in changing a measurement system compared to the potential benefit of using a standardized system. Since US customary units (USC) are so entrenched in the United States, and SI is already used in most applications where standardization is important, everyday use of USC is still prevalent in the United States, and is unlikely to change. As such, many unit converters including this Conversion Calculator exist, and will continue to do so to ensure that people globally are able to communicate different measurements effectively.</p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">History of the Pound</h2>
            <p className="mb-4">In the eighth and ninth centuries of the Common Era (CE), Arab civilization flourished in the Middle East and Spain. The Arabs used coins as a measurement of units of weight since a minted coin could not easily be cut or shaved to reduce its weight, and thus provided a measurable standard. They used a coin called a silver dirhem as a basic measure of weight, which had a weight roughly equivalent to 45 fully grown grains of barley. Ten dirhems comprised a Wukryeh, which was translated into Latin as an "uncia" – the origin of the word "ounce."</p>
            
            <p className="mb-8">Over time, trade spread from the Mediterranean area to Europe, including the northern German City States. As a result, a pound, 16 ounces of silver, or 7200 grains, became a commonly used measure in many regions.</p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">Brief History of the Metric System</h2>
            <p className="mb-4">In 1668, John Wilkins proposed a decimal system in which length, area, volume, and mass were linked to each other based on a pendulum that had a beat of one second as a base unit of length. In 1670, Gabriel Mouton proposed a decimal system that was instead based on the circumference of the earth, an idea supported by other prominent scientists of the time such as Jean Picard and Christiaan Huygens, but that did not take hold for approximately another 100 years.</p>
            
            <p className="mb-4">By the mid-eighteenth century, it was clear to nations who traded and exchanged scientific ideas that standardization of weights and measures was necessary. In 1790, Charles Maurice de Talleyrand-Perigord, the Prince of Talleyrand, approached the British (represented by John Riggs-Miller) and the Americans (represented by Thomas Jefferson) with proposals to define a common standard of length based on the length of a pendulum.</p>
            
            <p className="mb-4">The International System of Units, currently the most widely used system of measurement, was published in 1960. It has been adopted by all developed countries except for the United States, though as previously mentioned, it is used in science, as well as heavily in the military, even in the US.</p>
          </div>
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Routes>
          <Route path="/terms" element={
            <>
              <Header activeConverter="length" onConverterChange={() => {}} />
              <TermsOfService />
              <Footer />
            </>
          } />
          <Route path="/privacy" element={
            <>
              <Header activeConverter="length" onConverterChange={() => {}} />
              <PrivacyPolicy />
              <Footer />
            </>
          } />
          <Route path="/:type?" element={
            <>
              <ConverterPage />
              <Footer />
            </>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;