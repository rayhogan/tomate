import React from "react"
import "./App.css"
import twitter from "./images/twitter.svg"
import github from "./images/github.svg"
import linkedin from "./images/linkedin.svg"
import alarm from "./sounds/alarm.mp3"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      workTimer: 900,
      breakTimer: 300,
      running: false,
      paused: false,
      working: false,
      break: false,
      workTime: 15,
      breakTime: 5,
      backgroundColor: "#f9b08a",
    }

    this.audio = new Audio(alarm)

    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
    this.breakCountDown = this.breakCountDown.bind(this)
    this.breakTime = this.countDown.bind(this)
    this.resetSettings = this.resetSettings.bind(this)
    this.pauseTimer = this.pauseTimer.bind(this)
    this.selectWorkTime = this.selectWorkTime.bind(this)
    this.selectBreaktime = this.selectBreakTime.bind(this)
  }

  startTimer(e) {
    if (!this.state.running) {
      if (this.state.paused) {
        this.setState({
          running: true,
          paused: false,
          backgroundColor: "#f9b08a",
        })
      } else {
        this.setState({
          running: true,
          workInterval: setInterval(this.countDown, 1000),
          backgroundColor: "#f9b08a",
        })
      }
    }
  }

  countDown(e) {
    this.state.workTimer === 5 && this.audio.play()

    if (this.state.workTimer > 0 && this.state.running) {
      this.setState({
        workTimer: this.state.workTimer - 1,
      })
    } else {
      if (!this.state.paused) {
        clearInterval(this.state.workInterval)
        this.setState({
          break: true,
          breakInterval: setInterval(this.breakCountDown, 1000),
          workTimer: this.state.workTime * 60,
        })
      }
    }
  }

  breakCountDown(e) {
    this.state.breakTimer === 5 && this.audio.play()

    if (this.state.breakTimer > 0 && this.state.running) {
      this.setState({
        breakTimer: this.state.breakTimer - 1,
        backgroundColor: "#86f490",
      })
    } else {
      if (!this.state.paused) {
        clearInterval(this.state.breakInterval)
        this.setState({
          break: false,
          workInterval: setInterval(this.countDown, 1000),
          breakTimer: this.state.breakTime * 60,
          backgroundColor: "#86f490",
        })
      }
    }
  }

  resetSettings(e) {
    clearInterval(this.state.workInterval)
    clearInterval(this.state.breakInterval)
    this.setState({
      running: false,
      paused: false,
      workTimer: this.state.workTime * 60,
      breakTimer: this.state.breakTime * 60,
      backgroundColor: "#f9b08a",
    })
  }

  pauseTimer(e) {
    this.setState({
      running: false,
      paused: true,
    })
  }

  selectWorkTime(event) {
    this.setState({
      workTime: event.target.value,
      workTimer: event.target.value * 60,
    })
  }

  selectBreakTime(event) {
    this.setState({
      breakTime: event.target.value,
      breakTimer: event.target.value * 60,
    })
  }

  render() {
    var settingClassName = "Control-Panel " + (this.state.running || this.state.paused ? "disableSettings" : null)
    return (
      <div className="App">
        <header className="App-header" style={{ backgroundColor: `${this.state.backgroundColor}` }}>
          <div className="App-Title">
            <h1 style={{ fontSize: "calc(60px + 2vmin)", fontWeight: "400" }}>T🍅️mate</h1>
          </div>
          <div className={settingClassName}>
            <div className="Timer-Controls">
              <div className="Timer-Label">Work Time</div>

              <select name="work-time" id="work-time" onChange={this.selectWorkTime}>
                <option value="15">15 mins</option>
                <option value="20">20 mins</option>
                <option value="25">25 mins</option>
                <option value="30">30 mins</option>
                <option value="35">35 mins</option>
                <option value="40">40 mins</option>
                <option value="45">45 mins</option>
                <option value="50">50 mins</option>
                <option value="55">55 mins</option>
                <option value="60">60 mins</option>
              </select>
            </div>
            <div className="Timer-Controls">
              <div className="Timer-Label">Break Time</div>

              <select name="work-time" id="work-time" onChange={this.selectBreakTime}>
                <option value="5">5 mins</option>
                <option value="10">10 mins</option>
                <option value="15">15 mins</option>
                <option value="20">20 mins</option>
                <option value="25">25 mins</option>
                <option value="30">30 mins</option>
              </select>
            </div>
          </div>
          <div style={{ display: !this.state.break ? "block" : "none" }}>
            <div>Work Time</div>
            <div>
              {Math.floor(this.state.workTimer / 60)} mins {this.state.workTimer % 60} secs
            </div>
          </div>
          <div style={{ display: this.state.break ? "block" : "none" }}>
            <div>Break Time</div>
            <div>
              {Math.floor(this.state.breakTimer / 60)} mins {this.state.breakTimer % 60} secs
            </div>
          </div>
          <div className="App-Buttons">
            <div>
              <button className="myButton Stop" type="button" onClick={this.resetSettings} disabled={!this.state.running && !this.state.paused}>
                Reset
              </button>
            </div>
            <div>
              <button className="myButton Pause" type="button" onClick={this.pauseTimer} disabled={!this.state.running}>
                Pause
              </button>
            </div>
            <div>
              <button className="myButton Go" type="button" onClick={this.startTimer} disabled={this.state.running}>
                Start
              </button>
            </div>
          </div>
          <div className="Social-Buttons">
            <div>
              <a href="https://www.github.com/rayhogan">
                <img alt="Github" src={github} />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/ray-hogan/">
                <img alt="LinkedIn" src={linkedin} />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/rayhogan">
                <img alt="Twitter" src={twitter} />
              </a>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default App
