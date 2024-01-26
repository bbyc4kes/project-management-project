import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";

function NewProjectForm({ createProject, cancelForm }) {
  const modalRef = useRef();

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  const handleSaveClick = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    const newProject = {
      id: uuidv4(),
      title,
      description,
      due: dueDate,
    };
    createProject(newProject);
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops.. looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input.
        </p>
      </Modal>
      <form className="mt-4 text-right">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={cancelForm}
            >
              Cancel
            </button>
          </li>
          <li>
            <Button onClick={handleSaveClick}>Save</Button>
          </li>
        </menu>
        <Input label="Title" type="text" ref={titleRef} />
        <Input label="DeScrIption" type="textarea" ref={descriptionRef} />
        <Input label="due date" type="date" ref={dueDateRef} />
      </form>
    </>
  );
}

export default NewProjectForm;
