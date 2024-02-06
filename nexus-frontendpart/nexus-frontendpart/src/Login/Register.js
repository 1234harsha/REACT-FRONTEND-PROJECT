import React, { useState } from 'react';
import "./login.css";

const RegistrationPage = () => {
  const [user, setUser] = useState({ username: "", password: "", confirmPassword: "" });
  const [err, setErr] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    // Check if username and password are filled out
    if (!user.username || !user.password || !user.confirmPassword) {
      setErr("Please fill out all fields");
      return;
    }

    // Check if passwords match
    if (user.password !== user.confirmPassword) {
      setErr("Passwords do not match");
      return;
    }

    // Additional registration logic (e.g., API call to register user)

    // Reset form fields
    setUser({ username: "", password: "", confirmPassword: "" });
    setErr("Registration successful");
  };

  return (
    <>
      <div className="bg-img">
        <div className="content">
          <header>Registration Form</header>
          <form onSubmit={handleRegistration}>
            <div className="field">
              <span className="fa fa-user"></span>
              <input
                type="text"
                required
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="field space">
              <span className="fa fa-lock"></span>
              <input
                type="password"
                className="pass-key"
                required
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <span className="show">SHOW</span>
            </div>
            <div className="field space">
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
            <div className="error">{err}</div> {/* Display error message */}
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
