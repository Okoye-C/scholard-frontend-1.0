import React, { useState, useContext, useRef, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import MessageTile from '../components/MessageTile'
import AppContext from '../context/AppContext'
import WelcomePageMessageTile from '../components/WelcomePageMessageTile'


const WelcomePage = () => {
  const bottomRef = useRef();
  const {currentMessages, setCurrentMessages} = useContext(AppContext);

  const handleSendMessage = () => {

  }

  useEffect(() => {
    bottomRef.current.scrollIntoView();
  }, [currentMessages])
  return (
    <div className='WelcomePage'>
        <Sidebar></Sidebar>
        <main className='welcome-page-main-section'>
            {currentMessages.map((message) => (
              <WelcomePageMessageTile message={message}></WelcomePageMessageTile>
            )) 
            }
            <div className="cont" ref={bottomRef}></div>
        </main>
        <MessageTile></MessageTile>
    </div>
  )
}

export default WelcomePage
