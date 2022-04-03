import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const Products = () => (
  <Layout>
    <Seo title="products" />
    <h1>產品</h1>

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

    <div>
      
      <ul>
        <li><Link to="/products/cucumber">海參</Link></li>
        <li><Link to="/products/ballon">花膠</Link></li>
        <li><Link to="/products/abalone">鮑魚</Link></li>
        <li><Link to="/products/fins">魚翅</Link></li>
        <li><Link to="/products/nest">燕窩</Link></li>  
        <li><Link to="/products/ginseng">人蔘</Link></li>
        <li><Link to="/products/cordyceps">冬蟲草</Link></li>
        <li><Link to="/products/herbs">各種藥材</Link></li>
      </ul>
    </div>

    <div>
      <h1>特別產品及服務</h1>
        <ul>  
          <li><Link to="/products/watered_cucumber">專人浸發花膠</Link></li>
          <li><Link to="/products/soup">湯包</Link></li>
          <li><Link to="/products/basket">(送禮/結婚) 花籃</Link></li>
        </ul>
      </div>

   <h4>付款方式</h4>
     <ul>
       <li>Visa/Mastercard/EPS/Cash</li>
     </ul>

    <Link to="/">主頁</Link>
  </Layout>
)

export default Products;
