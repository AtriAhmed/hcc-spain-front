import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function AnimalWalefare() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Bienestar animal:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              El bienestar de los animales destinados al sacrificio halal es una
              parte fundamental del proceso tradicional de certificación halal
              de Halal correct Spain. El sistema tradicional y ritual de
              sacrificio halal exige un enfoque holístico para garantizar que
              toda la carne sacrificada tradicionalmente halal cumpla con los
              altos estándares de bienestar animal. Además, los supervisores y
              auditores técnicos con formación halal tradicional trabajarán en
              estrecha colaboración con los mataderos con certificación halal
              tradicional para garantizar que el componente de Tayyib (salud)
              del halal se lleve a cabo correctamente. Esto proporcionará carne
              segura y de alta calidad que salvaguardará los estándares de
              bienestar animal.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default AnimalWalefare
