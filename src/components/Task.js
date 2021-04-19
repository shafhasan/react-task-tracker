import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    // If the task.reminder is true, change the classname to reminder, which adds a green outline to the selected task
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} >
      <h3>
        {/* onClick will return the task id which is clicked to be removed */}
        {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
