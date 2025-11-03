import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function WhoAreWe() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            ¿Quiénes somos?
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col gap-4">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Halal Correct Spain es un orgulloso miembro del Grupo de
              Certificación Halal Correct. Nos especializamos en brindar
              servicios de certificación a fabricantes y proveedores de
              productos halal.
            </p>
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Con años de experiencia, Halal Correct Spain se ha ganado una
              reputación como organización profesional y experta en Alemania y
              en toda Europa.
            </p>
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              A diferencia de otros organismos de certificación, Halal Correct
              Spain no busca activamente clientes; en cambio, empresas de toda
              Europa nos buscan por nuestra experiencia y servicio de calidad.
              Durante la última década, hemos consolidado nuestra posición como
              una de las organizaciones halal con mayor experiencia en Europa.
              Elige Halal Correct Spain para obtener servicios de certificación
              confiables que cumplen con los más altos estándares de excelencia
              e integridad.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default WhoAreWe
