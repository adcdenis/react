import React from "react";
import Header from "../template/header";
import TodoList from "./todoList";
import TodoForm from "./todoForm";
import axios from "axios";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleConcluido = this.handleConcluido.bind(this);
    this.handleNaoConcluido = this.handleNaoConcluido.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = { description: "", list: [] };
    this.refresh();
  }

  handleAdd() {
    console.log("ADD");
    console.log(this.state.description);
    const descricao = this.state.description;
    axios.post(URL, { descricao }).then((result) => this.refresh());
    //this.refresh()
  }

  handleChange(e) {
    console.log("HANDLE CHANGE");
    //const eTarget = e.target.value;
    //console.log(eTarget.value);
    this.setState({ ...this.state, description: e.target.value });
  }

  handleRemove(todo) {
    console.log("REMOVE");
    console.log(`${URL}/?${todo._id}`);
    axios
      .delete(`${URL}/${todo._id}`)
      .then((result) => this.refresh(this.state.description));
    //this.refresh()
  }

  handleConcluido(todo) {
    console.log("CONCLUIDO");
    console.log(`${URL}/?${todo._id}`);
    axios
      .put(`${URL}/${todo._id}`, { feito: true })
      .then((result) => this.refresh(this.state.description));
    //this.refresh()
  }

  handleNaoConcluido(todo) {
    console.log("NÃO CONCLUIDO");
    console.log(`${URL}/?${todo._id}`);
    axios
      .put(`${URL}/${todo._id}`, { feito: false })
      .then((result) => this.refresh(this.state.description));
    //this.refresh()
  }

  handleSearch() {
    console.log("SEARCH");
    this.refresh(this.state.description);
  }

  handleClear() {
    console.log("CLEAR");
    this.refresh();
    //this.setState({description: ''})
  }

  refresh(description = "") {
    const regex = description ? `&descricao__regex=/${description}/` : "";

    axios.get(`${URL}?sort=-dataCriacao${regex}`).then((result) => {
      this.setState({ ...this.state, description, list: result.data });
      console.log(result.data);
    });
  }

  render() {
    return (
      <div>
        <Header name="Tarefas" small="Cadastro" />
        <TodoForm          
          handleChange={this.handleChange}         
          handleClear={this.handleClear}          
        />
        <TodoList          
          handleRemove={this.handleRemove}
          handleConcluido={this.handleConcluido}
          handleNaoConcluido={this.handleNaoConcluido}
        />
      </div>
    );
  }
}
