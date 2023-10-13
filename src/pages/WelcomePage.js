import React, { useState, useContext, useRef, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import MessageTile from '../components/MessageTile'
import AppContext from '../context/AppContext'
import WelcomePageMessageTile from '../components/WelcomePageMessageTile'


const WelcomePage = () => {
  const bottomRef = useRef();
  const {currentMessages} = useContext(AppContext);
  const [usedList, setUsedList] = useState(currentMessages.toReversed());

  useEffect(() => {
    // bottomRef.current.scrollIntoView();
    setUsedList(currentMessages.toReversed());
  }, [currentMessages])
  return (
    <div className='WelcomePage'>
        <Sidebar></Sidebar>
        <h2>
          File name
        </h2>
        <main className='welcome-page-main-section'>
            {currentMessages.map((message) => (
              <WelcomePageMessageTile 
                key={Math.random()}
                message={message}
              ></WelcomePageMessageTile>
            )) 
            }
            <div className="cont" ref={bottomRef}></div>
        </main>
        <MessageTile></MessageTile>
    </div>
  )
}

export default WelcomePage


