import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Menu = () => (
  <div style={{
    background: '#f4f4f4',
    paddingTop:'10px',
    marginTop: '0'
  }}>

  <ul style={{
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly'
  }}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/services">Services</Link></li>
  </ul>

  </div>
)

export default Menu;
