import React from "react"
import { Link } from "gatsby"

export default () => (
  <header>
    <div>
      <Link to="/">INGENIUM</Link>
    </div>
    <nav>
      <Link to="/work">work</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </nav>
  </header>
)
