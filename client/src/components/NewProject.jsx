import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

export const NewProject = () => {
  let name = useRef();

  const saveProject = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`http://${process.env.REACT_APP_BACKEND_URL}/add-project`, {
          name: name.current.value,
        })
        .then((res) => {
          alert(res.data);
        });
    } catch (e) {
      alert("Could not save the project");
    }
  };

  return (
    <div className="newproject container">
      <Helmet>
        <title>New Project | MyTasks</title>
      </Helmet>
      <form method="POST" onSubmit={(e) => saveProject(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Project Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            ref={name}
            aria-describedby="nameHelp"
            required
          ></input>
          <div id="nameHelp" className="form-text">
            The name of the project will be able to be modified later.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Project
        </button>
      </form>
    </div>
  );
};
