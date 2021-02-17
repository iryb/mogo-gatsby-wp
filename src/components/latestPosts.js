import React from "react"
import {StaticQuery, graphql, Link} from "gatsby"
import parse from "html-react-parser";
import Image from "gatsby-image";


export default function LatestPosts ({ data }) {

    return (
        <StaticQuery
            query={graphql`
            query LatestPostsQuery {
              allWpPost(
                  sort: { fields: [date], order: DESC }
                  limit: 3
                ) {
                  nodes {
                    id
                    uri
                    date(formatString: "MMMM DD, YYYY")
                    title
                    excerpt
                    
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
          `}


            render={data => (

                <section className="section latest-posts">
                    <div className="container">
                        <div className="section_header">
                            <h4 className="section_subtitle">Our stories</h4>
                            <h2 className="section_title">Latest blog</h2>
                        </div>
                        <div className="posts-container row">
                            {data.allWpPost.nodes.map(post => (
                                <div className="col-33 posts-card" key={post.id}>
                                    {post.featuredImage && (
                                        <div className="post-image-container">
                                            <Image
                                                fluid={post.featuredImage?.node?.localFile?.childImageSharp?.fluid}
                                                alt={post.featuredImage?.node?.alt}
                                            />
                                        </div>
                                    )}
                                    <div className="post-excerpt">
                                        <div className="post-date">
                                            <small>{post.date}</small>
                                        </div>
                                        <h3>
                                            <Link to={post.uri} itemProp="url">
                                                <span itemProp="headline">{parse(post.title)}</span>
                                            </Link>
                                        </h3>
                                        <div className="text">{parse(post.excerpt)}</div>
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