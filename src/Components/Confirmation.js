import React from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Confirmation() {
    return (
        <div style={{textAlign: 'center', color: 'black' , marginTop: '100px' }}>
           <h4 >Thank you, Order placed successfully! <br/>Look forward for confirmation email from us <br/> <br/>
           Confirmation Number: FGCGC960400009</h4>
           <br/>
           <Link to='/Home'> <Button variant="dark">Continue Shopping</Button> </Link>
        </div>
        
       
        
    )
}