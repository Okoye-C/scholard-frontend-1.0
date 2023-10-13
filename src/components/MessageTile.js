import React, { useContext, useState } from 'react'
import {AiOutlineSend} from "react-icons/ai"
import {IoIosAttach} from "react-icons/io"
import AppContext from '../context/AppContext'


const MessageTile = () => {

    const [currentMessage, setCurrentMessage] = useState("");
    const {currentMessages, setCurrentMessages} = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(false);
    const [blockSending, setBlockSending] = useState(false);
    const [error, setError] = useState(null);

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

    // const fetchResponse = async (message) => {
    //     setBlockSending(true)
    //     setIsLoading(true);
    //     try {
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${1 + Math.floor( (Math.random() * 499))}`);
    //         const data = await res.json();
    //         const aiResponse = data.body;
    //         setCurrentMessages([
    //             ...currentMessages,
    //             {
    //                 fromSelf: true,
    //                 msg: message,
    //             },
    //             {
    //                 fromSelf: false,
    //                 msg: aiResponse,
    //             }
    //         ]);
    //     } catch (error) {
    //         setIsLoading(false);
    //         setError("An error ocurred");
    //     }
    //     setIsLoading(false);
    //     setTimeout(() => {
    //         setError(null);
    //         setBlockSending(false);
    //     }, 2000);
    // }

  return (
    <div className='MessageTile'>
        {isLoading && 
            <div className='loading-tile'>
                Generating reponse <br />
                Please wait
            </div>
        }
        {error && 
            <div className='error-tile'>
                {error}
            </div>
        }
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
                disabled={blockSending}
                onClick={(e) => {
                    e.preventDefault();
                    if (currentMessage.length === 0) return;
                    const message = currentMessage;
                    handleSendMessage(e);
                    // fetchResponse(message);
                }}  
            >
                <AiOutlineSend></AiOutlineSend>
            </button>
        </form>
    </div>
  )
}

export default MessageTile
