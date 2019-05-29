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
      <div className="mainTitle">
        <h1>INGENIVM</h1>
        <h2>STUDIO DE CRÉATION VISUELLE ET SONORE </h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="filterSVG">
            <feTurbulence type="fractalNoise" baseFrequency="0.10" numOctaves="2" result="warpper"/>
            <feColorMatrix in="warpper" type="hueRotate">
            <animate attributeType="XML" attributeName="values" values="0;110;150;210;360;600;360;210;0" dur="5s" repeatCount="indefinite"/>
            </feColorMatrix>
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="70" in="SourceGraphic"/>
            </filter>
            </defs>
      </svg>
    </section>
    <section>

    </section>
    </Layout>
  </div>
)
