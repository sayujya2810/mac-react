import React from 'react'
import "../Styles/Card.css"
import Draggable from 'react-draggable'
import {AiFillLinkedin, AiFillInstagram, AiOutlineWhatsApp} from "react-icons/ai"
import {BiLogoGmail} from "react-icons/bi"
const ContactCard = ({setOpen}) => {
  return (
    <Draggable>
      <div className='card-main'>
          <div className='card-nav'>
              <div onClick={() => setOpen(false)} id='close'>x</div>
              <div id='maximize'>o</div>
              <div id='minimize'>-</div>
          </div>
          <div className='content content-center'>
                <h1 id='about-head'>Contact Me</h1>
                <ul id='about-para' className='links' style={{listStyle:"none"}}>
                    <li><AiFillLinkedin size={"30px"} /></li>
                    <li><BiLogoGmail size={"30px"} /></li>
                    <li><AiOutlineWhatsApp size={"30px"} /></li>
                    <li><AiFillInstagram size={"30px"} /></li>
                </ul>
          </div>
      </div>
    </Draggable>
  )
}

export default ContactCard