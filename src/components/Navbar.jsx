import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { useUIToolsContext } from "../contexts/UIToolsProvider"
import Dropdown from "../lib/Dropdown"
import { LANGUAGES } from "../constants"
import { useTranslation } from "react-i18next"

function Navbar({ location }) {
  const { setMobileNavbarOpen } = useUIToolsContext()

  const { i18n, t } = useTranslation()

  const onChangeLang = e => {
    const lang_code = e.target.value
    i18n.changeLanguage(lang_code)
  }

  return (
    <div className="z-[100] fixed w-full bg-[rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center w-full max-w-7xl m-auto px-3 lg:px-20 py-4">
        <Link to="/">
          <h2 className="font-poppins font-bold text-white text-xl lg:text-3xl text-center uppercase transition-all duration-300">
            HALAL CORRECT GERMANY
          </h2>
        </Link>
        <button
          className="min-[950px]:hidden"
          onClick={() => setMobileNavbarOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} className="text-white" size="2x" />
        </button>
        <ul className="hidden min-[950px]:flex gap-4 text-sm list-none">
          <li
            className={`py-2 font-open transition duration-500 ${
              location?.pathname === "/"
                ? "text-[#9dbc98] font-bold"
                : "font-medium text-white hover:text-[#9dbc98]"
            }`}
          >
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Dropdown
              {...aboutItems}
              path="/about"
              active={location?.pathname.indexOf("/about") === 0}
            />
          </li>
          <li>
            <Dropdown
              {...certificationItems}
              path="/certification"
              active={location?.pathname.indexOf("/certification") === 0}
            />
          </li>
          <li>
            <Dropdown
              {...policiesItems}
              path="/policies"
              active={location?.pathname.indexOf("/policies") === 0}
            />
          </li>
          <li>
            <Dropdown
              {...contactItems}
              path="/contact"
              active={location?.pathname.indexOf("/contact") === 0}
            />
          </li>
          <li
            className={`py-2 font-open font-normal transition duration-500 ${
              location?.pathname === "/blog"
                ? "text-primary"
                : "text-white hover:text-primary"
            }`}
          >
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        {/* <select defaultValue={i18n.language} onChange={onChangeLang}>
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select> */}
        <Link
          to="/contact/apply"
          className="hidden min-[950px]:block px-5 py-2 border-2 border-white rounded-full hover:bg-white font-open font-bold text-white hover:text-[#9dbc98] text-sm uppercase transition duration-500"
        >
          Solicitar ahora
        </Link>
      </div>
    </div>
  )
}

export default Navbar

const aboutItems = {
  title: "Sobre nosotros",
  items: [
    {
      text: "¿Quiénes somos?",
      path: "/about",
    },
    {
      text: "Estructura de la empresa",
      path: "/about/structure",
    },
    {
      text: "Visión, misión y valores fundamentales",
      path: "/about/vision",
    },
    {
      text: "Aprobación internacional",
      path: "/about/international-approval",
    },
    {
      text: "¿Qué significa Halal?",
      path: "/about/halal-meaning",
    },
    {
      text: "Ubicaciones",
      path: "/about/locations",
    },
  ],
}

const certificationItems = {
  title: "Certificación",
  items: [
    {
      text: "Procedimiento de certificación",
      path: "/certification/procedure",
    },
    {
      text: "Categorías de productos",
      path: "/certification/categories",
    },
    {
      text: "Nuestros servicios",
      path: "/certification/services",
    },
    {
      text: "Auditoría y capacitación",
      path: "/certification/auditing",
    },
    {
      text: "Beneficios de nuestra certificación",
      path: "/certification/benefits",
    },
  ],
}

const policiesItems = {
  title: "Políticas",
  items: [
    {
      text: "Garantía Halal",
      path: "/policies/guarantee",
    },
    {
      text: "Política de integridad",
      path: "/policies/integrity",
    },
    {
      text: "Regulación de tarifas",
      path: "/policies/fee-regulation",
    },
    {
      text: "Confidencialidad e imparcialidad",
      path: "/policies/confidentiality-and-impartiality/",
    },
  ],
}

const contactItems = {
  title: "Contacto",
  items: [
    {
      text: "Solicitud de información",
      path: "/contact/information",
    },
    {
      text: "Comentarios",
      path: "/contact/feedback",
    },
    {
      text: "Quejas",
      path: "/contact/complaint",
    },
    {
      text: "Comprobación del certificado Halal",
      path: "/contact/check",
    },
  ],
}
