import React, { Component } from "react"
import Lottie from "react-lottie"
import animationData from "../../data/hero.json"

class UncontrolledLottie extends Component {
  constructor(){
    super(props);
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: {this.props.animationData},
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }

    return (
      <div>
        <h1>Lottie</h1>
        <p>Base animation free from external manipulation</p>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    )
  }
}

export default UncontrolledLottie
