import React, { Component } from "react";
import AddTask from "../tasks/AddTask";
import Tasks from "../tasks/Tasks";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <h3>Dashboard</h3>
        <AddTask />
        <Tasks />
      </>
    );
  }
}
