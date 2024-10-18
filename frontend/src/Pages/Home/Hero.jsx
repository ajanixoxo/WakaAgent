import React, {useState} from 'react'
import {  } from 'lucide-react';

function Hero() {
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };
  return (

    <div className="hero w-full flex items-center justify-center  h-screen  bg-center bg-cover" id="/#"
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
              <div className="bg-sky-400 rounded-ss-2xl  lg:w-[10%] p-2 text-center text-white font-bold">Rent</div>
              <div className="grid gap-4  p-2 md:p-4 bg-white w-full rounded-e-xl rounded-b-2xl">
                  <div className="flex flex-col w-[90%]  md:w-[50%] md:flex-row gap-10">
                      <div className=" border-sky-500 outline-sky-500 flex justify-center border w-[100%] lg:w-[50%] h-10 ">
                          <input
                              list="countries"
                              id="country"
                              value={selectedCountry}
                              onChange={handleCountryChange}
                              placeholder="Select a country"
                              className="w-full lg:w-[300px] focus:outline-sky-500 pl-2"
                          />
                          <datalist id="countries">
                              <option value="Nigeria" />
                              <option value="Ghana" />
                              <option value="Cotonu" />
                              <option value="Togo" />
                              {/* <option value="United Kingdom" /> */}
                              {/* Add more countries as needed */}
                          </datalist>

                      </div>
                      <div className=" border-black flex justify-center border w-[100%] lg:w-[50%] h-10">
                          <input type="text" placeholder='State/City'
                              className="w-full lg:w-[300px] focus:outline-sky-500 pl-2" />

                      </div>
                      <div className=" border-black border flex justify-center w-[100%] lg:w-[50%] h-10">
                          <input type="text" placeholder='Area ' className=" w-full lg:w-[300px] focus:outline-sky-500 pl-2" />

                      </div>

                  </div>

                  <div>
                      <textarea type="text" placeholder='Enter Your Preferred Description for the house you are looking for' rows="4" className="border focus:outline-sky-500 p-2 w-full lg:w-[70%]" />
                  </div>
                  <button type="submit" className="bg-sky-500 hover:bg-sky-800 w-28 text-white p-2 font-bold"
                  >Send</button>

              </div>
          </form>

      </div>
  </div>
  )
}

export default Hero