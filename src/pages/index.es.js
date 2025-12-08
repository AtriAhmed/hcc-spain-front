import * as React from "react"
import Seo from "../components/seo"
import Why from "../components/home/Why"
import Principles from "../components/home/Principles"
import Partnership from "../components/Partnership"
import Procedures from "../components/home/Procedures"
import PrinciplesTab from "../components/home/PrinciplesTab"
import HalalProducer from "../components/HalalProducer"
import FadeUpOnScroll from "../lib/FadeUpOnScroll"
import DivsSection from "../components/home/DivsSection"
import SatisfiedCustomers from "../components/home/SatisfiedCustomers"
import Map from "../components/Map"
import BlogSection from "../components/home/BlogSection"

function IndexPage() {
  return (
    <div>
      <Why />
      <Principles />
      <DivsSection />
      <Partnership />
      <BlogSection />
      <Procedures />
      <PrinciplesTab />
      <HalalProducer />
      <SatisfiedCustomers />
      <FadeUpOnScroll>
        <Map />
      </FadeUpOnScroll>
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Inicio" />

export default IndexPage
