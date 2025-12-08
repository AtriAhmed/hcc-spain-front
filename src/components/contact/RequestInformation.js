import {
  faArrowLeft,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Link } from "../../contexts/TranslationContext"
import ReactLoading from "react-loading"
import validator from "validator"
import axios from "axios"

function sendRequest(data) {
  return axios.post("/api/create-question", data)
}

function RequestInformation() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [enquiry, setEnquiry] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (loading) return

    const nameVal = name.trim()
    const emailVal = email.trim()
    const telVal = tel.trim()
    const enquiryVal = enquiry.trim()

    if (
      !nameVal.length ||
      !emailVal.length ||
      !telVal.length ||
      !enquiryVal.length
    ) {
      setError("Todos los campos son obligatorios")
      return
    }

    if (!validator.isEmail(emailVal)) {
      setError("Por favor ingrese un email válido")
      return
    }

    setLoading(true)

    const data = {
      name: nameVal,
      email: emailVal,
      tel: telVal,
      question: enquiryVal,
    }

    try {
      await sendRequest(data)
      setSent(true)
    } catch (err) {
      setError("Ha ocurrido un error, por favor intente nuevamente")
    }
    setLoading(false)
  }

  if (sent)
    return (
      <div className="w-full max-w-[500px] px-10 py-28 rounded-lg bg-[#9dbc98] flex flex-col items-center justify-center">
        <h3 className="mb-6 font-open font-light text-3xl md:text-4xl text-center text-white">
          Su solicitud ha sido enviada
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
          Inicio
        </Link>
      </div>
    )

  return (
    <div className="w-full max-w-[500px] px-6 sm:px-10 py-10 rounded-lg bg-[#9dbc98]">
      <h1 className="px-2 py-10 font-open font-light text-3xl md:text-4xl text-center uppercase text-white">
        Solicitar
        <br />
        información
      </h1>
      <form
        className="w-full flex flex-col gap-4 font-open font-bold text-base text-white "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Su Nombre"
          className="px-2 py-1 border-b border-slate-100 placeholder-slate-100 bg-transparent outline-none"
          required
          autoFocus
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Su Email"
          className="px-2 py-1 border-b border-slate-100 placeholder-slate-100 bg-transparent outline-none"
          required
        />
        <input
          type="text"
          value={tel}
          onChange={e => setTel(e.target.value)}
          placeholder="Su Teléfono"
          className="px-2 py-1 border-b border-slate-100 placeholder-slate-100 bg-transparent outline-none"
          required
        />
        <textarea
          type="text"
          value={enquiry}
          onChange={e => setEnquiry(e.target.value)}
          placeholder="Consulta"
          rows="4"
          className="px-2 py-1 border-b border-slate-100 placeholder-slate-100 bg-[rgb(255,255,255,.1)] outline-none resize-none"
          required
        />
        {error && (
          <div
            className={`mt-8 bg-red-600 text-white px-4 py-3 rounded-lg relative flex items-center`}
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
            !error ? "mt-8" : ""
          } mb-8 flex flex-col sm:flex-row gap-4 font-semibold`}
        >
          <div className="w-full sm:w-1/2 relative">
            <input
              type="submit"
              value="Enviar"
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
            Volver
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RequestInformation

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
