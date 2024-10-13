import React from 'react'
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/Date";
import toast, { Toaster } from 'react-hot-toast';

function AgentDashboard() {

  const { agent, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};
  return (
    <div className="min-h-full">
    

    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl grid gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <div className="p-4 bg-sky-800 bg-opacity-50 rounded-lg border border-sky-700">
        <h3 className='text-xl font-semibold text-blue-800 mb-3'>Profile Information</h3>
					<p className='text-white'>Name: {agent.name}</p>
					<p className='text-white'>Email: {agent.email}</p>
        </div>
        <div className="p-4 bg-sky-800 bg-opacity-50 rounded-lg border border-sky-700">
        <h3 className='text-xl font-semibold text-blue-800 mb-3'>Account Activity</h3>
					<p className='text-white'>
						<span className='font-bold'>Joined: </span>
						{new Date(agent.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
					<p className='text-white'>
						<span className='font-bold'>Last Login: </span>

						{formatDate(agent.lastLogin)}
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

export default AgentDashboard