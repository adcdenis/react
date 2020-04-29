import React from 'react'
import Header from '../template/header'
import TodoList from './todoList'
import TodoForm from './todoForm'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends React.Component {

    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.state = { description : '' , list : [] }
        this.refresh()
    }

    handleAdd() {
        console.log('ADD') 
        console.log(this.state.description)   
        const descricao = this.state.description
        axios.post(URL, {descricao}).then(result => this.refresh())   
        //this.refresh()       
    }

    handleChange(e) {
        console.log('HANDLE CHANGE')  
        //const eTarget = e.target.value;
        //console.log(eTarget.value);      
        this.setState( {...this.state , description : e.target.value} )
    }

    handleRemove(todo) {
        console.log('REMOVE')  
        console.log(`${URL}/?${todo._id}`);  
        axios.delete(`${URL}/${todo._id}`).then(result => this.refresh())   
        //this.refresh()    
    }

    refresh() {
        axios.get(`${URL}?sort=-dataCriacao`).then(
            result => {this.setState({...this.state, description : '', list : result.data}) 
            console.log(result.data)}
        )
        
    }

    render() {
        return (
            <div>
               <Header name='Tarefas' small='Cadastro'/>               
               <TodoForm handleAdd={this.handleAdd} handleChange={this.handleChange} description={this.state.description} />
               <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
            </div>
        )
    }
}