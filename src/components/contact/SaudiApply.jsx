import React from "react"
import {
  faArrowLeft,
  faExclamationTriangle,
  faUpload,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { ArrowForward, Warning } from "@mui/icons-material"
import { Link } from "../../contexts/TranslationContext"
import { useState } from "react"
import Select from "react-select"
import validator from "validator"
import Button from "../Button"
import CircleCheck from "../CircleCheck"
import Input from "../Input"
import Textarea from "../Textarea"
import Title from "../Title"
import ConfirmSaudiApplyModal from "./ConfirmSaudiApplyModal"

const STEPS = Array.from({ length: 3 }, (_, index) => index)

export default function SaudiApply() {
  const [activityOptions, setActivityOptions] = useState([
    {
      value: "Slaughtering Manufactories",
      label: "Fábricas de sacrificio",
    },
    {
      value: "Manufactories of Fresh/Frozen/Canned/Dried/Cured meat processing",
      label:
        "Fábricas de procesamiento de carne fresca/congelada/enlatada/seca/curada",
    },
    {
      value: "All Other food Manufactories",
      label: "Otras fábricas de alimentos",
    },
    // {value:"Other", label:"Other"}
  ])

  const [qualityOptions, setqualityOptions] = useState([
    { value: "ISO 22000", label: "ISO 22000" },
    { value: "Certificado GMP", label: "Certificado GMP" },
    { value: "Certificación Halal", label: "Certificación Halal" },
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
        newErrors.coName = "Se requiere el nombre de la empresa"
      }

      if (!coAddressVal.length) {
        newErrors.coAddress = "Se requiere la dirección de la empresa"
      }

      if (!regNBVal.length) {
        newErrors.regNB = "Se requiere el número de registro"
      }

      if (!activityVal.length) {
        newErrors.activity = "Se requiere la actividad"
      }

      if (empNBVal < 1) {
        newErrors.empNB = "El número de empleados debe ser superior a 0"
      }
    } else if (currStep == 1) {
      if (!cPersonVal.length) {
        newErrors.cPerson = "Se requiere la persona de contacto"
      }

      if (!validator.isEmail(cEmailVal)) {
        newErrors.cEmail = "Por favor ingrese un correo electrónico válido"
      }

      if (!cPhoneVal.length) {
        newErrors.cPhone = "Se requiere el teléfono de contacto"
      }
    } else if (currStep == 2) {
      if (!qualCertifVal.length) {
        newErrors.qualCertif = "Se requiere certificado de calificación"
      }

      if (!prodReg) {
        newErrors.prodReg = "Se requiere el registro del producto"
      }

      if (!facCertif) {
        newErrors.facCertif = "Se requiere la certificación de fábrica"
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
          Tu solicitud ha sido enviada
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
          Inicio
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
          Plataforma de Exportación de Arabia Saudita
        </div>
        <div className="flex justify-start">
          Tu acceso al Reino de Arabia Saudita
        </div>
      </header>
      <section className="flex flex-col gap-4 p-6 rounded-lg bg-white text-justify">
        <div>
          Envía este formulario si eres cliente de la Certificación Halal
          Correct y deseas exportar productos Halal al Reino de Arabia Saudita.
          Al enviar este formulario, declaras que conoces las posibles
          restricciones o tarifas de servicio aplicables, según lo descrito por
          la Certificación Halal Correct. Este servicio solo es válido para
          titulares de certificados Halal Correct.
        </div>
        <div>
          No dudes en contactarnos en:{" "}
          <a
            href="mailto:saudi.regulation@halalcorrect.com"
            className="text-primary underline"
          >
            saudi.regulation@halalcorrect.com
          </a>{" "}
          para cualquier ayuda o si necesitas que te aclaren algo sobre la
          regulación, los servicios o las tarifas.
        </div>
        <div>
          <div className="font-semibold text-lg">
            Aprobación de la Plataforma de Arabia Saudita
          </div>
          Completar este formulario es importante para asegurar tu próxima
          exportación a Arabia Saudita. Tus datos serán registrados y procesados
          por nuestra administración de Certificación Halal Correct para
          garantizar que tu empresa se registre a tiempo en la plataforma del
          Centro Halal Saudí. El envío debe realizarse antes del 1 de octubre de
          2024.
        </div>
        <div>
          <div className="font-semibold text-lg">Documentos Importantes</div>
          <ul className="pl-4 list-disc">
            <li>
              <a
                href="/Announcement_letter_TQHCC.pdf"
                download
                className="text-primary underline"
              >
                Carta de anuncio de Halal Correct{" "}
              </a>
            </li>
            <li>
              <a
                href="/Circulation_Letter_by_SFDA_2024.pdf"
                download
                className="text-primary underline"
              >
                Carta de circulación de la SFDA
              </a>
            </li>
            <li>
              <a
                href="/Circular_letter_January_2024.pdf"
                download
                className="text-primary underline"
              >
                Carta circular sobre categorías de productos
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col gap-4 p-6 rounded-lg bg-white text-justify">
        <div className="font-medium text-xl">
          Antes de continuar con la solicitud
        </div>
        <div>
          Por favor, asegúrate de tener los siguientes documentos listos para
          cargar:
        </div>
        <ul className="pl-4 list-disc">
          <li>Datos de registro de la empresa</li>
          <li>Formulario de registro del producto</li>
          <li>Certificación Halal de fábrica</li>
        </ul>
      </section>

      <section className="p-6 rounded-sm bg-teal-100">
        <Title customClassName="text-2xl mb-4">
          Aprobación de exportación de Arabia Saudí
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
              <Title>Información de la empresa</Title>

              <Input
                name="coName"
                label="Nombre de la empresa *"
                value={inputs.coName}
                onChange={handleChange}
                error={errors?.coName}
              />

              <Input
                name="coAddress"
                label="Dirección de la empresa *"
                value={inputs.coAddress}
                onChange={handleChange}
                error={errors?.coAddress}
              />

              <Input
                name="regNB"
                label="Número de registro *"
                value={inputs.regNB}
                onChange={handleChange}
                error={errors?.regNB}
              />

              <div className="flex flex-col">
                <label
                  htmlFor="activity"
                  className="block mb-2 font-medium text-slate-500 text-sm"
                >
                  Actividad *
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
                  placeholder="Seleccione..."
                  styles={customSelectStyles}
                  menuPortalTarget={document.body}
                  menuPosition="fixed"
                  noOptionsMessage={() => "No hay opciones disponibles"}
                />
                <div className="flex items-center gap-4 mt-2">
                  <div className="text-gray-500">¿Otro?</div>
                  <Input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder="Otra actividad..."
                  />
                  <button onClick={handleAddOption}>
                    <PlusCircleIcon className="w-8 h-8 text-primary" />{" "}
                  </button>
                </div>
                <span className="text-red-500">{errors?.activity}</span>
              </div>

              <Input
                name="empNB"
                label="Número de empleados a tiempo completo *"
                value={inputs.empNB}
                onChange={handleChangeNumber}
                error={errors?.empNB}
              />
            </div>
          ) : currStep == 1 ? (
            <div>
              <Title customClassName="m-4">Datos de contacto</Title>

              <Input
                name="cPerson"
                label="Persona de contacto *"
                value={inputs.cPerson}
                onChange={handleChange}
                error={errors?.cPerson}
              />

              <Input
                name="cEmail"
                label="Correo electrónico de la persona de contacto *"
                value={inputs.cEmail}
                onChange={handleChange}
                error={errors?.cEmail}
              />

              <Input
                name="cPhone"
                label="Teléfono de la persona de contacto *"
                value={inputs.cPhone}
                onChange={handleChange}
                error={errors?.cPhone}
              />

              <Textarea
                name="remark"
                label="Preguntas/Comentarios/Observaciones"
                value={inputs.remark}
                onChange={handleChange}
                error={errors?.remark}
              />
            </div>
          ) : currStep == 2 ? (
            <section className="">
              <Title customClassName="mb-4">Información del producto</Title>

              <div className="z-[30] relative flex flex-col">
                <label
                  htmlFor="qualCertif"
                  className="block mb-2 font-medium text-slate-500 text-sm"
                >
                  Certificación de calidad *
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
                  placeholder="Seleccione..."
                  styles={customSelectStyles}
                  menuPortalTarget={document.body}
                  menuPosition="fixed"
                  noOptionsMessage={() => "No hay opciones disponibles"}
                />
                <div className="flex items-center gap-4 mt-2">
                  <div className="text-gray-500">¿Otro?</div>
                  <Input
                    type="text"
                    value={qualityOther}
                    onChange={e => setQualityOther(e.target.value)}
                    placeholder="Otro certificado..."
                  />
                  <button onClick={handleQualAddOption}>
                    <PlusCircleIcon className="w-8 h-8 text-primary" />{" "}
                  </button>
                </div>
                <span className="text-red-500">{errors?.qualCertif}</span>
              </div>

              <div className="flex flex-col">
                <div>CÓDIGO(S) SA</div>
                <a className="text-primary" href="/SFDA-HS-Codes.xlsx" download>
                  Descargar códigos SA de la SFDA
                </a>
              </div>

              <div className="">
                <a
                  className="text-primary"
                  href="/Saudi-Product-Registration-by-SFDA.xlsx"
                  download
                >
                  Descargar formulario de registro de producto
                </a>
                <p className="block mb-2 font-bold text-gray-700 text-sm">
                  Subir formulario de registro de producto *
                </p>
                <div className="z-[20] relative flex max-[450px]:flex-col items-center gap-3 mx-2">
                  <label
                    htmlFor="prodReg"
                    className="flex items-center gap-3 w-full min-[450px]:w-fit px-4 py-2 rounded-lg bg-primary hover:bg-primaryHover text-white transition duration-300 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    Seleccionar archivo
                  </label>
                  <p>{prodReg?.name || "No se han seleccionado archivos"}</p>
                </div>
                <input
                  id="prodReg"
                  type="file"
                  name="prodReg"
                  onChange={e => {
                    if (!e.target.files.length) return
                    if (e.target.files[0].size > 1024 * 1024 * 100) {
                      setError("El documento debe ser menor a 100MB")
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
                  Subir certificado Halal de fábrica *
                </p>
                <div className="z-[20] relative flex max-[450px]:flex-col items-center gap-3 mx-2">
                  <label
                    htmlFor="facCertif"
                    className="flex items-center gap-3 w-full min-[450px]:w-fit px-4 py-2 rounded-lg bg-primary hover:bg-primaryHover text-white transition duration-300 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    Seleccionar archivo
                  </label>
                  <p>{facCertif?.name || "No se han seleccionado archivos"}</p>
                </div>
                <input
                  type="file"
                  name="facCertif"
                  id="facCertif"
                  error={errors?.facCertif}
                  onChange={e => {
                    if (!e.target.files.length) return
                    if (e.target.files[0].size > 1024 * 1024 * 100) {
                      setError("El documento debe ser menor a 100MB")
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
                <Warning color="yellow" fontSize="small" /> P.S. Si necesitas
                más ayuda, contáctanos a través de:
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
                Anterior
              </Button>
              {currStep == 2 ? (
                <Button
                  customClassnames="bg-primary hover:bg-primaryHover"
                  type="button"
                  onClick={handleValidation}
                >
                  Enviar
                </Button>
              ) : (
                <Button
                  customClassnames="bg-primary hover:bg-primaryHover"
                  type="button"
                  onClick={handleValidation}
                >
                  Siguiente
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
