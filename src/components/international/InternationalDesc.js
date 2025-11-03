import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function InternationalDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Aprobación internacional:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              ¿Sabía que Halal Correct Spain es la organización Halal con más
              aprobaciones internacionales en Alemania?
              <br />
              <br />
              Halal Correct Spain está acreditada y reconocida por numerosas
              autoridades islámicas internacionales como la SFDA, la EIAC y la
              MOIAT.
              <br />
              <br />
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default InternationalDesc
