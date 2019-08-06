import React from "react"
import "../milligram.css"
import "../style.css"

export default class Global extends React.Component {
  render() {
    return <div className="application">{this.props.children}</div>
  }
}
