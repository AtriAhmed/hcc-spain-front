import React, { useState } from "react"
import HoverDiv from "./HoverDiv"
import img from "../../../images/C.jpg"

const DATA = [
  {
    title: "Benefits of Halal Certification",
    content: `Obtaining Halal certification through
Halal Correct Spain Certification guarantees that
your products meet strict halal production
standards and are suitable for Muslim consumers.
Our certification process provides credibility and
trust, giving your company a competitive
advantage in the halal market.`,
  },
  {
    title: "Certification Process",
    content: `Our certification process is comprehensive and
thorough, ensuring that your manufacturing
practices and supply chain comply with halal
requirements. We conduct audits, inspections,
and reviews to verify compliance, providing you
with the necessary documentation to demonstrate
your commitment to halal integrity.`,
  },
  {
    title: "Market Advantage",
    content: `By obtaining Halal Correct Spain Certification,
you will gain a significant advantage in the halal
market. Our certification logo on your products
and marketing materials enhances your brand
reputation and attracts Muslim consumers who
prioritize halal products. Don't miss out on the
growing halal market segment.`,
  },
]

export default function DivsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0)

  const handleHover = index => {
    setHoveredIndex(index)
  }

  return (
    <div className="grid grid-cols-12 max-w-6xl mx-auto md:py-10 gap-4">
      <section className="col-span-12 md:col-span-5 flex justify-center items-center max-h-[500px] overflow-hidden">
        <img src={img} alt="" className="object-cover" />
      </section>
      <section className="col-span-12 md:col-span-7 flex flex-col relative h-full">
        <div>
          {DATA.map((data, index) => (
            <HoverDiv
              key={index}
              data={data}
              index={index}
              handleHover={handleHover}
            />
          ))}
        </div>
        <div
          className={`absolute left-0 top-0 border-l-2 border-black h-[33%] hidden md:block`}
          style={{
            transform: `translate(0px,${hoveredIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        ></div>
      </section>
    </div>
  )
}
