import { useState } from "react";

function AppInput({ onHandAdd }) {
  const [itemName, setItemName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const inputName = (event) => {
    setItemName(event.target.value);
  };

  const inputDate = (event) => {
    setDueDate(event.target.value);
  };

  const handelSubmit = () => {
    onHandAdd(itemName, dueDate);
    setItemName("");
    setDueDate("");
  };

  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <input
          placeholder="Enter Task"
          type="text"
          className="form-control"
          value={itemName}
          onChange={inputName}
        />
      </div>
      <div className="col-md-4">
        <input
          placeholder="Due Date"
          type="date"
          className="form-control"
          value={dueDate}
          onChange={inputDate}
        />
      </div>
      <div className="col-md-2 " style={{ textAlign: "right" }}>
        <button className="btn btn-success text-right" onClick={handelSubmit}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AppInput;
