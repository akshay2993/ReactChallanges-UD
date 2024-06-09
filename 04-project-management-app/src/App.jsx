import { useState } from "react";
import CreateProject from "./components/CreateProject";
import AppSidebar from "./components/AppSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectDetails from "./components/ProjectDeatails";

function App() {
  // const [tasks, setTasks] = useState([]);
  // const [isAdding, setIsAdding] = useState(false);
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleStopAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSaveProject = (projectData) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  };

  const handleDeleteProject = (id) => {
    const newProjects = projectsState.projects.filter(
      (project) => project.id !== id
    );

    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: newProjects,
        selectedProjectId: undefined,
      };
    });
  };

  const handleAddTask = (task) => {
    setProjectsState((prevState) => {
      const NewTask = {
        text: task,
        id: Math.random(),
        projectId: prevState.selectedProjectId,
      };

      return {
        ...prevState,
        tasks: [NewTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id),
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <ProjectDetails
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAdd={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <CreateProject
        onStopAdd={handleStopAddProject}
        onSave={handleSaveProject}
      />
    );
  }

  return (
    <main className="app h-screen flex gap-10">
      <AppSidebar
        onStartAdd={handleStartAddProject}
        projectsState={projectsState}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
