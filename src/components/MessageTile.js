import React, { useContext, useState } from 'react'
import {AiOutlineSend} from "react-icons/ai"
import {IoIosAttach} from "react-icons/io"
import AppContext from '../context/AppContext'


const MessageTile = () => {

    const [currentMessage, setCurrentMessage] = useState("");
    const {currentMessages, setCurrentMessages} = useContext(AppContext)

    const handleSendMessage = (e) => {
        e.preventDefault();
        if(currentMessage.length === 0) return;

        setCurrentMessages([
            ...currentMessages,
            {
                fromSelf: true,
                msg: currentMessage,
            }
        ]);
        setCurrentMessage("");
    }

    const fetchResponse = async (message) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments/256");
        const data = await res.json();
        const aiResponse = data.body;

        setCurrentMessages([
            ...currentMessages,
            {
                fromSelf: true,
                msg: message,
            },
            {
                fromSelf: false,
                msg: aiResponse,
            }
        ]);
    }

  return (
    <div className='MessageTile'>
        <form className='messsage-tile-form'> 
            <input type="text" className='message-tile-inp'
                placeholder='Type your question here'
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <button className='attach-file-btn'
                onClick={(e) => {
                    e.preventDefault();
                }}  
            >
                <IoIosAttach></IoIosAttach>
            </button>
            <button className='submit-btn' type="submit"
                onClick={(e) => {
                    const message = currentMessage;
                    handleSendMessage(e);
                    fetchResponse(message);
                }}  
            >
                <AiOutlineSend></AiOutlineSend>
            </button>
        </form>
    </div>
  )
}

export default MessageTile
