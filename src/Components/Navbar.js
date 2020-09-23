import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import Mycart from './Mycart';
import Flowers from './Flowers';
import Feedback from './Feedback';
import Giftcards from './Giftcards';
import Chocolates from './Chocolates';
import GreetingCard from './GreetingCard';
import Home from './Home';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from './Message';



export default function Navbar(){
    return(
        <div className="nav-color">
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark " >
  <a className="navbar-brand text-warning text-uppercase font-weight-bold"  href="#">The Florist</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto ">
      <li className="nav-item text-white text-uppercase bg-dark">
        <Link to ="/Home">
        <a className="nav-link text-white text-uppercase" href="#">Home </a>
        </Link>
      </li>
      {/* <span className="sr-only">(current)</span> */}
    
      <li className="nav-item text-white text-uppercase bg-dark">
        <Link to = "/Flowers">
        <a className="nav-link  text-white text-uppercase " href="#">Flowers</a>
        </Link>
      </li>
      <li className="nav-item text-white text-uppercase bg-dark">
        <Link to = "/Giftcards">
        <a className="nav-link  text-white text-uppercase " href="#">Giftcards</a>
        </Link>
      </li>
      <li className="nav-item text-white text-uppercase bg-dark">
        <Link to = "/Chocolates">
        <a className="nav-link  text-white text-uppercase " href="#">Chocolates</a>
        </Link>
      </li>

       <li className="nav-item text-white text-uppercase bg-dark">
         <Link to = "/GreetingCard">
        <a className="nav-link text-white text-uppercase " href="#">Greeting Cards</a>
        </Link>
      </li>
      <li className="nav-item text-white text-uppercase bg-dark">
        <Link to = "/Feedback">
        <a className="nav-link  text-white text-uppercase " href="#">Feedback</a>
        </Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0 bg-dark">
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
      <Link to ="/Mycart">
      <button className="btn btn-outline-primary my-2 my-sm-0 text-white text-uppercase" type="submit">Cart</button>
      </Link>
    </form>
    <div className= "bg-dark">
      <MdAddShoppingCart className= "bg-dark" color= 'white' size= '3rem' />
      </div>
  </div>
</nav>

<Switch>
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
</div>
    );
  }
