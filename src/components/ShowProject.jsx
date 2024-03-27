import Tasks from './Tasks'

function ShowProject({
  tasks,
  project,
  removeProject,
  onAddTask,
  onDeleteTask,
}) {
  const formattedDate = new Date(project.due).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 duration-200 py-2 px-4 rounded-md hover:bg-stone-200 hover:text-stone-950"
            onClick={() => removeProject(project.id)}
          >
            Delete
          </button>
        </div>
        <div className="flex flex-col">
          <p className="mb-4 text-stome-400">{formattedDate}</p>
          <p className="text-stone-600 whitespace-pre-wrap ">
            {project.description}
          </p>
        </div>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </>
  )
}

export default ShowProject
