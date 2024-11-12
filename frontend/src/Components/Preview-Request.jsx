import React from 'react'
import { X } from 'lucide-react'

export default function PreviewRequestModal({ isOpen, onClose, formData, selectedCountry, state, area }) {
  if (!isOpen) return null

  const formatLabel = (key) => {
    return key.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  const renderValue = (value) => {
    if (typeof value === 'string' && value.length > 0) {
      return value
    } else if (typeof value === 'number') {
      return value.toString()
    } else {
      return 'Not specified'
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-xl">
        <div className="flex justify-between items-center p-6 bg-[#133B5D] text-white">
          <h2 className="text-2xl font-bold">Preview Request</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-160px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#133B5D]">Location</h3>
              <div className="space-y-2">
                <div>
                  <span className="font-medium">Country:</span> {selectedCountry}
                </div>
                <div>
                  <span className="font-medium">State Or City</span> {renderValue(state)}
                </div>
                {/* <div>
                  <span className="font-medium">City:</span> {renderValue(city)}
                </div> */}
                <div>
                  <span className="font-medium">Area:</span> {renderValue(area)}
                </div>
              </div>
            </div>

            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-[#133B5D]">{formatLabel(key)}</h3>
                <p className="text-gray-700">{renderValue(value)}</p>
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold">
            All the information you have filled out will be sent directly to the agent via WhatsApp, ensuring they have a clear understanding of your rental needs. Additionally, the agent's profile and contact information will be shared with you through WhatsApp after payment is completed, and you can also access the agent’s profile on your dashboard.
            Please review your details carefully to confirm they are correct, as this will help us make the best match for your requirements. The next screen will lead you to the payment process to finalize the connection.
          </p>
        </div>

        <div className="p-6 bg-gray-100 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition-colors font-medium"
          >
            Edit
          </button>
          <button
            onClick={() => {
              console.log('Submitting request:', { selectedCountry, state, city, ...formData })
              onClose()
            }}
            className="px-6 py-2 bg-[#133B5D] text-white rounded-full hover:bg-[#0f2d47] transition-colors font-medium"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  )
}