import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import './all_pages.css'

const Product_1 = () => (
  <Layout>
    <Seo title="Product" />
    <h1>This is Product Category 1</h1>
    <div className="products">
      <div>

        <div className="product">
          <h3>Product 1</h3>
          <StaticImage 
           src="../images/product_1/sample.jpeg" 

           alt="saple"
          />
        </div>

        <div>
          <h3 className="product">Product 2</h3>
          <StaticImage 
           src="../images/product_1/sample.jpeg" 
           alt="saple"
          />
        </div>
      
      <div>
        <h3 className="product">Product 3</h3>
        <StaticImage 
         src="../images/product_1/sample.jpeg" 
         alt="saple"
        />
      </div>
      </div>
    
    </div>



    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Product_1;
