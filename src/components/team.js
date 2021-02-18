import React from "react"
import {StaticQuery, graphql, Link} from "gatsby"
import parse from "html-react-parser";
import Image from "gatsby-image";


export default function Team ({ data }) {

    return (
        <StaticQuery
            query={graphql`
            query TeamQuery {
              allWpTeamPost(
                  sort: { fields: [date], order: DESC }
                  limit: 3
                ) {
                  edges{
                    node{
                        id
                        uri
                        date(formatString: "MMMM DD, YYYY")
                        title
                        content
                        
                        featuredImage {
                          node {
                            altText
                              localFile {
                                childImageSharp {
                                  fluid(maxWidth: 1000, quality: 100) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
            }
          `}


            render={data => (

                <section className="section team">
                    <div className="container">
                        <div className="section_header">
                            <h4 className="section_subtitle"></h4>
                            <h2 className="section_title">Team</h2>
                        </div>
                        <div className="posts-container row">
                            {data.allWpTeamPost.edges.map(post => (
                                <div className="col-33 person" key={post.node.id}>
                                    {post.node.featuredImage && (
                                        <div className="post-image-container">
                                            <Image
                                                fluid={post.node.featuredImage?.node?.localFile?.childImageSharp?.fluid}
                                                alt={post.node.featuredImage?.node?.alt}
                                            />
                                        </div>
                                    )}
                                    <div className="post-excerpt">
                                        <h3>
                                            <span itemProp="headline">{parse(post.node.title)}</span>
                                        </h3>
                                        <div className="text">{parse(post.node.content)}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        />

    )
}