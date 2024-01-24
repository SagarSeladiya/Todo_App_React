import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppTitle from "./components/AppTitle";
import AppInput from "./components/AppInput";
import AppItems from "./components/AppItems";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppTitle />
      <AppInput />
      <AppItems />
      <AppItems />
    </>
  );
}

export default App;
