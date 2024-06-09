import React from "react";
import Button from "./Button";

const AppSidebar = ({ onStartAdd, projectsState, onSelectProject }) => {
//   const handleSelectProject = (e) => {
//     const activeId = e.target.getAttribute("data-id");

//     setProjectsState((prevState) => {
//       return {
//         ...prevState,
//         selectedProjectId: activeId,
//       };
//     });
//   };

  return (
    <aside className="w-1/3 bg-stone-900 rounded-tr-3xl mt-8 px-8 py-16 md:w-72">
      <h2 className="text-stone-200 md:text-xl font-bold uppercase mb-10 ">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAdd}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projectsState.projects.map((project) => {
            let classes = "w-full text-left rounded-sm px-2 py-1 mb-2 hover:text-stone-200 hover:bg-stone-800"

            if(projectsState.selectedProjectId === project.id){
                classes += " bg-stone-800 text-stone-200"
            }else {
                classes += " text-stone-400"
            }

          return (
            <li key={project.id} data-id={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={classes}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AppSidebar;
