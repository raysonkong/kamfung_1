import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../../components/layout"
import Seo from "../../components/seo"
import '.././all_pages.css'

const WateredCucumber = () => (
  <Layout>
    <Seo title="Product" />
    <h1>專人浸發海參</h1>

   <div className="products">
       <div className="product">
         <h3>黃肉參</h3>
         <h2>HKD 1,680 - 2,080 一斤 </h2>
         <p>浸發花膠過程繁複, 如無經驗及專業知識, </p>
         <p>一般人很難把花膠浸發好, 然而浪費上等高級食材 </p>
         <p>現在Jenny有專人替你浸發花膠, 讓你即買即煮即食,無需操心</p>
         <StaticImage 
          src="../../images/watered_cucumber/watered_cucumber_1.JPG" 

          alt="saple"

          width="400"
         />
         <p>-------------------------</p>
       </div>

      
   </div>



    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WateredCucumber;
