import React from "react";
import Navbar from "../../components/Navbar";
import ExplorePage from "../ExplorePage";
import { Outlet, useLocation } from "react-router-dom";
import { DashContainer, DashContainerWithModal } from "./DashboardElements";

function Dashboard(props) {
  const location = useLocation();
  console.log(location);
  return location.pathname === "/" ? (
    <DashContainer>
      <Outlet />
      <Navbar />
      <ExplorePage />
    </DashContainer>
  ) : (
    <DashContainerWithModal>
      <Navbar />
      <ExplorePage />
      <Outlet />
    </DashContainerWithModal>
  );
}

export default Dashboard;
