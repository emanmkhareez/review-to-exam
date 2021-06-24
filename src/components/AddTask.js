import { useState } from 'react'

const AddTask= ({AddTasks})=>{

  
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const[reminder,setReminder]=useState('false')

    //submitFun
    const submitFun=(e)=>{
      e.preventDefault()
     
     
      AddTasks({text,day,reminder})
      
       setText('')
       setDay('')
       setReminder(false)
    }

    return(
        <>
<form onSubmit={submitFun}>

  <input  type="text" 
         placeholder="enter new task"  
        value={text} 
    onChange={(e)=>setText(e.target.vlaue)}
  
  />
  <input

type="text" 
placeholder="enter date and time" 
value={day} 
onChange={(e)=>setDay(e.target.vlaue)}
  
  />
  <input 
  type="checkbox"
  label="reminder" 
    checked={reminder}
    value={reminder}
    onChange={(e)=>setReminder(e.currentTarget.checked)}
  />
  <input type="submit" value="add task"/>

  
</form>
</>
    )
}
export default AddTask