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
        this.state = { description : '' , list : [] }
        this.refresh()
    }

    handleAdd() {
        console.log('ADD') 
        console.log(this.state.description)   
        //const descricao = this.state.description
        this.refresh()
        //axios.post(URL, {descricao}).then(result => this.refresh())       
    }

    handleChange(e) {
        console.log('HANDLE CHANGE')  
        //const eTarget = e.target.value;
        //console.log(eTarget.value);      
        this.setState( {...this.state , description : e.target.value} )
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
               <TodoList list={this.state.list}/>
            </div>
        )
    }
}