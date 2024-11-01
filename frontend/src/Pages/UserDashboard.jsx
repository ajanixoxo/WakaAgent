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
  const [activeTab, setActiveTab] = useState('Matched Requests');

	const handleLogout = () => {
		logout();
	};
  return (
    <div className="min-h-full">
    

    {/* <header className="bg-white shadow">
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
    </main> */}
    <div className="container mx-auto p-4 font-sans">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
      
      <div className="grid md:grid-cols-[300px_1fr] gap-6">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <img
                src="https://pbs.twimg.com/profile_images/1832211902241337344/GLW3J4dk_400x400.jpg"
                alt="Agent"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-1">
                <CheckCircleIcon />
              </div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-600">Verified User</p>
              <div className="text-sm space-y-1 text-gray-700">
                <p>Age: 34</p>
                <p>State of Origin: Osun state</p>
                <p>Operational Base:</p>
                <p>Lagos Island</p>
                <p>AJah</p>
                <p>Maryland</p>
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Edit Profile</button>
              <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Edit Profile</button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Ratings */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} />
            ))}
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow">
            <div className="flex border-b">
              <button 
                className={`flex-1 px-4 py-2 text-center ${activeTab === 'Matched Requests' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('Matched Requests')}
              >
                Requests
              </button>
              <button 
                className={`flex-1 px-4 py-2 text-center ${activeTab === 'Accepted Requests' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('Accepted Requests')}
              >
                Completed
              </button>
            </div>
            <div className="p-4">
              {activeTab === 'Matched Requests' ? (
                <>
                  <h3 className="text-lg font-semibold mb-4">Agent Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm text-gray-600">Agent Name</h4>
                      <p className="font-medium">Agent Bayo</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-600">Vefired</h4>
                      <p className="font-medium">Yes</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-600">LOCATION</h4>
                      <p className="font-medium">Lagos Island</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-600">AMENITIES</h4>
                      <p className="font-medium">All inclusive</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://pbs.twimg.com/profile_images/1832211902241337344/GLW3J4dk_400x400.jpg"
                        alt="Client"
                        className="w-12 h-12 rounded-full"
                      />
                      <span className="font-medium">EMMANUEL JAMES</span>
                    </div>
                    <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
                      <WhatsAppIcon />
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-center text-gray-500">No accepted requests yet.</p>
              )}
            </div>
          </div>

          {/* Subscription Plan */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-4">SUBSCRIPTION PLAN</h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="w-full md:w-1/2 h-32 bg-gray-200 rounded-lg"></div>
              <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
                <div className="w-full h-24 bg-gray-200 rounded-lg"></div>
                <button className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  )
}

export default UserDashboard