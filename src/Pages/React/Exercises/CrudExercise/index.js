import React, { useState } from 'react'

//Styles
import './crudExercise.css'

//Inner Components
import Task from './Components/Task'


const CrudExercises = () => {
  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewTask] = useState([''])


  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }
    setToDoList([...toDoList, task])
  }

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id))
  }

  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true }
        } else {
          return task
        }
      })
    )
  }

  return (
    <div className='CrudApp'>
      <h1> To-do List </h1>

      <p>
        Crud Exercises
      </p>


      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {toDoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CrudExercises