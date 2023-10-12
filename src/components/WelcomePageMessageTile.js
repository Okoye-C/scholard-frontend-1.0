import React from 'react'
import {LiaEditSolid} from "react-icons/lia";
import {BsFillBookmarkFill} from "react-icons/bs";
import {BiCopy} from "react-icons/bi";

const WelcomePageMessageTile = ({message}) => {
  return (
    <div className="welcomepage-message-tile"
        style={{
                backgroundColor: message.fromSelf ? "" : "rgb(189, 189, 189)",
            }}
        >
        <div className="upper-buttons">
        {message.fromSelf && 
            <button className="edit">
                <LiaEditSolid></LiaEditSolid>
            </button>
        }
        <button className="save" 
            style={{
                color: message.fromSelf ? "" : "black",
            }}
        >
            <BsFillBookmarkFill></BsFillBookmarkFill>
        </button>
        </div>
        <div className="text-content"
            style={{
                color: message.fromSelf ? "" : "black",
            }}
        >
        {message.msg}
        </div>
        <div className="lower-buttons">
        {message.fromSelf && 
            <a href="#" className="view-source">
                View source of information
            </a>
        }
        {message.fromSelf && 
            <button className='regenerate-btn'>
                Regenerate response
            </button>
        }
        <button className="copy"
            style={{
                color: message.fromSelf ? "" : "black",
            }}
        >
            <BiCopy></BiCopy>
        </button>
        </div>
    </div>
  )
}

export default WelcomePageMessageTile