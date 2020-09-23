import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


export default class DeleteMessage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            review: "",
            reserve:[]
        }
        
    }

     deleteAPI = async (id) => {
            console.log(id)
            try{
               const response = await axios.delete(`https://cors-anywhere.herokuapp.com/https://boiling-ocean-50857.herokuapp.com/sindhu_api/v1/form/${id}`); 
               console.log("deleted")
               console.log(response.data);
               let update = this.state.reserve.filter(i => i.id !== id);
               this.setState({reserve: update})
            }
    
            catch(e){
                console.log("Error", e)
            }
        }

        render(){

            console.log("in cart page")
     
            return(
             <React.Fragment>
          
                             {this.state.reserve.map((item, index) =>{ return(
                                 <tr key={item.id}>
                                    
                                     <td className= "text-dark">
                                          <Button variant="dark" style={{fontSize: "12px"}} onClick={(e)=> {this.deleteAPI(item.id)}}>Remove</Button> 
                                     </td>
                                 </tr>)})}
                       
        
     
       </React.Fragment>
             )
         }
    }