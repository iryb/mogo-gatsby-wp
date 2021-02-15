import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"


export default function Menu ({ data }) {
    return ( <StaticQuery
        query={graphql`
          query MenuQuery {
            wpMenuItem(locations: {in: HEADER_MENU}) {
                id
                menu {
                  node {
                    slug
                    menuItems {
                      nodes {
                        url
                      }
                    }
                  }
                }
              }
          }
        `}

        render={data => (

            <div className="menu">
                {data.wpMenuItem.menu.node.menuItems.nodes[1].url}
            </div>
        )}
    />)
}