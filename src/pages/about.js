import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>

    <h3>Social Media</h3>
    <ul>
      <li><Link to="https://www.instagram.com/kamfungcompany" target="_blank">Instagram </Link></li>
    </ul>

    <h3>Contacts</h3>
    <ul>
      <li>tel: 2633-2021</li>
      <li>tel/Whatsap/WeChat: 9367-8821 </li>
      <li>Email: kamfungcompany@gmail.com</li>
      <li>Address: </li>
    </ul>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage;
