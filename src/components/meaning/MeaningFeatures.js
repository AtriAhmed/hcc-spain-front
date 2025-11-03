import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function MeaningFeatures() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            ¿Cuáles son las características importantes del sacrificio halal?
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
            Las principales condiciones del sacrificio halal son:
          </p>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>
              El animal debe estar inicialmente limpio. El animal debe cumplir
              con los valores universales y morales de salud.
            </li>
            <li>
              El animal debe ser tratado con humanidad. Además, debe estar vivo
              durante el sacrificio y el nombre de Alá (Dios, Creador del
              universo) debe mencionarse sobre él.
            </li>
            <li>
              El animal es sacrificado mediante un corte en el cuello por un
              carnicero islámico experto. También debe darse tiempo suficiente
              para que el animal se desangre antes de continuar con el
              procesamiento.
            </li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default MeaningFeatures
