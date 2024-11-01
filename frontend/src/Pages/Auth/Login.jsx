import React, { useState } from 'react'
import { useAuthStore } from '../../store/authStore';
import { Link } from 'react-router-dom'
import { Home, User, Mail, Lock, Loader, Flag, PhoneCall } from 'lucide-react';
import Waka from '/assets/images/logo/waka-logo.png'
import './auth.css'
import toast, { Toaster } from 'react-hot-toast';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    toast.success("Login successful")

  };
  return (

    <>
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
      <div className="flex min-h-screen w-full  justify-center  py-12 lg:px-8">
        <div className="auth-bg hidden md:block w-[30%]">

        </div>
        <div className="flex flex-col justify-start md:justify-center w-[70%]"> 
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="w-full md:w-[100%]" >
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
                    className="focus:ring-sky-500 border focus:border-sky-500 block w-full pl-10 sm:text-sm border-gray-700 h-10 rounded-md"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full" >
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
                                        className="focus:ring-sky-500 border focus:border-sky-500 block w-full pl-10 sm:text-sm border-gray-700 h-10 rounded-md"
                                        placeholder="Your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="text-right text-blue-700 font-semibold mt-2 ">forgot password</div>
                            </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center hover:bg-blue-800 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm h focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {isLoading ? <Loader className='w-6 h-6 animate-spin  mx-auto' /> : "Sign in"}
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link to="/register-user" className="font-semibold leading-6 text-blue-500 hover:text-blue-500">
                Create an account
              </Link>
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login