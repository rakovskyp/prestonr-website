import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Error: 404</h1>
    <p>This page doesn&#39;t exist...</p>
  </Layout>
)

export default NotFoundPage
