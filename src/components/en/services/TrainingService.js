import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function TrainingService() {
  return (
    <div className="w-full">
      <div className="w-full px-8 pb-10 pt-4 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Professional Training Programs:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              At Halal Correct Certification group, we are committed to supporting the continuous development of knowledge and competencies in the field of halal certification, compliance requirements, applicable standards, and best practices.
              <br />
              <br />
              Our professional training programs are designed for individuals, professionals, and organizations seeking to enhance their understanding of halal requirements and strengthen their technical and professional capabilities. The courses are open to all interested participants and are developed around general learning objectives and industry needs.
              <br />
              <br />
              Our training programs cover a wide range of topics and can be delivered through different formats, with flexibility in terms of duration, schedule, delivery method, and participants’ level of knowledge, while maintaining the integrity and objectives of each training course.
              <br />
              <br />
              These training activities are dedicated exclusively to knowledge transfer, awareness, and competence development. They do not include consultancy services, technical assistance for the implementation of specific solutions, or support in developing or improving an organization's management system.
              <br />
              <br />
              Through our commitment to quality and impartiality, Halal Correct Certification group ensures that all training activities are conducted independently from certification activities and in accordance with our impartiality and risk management principles.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default TrainingService
