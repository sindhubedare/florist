import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";
import {Button, Table} from 'react-bootstrap';


export default class Message extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            review: "",
            reserve:[]
        }
        
    }

 handleChange = (event) =>{
      
        console.log("Onchange", event.target.value)
        this.setState({
          [event.target.name]:event.target.value
        });
    }
    handleSubmit = (event)=>{
        // alert("Feedback sent to us... Thank you!");
        event.preventDefault();
        console.log(event)
    
        let formData = {
            email: this.state.email,
            review: this.state.review
    
        }
        console.log(formData)
      
    this.postAPI(formData);
    }
    
    
    postAPI = async (formData) =>{
        console.log(formData)
        try{
            
                const response = await axios.post("https://cors-anywhere.herokuapp.com/https://boiling-ocean-50857.herokuapp.com/sindhu_api/v1/form", formData
                );
                console.log(response.data)
            }
    
        catch(e){
                console.log("Error", e)
            }
        }  
    
       
    render() {
    return(
        <React.Fragment>
            <div className= "feedback-form">
               <div className="form-div-review">
                 <div style={{marginTop: '100px' }}>
                 <h4 className= "font-weight-bold" id="review-heading" >OPTIONAL PERSONALIZED MESSAGE</h4>
                 </div>
            

                 <div>
                   <form onSubmit={this.handleSubmit} >
                    <label className="label text-dark font-weight-bold">
                    Message </label>
                    <input className="input-review-email text-dark" type="text" name="review" value={this.state.review} onChange={this.handleChange} placeholder="Type Your Message Here"/>
                    <br/><br/>
                    <label className="label text-dark font-weight-bold">
                    From </label>
                    <input className="input-review-feedback text-dark" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="-From"/>            
                    <br/><br/>
                    
                    <div className="card-body">
                    <Link to = "/Confirmation">
                    {/* <button className="add-button text-dark">Submit</button> */}
                    <Button variant="dark">SUBMIT ORDER</Button>
                    </Link> 
                    </div>
                    </form>
                   </div>  
                    </div>
                    </div>

                    {/* <div>
                    {this.state.reserve.map((item, index) => {return(key={item.id} 
                    <Button variant="dark" style={{fontSize: "12px"}} onClick={(e)=> {this.deleteAPI(item.id)}}>Remove</Button>
                    ) } )}
                    </div> */}
    
  </React.Fragment>
    )
}
}
