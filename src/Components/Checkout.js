import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";
import {Button} from 'react-bootstrap';


//nameoncard, ccnumbr, expiremonthandyr and cvv and submit button
export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            ccNum: "",
            expiryDate: "",
            cvv: "",
            address: "",
            reserve:[]
        }
        
    }

 handleChange = (event) =>{
      
        // console.log("Onchange", event.target.value)
        this.setState({
          [event.target.name]:event.target.value
        });
    }
    handleSubmit = (event)=>{
        alert("Card information complete.");
        event.preventDefault();
        console.log(event)
    
        let formData = {
            email: this.state.email,
            firstName: this.state.firstName,
            ccNum: this.state.ccNum,
            expiryDate: this.state.expiryDate,
            cvv: this.state.cvv,
            address: this.state.address
    
        }
        console.log(formData)
    }
      catch (err) {
       console.error(err.message);
     }

    render() {
        return (
            <React.Fragment>
            <div className= "feedback-form">
               <div className="form-div-review">
                 <div>
                 <h4 id="review-heading" >Card Info</h4>
                 </div>
            

                 <div>
                   <form onSubmit={this.handleSubmit} >
                   <label className="label-review text-dark">
                    Email ID </label>
                    <input className="input-review-email text-dark" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                    <br/><br/>
                    <label className="label-review text-dark">
                    Name on the card </label>
                    <input className="input-review-fname text-dark" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="Name"/>
                    <br/><br/>
                    <label className="label-review text-dark">
                    Credit/Debit Card Number </label>
                    <input className="input-review-ccNum text-dark" type="text" name="ccNum" value={this.state.ccNum} onChange={this.handleChange} placeholder="CC Number"/>
                    <br/><br/>
                    <label className="label-review text-dark">
                    Expiry Date and Month </label>
                    <input className="input-review-expiryDate text-dark" type="text" name="expiryDate" value={this.state.expiryDate} onChange={this.handleChange} placeholder="DD/MM"/>
                    <br/><br/>
                    <label className="label-review text-dark">
                    CVV </label>
                    <input className="input-review-cvv text-dark" type="text" name="cvv" value={this.state.cvv} onChange={this.handleChange} placeholder="CVV"/>            
                    <br/><br/>
                    <label className="label-review text-dark">
                    Delivery Address </label>
                    <input className="input-review-address text-dark" type="text" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Delivery Address"/>            
                    <br/><br/>
                    
                    <div className="card-body">
                   <Link to = "/Confirmation">
                    {/* <button className="add-button text-dark">Submit</button> */}
                    <Button variant="dark">SUBMIT</Button>
                    </Link> 
                     </div>
                 
                    
                    </form>
                   </div>
                      
                    </div>
                    </div>
    
  </React.Fragment>
)
        }
}
