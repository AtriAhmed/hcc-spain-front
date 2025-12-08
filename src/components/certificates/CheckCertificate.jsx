import axios from "axios"
import React, { useEffect, useState } from "react"
import QRCode from "react-qr-code"
import logo2 from "../../images/logo2.png"
import { ExclamationTriangleIcon, StarIcon } from "@heroicons/react/24/outline"
import { Link } from "../../contexts/TranslationContext"

export default function CheckCertificate({ location, params }) {
  const [loading, setLoading] = useState(true)
  const [key, setKey] = useState()
  const [certificate, setCertificate] = useState()

  useEffect(() => {
    const keyParam = params["key"]
    setKey(keyParam)
  }, [location])

  useEffect(() => {
    if (key)
      axios
        .get(`/api/check-certificate/${key}`)
        .then(res => {
          setCertificate(res.data)
          setLoading(false)
        })
        .catch(err => {
          setLoading(false)
        })
  }, [key])

  if (loading) return <div>loading</div>

  return (
    <div>
      {certificate.key ? (
        <div className="flex justify-center pt-[60px]">
          <div className="flex flex-col justify-between p-[50px]">
            <header className="grid grid-cols-12 pb-2 border-black border-b-2 text-[12px]">
              <div className="col-span-12 sm:col-span-4">
                <div>
                  Total Quality Halal correct Germany Certification(TQHCC)
                </div>
                <div>PO. Box 179, 2300 AD Leiden, Germany, C.C.</div>
                <div>KvK registration: 27329597</div>
                <div>Tel: +31(071)52 35 770 fax: +31(071)52 35 771</div>
                <div>e-mail: info@halalcorrect.com</div>
                <div>website: www.halalcorrect.com</div>
              </div>
              <div className="flex flex-col justify-center items-center col-span-12 sm:col-span-4">
                <div className="text-[#30ccbb] text-base">
                  مؤسسة الأمانة الإسلامية لمراقبة اللحوم والأغذية
                </div>
                <div className="text-xl">
                  Halal correct Germany Certification
                </div>
              </div>
              <div className="flex justify-center sm:justify-end items-center col-span-12 sm:col-span-4">
                <img
                  src={logo2}
                  alt="Halal Correct germany logo"
                  className="w-full max-w-[135px]"
                />
              </div>
            </header>
            <main className="flex flex-col gap-3 text-[14px]">
              <section className="flex flex-col items-center w-full">
                <div className="text-[#30ccbb] text-4xl">شهادة حلال</div>
                <div className="text-base">Halal Certificate</div>
                <div className="flex gap-1 text-[#30ccbb]">
                  {Array.from(Array(7).keys()).map(index => {
                    return <StarIcon key={index} className="w-6 h-6"></StarIcon>
                  })}
                </div>
              </section>
              <section>
                <div className="text-center">
                  <span>بأن المنتوجات المذكورة</span>{" "}
                  <span>"Total Quality Halal Certification"</span>{" "}
                  <span>
                    تشهد مؤسسة الأمانة الإسلامية لمراقبة اللحوم والأغذية
                  </span>
                  <br></br>
                  <span>
                    هنا، أنها حلال وفقا لأحكام الشريعة الإسلامية وقد تمت
                    مراقبتها من طرف مؤسستنا بكل دقة حسب مواصفاتنا العالمية
                    للأغذية الحلال
                  </span>
                </div>
                <div className="text-center">
                  We "Total Quality Halal correct Germany Certification" hereby
                  declare, that the below mentioned products have been produced
                  according to the Islamic Rities and certified by the rules of
                  Halal Correct Certification.
                </div>
              </section>
              <section className="flex flex-col gap-2 max-w-[550px] mx-auto">
                <div className="text-center">
                  CERTIFICATE NR. HC{certificate.id.toString().padStart(9, "0")}
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Company address:</div>
                  <div className="justify-self-center col-span-4">
                    {certificate.companyAddress}
                  </div>
                  <div className="justify-self-end col-span-4">:العنوان</div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Manufacturer:</div>
                  <div className="justify-self-center col-span-4">
                    {certificate.manufacturer}
                  </div>
                  <div className="justify-self-end col-span-4">:إسم المصنع</div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Manufacturer address:</div>
                  <div className="justify-self-center col-span-4">
                    {certificate.manufacturerAddress}
                  </div>
                  <div className="justify-self-end col-span-4">:العنوان</div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Brand name:</div>
                  <div className="justify-self-center col-span-4">
                    {certificate.brandName}
                  </div>
                  <div className="justify-self-end col-span-4">
                    :إسم العلامة التجارية
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Product name:</div>
                  <div className="justify-self-center col-span-4">
                    {certificate.productName}
                  </div>
                  <div className="justify-self-end col-span-4">
                    :تعريف المنتج
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">List of approved products:</div>
                  <div className="justify-self-center col-span-4">
                    See annex HC{certificate.id.toString().padStart(9, "0")}
                  </div>
                  <div className="justify-self-end col-span-4">
                    :المنتجات المعتمدة
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Standards applicable:</div>
                  <div className="justify-self-center col-span-4">
                    {certificate.standardsApplicable}
                  </div>
                  <div className="justify-self-end col-span-4">
                    :المواصفات القياسية
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Products Category:</div>
                  <div className="justify-self-center col-span-4">
                    {certificate.productCategory}
                  </div>
                  <div className="justify-self-end col-span-4">
                    :مجال التصنيف
                  </div>
                </div>
                <div className="">
                  <div>
                    Certified products are subjects for continous conformity
                    assurance by Halal correct Germany
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Issue date:</div>
                  <div className="justify-self-center col-span-4">
                    {certificate.issueDate}
                  </div>
                  <div className="justify-self-end col-span-4">
                    :تاريخ الإصدار
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Halal Certificate Nr.:</div>
                  <div className="justify-self-center col-span-4">
                    HC{certificate.id.toString().padStart(9, "0")}
                  </div>
                  <div className="justify-self-end col-span-4">
                    :رقم شهادة الإحتلال
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Certificate valid until:</div>
                  <div className="justify-self-center col-span-4">
                    {certificate.validUntil}
                  </div>
                  <div className="justify-self-end col-span-4">
                    :تاريخ إنتهاء الصلوحية
                  </div>
                </div>
              </section>
            </main>
            <footer className="flex flex-col items-center gap-1 w-full divide-y-2 divide-black text-[13px]">
              <div className="flex flex-col items-center">
                <div className="text-xl">
                  يمنع إستعمال هذه الشهادة في المطاعم والمحلات التجارية بدون
                  ترخيص رسمي من إدارة المؤسسة
                </div>
                <div>
                  It is not allowed to use this Halal certification by
                  shops/restaurants without permission of Halal correct Germany.
                </div>
              </div>
              <div className="w-full text-center">
                Halal correct Germany Certification (TQHCC) is member of World
                Halal Food Council-WHFC <br></br>And accredited by
                MUI-JAKIM-MUIS-ESMA-GAC:Copyright 2018 - Halal correct Germany
                Certification ©
              </div>
            </footer>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-8 h-screen">
          <div className="flex flex-col font-bold text-red-500">
            <div></div> <ExclamationTriangleIcon className="w-48 h-48" />
            <div className="text-xl">Certificate not found !</div>
          </div>
          <div>
            <Link
              to="/"
              className="px-4 py-2 rounded-xl bg-[#14b8a6] font-bold text-white"
            >
              Go to Halalcorrect.com
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
