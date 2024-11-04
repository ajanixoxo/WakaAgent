
import React, {useEffect} from 'react'
import{ Link }from 'react-router-dom'
import { useAuthStore } from "../store/authStore";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { UserIcon } from 'lucide-react';
import Waka from '/assets/images/logo/logo.png'

const navigation = [
  { name: 'Home', href: '/#', current: true },
  { name: 'About', href: '/#about', current: false },
  { name: 'How To', href: '/#service', current: false },
  { name: 'Region', href: '/#region', current: false },
  // { name: 'Register User', href: '/register-user', current: false },
  { name: 'Join Team', href: '/register-agent', current: false },
  { name: 'Contact', href: '/#contact', current: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
function Header() {

  const { isCheckingAuth, checkAuth, isAuthenticated, user, agent, logout  } = useAuthStore()
  const handleLogout = () => {
    logout();
  };
  
  useEffect(() => {
    checkAuth()
  }, [checkAuth])
    return (
        <>
 <Disclosure as="nav" className="bg-gray-200  sticky">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:cusor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              <div className="flex flex-shrink-0 items-center">
              <img
                alt="agent waka"
                src={Waka}
                className="w-20 "
              />
            </div>
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="agent waka"
                src={Waka}
                className="w-20 hidden lg:flex"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-sky-700 text-white' : 'text-black hover:bg-sky-500 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         
          {(user || agent) ? (
            <div className="flex gap-4 items-center">
 
    <Menu as="div" className="relative ml-3">
    <div>
      <MenuButton className="relative flex rounded-full p-2 text-sm  border-sky-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-800">
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open user menu</span>
    <Link to='/user-dashboard' className=" text-sm md:text-[16px] rounded-md p-2 transition text-white font-bold "><UserIcon className="text-black hover:text-gray-800"/></Link>
        
      </MenuButton>
    </div>
    <MenuItems
      transition
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    >
      <MenuItem>
        <Link to="/user-dashboard" className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-500">
        <p className="font-bold text-xs md:text-md">
  Hi, {(user || agent) ? (user ? user.name : agent.name) : "User"}
</p>

        Your Profile
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#" className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-500">
          Settings
        </Link>
      </MenuItem>
      <MenuItem>
        <button onClick={handleLogout} className="block px-4 py-2 text-smt ext-black data-[focus]:bg-gray-500">
          Sign out
        </button>
      </MenuItem>
    </MenuItems>
  </Menu>
  <button
    type="button"
    className="relative rounded-full bg-sky-700 p-1 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    <span className="absolute -inset-1.5" />
    <span className="sr-only">View notifications</span>
    <BellIcon aria-hidden="true" className="w-4 md:h-6 md:w-6" />
  </button>
  </div>
  
) : (
  <div className="flex flex-col md:flex-row">
    {/* <Link to='/register-agent' className="text-xs md:text-md  mr-4 font-bold hover:text-gray-400">Agent Register</Link>  */}
    <Link to='/login-user' className=" text-sm md:text-[16px] rounded-md p-2 transition text-white font-bold "><UserIcon className="text-black hover:text-gray-800"/></Link>
  </div>
)}



</div>
  </div>
            {/* Profile dropdown */}
          
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  

        </>
    )
}

export default Header