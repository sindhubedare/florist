import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const params = {
    api_key: "EA549444AAA74EDC8D617E400DDE4B95",
    type: "search",
    amazon_domain: "amazon.com",
    search_term: "Giftcards",
}

export default class Giftcards extends Component {
 constructor(props){
     super(props);
     this.state = {
         displayResults: '',
         reserve: [],
        //  quantity: '',
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
    alert("Giftcard added to Cart");
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
            // const response = await axios.get("/sindhu_api/v1/orders", formData
            // const response = await axios.post("https://cors-anywhere.herokuapp.com/https://boiling-ocean-50857.herokuapp.com/sindhu_api/v1/employee", formData
            const response = await axios.post("https://cors-anywhere.herokuapp.com/https://boiling-ocean-50857.herokuapp.com/sindhu_api/v1/orders", formData
            );
            console.log(response.data)
            // this.props.history.push('/mycart');
        }

    catch(e){
            console.log("Error", e)
        }
    }  
    render(){
        return(
            <React.Fragment>
            <div className =" font-weight-bold">
            <h5> Giftcards</h5>
           </div>
           {
        this.state.reserve.map((item, index) => {
            return( 
                
          
            <div className="container " key={index}>
             
                <div className = "row">
                  
                                <div className="col d-flex justify-content-center">
                               {/* <div className="card" > */}
                               <div className="card "  width= "03rem">
                          <img className="card-img-top" src={item.image} alt="Giftcards" />
                           <div className="card-body ">
                        <h5 className="card-title">{item.title}</h5>
                         <ul>
                        <li >Rating: {item.rating}/5</li>
                        <li >Price: ${item.prices ? item.prices[0].value : ""}</li>
                       </ul>
                          <button className="add-button .bg-dark Primary link font-weight-bold" onClick={(e)=> {this.onSubmit(e, item.image, item.title, item.prices, item.asin)}}>Add</button>
                      
                          </div>
            </div>
             </div>
             </div>
             </div>
             
        ) }
        )
            }
       </React.Fragment>
        )
  }
}