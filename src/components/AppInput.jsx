import { useContext, useRef, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { TodoItemsContext } from "./store/todo-items-store";

function AppInput() {
  // const [itemName, setItemName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const { addNewItem } = useContext(TodoItemsContext);
  const inputName = useRef();
  const inputDate = useRef();

  // const inputName = (event) => {
  //   setItemName(event.target.value);
  // };

  // const inputDate = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handelSubmit = (event) => {
    event.preventDefault();
    const itemName = inputName.current.value;
    const dueDate = inputDate.current.value;
    addNewItem(itemName, dueDate);
    // setItemName("");
    // setDueDate("");
  };

  return (
    <form className="row mb-3" onSubmit={handelSubmit}>
      <div className="col-md-6">
        <input
          placeholder="Enter Task"
          ref={inputName}
          type="text"
          className="form-control"
          // value={itemName}
          // onChange={inputName}
        />
      </div>
      <div className="col-md-4">
        <input
          placeholder="Due Date"
          type="date"
          ref={inputDate}
          className="form-control"
          // value={dueDate}
          // onChange={inputDate}
        />
      </div>
      <div className="col-md-2 " style={{ textAlign: "right" }}>
        <button className="btn btn-success text-right">
          <GrAdd />
        </button>
      </div>
    </form>
  );
}

export default AppInput;
