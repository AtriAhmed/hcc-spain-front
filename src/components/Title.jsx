import React from 'react'

export default function Title({children, size, customClassName}) {
  return (
    <div className={`font-bold ${size ? `${size}` :"text-xl" } ${customClassName}`}>{children}</div>
  )
}