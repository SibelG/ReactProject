import React from 'react'
import './contact.scss'
import { Button } from '@mui/material'

export default function Contact() {
  return (
    <div className='contact'>
        <h1># CONTACT US</h1>
        <div className="container">
        
    <form method='POST'>
    <h3>Contact Us</h3>
        <input id='name'
        name='name'
        type='text'
        placeholder='Enter your Name'/>

          <input id='email'
        name='email'
        type='email'
        placeholder='Enter your Subject'/>
          <input id='subject'
        name='subject'
        type='text'
        placeholder='joe@example.com'/>
          <textarea id='message'
        name='message'
        type='text'
        placeholder='Your message'/>

        <Button className="send"  type="submit">Send</Button>

    </form>

</div>
</div>
  )
}

