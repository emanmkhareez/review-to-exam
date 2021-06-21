import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'


const Button2 =(props)=>{
   
    return(
        <>
        
         <Button variant="secondary" id="btn"style={{width:'100px'}} >{props.text}</Button>{' '}

        
        </>
    )
}



export default Button2