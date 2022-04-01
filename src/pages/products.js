import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Products = () => (
  <Layout>
    <Seo title="About Page" />
    <h1>Products Page</h1>
    <p>Welcome to the Products Page!</p>
    <ul>
      <li><Link to="/products/ballon">Ballons</Link></li>
      <li><Link to="/products/abalone">Abalone</Link></li>
      <li><Link to="/products/fins">Fins</Link></li>
      <li><Link to="/products/nest">Nest</Link></li>
      <li><Link to="/products/basket">Baskets</Link></li>
      <li><Link to="/products/ginseng">Ginseng</Link></li>
    </ul>
    

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Products;
