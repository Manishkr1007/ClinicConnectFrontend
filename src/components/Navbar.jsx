import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext); 
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
  <div className='flex flex-row gap-1 items-center justify-center'>
    <img
      className=" h-15 cursor-pointer hover:opacity-80 transition-opacity duration-200 rounded-full"
      src={assets.logo}
      alt="Logo"
      onClick={() => navigate('/')}
    />
    <h2 className='font-bold text-3xl text-blue-900'>ClinicConnect</h2>
  </div>
    {/* Desktop Menu */}
    <ul className="hidden md:flex items-start gap-8 font-medium" style={{fontSize:"18px"}}>
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
      <NavLink to="https://docmeetadmin.netlify.app/">
        <li className="py-2 px-3 text-emerald-600 hover:text-emerald-700 font-semibold border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-all duration-300">
          Admin
        </li>
      </NavLink>
    </ul>

    {/* Hamburger Icon */}
    <div className="md:hidden cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200" onClick={() => setShowMobileMenu(!showMobileMenu)}>
      <img src={assets.menu_icon} alt="menu" className="w-6" />
    </div>

    {/* Profile / Auth Section */}
    <div className="hidden md:flex items-center gap-4 relative">
      {token ? (
        <div
          className="flex items-center gap-3 cursor-pointer p-2 rounded-xl hover:bg-gray-50 transition-all duration-200"
          onMouseEnter={() => setShowProfileDropdown(true)}
          onMouseLeave={() => setShowProfileDropdown(false)}
        >
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 hover:border-cyan-300 transition-colors duration-200"
              src={userData?.image || assets.profile_pic}
              alt="profile"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
          </div>
          <img className="w-3 transition-transform duration-200" src={assets.dropdown_icon} alt="dropdown" />

          {/* Dropdown Menu */}
          {showProfileDropdown && (
            <div className="absolute top-16 right-0 bg-white shadow-xl rounded-xl border border-gray-100 py-2 w-48 z-[9999]">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-800">Welcome back!</p>
                <p className="text-xs text-gray-500">Manage your account</p>
              </div>
              
              <p
                onClick={() => {
                  navigate('my-profile');
                  setShowProfileDropdown(false);
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 text-sm text-gray-700"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                My Profile
              </p>
              
              <p
                onClick={() => {
                  navigate('my-appointments');
                  setShowProfileDropdown(false);
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 text-sm text-gray-700"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h4a1 1 0 011 1v1a1 1 0 01-1 1h-1v9a2 2 0 01-2 2H7a2 2 0 01-2-2V10H4a1 1 0 01-1-1V8a1 1 0 011-1h4z" />
                </svg>
                My Appointments
              </p>
              
              <div className="border-t border-gray-100 mt-1">
                <p
                  onClick={logout}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 cursor-pointer transition-colors duration-200 text-sm text-red-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <NavLink to="/login">
          <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
            Create Account
          </button>
        </NavLink>   
      )}
    </div>
  </div>

  {/* Mobile Menu */}
  {showMobileMenu && (
    <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 w-full z-20 border-t border-gray-200">
      <div className="py-4 px-6 space-y-1">
        <NavLink to="/" onClick={() => setShowMobileMenu(false)} className="block py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-700">
          HOME
        </NavLink>
        <NavLink to="/doctors" onClick={() => setShowMobileMenu(false)} className="block py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-700">
          ALL DOCTORS
        </NavLink>
        <NavLink to="/about" onClick={() => setShowMobileMenu(false)} className="block py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-700">
          ABOUT
        </NavLink>
        <NavLink to="/contact" onClick={() => setShowMobileMenu(false)} className="block py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-700">
          CONTACT
        </NavLink>

        <div className="border-t border-gray-200 pt-4 mt-4">
          {token ? (
            <div className="space-y-1">
              <div className="flex items-center gap-3 px-4 py-2 mb-3">
                <img
                  className="w-8 h-8 rounded-full object-cover border border-gray-200"
                  src={userData?.image || assets.profile_pic}
                  alt="profile"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">Your Account</p>
                  <p className="text-xs text-gray-500">Manage profile & appointments</p>
                </div>
              </div>
              
              <NavLink to="my-profile" onClick={() => setShowMobileMenu(false)} className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-gray-700">My Profile</span>
              </NavLink>
              
              <NavLink to="my-appointment" onClick={() => setShowMobileMenu(false)} className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h4a1 1 0 011 1v1a1 1 0 01-1 1h-1v9a2 2 0 01-2 2H7a2 2 0 01-2-2V10H4a1 1 0 01-1-1V8a1 1 0 011-1h4z" />
                </svg>
                <span className="text-gray-700">My Appointments</span>
              </NavLink>
              
              <p
                onClick={() => {
                  setToken(false);
                  setShowMobileMenu(false);
                }}
                className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-red-50 transition-colors duration-200 cursor-pointer text-red-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </p>
            </div>
          ) : (
            <NavLink to="/login" onClick={() => setShowMobileMenu(false)}>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-md">
                Create Account
              </button>
            </NavLink> 
          )}
        </div>
      </div>
    </div>
  )}
</div>
  );
};

export default Navbar;
