import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
//import UncontrolledLottie from "../components/UncontrolledLottie"
//import ControlledLottie from "../components/LottieComponents/ControlledLottie"$
import "../styles/index.scss"

export default () => (
  <div>
  <Helmet>
  <title>INGENIUM || Portfolio</title>
  </Helmet>
  <Layout>
    <section>
    <video width="100%" src={'background.mp4'} autoPlay={true} loop={true}>
      <source src={'background.mp4'}
         type="video/mp4" />

    </video>
      <h1 className="mainTitle">INGENIVM</h1>
    </section>
    </Layout>
  </div>
)
