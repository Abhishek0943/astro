import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import { useDispatch, useSelector } from 'react-redux';
import { HiMiniXMark } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
function Profile() {
  const { astro } = useSelector((state) => state.user)
  const [edit, setEdit] = useState("")

  if (!astro.isApproved) {
    return (
      <Form />
    )
  }
  return (
    <>
      <div className=' h-full flex flex-col gap-3'>
        <div className='p-5 rounded-lg bg-slate-100 flex'>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold'>Basic information</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quaerat error consequatur ad repudiandae. Dolorum sapiente cum libero aperiam? Omnis necessitatibus recusandae blanditiis voluptas illo facilis tempora. Nisi, dolor nihil.</p>
          </div>
          <div className='flex-1'>
            <div><span className='text-xl'>Name: </span><span> {astro.name}</span></div>
            <div><span className='text-xl'>username: </span><span> {astro.username}</span></div>
            <div><span className='text-xl'>email: </span><span> {astro.email}</span></div>
            <div><span className='text-xl'>Number: </span><span> {astro.number}</span></div>
            <div><span className='text-xl'>Country: </span><span> {astro.country}</span></div>
          </div>
        </div>
        <div className='p-5 rounded-lg bg-slate-100 flex'>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold'>professional  information</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quaerat error consequatur ad repudiandae. Dolorum sapiente cum libero aperiam? Omnis necessitatibus recusandae blanditiis voluptas illo facilis tempora. Nisi, dolor nihil.</p>
          </div>
          <div className='flex-1 relative'>
            <img onClick={() => {
              setEdit("professional")
            }} src="/images/pen.png" className="absolute top-3 right-3 h-8 cursor-pointer" alt="update" />
            <div><span className='text-xl'>category: </span><span> {astro.category.map((e, i) => <>{e}{astro.category.length - 1 !== i && ", "}</>)}</span></div>
            <div><span className='text-xl'>Specialty: </span><span> {astro.specialty.map((e, i) => <>{e}{astro.specialty.length - 1 !== i && ", "}</>)}</span></div>
            <div><span className='text-xl'>language: </span><span> {astro.language.map((e, i) => <>{e}{astro.language.length - 1 !== i && ", "}</>)}</span></div>
            <div><span className='text-xl'>experience: </span><span> {astro.experience}</span></div>
            <div><span className='text-xl'>about: </span><span> {astro.about}</span></div>
          </div>
        </div>
        <div className='p-5 rounded-lg bg-slate-100 flex'>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold'>Banking  information</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quaerat error consequatur ad repudiandae. Dolorum sapiente cum libero aperiam? Omnis necessitatibus recusandae blanditiis voluptas illo facilis tempora. Nisi, dolor nihil.</p>
          </div>
          <div className='flex-1 relative ' >

            <div><span className='text-xl'>category: </span><span> {astro.category.map((e, i) => <>{e}{astro.category.length - 1 !== i && ", "}</>)}</span></div>
            <div><span className='text-xl'>Specialty: </span><span> {astro.specialty.map((e, i) => <>{e}{astro.specialty.length - 1 !== i && ", "}</>)}</span></div>
            <div><span className='text-xl'>language: </span><span> {astro.language.map((e, i) => <>{e}{astro.language.length - 1 !== i && ", "}</>)}</span></div>
            <div><span className='text-xl'>experience: </span><span> {astro.experience}</span></div>
            <div><span className='text-xl'>about: </span><span> {astro.about}</span></div>
          </div>
        </div>
      </div>
      {
        edit === "professional" && <Professional setEdit={setEdit} astro={astro} />
      }
    </>
  )
}
const Professional = ({ setEdit, astro }) => {
  const [experienceForm, setExperienceForm] = useState({ category: [], specialty: [], language: [], experience: "", about: "" })
  useEffect(() => {

    setExperienceForm({ ...experienceForm, category: [...astro.category], specialty: [...astro.specialty], language: [...astro.language], experience: astro.experience, about: astro.about })
  }, [astro])
  const [inputData, setInputData] = useState({ category: "", specialty: "", language: "" })

  return (
    <>
      <div style={{ zIndex: "10", height: "100vh", width: "100vw", background: "rgba(0, 0, 0, 0.5)", position: "fixed", top: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "440px", background: "white", position: "relative" }}>
          <IoClose onClick={() => setEdit("")} style={{ position: "absolute", top: "10px", right: "10px", fontSize: "1.5rem" }} />
          <div style={{ height: "100%", background: "white", padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flex: "1", flexDirection: "column", alignItems: "flex-start", gap: "5px" }}>
              <label htmlFor="category" >Category</label>
              <div style={{ width: "100%", border: "1px solid gray", borderRadius: "8px", padding: "2px 12px", display: "flex", gap: "5px", alignItems: "center", flexWrap: "wrap" }}>
                {
                  experienceForm.category.map((e) => (
                    <span onClick={() => {
                      setExperienceForm({ ...experienceForm, category: [...experienceForm.category.filter((j) => j !== e)] })
                    }} style={{ display: "flex", alignItems: "center", borderRadius: "5px", border: "1px solid gray", padding: "0px 5px", cursor: "pointer" }} >{e} <HiMiniXMark className='border border-slate-500 rounded-3xl ml-2' /></span>
                  ))
                }
                <input type="text" onChange={(e) => {
                  const value = e.target.value;
                  if (value.includes(',')) {
                    setExperienceForm({ ...experienceForm, category: [...experienceForm.category, inputData.category] })
                    setInputData({ ...inputData, category: "" })
                  } else {
                    setInputData({ ...inputData, category: value });
                  }
                }} value={inputData.category} name="username" id="category" autoComplete="off" style={{ outline: "none" }} placeholder="Enter your category" />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px", gap: "5px" }} >
                <span style={{ display: "flex", background: "gray", alignItems: "center", borderRadius: "5px", border: "1px solid gray", cursor: "pointer", padding: "0px 8px" }}>workcation.com</span>
              </div>
            </div>
            <div style={{ display: "flex", flex: "1", flexDirection: "column", alignItems: "flex-start", gap: "5px" }}>
              <label htmlFor="category" >Specialty</label>
              <div style={{ width: "100%", border: "1px solid gray", borderRadius: "8px", padding: "2px 12px", display: "flex", gap: "5px", alignItems: "center", flexWrap: "wrap" }}>
                {
                  experienceForm.specialty.map((e) => (
                    <span onClick={() => {
                      setExperienceForm({ ...experienceForm, specialty: [...experienceForm.specialty.filter((j) => j !== e)] })
                    }} style={{ display: "flex", alignItems: "center", borderRadius: "5px", border: "1px solid gray", padding: "0px 5px", cursor: "pointer" }}>{e} <HiMiniXMark className='border border-slate-500 rounded-3xl ml-2' /></span>
                  ))
                }
                <input type="text" onChange={(e) => {
                  const value = e.target.value;
                  if (value.includes(',')) {
                    setExperienceForm({ ...experienceForm, specialty: [...experienceForm.specialty, inputData.specialty] })
                    setInputData({ ...inputData, specialty: "" })
                  } else {
                    setInputData({ ...inputData, specialty: value });
                  }
                }} value={inputData.specialty} autoComplete="off" style={{ outline: "none" }} placeholder="Enter your category" />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px", gap: "5px" }} >
                <span style={{ display: "flex", background: "gray", alignItems: "center", borderRadius: "5px", border: "1px solid gray", cursor: "pointer", padding: "0px 8px" }}>workcation.com</span>
              </div>
            </div>
            <div style={{ display: "flex", flex: "1", flexDirection: "column", alignItems: "flex-start", gap: "5px" }}>
              <label htmlFor="category" class="w-full text-left block text-sm font-medium leading-6 text-gray-900">Language</label>
              <div style={{ width: "100%", border: "1px solid gray", borderRadius: "8px", padding: "2px 12px", display: "flex", gap: "5px", alignItems: "center", flexWrap: "wrap" }}>
                {
                  experienceForm.language.map((e) => (
                    <span onClick={() => {
                      setExperienceForm({ ...experienceForm, language: [...experienceForm.language.filter((j) => j !== e)] })
                    }} style={{ display: "flex", alignItems: "center", borderRadius: "5px", border: "1px solid gray", padding: "0px 5px", cursor: "pointer" }}>{e} <HiMiniXMark /></span>
                  ))
                }
                <input type="text" onChange={(e) => {
                  const value = e.target.value;
                  if (value.includes(',')) {
                    setExperienceForm({ ...experienceForm, language: [...experienceForm.language, inputData.language] })
                    setInputData({ ...inputData, language: "" })
                  } else {
                    setInputData({ ...inputData, language: value });
                  }
                }} value={inputData.language} autoComplete="off" style={{ outline: "none" }} placeholder="Enter your category" />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px", gap: "5px" }} >
                <span style={{ display: "flex", background: "gray", alignItems: "center", borderRadius: "5px", border: "1px solid gray", cursor: "pointer", padding: "0px 8px" }}>workcation.com</span>
              </div>
            </div>
            <div style={{ display: "flex", flex: "1", flexDirection: "column", alignItems: "flex-start", gap: "5px" }}>
              <label for="email" class="block text-sm font-medium leading-6 text-left text-gray-900">Experience</label>
              <input id="email" value={experienceForm.experience} onChange={(e) => setExperienceForm({ ...experienceForm, experience: e.target.value })} name="email" type="email" autocomplete="off" style={{ width: "100%", border: "1px solid gray", borderRadius: "8px", padding: "5px 12px" }} />
            </div>
            <div class="w-full">
              <label for="about" style={{ display: "flex", flex: "1", flexDirection: "column", alignItems: "flex-start", gap: "5px" }}>About</label>
              <textarea id="about" value={experienceForm.about} onChange={(e) => setExperienceForm({ ...experienceForm, about: e.target.value })} name="about" rows="3" style={{ width: "100%", border: "1px solid gray", borderRadius: "8px", padding: "5px 12px" }}></textarea>
              <p class="mt-3 text-sm leading-6 text-gray-600 text-left">Write a few sentences about yourself.</p>
            </div>
            <div onClick={() => console.log(experienceForm)} className="border-2 border-slate-800 text-center px-2 py-2 rounded cursor-pointer">Update</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Profile
