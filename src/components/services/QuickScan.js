import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function QuickScan() {
  return (
    <div className="w-full">
      <div className="w-full px-8 pb-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Creemos que las personas tienen derecho a consumir productos halal
              fiables, tanto en Alemania como en Europa y el resto del mundo.
              <br />
              <br />
              Por eso, nos comprometemos a mejorar continuamente nuestro sistema
              de gestión de calidad. Para lograrlo, trabajamos cada vez más a
              nivel internacional y aspiramos día a día por la acreditación
              internacional. Estamos ahí…
              <br />
              <br />
              Nuestros servicios de diagnóstico y análisis rápido de tus
              procesos, procedimientos y materias primas permiten una
              verificación rápida de tu cadena de suministro para que podamos
              implementar un plan de acción y proponer soluciones adecuadas a
              cualquier deficiencia que pueda encontrar.
              <br />
              <br />
              Hemos desarrollado y optimizado herramientas que permiten un
              análisis muy rápido de tu proceso/sistema, cumpliendo al mismo
              tiempo con los requisitos de las normas nacionales e
              internacionales.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default QuickScan
