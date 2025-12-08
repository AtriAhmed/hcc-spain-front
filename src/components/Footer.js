import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "../contexts/TranslationContext"
import React from "react"
import { useTranslation } from "../contexts/TranslationContext"
import logo2 from "../images/logo2.png"

function Footer({ location }) {
  console.log("-------------------- location?.pathname --------------------")
  console.log(location?.pathname)
  const { t } = useTranslation(location?.pathname)

  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto px-8 pt-10">
        <div className="px-3 lg:px-20 py-10 border border-[#9dbc98] rounded-lg sm:grid grid-cols-12 gap-6 relative before:border-4 before:border-[#9dbc98] before:rounded-xl before:absolute before:inset-[-7px] before:z-[-1]">
          <section className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h3 className="pb-4 font-poppins font-semibold text-xl text-[#9dbc98] uppercase">
              {t("halal certification spain")}
            </h3>
            <ul className="font-poppins font-light text-sm">
              <li>
                <span className="font-semibold uppercase">P.O: </span>
                <span className=" text-sm">
                  03003 Alicante, Alicante, Spain
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  {t("address").toUpperCase()}:{" "}
                </span>
                <span className="text-sm">
                  Antigua Casa del mar, Av. Perfecto Palacio de la Fuente, 1
                </span>
              </li>
              <li>
                <span className="font-semibold">{t("phone")}: </span>
                <a
                  href="tel:+31715235770"
                  className="text-blue-500 hover:text-blue-700 transition duration-300 text-sm"
                >
                  +31 71 523 57 70
                </a>
              </li>
              <li>
                <span className="font-semibold">{t("phone")}: </span>
                <a
                  href="tel:+34625210450"
                  className="text-blue-500 hover:text-blue-700 transition duration-300 text-sm"
                >
                  +34 625 21 04 50
                </a>
              </li>

              <li className="flex gap-x-2 flex-wrap">
                <div className="font-semibold">{t("email")}: </div>
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
                <span className="font-semibold">
                  {t("scope").toUpperCase()}:{" "}
                </span>
                <span className="text-sm">
                  {" "}
                  {t("halal inspection and certification")}
                </span>
              </li>
            </ul>
          </section>
          <section className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h3 className="pb-4 font-poppins font-semibold text-xl text-[#9dbc98] uppercase">
              {t("useful links")}
            </h3>
            <ul className=" font-poppins font-normal text-sm">
              {getUsefulLinks(t).map(element => (
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
              {t("contact us")}
            </h3>
            <ul className=" font-poppins font-normal text-sm">
              {getContactLinks(t).map(element => (
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
              alt="Halal Correct HALAL CONFIRMATION CENTER LIMITED logo"
              className="w-full max-w-[300px]"
            />
          </section>
        </div>
        <p className="max-w-[600px] py-10 mx-auto font-poppins font-light text-lg text-[#9dbc98] text-center">
          © Copyright{" "}
          <span className="font-semibold">
            {t("halal certification spain")}.
          </span>{" "}
          {t("all rights reserved")}. {t("developed by")} CODA-TECH
        </p>
      </div>
    </div>
  )
}

export default Footer

const getUsefulLinks = t => [
  {
    text: t("home"),
    path: "/",
  },
  {
    text: t("who are we"),
    path: "/about/",
  },
  {
    text: t("company structure"),
    path: "/about/structure",
  },
  {
    text: t("our services"),
    path: "/certification/services",
  },
  {
    text: t("what does halal mean"),
    path: "/about/halal-meaning",
  },
]
const getContactLinks = t => [
  {
    text: t("application"),
    path: "/contact/apply",
  },
  {
    text: t("information request"),
    path: "/contact/information",
  },
  {
    text: t("feedback"),
    path: "/contact/feedback",
  },
  {
    text: t("complaints"),
    path: "/contact/complaint",
  },
  {
    text: t("halal certificate check"),
    path: "/contact/check",
  },
]
