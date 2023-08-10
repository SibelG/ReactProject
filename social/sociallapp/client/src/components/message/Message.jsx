import React from 'react'
import './message.scss'

export default function Message({own}) {
  return (
    <div className='message'>
        <div className="messageTop">
            <div className='messageItem'>
            <div className='meessageItems'>
                <img className='messageItemImg' src="assets/person/1.jpeg" alt=""/>
                <span className='textItem'>On My One ONE ONE OENE On My One ONE ONE OENE
                On My One ONE ONE OENE
                On My One ONE ONE OENE
                On My One ONE ONE OENE
                On My One ONE ONE OENE
                </span>
            </div>
            <span>2 days ago</span>
            </div>
        </div>
        <div className='messageBottom'>
            <textarea className="textMessageInput" placeholder='write something...'></textarea>
            <button className='chatSubmitBtn'>Send</button>
        </div>
    </div>
  )
}
