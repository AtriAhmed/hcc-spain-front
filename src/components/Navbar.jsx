import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "../contexts/TranslationContext"
import React from "react"
import { useUIToolsContext } from "../contexts/UIToolsProvider"
import { useTranslation } from "../contexts/TranslationContext"
import Dropdown from "../lib/Dropdown"
import { LANGUAGES } from "../constants"

function Navbar({ location }) {
  const { setMobileNavbarOpen } = useUIToolsContext()
  const { t, lang } = useTranslation(location?.pathname)

  // Function to get the URL for the other language
  const getLanguageSwitchUrl = () => {
    const currentPath = location?.pathname || "/"

    if (lang === "en") {
      // Switch from English to Spanish: replace /en with /es
      return currentPath.replace(/^\/en/, "/es")
    } else {
      // Switch from Spanish to English: replace /es with /en or add /en if no prefix
      if (currentPath.startsWith("/es")) {
        return currentPath.replace(/^\/es/, "/en")
      } else {
        // Handle root or other paths without language prefix
        return "/en" + currentPath
      }
    }
  }

  return (
    <div className="z-[100] fixed w-full bg-[rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center w-full max-w-7xl m-auto px-3 lg:px-20 py-4">
        <Link to="/">
          <h2 className="font-poppins font-bold text-white text-xl lg:text-3xl text-center uppercase transition-all duration-300">
            HALAL CORRECT SPAIN
          </h2>
        </Link>
        <button
          className="min-[950px]:hidden"
          onClick={() => setMobileNavbarOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} className="text-white" size="2x" />
        </button>
        <ul className="hidden min-[950px]:flex gap-4 text-[13px] list-none">
          <li
            className={`py-2 font-open transition duration-500 ${
              location?.pathname === "/"
                ? "text-[#9dbc98] font-bold"
                : "font-medium text-white hover:text-[#9dbc98]"
            }`}
          >
            <Link to="/">{t("home")}</Link>
          </li>
          <li>
            <Dropdown
              {...getAboutItems(t)}
              path="/about"
              active={location?.pathname.indexOf("/about") === 0}
            />
          </li>
          <li>
            <Dropdown
              {...getCertificationItems(t)}
              path="/certification"
              active={location?.pathname.indexOf("/certification") === 0}
            />
          </li>
          <li>
            <Dropdown
              {...getPoliciesItems(t)}
              path="/policies"
              active={location?.pathname.indexOf("/policies") === 0}
            />
          </li>
          <li>
            <Dropdown
              {...getContactItems(t)}
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
            <Link to="/blog">{t("blog")}</Link>
          </li>
        </ul>

        <Link
          to="/contact/apply"
          className="hidden min-[950px]:block px-5 py-2 border-2 border-white rounded-full hover:bg-white font-open font-bold text-white hover:text-[#9dbc98] text-sm uppercase transition duration-500"
        >
          {t("apply now")}
        </Link>

        {/* Language Selector */}
        <div className="hidden min-[950px]:block">
          <Dropdown
            {...getLanguageItems(lang, location)}
            path=""
            active={false}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar

const getAboutItems = t => ({
  title: t("about us"),
  items: [
    {
      text: t("who are we"),
      path: "/about",
    },
    {
      text: t("company structure"),
      path: "/about/structure",
    },
    {
      text: t("vision mission and core values"),
      path: "/about/vision",
    },
    {
      text: t("international approval"),
      path: "/about/international-approval",
    },
    {
      text: t("what does halal mean"),
      path: "/about/halal-meaning",
    },
    {
      text: t("locations"),
      path: "/about/locations",
    },
  ],
})

const getCertificationItems = t => ({
  title: t("certification"),
  items: [
    {
      text: t("certification procedure"),
      path: "/certification/procedure",
    },
    {
      text: t("product categories"),
      path: "/certification/categories",
    },
    {
      text: t("our services"),
      path: "/certification/services",
    },
    {
      text: t("auditing and training"),
      path: "/certification/auditing",
    },
    {
      text: t("benefits of our certification"),
      path: "/certification/benefits",
    },
  ],
})

const getPoliciesItems = t => ({
  title: t("policies"),
  items: [
    {
      text: t("halal guarantee"),
      path: "/policies/guarantee",
    },
    {
      text: t("integrity policy"),
      path: "/policies/integrity",
    },
    {
      text: t("fee regulation"),
      path: "/policies/fee-regulation",
    },
    {
      text: t("confidentiality and impartiality"),
      path: "/policies/confidentiality-and-impartiality/",
    },
  ],
})

const getContactItems = t => ({
  title: t("contact"),
  items: [
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
    {
      text: t("saudi arabia application"),
      path: "/contact/saudi-apply",
    },
  ],
})

const getLanguageItems = (currentLang, location) => {
  console.log("-------------------- location --------------------")
  console.log(location)

  const currentPath = location?.pathname || "/"

  return {
    title: (
      <>
        <img
          src={
            currentLang === "en"
              ? "https://flagcdn.com/w20/us.png"
              : "https://flagcdn.com/w20/es.png"
          }
          alt={currentLang === "en" ? "English" : "Español"}
          className="inline w-5 h-4 mr-2"
        />
        {currentLang === "en" ? "EN" : "ES"}
      </>
    ),
    items: [
      {
        text: (
          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="English"
              className="w-5 h-4"
            />
            <span>English</span>
          </div>
        ),
        path:
          currentLang === "en"
            ? ""
            : "/en" + (currentPath?.replace(/^\/es/, "") || ""),
      },
      {
        text: (
          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w20/es.png"
              alt="Español"
              className="w-5 h-4"
            />
            <span>Español</span>
          </div>
        ),
        path:
          currentLang === "es"
            ? ""
            : "/es" + (currentPath?.replace(/^\/en/, "") || ""),
      },
    ],
  }
}
