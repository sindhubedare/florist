import React from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Confirmation() {
    return (
        <div>
           <h4 style={{textAlign: 'center', color: 'black' , marginTop: '100px' }}>Thank you, Order placed successfully! <br/> <br/> Look forward for confirmation email from us <br/>
           Confirmation Number: FGCGC960400009</h4>
           <br/>
           <Link to='/Home'> <Button className= "float-center" variant="dark">Continue Shopping</Button> </Link>
        </div>
        
       
        
    )
}