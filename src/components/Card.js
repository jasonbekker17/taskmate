import React from 'react'

function Card({task,handleDelete,}) {
  return (
    <div>
       <li className={task.completed ? "completed":"incomplete"} >{task.id}- {task.name} 
                 <button className='delete' onClick={()=>handleDelete(task.id)}>Delete</button>
        </li>
    </div>
  )
}

export default Card
