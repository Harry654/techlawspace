import React from "react";
import "./Dashboard.css";
import NavBar from "../../components/navBar/NavBar";
import UploadArticle from "../../components/UploadArticle/UploadArticle";

function Dashboard() {
  
  return (
    <div className="dashboard">
      <NavBar />
      <div className="dashboard-inner">
        <UploadArticle />
      </div>
    </div>
  );
}

export default Dashboard;
