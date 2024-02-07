import React, { useState } from 'react';
import "./login.css";



import { Link } from 'react-router-dom';
const RegistrationPage = () => {
  const [user, setUser] = useState({ 
    username: "", 
    password: "", 
    confirmPassword: "", 
    email: "", 
    phone: "", 
    userType: "", 
    studentID: "", 
    classID: "", 
    teacherID: "", 
    subjectID: "" 
  });
  const [err, setErr] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    // Check if all required fields are filled out
    if (!user.username || !user.password || !user.confirmPassword || !user.email || !user.phone || !user.userType) {
      setErr("Please fill out all required fields");
      return;
    }

    // Check if passwords match
    if (user.password !== user.confirmPassword) {
      setErr("Passwords do not match");
      return;
    }

const inputValue = [];
for(const i in user){
  if(user[i]){
    inputValue.push('$(i): $(user[i])');
  }
  
}
console.log(inputValue);

    // Reset form fields
    setUser({ 
      username: "", 
      password: "", 
      confirmPassword: "", 
      email: "", 
      phone: "", 
      userType: "", 
      studentID: "", 
      classID: "", 
      teacherID: "", 
      subjectID: "" 
    });
    setErr("Registration successful");
  };

  return (
    <>
    	<header id="header" style={{ position: 'fixed', width: '100%', top: '0', zIndex: '1000', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff' }}>
    <div id="home">
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                           
                        </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                        <a href="tel:+913 012 3654 896"><span className="lnr lnr-phone-handset"></span> <span className="text" style={{ color: '#fff' }}>+913 012 3654 896</span></a>
                        <a href="mailto:nexus@university.com"><span className="lnr lnr-envelope"></span> <span className="text" style={{ color: '#fff' }}>nexus@university.com</span></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container main-menu">
            <div className="row align-items-center justify-content-between d-flex">
                <div id="logo">
                    <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li><a href="index.html" style={{ color: '#fff' }}>Home</a></li>
                        <li><a href="about.html" style={{ color: '#fff' }}>About</a></li>
                        <li><a href="courses.html" style={{ color: '#fff' }}>Courses</a></li>
                        <li><a href="events.html" style={{ color: '#fff' }}>Events</a></li>
                        <li><a href="gallery.html" style={{ color: '#fff' }}>Gallery</a></li>
                        <li><Link to="/login" style={{ color: '#fff' }}>Login</Link></li>
                        <li><Link to="/register" style={{ color: '#fff' }}>Register</Link></li>
                     
                        
                        <li><a href="contact.html" style={{ color: '#fff' }}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
      <div className="bg-img">
        <div className="content">
          <header>Registration Form</header>
          <form onSubmit={handleRegistration}>
            <div className="field">
              <span className="fa fa-user"></span>
              <input
                type="text"
                required
                placeholder="Enter Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="field">
              <span className="fa fa-envelope"></span>
              <input
                type="email"
                required
                placeholder="Enter Email Id"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="field">
              <span className="fa fa-phone"></span>
              <input
                type="tel"
                required
                placeholder="Enter Mobile Number"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>
            <div className="field">
              <span className="fa fa-lock"></span>
              <input
                type="password"
                className="pass-key"
                required
                placeholder="Enter Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <span className="show">SHOW</span>
            </div>
            <div className="field">
              <span className="fa fa-lock"></span>
              <input
                type="password"
                className="pass-key"
                required
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              />
              <span className="show">SHOW</span>
            </div>
          
            <div className="field">
            <span className="	fas fa-users"></span>
            <table>
              <tr>
                <td>
                <input 
                  type="radio" 
                  name="userType" 
                  value="student" 
                  onChange={(e) => setUser({ ...user, userType: e.target.value })}
                />
              

                </td>
                <td>
                  &nbsp; 
                <label style={{color:"red", fontWeight:"bold"}}>
                Student
              </label>

                </td>
                &nbsp;     &nbsp; 
                <td>
              
            
                <input 
                  type="radio" 
                  name="userType" 
                  value="teacher" 
                  onChange={(e) => setUser({ ...user, userType: e.target.value })}
                />
                </td>
                <td>
                &nbsp; 
                <label style={{color:"red", fontWeight:"bold"}}>
                   Teacher
              </label>
               
                </td>
              </tr>
            </table>
          
               
             
              
             
            </div>
            {user.userType === "student" && (
              <>
                <div className="field">
                <span className="fas fa-user-alt"></span>
                  <input
                    type="text"
                    placeholder="Enter Student ID"
                    value={user.studentID}
                    onChange={(e) => setUser({ ...user, studentID: e.target.value })}
                  />
                </div>
                <div className="field">
                <span className="fas fa-user-alt"></span>
                  <input
                    type="text"
                    placeholder="Enter Class ID"
                    value={user.classID}
                    onChange={(e) => setUser({ ...user, classID: e.target.value })}
                  />
                </div>
              </>
            )}
            {user.userType === "teacher" && (
              <>
                <div className="field">
                <span className="	fas fa-user-alt"></span>
                  <input
                    type="text"
                    placeholder="Enter Teacher ID"
                    value={user.teacherID}
                    onChange={(e) => setUser({ ...user, teacherID: e.target.value })}
                  />
                </div>
                <div className="field">
                <span className="	fas fa-user-alt"></span>
                  <input
                    type="text"
                    placeholder="Enter Subject ID"
                    value={user.subjectID}
                    onChange={(e) => setUser({ ...user, subjectID: e.target.value })}
                  />
                </div>
              </>
            )}
            <div className="error">{err}</div>
            <div className="field">
              <input type="submit" value="REGISTER" />
            </div>
          </form>
          <div className="login">Already have an account? <a href="#">Login</a></div>
          <div className="login">Or register with</div>
          <div className="links">
            <div className="facebook">
              <i className="fab fa-facebook-f"><span>Facebook</span></i>
            </div>
            <div className="instagram">
              <i className="fab fa-instagram"><span>Instagram</span></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
