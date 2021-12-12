import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menucomponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './dishdetailcomponent';

class Main extends Component {

    //We define a contructor in our app to get values of dishes from dishes .js file

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
                <div className='container'>
                <DishDetail dish={  this.state.dishes.filter((dish)=> dish.id ===this.state.selectedDish)[0]} />
                </div>
                {/* this filter function compares for which dish the ID is same and returns the value as an array, since there will be only one item returning we will use the index 0 to extract it */}
                {/* the dishes that was stored as a state in our app component is now used as a prop in our menu component */}

            </div>
        );
    }
}

export default Main;
