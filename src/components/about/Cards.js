import React from "react"
import ZoomInOnScroll from "../../lib/ZoomInOnScroll"
import Card from "./Card"

function Cards() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
          {arr.map((element, index) => (
            <ZoomInOnScroll key={index}>
              <Card text={element.text} title={element.title} />
            </ZoomInOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards

const arr = [
  {
    title: "Toda la cadena",
    text: "Halal Correct Spain garantiza el cumplimiento de los principios islámicos de sacrificio y procesamiento en toda la cadena de suministro con profesionalismo. Mantenemos los más altos estándares de gestión de calidad mediante un riguroso sistema de documentación y trazabilidad, lo que garantiza la integridad y la excelencia en la certificación halal.",
  },
  {
    title: "El consumidor halal",
    text: "Halal Correct Spain se compromete a proporcionar productos halal confiables a nivel mundial. Mejoramos continuamente nuestro sistema de gestión de calidad y buscamos acreditaciones internacionales para mantener los más altos estándares de fiabilidad e integridad en la certificación halal.",
  },
  {
    title: "Acreditaciones",
    text: "Halal Correct Spain opera conforme a las directrices Halal reconocidas internacionalmente, siguiendo las normas de sistemas de gestión de calidad ISO 9001:2015/EC 17065:2012. Nuestro objetivo es mejorar la transparencia y ofrecer una sólida garantía halal mediante la búsqueda de un amplio reconocimiento internacional.",
  },
]
