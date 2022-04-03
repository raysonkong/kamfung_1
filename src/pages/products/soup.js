import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../../components/layout"
import Seo from "../../components/seo"
import '.././all_pages.css'

const Soup = () => (
  <Layout>
    <Seo title="Product" />
    <h1>湯包</h1>
    <div className="products">
        <div className="product">
          <h3>Product 1</h3>
          <h2>HKD xxx</h2>
          <StaticImage 
           src="../../images/product_1/sample.jpeg" 

           alt="saple"
          />
          <p>-------------------------</p>
        </div>

        <div className="product">
          <h3>Product 1</h3>
          <h2>HKD xxx</h2>
          <StaticImage 
           src="../../images/product_1/sample.jpeg" 

           alt="saple"
          />
          <p>-------------------------</p>
        </div>

        <div className="product">
          <h3>Product 1</h3>
          <h2>HKD xxx</h2>
          <StaticImage 
           src="../../images/product_1/sample.jpeg" 

           alt="saple"
          />
          <p>-------------------------</p>
        </div>  
    </div>




    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Soup;
