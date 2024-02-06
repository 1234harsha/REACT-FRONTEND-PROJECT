import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";

const users = [
  { username: "Akhil", password: "akhil@12", role: "student" },
  { username: "Faris", password: "faris@12", role: "student" },
  { username: "Sagar", password: "sagar@12", role: "student" },
  { username: "Harsha", password: "harsha@12", role: "student" },
  { username: "Gidheon", password: "gidheon@12", role: "student" }
];

const LoginUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");

  const Validate = (e) => {
    e.preventDefault();
    // Check if username and password are filled out
    if (!user.username || !user.password) {
      setErr("Please enter both username and password");
      return;
    }

    let validUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );

    if (validUser) {
      sessionStorage.setItem("uname", user.username);
      if (validUser.role === "student") {
        navigate("/student-dash");
      }
    } else {
      setErr("Invalid username or password");
    }
  };

  return (
    <>
      <div class="bg-img">
        <div class="content">
          <header>Login Form</header>
          <form onSubmit={Validate}>
            <div class="field">
              <span class="fa fa-user"></span>
              <input
                type="text"
                required
                placeholder="Email or Phone"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div class="field space">
              <span class="fa fa-lock"></span>
              <input
                type="password"
                class="pass-key"
                required
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <span class="show">SHOW</span>
            </div>
            <div class="pass">
              <a href="#">Forgot Password?</a>
            </div>
            <div class="field">
              <input type="submit" value="LOGIN" />
            </div>
          </form>
          <div class="error">{err}</div> {/* Display error message */}
          <div class="login">Or login with</div>
          <div class="links">
            <div class="facebook">
              <i class="fab fa-facebook-f"><span>Facebook</span></i>
            </div>
            <div class="instagram">
              <i class="fab fa-instagram"><span>Instagram</span></i>
            </div>
          </div>
          <div class="signup">Don't have account?
            <a href="#">Signup Now</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginUser;
