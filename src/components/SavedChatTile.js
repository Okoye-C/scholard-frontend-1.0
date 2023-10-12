import React from 'react'
import {LiaEditSolid} from "react-icons/lia";
import {BsFillBookmarkFill} from "react-icons/bs";
import {BiCopy} from "react-icons/bi";

const SavedChatTile = ({question, dataAsked,textContent}) => {
  return (
    <div className='SavedChatTile'>
      <div className="upper-buttons">
        <button className="edit">
          <LiaEditSolid></LiaEditSolid>
        </button>
        <button className="save">
          <BsFillBookmarkFill></BsFillBookmarkFill>
        </button>
      </div>
      <p className="data-asked">{dataAsked}</p>
      <p className="question">{question}</p>
      <p className="text-content">{textContent}</p>
      <div className="lower-buttons">
        <a href="#" className="view-source">
          View source of information
        </a>
        <button className="copy">
          <BiCopy></BiCopy>
        </button>
      </div>
    </div>
  )
}

export default SavedChatTile


