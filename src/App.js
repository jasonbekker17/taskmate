import React from 'react'
import { useState } from 'react'

import './App.css'


const App = () => {
const [tasks ,setTasks]=useState([{id:1,name:"Clean Room",completed:true},{id:2,name:"Study React",completed:false},{id:3,name:"Light Up",completed:false}])
const[show,setShow]=useState(true)


function handleDelete(id){
  setTasks(tasks.filter(task=>id!==task.id))

}



  return (
    <div className='App'>
      
      <h1>Task List</h1>
      <ul>
        <button className='trigger' onClick={()=>{setShow(!show)}}>Show Task</button>
        {show &&tasks.map((task) =>(  
                 
                 <li className={task.completed ? "completed":"incomplete"} key={task.id}>{task.id}- {task.name}
                 <button className='delete' onClick={()=>handleDelete(task.id)}>Delete</button>
                 </li>
               ))}
      </ul>
    </div>
  )
}

export default App
