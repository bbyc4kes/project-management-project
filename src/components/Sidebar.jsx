function Sidebar({ inputData, selectedProject, onProjectClick, setForm }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={setForm}
      >
        + Add Project
      </button>
      <ul className="mt-8">
        {inputData.projects.map((project) => {
          return (
            <li
              key={project.id}
              className={`flex flex-col gap-1 my-4 bg-opacity-25 p-1 hover:text-stone-100 hover:bg-stone-300 hover:bg-opacity-25 ${
                selectedProject === project.id
                  ? "text-stone-100 bg-stone-300"
                  : ""
              }`}
              onClick={() => onProjectClick(project.id)}
            >
              {project.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
