import React from "react";
import "./Dashboard.css";
import NavBar from "../../components/navBar/NavBar";
import { MdOutlinePersonAdd } from "react-icons/md";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <NavBar />
      <div className="dashboard-links">
        <Link to="/admin/add/member" className="link transition">
          <MdOutlinePersonAdd size={50} color="rgb(80, 80, 250)" />
        </Link>
        <Link to="/admin/upload/article" className="link transition">
          <HiDocumentArrowUp size={50} color="rgb(80, 80, 250)" />
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
