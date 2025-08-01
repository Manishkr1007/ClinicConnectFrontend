import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="relative flex flex-col items-center gap-8 my-16 text-gray-900 p-8 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full opacity-50"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-2">
          <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">Most Trusted Doctors</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
          Top Doctors 
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Book Now
          </span>
        </h1>
        
        <p className="sm:w-1/2 mx-auto text-center text-lg text-white/90 font-medium backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
          Simply Browse Through Our Extensive List of Trusted Doctors & Book Your Appointment
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="group border border-white/20 rounded-2xl overflow-hidden cursor-pointer shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                src={item.image}
                alt={item.name}
              />
              
              {/* Availability Badge */}
              <div className="absolute top-3 right-3">
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                  item.available 
                    ? "bg-green-100 text-green-700 border border-green-200" 
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    item.available ? "bg-green-500 animate-pulse" : "bg-red-500"
                  }`}></span>
                  {item.available ? "Available" : "Busy"}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-5">
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 font-medium">{item.speciality}</p>
                
                {/* Rating Stars */}
                <div className="flex justify-center items-center gap-1 mt-2">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(4.9)</span>
                </div>

                {/* Book Button */}
                <button className="mt-3 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <button
          onClick={() => {
            navigate("/doctors");
          }}
          className="group px-8 py-3 bg-white text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
        >
          View All Doctors
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          500+ Verified Doctors Available
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120V50C200 20 400 0 600 30C800 60 1000 40 1200 20V120H0Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </div>
  );
};

export default TopDoctors;
