import React, { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function WelcomeMessage() {
  const { allItems } = useContext(TodoItemsContext);
  return (
    <div>
      {allItems.length === 0 ? (
        <h3 className="alert alert-info text-center" role="alert">
          Welcome to the To-Do Application!
        </h3>
      ) : null}
    </div>
  );
}

export default WelcomeMessage;
