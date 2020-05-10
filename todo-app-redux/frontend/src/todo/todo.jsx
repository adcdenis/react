import React from "react"
import Header from "../template/header"
import TodoList from "./todoList"
import TodoForm from "./todoForm"

export default (props) => (
  <div>
    <Header name="Tarefas" small="Cadastro" />
    <TodoForm />
    <TodoList />
  </div>
)
