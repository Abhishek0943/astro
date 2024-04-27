import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginAstro } from "../../api/useReducer";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  return (
    <>
      {/* <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-slate-950 to-red-600 border-b border-gray-300  "> */}
      <nav className="fixed top-0 z-50 w-full bg-black border-b border-gray-300  ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img
                  src="/Images/logo/logo.png"
                  className="h-8 me-3 rounded-full"
                  alt="Ko-sychic"
                />

                <span className="self-center text-xl  sm:text-2xl whitespace-nowrap text-red-500 font-bold">
                  Ko-sychic
                </span>
              </a>
            </div>
            <div className=" flex justify-between items-center gap-4">
              <button className="bg-red-600 font-sans font-semibold py-1 px-3 rounded hover:bg-slate-300 transition-all ease-out duration-100 text-white">
                <NavLink to="/login">LOGIN</NavLink>{" "}
              </button>
              <button className="bg-transparent text-slate-50 border-2 font-sans font-semibold py-1 px-3 rounded hover:bg-slate-100 hover:text-slate-950 transition-all ease-out duration-100">
                <NavLink to="/sign-up">SIGN-UP</NavLink>{" "}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-screen bg-black h-screen flex items-center justify-center">
        <div className="border border-gray-900/10 max-w-[450px] w-[95%] m-auto px-6 py-8 bg-slate-50 rounded-md">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Dummy Text
          </h2>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Dummy Text
          </h2>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Dummy Text
          </h2>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Dummy Text
          </h2>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Dummy Text
          </h2>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Dummy Text
          </h2>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Dummy Text
          </h2>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Dummy Text
          </h2>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Dummy Text
          </h2>
        </div>
        <div className="border border-gray-900/10 max-w-[450px] w-[95%] m-auto px-6 py-8 bg-slate-50 rounded-md">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Login
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please Enter your email and password
          </p>
          <div className="mt-4 flex flex-col gap-2 ">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1  outline-none text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="Password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    type="password"
                    name="username"
                    id="Password"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1  outline-none text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="********"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-start gap-x-6">
            <button
              onClick={() =>
                dispatch(LoginAstro(formData)).then((e) => {
                  e.payload?.success && navigate("/dashboard");
                })
              }
              type="submit"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Sign-up
            </button>
          </div>
          <p className="font-semibold text-sm leading-7 mt-3 text-gray-900">
            Forgot Password
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
