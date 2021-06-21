import React from 'react'

import {FaTimes  } from "react-icons/fa";

const Task = (props) => {
    return (
        <>
        <div className="task">

        <h3>{props.task.text}{''} 
         <FaTimes style={{color:'red',cursor:'pointer'}} 
         onClick={()=>props.DeleteFun(props.task.id)} />
        </h3>
         <h2>{props.task.day}</h2> 
        </div>
           
        </>
    )
}

export default Task