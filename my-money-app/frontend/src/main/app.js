import React from 'react'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/msg/msg'
import { BrowserRouter as Router } from 'react-router-dom'

export default (props) => (
  <Router>
    <div className='wrapper'>
      <Header />
      <SideBar />
      <div className='content-wrapper'>
        <Routes />
      </div>
      <Footer />
      <Messages />
    </div>
  </Router>
)
