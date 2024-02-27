import "../style/App.css";
import CreateAccount from "./CreateAccount";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import LogIn from "./LogIn";
import { Route, Routes } from "react-router-dom";
import RevisePage from "./RevisePage";
import React, { useState } from "react";
import ReviseAndTestModule from "./ReviseAndTestModule";

function App() {
  // const [loggedInUser, setLoggedInUser] = useState()
  const [selectedCocktails, setSelectedCocktails] = useState([]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="log-in" element={<LogIn />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route
          path="revise"
          element={
            <RevisePage
              selectedCocktails={selectedCocktails}
              onSetSelectedCocktails={setSelectedCocktails}
            />
          }
        />
        <Route path="revision-time" element={<ReviseAndTestModule />} />
      </Routes>
    </div>
  );
}

export default App;
