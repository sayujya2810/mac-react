import React from 'react'
import "../Styles/Card.css"
import Draggable from 'react-draggable'

const IntroCard = ({setOpen}) => {
  return (
    <Draggable>
      <div className='card-main'>
          <div className='card-nav'>
              <div onClick={() => setOpen(false)} id='close'>x</div>
              <div id='maximize'>o</div>
              <div id='minimize'>-</div>
          </div>
          <div className='content'>
                <h1 id='about-head'>About Me</h1>
                <p id='about-para'>Voluptate aute duis aute anim incididunt anim quis. Id pariatur eu incididunt ipsum sint proident et proident et enim elit incididunt. Esse ad quis et irure aliqua. Lorem anim ea nisi in aute fugiat. Non ut nulla est ut sunt ipsum sunt veniam labore cillum non duis elit ea.</p>
          </div>
      </div>
    </Draggable>
  )
}

export default IntroCard