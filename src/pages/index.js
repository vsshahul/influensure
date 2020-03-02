import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import { Link } from "gatsby"
import LandingPage from '../components/landingPage'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingPage />
  {/*   <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
