import { Transition } from "@headlessui/react"
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import logo from "../images/kenya.jpg"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react"
import { useUIToolsContext } from "../contexts/UIToolsProvider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { CloseRounded } from "@mui/icons-material"

function MobileNavbar() {
  const { mobileNavbarOpen, setMobileNavbarOpen } = useUIToolsContext()
  const [open, setOpen] = useState(-1)

  //   closing the dropdown whenever the navbar closes
  useEffect(() => {
    !mobileNavbarOpen && setOpen(-1)
  }, [mobileNavbarOpen])

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen overflow-hidden z-[1000] ${mobileNavbarOpen ? "pointer-events-auto" : "pointer-events-none"
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
                alt="Halal Correct GermanyN HALAL CONFIRMATION CENTER LIMITED logo"
                className="w-full max-w-[300px] mx-auto"
              />
            </Link>
          </div>
          {/* menu */}
          <ul className="divide-y mt-5">
            {items.map((item, index) =>
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
                        className={`transition duration-300 ${open === index ? "-rotate-180" : ""
                          }`}
                      />
                    }
                  >
                    <AccordionHeader
                      className={`px-3 py-2 flex font-open font-semibold text-base text-left ${open === index ? "border-b" : "border-0"
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

const items = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Apply now",
    path: "/contact/apply",
  },
  {
    title: "About us",
    children: [
      {
        title: "Who are we?",
        path: "/about",
      },
      {
        title: "Company structure",
        path: "/about/structure",
      },
      {
        title: "Vision, mission and core values",
        path: "/about/vision",
      },
      {
        title: "International approval",
        path: "/about/international-approval",
      },
      {
        title: "What does halal mean?",
        path: "/about/halal-meaning",
      },
      {
        title: "Locations",
        path: "/about/locations",
      },
    ],
  },
  {
    title: "Certification",
    children: [
      {
        title: "Certification procedure",
        path: "/certification/procedure",
      },
      {
        title: "Product categories",
        path: "/certification/categories",
      },
      {
        title: "Our services",
        path: "/certification/services",
      },
      {
        title: "Auditing and training",
        path: "/certification/auditing",
      },
      {
        title: "Benefits of our certification",
        path: "/certification/benefits",
      },
    ],
  },
  {
    title: "Policies",
    children: [
      {
        title: "Halal guarantee",
        path: "/policies/guarantee",
      },
      {
        title: "Integrity policy",
        path: "/policies/integrity",
      },
      {
        title: "Fee Regulation",
        path: "/policies/fee-regulation",
      },
      {
        title: "Confidentiality And Impartiality",
        path: "/policies/confidentiality-and-impartiality/",
      },
    ],
  },
  {
    title: "Contact",
    children: [
      {
        title: "Request for information",
        path: "/contact/information",
      },
      {
        title: "Feedback",
        path: "/contact/feedback",
      },
      {
        title: "Complaint",
        path: "/contact/complaint",
      },
      {
        title: "Halal certificate check",
        path: "/contact/check",
      },
    ],
  },
]
