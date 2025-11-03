import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function Structure() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Estructura de la empresa:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              El Sr. A. Ali-Salah y el Sr. T. Maatoug son los fundadores de
              Halal Correct Spain, un miembro orgulloso del Grupo de
              Certificación Halal Correct y una empresa líder en el mercado de
              alimentos Halal en Europa.
              <br />
              <br /> Nuestros departamentos trabajan a diario para cumplir los
              objetivos de la organización, con el objetivo de que los alimentos
              Halal sean accesibles para todos. El organigrama a continuación
              ofrece una visión general simplificada de nuestros departamentos.
              Las líneas azules indican los departamentos externos.
              <br />
              <br />
              Nuestros departamentos trabajan a diario para alcanzar los
              objetivos de la organización, con el objetivo de que los alimentos
              Halal sean accesibles para todos. El organigrama a continuación
              muestra una representación simple de los departamentos de la
              organización. Las líneas azules representan los departamentos
              externos.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default Structure
