import { useState } from "react";
import "./App.css";
import AppTitle from "./components/AppTitle";
import AppInput from "./components/AppInput";
import AppItems from "./components/AppItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initialItems = [
    {
      name: "Milk",
      date: "23/01/2024",
    },
    {
      name: "Bread",
      date: "27/01/2024",
    },
    {
      name: "Nuts",
      date: "3/01/2024",
    },
  ];

  const [allItems, setAllItems] = useState(initialItems);

  const onHandAdd = (itemName, dueDate) => {
    const newItems = [...allItems, { name: itemName, date: dueDate }];
    setAllItems(newItems);
  };

  const onHandDelete = (itemName) => {
    const updatedItems = allItems.filter((item) => item.name !== itemName);
    setAllItems(updatedItems);
  };

  return (
    <div className="container mt-5">
      <AppTitle />
      <AppInput onHandAdd={onHandAdd} />
      {allItems.length === 0 && <WelcomeMessage />}
      <AppItems AllItems={allItems} onHandDelete={onHandDelete} />
    </div>
  );
}

export default App;
