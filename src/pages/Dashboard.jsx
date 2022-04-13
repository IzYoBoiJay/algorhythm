import React from "react";
import Navbar from "../components/Navbar";
import ExplorePage from "./ExplorePage";
import { Outlet } from "react-router-dom";

function Dashboard(props) {
  return (
    <div className="App">
      <Navbar />
      <ExplorePage />
      <Outlet />
    </div>
  );
}

export default Dashboard;
