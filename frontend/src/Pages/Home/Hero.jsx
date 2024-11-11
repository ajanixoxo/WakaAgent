import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { updateInputValue } from '../../store/action'
import ArrowLeftRight from "/assets/images/logo/arrow-left-right.png"
import NG from '/assets/images/logo/naija.png'
import PreviewRequestModal from '../../Components/Preview-Request'

export default function Hero() {
  const [selectedCountry, setSelectedCountry] = useState('Nigeria')
  const [showRentalOptions, setShowRentalOptions] = useState(false)
  const [rentalType, setRentalType] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [area, setArea] = useState('')
  const [formData, setFormData] = useState({
    use: '',
    maxPrice: '',
    minPrice: '',
    propertyType: '',
    bedroomCount: '',
    bathroomCount: '',
    leaseType: '',
    preferredFloor: '',
    furnishing: '',
    businessType: '',
    size: '',
    locationProximity: '',
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value)
  }

  const handleAddRentalChoice = () => {
    setShowRentalOptions(!showRentalOptions)
  }

  const selectRentalType = (type) => {
    setRentalType(type)
    setFormData(prevData => ({
      ...prevData,
      use: type
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const allData = {
      country: selectedCountry,
      state,
      city,
      rentalType,
      ...formData
    }
    setIsModalOpen(true)
    console.log('All form data:', allData)
    // Here you would typically send this data to your backend
    // For example: sendToBackend(allData)
  }

  return (
    <div className="hero w-full flex items-start justify-center h-max lg:h-full bg-center bg-cover" id="hero">
      <div className="m-4 grid place-items-center gap-10">
        <div className="grid gap-4">
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            Find Your Ideal Rental, Stress-Free.
          </h1>
          <p className="text-[16px] md:text-[20px] font-medium text-gray-200">
            Simplify Your Rental Search with Agentwaka—Just ₦2,000!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid w-[100%] content-center lg:w-[100%] lg:ml-[40%] p-1 md:p-4">
          <div className="bg-[#133B5D] lg:w-[10%] px-4 p-1 md:p-2 text-center text-white font-bold">Rent</div>
          <div className="grid gap-4 bg-[#ffffff9a] p-2 md:p-4 lg:w-[60%]">
            <div className="flex justify-between gap-5 w-full items-center">
              <button
                type="button"
                className={`p-2 flex justify-center items-center gap-2 hover:bg-sky-700 hover:text-white ${rentalType === 'Residential' ? 'bg-sky-700 text-white' : 'bg-[#133B5D] text-gray-200 font-light'}`}
                onClick={() => selectRentalType('Residential')}
              >
                <input type="radio" checked={formData.use === 'Residential'} onChange={() => selectRentalType('Residential')} /> Residential
              </button>
              <p><img src={ArrowLeftRight} className="w-12" alt="Arrow" /></p>
              <button
                type="button"
                className={`p-2 flex justify-center items-center gap-2 hover:bg-sky-700 hover:text-white ${rentalType === 'Commercial' ? 'bg-sky-700 text-gray-200' : 'bg-[#133B5D] text-gray-200 font-light'}`}
                onClick={() => selectRentalType('Commercial')}
              >
                <input type="radio" checked={formData.use === 'Commercial'} onChange={() => selectRentalType('Commercial')} /> Commercial
              </button>
            </div>
            <div className="flex flex-col w-[100%] justify-center items-center md:w-full gap-5">
              <div className="flex justify-between border bg-white outline-sky-500 gap-2 items-center px-2 w-[100%] lg:w-[90%]">
                <input
                  list="countries"
                  id="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  placeholder="Select a country"
                  readOnly
                  className="w-max lg:w-[250px] p-2 focus:outline-none"
                />
                <img src={NG} alt="Nigeria Flag" className="w-4 h-4" />
              </div>
              <div className="flex gap-5 items-center justify-center w-[100%] lg:w-[90%] h-10">
                <div className="lg:w-full">
                  <input 
                    type="text" 
                    placeholder='State' 
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full p-2 focus:outline-none focus:bg-sky-100"
                    required
                  />
                </div>
                <div className="lg:w-full">
                  <input 
                    type="text" 
                    placeholder='City' 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2 focus:bg-sky-100 focus:outline-none" 
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between border bg-white outline-sky-500 gap-2 items-center px-2 w-[100%] lg:w-[90%]">
                  <input 
                    type="text" 
                    placeholder='Preferred Area' 
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full lg:w-[80%] p-2 focus:outline-none focus:bg-sky-100"
                    required
                  />
                </div>
              <PreviewRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        selectedCountry={selectedCountry}
        state={state}
        city={city}
      />
              {rentalType && (
                <div className="w-full mt-4 p-4 flex flex-col mx-auto gap-4">
                  <div className="flex flex-col lg:flex-row gap-2 w-full">
                    <div className="w-full">
                      <h3 className="font-bold">Maximum Price</h3>
                      <select 
                        name="maxPrice" 
                        value={formData.maxPrice} 
                        onChange={handleInputChange} 
                        className="p-2 border w-full"
                        required
                      >
                        <option value="" >Select Minimum Price</option>
                        <option value="100000">100,000</option>
                        <option value="150000">150,000</option>
                        <option value="250000">250,000</option>
                        <option value="350000">350,000</option>
                        <option value="450000">450,000</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <h3 className="font-bold">Select Maximum Price</h3>
                      <select 
                        name="minPrice" 
                        value={formData.minPrice} 
                        onChange={handleInputChange} 
                        className="p-2 border w-full"
                        required
                      >
                        <option value="">Select Max Price</option>
                        <option value="550000">550,000</option>
                        <option value="600000">600,000</option>
                        <option value="1000000">1,000,000</option>
                        <option value="5000000">5,000,000</option>
                        <option value="10000000">10,000,000</option>
                      </select>
                    </div>
                  </div>

                  {rentalType === 'Residential' && (
                    <>
                      <div className="flex flex-col lg:flex-row gap-2 w-full">
                        <div className="w-full">
                          <h3 className="font-bold">Property Type</h3>
                          <select 
                            name="propertyType" 
                            value={formData.propertyType} 
                            onChange={handleInputChange} 
                            className="p-2 border w-full"
                            required
                          >
                            <option value="">Select Property Type</option>
                            <option value="flat">Flat & Apartment</option>
                            <option value="bungalow">Semi detached bungalow</option>
                            <option value="duplex">Semi detached duplex</option>
                            <option value="self_contain">Self Contain</option>
                            <option value="single_room">Single Room</option>
                            <option value="student_apartment">Student Apartment</option>
                            <option value="hostel">Hostel Space</option>
                            <option value="detached_duplex">Detached duplex</option>
                            <option value="terraced_bungalow">Terraced Bungalow</option>
                            <option value="terraced_duplex">Terraced duplex</option>
                          </select>
                        </div>
                        <div className="w-full">
                          <h3 className="font-bold">Bedroom Count</h3>
                          <select 
                            name="bedroomCount" 
                            value={formData.bedroomCount} 
                            onChange={handleInputChange} 
                            className="p-2 border w-full"
                            required
                          >
                            <option value="">Select Bedroom Count</option>
                            <option value="1">1 Bedroom</option>
                            <option value="2">2 Bedrooms</option>
                            <option value="3">3 Bedrooms</option>
                            <option value="4">4 Bedrooms</option>
                            <option value="5">5 Bedrooms</option>
                            <option value="6">6 Bedrooms</option>
                            <option value="7">7 Bedrooms</option>
                            <option value="8+">8+ Bedrooms</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 w-full">
                        <div className="w-full">
                          <h3 className="font-bold">Bathroom</h3>
                          <select 
                            name="bathroomCount" 
                            value={formData.bathroomCount} 
                            onChange={handleInputChange} 
                            className="p-2 border w-full"
                            requ
                          >
                            <option value="">Select Bathroom Count</option>
                            <option value="1">1 bathroom</option>
                            <option value="2">2 bathrooms</option>
                            <option value="3">3 bathrooms</option>
                            <option value="4">4 bathrooms</option>
                            <option value="5">5 bathrooms</option>
                            <option value="6+">6+ bathrooms</option>
                          </select>
                        </div>
                        <div className="w-full">
                          <h3 className="font-bold">Lease Type</h3>
                          <select 
                            name="leaseType" 
                            value={formData.leaseType} 
                            onChange={handleInputChange} 
                            className="p-2 border w-full"
                          >
                            <option value="">Select Lease Type</option>
                            <option value="short_term">Short-term/monthly</option>
                            <option value="long_term">Long-term/yearly</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {rentalType === 'Commercial' && (
                    <>
                      <div className="flex flex-col lg:flex-row gap-2 w-full">
                        <div className="w-full">
                          <h3 className="font-bold">Property Type</h3>
                          <select 
                            name="propertyType" 
                            value={formData.propertyType} 
                            onChange={handleInputChange} 
                            className="p-2 border w-full"
                          >
                            <option value="">Select Property Type</option>
                            <option value="shop">Shop</option>
                            <option value="warehouse">Warehouse</option>
                            <option value="office">Office Space</option>
                            <option value="restaurant">Restaurant/Cafe Space</option>
                            <option value="retail">Retail Space</option>
                            <option value="industrial">Industrial</option>
                            <option value="coworking">Co-working Space</option>
                          </select>
                        </div>
                        <div className="w-full">
                          <h3 className="font-bold">Business Type</h3>
                          <select 
                            name="businessType" 
                            value={formData.businessType} 
                            onChange={handleInputChange} 
                            className="p-2 border w-full"
                          >
                            <option value="">Select Business Type</option>
                            <option value="clothing">Clothing Business</option>
                            <option value="food">Food Business</option>
                            <option value="electronics">Electronics</option>
                            <option value="retail">Retail</option>
                            <option value="office">Office</option>
                            <option value="storage">Storage</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="health">Health & Wellness (e.g gym)</option>
                            <option value="education">Education/Training</option>
                            <option value="other">Others</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 w-full">
                        <div className="w-full">
                          <h3 className="font-bold">Size</h3>
                          <select 
                            name="size" 
                            value={formData.size} 
                            onChange={handleInputChange} 
                            className="p-2 border w-full"
                          >
                            <option value="">Select Size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="custom">Custom Square Footage</option>
                          </select>
                        </div>
                        <div className="w-full">
                          <h3 className="font-bold">Location Proximity</h3>
                          <select 
                            name="locationProximity" 
                            value={formData.locationProximity} 
                            onChange={handleInputChange} 
                            className="p-2 border w-full"
                          >
                            <option value="">Select Location Proximity</option>
                            <option value="high_traffic">High Traffic Area</option>
                            <option value="business_district">Near Business District</option>
                            <option value="market">Near Market</option>
                            <option value="school">Near School</option>
                            <option value="hospital">Near Hospital</option>
                            <option value="mall">Near Mall/Shopping Complex</option>
                            <option value="transport">Near Transport Hub</option>
                            <option value="city_center">Near City Center</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex flex-col lg:flex-row gap-2 w-full">
                    <div className="w-full">
                      <h3 className="font-bold">Preferred Floor</h3>
                      <select 
                        name="preferredFloor" 
                        value={formData.preferredFloor} 
                        onChange={handleInputChange} 
                        className="p-2 border w-full"
                      >
                        <option value="">Select Preferred Floor</option>
                        <option value="high">High Floor</option>
                        <option value="mid">Mid Floor</option>
                        <option value="ground">Ground Floor</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <h3 className="font-bold">Furnishing</h3>
                      <select 
                        name="furnishing" 
                        value={formData.furnishing} 
                        onChange={handleInputChange} 
                        className="p-2 border w-full"
                      >
                        <option value="">Select Furnishing</option>
                        <option value="fully">Fully Furnished</option>
                        <option value="partly">Partly Furnished</option>
                        <option value="not">Not Furnished</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex w-full justify-between items-center">
                <div onClick={handleAddRentalChoice} className="text-xs md:text-base rounded-3xl bg-[#133B5D] hover:bg-sky-800 w-[100px] text-center text-white p-2 font-normal cursor-pointer">
                  More
                </div>
                <button
          type="submit"
          className=" px-4 py-2 bg-[#133B5D] text-xs md:text-base  text-white rounded-3xl hover:bg-[#0f2d47]"
        onClick={() => {

        }}>
          Preview Request
        </button>

                <button type="submit" className="rounded-3xl text-xs md:text-base bg-[#133B5D] hover:bg-sky-800 text-white p-2 px-3 font-normal">
                  Request Agent
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}