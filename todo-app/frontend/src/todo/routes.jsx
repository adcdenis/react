import React from 'react'
import Todo from './todo'
import About from '../about/about'
import { HashRouter, Route, Redirect } from 'react-router-dom';
  

export default props => (

    <HashRouter>
        <Route path="/about" component={About} />
        <Route path="/todos" component={Todo} /> 
        <Redirect from='*' to='/todos' />      
    </HashRouter>   

)