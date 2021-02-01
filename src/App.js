import './App.css';
import React from 'react';
import bottom from './bottom.svg'
import top from './top.svg'

class App extends React.Component {
  render(){
      return (
    <div className="App">
          <h1>Our Pricing</h1>
          <h5>Monthly</h5>
          <label class="switch">
  <input type="checkbox"/> 
  <span class="slider round"></span>
</label>
     <h5>Anually</h5>
        <div id="card1">
          <h2 id="heading2">Basic</h2>
          <h1 id="price">$199.99</h1>
          <hr class="solid"/>
          <h6>500 GB Storage</h6>
          <hr class="solid"/>
           <h6>2 Users Allowed</h6>
           <hr class="solid"/>
           <h6>Send up to 3GB </h6> 
           <hr class="solid"/>
           <button id="purple">Learn More</button>

        </div>
         <div id="card2">
          <h2 id="heading2" >Professional</h2>
          <h1 id="price">$249.99</h1>
          <hr class="solid"/>
          <h6>1 TB Storage</h6> 
          <hr class="solid"/>
           <h6>5 Users Allowed</h6> 
           <hr class="solid"/>
           <h6>Send up to 10GB </h6> 
           <hr class="solid"/>
           <button id="white">Learn More</button>

        </div>
         <div id="card3">
           <h2 id="heading2">Master</h2>
           <h1 id="price">$399.99</h1>
           <hr class="solid"/>
           <h6>2 TB Storage</h6> 
           <hr class="solid"/>
           <h6>10 Users Allowed</h6> 
           <hr class="solid"/>
           <h6>Send up to 29GB </h6> 
           <hr class="solid"/>
           <button id="purple">Learn More</button>
          </div>
         <img id="top"src={top} className="App-top" alt="top" />
         <img id="bottom"src={bottom} className="App-bottom" alt="bottom" />

    </div>
    );
  }

}

export default App;
