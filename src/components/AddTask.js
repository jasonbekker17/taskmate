import React, { useState } from 'react'


import './AddTask.css'

function AddTask() {
    const [taskValue,setTaskValue]=useState("");
    const[taskStatus,setTaskStatus]=useState(false);

    const handleChange=(event)=>{
        setTaskValue(event.target.value);
    }
    const handleStatus=(e)=>{
        setTaskStatus(e.target.value);
    }
    function handleReset(){
      setTaskValue("")
      setTaskStatus(false);
    }

    const handleSubmit=(event)=>{

    event.preventDefault();
    console.log(typeof(taskStatus))
        const task={
        id:Math.floor(Math.random()*10000),
        name:taskValue,
        completed:Boolean(taskStatus)
    }
    handleReset()
    console.log(task)


    }
  
  return (
    <div className='addtask'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='task'>Task Name</label>
            <input onChange={handleChange} type='text' value={taskValue} name='task' id='task' placeholder='Task Name' autoComplete='off'></input>
            <select onChange={handleStatus} value={taskStatus}>
                <option value={false}>pending</option>
                <option value={true}>completed</option>
            </select>
            <span onClick={handleReset} className='reset'>Reset</span>
            <button type='submit'>Add Task</button>
          
        </form>
        
      
    </div>
  )
}

export default AddTask
