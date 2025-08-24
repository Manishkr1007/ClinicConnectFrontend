import React, { useContext, useState, useEffect } from 'react'
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';
// import { GOOGLE_CLIENT_ID } from '../config';
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { backendUrl, token, setToken, fetchCurrentUser } = useContext(AppContext)
  const navigate = useNavigate();
  // If redirected from Google OAuth, trigger fetchCurrentUser
  useEffect(() => {
    // Refined: Only trigger after Google OAuth redirect with ?auth=google
    const params = new URLSearchParams(window.location.search);
    if (params.get('auth') === 'google') {
      fetchCurrentUser();
    }
  }, []);

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState('')
  const [verifyingOtp, setVerifyingOtp] = useState(false)

  // Validation helpers
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state === 'Sign Up') {
      if (!name.trim()) return toast.error('Name is required.');
      if (!validateEmail(email)) return toast.error('Enter a valid email.');
      if (!validatePassword(password)) return toast.error('Password must be at least 8 characters, include an uppercase letter, a number, and a special character.');
      if (!validatePhone(phone)) return toast.error('Enter a valid 10-digit phone number.');
      if (!otpSent) {
        // Send OTP to email only
        try {
          await axios.post(backendUrl + '/api/user/get-otp', { email });
          setOtpSent(true);
          toast.success('OTP sent to your email!');
        } catch (err) {
          toast.error('Failed to send OTP.');
        }
        return;
      }
      if (!otp || otp.length !== 6) return toast.error('Enter the 6-digit OTP sent to your email.');
      // Verify OTP with backend
      try {
        const verifyRes = await axios.post(backendUrl + '/api/user/verify-otp', { email, otp });
        if (!verifyRes.data.success) {
          toast.error(verifyRes.data.message || 'OTP verification failed.');
          return;
        }
      } catch (err) {
        toast.error('OTP verification failed.');
        return;
      }
    }
    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password,
          phone
        });
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
          alert('Account created successfully')
          navigate('/');
        } else {
          toast.error(data.message || 'Failed to create account. Please try again later.')
        }
      } else if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', {
          email,
          password
        })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
          alert('Logged in successfully')
          navigate('/');
        } else {
          toast.error(data.message || 'Failed to login. Please try again later.')
        }
      }
    } catch (error) {
      console.error('Error during login/signup:', error)
      toast.error('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white shadow-md rounded-xl p-6 sm:p-8 text-gray-700"
      >
          <p className="text-2xl font-semibold mb-1">
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </p>
          <p className="mb-4 text-sm">
            Please {state === 'Sign Up' ? 'Sign Up' : 'log in'} to book an appointment
          </p>

          {state === 'Sign Up' && (
            <>
              <div className="mb-4">
                <label className="block mb-1">Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter 10-digit Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  maxLength={10}
                />
              </div>
              {otpSent && (
                <div className="mb-4">
                  <label className="block mb-1">Email OTP</label>
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP sent to your email"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    maxLength={6}
                  />
                </div>
              )}
            </>
          )}

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-200"
          >
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </button>

          <div className="my-4 flex items-center justify-center">
            <span className="text-gray-400 mx-2">or</span>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => {
                // Redirect to backend Google OAuth endpoint
                window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`;
              }}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-medium transition duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_17_40)"><path d="M47.5 24.552C47.5 22.864 47.345 21.232 47.06 19.682H24V28.318H37.19C36.62 31.182 34.82 33.482 32.1 35.018V40.018H39.82C44.22 36.018 47.5 30.018 47.5 24.552Z" fill="#4285F4"/><path d="M24 48C30.48 48 35.98 45.864 39.82 40.018L32.1 35.018C30.1 36.318 27.64 37.09 24 37.09C17.76 37.09 12.36 32.818 10.54 27.09H2.58V32.236C6.38 39.09 14.54 44.09 24 44.09V48Z" fill="#34A853"/><path d="M10.54 27.09C9.98 25.59 9.68 23.982 9.68 22.318C9.68 20.654 9.98 19.046 10.54 17.546V12.4H2.58C0.94 15.618 0 19.09 0 22.318C0 25.546 0.94 29.018 2.58 32.236L10.54 27.09Z" fill="#FBBC05"/><path d="M24 9.545C27.64 9.545 30.1 10.864 32.1 12.727L39.82 6.182C35.98 2.136 30.48 0 24 0C14.54 0 6.38 5 2.58 11.854L10.54 17C12.36 11.273 17.76 7 24 7V9.545Z" fill="#EA4335"/></g><defs><clipPath id="clip0_17_40"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>
              Continue with Google
            </button>
          </div>

          <p className="text-sm mt-4 text-center">
            {state === 'Sign Up' ? (
              <>
                Already have an account?{' '}
                <span
                  onClick={() => setState('Login')}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Login
                </span>
              </>
            ) : (
              <>
                Don&apos;t have an account?{' '}
                <span
                  onClick={() => setState('Sign Up')}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Sign Up
                </span>
              </>
            )}
          </p>
        </form>
      </div>
  )
}

export default Login
