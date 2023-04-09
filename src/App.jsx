import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";

import Banner from "./Components/Banner/Banner";
import Home from "./Components/Home/Home";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>

      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
