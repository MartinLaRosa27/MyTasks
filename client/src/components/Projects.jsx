import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`http://${process.env.REACT_APP_BACKEND_URL}/all-projects`)
        .then((res) => {
          setProjects(res.data);
        });
    } catch (e) {
      setProjects([]);
    }
  }, []);

  return (
    <div className="proyectos">
      <Helmet>
        <title>My Projects | MyTasks</title>
      </Helmet>
      {projects.length >= 1 ? (
        <ul className="list-group container">
          {projects.map((project, i) => {
            return (
              <li key={i} className="list-group-item">
                <NavLink to={`/update-project/+${project.name}/${project.id}`}>
                  {project.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3 className="container text-center">No projects created yet</h3>
      )}
    </div>
  );
};
