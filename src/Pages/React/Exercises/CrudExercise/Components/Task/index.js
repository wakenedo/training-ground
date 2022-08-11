const Task = (props) => {
  return (
    <div
      className='task'
      key={props.id}
      style={{ color: props.completed ? 'green' : '' }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)} >Complete!</button>
      <button onClick={() => props.deleteTask(props.id)}> X </button>

    </div>

  )
}

export default Task