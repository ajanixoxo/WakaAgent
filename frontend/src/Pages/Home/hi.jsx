{showRentalOptions && (
    <div className="mt-4 p-4 bg-gray-100 border rounded-md grid gap-4">
      {/* <div className="grid gap-2">
        <h3 className="font-bold">Max and Minimum Price</h3>
        <div className="flex gap-5">
        <select className="p-2 border w-full lg:w-[40%]">
          <option value="1">50,000</option>
          <option value="2">70,000</option>
          <option value="3">120,000</option>
          <option value="4">150,000</option>
          <option value="5">200,000 </option>
        </select>
        
        <select className="p-2 border w-full lg:w-[40%]">
          <option value="1">350,000</option>
          <option value="2">500,000</option>
          <option value="3">650,000</option>
          <option value="4">800,0000</option>
          <option value="5">1,000,000</option>
        </select>
        </div>
   
      </div> */}

      <div className="grid gap-2">
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

      </div>
      <div className="grid gap-2">
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

      </div>
      <div className="grid gap-2">
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          <div className="lg:w-1/2">
            <h3 className="font-bold">Furnishing</h3>
            <select className="p-2 border w-full lg:w-[70%]">
              <option value="1">Fully Furnished</option>
              <option value="2">Semi Furnished</option>
              <option value="3">Unfurnished</option>

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

      </div>
      <div className="grid gap-2">
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          <div className="lg:w-1/2">
            <h3 className="font-bold">Location Proximity</h3>
            <select className="p-2 border w-full lg:w-[70%]">
              <option value="1"> Schools</option>
              <option value="1">Markets,</option>
              <option value="1">Hospitals</option>
              <option value="1">Transport hubs</option>
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

      </div>
      <div className="grid gap-2">
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
      <div className="grid gap-2">
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          <div className="lg:w-1/2">
            <h3 className="font-bold">Preferred Floor(for apartments)</h3>
            <select className="p-2 border w-full lg:w-[70%]">
              <option value="1">Ground floor</option>
              <option value="2">Middle floor </option>
              <option value="2">Top floors                        </option>


            </select>
          </div>
          <div className="lg:w-1/2">
            <h3 className="font-bold">Pet-Friendly:

            </h3>
            <select className="p-2 border w-full lg:w-[70%]">
              <option value="apartment">Yes




              </option>
              <option value="selfcon">No
              </option>


            </select>
          </div>
        </div>

      </div>




      <div className="grid gap-2">
        <h3 className="font-bold">Facilities/Utilites</h3>
        <div className="flex gap-2 flex-wrap">

          <label>
            <input
              type="checkbox"
              name="waterSupply"
              checked={preferences.waterSupply}
              onChange={handleChange}
            />
            Water supply (e.g., borehole, public water)
          </label>
          <label>
            <input
              type="checkbox"
              name="powerSupply"
              checked={preferences.powerSupply}
              onChange={handleChange}
            />
            Power supply (e.g., generator, inverter)
          </label>
          <label>
            <input
              type="checkbox"
              name="securityFeatures"
              checked={preferences.securityFeatures}
              onChange={handleChange}
            />
            Security features (e.g., gated community, CCTV, guards)
          </label>
          <label>
            <input
              type="checkbox"
              name="parkingSpace"
              checked={preferences.parkingSpace}
              onChange={handleChange}
            />
            Parking space availability
          </label>
          <label>
            <input
              type="checkbox"
              name="internetAccess"
              checked={preferences.internetAccess}
              onChange={handleChange}
            />
            Internet access
          </label>
          <label>
            <input
              type="checkbox"
              name="airConditioning"
              checked={preferences.airConditioning}
              onChange={handleChange}
            />
            Air conditioning/heating
          </label>
        </div>
      </div>

      {/* Add more options as needed */}
    </div>
  )}