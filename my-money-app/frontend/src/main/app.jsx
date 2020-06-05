import React from 'react'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/msg/msg'

export default (props) => (
  <div className='wrapper'>
    <Header />

    <div className='content-wrapper'>
      <Routes >
        <SideBar />
      </Routes>
    </div>
    <Footer />
    <Messages />

  </div>
)
