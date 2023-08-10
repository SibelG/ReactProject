import React from 'react'
import Topbar from '../../components/topbar/TopBar'
import './messenger.scss';
import Message from '../../components/message/Message';

export default function Messenger() {
  return (
    <>
    <Topbar/>
    <div className='messenger'>
        <div className="chatMenu">
            <div className='chatSearch'>
                <span>Search for friends</span>
                <hr/>
            </div>
            <div className='personList'>
                <div className='personListItem'>
                    <img className='personItemImg' src='assets/person/1.jpeg'/>
                    <span>Jhon Driscoll</span>
                </div>
                <div className='personListItem'>
                    <img className='personItemImg'src='assets/person/1.jpeg'/>
                    <span>Jhon Driscoll</span>
                </div>
                <div className='personListItem'>
                    <img className='personItemImg' src='assets/person/1.jpeg'/>
                    <span>Jhon Driscoll</span>
                </div>
                <div className='personListItem'>
                    <img className='personItemImg' src='assets/person/1.jpeg'/>
                    <span>Jhon Driscoll</span>
                </div>
            </div>
            
        </div>
        <div className="chatBox">
            <Message/>
        </div>
        <div className="chatOnline"></div>
    </div>
    </>
    
  )
}
