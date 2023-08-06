import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import LoginCompany from "./pages/logincompany/LoginCompany";
export const baseUrl = "http://localhost:5500/api/"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/companylogin" element={<LoginCompany />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
