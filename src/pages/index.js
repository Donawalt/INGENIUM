import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import VideoComponent from "../components/UI/VideoComponent"
//import UncontrolledLottie from "../components/UncontrolledLottie"
//import ControlledLottie from "../components/LottieComponents/ControlledLottie"$
import "../styles/index.scss"

export default () => (
  <div>
  <Helmet>
  <title>INGENIUM || Portfolio</title>
  <meta property="og:title" content="INGENIUM || Portfolio"/>
  <meta property="og:description" content="INGENIUM est un studio de création visuel et sonore"/>
  {/*<meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
  <meta property="og:url" content="http://euro-travel-example.com/index.htm">
  <meta name="twitter:card" content="summary_large_image">*/}
  </Helmet>
  <Layout>
    <section className="introCover">
      <VideoComponent type="video/mp4" autoPlay="true" loop="true" controls={false} srcVideo={'background.mp4'} muted={false} />
      <h1 className="mainTitle">INGENIVM</h1>
    </section>
    <section>

    </section>
    </Layout>
  </div>
)
