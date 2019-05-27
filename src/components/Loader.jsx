import React from "react"
import Lottie from "react-lottie"
import animationData from "../../data/hero.json"

class Loader extends React.Component {
  constructor(){

  }
  render() {
        return (
      <div>
      <section>
        <UncontrolledLottie animationData={animationData}/>
      </section>
      </div>
    )
  }
}
