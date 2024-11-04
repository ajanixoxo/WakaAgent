import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GetAreaState } from './../../store/GetArea';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { updateInputValue } from '../../store/action';
import ArrowLeftRight from "/assets/images/logo/arrow-left-right.png"
import NG from '/assets/images/logo/naija.png'


function Hero() {
  const [selectedCountry, setSelectedCountry] = useState('Nigeria');
  const [showRentalOptions, setShowRentalOptions] = useState(false); // Add state to toggle rental options visibility
  const selectedTitle = useSelector((state) => state.selectedTitle);
  const [rentalType, setRentalType] = useState(''); // State to track rental type selection
  // const title = useSelector((state) => state.title);  // Access the current input value from Redux
  const dispatch = useDispatch();

  const [preferences, setPreferences] = useState({
    waterSupply: false,
    powerSupply: false,
    securityFeatures: false,
    parkingSpace: false,
    internetAccess: false,
    airConditioning: false,
    proximitySchools: false,
    proximityCityCenter: false,
    shortTermLease: false,
    longTermLease: false,
    wheelchairAccessible: false,
    nearPublicTransport: false,
    tarredRoad: false,
    balcony: false,
    garden: false,
    swimmingPool: false,
    gym: false,
    laundryService: false,
    groundFloor: false,
    middleFloor: false,
    topFloor: false,
    petFriendly: false,
  });
  console.log(selectedTitle)
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(preferences);
    // Add form submission logic here
  };

  const stateChange = (e) => {
    dispatch(updateInputValue(e.target.value));


  };
  const handleRenterTypeChange = (type) => {
    setRenterType(type);
  };


  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleAddRentalChoice = () => {
    setShowRentalOptions(!showRentalOptions); // Toggle visibility of rental options
  };
  const selectRentalType = (type) => {
    setRentalType(type);
  };


  return (

    <div className="hero w-full flex items-start justify-center  h-max lg:h-full  bg-center bg-cover" id="hero"
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out">
      <div className="m-4 grid place-items-center gap-10"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
        <div className="grid gap-4">
          <h1 className="text-3xl md:text-6xl font-bold text-white" >
            Find Your Ideal Rental, Stress-Free.
          </h1>
          <p className="text-[16px] md:text-[20px] font-medium  text-gray-200">
            Simplify Your Rental Search with Agentwaka—Just ₦2,000!
          </p>
        </div>
        <form className="grid w-[100%]  content-center lg:w-[100%] lg:ml-[40%] p-1 md:p-4 ">
          <div className="bg-[#133B5D]  lg:w-[10%]  px-4 p-1 md:p-2 text-center text-white font-bold">Rent</div>
          <div className="grid gap-4 bg-[#ffffff9a]   p-2 md:p-4 lg:w-[60%] ">
            <div className="flex  justify-between gap-5  w-full items-center">
              <button
                type="button"
                className={`p-2  hover:bg-sky-700 hover:text-white  ${rentalType === 'Residential' ? 'bg-sky-700 text-white' : 'bg-[#133B5D] text-gray-200 font-light'}`}
                onClick={() => selectRentalType('Residential')}
              >
             <input type="radio" onClick={() => selectRentalType('Residential')} />   Residential 
              </button>
              <p><img src={ArrowLeftRight} className="w-12" /></p>
              <button
                type="button"
                className={`p-2  hover:bg-sky-700 hover:text-white ${rentalType === 'Commercial' ? 'bg-sky-700 text-gray-200' : 'bg-[#133B5D]  text-gray-200 font-light'}`}
                onClick={() => selectRentalType('Commercial')}
              >
                <input type="radio" onClick={() => selectRentalType('Commercial')} /> Commercial 
                
              </button>

            </div>
            <div className="flex flex-col w-[100%]  justify-center items-center md:w-full  gap-10">
              <div className="  flex justify-center border bg-white  outline-sky-500 gap-2 items-center w-[100%] lg:w-[60%]  ">
                <input
                  list="countries"
                  id="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  placeholder="Select a country"
                  readOnly
                  className="w-max lg:w-[250px] p-2 focus:outline-none "
                />
                <img src={NG} alt="" className=" w-4 h-4" />


              </div>
              <div className=" flex gap-5  items-center justify-center w-[100%] lg:w-[90%] h-10  ">
                <div className="lg:w-full">
                  <input type="text" placeholder='State/City'
                    className="w-full  p-2 focus:outline-none focus:bg-sky-100"

                  />

                </div>
                <div className="lg:w-full">
                  <input type="text" placeholder='Area ' className=" w-full p-2  focus:bg-sky-100 focus:outline-none" />


                </div>

              </div>
              
                <div className={`w-full ${rentalType && "mt-4 p-4 flex flex-col  mx-auto gap-4 w-full"}`}>
                  {rentalType === 'Residential' && (
                    <>
                      {/* Residential Options */}
                      <div className=" gap-4 flex flex-col justify-center items-center">   
                         <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="w-full">
                            <h3 className="font-bold">Maximum Price</h3>
                            <select className="p-2 border w-full lg:w-[100%]">
                              <option value="1">50,000</option>
                              <option value="2">70,000</option>
                              <option value="3">120,000</option>
                              <option value="4">150,000</option>
                              <option value="5">200,000</option>
                            </select>
                          </div>
                          <div className="w-full">
                            <h3 className="font-bold">Minimum Price</h3>
                            <select className="p-2 border w-full lg:w-[100%]">
                              <option value="">350,000</option>
                              <option value="selfcon">500,000</option>
                              <option value="office">650,000</option>
                              <option value="shop">800,0000</option>
                              <option value="flat">1,000,000</option>

                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="w-full">
                            <h3 className="font-bold">Property Type</h3>
                            <select className="p-2 border w-full lg:w-[100%]">
                              <option>Apartment</option>
                              <option>House</option>
                              <option>Flat</option>
                              <option>Duplex</option>
                              <option>Self Contained</option>
                              <option>Shared Room</option>
                            </select>
                          </div>
                          <div className="w-full">
                            <h3 className="font-bold">Bedroom Count</h3>
                            <select className="p-2 border w-full lg:w-[100%]">
                              <option>1 Bedroom</option>
                              <option>2 Bedrooms</option>
                              <option>3 Bedrooms</option>
                              <option>4+ Bedrooms</option>
                            </select>
                          </div>
                        </div>
                    
                        {/* <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Bedroom Amount</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="1">1 Bedroom</option>
                              <option value="2">2 Bedrooms</option>
                              <option value="3">3 Bedrooms</option>
                              <option value="4">4 Bedrooms</option>
                              <option value="5">5 Bedrooms</option>
                              <option value="5">7 Bedrooms</option>
                              <option value="5">8 and more Bedrooms</option>
                            </select>
                          </div>
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Type of Rental</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="apartment">Apartment</option>
                              <option value="selfcon">Self-Contained</option>
                              <option value="office">Office</option>
                              <option value="shop">Shop</option>
                              <option value="flat">Flat</option>
                              <option value="shortlet">Shortlet</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Furnishing</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="apartment">Newly Built</option>
                              <option value="selfcon">Renovated</option>
                              <option value="office">Old Building</option>

                            </select>
                          </div>
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Property Condition</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="apartment">Newly Built</option>
                              <option value="selfcon">Renovated</option>
                              <option value="office">Old Building</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Location Proximity</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="1">Proximity to key areas (e.g., schools, markets, hospitals, transport hubs)</option>
                              <option value="2">Distance from the city center
                              </option>


                            </select>
                          </div>
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Lease Duration:
                            </h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="apartment">Short-term lease (monthly)

                              </option>
                              <option value="selfcon">Long-term lease (annual)
                              </option>


                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Accessibility</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="1">Wheelchair accessible
                              </option>
                              <option value="2">Near public transportation
                              </option>
                              <option value="2">Road condition (e.g., tarred, untarred)

                              </option>


                            </select>
                          </div>
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">. Extra Features:

                            </h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="apartment">Balcony

                              </option>
                              <option value="selfcon">Garden
                              </option>
                              <option value="selfcon">Swimming pool
                              </option>
                              <option value="selfcon">Gym
                              </option>
                              <option value="selfcon">Laundry Service
                              </option>


                            </select>
                          </div>
                        </div> */}
                      </div>
                      {/* Additional Residential Options */}
                    </>
                  )}
                  {rentalType === 'Commercial' && (
                    <>
                      {/* Commercial Options */}
                      <div className="flex flex-col lg:flex-row gap-2 w-full">
                        <div className="lg:w-1/2">
                          <h3 className="font-bold">Property Type</h3>
                          <select className="p-2 border w-full lg:w-[70%]">
                            <option>Shop</option>
                            <option>Warehouse</option>
                            <option>Office</option>
                          </select>
                        </div>
                        <div className="lg:w-1/2">
                          <h3 className="font-bold">Business Type</h3>
                          <select className="p-2 border w-full lg:w-[70%]">
                            <option>Clothing</option>
                            <option>Electronics</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 w-full">
                        <div className="lg:w-1/2">
                          <h3 className="font-bold">Size</h3>
                          <select className="p-2 border w-full lg:w-[70%]">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Square Footage</option>
                          </select>
                        </div>
                        <div className="lg:w-1/2">
                          <h3 className="font-bold">Location Proximity</h3>
                          <select className="p-2 border w-full lg:w-[70%]">
                          <option value="1"> Schools</option>
              <option value="1">Markets,</option>
              <option value="1">Hospitals</option>
              <option value="1">Transport hubs</option>
              <option value="2">Distance from the city center    </option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Maximum Price</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="1">50,000</option>
                              <option value="2">70,000</option>
                              <option value="3">120,000</option>
                              <option value="4">150,000</option>
                              <option value="5">200,000</option>

                            </select>
                          </div>
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Minimum Price</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="">350,000</option>
                              <option value="selfcon">500,000</option>
                              <option value="office">650,000</option>
                              <option value="shop">800,0000</option>
                              <option value="flat">1,000,000</option>

                            </select>
                          </div>
                        </div>
                      {/* Additional Commercial Options */}
                    </>
                  )}
                </div>
              
              {showRentalOptions && (
                <div className="mt-4 p-4 bg-gray-100 border  grid gap-4 w-full">
                  {rentalType === 'Residential' && (
                    <>
                      {/* Residential Options */}
                      <div className="grid gap-4">
                        <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Property Type</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option>Apartment</option>
                              <option>House</option>
                              <option>Flat</option>
                            </select>
                          </div>
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Bedroom Count</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option>1 Bedroom</option>
                              <option>2 Bedrooms</option>
                              <option>3 Bedrooms</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Maximum Price</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="1">50,000</option>
                              <option value="2">70,000</option>
                              <option value="3">120,000</option>
                              <option value="4">150,000</option>
                              <option value="5">200,000</option>

                            </select>
                          </div>
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Minimum Price</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="">350,000</option>
                              <option value="selfcon">500,000</option>
                              <option value="office">650,000</option>
                              <option value="shop">800,0000</option>
                              <option value="flat">1,000,000</option>

                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Bedroom Amount</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="1">1 Bedroom</option>
                              <option value="2">2 Bedrooms</option>
                              <option value="3">3 Bedrooms</option>
                              <option value="4">4 Bedrooms</option>
                              <option value="5">5 Bedrooms</option>
                              <option value="5">7 Bedrooms</option>
                              <option value="5">8 and more Bedrooms</option>
                            </select>
                          </div>
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Type of Rental</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="apartment">Apartment</option>
                              <option value="selfcon">Self-Contained</option>
                              <option value="office">Office</option>
                              <option value="shop">Shop</option>
                              <option value="flat">Flat</option>
                              <option value="shortlet">Shortlet</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Furnishing</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="apartment">Newly Built</option>
                              <option value="selfcon">Renovated</option>
                              <option value="office">Old Building</option>

                            </select>
                          </div>
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Property Condition</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="apartment">Newly Built</option>
                              <option value="selfcon">Renovated</option>
                              <option value="office">Old Building</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Location Proximity</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="1">Proximity to key areas (e.g., schools, markets, hospitals, transport hubs)</option>
                              <option value="2">Distance from the city center
                              </option>


                            </select>
                          </div>
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Lease Duration:
                            </h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="apartment">Short-term lease (monthly)

                              </option>
                              <option value="selfcon">Long-term lease (annual)
                              </option>


                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Accessibility</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="1">Wheelchair accessible
                              </option>
                              <option value="2">Near public transportation
                              </option>
                              <option value="2">Road condition (e.g., tarred, untarred)

                              </option>


                            </select>
                          </div>
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">. Extra Features:

                            </h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="apartment">Balcony

                              </option>
                              <option value="selfcon">Garden
                              </option>
                              <option value="selfcon">Swimming pool
                              </option>
                              <option value="selfcon">Gym
                              </option>
                              <option value="selfcon">Laundry Service
                              </option>


                            </select>
                          </div>
                        </div>
                      </div>
                      {/* Additional Residential Options */}
                    </>
                  )}
                  {rentalType === 'Commercial' && (
                    <>
                      {/* Commercial Options */}
                      <div className="flex flex-col lg:flex-row gap-2 w-full">
                        <div className="lg:w-1/2">
                          <h3 className="font-bold">Property Type</h3>
                          <select className="p-2 border w-full lg:w-[70%]">
                            <option>Shop</option>
                            <option>Warehouse</option>
                            <option>Office</option>
                          </select>
                        </div>
                        <div className="lg:w-1/2">
                          <h3 className="font-bold">Business Type</h3>
                          <select className="p-2 border w-full lg:w-[70%]">
                            <option>Clothing</option>
                            <option>Electronics</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 w-full">
                        <div className="lg:w-1/2">
                          <h3 className="font-bold">Size</h3>
                          <select className="p-2 border w-full lg:w-[70%]">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Square Footage</option>
                          </select>
                        </div>
                        <div className="lg:w-1/2">
                          <h3 className="font-bold">Location Proximity</h3>
                          <select className="p-2 border w-full lg:w-[70%]">
                          <option value="1"> Schools</option>
              <option value="1">Markets,</option>
              <option value="1">Hospitals</option>
              <option value="1">Transport hubs</option>
              <option value="2">Distance from the city center    </option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 w-full">
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Maximum Price</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="1">50,000</option>
                              <option value="2">70,000</option>
                              <option value="3">120,000</option>
                              <option value="4">150,000</option>
                              <option value="5">200,000</option>

                            </select>
                          </div>
                          <div className="lg:w-1/2">
                            <h3 className="font-bold">Minimum Price</h3>
                            <select className="p-2 border w-full lg:w-[70%]">
                              <option value="">350,000</option>
                              <option value="selfcon">500,000</option>
                              <option value="office">650,000</option>
                              <option value="shop">800,0000</option>
                              <option value="flat">1,000,000</option>

                            </select>
                          </div>
                        </div>
                      {/* Additional Commercial Options */}
                    </>
                  )}
                </div>
              )}

           <div className="flex w-full justify-between items-center">
              <div onClick={handleAddRentalChoice} className=" rounded-3xl bg-[#133B5D] hover:bg-sky-800 w-[100px] text-center  text-white p-2 font-normal">
                More
              </div>
<button type="submit" className= "rounded-3xl bg-[#133B5D] hover:bg-sky-800  text-white p-2 px-3 font-normal "
            >Request Agent</button>
              {/* <textarea type="text" placeholder='Enter Your Preferred Description for the house you are looking for' rows="4" className="border focus:outline-sky-500 p-2 w-full lg:w-[70%]" /> */}
            </div> </div>

            

            

          </div>
        </form>

      </div>
    </div>
  )
}

export default Hero