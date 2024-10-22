import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { GetAreaState } from './../../store/GetArea';

function Hero() {
    const [selectedCountry, setSelectedCountry] = useState('Nigeria');
    const [showRentalOptions, setShowRentalOptions] = useState(false); // Add state to toggle rental options visibility
    const selectedTitle = useSelector((state) => state.selectedTitle);  
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };
    const handleAddRentalChoice = () => {
        setShowRentalOptions(!showRentalOptions); // Toggle visibility of rental options
      };
    
  return (

    <div className="hero w-full flex items-center justify-center  h-screen  bg-center bg-cover" id="hero"
    data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
      <div className="m-4 grid gap-10"
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
          <form className="grid w-[100%] lg:w-[70%] p-4 ">
              <div className="bg-sky-400 rounded mx-auto lg:w-[10%] p-2 text-center text-white font-bold">Rent</div>
              <div className="grid gap-4  p-2 md:p-4 bg-white w-full ">
                  <div className="flex flex-col w-[90%]  md:w-[50%] md:flex-row gap-10">
                      <div className=" border-sky-500 outline-sky-500 flex justify-center border w-[100%] lg:w-[50%] h-10 ">
                          <input
                              list="countries"
                              id="country"
                              value={selectedCountry}
                              onChange={handleCountryChange}
                              placeholder="Select a country"
                              readOnly
                              className="w-full lg:w-[300px] focus:outline-sky-500 pl-2"
                          />
                          

                      </div>
                      <div className=" border-black flex justify-center border w-[100%] lg:w-[50%] h-10">
                          <input type="text" placeholder='State/City'
                              className="w-full lg:w-[300px] focus:outline-sky-500 pl-2"  value={selectedTitle}/>

                      </div>
                      <div className=" border-black border flex justify-center w-[100%] lg:w-[50%] h-10">
                          <input type="text" placeholder='Area ' className=" w-full lg:w-[300px] focus:outline-sky-500 pl-2" />

                      </div>

                  </div>
 
                  <div>
                    <div onClick={handleAddRentalChoice} className="bg-sky-700 hover:bg-sky-800 w-max rounded text-white p-2 font-bold">
                      Add Rental Choice
                    </div>

                      {/* <textarea type="text" placeholder='Enter Your Preferred Description for the house you are looking for' rows="4" className="border focus:outline-sky-500 p-2 w-full lg:w-[70%]" /> */}
                  </div>
                  {showRentalOptions && (
              <div className="mt-4 p-4 bg-gray-100 border rounded-md grid gap-4">
                <div className="grid gap-2">
                  <h3 className="font-bold">Max and Minimum Price</h3>
                  <input type="text" placeholder="Enter price range" className="p-2 border w-full lg:w-[70%]" />
                </div>

                <div className="grid gap-2">
                  <h3 className="font-bold">Bedroom Amount</h3>
                  <select className="p-2 border w-full lg:w-[70%]">
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5">5 Bedrooms</option>
                  </select>
                </div>

                <div className="grid gap-2">
                  <h3 className="font-bold">Type of Rental</h3>
                  <select className="p-2 border w-full lg:w-[70%]">
                    <option value="apartment">Apartment</option>
                    <option value="selfcon">Self-Contained</option>
                    <option value="office">Office</option>
                    <option value="shop">Shop</option>
                    <option value="flat">Flat</option>
                  </select>
                </div>

                <div className="grid gap-2">
                  <h3 className="font-bold">Furnishing</h3>
                  <select className="p-2 border w-full lg:w-[70%]">
                    <option value="fully-furnished">Fully Furnished</option>
                    <option value="semi-furnished">Semi-Furnished</option>
                    <option value="unfurnished">Unfurnished</option>
                  </select>
                </div>

                {/* Add more options as needed */}
              </div>
            )}
                  <button type="submit" className="bg-sky-500 hover:bg-sky-800 w-28 text-white p-2 font-bold mx-auto"
                  >Send</button>

              </div>
          </form>

      </div>
  </div>
  )
}

export default Hero