import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from './pages/Navbar';
import Results from './components/Results';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App