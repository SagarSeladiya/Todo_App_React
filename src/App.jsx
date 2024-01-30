import { useState } from "react";
import "./App.css";
import AppTitle from "./components/AppTitle";
import AppInput from "./components/AppInput";
import AppItems from "./components/AppItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./components/store/todo-items-store";

function App() {
  const [allItems, setAllItems] = useState([]);

  const onHandAdd = (itemName, dueDate) => {
    const newItems = [...allItems, { name: itemName, date: dueDate }];
    setAllItems(newItems);
  };

  const onHandDelete = (itemName) => {
    const updatedItems = allItems.filter((item) => item.name !== itemName);
    setAllItems(updatedItems);
  };

  return (
    <TodoItemsContext.Provider value={{ allItems, onHandAdd, onHandDelete }}>
      <div className="container mt-5">
        <AppTitle />
        <AppInput />
        <WelcomeMessage />
        <AppItems />
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
