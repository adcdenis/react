import React from 'react'
import About from '../template/about'
import Header from '../template/header'

export default class Todo extends React.Component {

    render() {
        return (
            <div>
                <About/>
                <Header/>
            </div>
        )
    }
}