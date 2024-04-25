import React from 'react'

function ForgotPassword() {
    return (
        <div className='w-screen bg-slate-200 h-screen flex items-center justify-center'>
            <div className='border border-gray-900/10 max-w-[450px] w-[95%] m-auto px-6 py-8 bg-slate-50 rounded-md'>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Forget Password</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Enter your email</p>
                <div className="mt-4 flex flex-col gap-2 ">
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input type="text" name="username" id="username" autoComplete="off" className="block flex-1 border-0 bg-transparent py-1.5 pl-1  outline-none text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith@gmail.com" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-6 flex items-center justify-start gap-x-6">
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Login</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
