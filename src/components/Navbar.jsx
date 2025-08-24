import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext); 
  console.log('Navbar userData:', userData);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false); 

  const logout = () => {
    setToken(false);
    localStorage.removeItem('token'); 
    navigate('/'); 
  }

  useEffect(() => {
  if (token) {
    navigate('/'); // Redirect to home if logged in
  }
},[token])



  return (
    <div className="relative z-50">
      <div className="flex items-center justify-between text-sm py-6 px-6 mb-5 border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
        {/* Logo and Title */}
        <div className="flex flex-row gap-1 items-center justify-center">
          <img
            className="h-15 cursor-pointer hover:opacity-80 transition-opacity duration-200 rounded-full"
            src={assets.logo}
            alt="Logo"
            onClick={() => navigate('/')}
          />
          <h2 className="font-bold text-3xl text-blue-900">ClinicConnect</h2>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-start gap-8 font-medium" style={{ fontSize: "18px" }}>
          <NavLink to="/">
            <li className="py-2 px-1 text-gray-700 hover:text-cyan-600 transition-all duration-300 relative group">
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          </NavLink>
          <NavLink to="/doctors">
            <li className="py-2 px-1 text-gray-700 hover:text-cyan-600 transition-all duration-300 relative group">
              ALL DOCTORS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="py-2 px-1 text-gray-700 hover:text-cyan-600 transition-all duration-300 relative group">
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li className="py-2 px-1 text-gray-700 hover:text-cyan-600 transition-all duration-300 relative group">
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          </NavLink>
        </ul>
        {/* Profile/Account Section */}
        <div className="hidden md:flex items-center gap-4">
          {userData ? (
            <div className="relative">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                onClick={() => setShowProfileDropdown((prev) => !prev)}
              >
                <img
                  src={userData.profilePic || assets.profile_pic}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-semibold text-gray-800">
                  {userData.name || userData.email || 'User'}
                </span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <NavLink to="/my-appointments" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setShowProfileDropdown(false)}>
                    My Appointments
                  </NavLink>
                  <NavLink to="/my-profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setShowProfileDropdown(false)}>
                    My Profile
                  </NavLink>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/login">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-200">
                Login
              </button>
            </NavLink>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-cyan-600 hover:border-cyan-600"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40 border-b border-gray-200">
          <ul className="flex flex-col gap-2 p-4">
            <NavLink to="/" onClick={() => setShowMobileMenu(false)}>
              <li className="py-2 px-1 text-gray-700 hover:text-cyan-600 transition-all duration-300">HOME</li>
            </NavLink>
            <NavLink to="/doctors" onClick={() => setShowMobileMenu(false)}>
              <li className="py-2 px-1 text-gray-700 hover:text-cyan-600 transition-all duration-300">ALL DOCTORS</li>
            </NavLink>
            <NavLink to="/about" onClick={() => setShowMobileMenu(false)}>
              <li className="py-2 px-1 text-gray-700 hover:text-cyan-600 transition-all duration-300">ABOUT</li>
            </NavLink>
            <NavLink to="/contact" onClick={() => setShowMobileMenu(false)}>
              <li className="py-2 px-1 text-gray-700 hover:text-cyan-600 transition-all duration-300">CONTACT</li>
            </NavLink>
            {userData ? (
              <>
                <NavLink to="/my-appointment" onClick={() => setShowMobileMenu(false)}>
                  <li className="flex items-center gap-3 py-2 px-1 text-gray-700 hover:text-cyan-600 transition-all duration-300">My Appointments</li>
                </NavLink>
                <NavLink to="/my-profile" onClick={() => setShowMobileMenu(false)}>
                  <li className="flex items-center gap-3 py-2 px-1 text-gray-700 hover:text-cyan-600 transition-all duration-300">My Profile</li>
                </NavLink>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setShowMobileMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <NavLink to="/login" onClick={() => setShowMobileMenu(false)}>
                <li>
                  <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-md">
                    Login / Create Account
                  </button>
                </li>
              </NavLink>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
