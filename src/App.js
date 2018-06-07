import React, { Component } from 'react';
import Navbar from './Navbar/index';
import Slider from './Slider/index.js'

const containerHeight = {
  height : 'calc(100% - 55px)',
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Navbar />
        </div>
        <div className="container-fluid p-0" style={containerHeight}>
          <Slider />
        </div>
      </div>
    )
  }
}

export default App;
