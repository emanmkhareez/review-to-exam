import React  from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button2 from './components/Button'
import Button from 'react-bootstrap/Button'
import Tasks from './components/Tasks'
import {useState} from 'react'
import Task from './components/Task'
import AddTask from './components/AddTask'
import { object } from 'prop-types'


function App(){

  let [tasks,setTasks]= useState(  [
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },

    {
      "id": 3,
      "text": "Food  shooping",
      "day": "Feb 8th at 4:30pm",
      "reminder": false
    },
  ])
//delete fum
  const DeleteFun=(id) =>{
    console.log('delete',id)
    setTasks(tasks.filter((task) => task.id!==id))
  }
  //toggle reminder fun
  const ToggleReminder=(id)=>{
    // console.log('ToggleReminder',id);
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
  }
//add fun
const AddTasks=(task)=>{
  // console.log(object)
  const id =Math.floor(Math.random()*200)+1
  console.log(id);
  console.log(task);
  let newTasks={id,...task}
  
  setTasks=([...tasks,newTasks])
}


  
  return(
    <>
    <Header
  title="Appointment"

    
    />
    <Button2 
text="Information"
color="#808080"



/>
<Button2 
text="commint"
color="	#696969"


/>
<AddTask 
AddTasks={AddTasks}
/>

{tasks.length>0 ? <Tasks 
tasks={tasks}
DeleteFun={DeleteFun}
ToggleReminder={ToggleReminder}
/> 


:'No tasks'}


    </>

  )
}
export default App