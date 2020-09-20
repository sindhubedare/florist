import React, { Component } from 'react'
import axios from 'axios';
import {Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/_MyProfile.scss'
import Mycart from './Mycart';

export default class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state ={
            // reviews: [],
            // flowers:[],
            // Review: "",
            // Rating: "",
            // deleted: [],
            reserve:[],
            // fullName: '',
            // phone: '', 
            // email: '',
            // address:'',
            finaltotal:[]
        }

    }

    async componentDidMount() {
 
        try{
                const response = await axios.get("https://cors-anywhere.herokuapp.com/https://boiling-ocean-50857.herokuapp.com/sindhu_api/v1/orders");

            
                this.setState({reserve: response.data});
                            let temp=[];
                let finalPrice=[];
                for(let i=0; i<response.data.length;i++){
                {temp[i]= response.data[i].total;}
                finalPrice.push(temp[i])
                console.log(finalPrice)

                }
                console.log(
                    finalPrice.reduce((a, b) => a + b, 0)
                  )

                  let totalPay = ( finalPrice.reduce((a, b) => a + b, 0)).toFixed(2);
                   this.setState({finaltotal:totalPay})
            }
    
        catch(e){
                console.log("Error", e)
            }
        }

    render() {

        let items = this.state.items
        return (
            <React.Fragment>
            <div className = "final-form-container">
                <h3>Total amount due : $ {this.state.finaltotal}</h3>
     
            </div>
            </React.Fragment>
)
        }
}
