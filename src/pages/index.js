import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";
import LatestPosts from "../components/latestPosts";

const Index = () => {

    return (
        <Layout>
            <SEO title="Home page" />
            <Hero />
            <LatestPosts />

        </Layout>
    )
}

export default Index