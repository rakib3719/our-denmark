'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEdit, FaToggleOn, FaToggleOff, FaCheck, FaTimes } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';

const ServiceManage = () => {
  // Sample services data
  const [services, setServices] = useState([
    {
      id: 1,
      name: "সাইন কপি অরডার",
      price: 50,
      status: "active",
      notice: "এই সার্ভিসের জন্য বিশেষ নোট"
    },
    {
      id: 2,
      name: "সারবার কপি অরডার",
      price: 80,
      status: "inactive",
      notice: "সারবার কপি সম্পর্কিত তথ্য"
    },
    {
      id: 3,
      name: "আইডি কাড অরডার",
      price: 120,
      status: "active",
      notice: "আইডি কার্ড সার্ভিস নোটিশ"
    },
    {
      id: 4,
      name: "বায়োমেট্রিক",
      price: 150,
      status: "active",
      notice: "বায়োমেট্রিক সার্ভিসের নির্দেশনা"
    },
    {
      id: 5,
      name: "এন আইডি টু নম্বর",
      price: 100,
      status: "inactive",
      notice: "NID থেকে নম্বর রূপান্তর"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  // Handle edit button click
  const handleEdit = (service) => {
    setCurrentService(service);
    setIsModalOpen(true);
  };

  // Handle status toggle
  const toggleStatus = (id) => {
    const service = services.find(s => s.id === id);
    setAlertMessage(`Are you sure you want to ${service.status === "active" ? "deactivate" : "activate"} ${service.name}?`);
    setAlertType(service.status === "active" ? "deactivate" : "activate");
    setCurrentService(service);
    setShowAlert(true);
  };

  // Confirm status change
  const confirmStatusChange = () => {
    setServices(services.map(service => 
      service.id === currentService.id 
        ? { ...service, status: service.status === "active" ? "inactive" : "active" } 
        : service
    ));
    setShowAlert(false);
  };

  // Save changes from modal
  const handleSave = () => {
    setServices(services.map(service => 
      service.id === currentService.id ? currentService : service
    ));
    setIsModalOpen(false);
  };

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">সার্ভিস ম্যানেজমেন্ট</h2>
          <p className="text-gray-600">এখানে আপনি সকল সার্ভিস ম্যানেজ করতে পারবেন</p>
        </div>

        <div className="overflow-x-scroll">
          <div
        
          className=" table-container  md:min-w-full"> {/* This ensures the table has a minimum width */}
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">নং</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">সার্ভিস নাম</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">দাম</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">স্ট্যাটাস</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">একশন</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {services.map((service, index) => (
                  <motion.tr 
                    key={service.id}
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.price} টাকা</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${service.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                        {service.status === "active" ? "সক্রিয়" : "নিষ্ক্রিয়"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleEdit(service)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <FaEdit className="text-lg" />
                        </button>
                        <button
                          onClick={() => toggleStatus(service.id)}
                          className={service.status === "active" ? "text-red-600 hover:text-red-900" : "text-green-600 hover:text-green-900"}
                        >
                          {service.status === "active" ? <FaToggleOff className="text-xl" /> : <FaToggleOn className="text-xl" />}
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">সার্ভিস আপডেট করুন</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">দাম</label>
                  <input
                    type="number"
                    value={currentService?.price || ""}
                    onChange={(e) => setCurrentService({...currentService, price: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">নোটিশ</label>
                  <textarea
                    value={currentService?.notice || ""}
                    onChange={(e) => setCurrentService({...currentService, notice: e.target.value})}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    বাতিল
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-indigo-600 rounded-md text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    সংরক্ষণ করুন
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Status Change Alert */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <div className={`p-4 rounded-lg shadow-lg ${alertType === "activate" ? "bg-green-50" : "bg-red-50"} border ${alertType === "activate" ? "border-green-200" : "border-red-200"}`}>
              <div className="flex items-start">
                <div className={`flex-shrink-0 ${alertType === "activate" ? "text-green-400" : "text-red-400"}`}>
                  <FiAlertTriangle className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <h3 className={`text-sm font-medium ${alertType === "activate" ? "text-green-800" : "text-red-800"}`}>
                    {alertMessage}
                  </h3>
                  <div className="mt-2 flex space-x-3">
                    <button
                      onClick={confirmStatusChange}
                      className={`px-3 py-1 text-sm rounded-md ${alertType === "activate" ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-red-100 text-red-800 hover:bg-red-200"}`}
                    >
                      <FaCheck className="inline mr-1" /> হ্যাঁ
                    </button>
                    <button
                      onClick={() => setShowAlert(false)}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
                    >
                      <FaTimes className="inline mr-1" /> না
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceManage;