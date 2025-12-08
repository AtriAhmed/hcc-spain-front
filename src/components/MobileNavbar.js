import { Transition } from "@headlessui/react"
import React, { useEffect, useState } from "react"
import { Link } from "../contexts/TranslationContext"
import logo from "../images/logo2.png"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react"
import { useUIToolsContext } from "../contexts/UIToolsProvider"
import { useTranslation } from "../contexts/TranslationContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { CloseRounded } from "@mui/icons-material"

function MobileNavbar({ location }) {
  const { mobileNavbarOpen, setMobileNavbarOpen } = useUIToolsContext()
  const { t, lang } = useTranslation(location?.pathname)
  const [open, setOpen] = useState(-1)

  //   closing the dropdown whenever the navbar closes
  useEffect(() => {
    !mobileNavbarOpen && setOpen(-1)
  }, [mobileNavbarOpen])

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen overflow-hidden z-[1000] ${
        mobileNavbarOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <Transition
        show={mobileNavbarOpen}
        enter="transition duration-1000"
        enterFrom="opacity-0 "
        enterTo="opacity-100 "
        leave="transition duration-1000"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0 "
      >
        <div
          className="bg-[rgba(0,0,0,.5)] w-full h-screen absolute top-0 right-0 cursor-pointer"
          onClick={() => setMobileNavbarOpen(false)}
        ></div>
      </Transition>
      <Transition
        show={mobileNavbarOpen}
        enter="transition duration-1000"
        enterFrom="translate-x-full "
        enterTo="translate-x-0 "
        leave="transition duration-1000"
        leaveFrom="translate-x-0 "
        leaveTo="translate-x-full "
      >
        <div className="w-full h-screen pt-8 pb-28 px-4 absolute top-0 right-0 font-open font-semibold text-base text-slate-900  bg-white overflow-y-scroll">
          <button
            className="absolute top-5 right-5"
            onClick={() => setMobileNavbarOpen(false)}
          >
            <CloseRounded sx={{ fontSize: "40px" }} />
          </button>
          {/* logo */}
          <div className="w-2/3 m-auto">
            <Link to="/" onClick={() => setMobileNavbarOpen(false)}>
              <img
                src={logo}
                alt="Halal Correct HALAL CONFIRMATION CENTER LIMITED logo"
                className="w-full max-w-[300px] mx-auto"
              />
            </Link>
          </div>
          {/* menu */}
          <ul className="divide-y mt-5">
            {getItems(t, lang, location).map((item, index) =>
              item.children === undefined ? (
                <li className="px-3 py-2" key={item.title}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileNavbarOpen(false)}
                    className="block w-full"
                  >
                    {item.title}
                  </Link>
                </li>
              ) : (
                <li key={item.title}>
                  <Accordion
                    open={open === index}
                    icon={
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`transition duration-300 ${
                          open === index ? "-rotate-180" : ""
                        }`}
                      />
                    }
                  >
                    <AccordionHeader
                      className={`px-3 py-2 flex font-open font-semibold text-base text-left ${
                        open === index ? "border-b" : "border-0"
                      }`}
                      onClick={() =>
                        setOpen(prev => (prev === index ? -1 : index))
                      }
                    >
                      {item.path === undefined ? (
                        item.title
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => setMobileNavbarOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )}
                    </AccordionHeader>
                    <AccordionBody
                      className={`px-6 py-2 font-open font-semibold text-base text-slate-600`}
                    >
                      <ul className="divide-y">
                        {item.children.map((child, i) => (
                          <li key={child.title}>
                            <Link
                              to={child.path}
                              className="block py-2"
                              onClick={() => setMobileNavbarOpen(false)}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionBody>
                  </Accordion>
                </li>
              )
            )}
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default MobileNavbar

const getItems = (t, lang, location) => {
  const currentPath = location?.pathname || "/"

  return [
    {
      title: t("home"),
      path: "/",
    },
    {
      title: t("apply now"),
      path: "/contact/apply",
    },
    {
      title: t("about us"),
      children: [
        {
          title: t("who are we"),
          path: "/about",
        },
        {
          title: t("company structure"),
          path: "/about/structure",
        },
        {
          title: t("vision mission and core values"),
          path: "/about/vision",
        },
        {
          title: t("international approval"),
          path: "/about/international-approval",
        },
        {
          title: t("what does halal mean"),
          path: "/about/halal-meaning",
        },
        {
          title: t("locations"),
          path: "/about/locations",
        },
      ],
    },
    {
      title: t("certification"),
      children: [
        {
          title: t("certification procedure"),
          path: "/certification/procedure",
        },
        {
          title: t("product categories"),
          path: "/certification/categories",
        },
        {
          title: t("our services"),
          path: "/certification/services",
        },
        {
          title: t("auditing and training"),
          path: "/certification/auditing",
        },
        {
          title: t("benefits of our certification"),
          path: "/certification/benefits",
        },
      ],
    },
    {
      title: t("policies"),
      children: [
        {
          title: t("halal guarantee"),
          path: "/policies/guarantee",
        },
        {
          title: t("integrity policy"),
          path: "/policies/integrity",
        },
        {
          title: t("fee regulation"),
          path: "/policies/fee-regulation",
        },
        {
          title: t("confidentiality and impartiality"),
          path: "/policies/confidentiality-and-impartiality/",
        },
      ],
    },
    {
      title: t("contact"),
      children: [
        {
          title: t("information request"),
          path: "/contact/information",
        },
        {
          title: t("feedback"),
          path: "/contact/feedback",
        },
        {
          title: t("complaints"),
          path: "/contact/complaint",
        },
        {
          title: t("halal certificate check"),
          path: "/contact/check",
        },
        {
          title: t("saudi arabia application"),
          path: "/contact/saudi-apply",
        },
      ],
    },
    {
      title: t("blog"),
      path: "/blog",
    },
    {
      title: (
        <div className="flex items-center gap-2">
          <img
            src={
              lang === "en"
                ? "https://flagcdn.com/w20/us.png"
                : "https://flagcdn.com/w20/es.png"
            }
            alt={lang === "en" ? "English" : "Español"}
            className="w-5 h-4 inline mr-2"
          />
          {lang === "en" ? "EN" : "ES"}
        </div>
      ),
      children: [
        {
          title: (
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
            lang === "en"
              ? ""
              : "/en" + (currentPath?.replace(/^\/es/, "") || ""),
        },
        {
          title: (
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
            lang === "es"
              ? ""
              : "/es" + (currentPath?.replace(/^\/en/, "") || ""),
        },
      ],
    },
  ]
}
