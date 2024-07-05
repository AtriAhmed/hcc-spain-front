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
              Halal Correct Germany CERTIFICATION
            </h3>
            <ul className="font-poppins font-light text-sm">
              <li>
                <span className="font-semibold uppercase">P.O: </span>
                <span className=" text-sm">46047 Oberhausen, Germany</span>
              </li>
              <li>
                <span className="font-semibold">ADDRESS: </span>
                <span className="text-sm">Centroallee 273-277</span>
              </li>
              <li>
                <span className="font-semibold">Phone: </span>
                <a
                  href="tel:+4920888027110"
                  className="text-blue-500 hover:text-blue-700 transition duration-300 text-sm"
                >
                  +49 208 8802 7110
                </a>
              </li>

              <li className="flex gap-2">
                <div className="font-semibold">Email: </div>
                <div className="">
                  <a
                    href="mailto:germany@halalcorrect.com"
                    className="text-blue-500 hover:text-blue-700 transition duration-300 text-sm"
                  >
                    germany@halalcorrect.com<br />
                  </a>
                </div>
              </li>
              <li>
                <span className="font-semibold">SCOPE: </span>
                <span className="text-sm"> Halal inspection and Halal Certification</span>
              </li>
            </ul>

          </section>
          <section className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h3 className="pb-4 font-poppins font-semibold text-xl text-[#9dbc98] uppercase">
              Useful Links
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
              Contact us
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
          <span className="font-semibold">Halal Correct Germany Certification.</span>{" "}
          All Rights Reserved Powered by CODA-TECH
        </p>
      </div>
    </div>
  )
}

export default Footer

const usefulLinks = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Who are we?",
    path: "/about/",
  },
  {
    text: "Company structure",
    path: "/about/structure",
  },
  {
    text: "Our services",
    path: "/certification/services",
  },
  {
    text: "Meaning of halal",
    path: "/about/halal-meaning",
  },
]
const contactLinks = [
  {
    text: "Apply",
    path: "/contact/apply",
  },
  {
    text: "Request for information",
    path: "/contact/information",
  },
  {
    text: "Feedback",
    path: "/contact/feedback",
  },
  {
    text: "Complaint",
    path: "/contact/complaint",
  },
  {
    text: "Halal certificate check",
    path: "/contact/check",
  },
]
