import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
import {IoIosAttach} from "react-icons/io"


const MessageTile = () => {
  return (
    <div className='MessageTile'>
        <form className='messsage-tile-form'> 
            <input type="text" className='message-tile-inp'
                placeholder='Type your question here'
            />
            <button className='attach-file-btn'>
                <IoIosAttach></IoIosAttach>
            </button>
            <button className='submit-btn' type="submit">
                <AiOutlineSend></AiOutlineSend>
            </button>
        </form>
    </div>
  )
}

export default MessageTile
