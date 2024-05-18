import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const ProfilePersonalInfoModalEdit = ({ closeModel }) => {
  return (
    <div className="fixed top-0 left-20 bg-black bg-opacity-75 h-screen w-screen flex justify-center items-center flex-col">
      <div className=" w-[1000px] h-[650px] bg-white px-14 overflow-visible p-16">
        <div className="flex justify-between">
          <div className="flex items-center justify-between text-black font-bold text-2xl">
            <h2>Edit Personal Info</h2>
          </div>
          <IoIosCloseCircle
            onClick={closeModel}
            className="text-black cursor-pointer text-2xl"
          />
        </div>
        <div className="flex flex-col gap-3 min-w-300 max-w-500 flex-1 mb-3 mt-3">
          <label
            htmlFor="About"
            className="font-semibold text-base cursor-pointer text-gray-600"
          >
            About
          </label>
          <input
            type="text"
            id="About"
            name="About"
            className="px-3 py-[6px] font-normal text-base text-gray-600 border border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3 min-w-300 max-w-500 flex-1 mb-3">
          <label
            htmlFor="Category"
            className="font-semibold text-base cursor-pointer text-gray-600"
          >
            Category
          </label>
          <input
            type="text"
            id="Category"
            name="Category"
            className="px-3 py-[6px] font-normal text-base text-gray-600 border border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3 min-w-300 max-w-500 flex-1 mb-3">
          <label
            htmlFor="Speciality"
            className="font-semibold text-base cursor-pointer text-gray-600 "
          >
            Speciality
          </label>
          <input
            type="text"
            id="Speciality"
            name="Speciality"
            className="px-3 py-[6px] font-normal text-base text-gray-600 border border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3 min-w-300 max-w-500 flex-1 mb-3">
          <label
            htmlFor="Language"
            className="font-semibold text-base cursor-pointer text-gray-600"
          >
            Language
          </label>
          <input
            type="text"
            id="Language"
            name="Language"
            className="px-3 py-[6px] font-normal text-base text-gray-600 border border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3 min-w-300 max-w-500 flex-1 mb-3">
          <label
            htmlFor="Experience"
            className="font-semibold text-base cursor-pointer text-gray-600"
          >
            Experience
          </label>
          <input
            type="text"
            id="Experience"
            name="Experience"
            className="px-3 py-[6px] font-normal text-base text-gray-600 border border-black rounded-lg"
          />
        </div>
        <div className="bg-black py-[7px] px-5 rounded-lg w-[120px] mt-6 text-center">
          <h1 className="text-white font-normal text-sm">Submit</h1>
        </div>
        {/* <div className="h- auto rounded-lg mt-8 p-5 bg-stone-200">
          <h1 className="text-xl font-black-500 font-semibold">About</h1>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quaerat error consequatur ad repudiandae. Dolorum sapiente cum
            libero aperiam? Omnis necessitatibus recusandae blanditiis voluptas
            illo facilis tempora. Nisi, dolor nihil. quaerat error consequatur
            ad repudiandae. Dolorum sapiente cum libero aperiam? Omnis
            necessitatibus recusandae blanditiis voluptas illo facilis tempora.
            Nisi, dolor nihil.
          </h1>
        </div>
        <div className="bg-stone-200 rounded-lg h-auto mt-8 p-5">
          <h1 className="text-xl font-black-500 font-semibold">Category</h1>
          <h1>
            Dolorum sapiente cum libero aperiam? Omnis necessitatibus recusandae
            blanditiis voluptas illo facilis tempora. Nisi, dolor nihil.
          </h1>
        </div>
        <div className="bg-stone-200 rounded-lg h-auto mt-8 p-5">
          <h1 className="text-xl font-black-500 font-semibold">Category</h1>
          <h1>
            Dolorum sapiente cum libero aperiam? Omnis necessitatibus recusandae
            blanditiis voluptas illo facilis tempora. Nisi, dolor nihil.
          </h1>
        </div>
        <div className="bg-stone-200 rounded-lg h-auto mt-8 p-5">
          <h1 className="text-xl font-black-500 font-semibold">Speciality</h1>
          <h1>
            Dolorum sapiente cum libero aperiam? Omnis necessitatibus recusandae
            blanditiis voluptas illo facilis tempora. Nisi, dolor nihil.
          </h1>
        </div>
        <div className="bg-stone-200 rounded-lg h-auto mt-8 p-5">
          <h1 className="text-xl font-black-500 font-semibold">Language</h1>
          <h1>
            Dolorum sapiente cum libero aperiam? Omnis necessitatibus recusandae
            blanditiis voluptas illo facilis tempora. Nisi, dolor nihil.
          </h1>
        </div>
        <div className="bg-stone-200 rounded-lg h-auto mt-8 p-5 mb-8">
          <h1 className="text-xl font-black-500 font-semibold">Experience</h1>
          <h1>
            Dolorum sapiente cum libero aperiam? Omnis necessitatibus recusandae
            blanditiis voluptas illo facilis tempora. Nisi, dolor nihil.
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default ProfilePersonalInfoModalEdit;
