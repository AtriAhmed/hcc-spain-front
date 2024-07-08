import React from "react"

function BenefitCard({ text }) {
  return (
    <div className="max-w-[600px] mx-auto p-6 rounded-lg font-open font-normal text-base text-center md:text-left text-slate-100 hover:text-white bg-sky-900 hover:bg-teal-600 hover:scale-[1.1] transition-all duration-700">
      {text}
    </div>
  )
}

export default BenefitCard
