import "./App.css";
import AppTitle from "./components/AppTitle";
import AppInput from "./components/AppInput";
import AppItems from "./components/AppItems";
import WelcomeMessage from "./components/WelcomeMessage";
import AllItemsContextProvider from "./components/store/todo-items-store";

function App() {
  // const [allItems, setAllItems] = useState([]);

  return (
    <AllItemsContextProvider>
      <div className="container mt-5">
        <AppTitle />
        <AppInput />
        <WelcomeMessage/>
        <AppItems />
      </div>
    </AllItemsContextProvider>
  );
}

export default App;
