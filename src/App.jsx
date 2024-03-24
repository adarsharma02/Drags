import { useState } from "react";
import "./App.css";
import Background from "./components/Background";

import Forground from "./components/Forground";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Background />
      <Forground />
    </>
  );
}

export default App;
