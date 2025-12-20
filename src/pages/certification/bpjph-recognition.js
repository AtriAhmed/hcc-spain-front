import React from "react"
import BpjphRecognitionDesc from "../../components/bpjph-recognition/BpjphRecognitionDesc"
import HalalProducer from "../../components/HalalProducer"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"

function BpjphRecognitionPage() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/auditing_1.jpg)] bg-cover bg-center"></div>

      <BpjphRecognitionDesc />
      <HalalProducer />
      <Partnership />
    </div>
  )
}

export default BpjphRecognitionPage

export const Head = () => (
  <Seo
    title="Reconocimiento BPJPH"
    description="Como parte de nuestro marco internacional de acreditación y reconocimiento, el Grupo de Certificación Halal Correct opera bajo la autoridad y supervisión del BPJPH (Badan Penyelenggara Jaminan Produk Halal – Indonesia) para la certificación de productos halal destinados al mercado indonesio."
  />
)
