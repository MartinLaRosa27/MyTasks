import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

export const UpdateProject = () => {
  const { name, id } = useParams();
  const newName = useRef();

  const updateProject = async (e) => {
    e.preventDefault();
    try {
      await axios
        .patch(`http://${process.env.REACT_APP_BACKEND_URL}/update-project`, {
          id: id,
          name: newName.current.value,
        })
        .then((res) => {
          alert(res.data);
        });
    } catch (e) {
      alert("Could not update the project name");
    }
  };

  const deleteProject = async (e) => {
    e.preventDefault();
    try {
      await axios
        .delete(
          `http://${process.env.REACT_APP_BACKEND_URL}/delete-project/${id}`
        )
        .then((res) => {
          alert(res.data);
        });
    } catch (e) {
      alert("Could not delete the project");
    }
  };

  return (
    <div className="container update-project">
      <Helmet>
        <title>{name} | MyTasks</title>
      </Helmet>
      <form onSubmit={(e) => updateProject(e)} method="POST">
        <div className="mb-3">
          <label htmlFor="nameUpdate" className="form-label">
            Update Project Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="nameUpdate"
            name="name"
            placeholder={name}
            ref={newName}
            required
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
      <form onSubmit={(e) => deleteProject(e)} method="POST">
        <button type="submit" className="btn btn-danger">
          Delete Project
        </button>
      </form>
    </div>
  );
};
