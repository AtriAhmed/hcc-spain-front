import React from "react"
import Seo from "../../components/seo"
import SaudiApply from "../../components/en/contact/SaudiApply"

function index() {
  return (
    <div className="relative flex justify-center items-center w-full min-h-screen px-3 py-8 bg-teal-500">
      <SaudiApply />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Saudi Arabia Application Form" />
