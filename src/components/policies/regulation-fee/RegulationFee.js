import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"
import ScrollAnimation from "react-animate-on-scroll"

export default function RegulationFee() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <ScrollAnimation animateIn="animate__fadeInUp">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Fee Regulation:
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" delay={1} duration={2}>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
            <span className="font-bold">Introduction :</span> Halal Correct Germany is highly recognized certification body and already accredited by several accreditation/approval body such as Emirates International Accreditation Center (EIAC), Saudi Food and Drug Authority (SFDA) and Ministry of Industry & Advanced Technology (MOIAT). The recognition allows Halal Correct Germany to broaden its certification services through many companies around France and Europe. To provide a brief explanation how the costumers of Halal Correct Germany will deal with the certification cost, Halal Correct Germany creates this fee regulation system. This description is expected can make the certification processes and procedures as transparent as possible. Therefore, to start the certification process, it is important to deal with several components mentioned below by Halal Correct Germany to decide an estimated certification price.
          </p>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>
              Price component of Halal correct Germany :
              <br />
              <br />
              <div className="grid grid-cols-12 divide-y">
                <div className="col-span-6 font-bold p-2">Components</div>
                <div className="col-span-6 font-bold p-2 !border-t-0">
                  Price
                </div>
                <div className="col-span-6 p-2">
                  <div>- Administration fee</div>
                  <div>- Local/International process of certification</div>
                </div>
                <div className="col-span-6 p-2">€250-€500</div>
                <div className="col-span-6 p-2">
                  <div>-site and size of the company</div>
                  <div>-category of scope</div>
                  -Number of certified products/<div>-Risk of the company</div>
                </div>
                <div className="col-span-6 p-2">€1450-€4500</div>
                <div className="col-span-6 p-2">
                  - Location (Traveling cost/time) (point 3)
                </div>
                <div className="col-span-6 p-2">Depending on the travel distance</div>
                <div className="col-span-6 p-2">
                  <div>
                    - Extension of certified products raw
                    material/screening products
                  </div>
                  <div>- Annex separation</div>
                </div>
                <div className="col-span-6 p-2">€50-€150</div>
                <div className="col-span-6 p-2">- Inspection fee</div>
                <div className="col-span-6 p-2">€60 per hour</div>
              </div>
              <br />
              <br />
            </li>
            <div className="pt-3">
              <span className="font-bold">1. Location (Traveling cost)</span>
              <br />
              <div>
                Each client has different manufacturing location. The distance
                is counted according to the location of the Head office of Halal
                Correct in the Netherlands.
              </div>
              <div>
                There are many costumers located outside of the Netherlands;
                however, it does not mean that the price would be much higher.
                Other several components would affect the charged fee.
                Therefore, the location is considered as one of the factors
                affecting the fee due to Halal correct Germany spending on transport to
                reach the company, accommodation, days of audit, and auditor
                fee.
              </div>
              <div>
                The accessible location from the client in the Netherlands much
                easier rather than the client located in Norway, as an example.
                Then it will increase the traveling cost and other mentioned
                component above.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">2. Site & size of the company</span>
              <br />
              <div>
                Some companies have more than one manufacturer or production
                sites. If this is the case, it means that there will be the need
                to spend more time on carrying out the audit. This also applies
                if the company has much bigger size, usually
                multinational/international companies.
              </div>

              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">3. Category of scope</span>

              <br />
              <div>
                There are 5 categories of products certified by Halal Correct GermanyN HALAL CONFIRMATION CENTER LIMITED;
                category CI (Processing of perishable animal products), CII
                (Processing of perishable plant products), CIII (Processing of
                perishable animal and plant products (mixed products), CIV
                (processing of ambient stable products), CV (Animal
                slaughtering), K Production of (Bio) chemical. It is possible
                that category CV and CI would take much more fee because there
                might be a following activities after the audit. Meat processed
                products and animal slaughtering might need further inspection
                meaning that it would not only take one or two days common
                audit. Animal slaughtering also needs a slaughterman and
                supervisor during its activities. The report should be filled in
                and reviewed to make sure all halal requirement has been met. In
                addition, several company intend to certify per batch
                production; this type of certification has to be charged
                differently (every batch).
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">4. Inspection fee</span>

              <br />
              <div>
                Halal correct Germany can have a highly risk company which usually needs
                further inspection. The inspection is needed to monitor the
                company to make sure they still apply halal procedure after the
                certification process.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">
                5. Number of certified product/raw material/screening products
              </span>

              <br />
              <div>
                After the applicant sends the source screening and application
                form, Halal correct Germany will review and screen the products and raw
                materials. Generally, the applicant is asked to forward the
                specification of raw materials, flowchart (if it is needed), and
                Halal certificate of raw materials.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">6. Risk of the company</span>
              <br />
              <div>
                There are low risk, medium risk and high risk of companies. High
                risk company would normally take much more effort and time to
                review and to audit. It has animal/pork raw materials or it has
                alcoholic products in the company. The complexity of the company
                might affect the certification process.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">
                7. Local/International process of certification
              </span>
              <br />
              <div>
                For the certified products within the country, the complexity is
                less than an export product; especially to export the product to
                Gulf country. The company usually needs a special letter/support
                for specific country when they intend to send their products.
                This letter of support will be provided by Halal correct Germany.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">8. Administration fee</span>
              <br />
              <div>
                Other administrative work has to be done by administration
                assistant; therefore, there will be a specific fee for this
                activity. Administration work is a part of internal process. The
                specific fee shall be made for their activity to support the
                cost from the beginning until the issuance of the certificate.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">
                9. Extension of certified products
              </span>
              <br />

              <div>
                After the audit, company sometimes requests to any changes on
                their issued certificate. Common request is adding a new raw
                material/product to its halal certificate. Others might be the
                approval to use new raw materials on halal certified product.
                When the client asks to add a new raw material/product to its
                halal certificate, a new certificate will be printed out. This
                activity fall for different charge also.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">10. Annexseparation</span>
              <br />

              <div>
                Generally, one client would have one certificate and all halal
                certified products will be mentioned on annex page; however,
                other companies might differ. The request from their costumer
                ask to mention one product only in one annex. It means that if
                the costumers of Halal correct Germany own around 10 Halal certified
                products, there will be around 10 pages of annex shall be made.
                The price of certification is affected by this request.
              </div>
              <br />
            </div>
          </ul>
        </ScrollAnimation>
      </div>
    </div>
  )
}
