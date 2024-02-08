import { useState } from 'react';
import './admindashboard.css';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className={`wrapper ${sidebarOpen ? 'active' : ''}`}>
        <div className="sidebar">
          <div className="profile">
            <h3>Welcome</h3>
            <p>Admin</p>
          </div>
          <ul>
            <li>
              <a href="#" className="active">
                <span className="icon"><i className="fas fa-home"></i></span>
                <span className="item">Student Details</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><i className="fas fa-desktop"></i></span>
                <span className="item">Teacher details</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><i className="fas fa-user-friends"></i></span>
                <span className="item">Display Marks</span>
              </a>
            </li>
           
           
            <li>
              <a href="#">
                <span className="icon"><i className="fas fa-chart-line"></i></span>
                <span className="item">Add Attendance</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><i className="fas fa-user-shield"></i></span>
                <span className="item">Admin</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><i className="fas fa-cog"></i></span>
                <span className="item">Settings</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="section">
          <div className="top_navbar">
            <div className="hamburger" onClick={toggleSidebar}>
              <a href="#"><i className="fas fa-bars"></i></a>
            </div>
            <ul className='navbar-items'>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
     
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
