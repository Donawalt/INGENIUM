import React from "react"


class VideoComponent extends React.Component {
  render(){
    return(
        <video width="100%" src={this.props.srcVideo} autoPlay={this.props.autoPlay} loop={this.props.loop} controls={this.props.controls} muted={this.props.muted}>
          <source src={this.props.srcVideo}
           type={this.props.type} />

           </video>
    )
  }
}

export default VideoComponent
