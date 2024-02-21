import "../style/App.css";
import CreateAccount from "./CreateAccount";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import LogIn from "./LogIn";
import { Route, Routes } from "react-router-dom";
import RevisePage from "./RevisePage";
// import { useState } from "react";

function App() {
  // const [loggedInUser, setLoggedInUser] = useState()
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="log-in" element={<LogIn />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="revise" element={<RevisePage />} />
      </Routes>
    </div>
  );
}

export default App;
