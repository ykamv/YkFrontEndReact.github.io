import react, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';
import DishDetail from './dishdetailcomponent';

class Menu extends Component {

    constructor(props) {
        super(props); //supplying props to super props

        //state stores property of the components that we can use later
        this.state = {
            //we define dish which is an array of js objects
            selectedDish: null
        }
        
        console.log('Constructor Invoked');
    }

    componentDidMount() {
        console.log('component did mount was invoked');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderMenuDish() {
        const menu = this.props.dishes.map((dish) => { //iterting over every dish and storing it in menu
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">

                    <Card onClick={() => this.onDishSelect(dish)}>

                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardImgOverlay className="ml-5">
                            <CardTitle className="">{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>

                </div>
            );
        }
        
        );
        console.log("RenderMenuDish is invoked");
        return menu;
    }

    render() {

        const Menu = this.renderMenuDish();
        console.log(typeof(Menu));
        return (
            <div className="container">
                <div className="row">
                    {Menu}
                </div>
                <DishDetail dish={this.state.selectedDish} comments= {this.state.selectDish}/>
            </div>
        );



    }

    componentDidMount(){
        console.log('Menu component componentDidMounbt is invoked');
        
    }
}
export default Menu;