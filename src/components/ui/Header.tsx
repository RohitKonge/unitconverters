import React from 'react';
import { Ruler } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold text-blue-800">Unit Converter</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors">
                Length
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors">
                Weight
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors">
                Temperature
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors">
                Volume
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors">
                Area
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;