import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppTitle from "./components/AppTitle";
import AppInput from "./components/AppInput";
import AppItems from "./components/AppItems";

function App() {
  const [count, setCount] = useState(0);

  let AllItems = [
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
  return (
    <>
      <AppTitle />
      <AppInput />
      <AppItems AllItems={AllItems} />
    </>
  );
}

export default App;
