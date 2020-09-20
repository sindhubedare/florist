import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Feedback extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            feedback: "",
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
        alert("Feedback sent to us... Thank you!");
        event.preventDefault();
        console.log(event)
    
        let formData = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            feedback: this.state.feedback 
    
        }
        console.log(formData)
      
    this.postAPI(formData);
    }
    
    
    postAPI = async (formData) =>{
        console.log(formData)
        try{
            
                const response = await axios.post("https://cors-anywhere.herokuapp.com/https://boiling-ocean-50857.herokuapp.com/sindhu_api/v1/employee", formData
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
                 <div>
                 <h4 id="review-heading" >FEEDBACK</h4>
                 </div>
            

                 <div>
                   <form onSubmit={this.handleSubmit} >
                    <label className="label-review text-dark">
                    First Name </label>
                    <input className="input-review-fname text-dark" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name"/>
                    <br/><br/>
                    <label className="label-review text-dark">
                    Last Name </label>
                    <input className="input-review-lname text-dark" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name"/>
                    <br/><br/>
                    <label className="label-review text-dark">
                    Email </label>
                    <input className="input-review-email text-dark" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email address"/>
                    <br/><br/>
                    <label className="label-review text-dark">
                    Feedback </label>
                    <input className="input-review-feedback text-dark" type="text" name="feedback" value={this.state.feedback} onChange={this.handleChange} placeholder="Feedback"/>            
                    <br/><br/>
                    
                    <div className="card-body">
                    <button className="add-button text-dark">Submit</button>
                                  
                                      </div>
                 
                    
                    </form>
                   </div>
                      
                    </div>
                    </div>
    
  </React.Fragment>
    )
}
}
