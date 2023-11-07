import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { BLOCKS, MARKS, INLINES, HYPERLINK } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
var hyperlinkColor = "text-jade"
const Bold = ({ children }) => <span className="font-bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>
const Bullet_List = ({ children }) => (
  <ul className="pl-5 list-disc">{children}</ul>
)
const Order_List = ({ children }) => (
  <ol className="pl-5 list-decimal">{children}</ol>
)
const Link = ({ url, children }) => (
  <a className={hyperlinkColor} href={url.data.uri}>
    {children}
  </a>
)

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.UL_LIST]: (node, children) => <Bullet_List>{children}</Bullet_List>,
    [BLOCKS.OL_LIST]: (node, children) => <Order_List>{children}</Order_List>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const image = getImage(node.data.target)
      return <GatsbyImage image={image} alt={node.data.target.description} />
    },
    [INLINES.HYPERLINK]: (node, children) => {
      if (node.data.uri.indexOf("youtu.be") !== -1) {
        const embedUri = node.data.uri.split("https://youtu.be/").pop()
        const ytEmbed = `https://www.youtube.com/embed/${embedUri}`
        return (
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={ytEmbed}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )
      } else return <Link url={node}>{children}</Link>
    },
  },
}

export default function RichText({ content, className, linkColor }) {
  hyperlinkColor = linkColor ? "text-" + linkColor : "text-jade"

  return (
    <div className={`font-regular text-lg ${className ? className : ""} space-y-6 `}>
      {content && renderRichText(content, options)}
    </div>
  )
}
