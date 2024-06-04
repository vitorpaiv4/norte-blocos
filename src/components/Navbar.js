import React from 'react';
import logo from '../assets/logo.png';
import { HomeIcon, InformationCircleIcon, PhoneIcon } from '@heroicons/react/24/outline';

function Navbar() {
    return (
      <nav className="bg-blue-400 p-1"> 
        <div className="container mx-auto flex justify-between items-center relative">
          <div className="flex-1 flex justify-center">
            <img src={logo} alt="Norte Blocos Logo" className="h-40 w-30"/>
          </div>
          <div className="absolute right-0 flex items-center gap-7 lg:flex text-2xl">
            <ul className="flex space-x-4 items-center">
              <li className="flex items-center space-x-1">
                <HomeIcon className="h-6 w-6 text-gray-300" />
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
              </li>
              <li className="flex items-center space-x-1">
                <InformationCircleIcon className="h-6 w-6 text-gray-300" />
                <a href="#about" className="text-gray-300 hover:text-white">About</a>
              </li>
              <li className="flex items-center space-x-1">
                <PhoneIcon className="h-6 w-6 text-gray-300" />
                <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
