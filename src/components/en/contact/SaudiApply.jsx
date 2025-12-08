import React from "react"
import {
  faArrowLeft,
  faExclamationTriangle,
  faUpload,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { ArrowForward, Warning } from "@mui/icons-material"
import { Link } from "../../../contexts/TranslationContext"
import { useState } from "react"
import Select from "react-select"
import validator from "validator"
import Button from "../../Button"
import CircleCheck from "../../CircleCheck"
import Input from "../../Input"
import Textarea from "../../Textarea"
import Title from "../../Title"
import ConfirmSaudiApplyModal from "./ConfirmSaudiApplyModal"

const STEPS = Array.from({ length: 3 }, (_, index) => index)

export default function SaudiApply() {
  const [activityOptions, setActivityOptions] = useState([
    {
      value: "Slaughtering Manufactories",
      label: "Slaughtering Manufactories",
    },
    {
      value: "Manufactories of Fresh/Frozen/Canned/Dried/Cured meat processing",
      label: "Fresh/Frozen/Canned/Dried/Cured meat processing factories",
    },
    {
      value: "All Other food Manufactories",
      label: "All Other food Manufactories",
    },
    // {value:"Other", label:"Other"}
  ])

  const [qualityOptions, setqualityOptions] = useState([
    { value: "ISO 22000", label: "ISO 22000" },
    { value: "GMP Certificate", label: "GMP Certificate" },
    { value: "Halal Certification", label: "Halal Certification" },
    { value: "BRC", label: "BRC" },
    { value: "IFS", label: "IFS" },
  ])

  const [inputValue, setInputValue] = useState("")
  const [activity, setActivity] = useState([])

  const [qualityOther, setQualityOther] = useState("")
  const [qualCertif, setQualCertif] = useState([])

  const handleAddOption = () => {
    if (inputValue && !activityOptions.find(opt => opt.value === inputValue)) {
      const newOption = { value: inputValue, label: inputValue }
      setActivityOptions(prevOptions => [...prevOptions, newOption])
      setActivity(prevSelected => [...(prevSelected || []), newOption])
      setInputValue("")
    }
  }

  const handleQualAddOption = () => {
    if (
      qualityOther &&
      !qualityOptions.find(opt => opt.value === qualityOther)
    ) {
      const newOption = { value: qualityOther, label: qualityOther }
      setqualityOptions(prevOptions => [...prevOptions, newOption])
      setQualCertif(prevSelected => [...(prevSelected || []), newOption])
      setQualityOther("")
    }
  }

  const [inputs, setInputs] = useState({
    coName: "",
    coAddress: "",
    regNB: "",
    empNB: 0,
    cPerson: "",
    cEmail: "",
    cPhone: "",
    remark: "",
  })

  const [prodReg, setprodReg] = useState(null)
  const [facCertif, setfacCertif] = useState(null)

  const [error, setError] = useState("")
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const [currStep, setCurrStep] = useState(0)

  const [show, setShow] = useState(false)

  const handleChange = e => {
    setInputs(prevInputs => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }))
  }

  const handleChangeNumber = e => {
    if (e.target.value == "" || /^[0-9\b]+$/.test(e.target.value)) {
      setInputs(prevInputs => ({
        ...prevInputs,
        [e.target.name]: e.target.value,
      }))
    }
  }

  const handleValidation = () => {
    // if (loading) return;

    const coNameVal = inputs.coName.trim()
    const coAddressVal = inputs.coAddress.trim()
    const regNBVal = inputs.regNB.trim()
    const activityVal = (activity ? activity.map(opt => opt.value) : []).join(
      ", "
    )
    const empNBVal = inputs.empNB
    const cPersonVal = inputs.cPerson.trim()
    const cEmailVal = inputs.cEmail.trim()
    const cPhoneVal = inputs.cPhone.trim()
    const qualCertifVal = (
      qualCertif ? qualCertif.map(opt => opt.value) : []
    ).join(", ")

    const newErrors = {}

    if (currStep == 0) {
      if (!coNameVal.length) {
        newErrors.coName = "Company name is required"
      }

      if (!coAddressVal.length) {
        newErrors.coAddress = "Company address is required"
      }

      if (!regNBVal.length) {
        newErrors.regNB = "Registration number is required"
      }

      if (!activityVal.length) {
        newErrors.activity = "Activity is required"
      }

      if (empNBVal < 1) {
        newErrors.empNB = "Number of employees must be greater than 0"
      }
    } else if (currStep == 1) {
      if (!cPersonVal.length) {
        newErrors.cPerson = "Contact person is required"
      }

      if (!validator.isEmail(cEmailVal)) {
        newErrors.cEmail = "Please enter a valid email"
      }

      if (!cPhoneVal.length) {
        newErrors.cPhone = "Contact phone is required"
      }
    } else if (currStep == 2) {
      if (!qualCertifVal.length) {
        newErrors.qualCertif = "Quality certification is required"
      }

      if (!prodReg) {
        newErrors.prodReg = "Product registration is required"
      }

      if (!facCertif) {
        newErrors.facCertif = "Factory certification is required"
      }
    }

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    if (currStep < 2) {
      setCurrStep(prevStep => prevStep + 1)
    } else {
      setShow(true)
    }
  }

  if (sent)
    return (
      <div className="flex flex-col justify-center items-center w-full max-w-[500px] px-10 py-28 rounded-lg bg-white">
        <h3 className="mb-6 font-open font-light text-primary text-3xl scr800:text-4xl text-center">
          Your request has been sent
        </h3>
        <CircleCheck width={125} height={125} fill="rgb(20,184,166)" />
        <Link
          to="/"
          className="mt-6 px-10 py-3 rounded-2xl bg-primary text-white text-xl"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="mr-2 ml-[-20px] text-white"
          />
          Home
        </Link>
      </div>
    )

  const customSelectStyles = {
    control: provided => ({
      ...provided,
      minHeight: "38px",
    }),
    valueContainer: provided => ({
      ...provided,
      textOverflow: "ellipsis",
      width: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
    }),
    multiValue: provided => ({
      ...provided,
      maxWidth: "100%",
    }),
    multiValueLabel: provided => ({
      ...provided,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    menu: provided => ({
      ...provided,
      zIndex: 9999,
    }),
    option: provided => ({
      ...provided,
      whiteSpace: "normal",
      wordWrap: "break-word",
    }),
  }

  return (
    <div className="flex flex-col gap-4 max-w-5xl">
      <header className="flex flex-col items-center gap-4">
        <div className="flex justify-start font-bold text-3xl">
          Saudi Arabia Export Platform
        </div>
        <div className="flex justify-start">
          Your Gateway to the Kingdom of Saudi Arabia
        </div>
      </header>
      <section className="flex flex-col gap-4 p-6 rounded-lg bg-white text-justify">
        <div>
          Submit this form if you are a Halal Correct Certification client and
          wish to export Halal products to the Kingdom of Saudi Arabia. By
          submitting this form, you declare that you are aware of possible
          restrictions or applicable service fees, as described by Halal Correct
          Certification. This service is only valid for Halal Correct
          certificate holders.
        </div>
        <div>
          Don't hesitate to contact us at:{" "}
          <a
            href="mailto:saudi.regulation@halalcorrect.com"
            className="text-primary underline"
          >
            saudi.regulation@halalcorrect.com
          </a>{" "}
          for any help or if you need clarification on regulations, services or
          fees.
        </div>
        <div>
          <div className="font-semibold text-lg">
            Saudi Arabia Platform Approval
          </div>
          Completing this form is important to secure your next export to Saudi
          Arabia. Your data will be recorded and processed by our Halal Correct
          Certification administration to ensure that your company is registered
          on time on the Saudi Halal Center platform. Submission must be
          completed before October 1, 2024.
        </div>
        <div>
          <div className="font-semibold text-lg">Important Documents</div>
          <ul className="pl-4 list-disc">
            <li>
              <a
                href="/Announcement_letter_TQHCC.pdf"
                download
                className="text-primary underline"
              >
                Halal Correct Announcement Letter{" "}
              </a>
            </li>
            <li>
              <a
                href="/Circulation_Letter_by_SFDA_2024.pdf"
                download
                className="text-primary underline"
              >
                SFDA Circulation Letter
              </a>
            </li>
            <li>
              <a
                href="/Circular_letter_January_2024.pdf"
                download
                className="text-primary underline"
              >
                Circular Letter on Product Categories
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col gap-4 p-6 rounded-lg bg-white text-justify">
        <div className="font-medium text-xl">
          Before continuing with the application
        </div>
        <div>
          Please make sure you have the following documents ready to upload:
        </div>
        <ul className="pl-4 list-disc">
          <li>Company registration data</li>
          <li>Product registration form</li>
          <li>Factory Halal certification</li>
        </ul>
      </section>

      <section className="p-6 rounded-sm bg-teal-100">
        <Title customClassName="text-2xl mb-4">
          Saudi Arabia Export Approval
        </Title>

        <form
          className="p-4 rounded-lg bg-white shadow"
          onSubmit={e => {
            e.preventDefault()
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            {STEPS.map(step => (
              <>
                <div
                  className={`transition duration-200 h-[32px] w-[32px] flex justify-center items-center rounded-full  ${
                    step == currStep
                      ? "bg-primary text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  {step + 1}
                </div>
                {step + 1 == STEPS.length ? (
                  ""
                ) : (
                  <ArrowForward className="w-6 h-6" />
                )}
              </>
            ))}
          </div>

          {currStep == 0 ? (
            <div className="flex flex-col gap-1">
              <Title>Company Information</Title>

              <Input
                name="coName"
                label="Company Name *"
                value={inputs.coName}
                onChange={handleChange}
                error={errors?.coName}
              />

              <Input
                name="coAddress"
                label="Company Address *"
                value={inputs.coAddress}
                onChange={handleChange}
                error={errors?.coAddress}
              />

              <Input
                name="regNB"
                label="Registration Number *"
                value={inputs.regNB}
                onChange={handleChange}
                error={errors?.regNB}
              />

              <div className="flex flex-col">
                <label
                  htmlFor="activity"
                  className="block mb-2 font-medium text-slate-500 text-sm"
                >
                  Activity *
                </label>
                <Select
                  id="activity"
                  isMulti
                  options={activityOptions}
                  name="activity"
                  onChange={selected => {
                    setActivity(selected)
                  }}
                  value={activity}
                  placeholder="Select..."
                  styles={customSelectStyles}
                  menuPortalTarget={
                    typeof document !== "undefined" ? document.body : null
                  }
                  menuPosition="fixed"
                  noOptionsMessage={() => "No options available"}
                />
                <div className="flex items-center gap-4 mt-2">
                  <div className="text-gray-500">Other?</div>
                  <Input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder="Other activity..."
                  />
                  <button onClick={handleAddOption}>
                    <PlusCircleIcon className="w-8 h-8 text-primary" />{" "}
                  </button>
                </div>
                <span className="text-red-500">{errors?.activity}</span>
              </div>

              <Input
                name="empNB"
                label="Number of full-time employees *"
                value={inputs.empNB}
                onChange={handleChangeNumber}
                error={errors?.empNB}
              />
            </div>
          ) : currStep == 1 ? (
            <div>
              <Title customClassName="m-4">Contact Information</Title>

              <Input
                name="cPerson"
                label="Contact Person *"
                value={inputs.cPerson}
                onChange={handleChange}
                error={errors?.cPerson}
              />

              <Input
                name="cEmail"
                label="Contact Person Email *"
                value={inputs.cEmail}
                onChange={handleChange}
                error={errors?.cEmail}
              />

              <Input
                name="cPhone"
                label="Contact Person Phone *"
                value={inputs.cPhone}
                onChange={handleChange}
                error={errors?.cPhone}
              />

              <Textarea
                name="remark"
                label="Questions/Comments/Remarks"
                value={inputs.remark}
                onChange={handleChange}
                error={errors?.remark}
              />
            </div>
          ) : currStep == 2 ? (
            <section className="">
              <Title customClassName="mb-4">Product Information</Title>

              <div className="z-[30] relative flex flex-col">
                <label
                  htmlFor="qualCertif"
                  className="block mb-2 font-medium text-slate-500 text-sm"
                >
                  Quality Certification *
                </label>
                <Select
                  id="qualCertif"
                  isMulti
                  options={qualityOptions}
                  name="qualCertif"
                  onChange={selected => {
                    setQualCertif(selected)
                  }}
                  value={qualCertif}
                  placeholder="Select..."
                  styles={customSelectStyles}
                  menuPortalTarget={
                    typeof document !== "undefined" ? document.body : null
                  }
                  menuPosition="fixed"
                  noOptionsMessage={() => "No options available"}
                />
                <div className="flex items-center gap-4 mt-2">
                  <div className="text-gray-500">Other?</div>
                  <Input
                    type="text"
                    value={qualityOther}
                    onChange={e => setQualityOther(e.target.value)}
                    placeholder="Other certificate..."
                  />
                  <button onClick={handleQualAddOption}>
                    <PlusCircleIcon className="w-8 h-8 text-primary" />{" "}
                  </button>
                </div>
                <span className="text-red-500">{errors?.qualCertif}</span>
              </div>

              <div className="flex flex-col">
                <div>SA CODE(S)</div>
                <a className="text-primary" href="/SFDA-HS-Codes.xlsx" download>
                  Download SFDA SA Codes
                </a>
              </div>

              <div className="">
                <a
                  className="text-primary"
                  href="/Saudi-Product-Registration-by-SFDA.xlsx"
                  download
                >
                  Download Product Registration Form
                </a>
                <p className="block mb-2 font-bold text-gray-700 text-sm">
                  Upload Product Registration Form *
                </p>
                <div className="z-[20] relative flex max-[450px]:flex-col items-center gap-3 mx-2">
                  <label
                    htmlFor="prodReg"
                    className="flex items-center gap-3 w-full min-[450px]:w-fit px-4 py-2 rounded-lg bg-primary hover:bg-primaryHover text-white transition duration-300 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    Select File
                  </label>
                  <p>{prodReg?.name || "No files selected"}</p>
                </div>
                <input
                  id="prodReg"
                  type="file"
                  name="prodReg"
                  onChange={e => {
                    if (!e.target.files.length) return
                    if (e.target.files[0].size > 1024 * 1024 * 100) {
                      setError("Document must be smaller than 100MB")
                      return
                    }
                    setError("")
                    setprodReg(e.target.files[0])
                  }}
                  className="hidden"
                />
                <span className="text-red-500">{errors?.prodReg}</span>
              </div>

              <div className="">
                <p className="block mb-2 font-bold text-gray-700 text-sm">
                  Upload Factory Halal Certificate *
                </p>
                <div className="z-[20] relative flex max-[450px]:flex-col items-center gap-3 mx-2">
                  <label
                    htmlFor="facCertif"
                    className="flex items-center gap-3 w-full min-[450px]:w-fit px-4 py-2 rounded-lg bg-primary hover:bg-primaryHover text-white transition duration-300 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    Select File
                  </label>
                  <p>{facCertif?.name || "No files selected"}</p>
                </div>
                <input
                  type="file"
                  name="facCertif"
                  id="facCertif"
                  error={errors?.facCertif}
                  onChange={e => {
                    if (!e.target.files.length) return
                    if (e.target.files[0].size > 1024 * 1024 * 100) {
                      setError("Document must be smaller than 100MB")
                      return
                    }
                    setError("")
                    setfacCertif(e.target.files[0])
                  }}
                  className="hidden"
                />
              </div>
            </section>
          ) : (
            ""
          )}

          <div className="flex flex-col gap-6 w-full pb-2 font-open font-normal text-base">
            {error && (
              <div
                className={`mt-4 bg-red-600 text-white  px-4 py-3 rounded-lg relative flex items-center`}
              >
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="mr-3"
                  size="xl"
                />
                {error}
              </div>
            )}
          </div>
          <div className="flex lg:flex-row flex-col justify-between lg:items-center">
            <div className="flex md:flex-row flex-col md:items-end gap-1 text-yellow-500 text-sm">
              <div className="flex items-center gap-1">
                <Warning color="yellow" fontSize="small" /> P.S. If you need
                more help, contact us at:
              </div>{" "}
              <a
                href="mailto:saudi.regulation@halalcorrect.com"
                className="block md:inline underline break-all"
              >
                saudi.regulation@halalcorrect.com
              </a>
              .
            </div>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                customClassnames="bg-gray-500 hover:bg-gray-600"
                onClick={() => {
                  if (currStep > 0) setCurrStep(prevStep => prevStep - 1)
                }}
              >
                Previous
              </Button>
              {currStep == 2 ? (
                <Button
                  customClassnames="bg-primary hover:bg-primaryHover"
                  type="button"
                  onClick={handleValidation}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  customClassnames="bg-primary hover:bg-primaryHover"
                  type="button"
                  onClick={handleValidation}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </form>
      </section>
      <ConfirmSaudiApplyModal
        show={show}
        hide={() => setShow(false)}
        toView={{ ...inputs, activity, qualCertif, prodReg, facCertif }}
        setErrors={setErrors}
        setSent={setSent}
      />
    </div>
  )
}
