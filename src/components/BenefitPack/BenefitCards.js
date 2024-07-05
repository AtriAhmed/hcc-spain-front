import React from "react"
import ZoomInOnScroll from "../../lib/ZoomInOnScroll"
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
    text: "In a number of cases, the company itself see the certificate only as formality on a paper. however, there are a lot of industries analyse it as a starting point to reach more global market and target more added value for the product characteristics. the company which understands the meaning of its halal certificate.",
  },
  {
    text: "At the 'wanting companies' the desire to offer good quality, to meet the Halal standards and to obtain a certificate stems from the inner desire of the management and employees. At the 'must-have companies', on the other hand, this is more or less enforced by the customers. A number of companies simply do not do business with non-Halal certified suppliers.",
  },
  {
    text: "Excellent quality is not only the main focus for Halal correct Germany certified suppliers. For most of the cases it can be the main focus; however, quality and certification are not inextricably linked. Obtaining a certificate is sometimes compared to obtaining a school diploma: someone has the necessary knowledge, skills and insight. But just after obtaining the diploma, the person has to prove again and again that he continues to deliver the right performance.",
  },
]
