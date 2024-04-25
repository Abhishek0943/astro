import React from 'react'
import { HiMiniXMark } from "react-icons/hi2";
function AccountEdit() {
    return (

        <>
            <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm  sm:text-base  sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                <li className="flex items-center text-blue-600 ">
                    <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                        1
                    </span>
                    Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                    </svg>
                </li>
                <li className="flex items-center">
                    <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        2
                    </span>Expertise<span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                    </svg>
                </li>
                <li className="flex items-center">
                    <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        3
                    </span>
                    Banking<span className="hidden sm:inline-flex sm:ms-2">Info</span>
                </li>
            </ol>
            {/* <div className="flex items-start w-full mt-4 p-3  text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm  flex-col gap-4 sm:text-base   ">
                <div class="w-full">
                    <label htmlFor="category" class="w-full text-left block text-sm font-medium leading-6 text-gray-900">Category</label>
                    <div class="mt-2 w-full">
                        <div className='flex flex-wrap rounded-md shadow-sm ring-gray-300 p-2 gap-4 ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 '>
                            <span class="flex  select-none items-center  px-2 rounded-2xl  border border-slate-400 text-gray-500 sm:text-sm cursor-pointer">workcation.com <HiMiniXMark className='border border-slate-500 rounded-3xl ml-2' /></span>
                            <input type="text" name="username" id="category" autoComplete="off" className="outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter your category" />
                        </div>
                    </div>
                    <div className='flex flex-wrap rounded-md shadow-sm ring-gray-300 mt-4 p-2 gap-4 ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 '>
                        <span class="flex bg-green-500  w-min  select-none items-center  px-2 rounded-2xl  border border-slate-400 text-slate-800 sm:text-sm cursor-pointer">workcation.com</span>

                    </div>
                </div>
                <div class="w-full">
                    <label htmlFor="category" class="w-full text-left block text-sm font-medium leading-6 text-gray-900">Specialty</label>
                    <div class="mt-2 w-full">
                        <div className='flex flex-wrap rounded-md shadow-sm ring-gray-300 p-2 gap-4 ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 '>
                            <span class="flex  select-none items-center  px-2 rounded-2xl  border border-slate-400 text-gray-500 sm:text-sm cursor-pointer">workcation.com <HiMiniXMark className='border border-slate-500 rounded-3xl ml-2' /></span>
                            <input type="text" name="username" id="category" autoComplete="off" className="outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter your category" />
                        </div>
                    </div>
                    <div className='flex flex-wrap rounded-md shadow-sm ring-gray-300 p-2 gap-4 ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-4'>
                        <span class="flex bg-green-500  w-min  select-none items-center  px-2 rounded-2xl  border border-slate-400 text-slate-800 sm:text-sm cursor-pointer">workcation.com</span>

                    </div>
                </div>
                <div class="w-full">
                    <label htmlFor="category" class="w-full text-left block text-sm font-medium leading-6 text-gray-900">Language</label>
                    <div class="mt-2 w-full">
                        <div className='flex flex-wrap rounded-md shadow-sm ring-gray-300 p-2 gap-4 ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 '>
                            <span class="flex  select-none items-center  px-2 rounded-2xl  border border-slate-400 text-gray-500 sm:text-sm cursor-pointer">workcation.com <HiMiniXMark className='border border-slate-500 rounded-3xl ml-2' /></span>
                            <input type="text" name="username" id="category" autoComplete="off" className="outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter your category" />
                        </div>
                    </div>
                    <div className='flex flex-wrap rounded-md shadow-sm ring-gray-300 p-2 gap-4 ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-4'>
                        <span class="flex bg-green-500  w-min  select-none items-center  px-2 rounded-2xl  border border-slate-400 text-slate-800 sm:text-sm cursor-pointer">workcation.com</span>

                    </div>
                </div>
                <div class="w-full">
                    <label for="email" class="block text-sm font-medium leading-6 text-left text-gray-900">Experience</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="w-full">
                    <label for="about" class="block text-sm text-left font-medium leading-6 text-gray-900">About</label>
                    <div class="mt-2">
                        <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-gray-600 text-left">Write a few sentences about yourself.</p>
                </div>
                <div class="mt-2 ">
                    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </div> */}
           
               
            
        </>
    )
}

export default AccountEdit
