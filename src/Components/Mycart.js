import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Mycart extends Component {
    constructor (props) {
        super(props);
        this.state= {
            reviews: [],
            flowers: [],
            Review: "",
            Rating: "",
            deleted: [],
            reserve: [],
            finaltotal: []

        }
    }
   
    totalPay = (response = false) =>{
        if(!response) response= this.state.reserve
        else response= response.data
        let temp=[];
        let finalPrice=[];
        for(let i=0; i<response.length;i++){
        {temp[i]= response[i].total;}
        finalPrice.push(temp[i])
        console.log(finalPrice)

        }
        console.log(
            finalPrice.reduce((a, b) => a + b, 0)
          )

          let totalPay = ( finalPrice.reduce((a, b) => a + b, 0)).toFixed(2);
           this.setState({finaltotal:totalPay})
           sessionStorage.setItem("finalTotal" , totalPay)
    }

    async componentDidMount() {
        try {
            const response = await axios.get ("https://cors-anywhere.herokuapp.com/https://boiling-ocean-50857.herokuapp.com/sindhu_api/v1/orders");
            console.log(response.data);
            this.setState({reserve: response.data})
            console.log(response.data[0].total)

            this.setState({reserve: response.data});
               this.totalPay(response)
        }

        catch(e){
            console.log("Error",e)
        }
    }

    deleteAPI = async (id) => {
        console.log(id)
        try{
           const response = await axios.delete(`https://cors-anywhere.herokuapp.com/https://boiling-ocean-50857.herokuapp.com/sindhu_api/v1/orders/${id}`); 
           console.log("deleted")
           console.log(response.data);
           let update = this.state.reserve.filter(i => i.id !== id);
           this.setState({reserve: update})
           this.totalPay()
        }

        catch(e){
            console.log("Error", e)
        }
    }
    render(){

        console.log("in cart page")
 
        return(
         <React.Fragment>
             
             <div className="my-cart-main-container float-center" style={{marginLeft:"1%", marginRight:"1%", marginTop: "5%"}}>
             <h3 className= "d-flex justify-content-center font-weight-bold">Order Summary</h3>
             <div className="buttons-table">
                 </div>
             <div className="order-container">
                 <Table className="table-list" bordered responsive style={{margin: 'auto'}}>
                     <thead  bordered hover size="sm" style={{backgroundColor: 'lightgrey'}}>
                         <tr bordered hover size="sm" style={{backgroundColor: 'grey'}}>
                             <th>Order</th>
                             <th>Order Title</th>
                             <th>Qty</th>
                             <th>Price</th>
                             <th>SubTotal</th>
                             <th>Edit</th>
                         </tr>
                     </thead>
                     <tbody striped>
                         {this.state.reserve.map((item, index) =>{ return(
                             <tr key={item.id}>
                                 <td>
                                     <img src={item.productImage} alt="flowers" height="175px" width="150px"/>
                                 </td>
                                 <td>
                                    {item.title}
                                 </td>
                                 <td>
                                    {item.quantity} 
                                 </td>
                                 <td>
                                     ${item.price}
                                 </td>
                                 <td>
                                      ${item.total}
                                 </td>
                                 <td className= "text-dark">
                                  
                                      <Button variant="dark" style={{fontSize: "12px"}} onClick={(e)=> {this.deleteAPI(item.id)}}>Remove</Button> 
                                     
                                 </td>
                             </tr>)})}
                     </tbody>
                </Table>   
                 </div>
                 <div className= "total" responsive>
                 <Button className = "float-right" style={{marginRight: "150px"}} variant="outline-dark">TOTAL: $ {this.state.finaltotal}</Button>
                 </div>
                 <br/>
                 <div className="buttons-table" style={{marginRight: "35px"}}>
                  
                  <Link to='/Home'> <Button  variant="dark" style={{marginRight: "35px"}}>Continue Shopping</Button> </Link>
                  <Link to='/Checkout' value={this.state.reserve}> <Button variant="dark">Checkout</Button> </Link> 
                   <br/> <br/>
                 </div>
                 
             </div> 
 
   </React.Fragment>
         )
     }
}






