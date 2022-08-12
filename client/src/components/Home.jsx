import React from "react";
import { Helmet } from "react-helmet";

export const Home = () => {
  return (
    <div className="container text-center home">
      <Helmet>
        <title>MyTasks</title>
      </Helmet>
      <h1>MyTasks</h1>
      <h3>List of your tasks</h3>
    </div>
  );
};
