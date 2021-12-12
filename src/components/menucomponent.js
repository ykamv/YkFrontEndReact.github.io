import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
// import DishDetail from './dishdetailcomponent';


function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => onClick(dish.id)}>

            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay className="ml-5">
                <CardTitle className="">{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) =>{
    const menu = props.dishes.map((dish) => { //iterting over every dish and storing it in menu
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish ={dish} onClick={props.onClick}/>
            </div>
        );
    });

    return (
        <div className='container'>
            <div className='row'>
                {menu}
            </div>
        </div>
    );
}

export default Menu;