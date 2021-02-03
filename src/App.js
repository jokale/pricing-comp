import './App.css';
import React from 'react';
import bottom from './bottom.svg'
import top from './top.svg'

class App extends React.Component {
  render(){
      return (
    <div className="App">
          <h1 id="main">Our Pricing</h1>
          <h5>Monthly</h5>
          <label class="switch">
  <input type="checkbox"/> 
  <span class="slider round"></span>
</label>
     <h5>Anually</h5>
        <div id="card1">
          <h2 id="heading1">Basic</h2>
          <h1 id="price">$199.99</h1>
          <hr class="solid1"/>
          <h5 id="h51">500 GB Storage</h5>
          <hr class="solid2"/>
           <h5 id="h52">2 Users Allowed</h5>
           <hr class="solid3"/>
           <h5 id="h53">Send up to 3GB </h5> 
           <hr class="solid4"/><br></br>
           <button id="purple">Learn More</button>

        </div>
         <div id="card2">
          <h2 id="heading2" >Professional</h2>
          <h1 id="price2">$249.99</h1>
          <hr class="solid1w"/>
          <h5 id="h51w">1 TB Storage</h5> 
          <hr class="solid2"/>
           <h5 id="h52w">5 Users Allowed</h5> 
           <hr class="solid3w"/>
           <h5 id="h53w">Send up to 10GB </h5> 
           <hr class="solid4w"/>
           <button id="white">Learn More</button>

        </div>
         <div id="card3">
           <h2 id="heading3">Master</h2>
           <h1 id="price3">$399.99</h1>
           <hr class="solid1"/>
           <h5 id="h51">2 TB Storage</h5> 
           <hr class="solid2"/>
           <h5 id="h52">10 Users Allowed</h5> 
           <hr class="solid3"/>
           <h5 id="h53">Send up to 29GB </h5> 
           <hr class="solid4"/>
           <button id="purple">Learn More</button>
          </div>
         <img id="top"src={top} className="App-top" alt="top" />
         <img id="bottom"src={bottom} className="App-bottom" alt="bottom" />



    </div>
    );
  }

}

export default App;
