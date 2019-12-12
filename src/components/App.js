import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCardContainer from './HogCardContainer';


class App extends Component {

  state = {
    hogs: [],
    showInfo: false
  }

  componentDidMount(){
    this.setState({hogs: hogs})
  }

  handleShowInfo = (event) => {
    // const hogId = event.target.dataset.div
    // const newHogs = [...this.state.hogs]

    this.setState({showInfo: !this.state.showInfo})
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <HogCardContainer hogs={hogs} handleShowInfo={this.handleShowInfo} showInfo={this.state.showInfo}/>

      </div>
    )
  }
}

export default App;
