import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function BasedOn() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Estos preceptos religiosos sobre la alimentación se basan en:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>El Corán (el libro sagrado de los musulmanes).</li>
            <li>
              La Sunna (la tradición y el estilo de vida del profeta Mahoma).
            </li>
            <li>El consenso de la comunidad musulmana.</li>
            <li>
              Analogía basada en las fuentes primarias del islam, según lo
              explicado por reconocidos eruditos islámicos.
            </li>
          </ul>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
            En la vida diaria, la comida es una parte esencial y, por lo tanto,
            estas leyes dietéticas también desempeñan un papel importante en la
            vida del musulmán. Halal es también una identidad de vida
            consciente. Halal es sinónimo de calidad, higiene y estilo de vida.
            (Fuente: Ikeethalal.nl).
          </p>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default BasedOn
