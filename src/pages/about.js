import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
//import UncontrolledLottie from "../components/UncontrolledLottie"
//import ControlledLottie from "../components/ControlledLottie"

export default () => (
  <div>
    <Helmet>
      <title>INGENIUM || À propos</title>
      <meta property="og:title" content="INGENIUM || À propos"/>
      <meta property="og:description" content="INGENIUM est un studio de création visuel et sonore"/>
    </Helmet>
    <Layout>
      <div>
        <p>A propos</p>
      </div>
    </Layout>
  </div>
)
