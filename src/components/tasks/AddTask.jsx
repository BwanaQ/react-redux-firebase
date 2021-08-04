import React, { Component } from "react";

export default class AddTask extends Component {
  state = {
    task: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: "30px" }}
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="task">Add a Task</label>
            <input
              type="text"
              className="form-control"
              id="task"
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            Add Task
          </button>
        </form>
      </>
    );
  }
}
