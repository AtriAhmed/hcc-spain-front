import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function ProductCategDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-primary capitalize transition-all duration-1000 ">
            Categorías de productos:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open text-base text-center md:text-left text-slate-900 font-semibold">
              Halal Correct Spain es un socio con una sólida red global y más de
              20 años de experiencia atendiendo a productores y proveedores del
              mercado Halal.
              <br />
              <br />
              Halal Correct Spain certifica actualmente los siguientes
              productos:
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default ProductCategDesc
