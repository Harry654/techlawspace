import React from "react";
import Editor from "../../components/SlateEditor/Editor";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-inner">
        <div className="upload-article transition">
          <div className="upload-section transition">
            <input placeholder="Upload article" />
            <Editor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
