import { useState } from 'react'

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('')

  const handleChange = (e) => {
    setEnteredTask(e.target.value)
  }

  const handleClick = () => {
    if (enteredTask.trim() === '') {
      return
    }
    onAdd(enteredTask)
    setEnteredTask('')
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={enteredTask}
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 py-2 px-4 rounded-md hover:bg-stone-200 hover:text-stone-950 duration-200"
      >
        Add Task
      </button>
    </div>
  )
}

export default NewTask
