import React from "react";

import { FileProvider } from "./context/fileContext";
import Header from "./Components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <FileProvider>
      <div className="App">
        <Header />
        <Home />
      </div>
    </FileProvider>
  );
}

export default App;
