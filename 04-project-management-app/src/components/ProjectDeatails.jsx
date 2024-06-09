import React from "react";
import Tasks from "./Tasks";

const ProjectDetails = ({ project, onDeleteProject, onAddTask, onDeleteTask, tasks }) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  const projectTasks = tasks.filter((task) => task.projectId === project.id)
  
return (
    <section className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl text-stone-600 mb-2">{project.title}</h1>
          <button onClick={() => onDeleteProject(project.id)} className="text-stone-600 hover:text-red-500" >Delete</button>
        </div>
        <p className="mb-4 text-stone-400">Due date: {formattedDate}</p>
        <p className="mb-4 text-stone-600 whitespace-pre-wrap">{project.desc}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={projectTasks}/>
    </section>
  );
};

export default ProjectDetails;
