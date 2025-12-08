import React from "react"
import HalalProducer from "../../components/HalalProducer"
import Partnership from "../../components/Partnership"
import CategoriesList from "../../components/products-categories/CategoriesList"
import ProductCategDesc from "../../components/products-categories/ProductCategDesc"
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
    title="Categorías de productos"
    description="Actualmente trabajamos con una amplia gama de categorías de productos. También contamos con la confianza de muchas empresas internacionales que han sido nuestros clientes durante más de 20 años."
  />
)
