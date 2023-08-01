import React from 'react'
import "../Styles/Appbar.css"
const Appbar = ({open, setOpen}) => {
  return (
    <div id='appbar-main'>
        <img alt="app icon" className='apps' src='../Resources/Clock_2x.png' />
        <img alt="app icon" className='apps' src='../Resources/Mail_2x.png' onClick={() => setOpen(!open)} />
        <img alt="app icon" className='apps' src='../Resources/Phone_2x.png' />
        <img alt="app icon" className='apps' src='../Resources/Photos_2x.png' />
        <img alt="app icon" className='apps' src='../Resources/Podcast_2x.png' />
        <img alt="app icon" className='apps' src='../Resources/Settings_2x.png' />
        <img alt="app icon" className='apps' src='../Resources/appstore.png' />
        <img alt="app icon" style={{backgroundColor:"white", height:"45px", padding:"5px", borderRadius:"10px"}} className='app'  src='../Resources/Vscode_2x.png' />
        <img alt="app icon" className='apps' src='../Resources/Spotify_2x.png' />
        <img alt="app icon" className='apps' src='../Resources/Photoshop_2x.png' />
        <img alt="app icon" style={{borderRadius:"10px"}} className='apps' src='../Resources/Outlook_2x.png' />
        <img alt="app icon" style={{borderRadius:"10px"}} className='apps' src='../Resources/Onedrive_2x.png' />
        <img alt="app icon" className='apps' src='../Resources/Powerbi_2x.png' />
        <div style={{borderLeft:"solid white 1px", height:"40px", marginLeft:".1rem"}} >.</div>
        <img alt="app icon"  className='apps' src='../Resources/Files_2x.png' />
    </div>
  )
}

export default Appbar