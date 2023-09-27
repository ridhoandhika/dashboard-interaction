import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/header/Navbar";
import DashboardPage from "./pages/Dashboard";


function App() {
  return (
    <>
    <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
    <div className="layout-container">
    <Navbars />
    <DashboardPage />
    </div></div>
    </>
  );
}

export default App;
