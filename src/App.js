import './App.css';
import React from 'react';
import bottom from './bottom.svg'
import top from './top.svg'

class App extends React.Component {
  render(){
      return (
    <div className="App">
          <h1>Pricing</h1>
        <div id="card1">
          <h2>Basic</h2>

        </div>
         <div id="card2">
          <h2>Professional</h2>
        </div>
         <div id="card3">
           <h2>Master</h2>

          </div>
         <img src={top} className="App-top" alt="top" />
         <img src={bottom} className="App-bottom" alt="bottom" />

    </div>
    );
  }

}

export default App;
