import React from 'react'
import {Router, Route, Redirect} from 'react-router'
import { HashRouter } from 'react-router-dom';
import Todo from './todo'
import About from '../about/about'

export default props => (

    <HashRouter>
        <Route path='/todos' component={Todo}/>
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/todos'/>
    </HashRouter>

)