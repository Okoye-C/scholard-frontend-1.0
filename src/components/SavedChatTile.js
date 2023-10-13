import React from 'react'
import {LiaEditSolid} from "react-icons/lia";
import {BsFillBookmarkFill} from "react-icons/bs";
import {BiCopy} from "react-icons/bi";
import { Link } from 'react-router-dom';

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
        <Link to={"/scholard-frontend-1.0/"} className="view-source">
          View source
        </Link>
        <button className="copy">
          <BiCopy></BiCopy>
        </button>
      </div>
    </div>
  )
}

export default SavedChatTile


