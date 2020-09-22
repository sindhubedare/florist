import React, {Component} from 'react';
import {embed, ResponsiveEmbed, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import img1 from '../../public/assets/img/img1.jpg';

export default function Home() {
  return (
    <div className= "home-img">
        {/* <img src ="https://cnet2.cbsistatic.com/img/9tf6BfVtKOpwjMwKYAc2usl0WRg=/105x158:744x517/1200x675/2020/01/20/ada6b2c1-465f-409e-8956-df61acd3a067/bouqs-valentines-day-flowers.jpg"/>
        <img src = "https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1592391865/vendor/2183/catalog/product/2/0/20200424092013_file_5ea3580d59716_5ea35828e648b.jpg"/> */}
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




    //Rose's code

    // return (
    //   <div className='foo'  >
    //       <br/>
    //    <div >
    //    <div >
    //    <h2 style={{textAlign: 'center', color: 'yellow' }}>
    //    Let the Drinks Come to You.</h2>
    //    {/* <ResponsiveEmbed aspectRatio="16by9">
    //           <embed src={gifbeer} style={{  height: 'auto' }}  />
    //           </ResponsiveEmbed>    */}
    // <Carousel>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={require("../Image/img1.jpg")}
    //       alt="First slide"  height= "500px" width="200px"/>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={require("../Image/img1.jpg")}
    //       alt="second slide"  height= "500px" width="200px" length="200px"/>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={require("../Image/img1.jpg")}
    //       alt="Third slide" length="200px" height= "500px" width="200px" length="200px"/>
    //   </Carousel.Item>
    // </Carousel>
    //           <h4 style={{textAlign:'center', color: 'yellow' }}>Beer and Wine Delivered to your home in under 60 mintes</h4>
    //           </div>
    //         </div>
    //    </div>