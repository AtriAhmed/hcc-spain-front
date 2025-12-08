import React from "react"

function ProcedureCard({ text }) {
  return (
    <div className="max-w-[600px] mx-auto p-6 rounded-lg font-open font-normal text-base text-center md:text-left hover:text-white bg-[#f9efdb] hover:bg-[#9dbc98] hover:scale-[1.1] transition-all duration-700">
      {text}
    </div>
  )
}

export default ProcedureCard
