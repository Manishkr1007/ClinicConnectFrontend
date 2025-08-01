import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RelatedDoctors from "../components/RelatedDoctors";
import { toast } from "react-toastify";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, backendUrl, token, getDoctorsData } = useContext(AppContext);
  const daysofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const navigate = useNavigate();

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
       
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1; 
        let year = currentDate.getFullYear();

        const slotDate = day + "_" + month + "_" + year;
        const slotTime = formattedTime
       
        const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true;

       if(isSlotAvailable) {
        timeSlots.push({  
          datetime: new Date(currentDate),
          time: formattedTime
        });
      }

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots(prev => ([...prev, timeSlots]));
    }
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Please login to book an appointment.");
      return navigate('/login');
    }

  try{

  const date = docSlots[slotIndex][0].datetime
  let day = date.getDate();
  let month = date.getMonth() + 1; // Months are zero-based in JavaScript
  let year = date.getFullYear();
  const slotDate = day +"_"+ month + "_" + year;
  console.log("Selected Slot Date:", slotDate,slotTime);

  const {data} = await axios.post(backendUrl + '/api/user/book-appointment',{docId,slotDate,slotTime},{headers:{token}})
  if(data.success){
    toast.success("Appointment booked successfully!");
    getDoctorsData();
    navigate('/my-appointments');
  }
  else{
    toast.error("Failed to book appointment. Please try again.");
    console.error("Booking failed:", data.message);}
  }

  catch (error) {
    console.error("Error booking appointment:", error);
    toast.error("Failed to book appointment. Please try again later.");
  }

  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(()=>{
  getAvailableSlots();
    },[docInfo])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slotVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return docInfo && (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8"
    >
      <>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="sm:w-1/3"
              >
                <img 
                  className="bg-gradient-to-br from-blue-600 to-indigo-700 w-full sm:max-w-72 rounded-2xl shadow-2xl object-cover h-80 sm:h-96" 
                  src={docInfo.image} 
                  alt={docInfo.name} 
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex-1 border border-gray-200 rounded-2xl p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 sm:mt-0"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-2">
                    {docInfo.name}
                    <motion.img 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      src={assets.varified_icon} 
                      alt="verified" 
                      className="w-7 h-7"
                    />
                  </p>
              
                  <p className="flex items-center gap-2 text-lg mt-2 text-gray-600 mb-4">
                    {docInfo.degree} - {docInfo.speciality}
                  </p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="py-2 px-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    {docInfo.experience}
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6"
                  >
                    <p className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-3">
                      About 
                      <img src={assets.info_icon} alt="info" className="w-5 h-5" />
                    </p>
                    <p className="text-gray-600 max-w-[700px] leading-relaxed text-base">
                      {docInfo.about}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mt-6 inline-block"
                  >
                    <p className="text-gray-700 font-semibold text-lg bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-lg">
                      Appointment Fees: ₹<span className="text-green-600 font-bold">{docInfo.fees}</span>
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8"
          >
            <div className="mt-2 px-2">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-bold text-2xl text-gray-800 mb-6 flex items-center gap-3"
              >
                📅 Booking Slots
              </motion.p>
              
              <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 mb-8">
                <AnimatePresence>
                  {docSlots.length > 0 && docSlots.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={slotVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSlotIndex(index)}
                      className={`min-w-[100px] text-center px-6 py-4 rounded-2xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl ${
                        slotIndex === index 
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-blue-300' 
                          : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <p className="font-bold text-sm mb-1">
                        {item[0] && daysofWeek[item[0].datetime.getDay()]}
                      </p>
                      <p className="text-xl font-bold">
                        {item[0] && item[0].datetime.getDate()}
                      </p>
                      <p className="text-xs opacity-75 mt-1">
                        {item[0] && item[0].datetime.toLocaleDateString('en-US', { month: 'short' })}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                {docSlots.length > 0 && (
                  <motion.div
                    key={slotIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8"
                  >
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-semibold text-xl text-gray-800 mb-4 flex items-center gap-2"
                    >
                      🕐 Available Time Slots
                    </motion.p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
                      {docSlots[slotIndex].map((item, index) => (
                        <motion.p 
                          key={item.time || index} 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSlotTime(item.time)} 
                          className={`text-sm font-medium flex-shrink-0 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 text-center shadow-md hover:shadow-lg ${
                            item.time === slotTime 
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-300' 
                              : 'text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 bg-white'
                          }`}
                        >
                          {item.time.toLowerCase()}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={bookAppointment} 
                disabled={!slotTime}
                className={`w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg font-semibold px-12 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed ${
                  !slotTime ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-blue-300'
                }`}
              >
                {!slotTime ? '📋 Select Time Slot' : '🗓️ Book an Appointment'}
              </motion.button>

              {slotTime && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl"
                >
                  <p className="text-blue-800 font-medium">
                    ✅ Selected: {docSlots[slotIndex] && docSlots[slotIndex][0] && 
                    daysofWeek[docSlots[slotIndex][0].datetime.getDay()]}, {' '}
                    {docSlots[slotIndex] && docSlots[slotIndex][0] && 
                    docSlots[slotIndex][0].datetime.toLocaleDateString()} at {slotTime}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
          </motion.div>
        </div>
      </>
    </motion.div>
  );
};

export default Appointment;