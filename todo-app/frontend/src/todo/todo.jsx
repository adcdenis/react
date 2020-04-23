import React from 'react'
import Header from '../template/header'
import TodoList from './todoList'
import TodoForm from './todoForm'

export default class Todo extends React.Component {

    render() {
        return (
            <div>
               <Header name='Tarefas' small='Cadastro'/>               
               <TodoForm/>
               <TodoList/>
            </div>
        )
    }
}