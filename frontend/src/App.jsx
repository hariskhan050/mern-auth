import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/navbar/Navbar";
// import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" Component={Dashboard} />
          {/* <Route path="/dashboard" Component={Dashboard} /> */}
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </Router>
      <ToastContainer/>
      
    </>
  );
};

export default App;
