import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Kam Fung Company</h1>
    <p>Awesome Chinese Herbs</p>
    <p>Welcome to Kam Fung Company!</p>
    <StaticImage
      src="../images/product_1/sample.jpeg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>

    </p>
  </Layout>
)

export default IndexPage
