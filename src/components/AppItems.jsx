import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "./store/todo-items-store";

function AppItems() {
  const { allItems, deleteItem } = useContext(TodoItemsContext);

  const handelDelete = (item) => {
    deleteItem(item);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {allItems.map((items, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title">{items.name}</h3>
                <p className="card-text font-weight-bold">
                  <b>Due Date:</b> {items.date}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handelDelete(items.name)}
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppItems;
