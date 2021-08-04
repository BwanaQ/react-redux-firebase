import React from "react";

const Task = () => {
  return (
    <>
      <tr>
        <th scope="row">Learn React</th>
        <td>4/08/2021</td>
        <td>
          <span className="material-icons" style={{ cursor: "pointer" }}>
            check_circle
          </span>
        </td>
        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
          >
            delete
          </span>
        </td>
      </tr>
    </>
  );
};

export default Task;
