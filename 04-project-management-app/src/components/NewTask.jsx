import React, { useRef, useState } from "react";
import Modal from "./Modal";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const dialog = useRef();

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };
  const handleClick = () => {
    //validation
    if (enteredTask.trim() === "") {
      dialog.current.open();
      return;
    }
    //set Tasks to state
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <>
      <Modal ref={dialog}>
        <p>Please enter a valid task!</p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          value={enteredTask}
          onChange={handleChange}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTask;
