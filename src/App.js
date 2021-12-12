import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
// import DishDetail from './components/dishdetailcomponent';

class App extends Component {

  //We define a contructor in our app to get values of dishes from dishes .js file

  render() {
    return (
      <div>

        <Main /> 
  
        {/* the dishes that was stored as a state in our app component is now used as a prop in our menu component */}
      </div>
    );
  }
}

export default App;
