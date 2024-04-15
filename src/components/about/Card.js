import React from "react"

function Card({ title, text }) {
  return (
    <div className="max-w-[600px] mx-auto group hover:scale-[1.1] transition-all duration-700">
      <h3 className="mb-4 font-poppins font-bold text-2xl md:text-3xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
        {title}
      </h3>
      <div className=" p-6 rounded-lg font-open font-normal text-base text-center md:text-left group-hover:text-white group-hover:bg-[#9dbc98] bg-[#f9efdb] transition-all duration-700 ">
        {text}
      </div>
    </div>
  )
}

export default Card
