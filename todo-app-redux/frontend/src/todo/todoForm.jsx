import React from "react";
import Grid from "../template/grid";
import Button from "../template/button";
import { connect } from "react-redux";

const TodoForm = (props) => {
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      this.handleClear();
    }
  };

  return (
    <div role="form" className="todoForm">
      <table className="table">
        <tr>
          <td>
            <input
              className="form-control"
              placeholder="digite aqui uma tarefa"
              onChange={props.handleChange}
              value={props.description}
              onKeyUp={keyHandler}
            />
          </td>
          <td className="tableActions">
            <Button
              icon="search"
              rendered={true}
              styled="info"
              handleAction={props.handleSearch}
            />
            <Button
              icon="plus"
              rendered={true}
              styled="primary"
              handleAction={props.handleAdd}
            />
            <Button
              icon="close"
              rendered={true}
              styled="default"
              handleAction={props.handleClear}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  description: state.todo.description,
});

export default connect(mapStateToProps)(TodoForm);
