import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ onAdd, tasks, onDelete }) => {
  return (
    <div>
      <h2 className="text-2xl text-stone-700 font-bold mb-4">Tasks</h2>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet. Add tasks below.
        </p>
      )}
      <NewTask onAdd={onAdd} />
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-sm bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex items-center justify-between mb-2">
                <p>{task.text}</p>
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-stone-900 hover:text-red-600"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
