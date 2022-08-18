import React from "react";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboards/Dashboard";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <input
        type="text"
        value={state.profile}
        onChange={(e) => dispatch(updateProfile(e.target.value))}
      /> */}
    </div>
  );
}

export default App;
