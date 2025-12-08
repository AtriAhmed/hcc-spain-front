import React, { createContext, useContext, useState, ReactNode } from "react"
import { Link as GatsbyLink } from "gatsby"

const TranslationContext = createContext(undefined)

// Function to detect language from URL
const getLanguageFromUrl = pathname => {
  if (!pathname) return "es" // default to Spanish

  // Check if URL starts with /en
  if (pathname.startsWith("/en")) {
    return "en"
  }

  // Check if URL starts with /es
  if (pathname.startsWith("/es")) {
    return "es"
  }

  // Default to Spanish for all other URLs (including root)
  return "es"
}

const translations = {
  en: {
    home: "Home",
    "about us": "About Us",
    certification: "Certification",
    policies: "Policies",
    contact: "Contact",
    blog: "Blog",
    "apply now": "Apply Now",
    "who are we": "Who are we?",
    "company structure": "Company Structure",
    "vision mission and core values": "Vision, Mission and Core Values",
    "international approval": "International Approval",
    "what does halal mean": "What does Halal mean?",
    locations: "Locations",
    "certification procedure": "Certification Procedure",
    "product categories": "Product Categories",
    "our services": "Our Services",
    "auditing and training": "Auditing and Training",
    "benefits of our certification": "Benefits of our Certification",
    "halal guarantee": "Halal Guarantee",
    "integrity policy": "Integrity Policy",
    "fee regulation": "Fee Regulation",
    "confidentiality and impartiality": "Confidentiality and Impartiality",
    "information request": "Information Request",
    feedback: "Feedback",
    complaints: "Complaints",
    "halal certificate check": "Halal Certificate Check",
    "saudi arabia application": "Saudi Arabia Application",
    // Footer translations
    "halal certification spain": "Halal Certification Spain",
    address: "ADDRESS",
    phone: "Phone",
    email: "Email",
    scope: "SCOPE",
    "halal inspection and certification": "Halal inspection and certification",
    "useful links": "Useful Links",
    "contact us": "Contact Us",
    application: "Application",
    "all rights reserved": "All rights reserved",
    "developed by": "Developed by",
  },
  es: {
    home: "Inicio",
    "about us": "Sobre nosotros",
    certification: "Certificación",
    policies: "Políticas",
    contact: "Contacto",
    blog: "Blog",
    "apply now": "Solicitar ahora",
    "who are we": "¿Quiénes somos?",
    "company structure": "Estructura de la empresa",
    "vision mission and core values": "Visión, misión y valores fundamentales",
    "international approval": "Aprobación internacional",
    "what does halal mean": "¿Qué significa Halal?",
    locations: "Ubicaciones",
    "certification procedure": "Procedimiento de certificación",
    "product categories": "Categorías de productos",
    "our services": "Nuestros servicios",
    "auditing and training": "Auditoría y capacitación",
    "benefits of our certification": "Beneficios de nuestra certificación",
    "halal guarantee": "Garantía Halal",
    "integrity policy": "Política de integridad",
    "fee regulation": "Regulación de tarifas",
    "confidentiality and impartiality": "Confidencialidad e imparcialidad",
    "information request": "Solicitud de información",
    feedback: "Comentarios",
    complaints: "Quejas",
    "halal certificate check": "Comprobación del certificado Halal",
    "saudi arabia application": "Solicitud en Arabia Saudita",
    // Footer translations
    "halal certification spain": "CERTIFICACIÓN Halal Correct Spain",
    address: "DIRECCIÓN",
    phone: "Teléfono",
    email: "Correo electrónico",
    scope: "ALCANCE",
    "halal inspection and certification": "Inspección y certificación Halal",
    "useful links": "Enlaces útiles",
    "contact us": "Contáctanos",
    application: "Solicitud",
    "all rights reserved": "Todos los derechos reservados",
    "developed by": "Desarrollado por",
  },
}

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("es") // Default to Spanish

  const t = key => {
    return translations[language]?.[key] || key
  }

  return (
    <TranslationContext.Provider value={{ t, setLanguage, language }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = pathname => {
  const context = useContext(TranslationContext)

  // Detect language from URL
  const urlLanguage = getLanguageFromUrl(pathname)

  const fallbackT = key => translations[urlLanguage]?.[key] || key

  if (!context) {
    return { t: fallbackT, lang: urlLanguage, setLanguage: () => {} }
  }

  // Create translation function that uses URL-based language
  const t = key => {
    return translations[urlLanguage]?.[key] || key
  }

  return {
    t,
    lang: urlLanguage,
    setLanguage: context?.setLanguage,
  }
}

export const Link = ({ to, children, ...props }) => {
  // Get current pathname from window location or props
  const currentPathname =
    typeof window !== "undefined" ? window.location.pathname : ""

  // Detect current language from URL
  const currentLanguage = getLanguageFromUrl(currentPathname)

  // Don't prefix if the destination already has a language prefix
  if (to.startsWith("/en") || to.startsWith("/es")) {
    return (
      <GatsbyLink to={to} {...props}>
        {children}
      </GatsbyLink>
    )
  }

  // For root path, use language prefix only
  if (to === "/") {
    const localizedPath = currentLanguage === "es" ? "/" : `/${currentLanguage}`
    return (
      <GatsbyLink to={localizedPath} {...props}>
        {children}
      </GatsbyLink>
    )
  }

  // Add language prefix to other paths
  const localizedPath =
    currentLanguage === "es" ? to : `/${currentLanguage}${to}`

  return (
    <GatsbyLink to={localizedPath} {...props}>
      {children}
    </GatsbyLink>
  )
}
