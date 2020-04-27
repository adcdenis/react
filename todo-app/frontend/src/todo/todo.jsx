import React from 'react'
import Header from '../template/header'
import TodoList from './todoList'
import TodoForm from './todoForm'

export default class Todo extends React.Component {

    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = { description : '' , list : [] }
    }

    handleAdd() {
        console.log('ADD') 
        console.log(this.state.description)    
    }

    handleChange(e) {
        console.log('HANDLE CHANGE')  
        //const eTarget = e.target.value;
        //console.log(eTarget.value);      
        this.setState( {...this.state , description : e.target.value} )
    }

    render() {
        return (
            <div>
               <Header name='Tarefas' small='Cadastro'/>               
               <TodoForm handleAdd={this.handleAdd} handleChange={this.handleChange} description={this.state.description} />
               <TodoList/>
            </div>
        )
    }
}