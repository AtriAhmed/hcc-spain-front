import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function ProtectServices() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Cómo protegemos nuestros servicios:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>
              Nuestro equipo de gestión de relaciones con el cliente responde a
              cualquier consulta lo antes posible en un plazo de 24 horas.
            </li>
            <li>
              Ampliamos y mantenemos la red con las autoridades internacionales.
            </li>
            <li>
              Aplicamos el estándar de auditoría halal durante la certificación.
            </li>
            <li>
              Participamos en conferencias o talleres nacionales e
              internacionales sobre halal y seguridad alimentaria.
            </li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default ProtectServices
