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
  
    <li><Link to="/">主頁</Link></li>
    <li><Link to="/products/watered_cucumber">專人浸發海參</Link></li>

    <li><Link to="/products">產品目錄</Link></li>
    <li><Link to="/about">聯絡我們</Link></li>
    

  </ul>

  </div>
)

export default Menu;
