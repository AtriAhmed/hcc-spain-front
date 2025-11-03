import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function MeaningDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Garantía de calidad Halal Correct Spain:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Halal significa lo permitido para los musulmanes que profesan el
              islam. Abarca no solo el producto final, sino también cada paso
              previo a su entrega.
              <br />
              <br />
              Halal es una práctica alimentaria regida por normas y directrices
              claras que los musulmanes están obligados a observar. Va más allá
              de los productos cárnicos; según los principios islámicos, todo lo
              que se considera Halal es beneficioso para las personas, los
              animales, el medio ambiente y la sociedad. Lo mismo se aplica a lo
              que se considera haram (prohibido).
              <br />
              <br />
              Estas directrices religiosas sobre la alimentación se basan en:
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default MeaningDesc
