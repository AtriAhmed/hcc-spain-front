import axios from "axios"
import React, { useEffect, useState } from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function Locations() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    axios
      .get("/api/get-locations")
      .then(res => {
        setLocations(res.data.locations)

      })
      .catch(err => {
        
      })
  }, [])

  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-primary capitalize transition-all duration-1000 ">
            Locations:
          </h1>
        </FadeUpOnScroll>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations?.map(({ title, ...data }) => {
            return (
              <FadeUpOnScroll key={title}>
                <section key={title}>
                  <h3 className="font-open font-semibold text-2xl">
                    {title}
                  </h3>
                  <ul className="px-8 pt-4 list-disc">
                    {Object.entries(data).map(pair => (
                      pair[0] === "id" || pair[0] === "created_at" || pair[0] === "updated_at" ? ""
                      : <li key={pair[0]}>
                      <div
                        className={pair[0] === "email" ? "flex gap-2" : ""}
                      >
                        <span className="font-bold capitalize">
                          {pair[0]}:{" "}
                        </span>
                        {pair[0] === "email" ? (
                          <ul>
                            {pair[1].map(email => (
                              <li key={email}>
                                <a
                                  href={`mailto:${email}`}
                                  className="text-blue-500 hover:text-blue-600 transition duration-300"
                                >
                                  {email}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : pair[0] === "tel" ? (
                          <a
                            href={`tel:${pair[1]}`}
                            className="text-blue-500 hover:text-blue-600 transition duration-300"
                          >
                            {pair[1]}
                          </a>
                        ) : (
                          pair[1]
                        )}
                      </div>
                    </li>
                    ))}
                  </ul>
                </section>
              </FadeUpOnScroll>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Locations
