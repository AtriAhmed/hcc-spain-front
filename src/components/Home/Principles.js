import React from "react"
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function Principles() {
  return (
    <div className="w-full py-20 bg-[url(./images/lab_1.jpg)] bg-fixed bg-no-repeat bg-cover bg-[100%_70%]">
      <div className="w-full h-full px-4 md:px-8 max-w-7xl mx-auto bg-center flex items-center">
        <FadeUpOnScroll>
          <section className="p-8 bg-[#9dbc98] backdrop-blur-sm rounded-xl max-w-[600px] flex flex-col gap-3 mx-auto lg:mx-0">
            <h4 className="font-poppins font-semibold text-2xl text-black ">
            Corporate social responsibility principles of Halal correct France:
            </h4>
            <p className="font-open italic text-gray-800">
              We apply these CSR principles With every activity and decision we
              make.
            </p>
            <ul className="font-open font-normal list-none text-gray-900 flex flex-col gap-2">
              <Li>
                Accountability (taking responsibility and accountability).
              </Li>
              <Li>Transparency.</Li>
              <Li>Ethical behavior.</Li>
              <Li>Respect for stakeholder interests.</Li>
              <Li>Respect for laws and regulations.</Li>
              <Li>Respect for international (behavioral) standards.</Li>
              <Li>Respect for human rights.</Li>
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
