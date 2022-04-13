import React from "react";
import Navbar from "../components/Navbar";
import ExplorePage from "./ExplorePage";

function Dashboard(props) {
  return (
    <div className="App">
      <Navbar />
      <ExplorePage />
    </div>
  );
}

export default Dashboard;
