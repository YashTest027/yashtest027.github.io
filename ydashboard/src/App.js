import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import './App.css'

function App() {
  return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
              <Link to="/" className="navbar-brand" >YDashboard</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                {/*<li className="nav-item"><a className="nav-link" href="#">Analytics</a></li>*/}
                <li className="nav-item">
                  <Link to="/events" className="nav-link">Application Logs</Link>
                </li>
                {/*<li className="nav-item"><a className="nav-link" href="#">Settings</a></li>*/}
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Events/>}/>
        </Routes>
      </Router>
  );
}

export default App;
