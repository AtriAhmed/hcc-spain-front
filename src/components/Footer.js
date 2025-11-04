import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import logo2 from "../images/logo2.png"

function Footer() {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto px-8 pt-10">
        <div className="px-8 lg:px-20 py-10 border border-[#9dbc98] rounded-lg grid grid-cols-12 gap-6 relative before:border-4 before:border-[#9dbc98] before:rounded-xl before:absolute before:inset-[-7px] before:z-[-1]">
          <section className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h3 className="pb-4 font-poppins font-semibold text-xl text-[#9dbc98] uppercase">
              CERTIFICACIÓN Halal Correct Spain
            </h3>
            <ul className="font-poppins font-light text-sm">
              <li>
                <span className="font-semibold uppercase">P.O: </span>
                <span className=" text-sm">
                  03003 Alicante, Alicante, Spain
                </span>
              </li>
              <li>
                <span className="font-semibold">DIRECCIÓN: </span>
                <span className="text-sm">
                  Antigua Casa del mar, Av. Perfecto Palacio de la Fuente, 1
                </span>
              </li>
              <li>
                <span className="font-semibold">Teléfono: </span>
                <a
                  href="tel:+31715235770"
                  className="text-blue-500 hover:text-blue-700 transition duration-300 text-sm"
                >
                  +31 71 523 57 70
                </a>
              </li>

              <li className="flex gap-2">
                <div className="font-semibold">Correo electrónico: </div>
                <div className="">
                  <a
                    href="mailto:spain@halalcorrect.com"
                    className="text-blue-500 hover:text-blue-700 transition duration-300 text-sm"
                  >
                    spain@halalcorrect.com
                    <br />
                  </a>
                </div>
              </li>
              <li>
                <span className="font-semibold">ALCANCE: </span>
                <span className="text-sm">
                  {" "}
                  Inspección y certificación Halal
                </span>
              </li>
            </ul>
          </section>
          <section className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h3 className="pb-4 font-poppins font-semibold text-xl text-[#9dbc98] uppercase">
              Enlaces útiles
            </h3>
            <ul className=" font-poppins font-normal text-sm">
              {usefulLinks.map(element => (
                <li
                  key={element.text}
                  className="text-black hover:text-blue-500 transition duration-300"
                >
                  {"> "}
                  <Link to={element.path}>{element.text}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h3 className="pb-4 font-poppins font-semibold text-xl text-[#9dbc98] uppercase">
              Contáctanos
            </h3>
            <ul className=" font-poppins font-normal text-sm">
              {contactLinks.map(element => (
                <li
                  key={element.text}
                  className="text-black hover:text-blue-500 transition duration-300"
                >
                  {"> "}
                  <Link to={element.path}>{element.text}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="flex items-center justify-center col-span-12 sm:col-span-6 lg:col-span-3">
            <img
              src={logo2}
              alt="Halal Correct GermanyN HALAL CONFIRMATION CENTER LIMITED logo"
              className="w-full max-w-[300px]"
            />
          </section>
        </div>
        <p className="max-w-[600px] py-10 mx-auto font-poppins font-light text-lg text-[#9dbc98] text-center">
          © Copyright{" "}
          <span className="font-semibold">
            CERTIFICACIÓN Halal Correct Spain.
          </span>{" "}
          Todos los derechos reservados. Desarrollado por CODA-TECH
        </p>
      </div>
    </div>
  )
}

export default Footer

const usefulLinks = [
  {
    text: "Inicio",
    path: "/",
  },
  {
    text: "¿Quiénes somos?",
    path: "/about/",
  },
  {
    text: "Estructura de la empresa",
    path: "/about/structure",
  },
  {
    text: "Nuestros servicios",
    path: "/certification/services",
  },
  {
    text: "Significado de Halal",
    path: "/about/halal-meaning",
  },
]
const contactLinks = [
  {
    text: "Solicitud",
    path: "/contact/apply",
  },
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
    text: "Verificación del certificado Halal",
    path: "/contact/check",
  },
]
