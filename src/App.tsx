import React, { useEffect } from "react";
import "./App.css";

function App() {
  console.log('first')
  useEffect(() => {
    console.log('app')
  },[]);
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
