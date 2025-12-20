import React from "react"
import BpjphRecognitionDesc from "../../components/en/bpjph-recognition/BpjphRecognitionDesc"
import HalalProducer from "../../components/en/HalalProducer"
import Partnership from "../../components/en/Partnership"
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
    title="BPJPH recognition"
    description="As part of our international accreditation and recognition framework, the Halal Correct Certification Group operates under the authority and supervision of BPJPH (Badan Penyelenggara Jaminan Produk Halal – Indonesia) for the certification of halal products intended for the Indonesian market."
  />
)
