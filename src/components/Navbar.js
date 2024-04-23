import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { useUIToolsContext } from "../contexts/UIToolsProvider"
import Dropdown from "../lib/Dropdown"

function Navbar({ location }) {
  const { setMobileNavbarOpen } = useUIToolsContext()

  return (
    <div className="fixed z-[100] w-full bg-[rgba(0,0,0,0.5)]">
      <div className="w-full max-w-7xl flex items-center justify-between m-auto py-4 px-3 lg:px-20">
        <Link to="/">
          <h2 className="uppercase font-poppins font-bold text-xl lg:text-3xl text-center text-white transition-all duration-300">
            HALAL CORRECT FRANCE
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
            <Link to="/">Home</Link>
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
        </ul>
        <Link
          to="/contact/apply"
          className="font-bold px-5 py-2 border-2 border-white rounded-full hidden min-[950px]:block font-open text-sm text-white uppercase hover:bg-white hover:text-[#9dbc98] transition duration-500"
        >
          apply now
        </Link>
      </div>
    </div>
  )
}

export default Navbar

const aboutItems = {
  title: "about us",
  items: [
    {
      text: "Who are we?",
      path: "/about",
    },
    {
      text: "Company structure",
      path: "/about/structure",
    },
    {
      text: "Vision, mission and core values",
      path: "/about/vision",
    },
    {
      text: "International approval",
      path: "/about/international-approval",
    },
    {
      text: "What does halal mean?",
      path: "/about/halal-meaning",
    },
    {
      text: "Locations",
      path: "/about/locations",
    },
  ],
}

const certificationItems = {
  title: "certification",
  items: [
    {
      text: "Certification procedure",
      path: "/certification/procedure",
    },
    {
      text: "Product categories",
      path: "/certification/categories",
    },
    {
      text: "Our services",
      path: "/certification/services",
    },
    {
      text: "Auditing and training",
      path: "/certification/auditing",
    },
    {
      text: "Benefits of out certification",
      path: "/certification/benefits",
    },
  ],
}

const policiesItems = {
  title: "policies",
  items: [
    {
      text: "Halal guarantee",
      path: "/policies/guarantee",
    },
    {
      text: "Integrity policy",
      path: "/policies/integrity",
    },
    {
      text: "Fee Regulation",
      path: "/policies/fee-regulation",
    },
    {
      text: "Confidentiality And Impartiality",
      path: "/policies/confidentiality-and-impartiality/",
    },
  ],
}

const contactItems = {
  title: "contact",
  items: [
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
  ],
}
