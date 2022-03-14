import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="Servcies" />
    <h1>This is the Services Page</h1>
    <p>Welcome to the Services Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage;
