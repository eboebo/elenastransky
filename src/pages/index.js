import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import RichText from "../components/helpers/rich-text"
import LikesSection from "../components/likes"
import DislikesSection from "../components/dislikes"

const IndexPage = ({data}) => {
  const pageData = data.contentfulPage ? data.contentfulPage : {}
  return (
    <Layout>
    <main className="font-serif">
      <section className="h-screen w-full flex items-center justify-center bg-[#194476] text-[#DCA4BF]" >
        <div className="max-w-7xl">
        {pageData.title && <h1 className="text-7xl font-bold mb-8">{pageData.title}</h1>}
        {pageData.content && <RichText content={pageData.content} />}
        </div>
      </section>

      <div className="grid grid-cols-2">
      <LikesSection />
      <DislikesSection />

      </div>
   
    </main>
    </Layout>
  
  )
}

export default IndexPage


export const query = graphql`
  query HomePageQuery {
    contentfulPage(slug: {eq: "index"}) {
      title
      content {
        raw
      }
    }

  }
`