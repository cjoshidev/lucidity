import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import InventoryTable from "./Components/Table/Table";
import Navigation from "./Components/Navigation/Navigation";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Navigation /> */}
        <Dashboard />
        <InventoryTable />
      </div>
    </Provider>
  );
}

export default App;
