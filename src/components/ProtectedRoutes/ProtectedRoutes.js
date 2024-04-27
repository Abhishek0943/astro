import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import { Initialize, UserUpdate } from '../../socket';

import Model from '../Model';
function ProtectedRoutes({ children }) {
  const { astro } = useSelector((state) => state.user)
  const [isOpen, setIsOpen] = useState(false)
  const [isProfile, setIsProfile] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (!astro?._id) {
  //     navigate("/login")
  //   }
  // }, [])
  useEffect(() => {
    if (astro?._id) {
      dispatch(Initialize({ id: astro._id }))
      if (astro?.chat?.chatId) {
        navigate(`/chat/${astro.chat.chatId}?session=${astro.chat.sessionId}`)
      }
    }
  }, [astro])
  const { socketData } = useSelector((state) => state.Socket)
  useEffect(() => {
    if (astro?._id) {
      socketData?.on("chatReceive", (user) => {
        dispatch(UserUpdate(user))
      })
    }
  })
  return (
    <>
      {/* <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-slate-950 to-red-600 border-b border-gray-300  "> */}
      <nav className="fixed top-0 z-50 w-full bg-black border-b border-gray-300">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <div className="flex ms-2 md:me-24">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" /> */}
                <img src="/Images/logo/logo.png" className="h-8 me-3 rounded-full" alt="Ko-sychic" />

                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-red-500 font-bold">Ko-sychic</span>
              </div>
            </div>
            <div className="flex items-center relative">
              <div className="flex items-center ms-3">
                <div>
                  <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" onClick={() => setIsProfile(!isProfile)} >
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
      {
        isOpen && <Model onClick={() => setIsOpen(false)} />
      }{
        isProfile && <Model onClick={() => setIsProfile(false)}>
          <div className={` absolute ${!isProfile && "hidden"} border-gray-300 border top-10 right-5 my-4 text-base list-none bg-white  divide-y divide-gray-100 rounded shadow `} >
            <div className="px-4 py-3" role="none">
              <p className="text-sm text-gray-900 " role="none">
                Neil Sims
              </p>
              <p className="text-sm font-medium text-gray-900 truncate " role="none">
                neil.sims@flowbite.com
              </p>
            </div>
            <ul className="py-1" role="none">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   " role="menuitem">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   " role="menuitem">Settings</a>
              </li>
              <li>
                <NavLink to="/account/edit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   " role="menuitem">Profile</NavLink>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   " role="menuitem">Sign out</a>
              </li>
            </ul>
          </div>
        </Model>
      }

      <aside id="default-sidebar" className={`fixed border-gray-300  border-r top-14 left-0 z-40 w-64 h-screen transition-transform ${!isOpen && "-translate-x-full"} sm:translate-x-0`} aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-black ">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg bg-red-500 text-white hover:bg-gray-100  hover:text-blue-500 group">
                <svg className="w-5 h-5 text-black-500 transition duration-75  group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>

          </ul>
        </div>
      </aside>

      <div className="sm:ml-64 mt-16 h-full" style={{ height: "calc(100vh - 4rem)" }}>
        {children}
      </div>
    </>
  )
}

export default ProtectedRoutes
