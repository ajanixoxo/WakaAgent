import React, { useState } from 'react'
import { Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {
    CitySelect,
    CountrySelect,
    StateSelect,
    LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";


import Waka from '/assets/images/logo/waka-logo.png'
import toast, { Toaster } from 'react-hot-toast';
function RegisterAgent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [country, setCountry] = useState(0);
    const [nin, setNIN] = useState();
    const area = []
    const [area1, setArea1] = useState("");
    const [area2, setArea2] = useState("");
    const [area3, setArea3] = useState("");
    const navigate = useNavigate();

    const { signupAgent, isLoading } = useAuthStore();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            // console.log(email, password, name, phoneNumber,nin,area,country)
            await signupAgent(email, password, name, phoneNumber, country, nin, area);
            navigate("/verify-email");
            toast.success("Successfully signed up as an Agent");

        } catch (error) {
            console.log(error);
        }
    };
    area.push(area1, area2, area3)
    console.log(area)
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: "",
                    duration: 5000,
                    style: {
                        background: "#87CEEB",
                        color: "#fff",
                    },
                }}
            />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 p-2 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        alt="Agent Waka"
                        src={Waka}
                        className="mx-auto h-16 w-auto"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create an Account(Agent)
                    </h2>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                    <form onSubmit={handleSignUp} method="POST" className="space-y-6 p-2 w-[90%] md:w-[60%]">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
                            <div className="lg:w-1/2">

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Name"
                                            name="name"
                                            type="text"
                                            required
                                            value={name}
                                            autoComplete="name"
                                            onChange={(e) => setName(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-6 p-200 sm:text-sm sm:leading-6 p-2"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-6 p-200 sm:text-sm sm:leading-6 p-2"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                        Phone Number(WhatsApp)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            required
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            autoComplete="phoneNumber"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-6 p-200 sm:text-sm sm:leading-6 p-2"
                                        />
                                    

                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                            Password
                                        </label>
                                        <div className="text-sm">
                                    
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            autoComplete="current-password"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-6 p-200 sm:text-sm sm:leading-6 p-2"
                                        />
                                    </div>
                                </div>
                                {/* <div>
                                    <label htmlFor="nin" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                        National Identification Number(NIN)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="nin"
                                            name="nin"
                                            type="number"

                                            max="99999999999"
                                            value={nin}
                                            onChange={(e) => setNIN(e.target.value)}
                                            autoComplete="NIN"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-6 p-200 sm:text-sm sm:leading-6 p-2"
                                        />
                                    </div>
                                </div> */}
                                </div>
                            <div className="">
                                {/* <div >
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                        Country(Nigeria,Togo & Benin Avaiable for now )

                                    </label>
                                    <div className="mt-2">
                                        <CountrySelect
                                            onChange={(e) => {
                                                setCountry(e.name);
                                            }}
                                            placeHolder="Select Country"
                                            name="country"
                                            required
                                            value={country}
                                        />
                                    </div>
                                </div> */}
                                {/* <div>
                                    <label htmlFor="operaiton" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                        Area of Operation(Maximun of 3)

                                    </label>
                                    <div className="mt-2">
                                        <input type="text" value={area1} onChange={(e) => {
                                            setArea1(e.target.value)
                                        }} placeholder='e.g Area,LGA,City and State' name="place1" id="place1"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-6 p-200 sm:text-sm sm:leading-6 p-2 mb-2"
                                            required />
                                        <input type="text" onChange={(e) => {
                                            setArea2(e.target.value)
                                        }} value={area2} placeholder='e.g Area,LGA,City and State' name="place2" id="place2"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-6 p-200 sm:text-sm sm:leading-6 p-2 mb-2"
                                        />
                                        <input type="text" onChange={(e) => {
                                            setArea3(e.target.value)
                                        }}
                                            value={area3} placeholder='e.g Area,LGA,City and State' name="place2" id="place3"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-6 p-200 sm:text-sm sm:leading-6 p-2 "
                                        />
                                        <input type="hidden" value={area} name="area" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="">
                            <button
                                type="submit"
                                className="flex w-1/2 mx-auto bg-purple-500 justify-center rounded-md bg-indigo-6 p-200 px-3 py-1.5 text-sm font-semibold leading-6 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-6 p-200"
                                disabled={isLoading}
                            >
                                {isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Sign Up"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        already have an account {' '}
                        <Link to="/login-user" className="font-semibold leading-6 p-2 text-indigo-6 p-200 hover:text-indigo-500">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterAgent