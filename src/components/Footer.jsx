import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="mt-10">
      {/* Main Footer Content */}
      <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl shadow-lg overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0  bg-gradient-to-bl from-green-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm p-8 md:p-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="transform hover:scale-105 transition-transform duration-300 ">
              <img className="mb-5 w-20 drop-shadow-md rounded-full" src={assets.logo} alt="Clinic Connect Logo" />
            </div>
            <p className="w-full md:w-2/3 text-gray-700 leading-7 text-base font-light">
              Clinic Connect makes booking doctor appointments simple, fast, and secure. Browse trusted healthcare professionals, view profiles, and schedule your visit in just a few clicks. Your health and convenience are our top priorities—connect with the right doctor, anytime, anywhere.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-pink-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.013C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Company Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-5 text-gray-800 relative">
              Company
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            </h3>
            <ul className="flex flex-col gap-3 text-gray-600">
              <li className="hover:text-green-600 hover:translate-x-2 transition-all duration-300 cursor-pointer flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                Home
              </li>
              <li className="hover:text-green-600 hover:translate-x-2 transition-all duration-300 cursor-pointer flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                About Us
              </li>
              <li className="hover:text-green-600 hover:translate-x-2 transition-all duration-300 cursor-pointer flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                Contact
              </li>
              <li className="hover:text-green-600 hover:translate-x-2 transition-all duration-300 cursor-pointer flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                Privacy
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-5 text-gray-800 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            </h3>
            <ul className="flex flex-col gap-4 text-gray-600">
              <li className="flex items-center gap-3 hover:text-green-600 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </div>
                <span className="font-medium">+91 9693510834</span>
              </li>
              <li className="flex items-center gap-3 hover:text-green-600 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="font-medium">clinicconnect@gmail.com</span>
              </li>
            </ul>

            {/* Newsletter Signup */}
           
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-6 pb-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <span>© 2024 Clinic Connect. All rights reserved.</span>
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-green-600 cursor-pointer transition-colors duration-300">Terms of Service</span>
            <span className="hover:text-green-600 cursor-pointer transition-colors duration-300">Privacy Policy</span>
            <span className="hover:text-green-600 cursor-pointer transition-colors duration-300">Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;