import React from 'react'
import Sidebar from '../components/Sidebar'
import MessageTile from '../components/MessageTile'


const WelcomePage = () => {
  return (
    <div className='WelcomePage'>
        <Sidebar></Sidebar>
        <main className='welcome-page-main-section'>
            <h1 className='scholard-logo-large'>Scholard</h1>
            <h2 className='welcome-text-large'>Welcome to scholard</h2>
            <p className="info-text">
                Start asking a question and we'll answer it okneionvwo
            </p>
            <p className='learnmore-link'>learn more</p>
            <MessageTile></MessageTile>
        </main>
    </div>
  )
}

export default WelcomePage