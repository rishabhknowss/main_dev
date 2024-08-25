import React from 'react';
import { Edit2 } from 'lucide-react';
import logo from '../assets/tempbrandlogo.svg';
import BrandCards from './BrandCards';
import { BrandIndicators } from './BrandIndicators';
import { ProfileFooter } from './profilefooter';

export const BrandAttributes = () => {
  return (
    <div>
    <div className="bg-white p-4 space-y-4">
      <div className="bg-green-100 p-4 rounded-lg flex border">
        <div className=" flex items-center justify-center mr-4">
          <img src={logo} alt='logo'  />
        </div>
        <div className="flex-grow">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-sm text-gray-600">User Name</label>
              <input type="text" placeholder="Titan" className="w-full p-1 border rounded"  />
            </div>
            <div>
              <label className="text-sm text-gray-600">Manager</label>
              <input type="text" placeholder="Dr.Nayak Ashwin" className="w-full p-1 border rounded"  />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email Id</label>
              <input type="text" placeholder="drashwinnayak@gmail.com" className="w-full p-1 border rounded"  />
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone No.</label>
              <input type="text" placeholder="+91-7411-XXX-XXX" className="w-full p-1 border rounded"  />
            </div>
          </div>
        </div>
        <button className="self-start ml-2">
          <Edit2 size={16} />
        </button>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Visual Branding</h2>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h3 className="font-semibold">Color Palette</h3>
            <div className="flex space-x-2 mt-2">
              <div className="w-6 h-6 bg-black rounded-full"></div>
              <div className="w-6 h-6 bg-white border rounded-full"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="w-6 h-6 bg-indigo-700 rounded-full"></div>
              <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Typography</h3>
            <p className="text-sm">Primary Font: Futura</p>
            <p className="text-sm">Secondary Font: Arial</p>
          </div>
          <div>
            <h3 className="font-semibold">Packaging Style</h3>
            <p className="text-sm">Elegant and sturdy packaging with a focus on premium quality</p>
          </div>
        </div>
      </div>
      </div>

    <BrandCards />
    <BrandIndicators />

    <ProfileFooter />
    </div>
    
  );
};

export default BrandAttributes;