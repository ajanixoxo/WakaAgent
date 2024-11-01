import React, {useState} from 'react'
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/Date";
import toast, { Toaster } from 'react-hot-toast';


const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

function UserDashboard() {

  const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};
  return (
    <div className="min-h-full">
    

    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard </h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl grid gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <div className="p-4 bg-sky-800 bg-opacity-50 rounded-lg border border-sky-700">
        <h3 className='text-xl font-semibold text-blue-800 mb-3'>Profile Information</h3>
					<p className='text-white'>Name: Welcome Client {user.name}</p>
					<p className='text-white'>Email: {user.email}</p>
        </div>
        <div className="p-4 bg-sky-800 bg-opacity-50 rounded-lg border border-sky-700">
        <h3 className='text-xl font-semibold text-blue-800 mb-3'>Account Activity</h3>
					<p className='text-white'>
						<span className='font-bold'>Joined: </span>
						{new Date(user.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
					<p className='text-white'>
						<span className='font-bold'>Last Login: </span>

						{formatDate(user.lastLogin)}
					</p>
        </div>
        <div>
          <button
          onClick={handleLogout}
          className='w-full py-3 px-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white'>	Logout</button>
        </div>
      </div>
    </main>
  </div>
  )
}

export default UserDashboard