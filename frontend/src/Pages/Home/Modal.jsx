/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'



export default function NoAgentModal({ isOpen = false, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen])

  const handleClose = () => {
    setIsModalOpen(false)
    onClose()
  }

  if (!isModalOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-sm mx-auto my-6">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>
        
        {/* Modal content */}
        <div className="relative flex flex-col w-full bg-gray-900 border-2 border-pink-500 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-gray-800 rounded-t">
            <h3 className="text-2xl font-bold text-white">No Agent Found</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={handleClose}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Body */}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-gray-400 text-lg leading-relaxed text-center">
              We're sorry, but no available agent could be found at this time.
            </p>
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-center p-6 border-t border-gray-800 rounded-b">
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              type="button"
              onClick={handleClose}
            >
              Try Again Later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}