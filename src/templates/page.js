import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"

import Layout from "../components/layout"

const PageTemplate = ({ data: {page } }) => {

    return (
        <Layout>
            <section className="page-content">
                <h1 className="page-title">{parse(page.title)}</h1>
                {!!page.content && (
                    <div className="content">{parse(page.content)}</div>
                )}
            </section>
        </Layout>
    )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageQuery(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
     page: wpPage(id: { eq: $id }) {
      id
      content
      title
    }
  }
`
