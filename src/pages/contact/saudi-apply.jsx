import React from "react"
import Seo from "../../components/seo"
import SaudiApply from "../../components/contact/SaudiApply"

function index() {
  return (
    <div className="w-full min-h-screen px-3 py-8 flex items-center justify-center relative bg-teal-500  ">
      <SaudiApply />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Saudi Arabia Application Form" />
