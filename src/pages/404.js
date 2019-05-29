import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>INGENIUM || Erreur 404</title>
    </Helmet>
    <Layout>
      <p>404</p>
    </Layout>
  </div>
)

export default NotFoundPage
