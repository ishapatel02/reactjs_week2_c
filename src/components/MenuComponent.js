import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

//import DishDetail from './DishdetailComponent';

//when we know which properties we need, we have to pass that instead of props
//there are two ways of implementing functions


//first way.    
function RenderMenuItem({ dish, onClick}) {
   return(

        <Card onClick={ () => onClick(dish.id) }>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
        </Card>
  
   );
}

//second way
    const Menu = (props) => {

           const menu = props.dishes.map((dish) => {
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <RenderMenuItem dish={dish} onClick={props.onClick} />
                    </div>
                 )
            });

            return (
                <div className = "container">
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );

    }
           
    

export default Menu;
