import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    // stop the event from submitting data to a page
    e.preventDefault()

    // check if the text is empty
    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder })

    // clear the form
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit} >
      <div className='form-control'>
        <label>Task</label>
        <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type="text" placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        {/* checked returns true or false; whether the box is checked or not
        checked={reminder} unchecks the box if the value is false */}
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type="submit" value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
