import React, { useEffect, useRef, useState } from "react"
import Modal from "../../Modal"
import QRCode from "react-qr-code"
import logo2 from "../../../images/logo2.png"
import { StarIcon } from "@heroicons/react/24/outline"
import { useReactToPrint } from "react-to-print"
import "./ToPrint.css"

export default function ViewCertificateCmp({ show, hide, toview }) {
  const [loading, setLoading] = useState(true)

  const componentRef = useRef()
  const qrCodeRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  const handlePrintQrCode = useReactToPrint({
    content: () => qrCodeRef.current,
  })

  useEffect(() => {
    if (toview) if (toview.key) setLoading(false)
  }, [toview])

  return (
    <Modal title="View Certificate" show={show} hide={hide}>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="bg-blue-500 py-2 px-4 rounded-lg text-white mb-2 font-bold"
            >
              Download Certif
            </button>
            <button
              onClick={handlePrintQrCode}
              className="bg-blue-500 py-2 px-4 rounded-lg text-white mb-2 font-bold"
            >
              Download Qr Code
            </button>
          </div>

          <div className="w-[793px] h-[1122px] border-black border p-[50px] flex flex-col justify-between">
            <header className="text-[12px] border-b-2 border-black flex justify-between pb-2">
              <div className="">
                <div>Total Quality HCC France Certification</div>
                <div>PO. 59200 Tourcoing, France</div>
                {/* <div>KvK registration: 27329597</div> */}
                <div>Tel: +33 661 142 787 
                  {/* fax: +31(071)52 35 771 */}
                  </div>
                <div>e-mail: france@halalcorrect.com</div>
                <div>website: www.hcceastafrica.com</div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div className="text-[#30ccbb] text-base">
                  مؤسسة الأمانة الإسلامية لمراقبة اللحوم والأغذية
                </div>
                <div className="text-xl">HCC France Certification</div>
              </div>
              <div className="flex items-center">
                <img
                  src={logo2}
                  alt="HCC France logo"
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
                  We "Total Quality HCC France Certification" hereby declare,
                  that the below mentioned products have been produced according
                  to the Islamic Rities and certified by the rules of Halal
                  Correct Certification.
                </div>
              </section>
              <section className="max-w-[550px] mx-auto flex flex-col gap-2">
                <div className="text-center">
                  CERTIFICATE NR. HC{toview.id.toString().padStart(9, "0")}
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Company address:</div>
                  <div className="col-span-4 justify-self-center">
                    {toview.companyAddress}
                  </div>
                  <div className="col-span-4 justify-self-end">:العنوان</div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Manufacturer:</div>
                  <div className="col-span-4 justify-self-center">
                    {toview.manufacturer}
                  </div>
                  <div className="col-span-4 justify-self-end">:إسم المصنع</div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Manufacturer address:</div>
                  <div className="col-span-4 justify-self-center">
                    {toview.manufacturerAddress}
                  </div>
                  <div className="col-span-4 justify-self-end">:العنوان</div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Brand name:</div>
                  <div className="col-span-4 justify-self-center">
                    {toview.brandName}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :إسم العلامة التجارية
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Product name:</div>
                  <div className="col-span-4 justify-self-center">
                    {toview.productName}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :تعريف المنتج
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">List of approved products:</div>
                  <div className="col-span-4 justify-self-center">
                    See annex HC{toview.id.toString().padStart(9, "0")}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :المنتجات المعتمدة
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Standards applicable:</div>
                  <div className="col-span-4 justify-self-center">
                    {toview.standardsApplicable}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :المواصفات القياسية
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Products Category:</div>
                  <div className="col-span-4 justify-self-center">
                    {toview.productCategory}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :مجال التصنيف
                  </div>
                </div>
                <div className="">
                  <div>
                    Certified products are subjects for continous conformity
                    assurance by HCC France
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Issue date:</div>
                  <div className="col-span-4 justify-self-center">
                    {toview.issueDate}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :تاريخ الإصدار
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Halal Certificate Nr.:</div>
                  <div className="col-span-4 justify-self-center">
                    HC{toview.id.toString().padStart(9, "0")}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :رقم شهادة الإحتلال
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Certificate valid until:</div>
                  <div className="col-span-4 justify-self-center">
                    {toview.validUntil}
                  </div>
                  <div className="col-span-4 justify-self-end">
                    :تاريخ إنتهاء الصلوحية
                  </div>
                </div>
              </section>
              <section className="grid grid-cols-12 max-w-[680px] mx-auto gap-4">
                <div className="col-span-4 flex flex-col items-center">
                  <div>الهيئة الخاصة بالتدقيق والمراقبة</div>
                  <div className="text-center">
                    Chairman of the Foundation HCC France Certification
                    MR. Abdulfatteh Ali-Salah
                  </div>
                </div>
                <div className="col-span-4 justify-self-center">
                  <div className="text-center">Qr code</div>
                  <div
                    className="flex flex-col justify-center items-center"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <QRCode
                      value={`${process.env.GATSBY_APP_URL}check-certificate/${toview?.key}`}
                    />
                  </div>
                </div>
                <div className="col-span-4 flex flex-col items-center">
                  <div>المجلس الشرعي للبحث والإفتاء</div>
                  <div className="text-center">
                    Chairman of the Board for Islamic Fatwa and Research Mr.
                    Imam Galal Ali Amer
                  </div>
                  <div className="h-[150px]"></div>
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
                  shops/restaurants without permission of HCC France.
                </div>
              </div>
              <div className="text-center w-full">
                HCC France Certification is member of World Halal
                Food Council-WHFC <br></br>And accredited by
                MUI-JAKIM-MUIS-ESMA-GAC:Copyright 2018 - HCC France
                Certification ©
              </div>
            </footer>
          </div>

          <div className="print-source">
            <div
              ref={componentRef}
              style={{
                height: "100%",
                width: "100%",
              }}
              className="border-black border p-[25px] flex flex-col justify-between"
            >
              <header className="text-[12px] border-b-2 border-black flex justify-between pb-2">
                <div className="">
                <div>Total Quality HCC France Certification</div>
                <div>PO. 59200 Tourcoing, France</div>
                {/* <div>KvK registration: 27329597</div> */}
                <div>Tel: +33 6 61 14 27 87 
                  {/* fax: +31(071)52 35 771 */}
                  </div>
                <div>e-mail: france@halalcorrect.com</div>
                <div>website: www.hcceastafrica.com</div>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <div className="text-[#30ccbb] text-base">
                    مؤسسة الأمانة الإسلامية لمراقبة اللحوم والأغذية
                  </div>
                  <div className="text-xl">Halal Correct France Certification</div>
                </div>
                <div className="flex items-center">
                  <img
                    src={logo2}
                    alt="HCC France Logo"
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
                      return (
                        <StarIcon key={index} className="h-6 w-6"></StarIcon>
                      )
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
                    We "Total Quality HCC EAST AFRICAN HALAL
CONFIRMATION CENTER LIMITED" hereby
                    declare, that the below mentioned products have been
                    produced according to the Islamic Rities and certified by
                    the rules of HCC France Certification.
                  </div>
                </section>
                <section className="max-w-[550px] mx-auto flex flex-col gap-2">
                  <div className="text-center">
                    CERTIFICATE NR. HC{toview.id.toString().padStart(9, "0")}
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">Company address:</div>
                    <div className="col-span-4 justify-self-center">
                      {toview.companyAddress}
                    </div>
                    <div className="col-span-4 justify-self-end">:العنوان</div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">Manufacturer:</div>
                    <div className="col-span-4 justify-self-center">
                      {toview.manufacturer}
                    </div>
                    <div className="col-span-4 justify-self-end">
                      :إسم المصنع
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">Manufacturer address:</div>
                    <div className="col-span-4 justify-self-center">
                      {toview.manufacturerAddress}
                    </div>
                    <div className="col-span-4 justify-self-end">:العنوان</div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">Brand name:</div>
                    <div className="col-span-4 justify-self-center">
                      {toview.brandName}
                    </div>
                    <div className="col-span-4 justify-self-end">
                      :إسم العلامة التجارية
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">Product name:</div>
                    <div className="col-span-4 justify-self-center">
                      {toview.productName}
                    </div>
                    <div className="col-span-4 justify-self-end">
                      :تعريف المنتج
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">List of approved products:</div>
                    <div className="col-span-4 justify-self-center">
                      See annex HC{toview.id.toString().padStart(9, "0")}
                    </div>
                    <div className="col-span-4 justify-self-end">
                      :المنتجات المعتمدة
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">Standards applicable:</div>
                    <div className="col-span-4 justify-self-center">
                      {toview.standardsApplicable}
                    </div>
                    <div className="col-span-4 justify-self-end">
                      :المواصفات القياسية
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">Products Category:</div>
                    <div className="col-span-4 justify-self-center">
                      {toview.productCategory}
                    </div>
                    <div className="col-span-4 justify-self-end">
                      :مجال التصنيف
                    </div>
                  </div>
                  <div className="">
                    <div>
                      Certified products are subjects for continous conformity
                      assurance by HCC France
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">Issue date:</div>
                    <div className="col-span-4 justify-self-center">
                      {toview.issueDate}
                    </div>
                    <div className="col-span-4 justify-self-end">
                      :تاريخ الإصدار
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">Halal Certificate Nr.:</div>
                    <div className="col-span-4 justify-self-center">
                      HC{toview.id.toString().padStart(9, "0")}
                    </div>
                    <div className="col-span-4 justify-self-end">
                      :رقم شهادة الإحتلال
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">Certificate valid until:</div>
                    <div className="col-span-4 justify-self-center">
                      {toview.validUntil}
                    </div>
                    <div className="col-span-4 justify-self-end">
                      :تاريخ إنتهاء الصلوحية
                    </div>
                  </div>
                </section>
                <section className="grid grid-cols-12 max-w-[680px] mx-auto gap-4">
                  <div className="col-span-4 flex flex-col items-center">
                    <div>الهيئة الخاصة بالتدقيق والمراقبة</div>
                    <div className="text-center">
                      Chairman of the Foundation HCC France Certification
                      Mr. Hussein Mukter Haji Mohamed
                    </div>
                  </div>
                  <div className="col-span-4 justify-self-center">
                    <div className="text-center">Qr code</div>
                    <div
                      className="flex flex-col justify-center items-center"
                      style={{ width: "100px", height: "100px" }}
                    >
                      <QRCode
                        ref={qrCodeRef}
                        value={`${process.env.GATSBY_APP_URL}check-certificate/${toview?.key}`}
                      />
                    </div>
                  </div>
                  <div className="col-span-4 flex flex-col items-center">
                    <div>المجلس الشرعي للبحث والإفتاء</div>
                    <div className="text-center">
                      Chairman of the Board for Islamic Fatwa and Research Mr.
                      Imam Galal Ali Amer
                    </div>
                    <div className="h-[129px]"></div>
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
                    shops/restaurants without permission of HCC France.
                  </div>
                </div>
                <div className="text-center w-full">
                  HCC France Certification is member of World Halal
                  Food Council-WHFC <br></br>And accredited by
                  MUI-JAKIM-MUIS-ESMA-GAC:Copyright 2018 - HCC France
                  Certification ©
                </div>
              </footer>
            </div>
          </div>
        </>
      )}
    </Modal>
  )
}
