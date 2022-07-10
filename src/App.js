import React from "react";
import { GitHubUsers } from "./components/GitHubUsers";
import "./App.css";
export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <GitHubUsers />
      </div>
    </div>
  );
};

export default App;
