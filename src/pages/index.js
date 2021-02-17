import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";

const Index = () => {

    return (
        <Layout>
            <SEO title="Home page" />
            <Hero />

        </Layout>
    )
}

export default Index