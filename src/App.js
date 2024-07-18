import React from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import './App.css'
import AddTask from './components/AddTask'


const App = () => {
  
  return (
    <div className='App'>
      <Header/>
      <AddTask/>
      <TaskList />
      <Footer/>
      
    </div>
  )
}

export default App
