import React from "react"
import ZoomInOnScroll from "../../../lib/ZoomInOnScroll"
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
    title: "Entire chain",
    text: "Halal Correct Spain guarantees compliance with Islamic principles of slaughter and processing throughout the entire supply chain with professionalism. We maintain the highest quality management standards through a rigorous documentation and traceability system, ensuring integrity and excellence in halal certification.",
  },
  {
    title: "The halal consumer",
    text: "Halal Correct Spain is committed to providing reliable halal products worldwide. We continuously improve our quality management system and seek international accreditations to maintain the highest standards of reliability and integrity in halal certification.",
  },
  {
    title: "Accreditations",
    text: "Halal Correct Spain operates according to internationally recognized Halal guidelines, following ISO 9001:2015/EC 17065:2012 quality management system standards. Our goal is to improve transparency and offer solid halal guarantee by seeking broad international recognition.",
  },
]
