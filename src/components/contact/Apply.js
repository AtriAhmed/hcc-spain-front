import {
  faArrowLeft,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Link } from "gatsby"
import ReactLoading from "react-loading"
import validator from "validator"
import axios from "axios"

function sendRequest(
  companyVal,
  nameVal,
  emailVal,
  telVal,
  officeAddressVal,
  factoryAddressVal,
  explanationVal
) {
  const data = {
    company:companyVal,
    name:nameVal,
    email:emailVal,
    tel:telVal,
    office_address:officeAddressVal,
    factory_address:factoryAddressVal,
    explanation:explanationVal
  }
  return axios.post('/api/create-apply',data)
}

function Apply() {
  const [company, setCompany] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [office_address, setOfficeAddress] = useState("")
  const [factory_address, setFactoryAddress] = useState("")
  const [explanation, setExplanation] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (loading) return

    const companyVal = company.trim()
    const nameVal = name.trim()
    const emailVal = email.trim()
    const telVal = tel.trim()
    const officeAddressVal = office_address.trim()
    const factoryAddressVal = factory_address.trim()
    const explanationVal = explanation.trim()

    if (
      !companyVal.length ||
      !nameVal.length ||
      !emailVal.length ||
      !telVal.length ||
      !officeAddressVal.length ||
      !factoryAddressVal.length ||
      !explanationVal.length
    ) {
      setError("All fields are required")
      return
    }

    if (!validator.isEmail(emailVal)) {
      setError("Please enter a valid email")
      return
    }

    setLoading(true)
    try {
      await sendRequest(
        companyVal,
        nameVal,
        emailVal,
        telVal,
        officeAddressVal,
        factoryAddressVal,
        explanationVal
      )
      setSent(true)
    } catch (err) {
      setError("There has been an error, please try again")
    }
    setLoading(false)
  }

  if (sent)
    return (
      <div className="w-full max-w-[500px] px-10 py-28 rounded-lg bg-[#9dbc98] flex flex-col items-center justify-center">
        <h3 className="mb-6 font-open font-light text-3xl md:text-4xl text-center text-white">
          Your request has been sent
        </h3>
        <CircleCheck width={125} height={125} fill="white" />
        <Link
          to="/"
          className="mt-6 px-10 py-3 rounded-2xl bg-white text-xl text-[#9dbc98]"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="mr-2 ml-[-20px] text-[#9dbc98]"
          />
          Home
        </Link>
      </div>
    )

  return (
    <form
      className="w-full max-w-[1100px] rounded-lg flex flex-col md:flex-row"
      onSubmit={handleSubmit}
    >
      <section className="w-full md:w-1/2 bg-white p-10 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
        <h1 className="px-2 py-6 font-open font-normal text-2xl md:text-3xl text-center capitalize text-[#9dbc98]">
          General information
        </h1>
        <div className="w-full flex flex-col gap-6 font-open font-normal text-base text-slate-900 ">
          <input
            type="text"
            value={company}
            onChange={e => setCompany(e.target.value)}
            placeholder="Your Company Name"
            className="px-2 py-2 border-b border-slate-500 placeholder-slate-500 bg-transparent outline-none"
            required
            autoFocus
          />
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your Name"
            className="px-2 py-2 border-b border-slate-500 placeholder-slate-500 bg-transparent outline-none"
            required
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your Email"
            className="px-2 py-2 border-b border-slate-500 placeholder-slate-500 bg-transparent outline-none"
            required
          />
          <input
            type="text"
            value={tel}
            onChange={e => setTel(e.target.value)}
            placeholder="Your Phone"
            className="px-2 py-2 border-b border-slate-500 placeholder-slate-500 bg-transparent outline-none"
            required
          />
        </div>
      </section>
      <section className="w-full md:w-1/2 bg-[#9dbc98] p-10 rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
        <h1 className="px-2 py-6 font-open font-normal text-2xl md:text-3xl text-center capitalize text-white">
          Contact details
        </h1>
        <div className="w-full flex flex-col gap-4 font-open font-normal text-base text-white ">
          <input
            type="text"
            value={office_address}
            onChange={e => setOfficeAddress(e.target.value)}
            placeholder="Head Office Address"
            className="px-2 py-1 border-b border-slate-100 placeholder-slate-100 bg-transparent outline-none"
            required
          />
          <input
            type="text"
            value={factory_address}
            onChange={e => setFactoryAddress(e.target.value)}
            placeholder="Factory Address"
            className="px-2 py-1 border-b border-slate-100 placeholder-slate-100 bg-transparent outline-none"
            required
          />
          <textarea
            type="text"
            value={explanation}
            onChange={e => setExplanation(e.target.value)}
            placeholder="Please provide an explanation"
            rows="4"
            className="px-2 py-1 border-b border-slate-100 placeholder-slate-100 bg-[rgb(255,255,255,.1)] outline-none resize-none"
            required
          />
          {error && (
            <div
              className={`mt-4 bg-red-600 text-white px-4 py-3 rounded-lg relative flex items-center`}
            >
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="mr-3"
                size="xl"
              />
              {error}
            </div>
          )}
          <div
            className={`${
              !error ? "mt-4" : ""
            } mb-8 flex flex-col sm:flex-row gap-4 font-semibold`}
          >
            <div className="w-full sm:w-1/2 relative">
              <input
                type="submit"
                value="Send"
                className="w-full px-3 py-2 rounded-2xl text-slate-900 bg-gradient-to-br from-green-200 to-green-400 cursor-pointer hover:filter hover:saturate-[200%] transition duration-300"
              />
              {loading && (
                <i className="absolute right-5 top-1/2 translate-y-[-50%]">
                  <ReactLoading
                    type="spinningBubbles"
                    color="white"
                    height={25}
                    width={25}
                  />
                </i>
              )}
            </div>
            <Link
              className="w-full sm:w-1/2 px-3 py-2 rounded-2xl flex items-center justify-center text-slate-900 bg-slate-200 hover:bg-slate-300 transition duration-300"
              to="/"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="mr-2 ml-[-20px] text-slate-600"
              />
              Back
            </Link>
          </div>
        </div>
      </section>
    </form>
  )
}

export default Apply

function CircleCheck(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="Flat"
      {...props}
    >
      <path d="M174.89307,101.2384a3.99936,3.99936,0,0,1-.13184,5.65528l-58.666,56a3.99989,3.99989,0,0,1-5.52343,0l-29.334-28a4,4,0,0,1,5.52344-5.78711l26.57227,25.36377,55.90429-53.36377A3.99936,3.99936,0,0,1,174.89307,101.2384Zm53.10644,26.76172a100,100,0,1,1-100-100A100.113,100.113,0,0,1,227.99951,128.00012Zm-8,0a92,92,0,1,0-92,92A92.10447,92.10447,0,0,0,219.99951,128.00012Z" />
    </svg>
  )
}
