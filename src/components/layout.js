import { useScrollRestoration } from "gatsby"
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const ulScrollRestoration = useScrollRestoration(`main-container`)

  return (
    <div className="">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        id="main-container"
        className="h-screen overflow-y-scroll font-serif -pt-16"
        {...ulScrollRestoration}
      >
        <div className="mx-auto">
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
