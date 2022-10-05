import React from 'react';
import './App.css';
import twitter from './images/twitter.svg'
import github from './images/github.svg'
import linkedin from './images/linkedin.svg'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-Title">
            <div>T🍅️mate</div>
          </div>
          <div className="Control-Panel">
            <div className="Timer-Controls">
              <div className="Timer-Label">Work Time</div>

              <select name="work-time" id="work-time">
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

              <select name="work-time" id="work-time">
                <option value="5">5 mins</option>
                <option value="10">10 mins</option>
                <option value="15">15 mins</option>
                <option value="20">20 mins</option>
                <option value="25">25 mins</option>
                <option value="30">30 mins</option>
              </select>
            </div>
          </div>
          <div>
          <div>Work Time</div>
          <div>20 mins 23 secs</div>
          </div>
          <div className="App-Buttons">
            <div><button className="myButton Stop" type="button">Reset</button></div>
            <div><button className="myButton Pause" type="button">Pause</button></div>
            <div><button className="myButton Go" type="button">Start</button></div>
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
    );
  }
}

export default App;
