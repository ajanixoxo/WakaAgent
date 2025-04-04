import{ useState } from 'react'
import { useDispatch } from 'react-redux'

import { useAuthStore } from "../../store/authStore";
import { Loader } from 'lucide-react';
import {requestMatching } from '../../store/requests.m.Store'
import ArrowLeftRight from "/assets/images/logo/arrow-left-right.png"
import NG from '/assets/images/logo/naija.png'
import PreviewRequestModal from '../../Components/Preview-Request'
import {  useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import NoAgentModal from './Modal';
export default function Hero() {
  const [selectedCountry, setSelectedCountry] = useState('Nigeria')
  const [showRentalOptions, setShowRentalOptions] = useState(false)
  const [rentalType, setRentalType] = useState('')
  const [stateOrCity, setStateOrCity] = useState('');
  const { agent, user } = useAuthStore();
  const navigate = useNavigate();
  // const [city, setCity] = useState('')
  const [area, setArea] = useState('')
  const statesAndCities = [
    { state: "Abia", capital: "Umuahia" },
    { state: "Adamawa", capital: "Yola" },
    { state: "Akwa Ibom", capital: "Uyo" },
    { state: "Anambra", capital: "Awka" },
    { state: "Bauchi", capital: "Bauchi" },
    { state: "Bayelsa", capital: "Yenagoa" },
    { state: "Benue", capital: "Makurdi" },
    { state: "Borno", capital: "Maiduguri" },
    { state: "Cross River", capital: "Calabar" },
    { state: "Delta", capital: "Asaba" },
    { state: "Ebonyi", capital: "Abakaliki" },
    { state: "Edo", capital: "Benin City" },
    { state: "Ekiti", capital: "Ado-Ekiti" },
    { state: "Enugu", capital: "Enugu" },
    { state: "Gombe", capital: "Gombe" },
    { state: "Imo", capital: "Owerri" },
    { state: "Jigawa", capital: "Dutse" },
    { state: "Kaduna", capital: "Kaduna" },
    { state: "Kano", capital: "Kano" },
    { state: "Katsina", capital: "Katsina" },
    { state: "Kebbi", capital: "Birnin Kebbi" },
    { state: "Kogi", capital: "Lokoja" },
    { state: "Kwara", capital: "Ilorin" },
    { state: "Lagos", capital: "Ikeja" },
    { state: "Nasarawa", capital: "Lafia" },
    { state: "Niger", capital: "Minna" },
    { state: "Ogun", capital: "Abeokuta" },
    { state: "Ondo", capital: "Akure" },
    { state: "Osun", capital: "Oshogbo" },
    { state: "Oyo", capital: "Ibadan" },
    { state: "Plateau", capital: "Jos" },
    { state: "Rivers", capital: "Port Harcourt" },
    { state: "Sokoto", capital: "Sokoto" },
    { state: "Taraba", capital: "Jalingo" },
    { state: "Yobe", capital: "Damaturu" },
    { state: "Zamfara", capital: "Gusau" },
    {
      state: "Federal Capital Territory",
      capital: "Abuja",
      areas: [
        "Wuse Zone 1", "Wuse Zone 2", "Wuse Zone 3", "Wuse Zone 4", "Wuse Zone 5", "Wuse Zone 6",
        "Garki Area 1", "Garki Area 2", "Garki Area 3", "Garki Area 7", "Garki Area 8", "Garki Area 10", "Garki Area 11",
        "Asokoro", "Maitama", "Central Area", "Utako", "Jabi", "Gwarimpa", "Kado", "Kubwa", "Lugbe", "Dawaki",
        "Lokogoma", "Karu", "Nyanya", "Galadimawa", "Jahi", "Mpape", "Apo", "Life Camp", "Kaura", "Guzape", "Karmo",
        "Durumi", "Dakibiyu", "Wuye", "Idu", "Katampe", "Jikoyi", "Karimu", "Mabushi", "Gwagwalada", "Bwari", "Kuje",
        "Gosa", "Sabon Lugbe", "Gidan Mangoro", "Chika", "Apo Resettlement", "Pyakassa", "Dape", "Byazhin", "Sauka",
        "Saburi", "Pegi", "Dei Dei", "Idu Industrial Area", "Shagari Quarters", "Tungan Maje", "Dutse Alhaji", "Karu Site",
        "Apo Mechanic Village", "Masaka", "Giri", "Garki Village", "War College", "Police Quarters", "Games Village",
        "Aviation Village", "Arab Road", "One Man Village", "Piwoyi", "Suleja", "Zuba", "Tungan Madaki", "Bwari Town",
        "Gosa Village", "Sheka", "Gwagwa", "Kugbo", "Kagini", "Efab Estate", "Sunnyvale Estate", "Trademore Estate",
        "Bricks City", "Sabon Gari", "Kuje Village", "Kaduna Road", "Anagada", "Madalla", "Jiwa", "Sabon Wuse",
        "Yangoji", "Paiko Kore", "Abaji", "Rubochi", "Waru", "Wasa", "Gwagwa Estate"
      ]
    },
  ];
  const [formData, setFormData] = useState({
    use: '',
    price: '',
    propertyType: '',
    bedroomCount: '',
    bathroomCount: '',
    leaseType: '',
    preferredFloor: '',
    furnishing: '',
    businessType: '',
    size: '',
    locationProximity: '',
    accessibility: '',
    extraFeatures: '',
    outdoorSpace: '',
    nearbyFacilities: '',
    petPolicy: '',
    rentalFrequency: '',
    viewOptions: '',
    technology: '',
    noiseLevel: '',
    squareFootage: '',
    buildingClass: '',
    layoutOptions: '',
    zoningType: '',
    utilitiesIncluded: '',
    parkingSpecifications: '',
    securityFeatures: '',
    leaseTerms: '',
    technologyInfrastructure: '',
 
    additionalAmenities: '',
    businessSuitability: '',
    nearbyLandmarks: '',
    leaseIncentives: '',
  })
  const selectedState = statesAndCities.find((item) => item.state === stateOrCity || item.capital === stateOrCity);

  const [areaOptions, setAreaOptions] = useState(selectedState?.areas || []);

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
  const handleModal = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
    console.log("reached")
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
const {request, isLoading, isModal} =  requestMatching()
const handleSubmit = async (e) => {
  e.preventDefault();

  // Check if the user or agent is logged in
  if (!user && !agent) {
    toast.error("Please log in to make a request.");
    navigate("/login"); // Redirect to the login page
    return;
  }
   if(agent) {
    toast.error("Agent are not allowed to make request.");
    
  } 

  const filteredFormData = Object.entries({
    userId: user._id,
    country: selectedCountry,
    stateOrCity,
    area,
    rentalType,
    ...formData,
  }).reduce((acc, [key, value]) => {
    if (value && value.trim() !== "") acc[key] = value;
    return acc;
  }, {});

  try {
    // Call the request function from the store
    await request(filteredFormData);
    toast.success("Request sent successfully");

    // Redirect based on user type
    if (user) {
      navigate("/user-dashboard"); // Redirect to user dashboard
    } 
  } catch (error) {
    console.error("Error submitting request:", error);
    // toast.error("Failed to send request");
  }
};

  return (
    <div className="hero w-full flex items-start justify-center h-max lg:h-full bg-center bg-cover" id="hero">
      <div className="m-4 grid place-items-center gap-10">
        <div className="grid place-items-center gap-4">
          <h1 className="text-3xl md:text-6xl  lg:w-1/2 font-bold text-white">
          Get Connected with Trusted Rental Agents for Just ₦2,000!
          </h1>
          <p className="text-[14px] md:text-[20px] lg:w-1/2 font-medium text-gray-200">
          Simply describe your rental preferences, and we'll match you with a reliable agent tailored to your needs.    
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-[100%] lg:w-[100%] mx-auto p-1 md:p-4">
          <div className="bg-[#133B5D] lg:w-[10%] px-4 p-1 md:p-2 text-center text-white font-bold">Rent</div>
          <div className="grid gap-4 bg-[#ffffff9a] p-2 md:p-4 lg:w-[40%]">
          {/* <div className="bg-[#133B5D] lg:w-[10%] px-4 p-1 md:p-2 text-center text-white font-bold">Rent</div> */}

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
                <input type="hidden" value={user && user._id} />
                <img src={NG} alt="Nigeria Flag" className="w-4 h-4" />
              </div>
              <div className="flex gap-5 items-center justify-center w-[100%] lg:w-[90%] h-10">
                <div className="lg:w-full">
                  {/* State or City Selection */}
                  <select
                    value={stateOrCity}
                    onChange={(e) => {
                      const selectedState = statesAndCities.find(
                        (item) => item.state === e.target.value || item.capital === e.target.value
                      );
                      setStateOrCity(e.target.value);
                      setAreaOptions(selectedState?.areas || []);
                    }}
                    className="w-full p-2 focus:outline-none focus:bg-sky-100"
                    required
                  >
                    <option value="" disabled>Select State </option>
                    <optgroup label="States">
                      {statesAndCities.map((item) => (
                        <option key={item.state} value={item.state}>
                          {item.state}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Cities">
                      {statesAndCities.map((item) => (
                        <option key={item.capital} value={item.capital}>
                          {item.capital}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="lg:w-full">
                  {/* Area Input with Predefined Options */}
                  <input
                    list="areas"
                    placeholder="Type or select an area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full p-2 focus:bg-sky-100 focus:outline-none"
                    required
                  />
                  <datalist id="areas">
                    {areaOptions.map((area, index) => (
                      <option key={index} value={area}  onChange={(e) => setArea(e.target.value)}>
                        {area}
                      </option>
                    ))}
                  </datalist>
                </div>
              </div>
{isModal && (
  <NoAgentModal />
)}

              {/* <div className="flex justify-between border bg-white outline-sky-500 gap-2 items-center px-2 w-[100%] lg:w-[90%]">
                  <input 
                    type="text" 
                    placeholder='Preferred Area' 
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full lg:w-[80%] p-2 focus:outline-none focus:bg-sky-100"
                    required
                  />
                </div> */}
              <PreviewRequestModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                formData={formData}
                selectedCountry={selectedCountry}
                state={stateOrCity}
                area={area}
              // city={city}
              />
              {rentalType && (
                <div className="w-full mt-4 p-4 flex flex-col mx-auto gap-4">
                  <div className="flex flex-col lg:flex-row gap-2 w-full">

                    <div className="w-full">
                      <h3 className="font-bold">Select Rental budget</h3>
                      <select
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                        required
                      >
                        <option value="">Select Rental budget</option>
                        <option value="100000">100,000</option>
                        <option value="150000">150,000</option>
                        <option value="200000">200,000</option>
                        <option value="250000">250,000</option>
                        <option value="300000">300,000</option>
                        <option value="350000">350,000</option>
                        <option value="400000">400,000</option>
                        <option value="450000">450,000</option>
                        <option value="500000">500,000</option>
                        <option value="550000">550,000</option>
                        <option value="600000">600,000</option>
                        <option value="600000">650,000</option>
                        <option value="600000">700,000</option>
                        <option value="600000">750,000</option>
                        <option value="600000">800,000</option>
                        <option value="600000">900,000</option>
                        <option value="600000">950,000</option>
                        <option value="1000000">1,000,000</option>
                        <option value="2000000">2,000,000</option>
                        <option value="30000000">3,000,000</option>
                        <option value="40000000">4,000,000</option>
                        <option value="50000000">5,000,000</option>
                        <option value="60000000">6,000,000</option>
                        <option value="70000000">7,000,000</option>
                        <option value="80000000">8,000,000</option>
                        <option value="90000000">9,000,000</option>
                        <option value="100000000">10,000,000</option>
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

                  {showRentalOptions && (
                    <div className="mt-4 p-4 bg-gray-100 border  grid gap-4 w-full">
                      <h1 className="font-semibold text-2xl">Advanced Features</h1>
                      {rentalType === 'Residential' && (
                        <>
                          {/* Residential Options */}
                          <div className="grid gap-4">
                            <div className="flex flex-col lg:flex-row gap-2 w-full">
                              <div className="w-full">
                                <h3 className="font-bold">Floor Level</h3>
                                <select className="p-2 border w-full lg:w-[70%]">
                                  <option value="ground_floor">Ground Floor</option>
                                  <option value="middle_floor">Middle Floor</option>
                                  <option value="penthouse">Pent House</option>
                                </select>
                              </div>
                              <div className="w-full">
                                <h3 className="font-bold">Property Condition</h3>
                                <select className="p-2 border w-full lg:w-[70%]">
                                  <option value="newly_built">Newly Built</option>
                                  <option value="renovated">Renovated</option>
                                  <option value="old_building">Old Building</option>
                                </select>
                              </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-2 w-full">
                              <div className="w-full">
                                <h3 className="font-bold">Accessibility</h3>
                                <select className="p-2 border w-full lg:w-[70%]"
                                  name="accesibility"
                                  value={formData.accessibility}
                                  onChange={handleInputChange}>
                                  <option value="wheelchair_accessible">Wheelchair Accessible</option>
                                  <option value="near_public_transport">Near Public Transportation</option>
                                  <option value="good_road">Good Road Condition</option>
                                </select>
                              </div>
                              <div className="w-full">
                                <h3 className="font-bold">Extra Features</h3>
                                <select className="p-2 border w-full lg:w-[70%]"
                                  name="extraFeatures"
                                  value={formData.extraFeatures}
                                  onChange={handleInputChange}>
                                  <option value="balcony">Balcony</option>
                                  <option value="garden">Garden</option>
                                  <option value="swimming_pool">Swimming Pool</option>
                                  <option value="gym">Gym</option>
                                  <option value="laundry_service">Laundry Service</option>
                                </select>
                              </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-2 w-full">
                              <div className="w-full">
                                <h3 className="font-bold">Outdoor Space</h3>
                                <select className="p-2 border w-full lg:w-[70%]"
                                  name="outdoorSpace"
                                  value={formData.outdoorSpace}
                                  onChange={handleInputChange}>
                                  <option value="yard">Yard</option>
                                  <option value="terrace">Terrace</option>
                                  <option value="rooftop_access">Rooftop Access</option>
                                  <option value="patio">Patio</option>
                                </select>
                              </div>
                              <div className="w-full">
                                <h3 className="font-bold">Nearby Facilities</h3>
                                <select className="p-2 border w-full lg:w-[70%]"
                                  name="nearbyFacilities"
                                  value={formData.nearbyFacilities}
                                  onChange={handleInputChange}>
                                  <option value="schools">Proximity to Schools</option>
                                  <option value="hospitals">Proximity to Hospitals</option>
                                  <option value="shopping_centers">Near Shopping Centers</option>
                                  <option value="parks">Near Parks</option>
                                  <option value="public_transport">Near Public Transport</option>
                                </select>
                              </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-2 w-full">
                              <div className="w-full">
                                <h3 className="font-bold">Pet Policy</h3>
                                <select className="p-2 border w-full lg:w-[70%]"
                                  name="petPolicy"
                                  value={formData.petPolicy}
                                  onChange={handleInputChange}>
                                  <option value="pet_friendly">Pet-Friendly</option>
                                  <option value="no_pets_allowed">No Pets Allowed</option>
                                </select>
                              </div>
                              <div className="w-full">
                                <h3 className="font-bold">Rental Frequency</h3>
                                <select className="p-2 border w-full lg:w-[70%]"
                                  name="rentalFrequency"
                                  value={formData.rentalFrequency}
                                  onChange={handleInputChange}>
                                  <option value="monthly">Monthly</option>
                                  <option value="yearly">Yearly</option>
                                  <option value="short_term">Short-Term</option>
                                  <option value="long_term">Long-Term</option>
                                </select>
                              </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-2 w-full">
                              <div className="w-full">
                                <h3 className="font-bold">View Options</h3>
                                <select className="p-2 border w-full lg:w-[70%]"
                                  name="viewOptions"
                                  value={formData.viewOptions}
                                  onChange={handleInputChange}>
                                  <option value="city_view">City View</option>
                                  <option value="garden_view">Garden View</option>
                                  <option value="mountain_view">Mountain View</option>
                                  <option value="water_view">Water View</option>
                                </select>
                              </div>
                              <div className="w-full">
                                <h3 className="font-bold">Technology</h3>
                                <select className="p-2 border w-full lg:w-[70%]"
                                  name="technology"
                                  value={formData.technology}
                                  onChange={handleInputChange}>
                                  <option value="smart_home_features">Smart Home Features</option>
                                  <option value="wifi_available">Wi-Fi Availability</option>
                                  <option value="home_automation">Home Automation</option>
                                </select>
                              </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-2 w-full">
                              <div className="w-full">
                                <h3 className="font-bold">Noise Level</h3>
                                <select className="p-2 border w-full lg:w-[70%]"
                                  name="noiseLevel"
                                  value={formData.noiseLevel}
                                  onChange={handleInputChange}>
                                  <option value="soundproofing">Soundproofing</option>
                                  <option value="low_noise_area">Low-Noise Area</option>
                                  <option value="quiet_hours">Quiet Hours in Community</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {rentalType === 'Commercial' && (
                        <>
                          {/* Commercial Options */}
                          <div className="flex flex-col lg:flex-row gap-2 w-full">
                            <div className="w-full">
                              <h3 className="font-bold">Square Footage</h3>
                              <select name="squareFootage" value={formData.squareFootage} onChange={handleInputChange} className="p-2 border w-full">
                                <option value="">Select Square Footage</option>
                                <option value="500">Up to 500 sq ft</option>
                                <option value="1000">500 - 1000 sq ft</option>
                                <option value="2000">1000 - 2000 sq ft</option>
                                <option value="5000">2000 - 5000 sq ft</option>
                                <option value="5000+">5000+ sq ft</option>
                              </select>
                            </div>
                            <div className="w-full">
                              <h3 className="font-bold">Zoning Type</h3>
                              <select name="zoningType" value={formData.zoningType} onChange={handleInputChange} className="p-2 border w-full">
                                <option value="">Select Zoning Type</option>
                                <option value="commercial">Commercial</option>
                                <option value="industrial">Industrial</option>
                                <option value="mixed_use">Mixed-Use</option>
                                <option value="retail">Retail</option>
                              </select>
                            </div>
                          </div>

                        

                          <div className="flex flex-col lg:flex-row gap-2 w-full">
                            <div className="w-full">
                              <h3 className="font-bold">Utilities Included</h3>
                              <select name="utilitiesIncluded" value={formData.utilitiesIncluded} onChange={handleInputChange} className="p-2 border w-full">
                                <option value="">Select Utilities</option>
                                <option value="electricity">Electricity</option>
                                <option value="water">Water</option>
                                <option value="internet">Internet</option>
                                <option value="hvac">HVAC</option>
                                <option value="All">All</option>
                              </select>
                            </div>
                            <div className="w-full">
                              <h3 className="font-bold">Security Features</h3>
                              <select name="securityFeatures" value={formData.securityFeatures} onChange={handleInputChange} className="p-2 border w-full">
                                <option value="">Select Security Features</option>
                                <option value="cctv">CCTV Surveillance</option>
                                <option value="security_personnel">24/7 Security Personnel</option>
                                <option value="alarm_system">Alarm System</option>
                              </select>
                            </div>
                         
                          </div>

                          <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="w-full">
                              <h3 className="font-bold">Technology Infrastructure</h3>
                              <select name="technologyInfrastructure" value={formData.technologyInfrastructure} onChange={handleInputChange} className="p-2 border w-full">
                                <option value="">Select Technology</option>
                                <option value="fiber_optic">Fiber Optic Connectivity</option>
                                <option value="teleconferencing">Teleconferencing Facilities</option>
                                <option value="it_support">IT Support</option>
                              </select>
                            </div>
                            <div className="w-full">
                              <h3 className="font-bold">Lease Terms</h3>
                              <select name="leaseTerms" value={formData.leaseTerms} onChange={handleInputChange} className="p-2 border w-full">
                                <option value="">Select Lease Terms</option>
                                <option value="long_term">Long-Term Lease</option>
                                <option value="short_term">Short-Term Lease</option>
                                <option value="month_to_month">Month-to-Month</option>
                                <option value="option_to_buy">Option to Buy</option>
                              </select>
                            </div>
                          </div>

                        



                          <div className="flex flex-col lg:flex-row gap-2 w-full">
                            <div className="w-full">
                              <h3 className="font-bold">Business Suitability</h3>
                              <select name="businessSuitability" value={formData.businessSuitability} onChange={handleInputChange} className="p-2 border w-full">
                                <option value="">Select Business Suitability</option>
                                <option value="restaurant">Suitable for Restaurants</option>
                                <option value="gym">Suitable for Gyms</option>
                                <option value="medical_office">Suitable for Medical Offices</option>
                                <option value="manufacturing">Suitable for Manufacturing</option>
                              </select>
                            </div>
                            <div className="w-full">
                              <h3 className="font-bold">Nearby Landmarks</h3>
                              <select name="nearbyLandmarks" value={formData.nearbyLandmarks} onChange={handleInputChange} className="p-2 border w-full">
                                <option value="">Select Landmarks</option>
                                <option value="business_district">Near Business District</option>
                                <option value="airport">Near Airport</option>
                                <option value="train_station">Near Train Station</option>
                                <option value="major_highway">Near Major Highway</option>
                              </select>
                            </div>
                          </div>


                        </>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="flex w-full justify-between items-center">
                <div onClick={handleAddRentalChoice} className="text-xs md:text-base rounded-3xl bg-[#133B5D] hover:bg-sky-800 w-[100px] text-center text-white p-2 font-normal cursor-pointer">
                  More
                </div>
                <button  
                  className=" px-4 py-2 bg-[#133B5D] text-xs md:text-base  text-white rounded-3xl hover:bg-[#0f2d47]"
                  onClick={handleModal}>
                  Preview Request
                </button>

                <button type="submit" className="rounded-3xl text-xs md:text-base bg-[#133B5D] hover:bg-sky-800 text-white p-2 px-3 font-normal"
                disabled={isLoading}>
                 {isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Request Agent"}

                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}