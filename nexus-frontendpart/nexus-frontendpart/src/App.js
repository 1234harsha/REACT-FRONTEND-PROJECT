import './App.css';
import Home from './Home/homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TakeExam from './Student/take-exam';
import ShowMarks from './Student/show-mark';
import StudentDash from './Student/student-dash';
import LoginUser from './Login/Login';
import RegistrationPage from './Login/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Homepage Route */}
          <Route path="/login" element={<LoginUser />} /> {/* Login Page Route */}
          <Route path="/register" element={<RegistrationPage/>} />
          <Route path="/student-dash" element={<StudentDash />}>
            <Route path="take-exam" element={<TakeExam />} />
            <Route path="show-mark" element={<ShowMarks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;