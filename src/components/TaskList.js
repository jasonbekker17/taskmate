import React from 'react'
import { useState } from 'react'
import Card from './Card';
import BoxCard from './BoxCard';

function TaskList({}) {

const [tasks ,setTasks]=useState([{id:1,name:"Clean Room",completed:true},{id:2,name:"Study React",completed:false},{id:3,name:"Light Up",completed:false}]);
const[show,setShow]=useState(true);

function handleDelete(id){
    setTasks(tasks.filter(task=>id!==task.id))
  
  }
  
  return (
    
    <div>
      <h1>Task List </h1>
      <ul>
        <button className='trigger' onClick={()=>{setShow(!show)}}>Show Task</button>
        {show &&tasks.map((task) =>(  
                 
                <Card  key={task.id} task={task} handleDelete={handleDelete}/>
               ))}
      </ul>
      <BoxCard result="success">
        <p className='title'> Lorem ipsum dolor sit voluptatibus </p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatum.</p>
      </BoxCard>
      
      <BoxCard result="warning">
        <p className='title'> Lorem ipsum dolor sit voluptatibus </p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sunt! Maxime voluptatibus inventore quisquam natus vel nihil eveniet, earum optio magnam necessitatibus atque deleniti reprehenderit odio quas et vitae corporis?</p>
      
      </BoxCard>
               
      <BoxCard result='alert'>
        <p className='title'> Lorem ipsum dolor sit voluptatibus </p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatum.</p>
      </BoxCard>         
   
    </div>
  )
}

export default TaskList
