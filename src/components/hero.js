import React from "react"
import { StaticQuery, graphql } from "gatsby"


export default function Hero ({ data }) {
    console.log(data);
    return (
        <StaticQuery
        query={graphql`
        query HeroQuery {
          wpPage(id: {eq: "cG9zdDo2"}) {
                HomePageFields {
                  heroTitle
                  heroSubtitle
                  heroImage {
                    sourceUrl
                  }
                  heroButtonLink
                  heroButtonText
                }
            }
        }
      `}
        render={data => (
            <div className="intro">
                <div className="container">
                    <div className="intro_inner">
                        <h2 className="intro_suptitle">{data.wpPage.HomePageFields.heroSubtitle}</h2>
                        <h1 className="intro_title">{data.wpPage.HomePageFields.heroTitle}</h1>
                        <a className="btn" href={data.wpPage.HomePageFields.heroButtonLink}>
                            {data.wpPage.HomePageFields.heroButtonText}
                        </a>
                    </div>
                </div>
            </div>
        )}
      />

    )
}