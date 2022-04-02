import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Kam Fung Company</h1>
    <h2>Kam Fung Ginseng, Seafood and Herbs</h2>
    <h3>Specialise in</h3>
    <h4>xxxx,xxxx</h4>
    <h4>xxxx,xxxx</h4>

    <h3>Founder: Jenny</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent</p>

    <h3>Welcome to Visit our Store!</h3>
    <p>Address: ------------------</p>
    <p>tel: 9367-8821</p>
    <p>Please make Appointment!</p>
    <div>
      <StaticImage
        src="../images/product_1/sample.jpeg"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <StaticImage
        src="../images/product_1/sample.jpeg"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <StaticImage
        src="../images/product_1/sample.jpeg"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> 
    </div>
  </Layout>
)

export default IndexPage
