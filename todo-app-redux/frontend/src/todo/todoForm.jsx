import React from "react";
import Grid from "../template/grid";
import Button from "../template/button";

export default (props) => {
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      this.handleClear();
    }
  };

  return (
    <div role="form" className="todoForm">
      <Grid xs="12" sm="9" md="10">
        <input
          className="form-control"
          placeholder="digite aqui uma tarefa"
          onChange={props.handleChange}
          value={props.description}
          onKeyUp={keyHandler}
        />
      </Grid>
      <Grid xs="12" sm="3" md="2">
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
      </Grid>
    </div>
  );
};
