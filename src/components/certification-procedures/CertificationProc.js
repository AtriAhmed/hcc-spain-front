import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import HalalProducer from "../HalalProducer"

function CertificationProc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Solicitud de Certificación Halal:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Halal Correct Spain ha desarrollado un procedimiento de
              certificación Halal para solicitar un Certificado Halal (ver la
              figura a continuación).
              <br />
              <br />
              El contenido del programa de auditoría y todos los ajustes se
              basan en el tamaño y la complejidad de la organización, el
              alcance, los productos y el procesamiento. Se determina el nivel
              comprobado del sistema de gestión y los resultados de auditorías
              anteriores.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Requisitos de Halal Correct Spain:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Todas las organizaciones firman un acuerdo de cooperación que
              describe el procedimiento para ambas partes de forma clara,
              reconocible y verificable. Halal Correct Spain goza de
              reconocimiento internacional y trabaja de acuerdo con las normas
              de calidad GSO 2055- 2:2021 e ISO/IEC 17065:2012.
              <br />
              <br />
              Por lo tanto, Halal Correct Spain establece altos estándares para
              la Certificación Halal. Las Directrices Halal para los
              procedimientos de sacrificio, procesamiento de carne y
              procesamiento de alimentos se establecen en la Norma Halal. Está
              disponible previa solicitud.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
      <HalalProducer />
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Sistema de Certificación Halal Correct Spain:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              La nueva edición de nuestro procedimiento de certificación está
              disponible para todos nuestros clientes y socios. El Sistema de
              Certificación Halal Correct Spain 2021-2022 describe los aspectos,
              definiciones y procedimientos más importantes para tener una
              preparación óptima.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default CertificationProc
