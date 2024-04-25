import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'


function Landing() {

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-slate-950 to-red-600 border-b border-gray-300  ">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">

                            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                                <img src="/Images/logo/logo.png" className="h-8 me-3 rounded-full" alt="Ko-sychic" />

                                <span className="self-center text-xl  sm:text-2xl whitespace-nowrap text-red-500 font-bold">Ko-sychic</span>
                            </a>
                        </div>
                        <div className=' flex justify-between items-center gap-4'>
                            <button className='bg-slate-100 font-sans font-semibold py-1 px-3 rounded hover:bg-slate-300 transition-all ease-out duration-100'><NavLink to="/login">LOGIN</NavLink>  </button>
                            <button className='bg-transparent text-slate-50 border-2 font-sans font-semibold py-1 px-3 rounded hover:bg-slate-100 hover:text-slate-950 transition-all ease-out duration-100'><NavLink to="/sign-up">SIGN-UP</NavLink> </button>
                        </div>
                    </div>
                </div>
            </nav>
           
        </>
    )
}

export default Landing
