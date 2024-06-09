import React from "react";
import LogoImg from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectSelected = ({onStartAdd}) => {
  return (
    <section className="mt-24 text-center w-2/3">
      <img
        src={LogoImg}
        className="w-16 h-16 object-contain mx-auto"
        alt="No notes selected"
      />
      <h2 className="text-xl text-gray-800 my-4">No project Selected</h2>
      <p className="text-sm text-gray-500 mb-4">
        Select a project or get started with a new one!
      </p>
      <p>
        <Button onClick={onStartAdd}>
          create new project
        </Button>
      </p>
    </section>
  );
};

export default NoProjectSelected;
