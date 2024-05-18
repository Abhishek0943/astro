import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { HiMiniXMark } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import ProfilePersonalInfoModalEdit from "./ProfilePersonalInfoModalEdit";

function Profile() {
  // const { astro } = useSelector((state) => state.user);
  const [modal, setModal] = useState(false);
  const [des, setDes] = useState(1);

  // if (!astro.isApproved) {
  //   return <Form />;
  // }

  const manageModal = () => {
    setModal(!modal);
  };

  const closeModel = () => {
    setModal(false);
  };
  return (
    <>
      {modal && <ProfilePersonalInfoModalEdit closeModel={closeModel} />}
      <div className="flex flex-row gap-10 gap-36 bg-red-600 shadow-lg w-[1100px] mb-3 m-auto">
        <div onClick={() => setDes(1)} className="p-3 cursor-default">
          <h1
            className={`text-xl ${des === 1 ? "text-black" : "text-white"} ${
              des === 1 ? "font-bold" : "font-normal"
            }`}
          >
            professional information
          </h1>
        </div>
        <div onClick={() => setDes(2)} className="p-3 cursor-default">
          <h1
            className={`text-xl ${des === 2 ? "text-black" : "text-white"} ${
              des === 2 ? "font-bold" : "font-normal"
            }`}
          >
            Basic information
          </h1>
        </div>
        <div
          onClick={() => {
            setDes(3);
          }}
          className="p-3 cursor-default"
        >
          <h1
            className={`text-xl ${des === 3 ? "text-black" : "text-white"} ${
              des === 3 ? "font-bold" : "font-normal"
            }`}
          >
            Banking information
          </h1>
        </div>
      </div>
      <div className=" h-auto border w-[1100px] m-auto shadow-2xl border border-red-600 ">
        {des === 1 ? (
          <div className="flex flex-col w-[90%] m-auto h-auto mt-3">
            <FaEdit className="flex self-end text-xl" onClick={manageModal} />
            <div className="h- auto rounded-lg mt-6 p-4 bg-stone-200">
              <h1 className="text-l font-black-500 font-semibold cursor-pointer">
                About
              </h1>
              <p className="text-sm font-black-500 font-normal cursor-pointer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                quaerat error consequatur ad repudiandae. Dolorum sapiente cum
                libero aperiam? Omnis necessitatibus recusandae blanditiis
                voluptas illo facilis tempora. Nisi, dolor nihil. quaerat error
                consequatur ad repudiandae. Dolorum sapiente cum libero aperiam?
                Omnis necessitatibus recusandae blanditiis voluptas illo facilis
                tempora. Nisi, dolor nihil.
              </p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-6 p-4">
              <h1 className="text-l font-black-500 font-semibold cursor-pointer">
                Category
              </h1>
              <p className="text-sm font-black-500 font-normal cursor-pointer">
                Dolorum sapiente cum libero aperiam? Omnis necessitatibus
                recusandae blanditiis voluptas illo facilis tempora. Nisi, dolor
                nihil.
              </p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-6 p-4">
              <h1 className="text-l font-black-500 font-semibold cursor-pointer">
                Speciality
              </h1>
              <p className="text-sm font-black-500 font-normal cursor-pointer">
                Dolorum sapiente cum libero aperiam? Omnis necessitatibus
                recusandae blanditiis voluptas illo facilis tempora. Nisi, dolor
                nihil.
              </p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-6 p-4 cursor-pointer">
              <h1 className="text-l font-black-500 font-semibold">Language</h1>
              <p className="text-sm font-black-500 font-normal">
                Dolorum sapiente cum libero aperiam? Omnis necessitatibus
                recusandae blanditiis voluptas illo facilis tempora. Nisi, dolor
                nihil.
              </p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-6 p-5 mb-6 cursor-pointer">
              <h1 className="text-l font-black-500 font-semibold">
                Experience
              </h1>
              <p className="text-sm font-black-500 font-normal">
                Dolorum sapiente cum libero aperiam? Omnis necessitatibus
                recusandae blanditiis voluptas illo facilis tempora. Nisi, dolor
                nihil.
              </p>
            </div>
          </div>
        ) : des === 2 ? (
          <div className="flex flex-col w-[90%] m-auto h-auto mt-2 cursor-pointer">
            <div className="h- auto rounded-lg mt-5 p-3 bg-stone-200">
              <h1 className="text-l font-black-500 font-semibold">Name</h1>
              <p className="text-sm font-black-500 font-normal">Vinay uniyal</p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-5 p-3">
              <h1 className="text-l font-black-500 font-semibold">Email</h1>
              <p className="text-sm font-black-500 font-normal">
                uniyal@gmail.com
              </p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-5 p-3">
              <h1 className="text-l font-black-500 font-semibold">
                Mobile Number
              </h1>
              <p className="text-sm font-black-500 font-normal">8322384838</p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-5 p-3">
              <h1 className="text-l font-black-500 font-semibold">Dummy Me</h1>
              <p className="text-sm font-black-500 font-normal">
                Dolorum sapiente cum libero aperiam? Omnis necessitatibus
                recusandae blanditiis voluptas illo facilis tempora. Nisi, dolor
                nihil.
              </p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-5 p-3 mb-5">
              <h1 className="text-l font-black-500 font-semibold">
                Me 2 Dummy
              </h1>
              <p className="text-sm font-black-500 font-normal">
                Dolorum sapiente cum libero aperiam? Omnis necessitatibus
                recusandae blanditiis voluptas illo facilis tempora. Nisi, dolor
                nihil.
              </p>
            </div>
          </div>
        ) : des === 3 ? (
          <div className="flex flex-col w-[90%] m-auto h-auto mt-2 cursor-pointer">
            <div className="h- auto rounded-lg mt-5 p-3 bg-stone-200">
              <h1 className="text-l font-black-500 font-semibold">Address</h1>
              <p className="text-sm font-black-500 font-normal">
                NH-09 heera vrga de naal Aajao tussi
              </p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-5 p-3">
              <h1 className="text-l font-black-500 font-semibold">Country</h1>
              <p className="text-sm font-black-500 font-normal">India</p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-5 p-3">
              <h1 className="text-l font-black-500 font-semibold">
                Account Number
              </h1>
              <p className="text-sm font-black-500 font-normal">
                ************8976
              </p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-5 p-3">
              <h1 className="text-l font-black-500 font-semibold">IFSC-Code</h1>
              <p className="text-sm font-black-500 font-normal">SBI-0DU8976</p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-5 p-3">
              <h1 className="text-l font-black-500 font-semibold">
                Name on Account
              </h1>
              <p className="text-sm font-black-500 font-normal">Tripal singh</p>
            </div>
            <div className="bg-stone-200 rounded-lg h-auto mt-5 p-3 mb-5">
              <h1 className="text-l font-black-500 font-semibold">PayPal Id</h1>
              <p className="text-sm font-black-500 font-normal">
                ************A8H9
              </p>
            </div>
          </div>
        ) : (
          <h1>No data availbale</h1>
        )}
      </div>
      {/* {edit === "professional" && (
        <Professional setEdit={setEdit} astro={astro} />
      )} */}
    </>
  );
}
// const Professional = ({ setEdit, astro }) => {
//   const [experienceForm, setExperienceForm] = useState({
//     category: [],
//     specialty: [],
//     language: [],
//     experience: "",
//     about: "",
//   });
//   useEffect(() => {
//     setExperienceForm({
//       ...experienceForm,
//       category: [...astro.category],
//       specialty: [...astro.specialty],
//       language: [...astro.language],
//       experience: astro.experience,
//       about: astro.about,
//     });
//   }, [astro]);
//   const [inputData, setInputData] = useState({
//     category: "",
//     specialty: "",
//     language: "",
//   });

//   return (
//     <>
//       <div
//         style={{
//           zIndex: "10",
//           height: "100vh",
//           width: "100vw",
//           background: "rgba(0, 0, 0, 0.5)",
//           position: "fixed",
//           top: "0px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{ width: "440px", background: "white", position: "relative" }}
//         >
//           <IoClose
//             onClick={() => setEdit("")}
//             style={{
//               position: "absolute",
//               top: "10px",
//               right: "10px",
//               fontSize: "1.5rem",
//             }}
//           />
//           <div
//             style={{
//               height: "100%",
//               background: "white",
//               padding: "20px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "20px",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flex: "1",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 gap: "5px",
//               }}
//             >
//               <label htmlFor="category">Category</label>
//               <div
//                 style={{
//                   width: "100%",
//                   border: "1px solid gray",
//                   borderRadius: "8px",
//                   padding: "2px 12px",
//                   display: "flex",
//                   gap: "5px",
//                   alignItems: "center",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 {experienceForm.category.map((e) => (
//                   <span
//                     onClick={() => {
//                       setExperienceForm({
//                         ...experienceForm,
//                         category: [
//                           ...experienceForm.category.filter((j) => j !== e),
//                         ],
//                       });
//                     }}
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       borderRadius: "5px",
//                       border: "1px solid gray",
//                       padding: "0px 5px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     {e}{" "}
//                     <HiMiniXMark className="border border-slate-500 rounded-3xl ml-2" />
//                   </span>
//                 ))}
//                 <input
//                   type="text"
//                   onChange={(e) => {
//                     const value = e.target.value;
//                     if (value.includes(",")) {
//                       setExperienceForm({
//                         ...experienceForm,
//                         category: [
//                           ...experienceForm.category,
//                           inputData.category,
//                         ],
//                       });
//                       setInputData({ ...inputData, category: "" });
//                     } else {
//                       setInputData({ ...inputData, category: value });
//                     }
//                   }}
//                   value={inputData.category}
//                   name="username"
//                   id="category"
//                   autoComplete="off"
//                   style={{ outline: "none" }}
//                   placeholder="Enter your category"
//                 />
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   marginTop: "10px",
//                   gap: "5px",
//                 }}
//               >
//                 <span
//                   style={{
//                     display: "flex",
//                     background: "gray",
//                     alignItems: "center",
//                     borderRadius: "5px",
//                     border: "1px solid gray",
//                     cursor: "pointer",
//                     padding: "0px 8px",
//                   }}
//                 >
//                   workcation.com
//                 </span>
//               </div>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flex: "1",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 gap: "5px",
//               }}
//             >
//               <label htmlFor="category">Specialty</label>
//               <div
//                 style={{
//                   width: "100%",
//                   border: "1px solid gray",
//                   borderRadius: "8px",
//                   padding: "2px 12px",
//                   display: "flex",
//                   gap: "5px",
//                   alignItems: "center",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 {experienceForm.specialty.map((e) => (
//                   <span
//                     onClick={() => {
//                       setExperienceForm({
//                         ...experienceForm,
//                         specialty: [
//                           ...experienceForm.specialty.filter((j) => j !== e),
//                         ],
//                       });
//                     }}
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       borderRadius: "5px",
//                       border: "1px solid gray",
//                       padding: "0px 5px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     {e}{" "}
//                     <HiMiniXMark className="border border-slate-500 rounded-3xl ml-2" />
//                   </span>
//                 ))}
//                 <input
//                   type="text"
//                   onChange={(e) => {
//                     const value = e.target.value;
//                     if (value.includes(",")) {
//                       setExperienceForm({
//                         ...experienceForm,
//                         specialty: [
//                           ...experienceForm.specialty,
//                           inputData.specialty,
//                         ],
//                       });
//                       setInputData({ ...inputData, specialty: "" });
//                     } else {
//                       setInputData({ ...inputData, specialty: value });
//                     }
//                   }}
//                   value={inputData.specialty}
//                   autoComplete="off"
//                   style={{ outline: "none" }}
//                   placeholder="Enter your category"
//                 />
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   marginTop: "10px",
//                   gap: "5px",
//                 }}
//               >
//                 <span
//                   style={{
//                     display: "flex",
//                     background: "gray",
//                     alignItems: "center",
//                     borderRadius: "5px",
//                     border: "1px solid gray",
//                     cursor: "pointer",
//                     padding: "0px 8px",
//                   }}
//                 >
//                   workcation.com
//                 </span>
//               </div>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flex: "1",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 gap: "5px",
//               }}
//             >
//               <label
//                 htmlFor="category"
//                 class="w-full text-left block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Language
//               </label>
//               <div
//                 style={{
//                   width: "100%",
//                   border: "1px solid gray",
//                   borderRadius: "8px",
//                   padding: "2px 12px",
//                   display: "flex",
//                   gap: "5px",
//                   alignItems: "center",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 {experienceForm.language.map((e) => (
//                   <span
//                     onClick={() => {
//                       setExperienceForm({
//                         ...experienceForm,
//                         language: [
//                           ...experienceForm.language.filter((j) => j !== e),
//                         ],
//                       });
//                     }}
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       borderRadius: "5px",
//                       border: "1px solid gray",
//                       padding: "0px 5px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     {e} <HiMiniXMark />
//                   </span>
//                 ))}
//                 <input
//                   type="text"
//                   onChange={(e) => {
//                     const value = e.target.value;
//                     if (value.includes(",")) {
//                       setExperienceForm({
//                         ...experienceForm,
//                         language: [
//                           ...experienceForm.language,
//                           inputData.language,
//                         ],
//                       });
//                       setInputData({ ...inputData, language: "" });
//                     } else {
//                       setInputData({ ...inputData, language: value });
//                     }
//                   }}
//                   value={inputData.language}
//                   autoComplete="off"
//                   style={{ outline: "none" }}
//                   placeholder="Enter your category"
//                 />
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   marginTop: "10px",
//                   gap: "5px",
//                 }}
//               >
//                 <span
//                   style={{
//                     display: "flex",
//                     background: "gray",
//                     alignItems: "center",
//                     borderRadius: "5px",
//                     border: "1px solid gray",
//                     cursor: "pointer",
//                     padding: "0px 8px",
//                   }}
//                 >
//                   workcation.com
//                 </span>
//               </div>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flex: "1",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 gap: "5px",
//               }}
//             >
//               <label
//                 for="email"
//                 class="block text-sm font-medium leading-6 text-left text-gray-900"
//               >
//                 Experience
//               </label>
//               <input
//                 id="email"
//                 value={experienceForm.experience}
//                 onChange={(e) =>
//                   setExperienceForm({
//                     ...experienceForm,
//                     experience: e.target.value,
//                   })
//                 }
//                 name="email"
//                 type="email"
//                 autocomplete="off"
//                 style={{
//                   width: "100%",
//                   border: "1px solid gray",
//                   borderRadius: "8px",
//                   padding: "5px 12px",
//                 }}
//               />
//             </div>
//             <div class="w-full">
//               <label
//                 for="about"
//                 style={{
//                   display: "flex",
//                   flex: "1",
//                   flexDirection: "column",
//                   alignItems: "flex-start",
//                   gap: "5px",
//                 }}
//               >
//                 About
//               </label>
//               <textarea
//                 id="about"
//                 value={experienceForm.about}
//                 onChange={(e) =>
//                   setExperienceForm({
//                     ...experienceForm,
//                     about: e.target.value,
//                   })
//                 }
//                 name="about"
//                 rows="3"
//                 style={{
//                   width: "100%",
//                   border: "1px solid gray",
//                   borderRadius: "8px",
//                   padding: "5px 12px",
//                 }}
//               ></textarea>
//               <p class="mt-3 text-sm leading-6 text-gray-600 text-left">
//                 Write a few sentences about yourself.
//               </p>
//             </div>
//             <div
//               onClick={() => console.log(experienceForm)}
//               className="border-2 border-slate-800 text-center px-2 py-2 rounded cursor-pointer"
//             >
//               Update
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
export default Profile;
