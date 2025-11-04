import React from "react"

export default function Map({ width = "100%", height = "350px" }) {
  return (
    <iframe
      title="Halal Correct Spain location"
      style={{ border: "0", width, height }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.990686956008!2d-0.48892640000000004!3d38.33852889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62364ac49f4713%3A0x2560d5336f355d91!2sAv.%20Perfecto%20Palacio%20de%20la%20Fuente%2C%201%2C%2003001%20Alicante%20(Alacant)%2C%20Alicante%2C%20Spain!5e1!3m2!1sen!2stn!4v1762225062962!5m2!1sen!2stn"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  )
}
