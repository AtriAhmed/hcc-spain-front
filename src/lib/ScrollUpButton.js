import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Transition } from "@headlessui/react"
import React, { Fragment, useState } from "react"
import { useUIToolsContext } from "../contexts/UIToolsProvider"

function ScrollUpButton() {
  const { windowScroll } = useUIToolsContext()
  const [active, setActive] = useState(false)

  return (
    <Transition
      show={windowScroll > 200}
      as={Fragment}
      enter="transition linear duration-1000"
      enterFrom="scale-75 opacity-0"
      enterTo="scale-100 opacity-100"
      leave="transition linear duration-1000"
      leaveFrom="scale-100 opacity-100"
      leaveTo="scale-75 opacity-0"
    >
      <button
        className={`cursor-pointer z-10 w-12 h-12 border-2 border-[#9dbc98] rounded-[50%] flex items-center justify-center fixed bottom-4 right-4 transition duration-500 ${
          active ? "bg-[#9dbc98]" : "bg-white"
        }`}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          size="lg"
          className={`${active ? "text-white" : "text-[#9dbc98]"}`}
        />
      </button>
    </Transition>
  )
}

export default ScrollUpButton
