import React from "react"
import HalalProducer from "../../components/HalalProducer"
import Partnership from "../../components/Partnership"
import CategoriesList from "../../components/ProductCategPack/CategoriesList"
import ProductCategDesc from "../../components/ProductCategPack/ProductCategDesc"
import Seo from "../../components/seo"

function index({ serverData }) {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/hotdog_1.jpg)] bg-cover bg-center"></div>

      <ProductCategDesc />
      <CategoriesList serverData={serverData} />
      <HalalProducer />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => (
  <Seo
    title="Product categories"
    description="Currently we work with a wide range of product categories. we are also trusted by many International companies which have become our clients for more than 20 years."
  />
)
