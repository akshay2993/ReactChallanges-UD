import React, { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

const CreateProject = ({ onStopAdd, onSave }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDate = dateRef.current.value;

    //validation
    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSave({
      title: enteredTitle,
      desc: enteredDesc,
      dueDate: enteredDate,
    });
  };

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl text-gray-900 mb-4">Error Occured!</h2>
        <p className="text-sm text-gray-700 mb-4">Please fill all the details!</p>
      </Modal>
      <section className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            onClick={onStopAdd}
            className="text-stone-800 py-2 px-4 text-sm rounded-md hover:text-stone-950"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="text-stone-50 bg-stone-800 hover:bg-stone-950 text-sm py-2 px-4 rounded-md"
          >
            Save
          </button>
        </menu>
        <Input type="text" label="Title" ref={titleRef} />

        <Input textArea label="Description" ref={descRef} />

        <Input type="date" label="Due Date" ref={dateRef} />
      </section>
    </>
  );
};

export default CreateProject;
