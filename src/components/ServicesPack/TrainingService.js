import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function TrainingService() {
  return (
    <div className="w-full">
      <div className="w-full px-8 pb-10 pt-4 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Customized training:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Right now, you can discover the QMS Solutions that meet all your
              training needs.
              <br />
              <br />
              As skills are the prerequisite for good performance, along with
              staff involvement at all levels, Halal correct France Certification has
              developed a wide range of customized training courses so it can
              share and pass on its knowledge to the personnel in each specific
              company.
              <br />
              <br />
              Our range of training courses can be implemented on your premises
              and they are adaptable to your needs and your context (duration,
              schedule, level of difficulty, number of participants, etc.). We
              can also come up with fully customized training courses in
              accordance with your specifications.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default TrainingService
