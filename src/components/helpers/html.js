import React from "react"

export default function HTML({ className, content }) {
  return (
    <div
      className={`${className && className} font-light`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
