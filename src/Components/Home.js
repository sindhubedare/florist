import React, {Component} from 'react';
import {embed, ResponsiveEmbed, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import img1 from '../../public/assets/img/img1.jpg';

export default function Home() {
    return (
  <div className='foo'  >
      <br/>
   <div >
   <div >
   <h2 style={{textAlign: 'center', color: 'yellow' }}>
   Let the Drinks Come to You.</h2>
   {/* <ResponsiveEmbed aspectRatio="16by9">
          <embed src={gifbeer} style={{  height: 'auto' }}  />
          </ResponsiveEmbed>    */}
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.idsitnetwork.net/wp-content/uploads/sites/27/2019/01/flower-shop-fields-of-romance-148245.jpg"
      alt="First slide"  height= "500px" width="200px"/>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.idsitnetwork.net/wp-content/uploads/sites/27/2019/01/flower-shop-fields-of-romance-148245.jpg"
      alt="second slide"  height= "500px" width="200px" length="200px"/>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.idsitnetwork.net/wp-content/uploads/sites/27/2019/01/flower-shop-fields-of-romance-148245.jpg"
      alt="Third slide" length="200px" height= "500px" width="200px" length="200px"/>
  </Carousel.Item>
</Carousel>
          <h4 style={{textAlign:'center', color: 'yellow' }}>Beer and Wine Delivered to your home in under 60 mintes</h4>
          </div>
        </div>
   </div>
    )
}



// export default Home;



{/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.oberers.com/product_images/uploaded_images/homebanner-fresh.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.oberers.com/product_images/uploaded_images/homebanner-fresh.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.oberers.com/product_images/uploaded_images/homebanner-fresh.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}




      //old code

    //   export default class Home extends Component {
    //     render() {
    //     return (
    //         <div>  
    //         <div className='container-fluid' >  
    //          <div className="row title" style={{ marginBottom: "20px" }} >  
    //          <div className="col-sm-12 btn btn-warning">  
    //          How To Use Bootstrap Carousel In ReactJS  
    //         </div>  
    //         </div>  
    //         </div>  
    //         <div className='container-fluid' >  
    //         <Carousel>  
    //         <Carousel.Item style={{'height':"300px"}} >  
    //         <img style={{'height':"300px"}}  
    //         className="d-block w-100"  
    //        src= {'assets/img/img1.jpg'} />  
    //           <Carousel.Caption>  
    //             <h3>First Demo </h3>  
    //                 </Carousel.Caption>  
    //                 </Carousel.Item  >  
    //                 <Carousel.Item style={{'height':"300px"}}>  
    //                 <img style={{'height':"300px"}}  
    //                   className="d-block w-100"  
    //                    src={'assets/img/img2.webp'}   />  
    //                       <Carousel.Caption>  
    //                   <h3>Second Demo</h3>  
    //                      </Carousel.Caption>  
    //                         </Carousel.Item>  
    //                       <Carousel.Item style={{'height':"300px"}}>  
    //                       <img style={{'height':"300px"}}  
    //                        className="d-block w-100"  
    //                         src= {'assets/img/img1.jpg'}  />  
    //                        <Carousel.Caption>  
    //                          <h3>Third Demo</h3>  
    //                          </Carousel.Caption>  
    //                         </Carousel.Item>    
    //                       <Carousel.Item style={{'height':"300px"}}>  
    //                       <img style={{'height':"300px"}}  
    //                        className="d-block w-100"  
    //                         src={'assets/img/img4.jpg'}  />  
    //                        <Carousel.Caption>  
    //                          <h3>Fourth Demo</h3>  
    //                          </Carousel.Caption>  
    //                         </Carousel.Item>  
    //                        </Carousel>  
    //                </div>  
    //        </div>
            
    //       )
    // }
    // }