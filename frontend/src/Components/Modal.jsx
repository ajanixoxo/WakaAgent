/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { XIcon } from 'lucide-react'
import ImageUpload from './Image-Upload';
import { useEditStore } from '../store/editStore';
import { Loader } from 'lucide-react';
import toast from 'react-hot-toast';
export default function EditModal({ isOpen, onClose, userID }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    id: userID,

  })
  const [imageFile, setImageFile] = useState(null);
  const { userEditRequest, isLoading } = useEditStore();

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleFileSelect = (file) => {
    setImageFile(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('Form data:', formData)
    userEditRequest(formData)
    setTimeout(() => {
      window.location.reload();
  }, 2000);

  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-semibold">Edit Profile</h2>
            <div className="w-6"></div> {/* Spacer for alignment */}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <ImageUpload onFileSelect={handleFileSelect} />

            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl h-14 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone number (WhatsApp)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl h-14 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your WhatsApp number"
              />
            </div>
            <input type="hidden" value={userID} name="id" />

            {/* <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl h-14 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div> */}

            <button
              type="submit"
              className="w-full bg-[#133B5D] flex items-center justify-center text-white rounded-xl h-14 mt-6 hover:bg-[#0f2d47] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {isLoading ? <Loader /> : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}