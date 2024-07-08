import axios from "axios"
import React, { useEffect, useState } from "react"
import QRCode from "react-qr-code"
import logo2 from "../../images/logo2.png"
import { ExclamationTriangleIcon, StarIcon } from "@heroicons/react/24/outline"
import { Link } from "gatsby"

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
        <div className="pt-[60px] flex justify-center">
          <div className=" p-[50px] flex flex-col justify-between">
            <header className="grid grid-cols-12 text-[12px] border-b-2 border-black pb-2">
              <div className="col-span-12 sm:col-span-4">
                <div>Total Quality Halal correct Germany Certification(TQHCC)</div>
                <div>PO. Box 179, 2300 AD Leiden, Germany, C.C.</div>
                <div>KvK registration: 27329597</div>
                <div>Tel: +31(071)52 35 770 fax: +31(071)52 35 771</div>
                <div>e-mail: info@halalcorrect.com</div>
                <div>website: www.halalcorrect.com</div>
              </div>
              <div className="col-span-12 sm:col-span-4 flex justify-center items-center flex-col">
                <div className="text-[#30ccbb] text-base">
                  مؤسسة الأمانة الإسلامية لمراقبة اللحوم والأغذية
                </div>
                <div className="text-xl">Halal correct Germany Certification</div>
              </div>
              <div className="col-span-12 sm:col-span-4 flex items-center justify-center sm:justify-end">
                <img
                  src={logo2}
                  alt="halal correct germany logo"
                  className="w-full max-w-[135px]"
                />
              </div>
            </header>
            <main className="text-[14px] flex flex-col gap-3">
              <section className="flex flex-col w-full items-center">
                <div className="text-[#30ccbb] text-4xl">شهادة حلال</div>
                <div className="text-base">Halal Certificate</div>
                <div className="flex gap-1 text-[#30ccbb]">
                  {Array.from(Array(7).keys()).map(index => {
                    return <StarIcon key={index} className="h-6 w-6"></StarIcon>
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
                  We "Total Quality Halal correct Germany Certification" hereby declare,
                  that the below mentioned products have been produced according
                  to the Islamic Rities and certified by the rules of Halal
                  Correct Certification.
                </div>
              </section>
              <section className="max-w-[550px] mx-auto flex flex-col gap-2">
                <div className="text-center">
                  CERTIFICATE NR. HC{certificate.id.toString().padStart(9, "0")}
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Company address:</div>
                  <div className="col-span-4 justify-self-center">
                    {certificate.companyAddress}
                  </div>
                  <div className="col-span-4 justify-self-end">:العنوان</div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Manufacturer:</div>
                  <div className="col-span-4 justify-self-center">
                    {certificate.manufacturer}
                  </div>
                  <div className="col-span-4 justify-self-end">:إسم المصنع</div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Manufacturer address:</div>
                  <div className="col-span-4 justify-self-center">
                    {certificate.manufacturerAddress}
                  </div>
                  <div className="col-span-4 justify-self-end">:العنوان</div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Brand name:</div>
                  <div className="col-span-4 justify-self-center">
                    {certificate.brandName}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :إسم العلامة التجارية
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Product name:</div>
                  <div className="col-span-4 justify-self-center">
                    {certificate.productName}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :تعريف المنتج
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">List of approved products:</div>
                  <div className="col-span-4 justify-self-center">
                    See annex HC{certificate.id.toString().padStart(9, "0")}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :المنتجات المعتمدة
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Standards applicable:</div>
                  <div className="col-span-4 justify-self-center">
                    {certificate.standardsApplicable}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :المواصفات القياسية
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Products Category:</div>
                  <div className="col-span-4 justify-self-center">
                    {certificate.productCategory}
                  </div>
                  <div className="col-span-4 justify-self-end">
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
                  <div className="col-span-4 justify-self-center">
                    {certificate.issueDate}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :تاريخ الإصدار
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Halal Certificate Nr.:</div>
                  <div className="col-span-4 justify-self-center">
                    HC{certificate.id.toString().padStart(9, "0")}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :رقم شهادة الإحتلال
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Certificate valid until:</div>
                  <div className="col-span-4 justify-self-center">
                    {certificate.validUntil}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :تاريخ إنتهاء الصلوحية
                  </div>
                </div>
              </section>
            </main>
            <footer className="text-[13px] divide-y-2 divide-black flex flex-col items-center gap-1 w-full">
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
              <div className="text-center w-full">
                Halal correct Germany Certification (TQHCC) is member of World Halal
                Food Council-WHFC <br></br>And accredited by
                MUI-JAKIM-MUIS-ESMA-GAC:Copyright 2018 - Halal correct Germany
                Certification ©
              </div>
            </footer>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 h-screen items-center justify-center">
          <div className="text-red-500 font-bold flex flex-col">
            <div></div> <ExclamationTriangleIcon className="h-48 w-48" />
            <div className="text-xl">Certificate not found !</div>
          </div>
          <div>
            <Link
              to="/"
              className="bg-[#14b8a6] py-2 px-4 rounded-xl text-white font-bold"
            >
              Go to Halalcorrect.com
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
