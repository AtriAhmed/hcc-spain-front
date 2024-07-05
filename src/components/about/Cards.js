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
    text: "Halal Correct Germany ensures adherence to Islamic slaughter and processing principles throughout the supply chain with professionalism. We maintain the highest quality management standards through a rigorous documentation and traceability system, guaranteeing integrity and excellence in halal certification. ",
  },
  {
    title: "the halal consumer",
    text: "Halal Correct Germany is committed to providing trustworthy halal products globally. We continually enhance our quality management system and pursue international accreditations to uphold the highest standards of reliability and integrity in halal certification.",
  },
  {
    title: "accreditations",
    text: "Halal Correct Germany operates in alignment with internationally recognized Halal guidelines, following the quality management system standards ISO 9001:2015/EC 17065:2012. Our aim is to enhance transparency and provide a robust halal guarantee by seeking broad international recognition.",
  },
]