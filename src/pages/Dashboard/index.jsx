import React from "react";
import Navbar from "../../components/Navbar";
import ExplorePage from "../ExplorePage";
import { Outlet, useLocation } from "react-router-dom";
import { DashContainer } from "./DashboardElements";

function Dashboard(props) {
  const location = useLocation();
  console.log(location);
  return (
    <DashContainer path={location.pathname}>
      <Navbar />
      <ExplorePage />
      <Outlet />
    </DashContainer>
  );
}

export default Dashboard;
