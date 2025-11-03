import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function TrainingService() {
  return (
    <div className="w-full">
      <div className="w-full px-8 pb-10 pt-4 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Formación personalizada:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Descubre ahora mismo las soluciones de SGC que satisfacen todas
              sus necesidades de formación.
              <br />
              <br />
              Dado que las habilidades son un requisito previo para un buen
              desempeño, junto con la participación del personal a todos los
              niveles, La Certificación Halal Correct Spain ha desarrollado una
              amplia gama de cursos de formación personalizados para compartir y
              transmitir sus conocimientos al personal de cada empresa.
              <br />
              <br />
              Nuestra gama de cursos de formación se puede implementar en tus
              instalaciones y se adapta a tus necesidades y contexto (duración,
              horario, nivel de dificultad, número de participantes, etc.).
              También podemos diseñar cursos de formación totalmente
              personalizados según tus especificaciones.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default TrainingService
