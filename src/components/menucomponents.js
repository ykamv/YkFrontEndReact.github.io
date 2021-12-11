import react, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';
class Menu extends Component {

    constructor(props) {
        super(props); //supplying props to super props

        //state stores property of the components that we can use later
        this.state = {
            //we define dish which is an array of js objects

        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => { //iterting over every dish and storing it in menu
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">

                    <Card>
                        
                        <CardImg width="100%"  src={dish.image} alt={dish.name} />
                        
                        <CardImgOverlay body className="ml-5">
                            <CardTitle className="">{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>

                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                        {menu}
                    
                </div>
            </div>
        );
    }
}
export default Menu;