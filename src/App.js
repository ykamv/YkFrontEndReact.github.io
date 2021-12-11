import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/menucomponent';
import { DISHES } from './shared/dishes';
import DishDetail from './components/dishdetailcomponent';

class App extends Component {

  //We define a contructor in our app to get values of dishes from dishes .js file

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} /> 
  
        {/* the dishes that was stored as a state in our app component is now used as a prop in our menu component */}
      </div>
    );
  }
}

export default App;
