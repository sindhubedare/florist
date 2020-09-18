import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import Mycart from './Mycart';
import Flowers from './Flowers';
import Feedback from './Feedback';
import Myorder from './Myorder';
import Giftcards from './Giftcards';
import Chocolates from './Chocolates';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      {/* <li className="nav-item ">
        <Link to ="/">
        <a className="nav-link text-white text-uppercase" href="#">Home <span className="sr-only">(current)</span></a>
        </Link>
      </li> */}
     
    
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
        <Link to = "/Feedback">
        <a className="nav-link  text-white text-uppercase " href="#">Feedback</a>
        </Link>
      </li>
       <li className="nav-item text-white text-uppercase bg-dark">
         <Link to = "/Myorder">
        <a className="nav-link text-white text-uppercase " href="#">My order</a>
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
  {/* <Route exact path= "/" component={Home} /> */}
  <Route exact path= "/Flowers" component={Flowers} />
  <Route exact path= "/Mycart" component= {Mycart} />
  <Route exact path= "/Feedback" component = {Feedback} />
  <Route exact path= "/Myorder" component= {Myorder} />
  <Route exact path= "/Giftcards" component= {Giftcards} />
  <Route exact path= "/Chocolates" component= {Chocolates} />
  
</Switch>
</Router>
</div>
    );
  }
//   <div className="nav-wrapper blue lighten-1">
//   <div className="card-panel black">
//   <Router>
//   <nav>
//         <ul >
//           <li>
//             <Link to="/">
//               <span className="white-text text-darken-2">THE FLORIST</span>{" "}
//             </Link>{" "}
//           </li>
//           <li>
//             <Link to="/Flowers">
//               <span className="white-text text-darken-2">
//                 {" "}
//                 FLOWERS
//               </span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/Chocolates">
//               <span className="white-text text-darken-2">CHOCOLATES</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/Giftcards">
//               <span className="white-text text-darken-2">GIFTCARDS</span>
//             </Link>
//           </li>
//            <li>
//            <Link to="/Myorder">
//              <span className="white-text text-darken-2">ORDER</span>
//            </Link>
//          </li>
//           <li>
//           <Link to="/Feedback">
//             <span className="white-text text-darken-2">FEEDBACK</span>
//           </Link>
//         </li>
//           <li>
//           <Link to="/Mycart">
//             <span className="white-text text-darken-2">CART<MdAddShoppingCart color= 'white' size= '3rem' /></span>
//           </Link>
//           <div>

// </div>
//         </li>
//         </ul>
//       {/* </div> */}
      
//     {/* </div> */}
//   </nav>
//   <Switch>
//     <Route exact path="/Flowers" component={Flowers} />
//     <Route exact path="/Chocolates" component={Chocolates} />
//     <Route exact path="/Giftcards" component={Giftcards} />
//     <Route exact path="/Myorder" component={Myorder} />
//     <Route exact path="/Feedback" component={Feedback} />
//     <Route exact path="/Mycart" component={Mycart} />
//   </Switch>
// </Router>
// </div>
// </div>