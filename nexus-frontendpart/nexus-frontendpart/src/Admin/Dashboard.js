import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/css/material-dashboard.css?v=3.1.0";

const Dashboard=()=>{
    return(
          <>
   <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
   <div class="sidenav-header">
     <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
     <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
       <span class="ms-1 font-weight-bold text-white">Welcome, Admin</span>
     </a>
   </div>
   <hr class="horizontal light mt-0 mb-2"></hr>
   <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
     <ul class="navbar-nav">
       <li class="nav-item">
         <a class="nav-link text-white active bg-gradient-primary" href="../pages/dashboard.html">
           <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
             <i class="material-icons opacity-10">dashboard</i>
           </div>
           <span class="nav-link-text ms-1">Dashboard</span>
         </a>
       </li>
       <li class="nav-item">
         <a class="nav-link text-white " href="../pages/tables.html">
           <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
           <i class="fa fa-graduation-cap" aria-hidden="true"></i>
           </div>
           <span class="nav-link-text ms-1">Register Student</span>
         </a>
       </li>
       <li class="nav-item">
         <a class="nav-link text-white " href="../pages/billing.html">
           <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
           <i class="fas fa-chalkboard-teacher" />
           </div>
           <span class="nav-link-text ms-1">Register Teacher</span>
         </a>
       </li>
       <li class="nav-item">
         <a class="nav-link text-white " href="../pages/virtual-reality.html">
           <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
           <i class="fa fa-clock-o" aria-hidden="true"></i>
           </div>
           <span class="nav-link-text ms-1">Add Teacher Attendance</span>
         </a>
       </li>
       <li class="nav-item">
         <a class="nav-link text-white " href="../pages/rtl.html">
           <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
           <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
           </div>
           <span class="nav-link-text ms-1">Schedule Class</span>
         </a>
       </li>
       <li class="nav-item">
         <a class="nav-link text-white " href="./pages/notifications.html">
           <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
           <i class="fa fa-check" aria-hidden="true"></i>
           </div>
           <span class="nav-link-text ms-1">Display Result</span>
         </a>
       </li>
      
       <li class="nav-item">
         <a class="nav-link text-white " href="../pages/profile.html">
           <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
             <i class="material-icons opacity-10">person</i>
           </div>
           <span class="nav-link-text ms-1">Profile</span>
         </a>
       </li>
       <li class="nav-item">
         <a class="nav-link text-white " href="../pages/profile.html">
           <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
           <i class="fa fa-envelope" aria-hidden="true"></i>
           </div>
           <span class="nav-link-text ms-1">Notification</span>
         </a>
       </li>
       <li class="nav-item">
         <a class="nav-link text-white " href="../pages/sign-in.html">
           <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
           <i class="fa fa-sign-out" aria-hidden="true"></i>
           </div>
           <span class="nav-link-text ms-1">Sign Out</span>
         </a>
       </li>
      
     </ul>
   </div>
 
 </aside>
 <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
     <div class="container-fluid py-1 px-3">
       <nav aria-label="breadcrumb">
         <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
           <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
           <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
         </ol>
         <h6 class="font-weight-bolder mb-0">Dashboard</h6>
       </nav>
       <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
         <div class="ms-md-auto pe-md-3 d-flex align-items-center">
           <div class="input-group input-group-outline">
             <label class="form-label">Type here...</label>
             <input type="text" class="form-control"/>
           </div>
         </div>
         <ul class="navbar-nav  justify-content-end">
           <li class="nav-item d-flex align-items-center">
             {/* <a class="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank" href="https://www.creative-tim.com/builder?ref=navbar-material-dashboard">Online Builder</a> */}
           </li>
          
           <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
             <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
               <div class="sidenav-toggler-inner">
                 <i class="sidenav-toggler-line"></i>
                 <i class="sidenav-toggler-line"></i>
                 <i class="sidenav-toggler-line"></i>
               </div>
             </a>
           </li>
           <li class="nav-item px-3 d-flex align-items-center">
             <a href="javascript:;" class="nav-link text-body p-0">
               <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
             </a>
           </li>
           <li class="nav-item dropdown pe-2 d-flex align-items-center">
             <a href="javascript:;" class="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
               <i class="fa fa-bell cursor-pointer"></i>
             </a>
          
           </li>
           <li class="nav-item d-flex align-items-center">
             <a href="../pages/sign-in.html" class="nav-link text-body font-weight-bold px-0">
             <i class="fa fa-sign-out" aria-hidden="true"></i>
            
             </a>
           </li>
         </ul>
       </div>
     </div>
   </nav>  
</> 
);
}
export default Dashboard;
