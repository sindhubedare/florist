
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link, HashRouter as Router} from 'react-router-dom'
// import '../styles/_Navigation.scss'
import Mycart from './Mycart';
import Flowers from './Flowers';
import Feedback from './Feedback';
import Giftcards from './Giftcards';
import Chocolates from './Chocolates';
import GreetingCard from './GreetingCard';
import Home from './Home';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import Message from './Message';
import {Switch, Route } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";


export default function Newnav() {
   return (

       <Router>

       <div className="route-container">
          
           <Navbar className="nav-color" bg="dark" expand="lg" variant="dark">
               
               <Navbar.Brand as={Link} to='/'>
                   <h1 className= "text-uppercase text-warning font-weight-bold bg-dark" id="store-name">THE FLORIST</h1>
               </Navbar.Brand>                
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav" className="nav-link text-white text-uppercase bg-dark">
               <Nav className="mr-auto" id="nav">
                   <ul>
                   <Nav.Link className="nav-link text-white text-uppercase bg-dark" href= "#">Home</Nav.Link>
                   <Nav.Link className="nav-link text-white text-uppercase bg-dark" href= "#">Flowers</Nav.Link>
                   <Nav.Link className="nav-link text-white text-uppercase bg-dark" href= "#">Giftcards</Nav.Link>
                   <Nav.Link className="nav-link text-white text-uppercase bg-dark" href= "#">Chocolates</Nav.Link>
                   <Nav.Link className="nav-link text-white text-uppercase bg-dark" href= "#">Greeting-Cards</Nav.Link>
                   <Nav.Link className="nav-link text-white text-uppercase bg-dark" href= "#">Feedback</Nav.Link>
                   <form className="form-inline my-2 my-lg-0 bg-dark">
                   <Nav.Link className="outline-primary my-2 my-sm-0 text-white text-uppercase" href= "#">Cart</Nav.Link>
                   </form>
                   <div className= "bg-dark">
                    <MdAddShoppingCart className= "bg-dark" color= 'white' size= '3rem' />
                     </div>

                     </ul>
                 </Nav> 
                 </Navbar.Collapse>
           
           </Navbar> 
       </div> 
     
       <Switch>
            <Route exact path= "/" component={Home} />
            <Route exact path= "/Home" component={Home} />
            <Route exact path= "/Flowers" component={Flowers} />
            <Route exact path= "/Mycart" component= {Mycart} />
            <Route exact path= "/Feedback" component = {Feedback} />
            <Route exact path= "/GreetingCard" component= {GreetingCard} />
            <Route exact path= "/Giftcards" component= {Giftcards} />
            <Route exact path= "/Chocolates" component= {Chocolates} />
            <Route exact path= "/Checkout" component= {Checkout}/>
            <Route exact path= "/Confirmation" component= {Confirmation} />
            <Route exact path= "/Message" component= {Message}/>
        </Switch>
    </Router>

   )
}
