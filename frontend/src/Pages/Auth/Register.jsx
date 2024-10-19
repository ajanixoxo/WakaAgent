import React, { useState } from 'react';
import { Home, User, Mail, Lock, Loader, Flag, PhoneCall } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {
    CitySelect,
    CountrySelect,
    StateSelect,
    LanguageSelect,
} from "react-country-state-city"; import "react-country-state-city/dist/react-country-state-city.css"


import Waka from '/assets/images/logo/waka-logo.png'
import Log from '/assets/images/slider/slider-1.png'
import toast, { Toaster } from 'react-hot-toast';
const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [country, setCountry] = useState("");
    const navigate = useNavigate();
    const { signup, isLoading } = useAuthStore();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', email, password, name, phoneNumber, country);
        // Handle form submission logic here
        // if()
        try {

            await signup(email, password, name, phoneNumber, country)
            navigate("/verify-email")
            toast.success("Successfully signed up");
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-2 lg:px-4">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <img src={Waka} alt="waka logo" className="w-32" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Waka Agent
                </h2>
                <p className="mt-2 text-center text-xl text-gray-600"> Register Your Account</p>

            </div>

            <div className="mt-4   flex justify-center">
                {/* <div className="w-[80%] md:w-[50%]">
                    <img src={Log} alt="" className="w-full" />
                </div> */}
                <div className="bg-white py-8 px-2 shadow  sm:rounded-lg sm:px-10 w-[90%] md:w-[80%] md:w-[50%]">
                    <form className="space-y-6 w-[100%] flex flex-col items-center" onSubmit={handleSubmit}>
                        <div className="w-[80%] md:w-[80%] md:w-[50%]" >
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                User name
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
                                    className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border-gray-300 h-10 rounded-md"
                                    placeholder="User name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="w-[80%] md:w-[50%]" >
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
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
                                    className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border-gray-300 h-10 rounded-md"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="w-[80%] md:w-[50%]" >
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border-gray-300 h-10 rounded-md"
                                    placeholder="Your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-[80%] md:w-[50%]" >
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                Phone Number (What&apos;sApp)
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
                                    className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border-gray-300 h-10 rounded-md"
                                    placeholder="Your Phone Number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-[80%] md:w-[50%]" >
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country(Nigeria,Togo & Benin Avaiable for now )

                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Flag className="h-5 w-5 text-gray-400" />
                                </div>
                                <CountrySelect

                                    onChange={(e) => {
                                        setCountry(e.name);

                                    }}
                                    placeHolder="Select Country"
                                    value={country}
                                    name="country"
                                    className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border-gray-300 h-10 rounded-md"

                                    required
                                />
                                {/* <input
                                    id="country"
                                    name="password"
                                    type="password"
                                    required
                                    className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border-gray-300 h-10 rounded-md"
                                    placeholder="Your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                /> */}
                            </div>
                        </div>

                        {/* <div className="w-[80%] md:w-[50%]" >
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border-gray-300 h-10 rounded-md"
                                    placeholder="Confirm password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div> */}

                        <div className="w-[80%] md:w-[50%]" >
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                            >
                                {isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Sign Up"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 h-10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Already have an account?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <Link to="/login" className="font-medium text-sky-600 hover:text-sky-500">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;