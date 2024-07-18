import React from 'react'
import { useState } from 'react'
import Card from './Card';
import BoxCard from './BoxCard';
import './TaskList.css'

function TaskList({tasks,setTasks}) {


const[show,setShow]=useState(true);

function handleDelete(id){
    setTasks(tasks.filter(task=>id!==task.id))
  
  }
  
  return (
    
    <div className='tasklist'>
     
      <ul>
        <div className='header'>
        <h1>Task List </h1>
        <button className='trigger' onClick={()=>{setShow(!show)}}>Show Task</button>
        </div>
       
        {show &&tasks.map((task) =>(  
                 
                <Card  key={task.id} task={task} handleDelete={handleDelete}/>
               ))}
      </ul>
    </div>
  )
}

export default TaskList
