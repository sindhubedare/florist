import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const params = {
    api_key: "4871F6DF52F648AF98C4AEF1BCA0758C",
    type: "search",
    amazon_domain: "amazon.com",
    search_term: "greetingcards",
}

export default class GreetingCards extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayResults: '',
            reserve: [],
            total: 0
        }
    }
    componentDidMount(){
        this.searchRequest();
    }
   
    searchRequest = async () => {
        try{
            const response= await axios.get('https://api.rainforestapi.com/request', { params })
            console.log(response.data.search_results);
            console.log(response.data.search_results[0].image);
            console.log(response.data.search_results[0].title);
            console.log(response.data.search_results[0].rating);
            console.log(response.data.search_results[0].price.value);
            this.setState({reserve: response.data.search_results})
        }
   
        catch(e){
            console.log(e)
        }
    }
    onSubmit = (event,image, title, price, productId)=>{
        alert("Greeting Card added to Cart");
        event.preventDefault();
        console.log(event)
        console.log(image)
        console.log( title)
        console.log(price)
        console.log(productId)
        
        let formData = {
            quantity: 1,
        
            price : price[0].value,
            productImage : image,
            title : title,
            productId : productId,
            total : price[0].value
    
        }
        console.log(formData)
      
    this.postAPI(formData);
    }
    
    
    postAPI = async (formData) =>{
        console.log(formData)
        try{
                const response = await axios.post("https://cors-anywhere.herokuapp.com/https://boiling-ocean-50857.herokuapp.com/sindhu_api/v1/orders", formData
                );
                console.log(response.data)
                this.props.history.push('/Mycart');
            }
    
        catch(e){
                console.log("Error", e)
            }
        }  
        render(){
            let carddata =  this.state.reserve.map((item, index) => {
                return (
                            <div className="collections card text-dark text-left bg-dark mb-6" style={{maxWidth: "30rem", margin:"auto", marginTop: "5%"}}  key={index}>
                                <div className="card-body">
                                <img className="card-img-top" src={item.image} style={{ height: "40vh" }} alt="Flower Bouquet" />
                                 <p className="card-text">{item.title}</p>
                                  <p className="card-text">Rating: {item.rating}/5</p>
                                  <p className="card-text"> Price: ${item.prices ? item.prices[0].value : ""}</p>
                                  <div>
                                  <Link to = "/Mycart">
                                        <button className="add-button .bg-dark Primary link font-weight-bold" onClick={(e)=> this.onSubmit(e, item.image, item.title, item.prices, item.asin)}>Add</button>
                                        </Link>
                                  </div>
                                  
                            </div>
                            </div>
                      )
            })
        return (
                  <div  style={{margin:"2%"}} >
                    <h1 className= "d-flex justify-content-center font-weight-bold" id="explore-header">GREETING CARDS</h1>
                    <div className="explore row ">
                     {carddata}
                    </div>
                  </div>
                )
      }
}



