const Task = (props) => {
  return (
    <div
      className='task'
      key={props.id}
    >
      <h1>{props.taskName}</h1>
      <button>Complete!</button>
      <button onClick={() => props.deleteTask(props.id)}> X </button>

    </div>

  )
}

export default Task