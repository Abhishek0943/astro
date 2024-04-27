import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <>
      {/* <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-slate-950 to-red-600 border-b border-gray-300  "> */}
      <nav className="fixed top-0 z-50 w-full bg-black to-red-600 border-b border-gray-300  ">
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
              <button className="bg-slate-100 font-sans font-semibold py-1 px-3 rounded hover:bg-slate-300 transition-all ease-out duration-100">
                <NavLink to="/login">LOGIN</NavLink>{" "}
              </button>
              <button className="bg-transparent text-slate-50 border-2 font-sans font-semibold py-1 px-3 rounded hover:bg-slate-100 hover:text-slate-950 transition-all ease-out duration-100">
                <NavLink to="/sign-up">SIGN-UP</NavLink>{" "}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="w-screen h-screen flex items-center justify-center bg-cover "
        // style={{ backgroundImage: 'url("./Images/landingpageimage.jpg")' }}
        style={{ backgroundImage: 'url("./Images/22dashboardImage.jpg")' }}
      >
        {/* <div className="max-h-[300px] mt-[100px] max-w-[300px]">
          <img src="./Images/pen.png" />
        </div> */}
        <div className="border border-white-600 max-w-[750px] w-[95%] m-auto px-6 py-8 rounded-md h-auto bg-black/70 flex flex-col ">
          {/* <div className="absolute bg-black w-[100%] h-[100%] z-[-1]"></div> */}
          <h2 className="font-semibold leading-7 text-gray-900 text-center mb-5 text-2xl text-white ">
            why we?
          </h2>
          <p className="mt-1 text-m leading-6 text-gray-600 text-white ">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose,Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem
            ipsum',like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose,Ipsum is that it has a
            more-or-less normal distribution
          </p>
          <button className=" bg-transparent border-2 font-sans font-semibold py-2 px-10 rounded bg-white text-black transition-all ease-out duration-100 self-center mt-4">
            <NavLink to="/sign-up">SIGN-UP</NavLink>{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Landing;
