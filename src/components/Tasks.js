    import Task from './Task'
    import {useState} from 'react'


let num=[]

const Tasks =(props)=>{
   

    return(
       
       <>
       
    
        
        {props.tasks.map( (task) =>(<Task key={task.id}
        task={task}  
        DeleteFun={props.DeleteFun}/>))}


         {/* num =[task.text,task.id].join('  ') */}

       
        
        

        </>
    )
}

export default Tasks