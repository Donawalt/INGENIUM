import React from "react"
import Helmet from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"

import "../styles/reset.scss"
import "../styles/base.scss"

export default ({ children }) => (
  <div className="MainApp" id="MainApp">
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="INGENIUM est un studio de création visuelle et sonore"
      />
      <meta name="language" content="FR" />
      <html lang="fr" />
    </Helmet>
    <Header />
    <main> {children} </main>
    <Footer />
  </div>
)
