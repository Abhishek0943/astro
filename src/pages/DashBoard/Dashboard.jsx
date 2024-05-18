import React, { useState, useEffect } from "react";
// import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { HiMiniXMark } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Link } from "react-router-dom";
import DashboardChatComponent from "../DashboardChatComponent";
import DashboardGiftComponent from "../DashboardGiftComponent";
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

function Dashboard() {
  // const { astro } = useSelector((state) => state.user);
  const [edit, setEdit] = useState("");
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const data1 = {
    labels: ["Dummy1", "Dummy2", "Dummy3"],
    datasets: [
      {
        label: "# of Votes",
        data: [6, 11, 10],
        backgroundColor: ["#3a434a", "#6E8658", "#3d2022"],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: ["Dummy1", "Dummy2", "Dummy3"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 10, 13],
        backgroundColor: ["#3a434a", "#6E8658", "#3d2022"],
        borderWidth: 1,
      },
    ],
  };

  // if (!astro.isApproved) {
  //   return <Form />;
  // }
  return (
    <>
      <div className=" h-full flex flex-col">
        <div className="flex items-center justify-center gap-[100px] mt-10  border border-gray-300 p-8 mx-5 shadow-md mb-10">
          <div className=" h-[200px] w-[220px]">
            <Pie data={data1} />
          </div>
          <div className=" h-[100px] w-[240px] border border-black flex justify-center flex-col items-center">
            <h1 className="text-xl text-black-500">Amount Earned</h1>
            {/* <div className=" border p-1 mt-2 px-4 bg-black text-white "> */}
            <div className=" px-4 text-gray-500 font-semibold text-[30px] ">
              ₹2345
            </div>
          </div>
          <div className=" h-[100px] w-[240px] border border-black flex justify-center flex-col items-center">
            <h1 className="text-xl text-red">Active Hours</h1>
            <div className="  px-4 text-gray-500 font-semibold text-[30px]">
              2 hours
            </div>
          </div>
          <div className=" h-[200px] w-[220px]">
            <Pie data={data2} />
          </div>
        </div>
        <DashboardChatComponent />
        <DashboardGiftComponent />
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
export default Dashboard;
