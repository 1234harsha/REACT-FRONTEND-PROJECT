import React from "react";
import { Link, Outlet } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <>
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <span className="navbar-brand m-0">
            <span className="ms-1 font-weight-bold text-white">Welcome, Student</span>
          </span>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-white active bg-gradient-primary">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link text-white">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                </div>
                <span className="nav-link-text ms-1">Courses</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/grades" className="nav-link text-white">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="fas fa-chalkboard-teacher" />
                </div>
                <span className="nav-link-text ms-1">Grades</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/attendance" className="nav-link text-white">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <span className="nav-link-text ms-1">Attendance</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/schedule" className="nav-link text-white">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                </div>
                <span className="nav-link-text ms-1">Schedule</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/notifications" className="nav-link text-white">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="fa fa-check" aria-hidden="true"></i>
                </div>
                <span className="nav-link-text ms-1">Notifications</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link text-white">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link text-white">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                </div>
                <span className="nav-link-text ms-1">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Pages</a></li>
              <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
            </ol>
            <h6 className="font-weight-bolder mb-0">Dashboard</h6>
          </nav>
          <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div className="input-group input-group-outline">
                <label className="form-label">Search...</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                    </div>
                </a>
              </li>
              <li className="nav-item px-3 d-flex align-items-center">
                <a href="javascript:;" className="nav-link text-body p-0">
                  <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                </a>
              </li>
              <li className="nav-item dropdown pe-2 d-flex align-items-center">
                <a href="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa fa-bell cursor-pointer"></i>
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a href="../pages/sign-in.html" className="nav-link text-body font-weight-bold px-0">
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default StudentDashboard;
