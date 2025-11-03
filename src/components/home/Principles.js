import React from "react"
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function Principles() {
  return (
    <div className="w-full py-20 bg-[url(./images/Team.jpg)] bg-fixed bg-no-repeat bg-cover bg-[100%_70%]">
      <div className="w-full h-full px-4 md:px-8 max-w-7xl mx-auto bg-center flex items-center">
        <FadeUpOnScroll>
          <section className="p-8 bg-[#9dbc98] backdrop-blur-sm rounded-xl max-w-[600px] flex flex-col gap-3 mx-auto lg:mx-0">
            <h4 className="font-poppins font-semibold text-2xl text-black ">
              Principios de responsabilidad social empresarial de Halal Correct
              Spain:
            </h4>
            <p className="font-open italic text-gray-800">
              Aplicamos estos principios de RSE en cada actividad y decisión que
              tomamos.
            </p>
            <ul className="font-open font-normal list-none text-gray-900 flex flex-col gap-2">
              <Li>Responsabilidad (asumir la responsabilidad).</Li>
              <Li>Transparencia.</Li>
              <Li>Comportamiento ético.</Li>
              <Li>Respeto a los intereses de las partes involucradas.</Li>
              <Li>Respeto a las leyes y regulaciones.</Li>
              <Li>Respeto a las normas internacionales (de comportamiento).</Li>
              <Li>Respeto a los derechos humanos.</Li>
            </ul>
          </section>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default Principles

function Li({ children }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircleOutlineRoundedIcon />
      {children}
    </li>
  )
}
