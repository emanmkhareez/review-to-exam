import React  from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button2 from './components/Button'
import Button from 'react-bootstrap/Button'
import Tasks from './components/Tasks'
import {useState} from 'react'
import Task from './components/Task'


function App(){

  const [tasks,setTasks]= useState(  [
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

  const DeleteFun=(id) =>{
    console.log('delete',id)
    setTasks(tasks.filter((task) => task.id!==id))
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
<Tasks 
tasks={tasks}
DeleteFun={DeleteFun}
/>


    </>

  )
}
export default App