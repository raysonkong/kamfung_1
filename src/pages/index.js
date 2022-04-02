import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>錦峰公司</h1>
    <h2>Kam Fung Ginseng, Seafood and Herbs</h2>
    <div>
      <StaticImage
        src="../images/product_1/sample.jpeg"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
    <h4>經營</h4>
    <h4>鮑參翅肚 燕窩蟲草</h4>
    <h4>參茸海味 結婚送禮</h4>

    <h3>創辦人: Jenny Lam</h3>
    <p>本公司由Jenny Lam 於2019年創辦 , 希望將參茸海味推廣給廣大市民, 致力提供最好的服務, 讓大家買到 價錢合理質素高的產品</p>

    <h3>歡迎親臨本公司</h3>
    <p>地址 香港葵涌梨木道 32-50號 金運工業大廈 2座11樓E室</p>
    <p>tel: 9367-8821</p>
    <p>敬請預約</p>
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
