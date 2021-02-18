import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";
import LatestPosts from "../components/latestPosts";
import Team from "../components/team";

const FrontPageTemplate = () => {

    return (
        <Layout isHomePage>
            <SEO title="Home page" />
            <Hero />
            <LatestPosts />
            <Team />

        </Layout>
    )
}

export default FrontPageTemplate