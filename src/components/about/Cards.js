import React from "react"
import ZoomInOnScroll from "../../lib/ZoomInOnScroll"
import Card from "./Card"

function Cards() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
          {arr.map((element, index) => (
            <ZoomInOnScroll key={index}>
              <Card text={element.text} title={element.title} />
            </ZoomInOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards

const arr = [
  {
    title: "the entire chain",
    text: "HCC EAST AFRICAN HALAL CONFIRMATION CENTER LIMITED shall comply with the foundations of Islamic slaughter and processing of products at all times. HCC EAST AFRICAN HALAL CONFIRMATION CENTER LIMITED handles the entire chain strictly and professionally. In addition, HCC EAST AFRICAN HALAL CONFIRMATION CENTER LIMITED sets the highest standards and requirements to its quality management system by using a professional documentation and traceability system which is implemented.",
  },
  {
    title: "the halal consumer",
    text: `We believe that people have the right to consume reliable halal meat, in
    Kenya as well as in Africa and the rest of the world. That is why we are committed to continuously
    improve our own quality management system. To achieve this, we are working more and more on an
    international level and we increasingly aim for international accreditation.`,
  },
  {
    title: "accreditations",
    text: "HCC EAST AFRICAN HALAL CONFIRMATION CENTER LIMITED works in compliance with the internationally recognized Halal guidelines based on the quality management system ISO 9001:2015/ EC 17065:2012. To provide additional transparency and halal guarantee, it is our goal to obtain broad international recognition.",
  },
]
