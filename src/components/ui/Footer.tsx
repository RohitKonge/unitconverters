import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-sm mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">About</h3>
            <p className="text-sm text-gray-600">
              A simple and intuitive unit converter tool to help you convert between different units of measurement quickly and accurately.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-800">How to Use</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-800">Common Conversions</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-800">Unit Systems</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-800">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © 2002-{new Date().getFullYear()} Unit Converter - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;