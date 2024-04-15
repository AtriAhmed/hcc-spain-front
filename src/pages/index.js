import * as React from "react"
import Seo from "../components/seo"
import Why from "../components/Home/Why"
import Principles from "../components/Home/Principles"
import Partnership from "../components/Partnership"
import Procedures from "../components/Home/Procedures"
import PrinciplesTab from "../components/Home/PrinciplesTab"
import HalalProducer from "../components/HalalProducer"
import FadeUpOnScroll from "../lib/FadeUpOnScroll"
import DivsSection from "../components/Home/DivsSection"

function IndexPage() {
  return (
    <div>
      <Why />
      <Principles />
      <DivsSection />
      <Partnership />
      <Procedures />
      <PrinciplesTab />
      <HalalProducer />

      <FadeUpOnScroll>
        <iframe
          title="HCC EAST AFRICAN HALAL CONFIRMATION CENTER LIMITED location"
          style={{ border: "0", width: "100%", height: "350px" }}
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12868.430335959254!2d36.90746137730625!3d-1.3380867654786697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjAnMTQuOCJTIDM2wrA1NScwMS43IkU!5e0!3m2!1sen!2stn!4v1707833714270!5m2!1sen!2stn"
          width="800"
          height="800"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </FadeUpOnScroll>
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
