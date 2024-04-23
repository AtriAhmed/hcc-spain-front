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
    text: "Halal correct France shall comply with the foundations of Islamic slaughter and processing of products at all times. Halal correct France handles the entire chain strictly and professionally. In addition, Halal correct France sets the highest standards and requirements to its quality management system by using a professional documentation and traceability system which is implemented.",
  },
  {
    title: "the halal consumer",
    text: "Halal correct France believes that people have the right to consume reliable halal products, in France as well as in Europe and the rest of the world. That is why we continuously aim to improve our quality management system. To achieve this, we have raised our activities to a more international level and we strive for international accreditations and recognition.",
  },
  {
    title: "accreditations",
    text: "Halal correct France Certification works in compliance with the internationally recognized Halal guidelines based on the quality management system ISO 9001:2015/ EC 17065:2012. To provide additional transparency and halal guarantee, it is our goal to obtain broad international recognition. Click here to see all the international accreditations we have obtained.",
  },
]