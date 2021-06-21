import React from 'react'
import PropTypes from 'prop-types'
import Button2  from './Button'




<link rel="stylesheet" href="Head.css" />




const Header = (props) => {
    return (
        <>

            <nav>
                <ul>
                    <li>
                        <a href="#" style={headingStyle}>Home</a>
                    </li>
                    <li>
                        <a href="#" style={headingStyle}>About Us </a>
                    </li>
                    <li>
                        <a href="#" style={headingStyle}>Contact Us</a>
                    </li>
                </ul>
                <h1 style={{color:'black',backgroundColor:'#FFEBCD;'}}>{props.title}</h1>

            </nav>

     






        </>
    )

}
//css in js
const headingStyle={
    color:'black',
    backgroundColor:'',


}
//insted  passing from app component  use 
// Header.defaultProps={
//     title:'Appointment',
//     name:'eman '
// }




//anther way to take proprites without props

{/* const Header =({title})=>{
     return(
         <>

         
<h1>{title}</h1>


         </>
     )

} */}


//to defindes the dataType to properites && the p should lower case Header.propTypes
Header.propTypes={
    title: PropTypes.string.isRequired,
}

export default Header