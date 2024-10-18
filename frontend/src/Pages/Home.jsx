/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import './Home.css'

function Home() {
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };
    const areaDetails = [
        { imageURL: '/assets/images/place/lagos.jpg', title: "Lagos", agentList: 1000 },
        { imageURL: '/assets/images/place/ibadan.jpg', title: "Ibadan", agentList: 1000 },
        { imageURL: '/assets/images/place/AB.jpg', title: "Abeokuta", agentList: 1000 },
        { imageURL: '/assets/images/place/Ondo.jpg', title: "Ondo", agentList: 1000 },
        { imageURL: '/assets/images/place/PH.jpg', title: "Port Harcourt", agentList: 1000 },
        { imageURL: '/assets/images/place/Abuja.jpg', title: "Abuja", agentList: 1000 },
        { imageURL: '/assets/images/place/osun.jpg', title: "Osun", agentList: 1000 },
        { imageURL: '/assets/images/place/ilorin.jpg', title: "ilorin", agentList: 1000 },
    ]
    const stats = [
        { number: '1+', label: 'years', description: 'of shaping rentals landscapes' },
        // { number: '100+', label: 'Projects', description: 'successfully delivered with excellence' },
        { number: '50+', label: 'Agents', description: 'diverse agent in different state' },
        { number: '99%', label: 'Happy Clients', description: 'satisfying our customers to the fullest' },
    ];
    const AreaCard = (props) => (
        <div className="relative overflow-hidden rounded-lg group">
            <img
                alt={props.title}
                width={600}
                height={400}
                src={props.imageURL}

                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{props.title}</h3>
                <p className="text-sm">{props.agentList} agent avialable</p>
            </div>
        </div>
    )
    return (
        <>
            <div className="hero w-full flex items-center justify-center  h-screen  bg-center bg-cover">
                <div className="m-4 grid gap-10">
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
            <div className="container mx-auto px-4 py-8">
                <div className="w-full msx-auto text-center">
                    <h1 className="text-[30px] text-black font-semibold h1">Search rental by area</h1>
                    <p className="text-gray-400 font-medium p">Find Your dream House</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {areaDetails.map((areaDetail, index) => (

                        <AreaCard key={index} imageURL={areaDetail.imageURL} title={areaDetail.title} agentList={areaDetail.agentList} />
                    ))}

                </div>
            </div>
            <div className="about">

                <div className="bg-white p-8 rounded-3xl shadow-lg max-w-full md:max-w-[90%] mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 pr-8">
                            <p className="text-xl md:text-3xl font-bold text-gray-400 ">About us</p>
                            <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">Better lives with better homes</h2>
                            <p className="text-gray-700 mb-8">
                                At AgentWaka, we are dedicated to simplifying the house-hunting process by connecting students and individuals with trusted agents for reliable and affordable rentals. Whether you're searching for a cozy space near campus or a budget-friendly apartment, our platform ensures that you find a property that fits your needs. With a focus on transparency and security, every agent on our platform is verified to guarantee a safe and smooth rental experience.

                                Agentwaka connects you to experienced agents who know your desired area inside out. From residential to commercial rentals, we provide fast, personalized service to help you find the perfect property. Say goodbye to the stress of house hunting—let us link you to the ideal agent and your next home today!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="flex items-baseline mb-1">
                                            <span className="text-2xl font-bold text-gray-900 mr-2">{stat.number}</span>
                                            <span className="text-lg text-gray-700">{stat.label}</span>
                                        </div>
                                        <div className="h-1 w-12 bg-sky-500 mb-2"></div>
                                        <p className="text-sm text-gray-600">{stat.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 mt-8 lg:mt-0">
                            <img
                                src="/assets/images/slider/about.jpg"
                                alt="Team meeting in a modern office"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="agent">

            </div>
        </>

    )
}

export default Home