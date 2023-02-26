import React from 'react';
import Editor from '../../components/SlateEditor/Editor';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard'>
    <div className='dashboard-inner'>
      <Editor />
    </div>
    </div>
  )
}

export default Dashboard;
