import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Signup, Verify } from "../../api/useReducer";
import { NavLink, useNavigate } from "react-router-dom";

function Singup() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
    password: "",
  });
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const [OTP, setOTP] = useState("");
  const dispatch = useDispatch();
  function handleFormSubmit() {
    // console.log(formData);
    // dispatch(Signup(formData)).then(
    //   ({ payload }) => payload?.success &&
    setStep(step + 1);
    // );
  }
  const navigate = useNavigate();
  function handleOtp() {
    // dispatch(Verify({ otp: OTP, email: formData.email })).then(
    //   ({ payload }) => payload.success &&
    // navigate("/dashboard");
    navigate("/dashboardnew");
    // );
  }
  const renderElem = () => {
    switch (step) {
      case 0:
        return (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Register
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
            <div className="mt-4 flex flex-col gap-2 ">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      autoComplete="off"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1  outline-none text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      autoComplete="off"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1  outline-none text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      onChange={handleInputChange}
                      name="email"
                      value={formData.email}
                      id="email"
                      autoComplete="off"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1  outline-none text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Number
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="number"
                      onChange={handleInputChange}
                      value={formData.number}
                      id="number"
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
                      type="password"
                      onChange={handleInputChange}
                      value={formData.password}
                      name="password"
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
                onClick={handleFormSubmit}
                type="submit"
                className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Login
              </button>
            </div>
          </>
        );
        break;
      case 1:
        return (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              OTP Verification
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              OTP send on your email {formData.email}. Please Check the email
              and enter write OTP here to verify you email{" "}
            </p>
            <div className="mt-4 flex flex-col gap-2 ">
              <div className="sm:col-span-4">
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  OTP
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      onChange={(e) => setOTP(e.target.value)}
                      type="text"
                      name="otp"
                      id="otp"
                      value={OTP}
                      autoComplete="off"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1  outline-none text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith@gmail.com"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-start gap-x-6">
              <button
                onClick={handleOtp}
                type="submit"
                className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verify
              </button>
            </div>
          </>
        );
        break;
    }
  };
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
              <button className="bg-red-600 font-sans font-semibold py-1 px-3 rounded hover:bg-indigo-500 transition-all ease-out duration-100 text-white">
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
        <div className="border border-gray-900/10 max-w-[450px] w-[95%] h-auto m-auto px-6 py-8 bg-slate-50 rounded-md">
          {renderElem()}
        </div>
      </div>
    </>
  );
}

export default Singup;
