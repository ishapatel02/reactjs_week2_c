import React, { Component } from 'react';
//importing navbar from reactstrap
import {Navbar, NavbarBrand} from 'reactstrap';
//importing Menu Component from Components folder
import Menu from './MenuComponent';
//import './App.css';

//import Home Component
import Home from './HomeComponent';

//importing dishes from shared folder
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

import Header from './HeaderComponent';
import Footer from './FooterComponent';

//importing router applications
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

   constructor(props) {
     super(props);    
     this.state = {
        dishes: DISHES,
      
     };
   }

  

render() {

  //Homepage Function
  const HomePage = () => {
      return(
          <Home />
      );
  }

  return (
    <div>
       {/*to render the menu on the screen*/}
       <Header />
          <Switch>
              <Route path='/home' component = {HomePage} />
              <Route exact path='/menu' component = {() => <Menu dishes={this.state.dishes} />}/>   
                         /*function is used in order to pass the props*/
              <Redirect to="/home" />
                         /*if path does not match to home or menu component then it will redirect to home page*/
          </Switch>
       <Footer />
    </div>
  );
}
}

export default Main;
