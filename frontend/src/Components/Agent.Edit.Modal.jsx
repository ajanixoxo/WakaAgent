/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react'
import { XIcon } from 'lucide-react'
import ImageUpload from './Image-Upload';
import { useEditStore } from '../store/editStore';
import { Loader } from 'lucide-react';

export default function EditModal({ isOpen, onClose, agentID }) {
  const [areaLocations, setAreaLocations] = useState(['']);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    id: agentID,
    areaLocations:[""],

  })
  const [imageFile, setImageFile] = useState(null);
  const { agentEditRequest, isLoading } = useEditStore();


  // Sync formData.areaLocations with areaLocations
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      areaLocations,
    }));
  }, [areaLocations]);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }



  const handleAddLocation = () => {
    if (areaLocations.length < 3) {
      setAreaLocations([...areaLocations, '']);
    }
  };

  // Handle removing a location input
  const handleRemoveLocation = (index) => {
    setAreaLocations(areaLocations.filter((_, i) => i !== index));
  };

  // Handle updating area locations on change
  const handleLocationChange = (index, value) => {
    const updatedLocations = [...areaLocations];
    updatedLocations[index] = value;
    setAreaLocations(updatedLocations);
  };


  // const handleFileSelect = (file) => {
  //   setImageFile(file);
  // };
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('Form data:', formData)
   agentEditRequest(formData)
    setTimeout(() => {
      window.location.reload();
    }, 2000);

  }

  if (!isOpen) return null

  return (
    <div className="absolute inset-0 z-40 h-max bg-black bg-opacity-50 flex justify-center items-center p-4">
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
              {/* <ImageUpload onFileSelect={handleFileSelect} /> */}

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
                required
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
                required
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                id="state"
                name="state"
                type="tel"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl h-14 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter State of Operation"
                required
              />
            </div>
            <div>
              <label htmlFor="tf" className="block text-sm font-medium text-gray-700 mb-1">
                Touring Fee
              </label>
              <select
                id="tf"
                name="touringFee"
                type="touringFee"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl h-14 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.touringFee}
                onChange={handleChange}
                required>
                <option value="">Select Touring Fee</option>
                <option value="1000">1,000</option>
                <option value="2000">2,000</option>
                <option value="3000">3,000</option>
                <option value="4000">4,000</option>
                <option value="5000">5,000</option>
                <option value="6000">6,000</option>
                <option value="7000">7,000</option>
                <option value="8000">8,000</option>
                <option value="9000">9,000</option>
                <option value="10000">10,000</option>

              </select>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Area of Location</label>
              {areaLocations.map((location, index) => (
                <div key={index} className="w-full flex items-center space-x-2">
                
                  <input
                    type="text"
                    placeholder={`e.g Ikorudu, Iwo Road, Egbeda ${index + 1}`}
                    value={location}
                    onChange={(e) => handleLocationChange(index, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl h-14 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveLocation(index)}
                      className="p-2 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}

              {/* Add location button, limited to 3 locations */}
              {areaLocations.length < 3 && (
                <button
                  type="button"
                  onClick={handleAddLocation}
                  className="mt-2 text-blue-500 hover:text-blue-700"
                >
                  + Add Location
                </button>
              )}

            </div>

            <input type="hidden" value={agentID} name="id" />

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
              {isLoading ? <Loader className="animate-spin"  /> : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}