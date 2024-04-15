import React, { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"
import { useUIToolsContext } from "../contexts/UIToolsProvider"

function ZoomInOnScroll({ children, className = "" }) {
  const elementRef = useRef(null)
  const [showElement, setShowElement] = useState(false)
  const { windowScroll } = useUIToolsContext()

  useEffect(() => {
    function handleScroll() {
      const middle =
        (elementRef.current.getBoundingClientRect().top +
          elementRef.current.getBoundingClientRect().bottom) /
        2
      if (!showElement && middle > 0 && middle < window.innerHeight) {
        setShowElement(true)
      }
    }
    handleScroll()
  }, [windowScroll, showElement])

  return (
    <div className={className} ref={elementRef}>
      <div
        className={`transition-all duration-[2s] ${
          showElement ? "" : "scale-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default ZoomInOnScroll
