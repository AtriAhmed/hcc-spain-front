import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function TrainingService() {
  return (
    <div className="w-full">
      <div className="w-full px-8 pb-10 pt-4 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Personalized Training:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Discover right now the QMS solutions that meet all your training
              needs.
              <br />
              <br />
              Since skills are a prerequisite for good performance, along with
              staff participation at all levels, Halal Correct Spain
              Certification has developed a wide range of customized training
              courses to share and transmit their knowledge to the staff of each
              company.
              <br />
              <br />
              Our range of training courses can be implemented at your
              facilities and is adapted to your needs and context (duration,
              schedule, difficulty level, number of participants, etc.). We can
              also design fully customized training courses according to your
              specifications.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default TrainingService
