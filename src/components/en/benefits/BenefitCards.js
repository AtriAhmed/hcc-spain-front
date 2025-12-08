import React from "react"
import ZoomInOnScroll from "../../../lib/ZoomInOnScroll"
import BenefitCard from "./BenefitCard"

function BenefitCards() {
  return (
    <div className="py-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {benefits.map(benefit => (
        <ZoomInOnScroll key={benefit.text}>
          <BenefitCard text={benefit.text} />
        </ZoomInOnScroll>
      ))}
    </div>
  )
}

export default BenefitCards

const benefits = [
  {
    text: "In many cases, the company itself considers the certificate only as a formality. However, many industries analyze it as a starting point to reach a more global market and seek greater added value for product characteristics. The company that understands the meaning of its halal certificate.",
  },
  {
    text: "In companies that seek halal products, the desire to offer good quality, comply with halal standards and obtain a certificate arises from the internal desire of management and employees. In contrast, in companies that seek essential products, this is more or less imposed by customers. Many companies simply do not do business with suppliers without halal certification.",
  },
  {
    text: "Excellent quality is not only the priority for suppliers with Halal Correct Spain Certification. In most cases, it may be the main objective; however, quality and certification are not inextricably linked. Obtaining a certificate is sometimes compared to obtaining a school diploma: someone possesses the necessary knowledge, skills and vision. But right after obtaining the diploma, the person must prove again and again that they continue to offer adequate performance.",
  },
]
