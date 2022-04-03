import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>

    <h3>社群媒體</h3>
    <ul>
      <li><Link to="https://www.instagram.com/kamfungcompany" target="_blank">Instagram </Link></li>
    </ul>

    <h3>聯絡</h3>
    <ul>
      <li>tel: 2633-2021</li>
      <li>tel/Whatsap/WeChat: 9367-8821 </li>
      <li>Email: kamfungcompany@gmail.com</li>
      <li>地址 香港葵涌梨木道 32-50號 金運工業大廈 2座11樓E室</li>
    </ul>

    <Link to="/">主頁</Link>
  </Layout>
)

export default AboutPage;
