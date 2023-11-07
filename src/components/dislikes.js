import * as React from "react"

import { useStaticQuery, graphql } from 'gatsby'
import Layout from "./layout"
import RichText from "./helpers/rich-text"

const DislikesSection = () => {
  const data = useStaticQuery(graphql`
      query SectionQuery {
        contentfulSection(sectionId: {eq: "likes"}) {
          title
          content {
            raw
          }
          items {
            title
            url
          }
        }
      }
   `)

  const sectionData = data.contentfulSection ? data.contentfulSection : {}
  return (
    <section className="h-screen w-full flex items-center justify-center bg-[#EEC05D] text-[#173E89]" >
      <div className="max-w-7xl">
      {sectionData.title && <h1 className="text-7xl font-bold mb-8">{sectionData.title}</h1>}
      {sectionData.content && <RichText content={sectionData.content} />}
      </div>
    </section>
  )
}

export default DislikesSection

