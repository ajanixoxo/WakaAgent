import React, { useState } from 'react'
import { Home, User, Mail, Lock, Loader, Flag, PhoneCall } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import 'react-phone-number-input/style.css'
import './auth.css'
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
            <div className="min-h-screen flex bg-gray-100  justify-center overflow-hidden sm:px-2 lg:px-4">
                <div className="auth-bg hidden md:block w-[30%]">

                </div>
                <div className="flex flex-col md:justify-center w-full  md:w-[70%]">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        {/* <img
                        alt="Agent Waka"
                        src={Waka}
                        className="mx-auto h-16 w-auto"
                    /> */}
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Create Agent Account
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full">
                        <form onSubmit={handleSignUp} method="POST" className="space-y-6 p-2 w-[90%] md:w-[60%]">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
                                <div className="w-full grid place-items-center lg:p-8">

                                    <div className="w-full md:w-[70%]">
                                        <label htmlFor="name" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                            Full Name
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <User className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                id="username"
                                                name="name"
                                                type="text"
                                                required
                                                className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border border-black h-10 rounded-md"
                                                placeholder="User name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-[70%]">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                            Email Address
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border border-black h-10 rounded-md"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-[70%]">
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                            Phone Number(WhatsApp)
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <PhoneCall className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                type="text"
                                                required
                                                className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border border-black h-10 rounded-md"
                                                placeholder="Your Phone Number"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-[70%]">
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                                Password
                                            </label>
                                            <div className="text-sm">

                                            </div>
                                        </div>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border border-black h-10 rounded-md"
                                                placeholder="Your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
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
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-6 p-200 sm:text-sm sm:leading-6 p-2"
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
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-6 p-200 sm:text-sm sm:leading-6 p-2 mb-2"
                                            required />
                                        <input type="text" onChange={(e) => {
                                            setArea2(e.target.value)
                                        }} value={area2} placeholder='e.g Area,LGA,City and State' name="place2" id="place2"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-6 p-200 sm:text-sm sm:leading-6 p-2 mb-2"
                                        />
                                        <input type="text" onChange={(e) => {
                                            setArea3(e.target.value)
                                        }}
                                            value={area3} placeholder='e.g Area,LGA,City and State' name="place2" id="place3"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-6 p-200 sm:text-sm sm:leading-6 p-2 "
                                        />
                                        <input type="hidden" value={area} name="area" />
                                    </div>
                                </div> */}
                                </div>
                            </div>
                            <div className="">
                                <button
                                    type="submit"
                                    className="flex w-1/2 mx-auto bg-blue-700 justify-center rounded-md bg-blue-6 p-200 px-3 py-1.5 text-sm font-semibold leading-6 p-2 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-6 p-200"
                                    disabled={isLoading}
                                >
                                    {isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Sign Up"}
                                </button>
                            </div>
                        </form>

                        <p className="mt-2 text-center text-sm text-gray-500">
                            already have an account {' '}
                            <Link to="/login-user" className="font-semibold leading-6 p-2 text-blue-6 p-200 hover:text-blue-500">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RegisterAgent