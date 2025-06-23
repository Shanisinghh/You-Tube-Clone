import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";

import { DataProvider, useData } from "./context/DataProvider";

function App() {

  return (
    <DataProvider>
      <Navbar />
      <Sidebar />
    </DataProvider>
  );
}

export default App;
