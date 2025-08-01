import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {


const navigate = useNavigate();


  return (
    <div className='relative bg-gradient-to-br from-emerald-400 via-green-400 to-teal-500 flex flex-col md:flex-row flex-wrap rounded-2xl px-6 md:px-10 lg:px-20 overflow-hidden shadow-2xl'>
      {/* Decorative background elements */}
      <div className='absolute top-0 left-0 w-full h-full opacity-10'>
        <div className='absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full blur-2xl'></div>
        <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-xl'></div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse'></div>
      
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 relative z-10'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight'>
          <p className='transform hover:scale-105 transition-transform duration-300 drop-shadow-lg'>
            Book Appointment
          </p>
          <p className='mt-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300'>
            With 100+ Trusted Doctors
          </p>
        </div>
        
        {/* Enhanced button with hover effects */}
        <button 
          onClick={() => navigate('/login')} 
          className='group relative bg-white text-sm sm:text-base text-gray-700 px-8 py-4 rounded-full mt-8 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden'
        >
          {/* Button background animation */}
          <div className='absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          
          {/* Button text */}
          <span className='relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2'>
            Create account
            <svg className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
            </svg>
          </span>
          
          {/* Button shine effect */}
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out'></div>
        </button>
        
        {/* Trust indicators */}
        <div className='flex items-center gap-4 mt-6 text-white/90'>
          <div className='flex items-center gap-1'>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className='w-4 h-4 text-yellow-300 fill-current' viewBox='0 0 20 20'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
            </div>
            <span className='text-sm font-medium ml-1'>4.9/5</span>
          </div>
          <div className='text-sm'>
            <span className='font-semibold'>50,000+</span> Happy Patients
          </div>
        </div>
      </div>
      
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        {/* Enhanced image container with glow effect */}
        <div className='relative'>
          <div className='absolute inset-0 bg-gradient-to-t from-green-400/20 to-transparent rounded-2xl'></div>
          <img 
            className='w-full absolute bottom-0 right-0 max-w-md transform hover:scale-105 transition-transform duration-500 ease-out drop-shadow-2xl' 
            src="src/assets/appointment_img.png"
            alt="Medical appointment illustration" 
          />
          
          {/* Floating elements around the image */}
          <div className='absolute top-10 right-10 w-3 h-3 bg-white rounded-full animate-bounce opacity-80'></div>
          <div className='absolute top-20 right-32 w-2 h-2 bg-yellow-300 rounded-full animate-pulse'></div>
          <div className='absolute top-32 right-16 w-4 h-4 bg-blue-300 rounded-full animate-bounce opacity-60' style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
    </div>
  )
}

export default Banner