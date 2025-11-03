import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function VisionDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        {/* <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Vision, mission and core values:
          </h3>
        </FadeUpOnScroll> */}
        <FadeUpOnScroll>
          <h3 className="pt-4 font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Nuestra Visión:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pb-8 pt-4 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Creemos firmemente en garantizar que las personas tengan acceso a
              productos halal de confianza, no solo en Alemania, sino también en
              toda Europa y a nivel mundial. Por eso, nos dedicamos a mejorar
              constantemente nuestro sistema de gestión de calidad. Para lograr
              este objetivo, estamos expandiendo nuestras operaciones a escala
              internacional y buscando una mayor acreditación internacional.
            </p>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Nuestra Misión:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pb-8 pt-4 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              La misión de Halal Correct Spain es apoyar a las personas y
              organizaciones que buscan productos halal certificados. Nos
              especializamos en la certificación de mataderos e industrias de
              procesamiento de alimentos en toda Europa, garantizando la
              correcta aplicación de las prácticas halal en todas las etapas,
              incluyendo la preparación, el procesamiento, la manipulación, el
              envasado, el transporte y la distribución de productos
              alimenticios.
            </p>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Valores fundamentales:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-4 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Halal Correct Spain ha establecido un conjunto de principios que
              sirven como guía para nuestros procesos y métodos de trabajo.
              Estos principios —confianza y experiencia, integridad consciente,
              mejora y aprendizaje continuos, y un enfoque objetivo— constituyen
              la base de Halal Correct Spain, garantizando la fiabilidad y la
              excelencia en nuestros servicios.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default VisionDesc
