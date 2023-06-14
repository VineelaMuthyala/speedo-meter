import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    const {speed} = this.state
    console.log(speed)
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decreaseSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h2 className="speed-para">Speed is {speed}mph</h2>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            className="acc-btn"
            type="button"
            onClick={this.increaseSpeed}
          >
            Accelerate
          </button>
          <button
            className="breaks-btn"
            type="button"
            onClick={this.decreaseSpeed}
          >
            Apply Breaks
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
