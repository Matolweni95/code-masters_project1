import React, { useState } from 'react';
import avatar from '../images/IMG_8375.JPG';

const ProfileDropdown = ({ user, type}) => {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownDirection = isDropdownOpen ? 'origin-top' : 'origin-bottom';

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="flex items-center focus:outline-none"
      >
        <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full cursor-pointer" />
        <div className="ml-2">
          <p className="text-sm font-medium text-gray-700 hover:text-gray-900">{user}</p>
          <p className="text-xs text-gray-500 hover:text-gray-700">{type}</p>
        </div>
      </button>

      {isDropdownOpen && (
        <div
          className={`absolute ${dropdownDirection} right-0 mt-2 w-48 bg-white rounded-md shadow-lg`}
        >
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Log In</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">More</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
