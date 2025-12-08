import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"
import halalBlue from "../../../images/halal_blue.jpg"

function HalalCertification() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-8 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            HALAL CERTIFICATION SERVICES BASED ON OIC/SMIIC:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="py-8 flex flex-col items-center md:flex-row gap-8">
            <img
              src={halalBlue}
              alt="halal blue crescent"
              className="w-full max-w-[200px] max-h-[200px] mx-auto object-contain"
            />
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Throughout the delivery of Halal certification services, Halal
              Correct is in a collaboration with the Turkish government agency,
              International Conformity Assesment Service (ICAS).
              <br />
              We, therefore, become its official representative across European
              continents.
              <br />
              For further information regarding to the relevant applications and
              procedures of Halal services, please kindly click the{" "}
              <a
                href="http://www.icasservice.com/en/services/halal-certification/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                link
              </a>
              .
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default HalalCertification
