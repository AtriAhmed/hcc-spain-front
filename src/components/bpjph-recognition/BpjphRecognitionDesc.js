import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function BpjphRecognitionDesc() {
  const offices = [
    {
      name: "Halal Correct Netherlands",
      scope: "Productos alimentarios y químicos",
      url: "https://www.halalcorrect.com",
      urlText: "www.halalcorrect.com",
    },
    {
      name: "Halal Correct France",
      scope: "Productos alimentarios y químicos",
      url: "https://www.halalcorrect.fr",
      urlText: "www.halalcorrect.fr",
    },
    {
      name: "Halal Correct Spain",
      scope: "Productos alimentarios y químicos",
      url: "https://www.halalcorrectspain.com",
      urlText: "www.halalcorrectspain.com",
    },
    {
      name: "Halal Science & Certification Center",
      scope: "Productos alimentarios y cosméticos",
      url: "https://www.halalsciencecenter.com",
      urlText: "www.halalsciencecenter.com",
    },
    {
      name: "Halal Correct Germany",
      scope: "Productos alimentarios y químicos (en proceso)",
      url: "https://www.halalcorrect.de",
      urlText: "www.halalcorrect.de",
    },
  ]
  const legislations = [
    "Ley Nº 33 de 2014 – Garantía de Productos Halal",
    "Reglamento Gubernamental Nº 42 de 2024 – Implementación de la Garantía de Productos Halal",
    "KMA Nº 748/2021 – Lista de Productos Obligatorios",
    "KMA Nº 944/2024 – Categorías de Productos Actualizadas",
    "Normas Halal de Indonesia (SNI 99001, SNI 99002, SNI 99003, SNI 99004)",
    "Decretos del BPJPH sobre etiquetado y procedimientos para certificados extranjeros",
    "KMA Nº 1360 de 2021 – Materiales Exentos de Certificación Halal Obligatoria (Lista Halal Positiva)",
  ]
  const productScopes = [
    "Alimentos;",
    "Bebidas;",
    "Medicamentos;",
    "Cosméticos;",
    "Productos biológicos",
    "Productos químicos;",
    "Productos de ingeniería genética;",
    "Bienes de uso;",
    "Servicios de sacrificio;",
    "Servicios de procesamiento;",
    "Servicios de envasado;",
    "Servicios de almacenamiento;",
    "Servicios de distribución;",
    "Servicios de venta; y/o",
    "Servicios de atención.",
  ]
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl scr800:text-4xl  text-teal-500 capitalize transition-all duration-1000">
            Reconocimiento BPJPH
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <p className="font-open font-normal text-base mt-6">
            Como parte de nuestro marco internacional de acreditación y
            reconocimiento, el Grupo de Certificación Halal Correct opera bajo
            la autoridad y supervisión de{" "}
            <span className="font-bold">
              BPJPH (Badan Penyelenggara Jaminan Produk Halal – Indonesia)
            </span>{" "}
            para la certificación de productos halal destinados al mercado
            indonesio.
          </p>
          <p className="font-open font-normal text-base mt-4">
            El reconocimiento del BPJPH confirma que cada oficina acreditada
            dentro de nuestro grupo cumple con las leyes, estándares y
            requisitos regulatorios halal de Indonesia. Este reconocimiento
            permite a Halal Correct Certification certificar una amplia gama de
            productos que pueden ser exportados o colocados en el mercado
            indonesio como conformes con Halal.
          </p>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <h2 className="pt-6 font-open  font-bold text-xl">
            Autoridad y Legislación
          </h2>
          <p className="font-open font-normal text-base mt-4">
            La autoridad del BPJPH para establecer e implementar estándares
            halal está mandatada por la legislación halal indonesia y los
            instrumentos regulatorios, incluyendo:
          </p>
          <ul className="space-y-2 pt-3 font-open text-base font-bold">
            {legislations.map(legislation => (
              <li key={legislation} className="flex items-start">
                <ThumbtackIcon className="text-teal-500 mr-2 mt-1 w-4 h-4" />
                <span>{legislation}</span>
              </li>
            ))}
          </ul>
          <p className="font-open font-normal text-base mt-4">
            El reconocimiento del BPJPH confirma que cada oficina acreditada en
            nuestro grupo cumple con las leyes, estándares y requisitos
            regulatorios halal de Indonesia. A través de este reconocimiento,
            Halal Correct Certification está autorizada para certificar una
            amplia gama de productos que pueden ser exportados o colocados en el
            mercado indonesio como conformes con Halal.
          </p>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <h2 className="pt-6 font-open  font-bold text-xl">
            Alcance de Productos
          </h2>
          <p className="font-open font-normal text-base mt-4">
            Cada una de nuestras oficinas reconocidas opera dentro de un alcance
            aprobado de productos, que incluye categorías tales como:
          </p>
        </FadeUpOnScroll>
        <ul className="space-y-2 pl-6 pt-3 list-[lower-alpha] list-outside font-open text-base font-bold">
          {productScopes.map(scope => (
            <FadeUpOnScroll key={scope}>
              <li>{scope}</li>
            </FadeUpOnScroll>
          ))}
        </ul>
        <FadeUpOnScroll>
          <h2 className="pt-6 font-open  font-bold text-xl">
            Listas de Productos por Oficina
          </h2>
          <p className="font-open font-normal text-base mt-4">
            Para ofrecer claridad y transparencia, puede visitar las listas de
            productos correspondientes vinculadas para cada oficina:
          </p>
          <ul className="space-y-2 pl-6 pt-3 list-disc list-outside font-open text-base">
            {offices.map(office => (
              <li key={office.name} className="font-bold">
                <span className="">
                  {office.name} – Alcance de productos BPJPH :
                </span>{" "}
                <span className="text-red-500">{office.scope}</span> (
                <a
                  href={office.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {office.urlText}
                </a>
                )
              </li>
            ))}
          </ul>
          <p className="font-open font-normal text-base mt-4">
            Estos enlaces proporcionan categorías y subcategorías detalladas de
            productos reconocidos para certificación bajo las regulaciones del
            BPJPH.
            <a
              href="/Annex-1_Product_List_and_Sub-Categories_under_BPJPH_Scope.pdf"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              {" "}
              (Anexo)
            </a>
          </p>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="flex justify-center mt-8">
            <a
              href="/Annex-1_Product_List_and_Sub-Categories_under_BPJPH_Scope.pdf"
              target="_blank"
              className="font-open px-6 py-3 rounded-md bg-primary hover:bg-[#71906c] font-semibold text-white transition duration-200"
            >
              Haga clic aquí para ver el anexo
            </a>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default BpjphRecognitionDesc

function ThumbtackIcon(props) {
  return (
    <svg viewBox="0 0 486.48 486.12" {...props}>
      <path
        d="M128.19,318.64c-1.7-1.17-3.42-2-4.7-3.28c-32.33-32.27-64.64-64.55-96.88-96.9c-12.02-12.07-11.95-29.4,0.12-40.34
	c6.72-6.09,15.24-7.36,23.81-7.34c20.08,0.06,39.16,5.43,57.88,12.08c10.49,3.73,20.78,8.06,31.03,12.42
	c2.73,1.16,4.33,0.95,6.51-1.05c30.93-28.42,61.94-56.75,92.96-85.08c16.12-14.73,32.22-29.47,48.47-44.05
	c2.47-2.21,2.73-4.24,2.35-7.36c-1.5-12.36-3.49-24.77-3.54-37.17c-0.06-15.89,8.18-22.33,23.78-20.14
	c14.42,2.02,26.79,9.27,38.43,17.22c47.53,32.49,87.6,72.71,120.9,119.61c8.29,11.67,15.43,24.22,17,38.97
	c1.47,13.78-5.87,23.19-19.68,23.06c-12.9-0.12-25.8-2.09-38.65-3.61c-3.11-0.37-5.07-0.12-7.32,2.35
	c-42.94,47.24-85.98,94.39-129.1,141.47c-2.14,2.34-2.32,4.06-1.07,6.93c10.43,23.84,19.73,48.12,22.95,74.12
	c1.08,8.78,1.32,18.13-0.49,26.71c-4.43,20.96-29.71,27.76-45.09,12.51c-28.18-27.93-56.13-56.08-84.18-84.15
	c-5.76-5.77-11.5-11.56-17.65-17.75c-4.56,3.65-8.94,7.13-13.28,10.66C105.81,406.69,58.9,444.89,11.92,483
	c-1.86,1.51-4.32,3.09-6.52,3.12c-1.83,0.02-4.98-1.97-5.25-3.46c-0.45-2.57,0.09-6.08,1.64-8.11c6.94-9.16,14.37-17.94,21.63-26.86
	c33.98-41.75,67.96-83.49,101.93-125.24C125.98,321.67,126.54,320.85,128.19,318.64z"
      />
    </svg>
  )
}
