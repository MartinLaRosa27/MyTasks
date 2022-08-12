import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { NewProject } from "./NewProject.jsx";
import { Projects } from "./Projects.jsx";
import { Home } from "./Home.jsx";
import { UpdateProject } from "./UpdateProject.jsx";

export const NavBar = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid container">
          <NavLink className="navbar-brand" to="/">
            MyTasks
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  My Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/new-project">
                  New Project
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route
          path="*"
          element={
            <div className="container">
              <h1>ERROR 404</h1>
            </div>
          }
        />
        <Route
          path="/update-project/:name/:id"
          element={<UpdateProject />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
