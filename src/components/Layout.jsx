import React from "react"
import Helmet from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"

export default ({ children }) => (
  <div className="MainApp" id="MainApp">
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>INGENIUM || Portfolio</title>
      <meta name="description" content="" />
      <meta name="language" content="FR" />
      <html lang="fr" />
    </Helmet>
    <Header />
    <div> {children} </div>
    <Footer />
  </div>
)
