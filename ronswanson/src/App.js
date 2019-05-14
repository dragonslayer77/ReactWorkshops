import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      quote:''
    }
  }
  loadData(){
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(response => response.json())
      .then((data) => {
          this.setState({
              quote: data
          });
      });
  }

  setTimer = () => {
    this.timer = setInterval(()=>this.loadData(), 30000);
}

  componentDidMount() {
    this.setTimer();
    this.loadData();
   
  }

  componentWillUnmount = () => {
    this.timer=null;

}

  render(){
    return (
      <div className="App">
        <img src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif" alt="ron" />
        <p>{ this.state.quote }</p>
      </div>
    );
  }
}

export default App;
