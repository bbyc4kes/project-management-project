import { useState } from 'react'
import Sidebar from './components/Sidebar'
import NewProjectForm from './components/NewProjectForm'
import { v4 as uuidv4 } from 'uuid'
import ShowProject from './components/ShowProject'
import StartScreen from './components/StartScreen'

function App() {
  const [projectData, setProjectData] = useState({
    projects: [
      {
        id: uuidv4(),
        title: 'Learning React',
        description:
          'Mastering the fundamentals and advanced concepts of building dynamic user interfaces using React.js library',
        due: new Date('2018-01-23'),
      },
      {
        id: uuidv4(),
        title: 'Learning Express',
        description:
          'Delving into the world of Node.js web application development by mastering Express.js, a powerful framework for building robust and scalable web applications',
        due: new Date('2012-11-14'),
      },
      {
        id: uuidv4(),
        title: 'Learning JS',
        description:
          'Exploring the core concepts and intricacies of JavaScript programming language to build dynamic and interactive web applications',
        due: new Date('2007-06-27'),
      },
    ],
    tasks: [],
  })

  const [selectedProject, setSelectedProject] = useState(null)

  const handleAddTask = (text) => {
    setProjectData((prevData) => {
      const newTask = {
        text: text,
        projectId: selectedProject,
        id: uuidv4(),
      }
      return {
        ...prevData,
        tasks: [newTask, ...prevData.tasks],
      }
    })
  }

  const handleDeleteTask = (id) => {
    setProjectData((currData) => {
      return {
        ...currData,
        tasks: currData.tasks.filter((t) => t.id !== id),
      }
    })
  }

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId)
  }

  const removeProject = (id) => {
    setProjectData((currData) => {
      return {
        ...currData,
        projects: currData.projects.filter((p) => p.id !== id),
      }
    })
    setSelectedProject(null)
  }

  const handleDisplayingForm = () => {
    setSelectedProject('form')
  }

  const addProject = (formData) => {
    setProjectData((prevData) => {
      return { ...prevData, projects: [...prevData.projects, formData] }
    })
    setSelectedProject(formData.id)
  }

  const cancelForm = () => {
    setSelectedProject(null)
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        inputData={projectData}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
        setForm={handleDisplayingForm}
      />
      <div className="mt-24 w-2/3">
        {selectedProject && selectedProject.length > 5 && (
          <ShowProject
            project={projectData.projects.find(
              (project) => project.id === selectedProject
            )}
            tasks={projectData.tasks.filter(
              (task) => task.projectId === selectedProject
            )}
            removeProject={removeProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
          />
        )}
        {selectedProject === 'form' && (
          <NewProjectForm createProject={addProject} cancelForm={cancelForm} />
        )}
        {!selectedProject && <StartScreen setForm={handleDisplayingForm} />}
      </div>
    </main>
  )
}

export default App
