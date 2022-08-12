const express = require("express");
const router = express.Router();
const passport = require("passport");
const Project = require("./models/Project.js");
require("dotenv").config({ path: "variables.env" });

module.exports = () => {
  router.get("/all-projects", async (req, res) => {
    const projects = await Project.findAll();
    res.send(projects);
  });

  router.post("/add-project", async (req, res) => {
    const { name } = req.body;
    try {
      await Project.create({
        name,
      });
      res.send("Project saved successfully");
    } catch (e) {
      res.send(e.errors[0].message);
    }
  });

  router.patch("/update-project", async (req, res) => {
    const { name, id } = req.body;
    try {
      await Project.update({ name }, { where: { id: id } });
      res.send("Project name updated successfully");
    } catch (e) {
      res.send(e.errors[0].message);
    }
  });

  router.delete("/delete-project/:id", async (req, res) => {
    try {
      await Project.destroy({ where: { id: req.params.id } });
      res.send("Project removed successfully");
    } catch (e) {
      res.send("Could not delete the project");
    }
  });
  return router;
};
