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
                        id
                        url
                        label
                      }
                    }
                  }
                }
              }
          }
        `}

        render={data => (

            <div className="menu">
                {data.wpMenuItem.menu.node.menuItems.nodes.map( item => (
                    <Link to={item.url} key={item.id}>
                        {item.label}
                    </Link>
                ) )}

                {/*{data.wpMenuItem.menu.node.menuItems.nodes[1].url}*/}
            </div>
        )}
    />)
}