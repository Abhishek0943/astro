import React, { useState } from 'react'
import { HiMiniXMark } from 'react-icons/hi2'
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { StepOne, StepTwo } from '../api/useReducer';
function Form() {
    const { astro } = useSelector((state) => state.user)
    const [step, setStep] = useState(astro.step || 1)
    const [steps, setSteps] = useState({
        stepsItems: ["Profile", "Contact", "Identity", "Passport"],
        currentStep: 2
    })
    const dispatch = useDispatch()
    const [experienceForm, setExperienceForm] = useState({ category: [], specialty: [], language: [], experience: "", about: "" })
    const [inputData, setInputData] = useState({ category: "", specialty: "", language: "" })
    const [verification, setVerification] = useState({ address: "", country: "", accountName: "", IFSCCode: "", nameOfAccount: "", paypalId: "" })
    const handelVerificationForm = (e) => {
        setVerification({ ...verification, [e.target.name]: e.target.value })
    }
    const renderElem = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className="flex items-start w-full mt-4 p-3  text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm  flex-col gap-4 sm:text-base   ">
                            <div class="w-full">
                                <label htmlFor="category" class="w-full text-left block text-sm font-medium leading-6 text-gray-900">Category</label>
                                <div class="mt-2 w-full">
                                    <div className='flex flex-wrap rounded-md shadow-sm ring-gray-300 p-2 gap-4 ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 '>
                                        {
                                            experienceForm.category.map((e) => (
                                                <span onClick={() => {
                                                    setExperienceForm({ ...experienceForm, category: [...experienceForm.category.filter((j) => j !== e)] })
                                                }} class="flex  select-none items-center  px-2 rounded-2xl  border border-slate-400 text-gray-500 sm:text-sm cursor-pointer">{e} <HiMiniXMark className='border border-slate-500 rounded-3xl ml-2' /></span>
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
                                        }} value={inputData.category} name="username" id="category" autoComplete="off" className="outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter your category" />
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
                                        {
                                            experienceForm.specialty.map((e) => (
                                                <span onClick={() => {
                                                    setExperienceForm({ ...experienceForm, specialty: [...experienceForm.specialty.filter((j) => j !== e)] })
                                                }} class="flex  select-none items-center  px-2 rounded-2xl  border border-slate-400 text-gray-500 sm:text-sm cursor-pointer">{e} <HiMiniXMark className='border border-slate-500 rounded-3xl ml-2' /></span>
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
                                        }} value={inputData.specialty} autoComplete="off" className="outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter your category" />
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
                                        {
                                            experienceForm.language.map((e) => (
                                                <span onClick={() => {
                                                    setExperienceForm({ ...experienceForm, language: [...experienceForm.language.filter((j) => j !== e)] })
                                                }} class="flex  select-none items-center  px-2 rounded-2xl  border border-slate-400 text-gray-500 sm:text-sm cursor-pointer">{e} <HiMiniXMark className='border border-slate-500 rounded-3xl ml-2' /></span>
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
                                        }} value={inputData.language} autoComplete="off" className="outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter your category" />
                                    </div>
                                </div>
                                <div className='flex flex-wrap rounded-md shadow-sm ring-gray-300 p-2 gap-4 ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-4'>
                                    <span class="flex bg-green-500  w-min  select-none items-center  px-2 rounded-2xl  border border-slate-400 text-slate-800 sm:text-sm cursor-pointer">workcation.com</span>

                                </div>
                            </div>
                            <div class="w-full">
                                <label for="email" class="block text-sm font-medium leading-6 text-left text-gray-900">Experience</label>
                                <div class="mt-2">
                                    <input id="email" value={experienceForm.experience} onChange={(e) => setExperienceForm({ ...experienceForm, experience: e.target.value })} name="email" type="email" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="about" class="block text-sm text-left font-medium leading-6 text-gray-900">About</label>
                                <div class="mt-2">
                                    <textarea id="about" value={experienceForm.about} onChange={(e) => setExperienceForm({ ...experienceForm, about: e.target.value })} name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                                <p class="mt-3 text-sm leading-6 text-gray-600 text-left">Write a few sentences about yourself.</p>
                            </div>
                            <div class="mt-2 ">
                                <button type="submit" onClick={() => {
                                    dispatch(StepOne({ ...experienceForm, id: astro._id })).then((e) => e.payload.success && setStep(step + 1))
                                }} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                            </div>
                        </div >
                    </>
                )
                break;
            case 2:
                return (
                    <> <div className="  w-full mt-4 p-3  text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm  flex-col gap-4 sm:text-base   ">
                        <div className=' grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6    '>
                            <div class="sm:col-span-3">
                                <label for="email" class="block text-sm font-medium leading-6 text-left text-gray-900">Address</label>
                                <div class="mt-2">
                                    <input id="email" name="address" onChange={handelVerificationForm} value={verification.address} type="text" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label for="country" class="block text-sm font-medium leading-6 text-gray-900 text-left">Country</label>
                                <div class="mt-2">
                                    <select id="country" onChange={handelVerificationForm} value={verification.country || countries[0]} name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        {
                                            countries.map((e) => (
                                                <option value={e} key={e}>{e}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            {
                                verification.country === "India" ? <>
                                    <div class="sm:col-span-3">
                                        <label for="email" class="block text-sm font-medium leading-6 text-left text-gray-900">Account Number</label>
                                        <div class="mt-2">
                                            <input id="email" onChange={handelVerificationForm} value={verification.accountName} name="accountName" type="text" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div class="sm:col-span-3">
                                        <label for="email" class="block text-sm font-medium leading-6 text-left text-gray-900">IFSC Code</label>
                                        <div class="mt-2">
                                            <input id="email" onChange={handelVerificationForm} value={verification.IFSCCode} name="IFSCCode" type="text" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div class="sm:col-span-3">
                                        <label for="email" class="block text-sm font-medium leading-6 text-left text-gray-900">Name on Account</label>
                                        <div class="mt-2">
                                            <input id="email" onChange={handelVerificationForm} value={verification.nameOfAccount} name="nameOfAccount" type="text" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </> :
                                    <div class="sm:col-span-3">
                                        <label for="email" class="block text-sm font-medium leading-6 text-left text-gray-900">PayPal Id</label>
                                        <div class="mt-2">
                                            <input id="paypalId" onChange={handelVerificationForm} value={verification.paypalId} name="paypalId" type="text" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                            }


                        </div>
                        <div class="mt-4 ">
                            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900 text-left">Valid Id proof</label>
                            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-full">
                                <div class="text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                    </svg>
                                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <button type="submit" onClick={() => {
                                dispatch(StepTwo({ ...verification, id: astro._id })).then((e) => e.payload.success && setStep(step + 1))
                            }} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                        </div>
                    </div>
                    </>
                )
                break;
            case 3:
                return (
                    <>
                        <div className="  w-full mt-4 p-3  text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm  flex-col gap-4 sm:text-base   ">
                            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-10 lg:overflow-visible lg:px-0">

                                <div className="mx-auto   lg:mx-0 lg:max-w-none ">
                                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto  lg:w-full  lg:px-8">
                                        <div className="lg:pr-4">
                                            <div className="">
                                                <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
                                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
                                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                                                    eget aliquam. Quisque id at vitae feugiat egestas.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="   lg:mx-auto  lg:w-full    lg:px-8">
                                        <div className="lg:pr-4">
                                            <div className=" text-base leading-7 text-gray-700 ">
                                                <p>
                                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                                                    erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                                                    semper sed amet vitae sed turpis id.
                                                </p>
                                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                                    <li className="flex gap-x-3">
                                                        {/* <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                                                        <span>
                                                            <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                                                            consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                                            blanditiis ratione.
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-x-3">
                                                        {/* <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                                                        <span>
                                                            <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                                                            ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                                                        </span>
                                                    </li>
                                                    <li className="flex gap-x-3">
                                                        {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                                                        <span>
                                                            <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                                                            vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                                                        </span>
                                                    </li>
                                                </ul>
                                                <p className="mt-8">
                                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                                                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                                                    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                                                </p>
                                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                                                <p className="mt-6">
                                                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                                                    Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                                                    tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                                                    turpis ipsum eu a sed convallis diam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
                break;
        }
    }
    return (
        <>
            {/* <div className="max-w-2xl mx-auto px-4 ">
                <ul aria-label="Steps" className="items-start text-gray-600 font-medium flex">
                    {steps.stepsItems.map((item, idx) => (
                        <li aria-current={steps.currentStep == idx + 1 ? "step" : false} className="flex gap-x-3 flex-col flex-1">
                            <div className="flex  items-center flex-row flex-1 justify-start">
                                <hr className={`w-full border block ${idx == 0 ? "" : "" || steps.currentStep >= idx + 1 ? "border-indigo-600" : ""}`} />
                                <div className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${steps.currentStep > idx + 1 ? "bg-indigo-600 border-indigo-600" : "" || steps.currentStep == idx + 1 ? "border-indigo-600" : ""}`}>
                                    <span className={`w-2.5 h-2.5 rounded-full bg-indigo-600 ${steps.currentStep != idx + 1 ? "hidden" : ""}`}></span>
                                    {
                                        steps.currentStep > idx + 1 ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        ) : ""
                                    }
                                </div>
                                 <hr className={`h-12 border md:w-full md:h-auto ${idx + 1 == steps.stepsItems.length ? "border-none" : "" || steps.currentStep > idx + 1 ? "border-indigo-600" : ""}`} /> 
                            </div>
                            <div className="h-8 flex justify-center items-center md:mt-3 md:h-auto">
                                <h3 className={`text-sm ${steps.currentStep == idx + 1 ? "text-indigo-600" : ""} text-center`}>
                                    {item}
                                </h3>
                            </div>
                        </li>
                    ))}
                </ul>
            </div> */}

            {renderElem()}

        </>
    )
}

export default Form

const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini ",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia (formerly Macedonia)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];