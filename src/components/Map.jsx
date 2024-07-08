import React from 'react'

export default function Map({ width = "100%", height = "350px" }) {
    return (
        <iframe
            title="halal correct germany location"
            style={{ border: "0", width, height }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.3836646455816!2d6.875760477206717!3d51.48782657180883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ea7a2e0fe1cd%3A0x1359226f6f195fd6!2sCentroallee%20273-277%2C%2046047%20Oberhausen%2C%20Germany!5e0!3m2!1sen!2stn!4v1720457578935!5m2!1sen!2stn"
            allowFullScreen=""
            loading="lazy"
        ></iframe>
    )
}
