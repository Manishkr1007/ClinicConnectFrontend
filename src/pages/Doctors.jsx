import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  // List of specialities for DRY code
  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];
   const specialityIcons = {
    "General physician": "🏥",
    "Gynecologist": "👩‍⚕️",
    "Dermatologist": "🧴",
    "Pediatricians": "👶",
    "Neurologist": "🧠",
    "Gastroenterologist": "🫁",
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white opacity-5 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Healthcare Specialist
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Browse through our network of qualified doctors and book your appointment with ease
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{doctors.length}+</div>
              <div className="text-blue-200 text-sm">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">6</div>
              <div className="text-blue-200 text-sm">Specialities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-blue-200 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Sidebar Filter */}
          <aside className="lg:w-80">
            <div className="sticky top-6 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H3m16 14H3m16-7l-4-4m4 4l-4 4" />
                  </svg>
                  Filter by Speciality
                </h2>
                <p className="text-blue-100 text-sm mt-1">Choose your medical specialty</p>
              </div>
              
              <nav className="p-6 space-y-3">
                {/* All Doctors Option */}
                <button
                  onClick={() => navigate("/doctors")}
                  className={`w-full text-left text-sm font-medium transition-all duration-300 rounded-xl px-4 py-3 flex items-center gap-3 group
                    ${
                      !speciality
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
                    }`}
                >
                  <span className="text-lg">👨‍⚕️</span>
                  <span className="flex-1">All Doctors</span>
                  {!speciality && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>

                {specialities.map((spec) => (
                  <button
                    key={spec}
                    onClick={() =>
                      speciality === spec
                        ? navigate("/doctors")
                        : navigate(`/doctors/${spec}`)
                    }
                    className={`w-full text-left text-sm font-medium transition-all duration-300 rounded-xl px-4 py-3 flex items-center gap-3 group
                      ${
                        speciality === spec
                          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105"
                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
                      }`}
                  >
                    <span className="text-lg">{specialityIcons[spec]}</span>
                    <span className="flex-1">{spec}</span>
                    {speciality === spec && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <h3 className="font-semibold text-gray-800 mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Emergency Booking
                  </button>
                  <button className="w-full text-left text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Find Available Now
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Enhanced Doctors Grid */}
          <section className="flex-1">
            {filterDoc.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.063a4.002 4.002 0 010-5.656A7.962 7.962 0 0112 9c2.034 0 3.9.785 5.291 2.063" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No Doctors Found</h3>
                <p className="text-gray-500 text-lg max-w-md mx-auto">
                  We couldn't find any doctors for this speciality. Try selecting a different category or browse all doctors.
                </p>
                <button
                  onClick={() => navigate("/doctors")}
                  className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  View All Doctors
                </button>
              </div>
            ) : (
              <>
                {/* Results Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {speciality ? `${speciality} Specialists` : 'All Doctors'}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Showing {filterDoc.length} doctor{filterDoc.length !== 1 ? 's' : ''} available
                    </p>
                  </div>
                  
                  {/* Sort Options */}
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="text-sm text-gray-500">Sort by:</span>
                    <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Availability</option>
                      <option>Name</option>
                      <option>Rating</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filterDoc.map((item, index) => (
                    <div
                      key={item._id}
                      onClick={() => navigate(`/appointment/${item._id}`)}
                      className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 transform hover:-translate-y-2"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Availability Badge */}
                        <div
                          className={`absolute top-4 right-4 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm ${
                            item.available 
                              ? "bg-green-500/90 animate-pulse" 
                              : "bg-red-500/90"
                          }`}
                        >
                          {item.available ? "● Available" : "● Busy"}
                        </div>

                        {/* Rating Badge */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                          <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          4.8
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              Dr. {item.name}
                            </h3>
                            <p className="text-sm text-blue-600 font-medium mt-1 flex items-center gap-1">
                              <span>{specialityIcons[item.speciality]}</span>
                              {item.speciality}
                            </p>
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-2 text-xs text-gray-500">
                          <div className="flex items-center gap-2">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>City Hospital, Downtown</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span>Next available: Today</span>
                          </div>
                        </div>

                        {/* Book Button */}
                        <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100">
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
