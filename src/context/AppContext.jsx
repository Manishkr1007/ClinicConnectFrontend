import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import { doctors } from "../assets/assets";

import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);
  // const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  console.log("Token in AppContext:", token);
  const [userData, setUserData] = useState(false);

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list");
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error("Failed to fetch doctors data. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
      toast.error("Failed to fetch doctors data. Please try again later.");
    }
  };

  const loadUserProfileData = async () => {
    try {
      let config = token
        ? { headers: { token } }
        : { withCredentials: true };
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", config);
      if (data.success) {
        setUserData(data.user);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error loading user data:", error);
      toast.error("Failed to load user data. Please try again later.");
    }
  };

  // Fetch current user from backend session (for Google login/session)
  const fetchCurrentUser = async () => {
    try {
      const res = await axios.get(backendUrl + '/api/user/me', { withCredentials: true });
      // Always use res.data.user if present
      const user = res.data.user || res.data;
      setUserData(user);
      return user;
    } catch (err) {
      setUserData(false);
      return null;
    }
  };

  const value = {
    doctors,
    getDoctorsData,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
    fetchCurrentUser,
  };

  useEffect(() => {
    getDoctorsData();
    // On mount, try to fetch user from session (for Google login)
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
