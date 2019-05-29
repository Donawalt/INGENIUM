import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
//import UncontrolledLottie from "../components/UncontrolledLottie"
//import ControlledLottie from "../components/ControlledLottie"

export default () => (
  <div>
    <Helmet>
      <title>INGENIUM || réalisations</title>
      <meta property="og:title" content="INGENIUM || Réalisations"/>
      <meta property="og:description" content="INGENIUM est un studio de création visuelle et sonore"/>
    </Helmet>
    <Layout>
      <div>
        <p>travaux</p>
      </div>
    </Layout>
  </div>
)
