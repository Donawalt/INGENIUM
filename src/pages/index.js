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
  </Helmet>
  <Layout>
    <section>
      <VideoComponent type="video/mp4" autoPlay="true" loop="true" controls={false} srcVideo={'background.mp4'} muted={false} />
      <h1 className="mainTitle">INGENIVM</h1>
    </section>
    </Layout>
  </div>
)
